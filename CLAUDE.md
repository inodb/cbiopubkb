# CLAUDE.md — cBioPortal Publication Knowledge Base

This file provides context for Claude (and other AI agents) working in this repository.

See `.github/copilot-instructions.md` for the full agent guide. Key points below.

## What this repo is

An Obsidian knowledge base tracking cancer genomics papers linked to [cBioPortal](https://www.cbioportal.org) studies. Each paper is processed into a structured `papers/pmid-{PMID}.md` file with:
- Structured key findings (3–7 per paper)
- Two-axis reproducibility classification per finding:
  - **Data availability**: `available` | `partial` | `not-available`
  - **Tool support**: `native` | `api` | `custom`
- Concept `#tags` for cross-paper linking

## Quick reference

| Directory | Purpose |
|-----------|---------|
| `raw/` | Raw Obsidian web clippings — source material, do not edit |
| `papers/` | Processed summaries, one per paper, named `pmid-{PMID}.md` |
| `findings/README.md` | Cross-paper concept index with ~1,700 concept tags |
| `templates/paper.md` | Schema template — follow this exactly when creating paper entries |

## Processing a new paper

```
User drops file in raw/ → you read it → write papers/pmid-{PMID}.md → update findings/README.md
```

Use `templates/paper.md` as the exact schema. Match the format of `papers/pmid-41895280.md` (gold standard).

## Data availability heuristic

- `available` → data is in the `cbioportal_studies` frontmatter field of the raw file
- `not-available` → proteomics, scRNA-seq, spatial, HLA, germline-only, clinical trial response
- `partial` → everything in between

## Tool support heuristic

- `native` → cBioPortal Study View / OncoPrint / Survival tabs
- `api` → cBioPortal REST API + scripting
- `custom` → SigProfiler, FACETS, LOHHLA, ML, etc.

## Committing

Always use PMID-based filenames (`pmid-XXXXX.md`). After bulk processing, rebuild `findings/README.md` to include new concept tags.
