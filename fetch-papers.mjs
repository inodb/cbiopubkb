#!/usr/bin/env node
// fetch-papers.mjs
// Downloads full-text markdown for all cBioPortal study papers via PMC/defuddle
//
// Usage:
//   node fetch-papers.mjs              # fetch all missing papers
//   node fetch-papers.mjs --dry-run    # show what would be fetched
//   node fetch-papers.mjs --limit 10   # fetch only first N

import { execSync } from 'child_process';
import { existsSync, writeFileSync, readFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const RAW_DIR = join(__dirname, 'raw');
const LOG_FILE = join(__dirname, 'fetch-papers.log.json');

const DRY_RUN = process.argv.includes('--dry-run');
const LIMIT_ARG = process.argv.indexOf('--limit');
const LIMIT = LIMIT_ARG !== -1 ? parseInt(process.argv[LIMIT_ARG + 1]) : Infinity;
const DELAY_MS = 2000; // be polite to NCBI

// ─── helpers ──────────────────────────────────────────────────────────────────

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

function sanitizeFilename(title, pmid) {
  const clean = title
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 120);
  return `${clean} (PMID${pmid}).md`;
}

// ─── 1. Fetch all studies from cBioPortal ────────────────────────────────────

async function fetchCbioportalPmids() {
  console.log('Fetching cBioPortal studies...');
  const res = await fetch('https://www.cbioportal.org/api/studies?pageSize=1000&projection=DETAILED');
  const studies = await res.json();

  const pmidToStudies = {};
  for (const s of studies) {
    if (!s.pmid?.trim()) continue;
    for (const pmid of s.pmid.split(',').map(p => p.trim()).filter(Boolean)) {
      if (!pmidToStudies[pmid]) pmidToStudies[pmid] = [];
      pmidToStudies[pmid].push(s.studyId);
    }
  }

  const unique = Object.keys(pmidToStudies);
  console.log(`Found ${studies.length} studies, ${unique.length} unique PMIDs`);
  return { pmidToStudies, uniquePmids: unique };
}

// ─── 2. Fetch metadata + PMC ID via NCBI eutils ──────────────────────────────

async function fetchPmidMeta(pmids) {
  console.log(`Fetching metadata for ${pmids.length} PMIDs from NCBI...`);
  const chunkSize = 100;
  const results = {};
  const pmcMap = {};

  for (let i = 0; i < pmids.length; i += chunkSize) {
    const chunk = pmids.slice(i, i + chunkSize);
    const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${chunk.join(',')}&retmode=json`;
    const res = await fetch(url);
    const json = await res.json();
    for (const [id, doc] of Object.entries(json.result || {})) {
      if (id === 'uids') continue;
      results[id] = {
        title: doc.title || '',
        journal: doc.source || '',
        year: doc.pubdate?.slice(0, 4) || '',
        authors: (doc.authors || []).slice(0, 3).map(a => a.name),
      };
      // Extract PMC ID from articleids — no elink needed
      const pmcEntry = (doc.articleids || []).find(a => a.idtype === 'pmc');
      if (pmcEntry?.value) {
        pmcMap[id] = pmcEntry.value.replace('PMC', '');
      }
    }
    process.stdout.write(`  fetched metadata ${Math.min(i + chunkSize, pmids.length)}/${pmids.length}\r`);
    await sleep(400);
  }
  console.log('');

  return { meta: results, pmcMap };
}

// ─── 3. Run defuddle on a URL ─────────────────────────────────────────────────

function runDefuddle(url, outputPath) {
  try {
    execSync(`npx --yes defuddle parse "${url}" --markdown --output "${outputPath}"`, {
      stdio: 'pipe',
      timeout: 60000,
    });
    return true;
  } catch (e) {
    return false;
  }
}

// ─── 4. Prepend YAML frontmatter ─────────────────────────────────────────────

function addFrontmatter(filePath, { pmid, studyIds, title, journal, year, authors, url }) {
  const existing = readFileSync(filePath, 'utf8');
  const fm = `---
title: ${JSON.stringify(title)}
pmid: "${pmid}"
cbioportal_studies: ${JSON.stringify(studyIds)}
journal: ${JSON.stringify(journal)}
year: "${year}"
authors: ${JSON.stringify(authors)}
source: "${url}"
fetched: "${new Date().toISOString().slice(0, 10)}"
tags:
  - clippings
---

`;
  writeFileSync(filePath, fm + existing);
}

// ─── main ─────────────────────────────────────────────────────────────────────

async function main() {
  mkdirSync(RAW_DIR, { recursive: true });

  // Load existing log to skip already-fetched papers
  const log = existsSync(LOG_FILE) ? JSON.parse(readFileSync(LOG_FILE, 'utf8')) : {};

  const { pmidToStudies, uniquePmids } = await fetchCbioportalPmids();
  const toFetch = uniquePmids.filter(pmid => !log[pmid]?.status || log[pmid].status === 'error');

  console.log(`\n${toFetch.length} PMIDs to fetch (${uniquePmids.length - toFetch.length} already done)\n`);

  const { meta, pmcMap } = await fetchPmidMeta(toFetch);

  let count = 0;
  for (const pmid of toFetch) {
    if (count >= LIMIT) break;

    const info = meta[pmid] || {};
    const pmcid = pmcMap[pmid];
    const studyIds = pmidToStudies[pmid] || [];
    const title = info.title?.replace(/<[^>]+>/g, '') || `Paper PMID ${pmid}`;

    if (!pmcid) {
      console.log(`[ skip ] PMID:${pmid} — no PMC ID, skipping (paywalled)`);
      log[pmid] = { status: 'no-pmc' };
      writeFileSync(LOG_FILE, JSON.stringify(log, null, 2));
      continue;
    }

    const url = `https://www.ncbi.nlm.nih.gov/pmc/articles/PMC${pmcid}/`;
    const filename = sanitizeFilename(title, pmid);
    const outputPath = join(RAW_DIR, filename);

    console.log(`[${count + 1}/${toFetch.length}] PMID:${pmid} | PMC${pmcid} | ${title.slice(0, 70)}...`);

    if (DRY_RUN) {
      console.log(`  → would save: ${filename} (PMC${pmcid})\n`);
      count++;
      continue;
    }

    if (existsSync(outputPath)) {
      console.log(`  → already exists, skipping\n`);
      log[pmid] = { status: 'done', filename, url, source };
      count++;
      continue;
    }

    const ok = runDefuddle(url, outputPath);
    if (ok) {
      addFrontmatter(outputPath, { pmid, studyIds, title, journal: info.journal, year: info.year, authors: info.authors || [], url });
      console.log(`  ✓ saved ${filename}\n`);
      log[pmid] = { status: 'done', filename, url };
    } else {
      console.log(`  ✗ defuddle failed (${url})\n`);
      log[pmid] = { status: 'error', url };
    }

    writeFileSync(LOG_FILE, JSON.stringify(log, null, 2));
    await sleep(DELAY_MS);
    count++;
  }

  writeFileSync(LOG_FILE, JSON.stringify(log, null, 2));

  const done = Object.values(log).filter(v => v.status === 'done').length;
  const errors = Object.values(log).filter(v => v.status === 'error').length;
  console.log(`\nDone. ${done} fetched, ${errors} errors. Log: fetch-papers.log.json`);
}

main().catch(err => { console.error(err); process.exit(1); });
