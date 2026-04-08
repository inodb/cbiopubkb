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
4. **Query ClickHouse** (if available) to verify what data is actually in cBioPortal for that study — see "ClickHouse queries" section below
5. Write a structured entry to `papers/pmid-{PMID}.md` following `templates/paper.md`
6. For each key finding, classify:
   - **Data availability**: `available` | `partial` | `not-available`
   - **Tool support**: `native` | `api` | `custom`
   - **Concepts**: `#hashtag` tags for cross-paper linking
7. Fill in the **Cohort match**, **Sequencing & mutation calling**, and **Reproducible figures** sections
8. After writing the paper file, update `findings/README.md` to include new concept tags

## ClickHouse queries for paper processing

Use `clickhouse client --host dl96orhu96.us-east-1.aws.clickhouse.cloud --secure --user 'llm_user' --password '...' --database cgds_public_librechat_20251209` to answer:

**Cohort match** (compare paper N vs cBioPortal N):
```sql
SELECT count(DISTINCT p.internal_id) as n_patients, count(DISTINCT s.internal_id) as n_samples
FROM cancer_study cs
JOIN patient p ON p.cancer_study_id = cs.cancer_study_id
JOIN sample s ON s.patient_id = p.internal_id
WHERE cs.cancer_study_identifier = '{study_id}';
```

**Available data types** (what molecular profiles exist):
```sql
SELECT genetic_alteration_type, datatype, name, description
FROM genetic_profile gp
JOIN cancer_study cs ON gp.cancer_study_id = cs.cancer_study_id
WHERE cs.cancer_study_identifier = '{study_id}';
```

**Tumor-normal pairing** (from clinical attributes):
```sql
SELECT attr_id, attr_value, count() as n
FROM clinical_sample csa
JOIN sample s ON s.internal_id = csa.internal_id
JOIN patient p ON p.internal_id = s.patient_id
JOIN cancer_study cs ON cs.cancer_study_id = p.cancer_study_id
WHERE cs.cancer_study_identifier = '{study_id}'
  AND attr_id IN ('MATCHED_STATUS', 'SOMATIC_STATUS')
GROUP BY attr_id, attr_value;
```

**Gene panels used**:
```sql
SELECT gene_panel_id, count() as n_samples
FROM sample_to_gene_panel_derived
WHERE cancer_study_identifier = '{study_id}' AND alteration_type = 'MUTATION_EXTENDED'
GROUP BY gene_panel_id ORDER BY n_samples DESC;
```

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

## Reproducible figures — cBioPortal views

When identifying which paper figures are reproducible, use these views:

| View | URL pattern | Best for |
|------|-------------|---------|
| **OncoPrint** | `/results/oncoprint?study_id=…&gene_list=…` | Co-mutation across genes/samples |
| **Survival** | ResultsView → Comparison → Survival tab | KM curves for altered vs unaltered |
| **Cancer Types Summary** | `/results/cancerTypesSummary` | Alteration frequency by cancer type |
| **Mutual Exclusivity** | `/results/mutualExclusivity` | Co-occurrence/exclusivity tables |
| **Mutations tab** | `/results/mutations` | Lollipop plots, VAF distributions |
| **Plots tab** | `/results/plots` or Study View → Plots | Scatter/box plots of two variables |
| **Group Comparison** | `/comparison` | Any two-group comparison (survival, enrichments, clinical) |
| **Study View** | `/study?id=…` | Cohort-level summaries, filters, clinical distributions |

Note: The [cBioPortal Navigator](https://github.com/fuzhaoyuan/cbioportal-navigator) MCP can generate exact URLs for complex filtered queries.

## Key cBioPortal facts

- Public URL: https://www.cbioportal.org
- API: https://www.cbioportal.org/api
- 535 studies, ~398 unique PMIDs in the knowledge base
- Major studies: `msk_impact_50k_2026`, `msk_impact_2017`, TCGA PanCancer Atlas, METABRIC
- Not in cBioPortal: proteomics (CPTAC), scRNA-seq, spatial transcriptomics, raw WGS BAMs, HLA genotypes
