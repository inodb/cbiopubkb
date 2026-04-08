# Copilot Instructions — cBioPortal Publication Knowledge Base

This repo is an Obsidian-compatible knowledge base of cancer genomics publications, structured around what findings can be explored or reproduced in [cBioPortal](https://www.cbioportal.org).

## Directory structure

```
raw/        Raw Obsidian web clippings (source material, do not edit)
papers/     Structured paper summaries — one file per paper, named pmid-{PMID}.md
findings/   Cross-paper synthesis: findings/README.md is the concept index
templates/  paper.md is the canonical schema for papers/ entries
```

## How to process a new paper

When the user asks you to process a paper in `raw/`:

1. Read the raw file in `raw/`
2. Extract the PMID from the filename or frontmatter
3. Look up the `cbioportal_studies` frontmatter field — these are the cBioPortal study IDs where the paper's data lives
4. Write a structured entry to `papers/pmid-{PMID}.md` following `templates/paper.md`
5. Extract 3–7 key findings, each with:
   - **Data availability**: `available` | `partial` | `not-available`
   - **Tool support**: `native` | `api` | `custom`
   - **Concepts**: `#hashtag` tags for cross-paper linking (see schema below)
6. After writing the paper file, update `findings/README.md` to include new concept tags

## Reproducibility two-axis schema

### Axis 1 — Data availability
| Value | Meaning |
|-------|---------|
| `available` | Data is in a public cBioPortal study (check `cbioportal_studies` frontmatter) |
| `partial` | Relevant data exists but cohort/depth/metadata is incomplete or different |
| `not-available` | Requires data not in cBioPortal: proteomics, scRNA-seq, HLA calls, spatial, germline-only, trial response |

### Axis 2 — Tool support
| Value | Meaning |
|-------|---------|
| `native` | Reproducible with cBioPortal UI (Study View, OncoPrint, Mutations, Survival tabs) |
| `api` | Requires cBioPortal REST API + R/Python scripting, no special data prep |
| `custom` | Requires external tools: SigProfiler, FACETS, LOHHLA, ML models, etc. |

## Concept tag conventions

Use lowercase kebab-case `#tags`. Group by category:

- **Genes**: `#TP53` `#KRAS` `#PIK3CA` `#PTEN` `#EGFR` `#BRAF` `#CDKN2A` `#RB1` `#ERBB2` `#MYC`
- **Analysis**: `#survival` `#molecular-subtypes` `#mutation-signatures` `#clonal-evolution` `#copy-number` `#actionability` `#biomarker` `#driver-context` `#co-mutation` `#mutual-exclusivity`
- **Therapy**: `#targeted-therapy` `#immunotherapy` `#treatment-resistance` `#drug-response` `#ICI-biomarker` `#TMB` `#MSI`
- **Data types**: `#liquid-biopsy` `#cfDNA` `#proteomics` `#WGS` `#single-cell` `#pan-cancer-map`
- **Cancer types**: `#breast` `#lung` `#LUAD` `#NSCLC` `#prostate` `#colorectal` `#melanoma` `#glioma` `#GBM` `#leukemia` `#lymphoma` `#pancreatic` `#bladder` `#renal` `#ovarian` `#thyroid` `#sarcoma` `#pediatric`

## Reference examples

The two highest-quality reference papers are:
- `papers/pmid-41895280.md` — MSK-50K 2026 (Cancer Cell) — 9 findings, gold-standard format
- `papers/pmid-28481359.md` — MSK-IMPACT 2017 (Nature Medicine) — 6 findings, includes cross-paper comparison

## findings/README.md

This file is the cross-paper concept index. After processing new papers, update it to include:
- New concept tags with paper links (Obsidian `[[pmid-XXXXX]]` wiki-link format)
- New cancer type groups if applicable

## Key cBioPortal facts

- Public URL: https://www.cbioportal.org
- API: https://www.cbioportal.org/api
- 535 studies, ~398 unique PMIDs in the knowledge base
- Major studies: `msk_impact_50k_2026`, `msk_impact_2017`, TCGA PanCancer Atlas, METABRIC
- Not in cBioPortal: proteomics (CPTAC), scRNA-seq, spatial transcriptomics, raw WGS BAMs, HLA genotypes
