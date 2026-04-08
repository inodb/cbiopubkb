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

## Cohort overlap reference

**Pre-computed overlap matrix:** `data/cohort-overlaps.json`

Contains all pairwise patient-level overlaps (>50 shared patients) across 511 cBioPortal studies, computed from shared `patient.stable_id` in ClickHouse. Structure:
```json
{
  "study_sizes": { "msk_impact_2017": 10336, ... },
  "study_names": { "msk_impact_2017": "MSK-IMPACT Clinical Sequencing Cohort 2017", ... },
  "overlaps": {
    "msk_impact_2017": [
      { "partner": "msk_ch_2020", "shared": 9712, "pct_this": 94.0, "pct_partner": 40.2, "total_partner": 24146 },
      ...
    ]
  }
}
```

When writing the `## Related papers` → `### Cohort overlap` section for a paper:
1. Look up `overlaps[cbioportal_study_id]` in `data/cohort-overlaps.json`
2. For each partner with `shared > 200`, check if a paper in `papers/pmid-*.md` has `cbioportal_study_id` matching the partner
3. Classify relationship:
   - `pct_this > 80%` → this paper is mostly a **subset** of the partner
   - `pct_partner > 80%` → this paper is mostly a **superset** of the partner
   - Both < 80% → **partial overlap** (separate time window or selection criteria)

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

## Reproducible figures — cBioPortal Navigator MCP

Use the **cBioPortal Navigator MCP** at `https://mcp.cbioportal.org/navigator/mcp` to generate exact, working URLs for reproducible figures. Configure it as:

```json
{
  "mcpServers": {
    "cbioportal-navigator": {
      "url": "https://mcp.cbioportal.org/navigator/mcp"
    }
  }
}
```

Or call it directly via HTTP (Streamable HTTP transport):
```bash
curl -s -X POST https://mcp.cbioportal.org/navigator/mcp \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"navigate_to_results_view","arguments":{
    "studyIds": ["msk_impact_2017"],
    "genes": ["TP53","KRAS","BRAF"],
    "tab": "oncoprint"
  }}}'
```

### Available Navigator tools

| Tool | Use for |
|------|---------|
| `resolve_and_route` | Resolve study IDs from keywords, check available profiles/tabs |
| `navigate_to_results_view` | OncoPrint, Survival, Cancer Types Summary, Mutations, Structural Variants, Mutual Exclusivity, Plots, Comparison tabs |
| `navigate_to_study_view` | Study View with filters and Plots tab (X/Y clinical attributes) |
| `navigate_to_group_comparison` | Group Comparison — any two groups (clinical attribute, gene alteration) |
| `navigate_to_patient_view` | Individual patient pages |
| `get_studyviewfilter_options` | Discover available clinical attributes and filter options for a study |

### URL generation examples

**OncoPrint** (top altered genes):
```json
{"name": "navigate_to_results_view", "arguments": {
  "studyIds": ["msk_impact_2017"],
  "genes": ["TP53", "KRAS", "PIK3CA"],
  "tab": "oncoprint"
}}
```

**Survival** (altered vs unaltered):
```json
{"name": "navigate_to_results_view", "arguments": {
  "studyIds": ["msk_impact_2017"],
  "genes": ["TERT"],
  "tab": "comparison/survival"
}}
```

**Study View Plots** (TMB by cancer type):
```json
{"name": "navigate_to_study_view", "arguments": {
  "studyIds": ["msk_impact_2017"],
  "tab": "plots",
  "plotsHorzSelection": {"dataType": "clinical_attribute", "selectedDataSourceOption": "CANCER_TYPE_DETAILED"},
  "plotsVertSelection": {"dataType": "clinical_attribute", "selectedDataSourceOption": "TMB_NONSYNONYMOUS"}
}}
```

**Group Comparison** (two cancer types):
```json
{"name": "navigate_to_group_comparison", "arguments": {
  "studyIds": ["msk_impact_2017"],
  "groups": [
    {"name": "Primary", "studyViewFilter": {"clinicalDataFilters": [{"attributeId": "SAMPLE_TYPE", "values": [{"value": "Primary"}]}]}},
    {"name": "Metastasis", "studyViewFilter": {"clinicalDataFilters": [{"attributeId": "SAMPLE_TYPE", "values": [{"value": "Metastasis"}]}]}}
  ],
  "tab": "survival"
}}
```

### Available cBioPortal views/tabs

- **Results View**: `oncoprint` · `cancerTypesSummary` · `mutualExclusivity` · `plots` · `mutations` · `structuralVariants` · `coexpression` · `comparison` · `comparison/survival` · `comparison/clinical` · `comparison/alterations` · `comparison/mrna` · `comparison/protein` · `pathways`
- **Study View**: `summary` · `clinicalData` · `cnSegments` · `plots`
- **Group Comparison**: `overlap` · `clinical` · `survival` · `alterations` · `mutations` · `mrna` · `protein` · `dna_methylation`



- Public URL: https://www.cbioportal.org
- API: https://www.cbioportal.org/api
- 535 studies, ~398 unique PMIDs in the knowledge base
- Major studies: `msk_impact_50k_2026`, `msk_impact_2017`, TCGA PanCancer Atlas, METABRIC
- Not in cBioPortal: proteomics (CPTAC), scRNA-seq, spatial transcriptomics, raw WGS BAMs, HLA genotypes
