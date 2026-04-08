# AGENTS.md — Instructions for AI Agents

This file is read by AI coding agents (OpenAI Codex, etc.) working in this repository.

See `.github/copilot-instructions.md` for the complete guide. Summary below.

## Repo purpose

Obsidian knowledge base of cancer genomics publications mapped to [cBioPortal](https://www.cbioportal.org) studies. Goal: extract structured findings from papers and classify them by reproducibility in cBioPortal.

## File naming convention

All processed paper files must be named `papers/pmid-{PMID}.md`. Do not use descriptive names.

## Schema (required fields)

Every `papers/pmid-{PMID}.md` must follow `templates/paper.md` exactly:

```yaml
---
title: ""
pmid: ""
doi: ""
year: 
authors: []
journal: ""
cbioportal_study_id: ""
tags: []
raw: ""
---
```

Followed by: Summary, Dataset table, Key Findings (3–7), Open Questions, Limitations.

Each finding must include:
- `**Data availability:**` — `available` | `partial` | `not-available`
- `**Tool support:**` — `native` | `api` | `custom`
- `**Concepts:**` — space-separated `#hashtag` list

## Do not

- Edit files in `raw/` (they are source material)
- Use descriptive filenames instead of `pmid-XXXXX.md`
- Invent cBioPortal study IDs — only use ones from the raw file's `cbioportal_studies` frontmatter
- Mark data as `available` if it requires proteomics, scRNA-seq, HLA calls, or spatial transcriptomics

## Key data sources

- `raw/*.md` — full paper text with YAML frontmatter (pmid, cbioportal_studies, journal, year)
- `findings/README.md` — concept index (update after adding new papers)
- `templates/paper.md` — required schema
- `papers/pmid-41895280.md` — gold-standard reference output
