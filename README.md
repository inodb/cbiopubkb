# cBioPortal Publication Knowledge Base

An Obsidian-compatible knowledge base for cancer genomics publications, focused on what findings can be explored or reproduced using cBioPortal.

## Structure

```
raw/        Raw Obsidian web clippings (source of truth for paper content)
papers/     Processed paper summaries with structured findings
findings/   Cross-paper finding synthesis (generalizability, conflicts, patterns)
templates/  Templates for new entries
```

## How to add a new paper

1. Drop the Obsidian web clipping into `raw/`
2. Ask Copilot to process it: *"process the new paper in raw/"*
3. A structured summary is created in `papers/` with all findings classified

## Reproducibility classification (two-axis)

Each finding is scored on two independent axes:

### Axis 1 — Data availability in cBioPortal
| Level | Meaning |
|-------|---------|
| `available` | The underlying data (mutations, CNAs, clinical) is in cBioPortal (public or MSK studies) |
| `partial` | Relevant data exists but cohort, depth, or metadata is incomplete |
| `not-available` | Requires data not in cBioPortal (e.g., HLA calls, WGS, RNA-seq not loaded) |

### Axis 2 — Tool support in cBioPortal
| Level | Meaning |
|-------|---------|
| `native` | Reproducible with cBioPortal UI or API without external code |
| `api` | Requires cBioPortal API + custom analysis script, but no special data prep |
| `custom` | Requires significant custom code or external tools (e.g., clonality, LOH, hotspot stats) |

## Use cases this enables

- **Summaries**: High-level "what does this paper show and what can you explore in cBioPortal"
- **Generalizability page**: Cross-paper `findings/` notes on which results replicate
- **Hypothesis generation**: Agents can identify open questions suggested by findings that could be tested in cBioPortal with available data
