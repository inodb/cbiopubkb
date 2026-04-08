---
title: ""
pmid: ""
doi: ""
year: 
authors: []
journal: ""
cbioportal_study_id: ""   # primary cBioPortal study ID, e.g. msk_impact_2017
tags: []
raw: ""   # filename in raw/
---

## Summary

_2–3 sentence plain-language summary of what the paper does and its main claim._

## Cohort

| Field | Value |
|-------|-------|
| N patients | |
| N tumors / samples | |
| Cancer types | |
| Disease stage | |
| Recruitment | |
| Sequencing assay | |
| Institution(s) | |

_1–2 sentences describing who was in this cohort, how they were recruited, and what made this cohort distinctive (e.g. metastatic-enriched, prospective, multi-institutional, pan-cancer)._

## Data in cBioPortal

**Study:** `{cbioportal_study_id}` · [View on cBioPortal](https://www.cbioportal.org/study?id={cbioportal_study_id})

### Cohort match

| Field | Paper | cBioPortal |
|-------|-------|-----------|
| N patients | | |
| N samples | | |
| Cancer types | | |
| Date range / version | | |

**Match status:** exact match / cBioPortal is subset / cBioPortal is superset / different freeze
> _Note any known differences — e.g. paper used internal freeze; cBioPortal released a later version with N additional patients; QC filters differ._

### Available data types

| Data type | In cBioPortal? | Detail |
|-----------|---------------|--------|
| Somatic mutations | ✅ / ⚠️ / ❌ | |
| Copy number alterations (discrete) | ✅ / ⚠️ / ❌ | |
| Copy number (log-ratio / segments) | ✅ / ⚠️ / ❌ | |
| Structural variants / fusions | ✅ / ⚠️ / ❌ | |
| mRNA expression | ✅ / ⚠️ / ❌ | |
| Protein expression (RPPA) | ✅ / ⚠️ / ❌ | |
| DNA methylation | ✅ / ⚠️ / ❌ | |
| Overall survival (OS) | ✅ / ⚠️ / ❌ | |
| Disease-free / progression-free survival | ✅ / ⚠️ / ❌ | |
| Treatment data | ✅ / ⚠️ / ❌ | |
| TMB / MSI | ✅ / ⚠️ / ❌ | |

> ✅ available · ⚠️ partial or different version · ❌ not in cBioPortal

### Sequencing & mutation calling

| Field | Value |
|-------|-------|
| Assay / panel | e.g. MSK-IMPACT468, WES, WGS |
| Gene panels in cBioPortal | e.g. IMPACT341 (N samples), IMPACT410 (N), IMPACT468 (N) |
| Tumor–normal pairing | Matched (N%) / Tumor-only / Mixed |
| Somatic callers (paper) | e.g. MuTect2, Strelka2, FACETS |
| Reference genome | hg19 / hg38 |
| Filters applied | e.g. common germline SNPs removed, depth ≥20× |

## Data NOT in cBioPortal

_Data types measured in the paper that are absent from cBioPortal (limits reproducibility):_

- [ ] Proteomics (mass spectrometry / CPTAC-style)
- [ ] scRNA-seq or spatial transcriptomics
- [ ] Whole-genome sequencing (WGS) — only panel/exome in cBioPortal
- [ ] HLA genotyping / immunopeptidomics
- [ ] Germline-only variants
- [ ] Clinical trial treatment response / longitudinal treatment outcomes
- [ ] Functional / in vitro assays
- [ ] Other: _{describe}_

## Figure catalog

_All figures in the paper. Caption = verbatim or paraphrased from manuscript. Interpretation = what the figure demonstrates scientifically. Mark open-access papers only; for paywalled papers leave caption blank and note "paywalled"._

| Figure | Caption (from manuscript) | Interpretation |
|--------|--------------------------|----------------|
| Fig 1 | | |
| Fig 2 | | |
| Fig 3 | | |

## Reproducible figures in cBioPortal

_Subset of figures above that can be approximated in the cBioPortal UI. Use the [Navigator MCP](https://mcp.cbioportal.org/navigator/mcp) to generate URLs._

| Figure | cBioPortal view | URL |
|--------|-----------------|-----|
| Fig 1A | OncoPrint (ResultsView) | [Open](https://www.cbioportal.org/results/oncoprint?cancer_study_list=…&gene_list=…) |
| Fig 2B | Comparison → Survival | [Open](https://www.cbioportal.org/results/comparison/survival?cancer_study_list=…&gene_list=…) |
| Fig 3C | Study View → Plots | [Open](https://www.cbioportal.org/study/plots?id=…) |

_Available cBioPortal views:_
- **Study View** tabs: Summary · Clinical Data · CN Segments · Plots
- **Results View** tabs: OncoPrint · Cancer Types Summary · Mutual Exclusivity · Plots · Mutations · Structural Variants · Co-expression · Comparison · Survival · Pathways · Download
- **Group Comparison** tabs: Overlap · Clinical · Survival · Alterations · Mutations · mRNA · Protein · DNA Methylation
- **Patient View** tabs: Summary · Clinical Data · Pathways

## Key Findings

<!--
For each finding use this block:

### F{N}: {Short finding title}

**Finding:** One-sentence statement of the result.

**Detail:** Supporting context, numbers, caveats.

**Genes / cancer types:** `GENE1`, `GENE2` · Lung ADCA, Breast

**Data availability:** available | partial | not-available
> Justification — which study/dataset covers this, what's missing.

**Tool support:** native | api | custom
> How to do it: e.g. "OncoPrint on msk_impact_50k_2026, filter by cancer type, select genes..."

**Concepts:** #driver-context #clonality #co-mutation   ← for cross-paper linking
-->

### F1: {Title}

**Finding:**

**Detail:**

**Genes / cancer types:**

**Data availability:**
>

**Tool support:**
>

**Concepts:**

---

## Open Questions / Hypotheses

_What could be tested in cBioPortal based on these findings that the paper did not test?_

- 

## Limitations (from paper)

- 
