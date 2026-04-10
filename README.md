# cBioPortal Publication Knowledge Base

> ⚠️ **Work in progress.** This knowledge base is under active development. Paper summaries are AI-generated from open-access manuscripts and may contain errors. Figure IDs, cohort details, and reproducibility assessments should be independently verified before use.

An Obsidian-compatible knowledge base of cancer genomics publications, structured around what findings can be explored or reproduced in [cBioPortal](https://www.cbioportal.org). Each paper is summarized with structured findings, a reproducibility classification, cohort metadata cross-referenced against the live cBioPortal database, and direct links to reproduce key figures in the cBioPortal UI.

## Status

- ~400 papers processed from cBioPortal-linked publications
- Two gold-standard reference entries: `papers/pmid-28481359.md` (MSK-IMPACT 2017) and `papers/pmid-41895280.md` (MSK-50K 2026)
- Cross-paper concept index with ~1,700 tags: `findings/README.md`
- Patient-level cohort overlap matrix for 511 cBioPortal studies: `data/cohort-overlaps.json`

## Structure

```
raw/          Raw Obsidian web clippings (source material — do not edit)
papers/       Structured paper summaries, one per paper, named pmid-{PMID}.md
findings/     Cross-paper concept index
templates/    Canonical schema for new paper entries
data/         Supporting data (cohort overlap matrix, etc.)
```

## How to add a new paper

1. Drop the Obsidian web clipping into `raw/`
2. Ask Copilot: *"process the new paper in raw/"*
3. A structured summary is created in `papers/pmid-{PMID}.md`

Each paper entry includes:
- Plain-language summary
- Cohort description and match against cBioPortal data
- Available data types and sequencing/mutation calling details
- All figures with captions and interpretations
- Reproducible figures with direct cBioPortal URLs (generated via [Navigator MCP](https://mcp.cbioportal.org/navigator/mcp))
- Structured key findings with two-axis reproducibility scores
- Related papers with patient-level cohort overlap from ClickHouse

## Reproducibility classification

Each finding is scored on two axes:

### Axis 1 — Data availability
| Level | Meaning |
|-------|---------|
| `available` | Data is in a public cBioPortal study |
| `partial` | Relevant data exists but cohort/depth/metadata is incomplete |
| `not-available` | Requires data not in cBioPortal (proteomics, scRNA-seq, HLA calls, WGS, spatial) |

### Axis 2 — Tool support
| Level | Meaning |
|-------|---------|
| `native` | Reproducible with cBioPortal UI (Study View, OncoPrint, Survival tabs) |
| `api` | Requires cBioPortal REST API + R/Python scripting |
| `custom` | Requires external tools (SigProfiler, FACETS, LOHHLA, ML models, etc.) |

## Use cases

- **Quick paper summaries** — what does this paper show, and what's explorable in cBioPortal?
- **Figure reproduction** — direct links to approximate each figure in the cBioPortal UI
- **Cohort awareness** — which other papers share patients with this one?
- **Hypothesis generation** — open questions per paper that could be tested with available cBioPortal data
- **Concept index** — cross-paper search by gene, cancer type, or analysis method via `findings/README.md`

## For AI agents

See `.github/copilot-instructions.md` for the full agent guide, including ClickHouse queries, Navigator MCP usage, and schema details.
