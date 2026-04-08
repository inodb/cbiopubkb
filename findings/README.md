# cBioPortal Knowledge Base — Concept Index

> **Cross-paper concept index for the cBioPortal Cancer Genomics Knowledge Base**
> Last rebuilt from 353 processed papers.

## Introduction

This index maps key genomic, clinical, and analytical concepts across the cBioPortal knowledge base — a curated collection of 353 landmark cancer genomics papers with structured Key Findings, data availability assessments, and cBioPortal tool-support annotations. Each paper is annotated with `#concept` tags in its YAML frontmatter and in the **Concepts:** lines of individual findings. This index aggregates those tags to help you quickly find: (1) all papers studying a specific gene, pathway, or cancer type; (2) how often a concept appears across the literature; and (3) which studies have data available and query-ready on cBioPortal. Papers are linked using Obsidian wiki-link format `[[file-id]]` — open in any Obsidian vault built from this repository.

**Quick navigation:**
- [Core Concepts](#core-concepts) — top ~30 most frequent concepts (20+ papers each)
- [Cancer Type Index](#cancer-type-index) — papers grouped by cancer type
- [Reproducibility Overview](#reproducibility-overview) — availability & tool support summary
- [All Concepts A–Z](#all-concepts-az) — complete alphabetical tag index

---

## Core Concepts

The following concepts appear in **20 or more papers** and represent the backbone of the knowledge base. Each entry includes the concept definition, paper count, and the papers where it appears.

| Concept | Papers | Category |
|---------|--------|----------|
| [#survival](#survival) | 221 | Analysis |
| [#molecular-subtypes](#molecularsubtypes) | 180 | Analysis |
| [#actionability](#actionability) | 172 | Analysis |
| [#copy-number](#copynumber) | 129 | Analysis |
| [#mutation-signatures](#mutationsignatures) | 62 | Analysis |
| [#clonal-evolution](#clonalevolution) | 67 | Analysis |
| [#biomarker](#biomarker) | 120 | Analysis |
| [#driver-context](#drivercontext) | 56 | Analysis |
| [#metastatic-enrichment](#metastaticenrichment) | 30 | Analysis |
| [#pan-cancer-map](#pancancermap) | 32 | Analysis |
| [#clonality](#clonality) | 25 | Analysis |
| [#classification](#classification) | 25 | Analysis |
| [#methylation](#methylation) | 27 | Analysis |
| [#epigenetics](#epigenetics) | 41 | Analysis |
| [#tp53](#tp53) | 185 | Gene/Pathway |
| [#kras](#kras) | 81 | Gene/Pathway |
| [#pik3ca](#pik3ca) | 75 | Gene/Pathway |
| [#pten](#pten) | 54 | Gene/Pathway |
| [#cdkn2a](#cdkn2a) | 67 | Gene/Pathway |
| [#braf](#braf) | 52 | Gene/Pathway |
| [#egfr](#egfr) | 33 | Gene/Pathway |
| [#rb1](#rb1) | 46 | Gene/Pathway |
| [#myc](#myc) | 23 | Gene/Pathway |
| [#erbb2](#erbb2) | 45 | Gene/Pathway |
| [#nf1](#nf1) | 26 | Gene/Pathway |
| [#arid1a](#arid1a) | 22 | Gene/Pathway |
| [#brca2](#brca2) | 26 | Gene/Pathway |
| [#idh1](#idh1) | 21 | Gene/Pathway |
| [#tert](#tert) | 31 | Gene/Pathway |
| [#mapk](#mapk) | 32 | Gene/Pathway |
| [#pi3k](#pi3k) | 36 | Gene/Pathway |
| [#wnt](#wnt) | 24 | Gene/Pathway |
| [#apobec](#apobec) | 22 | Gene/Pathway |
| [#targeted-therapy](#targetedtherapy) | 121 | Therapy |
| [#immunotherapy](#immunotherapy) | 59 | Therapy |
| [#treatment-resistance](#treatmentresistance) | 46 | Therapy |
| [#drug-response](#drugresponse) | 20 | Therapy |
| [#ici-biomarker](#icibiomarker) | 36 | Therapy |
| [#msi](#msi) | 54 | Feature |
| [#tmb](#tmb) | 49 | Feature |
| [#liquid-biopsy](#liquidbiopsy) | 23 | Data Type |
| [#wgs](#wgs) | 22 | Data Type |
| [#wes](#wes) | 20 | Data Type |
| [#msk-impact](#mskimpact) | 35 | Data Type |
| [#germline](#germline) | 22 | Data Type |
| [#tumor-microenvironment](#tumormicroenvironment) | 30 | Feature |
| [#pediatric](#pediatric) | 28 | Feature |
| [#tcga](#tcga) | 23 | Feature |
| [#hotspots](#hotspots) | 32 | Gene/Pathway |
| [#breast](#breast) | 28 | Feature |
| [#resistance](#resistance) | 26 | Feature |
| [#prostate](#prostate) | 23 | Feature |
| [#urothelial](#urothelial) | 22 | Feature |
| [#sarcoma](#sarcoma) | 21 | Feature |
| [#lung](#lung) | 20 | Feature |

### Concept Details

#### #survival (221 papers) {#survival}

*Kaplan-Meier survival analysis, overall survival (OS), progression-free survival (PFS), or disease-free survival (DFS) correlated with genomic features*

**Papers (221):** [[msk-impact-2017]], [[pmid-18772890]], [[pmid-18948947]], [[pmid-20601955]], [[pmid-21252315]], [[pmid-21720365]], [[pmid-21798893]], [[pmid-21798897]], [[pmid-22158988]], [[pmid-22522925]], [[pmid-22722829]], [[pmid-22722839]], [[pmid-22832583]], [[pmid-22960745]], [[pmid-22980975]] *(+206 more — see [All Concepts](#all-concepts-az))*

#### #molecular-subtypes (180 papers) {#molecularsubtypes}

*Molecularly defined subtypes within a cancer type (e.g., luminal/basal breast, POLE-ultramutated endometrial) with distinct genomic profiles and outcomes*

**Papers (180):** [[pmid-18772890]], [[pmid-20601955]], [[pmid-21720365]], [[pmid-21796119]], [[pmid-21798893]], [[pmid-21798897]], [[pmid-22158988]], [[pmid-22495314]], [[pmid-22522925]], [[pmid-22610119]], [[pmid-22622578]], [[pmid-22722202]], [[pmid-22722829]], [[pmid-22722839]], [[pmid-22810696]] *(+165 more — see [All Concepts](#all-concepts-az))*

#### #actionability (172 papers) {#actionability}

*Genomic alterations with matched targeted therapies, clinical trial eligibility, or FDA-approved indications*

**Papers (172):** [[msk-impact-2017]], [[pmid-18772890]], [[pmid-20601955]], [[pmid-21252315]], [[pmid-21720365]], [[pmid-21798893]], [[pmid-21798897]], [[pmid-22343534]], [[pmid-22460905]], [[pmid-22610119]], [[pmid-22622578]], [[pmid-22722202]], [[pmid-22802077]], [[pmid-22810696]], [[pmid-22817889]] *(+157 more — see [All Concepts](#all-concepts-az))*

#### #copy-number (129 papers) {#copynumber}

*Somatic copy-number alterations (SCNAs) including focal amplifications, deletions, and arm-level changes*

**Papers (129):** [[pmid-18772890]], [[pmid-18948947]], [[pmid-20601955]], [[pmid-21720365]], [[pmid-21798893]], [[pmid-22460905]], [[pmid-22495314]], [[pmid-22522925]], [[pmid-22722201]], [[pmid-22722202]], [[pmid-22722839]], [[pmid-22810696]], [[pmid-22817889]], [[pmid-22832583]], [[pmid-22941189]] *(+114 more — see [All Concepts](#all-concepts-az))*

#### #mutation-signatures (62 papers) {#mutationsignatures}

*COSMIC mutational signatures (SBS, DBS, ID) reflecting underlying mutagenic processes (APOBEC, UV, MMR deficiency, POLE)*

**Papers (62):** [[msk-impact-2017]], [[pmid-21798897]], [[pmid-22622578]], [[pmid-22722201]], [[pmid-22810696]], [[pmid-22817889]], [[pmid-22842228]], [[pmid-22941188]], [[pmid-22960745]], [[pmid-22980975]], [[pmid-23334666]], [[pmid-23415222]], [[pmid-23525077]], [[pmid-23634996]], [[pmid-23699601]] *(+47 more — see [All Concepts](#all-concepts-az))*

#### #clonal-evolution (67 papers) {#clonalevolution}

*Tumor evolution from founding clone through subclonal diversification; tracking clonal dynamics over treatment*

**Papers (67):** [[pmid-22495314]], [[pmid-23415222]], [[pmid-23622249]], [[pmid-23699601]], [[pmid-24145436]], [[pmid-24265153]], [[pmid-24325359]], [[pmid-24336570]], [[pmid-24434212]], [[pmid-24487277]], [[pmid-24816253]], [[pmid-25223734]], [[pmid-25470049]], [[pmid-25583476]], [[pmid-25730765]] *(+52 more — see [All Concepts](#all-concepts-az))*

#### #biomarker (120 papers) {#biomarker}

*Molecular predictors of treatment response, prognosis, or diagnosis*

**Papers (120):** [[pmid-18948947]], [[pmid-20601955]], [[pmid-22460905]], [[pmid-22495314]], [[pmid-22722829]], [[pmid-22820256]], [[pmid-22895193]], [[pmid-22980975]], [[pmid-24030381]], [[pmid-24120142]], [[pmid-24145436]], [[pmid-24265153]], [[pmid-24325359]], [[pmid-25024180]], [[pmid-25092538]] *(+105 more — see [All Concepts](#all-concepts-az))*

#### #driver-context (56 papers) {#drivercontext}

*Cancer driver alterations interpreted in their tumor type and co-alteration context*

**Papers (56):** [[msk-50k-2026]], [[pmid-21798893]], [[pmid-21798897]], [[pmid-22158988]], [[pmid-22343534]], [[pmid-22495314]], [[pmid-22610119]], [[pmid-22722201]], [[pmid-22722202]], [[pmid-22722839]], [[pmid-22817889]], [[pmid-22842228]], [[pmid-23103869]], [[pmid-23415222]], [[pmid-23525077]] *(+41 more — see [All Concepts](#all-concepts-az))*

#### #metastatic-enrichment (30 papers) {#metastaticenrichment}

*Genomic alterations enriched in metastatic versus primary tumors*

**Papers (30):** [[msk-impact-2017]], [[pmid-22722839]], [[pmid-23685749]], [[pmid-25164765]], [[pmid-25583476]], [[pmid-25589618]], [[pmid-27442865]], [[pmid-27749842]], [[pmid-28027327]], [[pmid-28783718]], [[pmid-28825054]], [[pmid-29316426]], [[pmid-30068706]], [[pmid-30205045]], [[pmid-31591597]] *(+15 more — see [All Concepts](#all-concepts-az))*

#### #pan-cancer-map (32 papers) {#pancancermap}

*Pan-cancer analyses characterizing mutation landscapes across multiple cancer types simultaneously*

**Papers (32):** [[msk-50k-2026]], [[msk-impact-2017]], [[pmid-22460905]], [[pmid-23000897]], [[pmid-25079317]], [[pmid-26451490]], [[pmid-26804919]], [[pmid-28007021]], [[pmid-28162975]], [[pmid-28783718]], [[pmid-29596782]], [[pmid-29610475]], [[pmid-29617662]], [[pmid-29622463]], [[pmid-29625048]] *(+17 more — see [All Concepts](#all-concepts-az))*

#### #clonality (25 papers) {#clonality}

*Tumor clonal architecture, cancer cell fraction estimation, and subclone detection*

**Papers (25):** [[msk-50k-2026]], [[pmid-22343534]], [[pmid-23415222]], [[pmid-24030381]], [[pmid-25164765]], [[pmid-26095796]], [[pmid-27749842]], [[pmid-28196596]], [[pmid-30052636]], [[pmid-30150660]], [[pmid-32864625]], [[pmid-33025139]], [[pmid-34910928]], [[pmid-35121644]], [[pmid-35504881]] *(+10 more — see [All Concepts](#all-concepts-az))*

#### #classification (25 papers) {#classification}

*Molecular classification of tumors into clinically meaningful groups*

**Papers (25):** [[pmid-22960745]], [[pmid-23636398]], [[pmid-23792563]], [[pmid-24974848]], [[pmid-25079317]], [[pmid-25417114]], [[pmid-25631445]], [[pmid-26091043]], [[pmid-26451490]], [[pmid-26804919]], [[pmid-26977886]], [[pmid-27276561]], [[pmid-28052061]], [[pmid-28162975]], [[pmid-28988769]] *(+10 more — see [All Concepts](#all-concepts-az))*

#### #methylation (27 papers) {#methylation}

*DNA methylation profiling for cancer classification, gene silencing, and epigenetic biomarkers*

**Papers (27):** [[pmid-18772890]], [[pmid-22832583]], [[pmid-23634996]], [[pmid-24120142]], [[pmid-24816253]], [[pmid-25631445]], [[pmid-26451490]], [[pmid-26466568]], [[pmid-26544944]], [[pmid-26824661]], [[pmid-26855148]], [[pmid-27959731]], [[pmid-28162975]], [[pmid-28667006]], [[pmid-28988769]] *(+12 more — see [All Concepts](#all-concepts-az))*

#### #epigenetics (41 papers) {#epigenetics}

*DNA methylation, histone modification, chromatin remodeling alterations, and their clinical correlates*

**Papers (41):** [[pmid-21796119]], [[pmid-22722201]], [[pmid-22722829]], [[pmid-22817889]], [[pmid-23334668]], [[pmid-23525077]], [[pmid-23634996]], [[pmid-23685749]], [[pmid-23792563]], [[pmid-24686850]], [[pmid-25223734]], [[pmid-25233892]], [[pmid-25240281]], [[pmid-25589618]], [[pmid-25631445]] *(+26 more — see [All Concepts](#all-concepts-az))*

#### #tp53 (185 papers) {#tp53}

*TP53 tumor suppressor mutations — the most frequently altered gene across cancers; associated with genomic instability, poor prognosis, and treatment resistance*

**Papers (185):** [[pmid-18772890]], [[pmid-18948947]], [[pmid-20601955]], [[pmid-21252315]], [[pmid-21720365]], [[pmid-21798893]], [[pmid-22495314]], [[pmid-22722201]], [[pmid-22722202]], [[pmid-22722839]], [[pmid-22810696]], [[pmid-22817889]], [[pmid-22832583]], [[pmid-22941188]], [[pmid-22941189]] *(+170 more — see [All Concepts](#all-concepts-az))*

#### #kras (81 papers) {#kras}

*KRAS oncogene mutations — dominant in pancreatic, colorectal, and lung cancers; historically undruggable but now targetable (G12C)*

**Papers (81):** [[pmid-18948947]], [[pmid-21252315]], [[pmid-22158988]], [[pmid-22343534]], [[pmid-22460905]], [[pmid-22802077]], [[pmid-22810696]], [[pmid-22895193]], [[pmid-22980975]], [[pmid-23103869]], [[pmid-23636398]], [[pmid-23897969]], [[pmid-24185509]], [[pmid-24293293]], [[pmid-24434212]] *(+66 more — see [All Concepts](#all-concepts-az))*

#### #pik3ca (75 papers) {#pik3ca}

*PIK3CA mutations activating the PI3K/AKT/mTOR pathway; frequent in breast, colorectal, and endometrial cancers*

**Papers (75):** [[pmid-18772890]], [[pmid-20601955]], [[pmid-21252315]], [[pmid-21720365]], [[pmid-21798893]], [[pmid-22495314]], [[pmid-22722201]], [[pmid-22722202]], [[pmid-22722829]], [[pmid-22810696]], [[pmid-22960745]], [[pmid-23000897]], [[pmid-23636398]], [[pmid-23685749]], [[pmid-23792563]] *(+60 more — see [All Concepts](#all-concepts-az))*

#### #pten (54 papers) {#pten}

*PTEN tumor suppressor loss activating PI3K/AKT signaling; frequent in multiple cancer types*

**Papers (54):** [[pmid-18772890]], [[pmid-18948947]], [[pmid-21252315]], [[pmid-21798893]], [[pmid-22495314]], [[pmid-22622578]], [[pmid-22722201]], [[pmid-22722839]], [[pmid-22960745]], [[pmid-23622249]], [[pmid-23685749]], [[pmid-23792563]], [[pmid-23897969]], [[pmid-24120142]], [[pmid-24265153]] *(+39 more — see [All Concepts](#all-concepts-az))*

#### #cdkn2a (67 papers) {#cdkn2a}

*CDKN2A (p16/ARF) deletion — a key cell-cycle regulator lost in many cancers; associated with poor prognosis*

**Papers (67):** [[pmid-18772890]], [[pmid-18948947]], [[pmid-21798893]], [[pmid-22817889]], [[pmid-22960745]], [[pmid-23103869]], [[pmid-23334668]], [[pmid-23525077]], [[pmid-23897969]], [[pmid-24121792]], [[pmid-24293293]], [[pmid-24436047]], [[pmid-24476821]], [[pmid-24816253]], [[pmid-25079317]] *(+52 more — see [All Concepts](#all-concepts-az))*

#### #braf (52 papers) {#braf}

*BRAF mutations (predominantly V600E) activating MAPK signaling; druggable target in melanoma, thyroid, colorectal*

**Papers (52):** [[msk-50k-2026]], [[msk-impact-2017]], [[pmid-22343534]], [[pmid-22460905]], [[pmid-22622578]], [[pmid-22802077]], [[pmid-22817889]], [[pmid-22895193]], [[pmid-23817572]], [[pmid-23897969]], [[pmid-24120142]], [[pmid-24265153]], [[pmid-24293293]], [[pmid-24336570]], [[pmid-24434212]] *(+37 more — see [All Concepts](#all-concepts-az))*

#### #egfr (33 papers) {#egfr}

*EGFR mutations and amplifications; established druggable target in NSCLC, GBM, and other cancers*

**Papers (33):** [[pmid-18772890]], [[pmid-18948947]], [[pmid-22460905]], [[pmid-22495314]], [[pmid-22980975]], [[pmid-23525077]], [[pmid-24120142]], [[pmid-24686850]], [[pmid-25079552]], [[pmid-25164765]], [[pmid-25589618]], [[pmid-25631445]], [[pmid-27158780]], [[pmid-28336552]], [[pmid-28445469]] *(+18 more — see [All Concepts](#all-concepts-az))*

#### #rb1 (46 papers) {#rb1}

*RB1 tumor suppressor loss disrupting cell-cycle control; hallmark of retinoblastoma, SCLC, and other cancers*

**Papers (46):** [[pmid-18772890]], [[pmid-18948947]], [[pmid-22495314]], [[pmid-22722201]], [[pmid-22722839]], [[pmid-22941188]], [[pmid-22941189]], [[pmid-22960745]], [[pmid-23334668]], [[pmid-23622249]], [[pmid-23897969]], [[pmid-24121792]], [[pmid-24293293]], [[pmid-24434212]], [[pmid-25024180]] *(+31 more — see [All Concepts](#all-concepts-az))*

#### #myc (23 papers) {#myc}

*MYC oncogene amplification and overexpression; transcriptional amplifier driving proliferation*

**Papers (23):** [[pmid-22722201]], [[pmid-22941189]], [[pmid-25024180]], [[pmid-25855536]], [[pmid-26168399]], [[pmid-26760213]], [[pmid-26829750]], [[pmid-27158780]], [[pmid-28726821]], [[pmid-28985567]], [[pmid-29625050]], [[pmid-30205045]], [[pmid-30867590]], [[pmid-32220891]], [[pmid-32317181]] *(+8 more — see [All Concepts](#all-concepts-az))*

#### #erbb2 (45 papers) {#erbb2}

*ERBB2/HER2 amplification or mutation; druggable target with multiple approved therapies across breast, gastric, lung*

**Papers (45):** [[pmid-18772890]], [[pmid-22460905]], [[pmid-22522925]], [[pmid-22722201]], [[pmid-22722202]], [[pmid-22810696]], [[pmid-23000897]], [[pmid-23525077]], [[pmid-23897969]], [[pmid-24476821]], [[pmid-24816253]], [[pmid-25079317]], [[pmid-25079552]], [[pmid-26901067]], [[pmid-27161491]] *(+30 more — see [All Concepts](#all-concepts-az))*

#### #nf1 (26 papers) {#nf1}

*NF1 tumor suppressor mutations activating RAS signaling; hallmark of neurofibromatosis and multiple cancers*

**Papers (26):** [[pmid-18772890]], [[pmid-18948947]], [[pmid-20601955]], [[pmid-23334668]], [[pmid-23622249]], [[pmid-23817572]], [[pmid-23897969]], [[pmid-24120142]], [[pmid-24265153]], [[pmid-24436047]], [[pmid-25240281]], [[pmid-25730765]], [[pmid-29100075]], [[pmid-30205045]], [[pmid-32561749]] *(+11 more — see [All Concepts](#all-concepts-az))*

#### #arid1a (22 papers) {#arid1a}

*ARID1A chromatin remodeling gene mutations; frequent in clear cell ovarian, gastric, and other cancers*

**Papers (22):** [[pmid-23103869]], [[pmid-23525077]], [[pmid-24121792]], [[pmid-24185509]], [[pmid-24816253]], [[pmid-25092538]], [[pmid-25096233]], [[pmid-25233892]], [[pmid-25583476]], [[pmid-25855536]], [[pmid-28445469]], [[pmid-28485815]], [[pmid-28583311]], [[pmid-28667006]], [[pmid-29610475]] *(+7 more — see [All Concepts](#all-concepts-az))*

#### #brca2 (26 papers) {#brca2}

*BRCA2 germline and somatic mutations; DNA repair deficiency and sensitivity to PARP inhibitors*

**Papers (26):** [[pmid-22495314]], [[pmid-22722202]], [[pmid-23000897]], [[pmid-24293293]], [[pmid-25233892]], [[pmid-25583476]], [[pmid-25855536]], [[pmid-26544944]], [[pmid-26928463]], [[pmid-26997480]], [[pmid-28825054]], [[pmid-29610475]], [[pmid-29625049]], [[pmid-29713003]], [[pmid-30068706]] *(+11 more — see [All Concepts](#all-concepts-az))*

#### #idh1 (21 papers) {#idh1}

*IDH1/IDH2 mutations producing 2-HG oncometabolite; hallmark of LGG, AML, cholangiocarcinoma*

**Papers (21):** [[pmid-23634996]], [[pmid-24120142]], [[pmid-24185509]], [[pmid-24336570]], [[pmid-26544944]], [[pmid-26824661]], [[pmid-27276561]], [[pmid-28472509]], [[pmid-28667006]], [[pmid-29625049]], [[pmid-29625050]], [[pmid-30333627]], [[pmid-30675060]], [[pmid-31748746]], [[pmid-33577785]] *(+6 more — see [All Concepts](#all-concepts-az))*

#### #tert (31 papers) {#tert}

*TERT promoter mutations activating telomerase; frequent in glioma, melanoma, urothelial, and thyroid cancers*

**Papers (31):** [[msk-impact-2017]], [[pmid-24120142]], [[pmid-25155756]], [[pmid-25417114]], [[pmid-26466568]], [[pmid-26824661]], [[pmid-26878173]], [[pmid-27442865]], [[pmid-28373299]], [[pmid-28472509]], [[pmid-28583311]], [[pmid-28726821]], [[pmid-30052636]], [[pmid-30675060]], [[pmid-31068700]] *(+16 more — see [All Concepts](#all-concepts-az))*

#### #mapk (32 papers) {#mapk}

*MAPK/RAS/RAF/MEK/ERK signaling pathway alterations*

**Papers (32):** [[pmid-18772890]], [[pmid-18948947]], [[pmid-20601955]], [[pmid-22817889]], [[pmid-22941189]], [[pmid-23334668]], [[pmid-23817572]], [[pmid-23897969]], [[pmid-24265153]], [[pmid-24434212]], [[pmid-24436047]], [[pmid-26544944]], [[pmid-26551667]], [[pmid-26804919]], [[pmid-27158780]] *(+17 more — see [All Concepts](#all-concepts-az))*

#### #pi3k (36 papers) {#pi3k}

*PI3K/AKT/mTOR pathway activation through mutation, amplification, or deletion of pathway components*

**Papers (36):** [[pmid-18772890]], [[pmid-18948947]], [[pmid-20601955]], [[pmid-22941189]], [[pmid-23334668]], [[pmid-23525077]], [[pmid-23685749]], [[pmid-23897969]], [[pmid-24120142]], [[pmid-24185509]], [[pmid-24265153]], [[pmid-24436047]], [[pmid-24816253]], [[pmid-26544944]], [[pmid-26804919]] *(+21 more — see [All Concepts](#all-concepts-az))*

#### #wnt (24 papers) {#wnt}

*WNT/β-catenin signaling pathway alterations (APC, CTNNB1) frequent in colorectal and other cancers*

**Papers (24):** [[pmid-18948947]], [[pmid-22158988]], [[pmid-22722829]], [[pmid-22820256]], [[pmid-22832583]], [[pmid-22895193]], [[pmid-24816253]], [[pmid-25583493]], [[pmid-26804919]], [[pmid-27149842]], [[pmid-28726821]], [[pmid-28825054]], [[pmid-29610475]], [[pmid-29625050]], [[pmid-31591597]] *(+9 more — see [All Concepts](#all-concepts-az))*

#### #apobec (22 papers) {#apobec}

*APOBEC3A/3B-driven mutagenesis (C→T/G transitions in TCA/TCT context); major mutation signature in multiple cancers*

**Papers (22):** [[pmid-22722201]], [[pmid-24686850]], [[pmid-25155756]], [[pmid-25631445]], [[pmid-27749842]], [[pmid-28027327]], [[pmid-29422544]], [[pmid-29713003]], [[pmid-29713087]], [[pmid-30150660]], [[pmid-30537516]], [[pmid-32791233]], [[pmid-33263939]], [[pmid-33397444]], [[pmid-34272401]] *(+7 more — see [All Concepts](#all-concepts-az))*

#### #targeted-therapy (121 papers) {#targetedtherapy}

*Therapeutics directed at specific molecular targets (kinase inhibitors, antibodies, etc.)*

**Papers (121):** [[pmid-18772890]], [[pmid-18948947]], [[pmid-20601955]], [[pmid-21252315]], [[pmid-22817889]], [[pmid-22842228]], [[pmid-22895193]], [[pmid-22941189]], [[pmid-23334666]], [[pmid-23525077]], [[pmid-23685749]], [[pmid-23817572]], [[pmid-23897969]], [[pmid-24120142]], [[pmid-24185509]] *(+106 more — see [All Concepts](#all-concepts-az))*

#### #immunotherapy (59 papers) {#immunotherapy}

*Immune checkpoint inhibitors (PD-1, PD-L1, CTLA-4) and other immunotherapies; response predictors and resistance mechanisms*

**Papers (59):** [[msk-50k-2026]], [[msk-impact-2017]], [[pmid-22895193]], [[pmid-22960745]], [[pmid-25409260]], [[pmid-25765070]], [[pmid-26091043]], [[pmid-26359337]], [[pmid-26804919]], [[pmid-26997480]], [[pmid-27149842]], [[pmid-27158780]], [[pmid-27169994]], [[pmid-27939400]], [[pmid-28336552]] *(+44 more — see [All Concepts](#all-concepts-az))*

#### #treatment-resistance (46 papers) {#treatmentresistance}

*Mechanisms of acquired or intrinsic resistance to targeted therapy, chemotherapy, or immunotherapy*

**Papers (46):** [[msk-impact-2017]], [[pmid-18772890]], [[pmid-22941188]], [[pmid-23415222]], [[pmid-23897969]], [[pmid-24336570]], [[pmid-25164765]], [[pmid-26000489]], [[pmid-26544944]], [[pmid-26760213]], [[pmid-26855148]], [[pmid-27158780]], [[pmid-27749842]], [[pmid-27959731]], [[pmid-28196596]] *(+31 more — see [All Concepts](#all-concepts-az))*

#### #drug-response (20 papers) {#drugresponse}

*Genomic or transcriptomic correlates of drug sensitivity or resistance in cell lines or patients*

**Papers (20):** [[pmid-22460905]], [[pmid-22802077]], [[pmid-23622249]], [[pmid-25096233]], [[pmid-27646943]], [[pmid-29122777]], [[pmid-29625057]], [[pmid-30333627]], [[pmid-31068700]], [[pmid-31249418]], [[pmid-31591597]], [[pmid-31978347]], [[pmid-32561749]], [[pmid-33577785]], [[pmid-34534465]] *(+5 more — see [All Concepts](#all-concepts-az))*

#### #ici-biomarker (36 papers) {#icibiomarker}

*Biomarkers predictive of immune checkpoint inhibitor response (TMB, MSI, PD-L1, TILs)*

**Papers (36):** [[msk-50k-2026]], [[msk-impact-2017]], [[pmid-25409260]], [[pmid-25765070]], [[pmid-26091043]], [[pmid-26359337]], [[pmid-26997480]], [[pmid-27149842]], [[pmid-27169994]], [[pmid-27939400]], [[pmid-29033130]], [[pmid-29301960]], [[pmid-29337640]], [[pmid-29657128]], [[pmid-29867230]] *(+21 more — see [All Concepts](#all-concepts-az))*

#### #msi (54 papers) {#msi}

*Microsatellite instability (MSI-H/MSS) as a biomarker for immunotherapy response and Lynch syndrome*

**Papers (54):** [[msk-50k-2026]], [[msk-impact-2017]], [[pmid-22810696]], [[pmid-22895193]], [[pmid-23636398]], [[pmid-25079317]], [[pmid-25233892]], [[pmid-25765070]], [[pmid-26804919]], [[pmid-27149842]], [[pmid-27158780]], [[pmid-27939400]], [[pmid-28485815]], [[pmid-29316426]], [[pmid-29337640]] *(+39 more — see [All Concepts](#all-concepts-az))*

#### #tmb (49 papers) {#tmb}

*Tumor mutational burden as a pan-cancer immunotherapy biomarker*

**Papers (49):** [[msk-50k-2026]], [[msk-impact-2017]], [[pmid-24974848]], [[pmid-25096233]], [[pmid-25765070]], [[pmid-26091043]], [[pmid-26095796]], [[pmid-26359337]], [[pmid-27149842]], [[pmid-27939400]], [[pmid-29033130]], [[pmid-29301960]], [[pmid-29337640]], [[pmid-29617662]], [[pmid-29657128]] *(+34 more — see [All Concepts](#all-concepts-az))*

#### #liquid-biopsy (23 papers) {#liquidbiopsy}

*Cell-free DNA (cfDNA)/ctDNA-based profiling for tumor detection, monitoring, and resistance tracking*

**Papers (23):** [[pmid-28445469]], [[pmid-30675060]], [[pmid-31768066]], [[pmid-32214244]], [[pmid-32633890]], [[pmid-32864625]], [[pmid-34059130]], [[pmid-34145282]], [[pmid-35078859]], [[pmid-35235413]], [[pmid-35292802]], [[pmid-36007103]], [[pmid-36357680]], [[pmid-36543146]], [[pmid-36862133]] *(+8 more — see [All Concepts](#all-concepts-az))*

#### #wgs (22 papers) {#wgs}

*Whole-genome sequencing data and analyses including structural variants and non-coding regions*

**Papers (22):** [[pmid-22495314]], [[pmid-22722202]], [[pmid-23103869]], [[pmid-23334666]], [[pmid-23622249]], [[pmid-24120142]], [[pmid-24121792]], [[pmid-24434212]], [[pmid-25024180]], [[pmid-25164765]], [[pmid-26466568]], [[pmid-26862087]], [[pmid-28667006]], [[pmid-28726821]], [[pmid-29670109]] *(+7 more — see [All Concepts](#all-concepts-az))*

#### #wes (20 papers) {#wes}

*Whole-exome sequencing data and analyses*

**Papers (20):** [[pmid-22158988]], [[pmid-22343534]], [[pmid-22722202]], [[pmid-23334666]], [[pmid-23415222]], [[pmid-24120142]], [[pmid-24265153]], [[pmid-24293293]], [[pmid-24434212]], [[pmid-25855536]], [[pmid-29596782]], [[pmid-32220886]], [[pmid-32437664]], [[pmid-33263939]], [[pmid-34059130]] *(+5 more — see [All Concepts](#all-concepts-az))*

#### #msk-impact (35 papers) {#mskimpact}

*MSK-IMPACT clinical sequencing panel data and cohort analyses from Memorial Sloan Kettering*

**Papers (35):** [[msk-50k-2026]], [[msk-impact-2017]], [[pmid-28336552]], [[pmid-28472509]], [[pmid-28825054]], [[pmid-30427539]], [[pmid-30643254]], [[pmid-30675060]], [[pmid-30687805]], [[pmid-32220886]], [[pmid-32220891]], [[pmid-32317181]], [[pmid-32437664]], [[pmid-32730818]], [[pmid-32791233]] *(+20 more — see [All Concepts](#all-concepts-az))*

#### #germline (22 papers) {#germline}

*Inherited pathogenic variants (BRCA1/2, MLH1, etc.) and hereditary cancer risk*

**Papers (22):** [[msk-impact-2017]], [[pmid-23334668]], [[pmid-24658004]], [[pmid-26804919]], [[pmid-27713405]], [[pmid-28007021]], [[pmid-28825054]], [[pmid-29625049]], [[pmid-29713003]], [[pmid-30068706]], [[pmid-30537516]], [[pmid-30687805]], [[pmid-31263031]], [[pmid-32025007]], [[pmid-32561749]] *(+7 more — see [All Concepts](#all-concepts-az))*

#### #tumor-microenvironment (30 papers) {#tumormicroenvironment}

*Immune cell infiltration, stromal composition, and TME features correlated with outcomes and immunotherapy response*

**Papers (30):** [[pmid-21720365]], [[pmid-25765070]], [[pmid-26091043]], [[pmid-26359337]], [[pmid-27149842]], [[pmid-27169994]], [[pmid-29033130]], [[pmid-29625048]], [[pmid-30742119]], [[pmid-33025139]], [[pmid-33242424]], [[pmid-34358469]], [[pmid-34433969]], [[pmid-34910928]], [[pmid-35292802]] *(+15 more — see [All Concepts](#all-concepts-az))*

#### #pediatric (28 papers) {#pediatric}

*Pediatric cancer genomics with distinct mutational landscapes from adult cancers*

**Papers (28):** [[pmid-22722829]], [[pmid-22820256]], [[pmid-22832583]], [[pmid-23817572]], [[pmid-24436047]], [[pmid-25730765]], [[pmid-26466568]], [[pmid-26760213]], [[pmid-26977886]], [[pmid-27776115]], [[pmid-28007021]], [[pmid-31693904]], [[pmid-32561749]], [[pmid-32633890]], [[pmid-33242424]] *(+13 more — see [All Concepts](#all-concepts-az))*

#### #tcga (23 papers) {#tcga}

*The Cancer Genome Atlas multi-platform genomic data across 33 cancer types*

**Papers (23):** [[pmid-18772890]], [[pmid-21720365]], [[pmid-22810696]], [[pmid-23000897]], [[pmid-23634996]], [[pmid-23636398]], [[pmid-24476821]], [[pmid-25079317]], [[pmid-25079552]], [[pmid-25096233]], [[pmid-25417114]], [[pmid-26451490]], [[pmid-26544944]], [[pmid-28052061]], [[pmid-28162975]] *(+8 more — see [All Concepts](#all-concepts-az))*

#### #hotspots (32 papers) {#hotspots}

*Recurrent somatic mutation hotspots with functional or clinical significance*

**Papers (32):** [[msk-50k-2026]], [[pmid-21798893]], [[pmid-21798897]], [[pmid-22158988]], [[pmid-22343534]], [[pmid-22610119]], [[pmid-22722839]], [[pmid-22817889]], [[pmid-22842228]], [[pmid-23415222]], [[pmid-23525077]], [[pmid-23685749]], [[pmid-24121792]], [[pmid-24185509]], [[pmid-24974848]] *(+17 more — see [All Concepts](#all-concepts-az))*

#### #breast (28 papers) {#breast}

*Breast cancer genomics including ER+, HER2+, and triple-negative subtypes*

**Papers (28):** [[pmid-22495314]], [[pmid-22722201]], [[pmid-22722202]], [[pmid-23000897]], [[pmid-26095796]], [[pmid-26451490]], [[pmid-27161491]], [[pmid-28027327]], [[pmid-29420467]], [[pmid-29713003]], [[pmid-30205045]], [[pmid-30867590]], [[pmid-31552290]], [[pmid-31768066]], [[pmid-32220886]] *(+13 more — see [All Concepts](#all-concepts-az))*

#### #resistance (26 papers) {#resistance}

*Papers studying resistance in the context of cancer genomics and cBioPortal analysis.*

**Papers (26):** [[pmid-24265153]], [[pmid-27646943]], [[pmid-28027327]], [[pmid-29122777]], [[pmid-30150660]], [[pmid-30687805]], [[pmid-31552290]], [[pmid-32404308]], [[pmid-32719455]], [[pmid-32864625]], [[pmid-32913971]], [[pmid-34544752]], [[pmid-34795269]], [[pmid-35304457]], [[pmid-35705558]] *(+11 more — see [All Concepts](#all-concepts-az))*

#### #prostate (23 papers) {#prostate}

*Prostate cancer genomics including localized, castration-resistant, and metastatic settings*

**Papers (23):** [[pmid-22610119]], [[pmid-22722839]], [[pmid-23622249]], [[pmid-25024180]], [[pmid-26000489]], [[pmid-26544944]], [[pmid-26855148]], [[pmid-26928463]], [[pmid-28825054]], [[pmid-29610475]], [[pmid-30537516]], [[pmid-31061129]], [[pmid-31564440]], [[pmid-31768066]], [[pmid-32214244]] *(+8 more — see [All Concepts](#all-concepts-az))*

#### #urothelial (22 papers) {#urothelial}

*Urothelial/bladder cancer genomics*

**Papers (22):** [[pmid-23897969]], [[pmid-24121792]], [[pmid-24476821]], [[pmid-25092538]], [[pmid-25096233]], [[pmid-26278805]], [[pmid-26901067]], [[pmid-27749842]], [[pmid-27939400]], [[pmid-28583311]], [[pmid-28988769]], [[pmid-29625057]], [[pmid-30290956]], [[pmid-32332851]], [[pmid-33397444]] *(+7 more — see [All Concepts](#all-concepts-az))*

#### #sarcoma (21 papers) {#sarcoma}

*Soft tissue and bone sarcoma genomics with complex karyotypes and recurrent fusions*

**Papers (21):** [[pmid-20601955]], [[pmid-24436047]], [[pmid-25223734]], [[pmid-25240281]], [[pmid-29100075]], [[pmid-31871300]], [[pmid-32299819]], [[pmid-35292802]], [[pmid-35585047]], [[pmid-35705558]], [[pmid-35705560]], [[pmid-36577525]], [[pmid-37315267]], [[pmid-37350195]], [[pmid-37477937]] *(+6 more — see [All Concepts](#all-concepts-az))*

#### #lung (20 papers) {#lung}

*Lung cancer genomics including NSCLC (adenocarcinoma, squamous) and SCLC*

**Papers (20):** [[pmid-18948947]], [[pmid-22941188]], [[pmid-22941189]], [[pmid-22980975]], [[pmid-25079552]], [[pmid-25765070]], [[pmid-28336552]], [[pmid-28445469]], [[pmid-31768066]], [[pmid-32214244]], [[pmid-32791233]], [[pmid-34290393]], [[pmid-34493867]], [[pmid-35304457]], [[pmid-35440124]] *(+5 more — see [All Concepts](#all-concepts-az))*

---

## Cancer Type Index

Papers grouped by primary cancer type. Many papers span multiple types (pan-cancer studies appear in multiple sections).

### 🧠 Brain / CNS (25 papers)

- [[pmid-18772890]] — *Comprehensive genomic characterization defines human glioblastoma genes and core path...*
- [[pmid-22722829]] — *pmid-22722829*
- [[pmid-22820256]] — *pmid-22820256*
- [[pmid-22832583]] — *Dissecting the genomic complexity underlying medulloblastoma*
- [[pmid-23817572]] — *Recurrent somatic alterations of FGFR1 and NTRK2 in pilocytic astrocytoma*
- [[pmid-24120142]] — *pmid-24120142*
- [[pmid-24336570]] — *pmid-24336570*
- [[pmid-25991819]] — *Genome-Wide Analysis Uncovers Novel Recurrent Alterations in Primary Central Nervous ...*
- [[pmid-26760213]] — *pmid-26760213*
- [[pmid-26824661]] — *pmid-26824661*
- [[pmid-28472509]] — *Multicenter phase II study of temozolomide and myeloablative chemotherapy with autolo...*
- [[pmid-28726821]] — *pmid-28726821*
- [[pmid-30643254]] — *Tumor mutational load predicts survival after immunotherapy across multiple cancer ty...*
- [[pmid-30675060]] — *Tracking tumour evolution in glioma through liquid biopsies of cerebrospinal fluid.*
- [[pmid-30742119]] — *pmid-30742119*
- [[pmid-30742122]] — *pmid-30742122*
- [[pmid-31263031]] — *Genomic Correlates of Disease Progression and Treatment Response in Prospectively Cha...*
- [[pmid-31748746]] — *pmid-31748746*
- [[pmid-31852831]] — *pmid-31852831*
- [[pmid-33242424]] — *pmid-33242424*
- [[pmid-33577785]] — *Proteogenomic and metabolomic characterization of human glioblastoma.*
- [[pmid-35649412]] — *pmid-35649412*
- [[pmid-37910594]] — *Tumor Volume Growth Rates and Doubling Times during Active Surveillance of IDH-mutant...*
- [[pmid-38117484]] — *The Epigenetic Evolution of Glioma Is Determined by the IDH1 Mutation Status and Trea...*
- [[pmid-39289779]] — *Real-world experience with circulating tumor DNA in cerebrospinal fluid from patients...*

### 🫁 Lung (25 papers)

- [[pmid-18948947]] — *Somatic mutations affect key pathways in lung adenocarcinoma.*
- [[pmid-22941188]] — *pmid-22941188*
- [[pmid-22941189]] — *Comprehensive genomic analysis identifies SOX2 as a frequently amplified gene in smal...*
- [[pmid-22980975]] — *pmid-22980975*
- [[pmid-25079552]] — *pmid-25079552*
- [[pmid-25765070]] — *Mutational landscape determines sensitivity to PD-1 blockade in non-small cell lung c...*
- [[pmid-28196596]] — *pmid-28196596*
- [[pmid-28336552]] — *Prospective Comprehensive Molecular Characterization of Lung Adenocarcinomas for Effi...*
- [[pmid-28445469]] — *Phylogenetic ctDNA analysis depicts early-stage lung cancer evolution.*
- [[pmid-29337640]] — *Molecular Determinants of Response to Anti-Programmed Cell Death (PD)-1 and Anti-Prog...*
- [[pmid-29657128]] — *pmid-29657128*
- [[pmid-31768066]] — *pmid-31768066*
- [[pmid-32214244]] — *pmid-32214244*
- [[pmid-32791233]] — *The Underlying Tumor Genomics of Predominant Histologic Subtypes in Lung Adenocarcino...*
- [[pmid-34290393]] — *Preoperative clinical and tumor genomic features associated with pathologic lymph nod...*
- [[pmid-34493867]] — *pmid-34493867*
- [[pmid-35304457]] — *The evolution of RET inhibitor resistance in RET-driven lung and thyroid cancers.*
- [[pmid-35440124]] — *pmid-35440124*
- [[pmid-36038778]] — *pmid-36038778*
- [[pmid-36357680]] — *Overall survival with circulating tumor DNA-guided therapy in advanced non-small-cell...*
- [[pmid-37084736]] — *pmid-37084736*
- [[pmid-37591896]] — *pmid-37591896*
- [[pmid-39147831]] — *DNA liquid biopsy-based prediction of cancer-associated venous thromboembolism.*
- [[pmid-39185963]] — *pmid-39185963*
- [[pmid-39289779]] — *Real-world experience with circulating tumor DNA in cerebrospinal fluid from patients...*

### 🫀 Breast (41 papers)

- [[msk-impact-2017]] — *Mutational landscape of metastatic cancer revealed from prospective clinical sequenci...*
- [[pmid-21720365]] — *pmid-21720365*
- [[pmid-22495314]] — *The clonal and mutational evolution spectrum of primary triple-negative breast cancer...*
- [[pmid-22522925]] — *The genomic and transcriptomic architecture of 2,000 breast tumours reveals novel sub...*
- [[pmid-22722201]] — *The landscape of cancer genes and mutational processes in breast cancer.*
- [[pmid-22722202]] — *Sequence analysis of mutations and translocations across breast cancer subtypes.*
- [[pmid-23000897]] — *pmid-23000897*
- [[pmid-26000489]] — *pmid-26000489*
- [[pmid-26095796]] — *Genomic landscape of adenoid cystic carcinoma of the breast.*
- [[pmid-26451490]] — *Comprehensive Molecular Portraits of Invasive Lobular Breast Cancer*
- [[pmid-26928463]] — *Substantial interindividual and limited intraindividual genomic diversity among tumor...*
- [[pmid-27161491]] — *The somatic mutation profiles of 2,433 breast cancers refines their genomic and trans...*
- [[pmid-28027327]] — *pmid-28027327*
- [[pmid-28783718]] — *pmid-28783718*
- [[pmid-28825054]] — *Prospective Genomic Profiling of Prostate Cancer Across Disease States Reveals Germli...*
- [[pmid-29420467]] — *pmid-29420467*
- [[pmid-29617662]] — *pmid-29617662*
- [[pmid-29713003]] — *Multi-omics profiling of younger Asian breast cancers reveals distinctive molecular s...*
- [[pmid-30205045]] — *The Genomic Landscape of Endocrine-Resistant Advanced Breast Cancers.*
- [[pmid-30867590]] — *pmid-30867590*
- [[pmid-31552290]] — *PIK3CA and MAP3K1 alterations imply luminal A status and are associated with clinical...*
- [[pmid-31768066]] — *pmid-31768066*
- [[pmid-32220886]] — *Whole-Exome Sequencing Analysis of the Progression from Non-Low-Grade Ductal Carcinom...*
- [[pmid-32404308]] — *The Genomic Landscape of Intrinsic and Acquired Resistance to Cyclin-Dependent Kinase...*
- [[pmid-32719455]] — *Molecular subtyping and genomic profiling expand precision medicine in refractory met...*
- [[pmid-32730818]] — *Specific Mutations in APC, but Not Alterations in DNA Damage Response, Associate With...*
- [[pmid-33263939]] — *Whole-exome sequencing analysis of juvenile papillomatosis and coexisting breast carc...*
- [[pmid-33863915]] — *TERT promoter hotspot mutations and gene amplification in metaplastic breast cancer.*
- [[pmid-34405229]] — *A Comprehensive Comparison of Early-Onset and Average-Onset Colorectal Cancers.*
- [[pmid-34544752]] — *pmid-34544752*
- [[pmid-34635660]] — *pmid-34635660*
- [[pmid-34795269]] — *pmid-34795269*
- [[pmid-35120664]] — *pmid-35120664*
- [[pmid-35121644]] — *Evaluating the efficacy of a priming dose of cyclophosphamide prior to pembrolizumab ...*
- [[pmid-35504881]] — *Alterations in homologous recombination repair genes in prostate cancer brain metasta...*
- [[pmid-35670774]] — *The Impact of PIK3R1 Mutations and Insulin-PI3K-Glycolytic Pathway Regulation in Pros...*
- [[pmid-36001024]] — *Proteogenomic Markers of Chemotherapy Resistance and Response in Triple-Negative Brea...*
- [[pmid-36585450]] — *pmid-36585450*
- [[pmid-38347189]] — *pmid-38347189*
- [[pmid-38488813]] — *pmid-38488813*
- [[pmid-39753968]] — *pmid-39753968*

### 🩸 Leukemia / AML / MPN (18 papers)

- [[pmid-23415222]] — *Evolution and impact of subclonal mutations in chronic lymphocytic leukemia.*
- [[pmid-23634996]] — *pmid-23634996*
- [[pmid-24030381]] — *pmid-24030381*
- [[pmid-24325359]] — *Somatic CALR mutations in myeloproliferative neoplasms with nonmutated JAK2.*
- [[pmid-25730765]] — *The landscape of somatic mutations in infant MLL-rearranged acute lymphoblastic leuke...*
- [[pmid-26466571]] — *pmid-26466571*
- [[pmid-27276561]] — *Genomic Classification and Prognosis in Acute Myeloid Leukemia*
- [[pmid-27776115]] — *pmid-27776115*
- [[pmid-27959731]] — *TP53 and Decitabine in Acute Myeloid Leukemia and Myelodysplastic Syndromes.*
- [[pmid-30333627]] — *Functional genomic landscape of acute myeloid leukaemia*
- [[pmid-31768066]] — *pmid-31768066*
- [[pmid-33106634]] — *Cancer therapy shapes the fitness landscape of clonal hematopoiesis*
- [[pmid-34145282]] — *pmid-34145282*
- [[pmid-35078859]] — *pmid-35078859*
- [[pmid-35868306]] — *pmid-35868306*
- [[pmid-35927489]] — *pmid-35927489*
- [[pmid-38147626]] — *pmid-38147626*
- [[pmid-39506116]] — *pmid-39506116*

### 🔵 Lymphoma (13 papers)

- [[pmid-21796119]] — *Frequent mutation of histone-modifying genes in non-Hodgkin lymphoma.*
- [[pmid-22343534]] — *Discovery and prioritization of somatic mutations in diffuse large B-cell lymphoma (D...*
- [[pmid-23699601]] — *pmid-23699601*
- [[pmid-24145436]] — *pmid-24145436*
- [[pmid-25991819]] — *Genome-Wide Analysis Uncovers Novel Recurrent Alterations in Primary Central Nervous ...*
- [[pmid-28985567]] — *pmid-28985567*
- [[pmid-29713087]] — *Molecular subtypes of diffuse large B cell lymphoma are associated with distinct path...*
- [[pmid-35121644]] — *Evaluating the efficacy of a priming dose of cyclophosphamide prior to pembrolizumab ...*
- [[pmid-35927489]] — *pmid-35927489*
- [[pmid-36201743]] — *pmid-36201743*
- [[pmid-36723991]] — *Molecular Evolution of Classic Hodgkin Lymphoma Revealed Through Whole-Genome Sequenc...*
- [[pmid-37078708]] — *TP53 mutations identify high-risk events for peripheral T-cell lymphoma treated with ...*
- [[pmid-38995739]] — *A Phase II Study Assessing Long-term Response to Ibrutinib Monotherapy in Recurrent o...*

### 🍓 Colorectal (20 papers)

- [[pmid-22810696]] — *pmid-22810696*
- [[pmid-22895193]] — *Recurrent R-spondin fusions in colon cancer*
- [[pmid-25164765]] — *pmid-25164765*
- [[pmid-25583493]] — *Novel recurrently mutated genes in African American colon cancers.*
- [[pmid-27149842]] — *pmid-27149842*
- [[pmid-29316426]] — *Clinical Sequencing Defines the Genomic Landscape of Metastatic Colorectal Cancer*
- [[pmid-29670109]] — *pmid-29670109*
- [[pmid-31871300]] — *TRK Fusions Are Enriched in Cancers with Uncommon Histologies and the Absence of Cano...*
- [[pmid-32730818]] — *Specific Mutations in APC, but Not Alterations in DNA Damage Response, Associate With...*
- [[pmid-34819518]] — *pmid-34819518*
- [[pmid-34910928]] — *Differential pre-malignant programs and microenvironment chart distinct paths to mali...*
- [[pmid-35235413]] — *Same-Cell Co-Occurrence of RAS Hotspot and BRAF V600E Mutations in Treatment-Naive Co...*
- [[pmid-35487942]] — *Comprehensive profiling of 1015 patients' exomes reveals genomic-clinical association...*
- [[pmid-35970919]] — *pmid-35970919*
- [[pmid-36355783]] — *pmid-36355783*
- [[pmid-36493333]] — *Molecular Classification of Appendiceal Adenocarcinoma.*
- [[pmid-36611031]] — *pmid-36611031*
- [[pmid-39386479]] — *pmid-39386479*
- [[pmid-39478232]] — *Progressive plasticity during colorectal cancer metastasis.*
- [[pmid-40100215]] — *Clinical and Genomic Characterization of Secondary Rectal Cancer After Radiotherapy f...*

### ⚫ Melanoma (17 papers)

- [[pmid-22622578]] — *pmid-22622578*
- [[pmid-22842228]] — *pmid-22842228*
- [[pmid-24265153]] — *The genetic landscape of clinical resistance to RAF inhibition in metastatic melanoma...*
- [[pmid-25409260]] — *pmid-25409260*
- [[pmid-26091043]] — *pmid-26091043*
- [[pmid-26343386]] — *pmid-26343386*
- [[pmid-26359337]] — *pmid-26359337*
- [[pmid-26683228]] — *pmid-26683228*
- [[pmid-26997480]] — *pmid-26997480*
- [[pmid-28373299]] — *pmid-28373299*
- [[pmid-29033130]] — *Tumor and Microenvironment Evolution during Immunotherapy with Nivolumab*
- [[pmid-32214244]] — *pmid-32214244*
- [[pmid-32913971]] — *PTEN Loss-of-Function Alterations Are Associated With Intrinsic Resistance to BRAF In...*
- [[pmid-33029006]] — *The genomic landscapes of individual melanocytes from human skin.*
- [[pmid-33509808]] — *Therapeutic Implications of Detecting MAPK-Activating Alterations in Cutaneous and Un...*
- [[pmid-38895302]] — *pmid-38895302*
- [[pmid-39975212]] — *Somatic mutations distinguish melanocyte subpopulations in human skin.*

### 🫀 Prostate (23 papers)

- [[pmid-22610119]] — *pmid-22610119*
- [[pmid-22722839]] — *The mutational landscape of lethal castration-resistant prostate cancer.*
- [[pmid-23622249]] — *Punctuated evolution of prostate cancer genomes.*
- [[pmid-25024180]] — *Copy number alteration burden predicts prostate cancer relapse.*
- [[pmid-26000489]] — *pmid-26000489*
- [[pmid-26544944]] — *The Molecular Taxonomy of Primary Prostate Cancer.*
- [[pmid-26855148]] — *pmid-26855148*
- [[pmid-26928463]] — *Substantial interindividual and limited intraindividual genomic diversity among tumor...*
- [[pmid-28825054]] — *Prospective Genomic Profiling of Prostate Cancer Across Disease States Reveals Germli...*
- [[pmid-29610475]] — *The long tail of oncogenic drivers in prostate cancer.*
- [[pmid-30537516]] — *Molecular Evolution of Early-Onset Prostate Cancer Identifies Molecular Risk Markers ...*
- [[pmid-31061129]] — *pmid-31061129*
- [[pmid-31564440]] — *pmid-31564440*
- [[pmid-31768066]] — *pmid-31768066*
- [[pmid-32214244]] — *pmid-32214244*
- [[pmid-32220891]] — *Oncogenic Genomic Alterations, Clinical Phenotypes, and Outcomes in Metastatic Castra...*
- [[pmid-32317181]] — *Pan-cancer Analysis of CDK12 Alterations Identifies a Subset of Prostate Cancers with...*
- [[pmid-34667026]] — *pmid-34667026*
- [[pmid-35120664]] — *pmid-35120664*
- [[pmid-35617398]] — *pmid-35617398*
- [[pmid-35670774]] — *The Impact of PIK3R1 Mutations and Insulin-PI3K-Glycolytic Pathway Regulation in Pros...*
- [[pmid-38488813]] — *pmid-38488813*
- [[pmid-38949888]] — *pmid-38949888*

### 🟡 Pancreatic (8 papers)

- [[pmid-22158988]] — *Whole-exome sequencing of neoplastic cysts of the pancreas reveals recurrent mutation...*
- [[pmid-23103869]] — *Pancreatic cancer genomes reveal aberrations in axon guidance pathway genes.*
- [[pmid-24293293]] — *Whole-exome sequencing of pancreatic neoplasms with acinar differentiation.*
- [[pmid-25855536]] — *Whole-exome sequencing of pancreatic cancer defines genetic diversity and therapeutic...*
- [[pmid-31249418]] — *Organoid Profiling Identifies Common Responders to Chemotherapy in Pancreatic Cancer.*
- [[pmid-34534465]] — *Proteogenomic characterization of pancreatic ductal adenocarcinoma.*
- [[pmid-35662283]] — *Sotigalimab and/or nivolumab with chemotherapy in first-line metastatic pancreatic ca...*
- [[pmid-39214094]] — *Distinct clinical outcomes and biological features of specific KRAS mutants in human ...*

### 🟤 Ovarian (6 papers)

- [[pmid-21720365]] — *pmid-21720365*
- [[pmid-24658004]] — *Recurrent SMARCA4 mutations in small cell carcinoma of the ovary*
- [[pmid-34635660]] — *pmid-34635660*
- [[pmid-34819508]] — *pmid-34819508*
- [[pmid-35443055]] — *pmid-35443055*
- [[pmid-39386723]] — *pmid-39386723*

### 🔴 Renal / Kidney (7 papers)

- [[pmid-24487277]] — *pmid-24487277*
- [[pmid-25155756]] — *The somatic genomic landscape of chromophobe renal cell carcinoma.*
- [[pmid-25401301]] — *Spectrum of diverse genomic alterations define non-clear cell renal carcinoma subtype...*
- [[pmid-27169994]] — *pmid-27169994*
- [[pmid-27713405]] — *pmid-27713405*
- [[pmid-29301960]] — *Genomic correlates of response to immune checkpoint therapies in clear cell renal cel...*
- [[pmid-29867230]] — *Clinical activity and molecular correlates of response to atezolizumab alone or in co...*

### 🟠 Urothelial / Bladder (23 papers)

- [[pmid-23897969]] — *Prevalence and co-occurrence of actionable genomic alterations in high-grade bladder ...*
- [[pmid-24121792]] — *Whole-genome and whole-exome sequencing of bladder cancer identifies frequent alterat...*
- [[pmid-24476821]] — *pmid-24476821*
- [[pmid-25092538]] — *pmid-25092538*
- [[pmid-25096233]] — *Somatic ERCC2 mutations correlate with cisplatin sensitivity in muscle-invasive uroth...*
- [[pmid-26278805]] — *Genomic Characterization of Upper Tract Urothelial Carcinoma*
- [[pmid-26901067]] — *Frequent somatic CDH1 loss-of-function mutations in plasmacytoid variant bladder canc...*
- [[pmid-27749842]] — *pmid-27749842*
- [[pmid-27939400]] — *pmid-27939400*
- [[pmid-28583311]] — *pmid-28583311*
- [[pmid-28988769]] — *Comprehensive Molecular Characterization of Muscle-Invasive Bladder Cancer*
- [[pmid-29617662]] — *pmid-29617662*
- [[pmid-29625057]] — *Tumor Evolution and Drug Response in Patient-Derived Organoid Models of Bladder Cance...*
- [[pmid-30290956]] — *pmid-30290956*
- [[pmid-32332851]] — *pmid-32332851*
- [[pmid-33397444]] — *pmid-33397444*
- [[pmid-36333289]] — *pmid-36333289*
- [[pmid-36543146]] — *Genomic heterogeneity as a barrier to precision oncology in urothelial cancer.*
- [[pmid-37682528]] — *pmid-37682528*
- [[pmid-39499893]] — *DNA Damage Response Alterations Predict for Neoadjuvant Chemotherapy Sensitivity in M...*
- [[pmid-39550333]] — *Molecular Heterogeneity and Immune Infiltration Drive Clinical Outcomes in Upper Trac...*
- [[pmid-39642637]] — *pmid-39642637*
- [[pmid-40256659]] — *Circulating Tumor DNA and Response to Cisplatin-based Chemotherapy in Patients with M...*

### 🟢 Endometrial / Uterine (10 papers)

- [[pmid-23636398]] — *pmid-23636398*
- [[pmid-28485815]] — *Somatic mutation profiles of clear cell endometrial tumors revealed by whole exome an...*
- [[pmid-30068706]] — *Clinical Utility of Prospective Molecular Characterization in Advanced Endometrial Ca...*
- [[pmid-32299819]] — *pmid-32299819*
- [[pmid-35849120]] — *pmid-35849120*
- [[pmid-36007103]] — *pmid-36007103*
- [[pmid-37651310]] — *pmid-37651310*
- [[pmid-38488807]] — *pmid-38488807*
- [[pmid-38653864]] — *pmid-38653864*
- [[pmid-39031567]] — *pmid-39031567*

### 🔵 Thyroid (5 papers)

- [[pmid-25417114]] — *pmid-25417114*
- [[pmid-26878173]] — *pmid-26878173*
- [[pmid-31871300]] — *TRK Fusions Are Enriched in Cancers with Uncommon Histologies and the Absence of Cano...*
- [[pmid-35304457]] — *The evolution of RET inhibitor resistance in RET-driven lung and thyroid cancers.*
- [[pmid-38412093]] — *The genomic and evolutionary landscapes of anaplastic thyroid carcinoma.*

### 🟣 Sarcoma (22 papers)

- [[pmid-20601955]] — *Subtype-specific genomic alterations define new targets for soft-tissue sarcoma thera...*
- [[pmid-24436047]] — *Comprehensive genomic analysis of rhabdomyosarcoma reveals a landscape of alterations...*
- [[pmid-25223734]] — *Genomic landscape of Ewing sarcoma defines an aggressive subtype with co-association ...*
- [[pmid-25240281]] — *PRC2 is recurrently inactivated through EED or SUZ12 loss in malignant peripheral ner...*
- [[pmid-29100075]] — *Comprehensive and Integrated Genomic Characterization of Adult Soft Tissue Sarcomas.*
- [[pmid-31871300]] — *TRK Fusions Are Enriched in Cancers with Uncommon Histologies and the Absence of Cano...*
- [[pmid-32299819]] — *pmid-32299819*
- [[pmid-35292802]] — *The European MAPPYACTS Trial: Precision Medicine Program in Pediatric and Adolescent ...*
- [[pmid-35585047]] — *Feasibility of whole genome and transcriptome profiling in pediatric and young adult ...*
- [[pmid-35705558]] — *pmid-35705558*
- [[pmid-35705560]] — *pmid-35705560*
- [[pmid-36577525]] — *Whole-genome characterization of myoepithelial carcinomas of the soft tissue.*
- [[pmid-36593350]] — *Expanded genetic testing of GIST patients identifies high proportion of non-syndromic...*
- [[pmid-37315267]] — *Extremity Rhabdomyosarcoma-An Integrated Clinicopathologic and Genomic Study to Impro...*
- [[pmid-37350195]] — *pmid-37350195*
- [[pmid-37477937]] — *pmid-37477937*
- [[pmid-37730754]] — *Sequential genomic analysis using a multisample/multiplatform approach to better defi...*
- [[pmid-37980418]] — *Comprehensive analysis reveals potential therapeutic targets and an integrated risk s...*
- [[pmid-38335254]] — *pmid-38335254*
- [[pmid-38488807]] — *pmid-38488807*
- [[pmid-39305899]] — *The landscape of drug sensitivity and resistance in sarcoma.*
- [[pmid-41758938]] — *Single-cell protein activity analysis reveals aberrant myogenesis and IGF2-PI3K pathw...*

### 🟡 Liver / HCC (4 papers)

- [[pmid-25822088]] — *pmid-25822088*
- [[pmid-30052636]] — *pmid-30052636*
- [[pmid-31130341]] — *pmid-31130341*
- [[pmid-37769223]] — *Targeted Molecular Profiling of Circulating Cell-Free DNA in Patients With Advanced H...*

### 🟤 Gastric / Esophageal / GEJ (11 papers)

- [[pmid-23525077]] — *Exome and whole-genome sequencing of esophageal adenocarcinoma identifies recurrent d...*
- [[pmid-24686850]] — *pmid-24686850*
- [[pmid-24816253]] — *Paired exome analysis of Barrett's esophagus and adenocarcinoma.*
- [[pmid-25079317]] — *pmid-25079317*
- [[pmid-25583476]] — *pmid-25583476*
- [[pmid-28052061]] — *pmid-28052061*
- [[pmid-29122777]] — *Genetic Predictors of Response to Systemic Therapy in Esophagogastric Cancer*
- [[pmid-29670109]] — *pmid-29670109*
- [[pmid-33795256]] — *pmid-33795256*
- [[pmid-35377946]] — *The Role of the TP53 Pathway in Predicting Response to Neoadjuvant Therapy in Esophag...*
- [[pmid-37699004]] — *pmid-37699004*

### 🩵 Head and Neck (6 papers)

- [[pmid-21798893]] — *The mutational landscape of head and neck squamous cell carcinoma.*
- [[pmid-21798897]] — *pmid-21798897*
- [[pmid-26631609]] — *pmid-26631609*
- [[pmid-26862087]] — *Whole-Genome Sequencing of Salivary Gland Adenoid Cystic Carcinoma.*
- [[pmid-27442865]] — *The Molecular Landscape of Recurrent and Metastatic Head and Neck Cancers: Insights F...*
- [[pmid-35982973]] — *Whole genome analysis reveals the genomic complexity in metastatic cutaneous squamous...*

### 🧒 Pediatric (29 papers)

- [[pmid-22722829]] — *pmid-22722829*
- [[pmid-22820256]] — *pmid-22820256*
- [[pmid-22832583]] — *Dissecting the genomic complexity underlying medulloblastoma*
- [[pmid-23334666]] — *The genetic landscape of high-risk neuroblastoma.*
- [[pmid-23817572]] — *Recurrent somatic alterations of FGFR1 and NTRK2 in pilocytic astrocytoma*
- [[pmid-24436047]] — *Comprehensive genomic analysis of rhabdomyosarcoma reveals a landscape of alterations...*
- [[pmid-25730765]] — *The landscape of somatic mutations in infant MLL-rearranged acute lymphoblastic leuke...*
- [[pmid-26466568]] — *Telomerase activation by genomic rearrangements in high-risk neuroblastoma.*
- [[pmid-26760213]] — *pmid-26760213*
- [[pmid-26977886]] — *pmid-26977886*
- [[pmid-27776115]] — *pmid-27776115*
- [[pmid-28007021]] — *pmid-28007021*
- [[pmid-31693904]] — *pmid-31693904*
- [[pmid-32561749]] — *A clinically and genomically annotated nerve sheath tumor biospecimen repository.*
- [[pmid-32633890]] — *Cell-free DNA profiling in retinoblastoma patients with advanced intraocular disease:...*
- [[pmid-33242424]] — *pmid-33242424*
- [[pmid-33466343]] — *pmid-33466343*
- [[pmid-35078859]] — *pmid-35078859*
- [[pmid-35292802]] — *The European MAPPYACTS Trial: Precision Medicine Program in Pediatric and Adolescent ...*
- [[pmid-35585047]] — *Feasibility of whole genome and transcriptome profiling in pediatric and young adult ...*
- [[pmid-36201743]] — *pmid-36201743*
- [[pmid-36862133]] — *Overcoming Barriers to Tumor Genomic Profiling through Direct-to-Patient Outreach.*
- [[pmid-37169874]] — *pmid-37169874*
- [[pmid-37315267]] — *Extremity Rhabdomyosarcoma-An Integrated Clinicopathologic and Genomic Study to Impro...*
- [[pmid-37730754]] — *Sequential genomic analysis using a multisample/multiplatform approach to better defi...*
- [[pmid-37990009]] — *pmid-37990009*
- [[pmid-38212634]] — *A new genomic framework to categorize pediatric acute myeloid leukemia.*
- [[pmid-39305899]] — *The landscape of drug sensitivity and resistance in sarcoma.*
- [[pmid-41758938]] — *Single-cell protein activity analysis reveals aberrant myogenesis and IGF2-PI3K pathw...*

### 🌐 Pan-Cancer (78 papers)

- [[msk-50k-2026]] — *Cancer type-specific variation in patterns of driver alterations across 50,000 tumors*
- [[msk-impact-2017]] — *Mutational landscape of metastatic cancer revealed from prospective clinical sequenci...*
- [[pmid-18772890]] — *Comprehensive genomic characterization defines human glioblastoma genes and core path...*
- [[pmid-21720365]] — *pmid-21720365*
- [[pmid-22460905]] — *The Cancer Cell Line Encyclopedia enables predictive modelling of anticancer drug sen...*
- [[pmid-22810696]] — *pmid-22810696*
- [[pmid-23000897]] — *pmid-23000897*
- [[pmid-23634996]] — *pmid-23634996*
- [[pmid-23636398]] — *pmid-23636398*
- [[pmid-24476821]] — *pmid-24476821*
- [[pmid-25079317]] — *pmid-25079317*
- [[pmid-25079552]] — *pmid-25079552*
- [[pmid-25096233]] — *Somatic ERCC2 mutations correlate with cisplatin sensitivity in muscle-invasive uroth...*
- [[pmid-25417114]] — *pmid-25417114*
- [[pmid-26451490]] — *Comprehensive Molecular Portraits of Invasive Lobular Breast Cancer*
- [[pmid-26544944]] — *The Molecular Taxonomy of Primary Prostate Cancer.*
- [[pmid-26804919]] — *Ampullary Cancers Harbor ELF3 Tumor Suppressor Gene Mutations and Exhibit Frequent WN...*
- [[pmid-28007021]] — *pmid-28007021*
- [[pmid-28052061]] — *pmid-28052061*
- [[pmid-28162975]] — *Comprehensive Molecular Characterization of Pheochromocytoma and Paraganglioma.*
- [[pmid-28336552]] — *Prospective Comprehensive Molecular Characterization of Lung Adenocarcinomas for Effi...*
- [[pmid-28472509]] — *Multicenter phase II study of temozolomide and myeloablative chemotherapy with autolo...*
- [[pmid-28783718]] — *pmid-28783718*
- [[pmid-28825054]] — *Prospective Genomic Profiling of Prostate Cancer Across Disease States Reveals Germli...*
- [[pmid-28988769]] — *Comprehensive Molecular Characterization of Muscle-Invasive Bladder Cancer*
- [[pmid-29100075]] — *Comprehensive and Integrated Genomic Characterization of Adult Soft Tissue Sarcomas.*
- [[pmid-29596782]] — *Scalable Open Science Approach for Mutation Calling of Tumor Exomes Using Multiple Ge...*
- [[pmid-29610475]] — *The long tail of oncogenic drivers in prostate cancer.*
- [[pmid-29617662]] — *pmid-29617662*
- [[pmid-29622463]] — *pmid-29622463*
- [[pmid-29625048]] — *Cell-of-Origin Patterns Dominate the Molecular Classification of 10,000 Tumors from 3...*
- [[pmid-29625049]] — *Perspective on Oncogenic Processes at the End of the Beginning of Cancer Genomics.*
- [[pmid-29625050]] — *Oncogenic Signaling Pathways in The Cancer Genome Atlas.*
- [[pmid-29625055]] — *An Integrated TCGA Pan-Cancer Clinical Data Resource to Drive High-Quality Survival O...*
- [[pmid-29850653]] — *pmid-29850653*
- [[pmid-30427539]] — *Regional differences in gallbladder cancer pathogenesis: Insights from a multi-instit...*
- [[pmid-30643254]] — *Tumor mutational load predicts survival after immunotherapy across multiple cancer ty...*
- [[pmid-30675060]] — *Tracking tumour evolution in glioma through liquid biopsies of cerebrospinal fluid.*
- [[pmid-30687805]] — *Real-Time Genomic Characterization of Metastatic Pancreatic Neuroendocrine Tumors Has...*
- [[pmid-32025007]] — *Pan-cancer analysis of whole genomes.*
- [[pmid-32214244]] — *pmid-32214244*
- [[pmid-32220886]] — *Whole-Exome Sequencing Analysis of the Progression from Non-Low-Grade Ductal Carcinom...*
- [[pmid-32220891]] — *Oncogenic Genomic Alterations, Clinical Phenotypes, and Outcomes in Metastatic Castra...*
- [[pmid-32317181]] — *Pan-cancer Analysis of CDK12 Alterations Identifies a Subset of Prostate Cancers with...*
- [[pmid-32437664]] — *First-line pembrolizumab and trastuzumab in HER2-positive oesophageal, gastric, or ga...*
- [[pmid-32730818]] — *Specific Mutations in APC, but Not Alterations in DNA Damage Response, Associate With...*
- [[pmid-32791233]] — *The Underlying Tumor Genomics of Predominant Histologic Subtypes in Lung Adenocarcino...*
- [[pmid-33106634]] — *Cancer therapy shapes the fitness landscape of clonal hematopoiesis*
- [[pmid-33242424]] — *pmid-33242424*
- [[pmid-33509808]] — *Therapeutic Implications of Detecting MAPK-Activating Alterations in Cutaneous and Un...*
- [[pmid-33795256]] — *pmid-33795256*
- [[pmid-34059130]] — *Tumor fraction-guided cell-free DNA profiling in metastatic solid tumor patients*
- [[pmid-34290393]] — *Preoperative clinical and tumor genomic features associated with pathologic lymph nod...*
- [[pmid-34405229]] — *A Comprehensive Comparison of Early-Onset and Average-Onset Colorectal Cancers.*
- [[pmid-35120664]] — *pmid-35120664*
- [[pmid-35235413]] — *Same-Cell Co-Occurrence of RAS Hotspot and BRAF V600E Mutations in Treatment-Naive Co...*
- [[pmid-35292802]] — *The European MAPPYACTS Trial: Precision Medicine Program in Pediatric and Adolescent ...*
- [[pmid-35377946]] — *The Role of the TP53 Pathway in Predicting Response to Neoadjuvant Therapy in Esophag...*
- [[pmid-35585047]] — *Feasibility of whole genome and transcriptome profiling in pediatric and young adult ...*
- [[pmid-35871175]] — *pmid-35871175*
- [[pmid-36001024]] — *Proteogenomic Markers of Chemotherapy Resistance and Response in Triple-Negative Brea...*
- [[pmid-36038778]] — *pmid-36038778*
- [[pmid-36044468]] — *pmid-36044468*
- [[pmid-36593350]] — *Expanded genetic testing of GIST patients identifies high proportion of non-syndromic...*
- [[pmid-36862133]] — *Overcoming Barriers to Tumor Genomic Profiling through Direct-to-Patient Outreach.*
- [[pmid-37315267]] — *Extremity Rhabdomyosarcoma-An Integrated Clinicopathologic and Genomic Study to Impro...*
- [[pmid-37730754]] — *Sequential genomic analysis using a multisample/multiplatform approach to better defi...*
- [[pmid-37769223]] — *Targeted Molecular Profiling of Circulating Cell-Free DNA in Patients With Advanced H...*
- [[pmid-38630790]] — *Diffuse Pleural Mesotheliomas with Genomic Near-Haploidization: A Newly Recognized Su...*
- [[pmid-39147831]] — *DNA liquid biopsy-based prediction of cancer-associated venous thromboembolism.*
- [[pmid-39214094]] — *Distinct clinical outcomes and biological features of specific KRAS mutants in human ...*
- [[pmid-39289779]] — *Real-world experience with circulating tumor DNA in cerebrospinal fluid from patients...*
- [[pmid-39305899]] — *The landscape of drug sensitivity and resistance in sarcoma.*
- [[pmid-39478232]] — *Progressive plasticity during colorectal cancer metastasis.*
- [[pmid-39499893]] — *DNA Damage Response Alterations Predict for Neoadjuvant Chemotherapy Sensitivity in M...*
- [[pmid-39506116]] — *pmid-39506116*
- [[pmid-39746944]] — *A deep multiple instance learning framework improves microsatellite instability detec...*
- [[pmid-41758938]] — *Single-cell protein activity analysis reveals aberrant myogenesis and IGF2-PI3K pathw...*

### 🩸 Other Hematologic (10 papers)

- [[pmid-21252315]] — *DAXX/ATRX, MEN1, and mTOR pathway genes are frequently altered in pancreatic neuroend...*
- [[pmid-22460905]] — *The Cancer Cell Line Encyclopedia enables predictive modelling of anticancer drug sen...*
- [[pmid-24434212]] — *Widespread genetic heterogeneity in multiple myeloma: implications for targeted thera...*
- [[pmid-26168399]] — *pmid-26168399*
- [[pmid-26855148]] — *pmid-26855148*
- [[pmid-30687805]] — *Real-Time Genomic Characterization of Metastatic Pancreatic Neuroendocrine Tumors Has...*
- [[pmid-31061129]] — *pmid-31061129*
- [[pmid-38630790]] — *Diffuse Pleural Mesotheliomas with Genomic Near-Haploidization: A Newly Recognized Su...*
- [[pmid-38758238]] — *Genome-wide loss of heterozygosity predicts aggressive, treatment-refractory behavior...*
- [[pmid-39478232]] — *Progressive plasticity during colorectal cancer metastasis.*

---

## Reproducibility Overview

Summary of data availability and tool support across all key findings in the knowledge base. Each finding in each paper is annotated with `Data availability` and `Tool support` values.

### Data Availability

| Status | Findings | % of Total |
|--------|----------|------------|
| ✅ Available | 1228 | 77% |
| ⚠️ Partial | 257 | 16% |
| ❌ Not Available | 102 | 6% |
| **Total findings** | **1587** | 100% |

### Tool Support

| Support Level | Findings | % of Total |
|---------------|----------|------------|
| 🔧 Native (built-in cBioPortal) | 1089 | 68% |
| 🔌 API (programmatic) | 287 | 18% |
| 🛠️ Custom (external tools) | 209 | 13% |
| 📋 Other | 2 | 0% |
| **Total** | **1587** | 100% |

### Papers by Availability Profile

| Profile | Papers |
|---------|--------|
| All findings available | 143 |
| Mixed availability | 153 |
| All findings unavailable | 2 |
| Other / no findings annotated | 55 |

---

## All Concepts A–Z

Complete alphabetical index of all 1443 concept tags extracted from frontmatter and findings. Format: `#concept (N papers): [[paper1]], [[paper2]]...`

Tags with only 1 paper are shown without paper links for brevity.

### #

- **#11q13** (1 paper): [[pmid-22522925]]
- **#12q-loss** (1 paper): [[pmid-26095796]]
- **#16q-loss** (1 paper): [[pmid-25223734]]
- **#17q-gain** (1 paper): [[pmid-26095796]]
- **#1p19q** (2 papers): [[pmid-28472509]], [[pmid-37910594]]
- **#1q-gain** (1 paper): [[pmid-25223734]]
- **#2-hydroxyglutarate** (1 paper): [[pmid-24185509]]
- **#22q** (1 paper): [[pmid-33025139]]

### A

- **#aa-transversion** (1 paper): [[pmid-23525077]]
- **#abc-dlbcl** (1 paper): [[pmid-29713087]]
- **#absolute** (1 paper): [[pmid-24434212]]
- **#acinar** (1 paper): [[pmid-24293293]]
- **#acquired-resistance** (1 paper): [[pmid-36543146]]
- **#acral** (1 paper): [[pmid-28373299]]
- **#actg1** (1 paper): [[pmid-25401301]]
- **#actionability** (172 papers): [[msk-impact-2017]], [[pmid-18772890]], [[pmid-20601955]], [[pmid-21252315]], [[pmid-21720365]], [[pmid-21798893]], [[pmid-21798897]], [[pmid-22343534]] *(+164 more)*
- **#active-surveillance** (2 papers): [[pmid-25024180]], [[pmid-37910594]]
- **#adaptive-resistance** (1 paper): [[pmid-27149842]]
- **#adenocarcinoma** (3 papers): [[pmid-18948947]], [[pmid-24816253]], [[pmid-33795256]]
- **#adenoid-cystic** (5 papers): [[pmid-23685749]], [[pmid-26095796]], [[pmid-26631609]], [[pmid-26862087]], [[pmid-31483290]]
- **#adenoma** (1 paper): [[pmid-34910928]]
- **#adjuvant** (2 papers): [[pmid-28445469]], [[pmid-37477937]]
- **#africa** (1 paper): [[pmid-34819518]]
- **#african-american** (1 paper): [[pmid-25583493]]
- **#age** (1 paper): [[pmid-23415222]]
- **#age-correlation** (1 paper): [[pmid-22832583]]
- **#age-of-onset** (4 papers): [[msk-50k-2026]], [[pmid-34405229]], [[pmid-35504881]], [[pmid-38212634]]
- **#aggressive-subtype** (1 paper): [[pmid-25223734]]
- **#aging** (1 paper): [[pmid-33029006]]
- **#aging-signature** (2 papers): [[pmid-29713087]], [[pmid-33263939]]
- **#ahr** (1 paper): [[pmid-22460905]]
- **#aid** (4 papers): [[pmid-22343534]], [[pmid-23699601]], [[pmid-29713087]], [[pmid-36723991]]
- **#aitl** (1 paper): [[pmid-37078708]]
- **#ajuba** (1 paper): [[pmid-34272401]]
- **#akt** (2 papers): [[pmid-35670774]], [[pmid-41758938]]
- **#akt-inhibitor** (1 paper): [[pmid-22722202]]
- **#akt1** (7 papers): [[pmid-22722201]], [[pmid-22722202]], [[pmid-26544944]], [[pmid-32404308]], [[pmid-33263939]], [[pmid-34534465]], [[pmid-37682528]]
- **#akt2** (1 paper): [[pmid-22722201]]
- **#akt3** (1 paper): [[pmid-22722202]]
- **#alk** (6 papers): [[pmid-23334666]], [[pmid-27158780]], [[pmid-27713405]], [[pmid-28336552]], [[pmid-29617662]], [[pmid-35292802]]
- **#alkylating-agent** (1 paper): [[pmid-30687805]]
- **#alkylating-agents** (1 paper): [[pmid-40097403]]
- **#alkylating-therapy** (1 paper): [[pmid-31263031]]
- **#all** (2 papers): [[pmid-25730765]], [[pmid-27776115]]
- **#all leukemia hypodiploid pediatric ikzf2 ikzf3 ras mapk pi3k copy-number aneuploidy tp53 survival wes wgs somatic-mutation near-haploid low-hypodiploid nf1 rb1 crebbp** (1 paper): [[pmid-23334668]]
- **#allele-specific-cn** (1 paper): [[msk-50k-2026]]
- **#allelic-imbalance** (2 papers): [[pmid-21796119]], [[pmid-39753968]]
- **#alpelisib** (1 paper): [[pmid-31552290]]
- **#alt** (4 papers): [[pmid-21252315]], [[pmid-24120142]], [[pmid-26466568]], [[pmid-40097403]]
- **#alteration-type-matters** (1 paper): [[msk-50k-2026]]
- **#aml** (5 papers): [[pmid-23634996]], [[pmid-27276561]], [[pmid-27959731]], [[pmid-30333627]], [[pmid-35868306]]
- **#amplification** (8 papers): [[pmid-22522925]], [[pmid-22895193]], [[pmid-22941189]], [[pmid-23525077]], [[pmid-24120142]], [[pmid-24436047]], [[pmid-24816253]], [[pmid-29100075]]
- **#anaplastic** (1 paper): [[pmid-26878173]]
- **#ancestry** (10 papers): [[msk-50k-2026]], [[pmid-22722202]], [[pmid-25583476]], [[pmid-25583493]], [[pmid-29713003]], [[pmid-30427539]], [[pmid-34667026]], [[pmid-34819518]] *(+2 more)*
- **#androgen-receptor** (3 papers): [[pmid-26928463]], [[pmid-31061129]], [[pmid-32220891]]
- **#androgen-signaling** (2 papers): [[pmid-22722839]], [[pmid-29610475]]
- **#aneuploidy** (5 papers): [[pmid-23334668]], [[pmid-29337640]], [[pmid-29622463]], [[pmid-36493333]], [[pmid-36723991]]
- **#angiogenesis** (3 papers): [[pmid-29867230]], [[pmid-32719455]], [[pmid-39550333]]
- **#angiosarcoma** (1 paper): [[pmid-37350195]]
- **#anti-pd-1** (1 paper): [[pmid-30742119]]
- **#anticoagulation** (1 paper): [[pmid-39147831]]
- **#antigen-presentation** (4 papers): [[pmid-27149842]], [[pmid-29337640]], [[pmid-30150660]], [[pmid-34910928]]
- **#antigen-processing-machinery** (1 paper): [[pmid-27149842]]
- **#apatinib** (1 paper): [[pmid-32719455]]
- **#apc** (14 papers): [[pmid-18948947]], [[pmid-22810696]], [[pmid-22895193]], [[pmid-28825054]], [[pmid-29316426]], [[pmid-29610475]], [[pmid-29625050]], [[pmid-32730818]] *(+6 more)*
- **#apm** (1 paper): [[pmid-27149842]]
- **#apobec** (22 papers): [[pmid-22722201]], [[pmid-24686850]], [[pmid-25155756]], [[pmid-25631445]], [[pmid-27749842]], [[pmid-28027327]], [[pmid-29422544]], [[pmid-29713003]] *(+14 more)*
- **#appendiceal** (1 paper): [[pmid-36493333]]
- **#ar** (16 papers): [[pmid-22722839]], [[pmid-23622249]], [[pmid-26000489]], [[pmid-26544944]], [[pmid-26855148]], [[pmid-26928463]], [[pmid-27442865]], [[pmid-28825054]] *(+8 more)*
- **#arid1a** (22 papers): [[pmid-23103869]], [[pmid-23525077]], [[pmid-24121792]], [[pmid-24185509]], [[pmid-24816253]], [[pmid-25092538]], [[pmid-25096233]], [[pmid-25233892]] *(+14 more)*
- **#arid1b** (1 paper): [[pmid-22722201]]
- **#arms** (1 paper): [[pmid-37315267]]
- **#arsi** (1 paper): [[pmid-31061129]]
- **#asbestos** (1 paper): [[pmid-38630790]]
- **#asct** (2 papers): [[pmid-28472509]], [[pmid-37078708]]
- **#asian** (4 papers): [[pmid-25583476]], [[pmid-29713003]], [[pmid-30427539]], [[pmid-35871175]]
- **#asian-cohort** (1 paper): [[pmid-35487942]]
- **#astrocytoma** (1 paper): [[pmid-31263031]]
- **#asxl1** (1 paper): [[pmid-24325359]]
- **#atc** (1 paper): [[pmid-38412093]]
- **#atm** (12 papers): [[pmid-18948947]], [[pmid-22895193]], [[pmid-23103869]], [[pmid-24145436]], [[pmid-24293293]], [[pmid-25855536]], [[pmid-26544944]], [[pmid-26928463]] *(+4 more)*
- **#atpase-inhibitor** (1 paper): [[pmid-24658004]]
- **#atrx** (14 papers): [[pmid-21252315]], [[pmid-24120142]], [[pmid-24336570]], [[pmid-26466568]], [[pmid-26824661]], [[pmid-29100075]], [[pmid-30675060]], [[pmid-30687805]] *(+6 more)*
- **#aurka** (2 papers): [[pmid-26855148]], [[pmid-32404308]]
- **#auroc** (1 paper): [[pmid-39147831]]
- **#axin2** (1 paper): [[pmid-38347189]]
- **#axon-guidance** (1 paper): [[pmid-23103869]]
- **#axonal-guidance** (1 paper): [[pmid-26862087]]
- **#azathioprine** (1 paper): [[pmid-34272401]]

### B

- **#b-all** (1 paper): [[pmid-27776115]]
- **#b-cell** (1 paper): [[pmid-35121644]]
- **#b-cell-receptor** (1 paper): [[pmid-23415222]]
- **#b2m** (6 papers): [[pmid-21796119]], [[pmid-27149842]], [[pmid-27158780]], [[pmid-29337640]], [[pmid-30150660]], [[pmid-36723991]]
- **#b7-h3** (1 paper): [[pmid-29100075]]
- **#baf-complex** (1 paper): [[pmid-24658004]]
- **#bap1** (9 papers): [[pmid-23792563]], [[pmid-24185509]], [[pmid-24487277]], [[pmid-26683228]], [[pmid-27713405]], [[pmid-28667006]], [[pmid-29301960]], [[pmid-35121644]] *(+1 more)*
- **#barrett** (1 paper): [[pmid-24816253]]
- **#basal** (2 papers): [[pmid-22495314]], [[pmid-27161491]]
- **#basal-like** (2 papers): [[pmid-22522925]], [[pmid-31249418]]
- **#bcg** (1 paper): [[pmid-28583311]]
- **#bcl2** (5 papers): [[pmid-21796119]], [[pmid-22343534]], [[pmid-23699601]], [[pmid-28985567]], [[pmid-29713087]]
- **#bcl6** (2 papers): [[pmid-28985567]], [[pmid-29713087]]
- **#bcl7a** (1 paper): [[pmid-21796119]]
- **#bcor** (4 papers): [[pmid-24436047]], [[pmid-25223734]], [[pmid-33466343]], [[pmid-37730754]]
- **#bcr** (2 papers): [[pmid-25024180]], [[pmid-30537516]]
- **#bcr-diversity** (1 paper): [[pmid-35121644]]
- **#bcr-signaling** (2 papers): [[pmid-22343534]], [[pmid-29713087]]
- **#belzutifan** (1 paper): [[pmid-40097403]]
- **#benign-precursor** (1 paper): [[pmid-33263939]]
- **#biallelic** (1 paper): [[pmid-24658004]]
- **#biallelic-inactivation** (1 paper): [[pmid-32317181]]
- **#biliary** (6 papers): [[pmid-24185509]], [[pmid-28667006]], [[pmid-29848569]], [[pmid-30427539]], [[pmid-33765338]], [[pmid-36228155]]
- **#bioinformatics** (1 paper): [[pmid-29596782]]
- **#biomarker** (120 papers): [[pmid-18948947]], [[pmid-20601955]], [[pmid-22460905]], [[pmid-22495314]], [[pmid-22722829]], [[pmid-22820256]], [[pmid-22895193]], [[pmid-22980975]] *(+112 more)*
- **#biorepository** (1 paper): [[pmid-32561749]]
- **#biphasic** (1 paper): [[pmid-38630790]]
- **#biphasic-mesothelioma** (1 paper): [[pmid-38630790]]
- **#birc7** (1 paper): [[pmid-25401301]]
- **#birt-hogg-dubé** (1 paper): [[pmid-25583493]]
- **#bladder** (17 papers): [[pmid-23897969]], [[pmid-24121792]], [[pmid-24476821]], [[pmid-25092538]], [[pmid-25096233]], [[pmid-26901067]], [[pmid-27939400]], [[pmid-28583311]] *(+9 more)*
- **#blca** (1 paper): [[pmid-29617662]]
- **#blis** (1 paper): [[pmid-32719455]]
- **#blood** (1 paper): [[pmid-32214244]]
- **#braf** (52 papers): [[msk-50k-2026]], [[msk-impact-2017]], [[pmid-22343534]], [[pmid-22460905]], [[pmid-22622578]], [[pmid-22802077]], [[pmid-22817889]], [[pmid-22895193]] *(+44 more)*
- **#braf-inhibitor** (2 papers): [[pmid-30687805]], [[pmid-32913971]]
- **#brain** (18 papers): [[pmid-18772890]], [[pmid-22722829]], [[pmid-22820256]], [[pmid-22832583]], [[pmid-23817572]], [[pmid-24336570]], [[pmid-25991819]], [[pmid-30643254]] *(+10 more)*
- **#brain-metastasis** (1 paper): [[pmid-37591896]]
- **#branched-evolution** (1 paper): [[pmid-36543146]]
- **#branching-evolution** (1 paper): [[pmid-27749842]]
- **#brca** (14 papers): [[msk-impact-2017]], [[pmid-21720365]], [[pmid-22722202]], [[pmid-26000489]], [[pmid-26928463]], [[pmid-28783718]], [[pmid-28825054]], [[pmid-29617662]] *(+6 more)*
- **#brca-signature** (1 paper): [[pmid-26683228]]
- **#brca1** (11 papers): [[pmid-22722201]], [[pmid-22722202]], [[pmid-23000897]], [[pmid-28825054]], [[pmid-29625049]], [[pmid-29713003]], [[pmid-31249418]], [[pmid-32025007]] *(+3 more)*
- **#brca2** (26 papers): [[pmid-22495314]], [[pmid-22722202]], [[pmid-23000897]], [[pmid-24293293]], [[pmid-25233892]], [[pmid-25583476]], [[pmid-25855536]], [[pmid-26544944]] *(+18 more)*
- **#brd9** (1 paper): [[pmid-25730765]]
- **#breast** (28 papers): [[pmid-22495314]], [[pmid-22722201]], [[pmid-22722202]], [[pmid-23000897]], [[pmid-26095796]], [[pmid-26451490]], [[pmid-27161491]], [[pmid-28027327]] *(+20 more)*
- **#breast metabric molecular-subtypes copy-number integrative-genomics classification survival er pik3ca tp53 pten myc erbb2 ccnd1 map3k1 cdh1 expression clustering intclust** (1 paper): [[pmid-22522925]]
- **#breast-cancer** (1 paper): [[pmid-37350195]]
- **#btk-inhibitor** (1 paper): [[pmid-38995739]]
- **#buparlisib** (1 paper): [[pmid-31552290]]
- **#burkitt** (1 paper): [[pmid-36201743]]

### C

- **#c-circle** (1 paper): [[pmid-40097403]]
- **#c-to-t-transition** (1 paper): [[pmid-22895193]]
- **#c9** (1 paper): [[pmid-35982973]]
- **#calcineurin** (1 paper): [[pmid-27158780]]
- **#calr** (1 paper): [[pmid-24325359]]
- **#candidate-drivers** (1 paper): [[pmid-26683228]]
- **#canonical-drivers** (1 paper): [[msk-50k-2026]]
- **#canonical-vs-noncanonical** (2 papers): [[msk-50k-2026]], [[pmid-31871300]]
- **#carboplatin** (2 papers): [[pmid-26928463]], [[pmid-36001024]]
- **#carcinogenesis** (1 paper): [[pmid-25583493]]
- **#carcinosarcoma** (1 paper): [[pmid-25233892]]
- **#card11** (1 paper): [[pmid-26551667]]
- **#casp8** (4 papers): [[pmid-21798893]], [[pmid-22722201]], [[pmid-25631445]], [[pmid-34272401]]
- **#castration-resistance** (2 papers): [[pmid-28825054]], [[pmid-32220891]]
- **#castration-resistant** (1 paper): [[pmid-22722839]]
- **#castration-sensitive** (1 paper): [[pmid-32220891]]
- **#cbfb** (1 paper): [[pmid-22722202]]
- **#ccec** (1 paper): [[pmid-28485815]]
- **#ccf** (1 paper): [[pmid-23415222]]
- **#ccle** (3 papers): [[pmid-22460905]], [[pmid-31068700]], [[pmid-31978347]]
- **#ccnd1** (6 papers): [[pmid-22522925]], [[pmid-22722201]], [[pmid-23897969]], [[pmid-30867590]], [[pmid-32317181]], [[pmid-39185963]]
- **#ccnd3** (1 paper): [[pmid-21796119]]
- **#ccne1** (3 papers): [[pmid-35377946]], [[pmid-37651310]], [[pmid-37699004]]
- **#ccne2** (1 paper): [[pmid-32404308]]
- **#ccrcc** (4 papers): [[pmid-24487277]], [[pmid-25155756]], [[pmid-27169994]], [[pmid-29301960]]
- **#cd40** (1 paper): [[pmid-35662283]]
- **#cd79b** (2 papers): [[pmid-29713087]], [[pmid-38995739]]
- **#cd8** (2 papers): [[pmid-32719455]], [[pmid-39550333]]
- **#cdh1** (10 papers): [[pmid-22722201]], [[pmid-23000897]], [[pmid-25079317]], [[pmid-25583476]], [[pmid-26451490]], [[pmid-26901067]], [[pmid-27161491]], [[pmid-30205045]] *(+2 more)*
- **#cdk12** (7 papers): [[pmid-26544944]], [[pmid-28825054]], [[pmid-29610475]], [[pmid-31061129]], [[pmid-32220891]], [[pmid-32317181]], [[pmid-38488813]]
- **#cdk4** (10 papers): [[pmid-18772890]], [[pmid-20601955]], [[pmid-24436047]], [[pmid-29100075]], [[pmid-29625050]], [[pmid-32404308]], [[pmid-34544752]], [[pmid-37315267]] *(+2 more)*
- **#cdk6** (2 papers): [[pmid-32404308]], [[pmid-34544752]]
- **#cdk7** (1 paper): [[pmid-34534465]]
- **#cdk8** (1 paper): [[pmid-25583493]]
- **#cdkn1b** (2 papers): [[pmid-22722201]], [[pmid-23622249]]
- **#cdkn2a** (67 papers): [[pmid-18772890]], [[pmid-18948947]], [[pmid-21798893]], [[pmid-22817889]], [[pmid-22960745]], [[pmid-23103869]], [[pmid-23334668]], [[pmid-23525077]] *(+59 more)*
- **#cdkn2c** (1 paper): [[pmid-24434212]]
- **#ceacam5** (1 paper): [[pmid-34534465]]
- **#ceacam6** (1 paper): [[pmid-34534465]]
- **#cell-composition** (1 paper): [[pmid-30537516]]
- **#cell-cycle** (14 papers): [[pmid-18948947]], [[pmid-21796119]], [[pmid-22522925]], [[pmid-23897969]], [[pmid-24816253]], [[pmid-26928463]], [[pmid-29625050]], [[pmid-29713087]] *(+6 more)*
- **#cell-line** (3 papers): [[pmid-22460905]], [[pmid-31068700]], [[pmid-31978347]]
- **#cell-of-origin** (5 papers): [[pmid-22832583]], [[pmid-29625048]], [[pmid-33025139]], [[pmid-34910928]], [[pmid-40097403]]
- **#cfdna** (18 papers): [[pmid-30675060]], [[pmid-31768066]], [[pmid-32214244]], [[pmid-32633890]], [[pmid-32864625]], [[pmid-34059130]], [[pmid-34145282]], [[pmid-35292802]] *(+10 more)*
- **#chd1** (2 papers): [[pmid-22722839]], [[pmid-23622249]]
- **#checkpoint-inhibitor** (2 papers): [[pmid-32437664]], [[pmid-32719455]]
- **#chek2** (2 papers): [[pmid-28825054]], [[pmid-30687805]]
- **#chemoresistance** (1 paper): [[pmid-36493333]]
- **#chemotherapy** (10 papers): [[pmid-23415222]], [[pmid-25164765]], [[pmid-27749842]], [[pmid-28472509]], [[pmid-31249418]], [[pmid-35662283]], [[pmid-36001024]], [[pmid-36333289]] *(+2 more)*
- **#chemotherapy-resistance** (1 paper): [[pmid-40097403]]
- **#chemotherapy-sensitivity** (2 papers): [[pmid-31249418]], [[pmid-39499893]]
- **#chile** (1 paper): [[pmid-30427539]]
- **#chinese-cohort** (1 paper): [[pmid-35487942]]
- **#cholangiocarcinoma** (6 papers): [[pmid-24185509]], [[pmid-28667006]], [[pmid-29848569]], [[pmid-31130341]], [[pmid-33765338]], [[pmid-38864854]]
- **#chondrosarcoma** (1 paper): [[pmid-39305899]]
- **#chop** (1 paper): [[pmid-37078708]]
- **#chordoma** (1 paper): [[pmid-39305899]]
- **#chr8q** (1 paper): [[pmid-34667026]]
- **#chr8q-gain** (1 paper): [[pmid-26683228]]
- **#chromatin** (13 papers): [[pmid-22941189]], [[pmid-23415222]], [[pmid-23525077]], [[pmid-24121792]], [[pmid-24185509]], [[pmid-26824661]], [[pmid-26862087]], [[pmid-27713405]] *(+5 more)*
- **#chromatin-dysregulation** (1 paper): [[pmid-21796119]]
- **#chromatin-modification** (1 paper): [[pmid-24120142]]
- **#chromatin-modifier** (6 papers): [[pmid-22343534]], [[pmid-22832583]], [[pmid-23792563]], [[pmid-25631445]], [[pmid-26168399]], [[pmid-38630790]]
- **#chromatin-remodeling** (18 papers): [[pmid-21252315]], [[pmid-22722201]], [[pmid-22722839]], [[pmid-23103869]], [[pmid-23685749]], [[pmid-24658004]], [[pmid-24816253]], [[pmid-25233892]] *(+10 more)*
- **#chromophobe** (2 papers): [[pmid-25155756]], [[pmid-25401301]]
- **#chromoplexy** (3 papers): [[pmid-23622249]], [[pmid-36577525]], [[pmid-38335254]]
- **#chromosomal-gains** (1 paper): [[pmid-36723991]]
- **#chromosomal-instability** (17 papers): [[pmid-22522925]], [[pmid-24974848]], [[pmid-25991819]], [[pmid-29622463]], [[pmid-29670109]], [[pmid-30687805]], [[pmid-31852831]], [[pmid-34290393]] *(+9 more)*
- **#chromosome5** (1 paper): [[pmid-22522925]]
- **#chromothripsis** (3 papers): [[pmid-26168399]], [[pmid-32025007]], [[pmid-39185963]]
- **#chuk** (1 paper): [[pmid-34272401]]
- **#cic** (1 paper): [[pmid-28472509]]
- **#cin** (3 papers): [[pmid-32791233]], [[pmid-35377946]], [[pmid-35487942]]
- **#cis** (1 paper): [[pmid-22522925]]
- **#cis-trans** (1 paper): [[pmid-22522925]]
- **#cisplatin** (4 papers): [[pmid-25096233]], [[pmid-27646943]], [[pmid-39499893]], [[pmid-40256659]]
- **#cisplatin-sensitivity** (1 paper): [[pmid-39499893]]
- **#classical** (2 papers): [[pmid-24120142]], [[pmid-31249418]]
- **#classical-subtype** (3 papers): [[pmid-22960745]], [[pmid-24120142]], [[pmid-25631445]]
- **#classification** (25 papers): [[pmid-22960745]], [[pmid-23636398]], [[pmid-23792563]], [[pmid-24974848]], [[pmid-25079317]], [[pmid-25417114]], [[pmid-25631445]], [[pmid-26091043]] *(+17 more)*
- **#claudin-low** (1 paper): [[pmid-39550333]]
- **#clear-cell** (1 paper): [[pmid-28485815]]
- **#clinical-deployment** (1 paper): [[pmid-25024180]]
- **#clinical-features** (1 paper): [[pmid-38630790]]
- **#clinical-implementation** (1 paper): [[pmid-35585047]]
- **#clinical-model** (1 paper): [[pmid-37980418]]
- **#clinical-outcomes** (1 paper): [[pmid-39305899]]
- **#clinical-pipeline** (1 paper): [[msk-impact-2017]]
- **#clinical-profiling** (1 paper): [[pmid-39214094]]
- **#clinical-sequencing** (2 papers): [[msk-impact-2017]], [[pmid-32317181]]
- **#clinical-trajectory** (1 paper): [[pmid-30537516]]
- **#clinical-trial** (8 papers): [[pmid-28472509]], [[pmid-30867592]], [[pmid-32719455]], [[pmid-35292802]], [[pmid-35662283]], [[pmid-37769223]], [[pmid-37910594]], [[pmid-39499893]]
- **#clinical-utility** (4 papers): [[msk-impact-2017]], [[pmid-25164765]], [[pmid-30068706]], [[pmid-35585047]]
- **#cll** (3 papers): [[pmid-23415222]], [[pmid-26466571]], [[pmid-35927489]]
- **#clonal-evolution** (67 papers): [[pmid-22495314]], [[pmid-23415222]], [[pmid-23622249]], [[pmid-23699601]], [[pmid-24145436]], [[pmid-24265153]], [[pmid-24325359]], [[pmid-24336570]] *(+59 more)*
- **#clonal-hematopoiesis** (6 papers): [[pmid-31768066]], [[pmid-33106634]], [[pmid-34145282]], [[pmid-35078859]], [[pmid-38147626]], [[pmid-39506116]]
- **#clonal-heterogeneity** (1 paper): [[pmid-22495314]]
- **#clonal-selection** (1 paper): [[pmid-32220886]]
- **#clonality** (25 papers): [[msk-50k-2026]], [[pmid-22343534]], [[pmid-23415222]], [[pmid-24030381]], [[pmid-25164765]], [[pmid-26095796]], [[pmid-27749842]], [[pmid-28196596]] *(+17 more)*
- **#clustering** (1 paper): [[pmid-39550333]]
- **#cms** (2 papers): [[pmid-34910928]], [[pmid-39478232]]
- **#cna** (4 papers): [[pmid-25223734]], [[pmid-26095796]], [[pmid-30068706]], [[pmid-30150660]]
- **#cna-burden** (2 papers): [[pmid-23897969]], [[pmid-25024180]]
- **#cna-devoid** (1 paper): [[pmid-22522925]]
- **#cna-landscape** (1 paper): [[pmid-25024180]]
- **#cns** (2 papers): [[pmid-35292802]], [[pmid-39289779]]
- **#cns-lymphoma** (2 papers): [[pmid-25991819]], [[pmid-38995739]]
- **#co-alterations** (1 paper): [[pmid-32437664]]
- **#co-expression** (1 paper): [[pmid-30537516]]
- **#co-mutation** (11 papers): [[msk-50k-2026]], [[pmid-23897969]], [[pmid-25223734]], [[pmid-28336552]], [[pmid-32864625]], [[pmid-35235413]], [[pmid-36493333]], [[pmid-38212634]] *(+3 more)*
- **#co-occurrence** (1 paper): [[pmid-29625050]]
- **#codeletion** (1 paper): [[pmid-28472509]]
- **#cohesin** (2 papers): [[pmid-24121792]], [[pmid-25223734]]
- **#cohort-size** (1 paper): [[msk-50k-2026]]
- **#colitis** (1 paper): [[pmid-36611031]]
- **#colon** (2 papers): [[pmid-22810696]], [[pmid-25583493]]
- **#colorectal** (18 papers): [[pmid-22810696]], [[pmid-22895193]], [[pmid-25164765]], [[pmid-25583493]], [[pmid-29316426]], [[pmid-29670109]], [[pmid-31871300]], [[pmid-32730818]] *(+10 more)*
- **#colorectal-cancer** (1 paper): [[pmid-34405229]]
- **#combination-therapy** (1 paper): [[pmid-29625050]]
- **#common-responder** (1 paper): [[pmid-31249418]]
- **#composite-biomarker** (1 paper): [[pmid-29337640]]
- **#convergent-evolution** (1 paper): [[pmid-37169874]]
- **#cooperative-drivers** (1 paper): [[pmid-40097403]]
- **#copy-number** (129 papers): [[pmid-18772890]], [[pmid-18948947]], [[pmid-20601955]], [[pmid-21720365]], [[pmid-21798893]], [[pmid-22460905]], [[pmid-22495314]], [[pmid-22522925]] *(+121 more)*
- **#copy-number-cluster** (1 paper): [[pmid-30068706]]
- **#cptac** (2 papers): [[pmid-33577785]], [[pmid-34534465]]
- **#crc** (14 papers): [[pmid-22810696]], [[pmid-22895193]], [[pmid-25164765]], [[pmid-27149842]], [[pmid-29316426]], [[pmid-32730818]], [[pmid-34819518]], [[pmid-34910928]] *(+6 more)*
- **#crc-genomics** (1 paper): [[pmid-35487942]]
- **#crebbp** (10 papers): [[pmid-21796119]], [[pmid-22343534]], [[pmid-23334668]], [[pmid-23685749]], [[pmid-25730765]], [[pmid-26168399]], [[pmid-26551667]], [[pmid-29713087]] *(+2 more)*
- **#cross-cohort** (1 paper): [[pmid-39550333]]
- **#cross-tumor** (1 paper): [[pmid-23817572]]
- **#crpc** (1 paper): [[pmid-26928463]]
- **#cscc** (2 papers): [[pmid-34272401]], [[pmid-35982973]]
- **#csf** (2 papers): [[pmid-30675060]], [[pmid-39289779]]
- **#ctcf** (4 papers): [[pmid-25223734]], [[pmid-27149842]], [[pmid-29670109]], [[pmid-30205045]]
- **#ctcl** (1 paper): [[pmid-26551667]]
- **#ctdna** (9 papers): [[pmid-28445469]], [[pmid-31768066]], [[pmid-32437664]], [[pmid-36355783]], [[pmid-36357680]], [[pmid-37406106]], [[pmid-37730754]], [[pmid-39147831]] *(+1 more)*
- **#ctdna-guided-therapy** (1 paper): [[pmid-39147831]]
- **#ctdnep1** (1 paper): [[pmid-22832583]]
- **#ctla4** (2 papers): [[pmid-25409260]], [[pmid-26359337]]
- **#ctnnb1** (14 papers): [[pmid-18948947]], [[pmid-22158988]], [[pmid-22722829]], [[pmid-22820256]], [[pmid-22832583]], [[pmid-24293293]], [[pmid-28726821]], [[pmid-28825054]] *(+6 more)*
- **#cul3** (1 paper): [[pmid-29610475]]
- **#cutaneous** (1 paper): [[pmid-35982973]]
- **#cwl** (1 paper): [[pmid-29596782]]
- **#cyld** (1 paper): [[pmid-24434212]]
- **#cyt-score** (1 paper): [[pmid-39550333]]
- **#cytof** (1 paper): [[pmid-35121644]]
- **#cytotoxic-immunity** (1 paper): [[pmid-34910928]]

### D

- **#dabrafenib** (1 paper): [[pmid-32913971]]
- **#darwinian-selection** (1 paper): [[pmid-25470049]]
- **#daxx** (2 papers): [[pmid-21252315]], [[pmid-30687805]]
- **#dcis** (2 papers): [[pmid-32220886]], [[pmid-33263939]]
- **#ddlps** (1 paper): [[pmid-29100075]]
- **#ddr** (6 papers): [[pmid-26928463]], [[pmid-28583311]], [[pmid-28825054]], [[pmid-30537516]], [[pmid-32730818]], [[pmid-39499893]]
- **#ddr-genes** (1 paper): [[pmid-40256659]]
- **#ddx3x** (2 papers): [[pmid-22722829]], [[pmid-22832583]]
- **#de-novo-metastatic** (1 paper): [[pmid-32220891]]
- **#de-novo-resistance** (1 paper): [[msk-impact-2017]]
- **#decitabine** (1 paper): [[pmid-27959731]]
- **#dedifferentiation** (1 paper): [[pmid-38412093]]
- **#deletion** (2 papers): [[pmid-22522925]], [[pmid-23334666]]
- **#dendritic-cell** (1 paper): [[pmid-35662283]]
- **#detection** (1 paper): [[pmid-39289779]]
- **#developmental** (1 paper): [[pmid-26977886]]
- **#diagnosis** (1 paper): [[pmid-37980418]]
- **#diagnostic** (1 paper): [[pmid-32214244]]
- **#diagnostic-biomarker** (1 paper): [[pmid-24325359]]
- **#diagnostics** (1 paper): [[pmid-22158988]]
- **#differentiation** (2 papers): [[pmid-24658004]], [[pmid-26878173]]
- **#dimerization** (1 paper): [[pmid-23817572]]
- **#dipg** (1 paper): [[pmid-23817572]]
- **#direct-to-patient** (1 paper): [[pmid-36862133]]
- **#dis3** (1 paper): [[pmid-24434212]]
- **#disease-volume** (1 paper): [[pmid-32220891]]
- **#distant-recurrence** (1 paper): [[pmid-39214094]]
- **#dlbcl** (7 papers): [[pmid-21796119]], [[pmid-22343534]], [[pmid-23699601]], [[pmid-28985567]], [[pmid-29713087]], [[pmid-36201743]], [[pmid-38995739]]
- **#dmmr** (1 paper): [[pmid-38653864]]
- **#dna-damage** (1 paper): [[pmid-23685749]]
- **#dna-damage-response** (4 papers): [[pmid-31249418]], [[pmid-32220891]], [[pmid-32730818]], [[pmid-39499893]]
- **#dna-methylation** (1 paper): [[pmid-23792563]]
- **#dna-repair** (9 papers): [[pmid-23415222]], [[pmid-25096233]], [[pmid-26544944]], [[pmid-29610475]], [[pmid-31061129]], [[pmid-31263031]], [[pmid-35585047]], [[pmid-36001024]] *(+1 more)*
- **#dnmt3a** (6 papers): [[pmid-24325359]], [[pmid-26551667]], [[pmid-27276561]], [[pmid-31768066]], [[pmid-37078708]], [[pmid-38147626]]
- **#docetaxel** (2 papers): [[pmid-32220891]], [[pmid-36001024]]
- **#dock2** (1 paper): [[pmid-23525077]]
- **#docker** (1 paper): [[pmid-29596782]]
- **#dominant-negative** (2 papers): [[pmid-26168399]], [[pmid-27776115]]
- **#dormancy** (1 paper): [[pmid-37169874]]
- **#dose-response** (1 paper): [[pmid-39147831]]
- **#double-hit** (1 paper): [[pmid-29713087]]
- **#driver** (1 paper): [[pmid-29625050]]
- **#driver-alterations** (2 papers): [[msk-50k-2026]], [[msk-impact-2017]]
- **#driver-context** (56 papers): [[msk-50k-2026]], [[pmid-21798893]], [[pmid-21798897]], [[pmid-22158988]], [[pmid-22343534]], [[pmid-22495314]], [[pmid-22610119]], [[pmid-22722201]] *(+48 more)*
- **#driver-discovery** (2 papers): [[pmid-21796119]], [[pmid-25583493]]
- **#driver-genes** (3 papers): [[pmid-22722201]], [[pmid-34272401]], [[pmid-35487942]]
- **#driver-mutation** (2 papers): [[pmid-26095796]], [[pmid-30150660]]
- **#driver-mutations** (7 papers): [[pmid-22343534]], [[pmid-23415222]], [[pmid-23525077]], [[pmid-27149842]], [[pmid-30687805]], [[pmid-34910928]], [[pmid-36723991]]
- **#driver-prioritization** (1 paper): [[pmid-21796119]]
- **#driver-substitution** (1 paper): [[pmid-22895193]]
- **#drug-response** (20 papers): [[pmid-22460905]], [[pmid-22802077]], [[pmid-23622249]], [[pmid-25096233]], [[pmid-27646943]], [[pmid-29122777]], [[pmid-29625057]], [[pmid-30333627]] *(+12 more)*
- **#drug-sensitivity** (1 paper): [[pmid-23334668]]
- **#druggability** (1 paper): [[pmid-29617662]]
- **#dual-driver** (1 paper): [[pmid-35235413]]
- **#durable-clinical-benefit** (1 paper): [[pmid-29337640]]
- **#dux4** (1 paper): [[pmid-27776115]]

### E

- **#e2f1** (1 paper): [[pmid-26928463]]
- **#e2f3** (1 paper): [[pmid-23897969]]
- **#eac** (3 papers): [[pmid-23525077]], [[pmid-24816253]], [[pmid-35377946]]
- **#early-event** (1 paper): [[pmid-24816253]]
- **#early-onset** (3 papers): [[pmid-30537516]], [[pmid-34405229]], [[pmid-37699004]]
- **#early-stage** (1 paper): [[pmid-39214094]]
- **#ebv** (1 paper): [[pmid-25079317]]
- **#eed** (1 paper): [[pmid-25240281]]
- **#egfr** (33 papers): [[pmid-18772890]], [[pmid-18948947]], [[pmid-22460905]], [[pmid-22495314]], [[pmid-22980975]], [[pmid-23525077]], [[pmid-24120142]], [[pmid-24686850]] *(+25 more)*
- **#egfr-resistance** (1 paper): [[pmid-29316426]]
- **#egfrviii** (1 paper): [[pmid-24120142]]
- **#eif1ax** (1 paper): [[pmid-26878173]]
- **#eif3e** (1 paper): [[pmid-22895193]]
- **#elmo1** (1 paper): [[pmid-23525077]]
- **#embryogenesis** (1 paper): [[pmid-37169874]]
- **#emt** (6 papers): [[pmid-30537516]], [[pmid-31978347]], [[pmid-33397444]], [[pmid-39214094]], [[pmid-39478232]], [[pmid-39550333]]
- **#endocrine-resistance** (1 paper): [[pmid-30205045]]
- **#endocrine-therapy** (1 paper): [[pmid-31552290]]
- **#endometrial** (8 papers): [[pmid-23636398]], [[pmid-28485815]], [[pmid-30068706]], [[pmid-35849120]], [[pmid-36007103]], [[pmid-37651310]], [[pmid-38653864]], [[pmid-39031567]]
- **#endometrioid** (1 paper): [[pmid-28485815]]
- **#engraftment** (1 paper): [[pmid-25470049]]
- **#enhancer** (1 paper): [[pmid-26466568]]
- **#ensemble-calling** (1 paper): [[pmid-29596782]]
- **#entrectinib** (2 papers): [[pmid-23817572]], [[pmid-31871300]]
- **#eomes** (1 paper): [[pmid-22832583]]
- **#ep300** (4 papers): [[pmid-21796119]], [[pmid-26168399]], [[pmid-33577785]], [[pmid-34272401]]
- **#epas1** (1 paper): [[pmid-40097403]]
- **#epha3** (1 paper): [[pmid-18948947]]
- **#epha6** (1 paper): [[pmid-25583493]]
- **#epigenetic** (3 papers): [[pmid-22343534]], [[pmid-22895193]], [[pmid-39478232]]
- **#epigenetic-modifier** (1 paper): [[pmid-32220891]]
- **#epigenetic-modifiers** (1 paper): [[pmid-27776115]]
- **#epigenetic-regulation** (1 paper): [[pmid-39499893]]
- **#epigenetics** (41 papers): [[pmid-21796119]], [[pmid-22722201]], [[pmid-22722829]], [[pmid-22817889]], [[pmid-23334668]], [[pmid-23525077]], [[pmid-23634996]], [[pmid-23685749]] *(+33 more)*
- **#epigenome** (1 paper): [[pmid-26878173]]
- **#epigenomics** (1 paper): [[pmid-25240281]]
- **#eqtl** (1 paper): [[pmid-22522925]]
- **#er-negative** (1 paper): [[pmid-22722201]]
- **#er-positive** (4 papers): [[pmid-22522925]], [[pmid-22722201]], [[pmid-30867590]], [[pmid-31552290]]
- **#erbb2** (45 papers): [[pmid-18772890]], [[pmid-22460905]], [[pmid-22522925]], [[pmid-22722201]], [[pmid-22722202]], [[pmid-22810696]], [[pmid-23000897]], [[pmid-23525077]] *(+37 more)*
- **#erbb3** (3 papers): [[pmid-22895193]], [[pmid-29420467]], [[pmid-30427539]]
- **#erbb4** (3 papers): [[pmid-18948947]], [[pmid-22832583]], [[pmid-25583476]]
- **#ercc2** (5 papers): [[pmid-25096233]], [[pmid-28583311]], [[pmid-36333289]], [[pmid-39499893]], [[pmid-40256659]]
- **#erdafitinib** (1 paper): [[pmid-37682528]]
- **#erg** (4 papers): [[pmid-23622249]], [[pmid-26544944]], [[pmid-27776115]], [[pmid-30537516]]
- **#erk** (1 paper): [[pmid-24265153]]
- **#erms** (1 paper): [[pmid-37315267]]
- **#errfi1** (1 paper): [[pmid-28336552]]
- **#esophageal** (6 papers): [[pmid-23525077]], [[pmid-24686850]], [[pmid-24816253]], [[pmid-28052061]], [[pmid-33795256]], [[pmid-35377946]]
- **#esophagogastric** (4 papers): [[pmid-29122777]], [[pmid-32437664]], [[pmid-37406106]], [[pmid-37699004]]
- **#espl1** (1 paper): [[pmid-24121792]]
- **#esr1** (9 papers): [[pmid-28027327]], [[pmid-29617662]], [[pmid-30205045]], [[pmid-32404308]], [[pmid-32864625]], [[pmid-34145282]], [[pmid-35120664]], [[pmid-36585450]] *(+1 more)*
- **#esrp1** (1 paper): [[pmid-30537516]]
- **#essential-thrombocythemia** (1 paper): [[pmid-24325359]]
- **#ethnic-disparity** (1 paper): [[pmid-25583493]]
- **#etiology** (1 paper): [[msk-50k-2026]]
- **#ets** (2 papers): [[pmid-22722839]], [[pmid-23622249]]
- **#ets-fusion** (1 paper): [[pmid-29610475]]
- **#everolimus** (2 papers): [[pmid-21252315]], [[pmid-30687805]]
- **#ewing** (1 paper): [[pmid-38335254]]
- **#ewing-sarcoma** (2 papers): [[pmid-25223734]], [[pmid-39305899]]
- **#ewsr1** (2 papers): [[pmid-36577525]], [[pmid-38335254]]
- **#exceptional-responders** (1 paper): [[pmid-25096233]]
- **#exome** (1 paper): [[pmid-22895193]]
- **#exome-sequencing** (6 papers): [[pmid-21252315]], [[pmid-24325359]], [[pmid-24816253]], [[pmid-25583493]], [[pmid-28485815]], [[pmid-32561749]]
- **#expression** (3 papers): [[pmid-22460905]], [[pmid-22832583]], [[pmid-29617662]]
- **#expression-classifier** (1 paper): [[pmid-25401301]]
- **#expression-regulation** (1 paper): [[pmid-22522925]]
- **#extranodal** (1 paper): [[pmid-29713087]]
- **#ezh2** (15 papers): [[pmid-21796119]], [[pmid-21798893]], [[pmid-22343534]], [[pmid-22722829]], [[pmid-23334668]], [[pmid-23699601]], [[pmid-24325359]], [[pmid-24658004]] *(+7 more)*

### F

- **#facets** (1 paper): [[pmid-30687805]]
- **#fallopian-tube** (1 paper): [[pmid-39386723]]
- **#fam46c** (1 paper): [[pmid-24434212]]
- **#fanca** (3 papers): [[pmid-27442865]], [[pmid-28825054]], [[pmid-32317181]]
- **#fanconi-anemia** (1 paper): [[pmid-26928463]]
- **#fat1** (3 papers): [[pmid-29422544]], [[pmid-34272401]], [[pmid-34544752]]
- **#fbxw7** (3 papers): [[pmid-24436047]], [[pmid-26095796]], [[pmid-28485815]]
- **#fda-approved** (1 paper): [[pmid-39305899]]
- **#feasibility** (1 paper): [[pmid-35585047]]
- **#fetal-progenitor** (1 paper): [[pmid-39478232]]
- **#ffpe** (1 paper): [[pmid-24265153]]
- **#ffpe-biopsy** (1 paper): [[pmid-25024180]]
- **#ffs** (1 paper): [[pmid-23415222]]
- **#fga** (3 papers): [[pmid-29337640]], [[pmid-32220891]], [[pmid-34290393]]
- **#fgf** (1 paper): [[pmid-23685749]]
- **#fgfr** (11 papers): [[pmid-22960745]], [[pmid-24476821]], [[pmid-25079552]], [[pmid-25631445]], [[pmid-26168399]], [[pmid-28583311]], [[pmid-28988769]], [[pmid-29122777]] *(+3 more)*
- **#fgfr-inhibitor** (1 paper): [[pmid-23817572]]
- **#fgfr1** (7 papers): [[pmid-22722201]], [[pmid-22941188]], [[pmid-23817572]], [[pmid-30867590]], [[pmid-35304457]], [[pmid-38488813]], [[pmid-39305899]]
- **#fgfr2** (5 papers): [[pmid-24185509]], [[pmid-26095796]], [[pmid-28667006]], [[pmid-32404308]], [[pmid-38864854]]
- **#fgfr3** (12 papers): [[pmid-23897969]], [[pmid-24120142]], [[pmid-24121792]], [[pmid-26278805]], [[pmid-29617662]], [[pmid-29625057]], [[pmid-32332851]], [[pmid-36543146]] *(+4 more)*
- **#fgfr4** (1 paper): [[pmid-24436047]]
- **#fh** (1 paper): [[pmid-27713405]]
- **#field-cancerization** (1 paper): [[pmid-33029006]]
- **#field-effect** (2 papers): [[pmid-24816253]], [[pmid-38895302]]
- **#firefly** (1 paper): [[pmid-28667006]]
- **#fish** (1 paper): [[pmid-28472509]]
- **#flcn** (1 paper): [[pmid-25583493]]
- **#flt3** (3 papers): [[pmid-23634996]], [[pmid-25730765]], [[pmid-27276561]]
- **#fn-rms** (1 paper): [[pmid-37730754]]
- **#focal-amplification** (1 paper): [[pmid-23334666]]
- **#folfirinox** (1 paper): [[pmid-31249418]]
- **#follicular-lymphoma** (1 paper): [[pmid-21796119]]
- **#foxa1** (8 papers): [[pmid-22610119]], [[pmid-22722839]], [[pmid-23622249]], [[pmid-26544944]], [[pmid-29610475]], [[pmid-30205045]], [[pmid-32317181]], [[pmid-34667026]]
- **#foxo1** (4 papers): [[pmid-21796119]], [[pmid-24436047]], [[pmid-37315267]], [[pmid-37730754]]
- **#foxo3** (1 paper): [[pmid-35585047]]
- **#foxp1** (1 paper): [[pmid-30537516]]
- **#fp-rms** (1 paper): [[pmid-37730754]]
- **#frameshift** (2 papers): [[pmid-24325359]], [[pmid-40100215]]
- **#fubp1** (1 paper): [[pmid-28472509]]
- **#functional-biomarker** (1 paper): [[pmid-39499893]]
- **#functional-class** (1 paper): [[msk-50k-2026]]
- **#functional-genomics** (1 paper): [[pmid-31249418]]
- **#functional-precision-medicine** (1 paper): [[pmid-39305899]]
- **#functional-redundancy** (1 paper): [[pmid-29625050]]
- **#functional-validation** (2 papers): [[pmid-24658004]], [[pmid-39499893]]
- **#fusion** (8 papers): [[pmid-22722202]], [[pmid-22941189]], [[pmid-24120142]], [[pmid-24185509]], [[pmid-24436047]], [[pmid-25417114]], [[pmid-26862087]], [[pmid-37980418]]
- **#fusion-genes** (1 paper): [[pmid-22832583]]
- **#fusion-oncogenes** (13 papers): [[msk-50k-2026]], [[msk-impact-2017]], [[pmid-22895193]], [[pmid-23817572]], [[pmid-26631609]], [[pmid-26829750]], [[pmid-29617662]], [[pmid-31871300]] *(+5 more)*

### G

- **#g-cimp** (1 paper): [[pmid-24120142]]
- **#g12r** (1 paper): [[pmid-39214094]]
- **#gain-of-function** (2 papers): [[pmid-23525077]], [[pmid-26683228]]
- **#gallbladder** (3 papers): [[pmid-24185509]], [[pmid-30427539]], [[pmid-36228155]]
- **#gastric** (5 papers): [[pmid-25079317]], [[pmid-25583476]], [[pmid-29122777]], [[pmid-29670109]], [[pmid-37699004]]
- **#gastric-metaplasia** (1 paper): [[pmid-34910928]]
- **#gastrointestinal** (1 paper): [[pmid-29670109]]
- **#gata3** (6 papers): [[pmid-22722201]], [[pmid-22722202]], [[pmid-27161491]], [[pmid-29713003]], [[pmid-30205045]], [[pmid-32220886]]
- **#gbc** (1 paper): [[pmid-30427539]]
- **#gbm** (8 papers): [[pmid-18772890]], [[pmid-23817572]], [[pmid-24120142]], [[pmid-28472509]], [[pmid-30675060]], [[pmid-30742119]], [[pmid-31852831]], [[pmid-33577785]]
- **#gc-b-cell** (1 paper): [[pmid-22343534]]
- **#gcb** (1 paper): [[pmid-23699601]]
- **#gcb-dlbcl** (1 paper): [[pmid-29713087]]
- **#gcimp** (1 paper): [[pmid-38117484]]
- **#gemcitabine** (1 paper): [[pmid-31249418]]
- **#gene-expression** (2 papers): [[pmid-18948947]], [[pmid-23334668]]
- **#gene-fusion** (2 papers): [[pmid-25401301]], [[pmid-26095796]]
- **#genetic-counseling** (2 papers): [[pmid-24658004]], [[pmid-30687805]]
- **#genetic-diversity** (1 paper): [[pmid-22722201]]
- **#genetic-testing-guidelines** (1 paper): [[pmid-36593350]]
- **#genie** (1 paper): [[pmid-38488807]]
- **#genome-doubling** (1 paper): [[pmid-29713087]]
- **#genome-instability** (2 papers): [[pmid-22832583]], [[pmid-38630790]]
- **#genomic-complexity** (1 paper): [[pmid-20601955]]
- **#genomic-concordance** (2 papers): [[pmid-25164765]], [[pmid-29316426]]
- **#genomic-features** (1 paper): [[pmid-34290393]]
- **#genomic-instability** (8 papers): [[pmid-24816253]], [[pmid-29713087]], [[pmid-32220891]], [[pmid-32317181]], [[pmid-33863915]], [[pmid-36493333]], [[pmid-37350195]], [[pmid-38412093]]
- **#genomic-landscape** (4 papers): [[pmid-29301960]], [[pmid-32719455]], [[pmid-35487942]], [[pmid-39499893]]
- **#genomic-profiling** (1 paper): [[pmid-36862133]]
- **#genomic-stability** (1 paper): [[pmid-26095796]]
- **#genomic-subtypes** (1 paper): [[pmid-35487942]]
- **#gerd** (1 paper): [[pmid-23525077]]
- **#germ-cell** (2 papers): [[pmid-27646943]], [[pmid-32897884]]
- **#germ-cell-tumor** (1 paper): [[pmid-36862133]]
- **#germline** (22 papers): [[msk-impact-2017]], [[pmid-23334668]], [[pmid-24658004]], [[pmid-26804919]], [[pmid-27713405]], [[pmid-28007021]], [[pmid-28825054]], [[pmid-29625049]] *(+14 more)*
- **#gist** (2 papers): [[pmid-36593350]], [[pmid-37477937]]
- **#glass** (1 paper): [[pmid-38117484]]
- **#gleason** (2 papers): [[pmid-25024180]], [[pmid-30537516]]
- **#gleason-grade** (1 paper): [[pmid-31564440]]
- **#gleason7** (1 paper): [[pmid-25024180]]
- **#glioblastoma** (4 papers): [[pmid-18772890]], [[pmid-30742119]], [[pmid-31852831]], [[pmid-33577785]]
- **#glioma** (14 papers): [[pmid-23817572]], [[pmid-24336570]], [[pmid-26824661]], [[pmid-28472509]], [[pmid-30643254]], [[pmid-30675060]], [[pmid-30742122]], [[pmid-31263031]] *(+6 more)*
- **#glycolysis** (1 paper): [[pmid-35670774]]
- **#glycoproteomics** (1 paper): [[pmid-34534465]]
- **#gna13** (1 paper): [[pmid-22343534]]
- **#gnas** (2 papers): [[pmid-22158988]], [[pmid-36493333]]
- **#gq-signaling** (1 paper): [[pmid-26683228]]
- **#group3** (1 paper): [[pmid-22832583]]
- **#group4** (1 paper): [[pmid-22832583]]
- **#gynecologic** (2 papers): [[pmid-25233892]], [[pmid-38653864]]
- **#gzma** (1 paper): [[pmid-26359337]]

### H

- **#h3f3a** (1 paper): [[pmid-23817572]]
- **#h3k27** (1 paper): [[pmid-21796119]]
- **#h3k27me3** (1 paper): [[pmid-25240281]]
- **#h3k36me3** (1 paper): [[pmid-23792563]]
- **#h3k4** (1 paper): [[pmid-21796119]]
- **#hair-follicle** (1 paper): [[pmid-39975212]]
- **#haploidization** (1 paper): [[pmid-38630790]]
- **#hbv** (1 paper): [[pmid-31130341]]
- **#hcc** (1 paper): [[pmid-37769223]]
- **#hdac** (1 paper): [[pmid-22460905]]
- **#hdc** (1 paper): [[pmid-28472509]]
- **#head-and-neck** (3 papers): [[pmid-26631609]], [[pmid-26862087]], [[pmid-35982973]]
- **#head-neck** (2 papers): [[pmid-21798893]], [[pmid-27442865]]
- **#health-equity** (4 papers): [[msk-50k-2026]], [[pmid-25583493]], [[pmid-34667026]], [[pmid-37651310]]
- **#helicase-domain** (1 paper): [[pmid-24658004]]
- **#hematologic** (1 paper): [[pmid-32897884]]
- **#hematologic-malignancy** (1 paper): [[pmid-38147626]]
- **#hematopoietic-stem-cell** (1 paper): [[pmid-24325359]]
- **#hepatocellular** (4 papers): [[pmid-25822088]], [[pmid-30052636]], [[pmid-31130341]], [[pmid-37769223]]
- **#her2** (10 papers): [[pmid-22522925]], [[pmid-24816253]], [[pmid-27161491]], [[pmid-29420467]], [[pmid-29625050]], [[pmid-29713003]], [[pmid-32437664]], [[pmid-34795269]] *(+2 more)*
- **#her3** (1 paper): [[pmid-29420467]]
- **#herc2** (1 paper): [[pmid-39975212]]
- **#hereditary** (2 papers): [[pmid-24658004]], [[pmid-29713003]]
- **#hereditary-cancer** (4 papers): [[msk-impact-2017]], [[pmid-30068706]], [[pmid-30687805]], [[pmid-36593350]]
- **#heterogeneity** (3 papers): [[pmid-32220886]], [[pmid-33263939]], [[pmid-36543146]]
- **#hgsoc** (2 papers): [[pmid-34819508]], [[pmid-39386723]]
- **#hif** (1 paper): [[pmid-23792563]]
- **#hif-2alpha** (1 paper): [[pmid-40097403]]
- **#high-risk** (1 paper): [[pmid-22522925]]
- **#hippo** (4 papers): [[pmid-27713405]], [[pmid-29100075]], [[pmid-29625050]], [[pmid-34272401]]
- **#histiocytic** (1 paper): [[pmid-30867592]]
- **#histiocytosis** (1 paper): [[pmid-36862133]]
- **#histologic-subtypes** (1 paper): [[pmid-32791233]]
- **#histologic-subtyping** (1 paper): [[pmid-26095796]]
- **#histone** (1 paper): [[pmid-21796119]]
- **#histone-acetylation** (2 papers): [[pmid-21796119]], [[pmid-33577785]]
- **#histone-acetyltransferase** (1 paper): [[pmid-26168399]]
- **#histone-methylation** (2 papers): [[pmid-21252315]], [[pmid-21796119]]
- **#histone-modification** (2 papers): [[pmid-22820256]], [[pmid-23334668]]
- **#hla** (6 papers): [[msk-50k-2026]], [[pmid-26359337]], [[pmid-27149842]], [[pmid-30150660]], [[pmid-33025139]], [[pmid-36723991]]
- **#hla-a** (2 papers): [[pmid-22960745]], [[pmid-36585450]]
- **#hla-e** (1 paper): [[pmid-39386723]]
- **#hla-loh** (1 paper): [[msk-50k-2026]]
- **#hmga2** (1 paper): [[pmid-29100075]]
- **#hn-pg** (1 paper): [[pmid-40097403]]
- **#hnsc** (3 papers): [[pmid-21798893]], [[pmid-21798897]], [[pmid-27442865]]
- **#hodgkin-lymphoma** (1 paper): [[pmid-36723991]]
- **#homologous-recombination** (2 papers): [[pmid-21720365]], [[pmid-35504881]]
- **#homozygous-deletion** (1 paper): [[pmid-24816253]]
- **#hotspot-mutation** (1 paper): [[pmid-26683228]]
- **#hotspots** (32 papers): [[msk-50k-2026]], [[pmid-21798893]], [[pmid-21798897]], [[pmid-22158988]], [[pmid-22343534]], [[pmid-22610119]], [[pmid-22722839]], [[pmid-22817889]] *(+24 more)*
- **#hoxd13** (1 paper): [[pmid-38117484]]
- **#hoxd8** (1 paper): [[pmid-24265153]]
- **#hpv** (4 papers): [[pmid-21798893]], [[pmid-25631445]], [[pmid-27442865]], [[pmid-29422544]]
- **#hras** (8 papers): [[pmid-21798893]], [[pmid-25303977]], [[pmid-25631445]], [[pmid-26544944]], [[pmid-27442865]], [[pmid-33863915]], [[pmid-34272401]], [[pmid-37315267]]
- **#hrd** (3 papers): [[pmid-29713003]], [[pmid-32730818]], [[pmid-33863915]]
- **#hrr** (2 papers): [[pmid-34635660]], [[pmid-35504881]]
- **#htan** (1 paper): [[pmid-39478232]]
- **#hypermutation** (6 papers): [[pmid-24336570]], [[pmid-30687805]], [[pmid-31263031]], [[pmid-35487942]], [[pmid-35649412]], [[pmid-40097403]]
- **#hypermutator** (1 paper): [[pmid-18772890]]
- **#hypodiploid** (1 paper): [[pmid-23334668]]
- **#hypomethylation** (1 paper): [[pmid-33025139]]
- **#hypoxia** (1 paper): [[pmid-29301960]]

### I

- **#ibrutinib** (1 paper): [[pmid-38995739]]
- **#icb** (2 papers): [[pmid-38630790]], [[pmid-39550333]]
- **#icgc** (3 papers): [[pmid-22832583]], [[pmid-23103869]], [[pmid-32025007]]
- **#ici** (4 papers): [[pmid-32437664]], [[pmid-35121644]], [[pmid-35662283]], [[pmid-36333289]]
- **#ici-biomarker** (36 papers): [[msk-50k-2026]], [[msk-impact-2017]], [[pmid-25409260]], [[pmid-25765070]], [[pmid-26091043]], [[pmid-26359337]], [[pmid-26997480]], [[pmid-27149842]] *(+28 more)*
- **#ici-resistance** (1 paper): [[pmid-29337640]]
- **#ici-response** (1 paper): [[pmid-35121644]]
- **#idh** (3 papers): [[pmid-30742122]], [[pmid-31263031]], [[pmid-35649412]]
- **#idh-mutant** (1 paper): [[pmid-31263031]]
- **#idh1** (21 papers): [[pmid-23634996]], [[pmid-24120142]], [[pmid-24185509]], [[pmid-24336570]], [[pmid-26544944]], [[pmid-26824661]], [[pmid-27276561]], [[pmid-28472509]] *(+13 more)*
- **#idh2** (9 papers): [[pmid-23634996]], [[pmid-24185509]], [[pmid-26824661]], [[pmid-27276561]], [[pmid-28667006]], [[pmid-30333627]], [[pmid-33765338]], [[pmid-37078708]] *(+1 more)*
- **#ifn-gamma** (1 paper): [[pmid-30150660]]
- **#ifn-signaling** (1 paper): [[pmid-39386723]]
- **#igf** (1 paper): [[pmid-23685749]]
- **#igf1r** (3 papers): [[pmid-22460905]], [[pmid-22895193]], [[pmid-41758938]]
- **#igf2** (4 papers): [[pmid-22895193]], [[pmid-24436047]], [[pmid-35970919]], [[pmid-41758938]]
- **#igh-rearrangement** (1 paper): [[pmid-27776115]]
- **#igh-translocation** (1 paper): [[pmid-22343534]]
- **#ighv** (2 papers): [[pmid-23415222]], [[pmid-35927489]]
- **#ihc** (3 papers): [[pmid-24658004]], [[pmid-32719455]], [[pmid-38488807]]
- **#ikaros-family** (1 paper): [[pmid-23334668]]
- **#ikzf1** (1 paper): [[pmid-27776115]]
- **#ikzf2** (1 paper): [[pmid-23334668]]
- **#ikzf3** (1 paper): [[pmid-23334668]]
- **#im-subtype** (1 paper): [[pmid-32719455]]
- **#imaging** (1 paper): [[pmid-31564440]]
- **#imatinib** (2 papers): [[pmid-36593350]], [[pmid-37477937]]
- **#immune** (3 papers): [[pmid-29625049]], [[pmid-35970919]], [[pmid-37990009]]
- **#immune-checkpoint** (1 paper): [[pmid-39386479]]
- **#immune-cold** (1 paper): [[pmid-29337640]]
- **#immune-escape** (3 papers): [[msk-50k-2026]], [[pmid-22343534]], [[pmid-27149842]]
- **#immune-evasion** (9 papers): [[pmid-21796119]], [[pmid-25583493]], [[pmid-27158780]], [[pmid-29337640]], [[pmid-29622463]], [[pmid-29713087]], [[pmid-33025139]], [[pmid-34910928]] *(+1 more)*
- **#immune-infiltrate** (7 papers): [[pmid-26091043]], [[pmid-27149842]], [[pmid-34358469]], [[pmid-34433969]], [[pmid-37202560]], [[pmid-39386479]], [[pmid-39550333]]
- **#immune-infiltration** (2 papers): [[pmid-33397444]], [[pmid-34910928]]
- **#immune-microenvironment** (5 papers): [[pmid-29100075]], [[pmid-33577785]], [[pmid-34534465]], [[pmid-36001024]], [[pmid-37980418]]
- **#immune-phenotype** (1 paper): [[pmid-36333289]]
- **#immune-response** (1 paper): [[pmid-22522925]]
- **#immune-signaling** (1 paper): [[pmid-29301960]]
- **#immunogenicity** (1 paper): [[pmid-27149842]]
- **#immunophenotyping** (1 paper): [[pmid-35121644]]
- **#immunosuppression** (2 papers): [[pmid-34272401]], [[pmid-35121644]]
- **#immunotherapy** (59 papers): [[msk-50k-2026]], [[msk-impact-2017]], [[pmid-22895193]], [[pmid-22960745]], [[pmid-25409260]], [[pmid-25765070]], [[pmid-26091043]], [[pmid-26359337]] *(+51 more)*
- **#immunotherapy-response** (1 paper): [[pmid-32719455]]
- **#inactivating-mutations** (1 paper): [[pmid-24185509]]
- **#incidental-findings** (1 paper): [[pmid-36593350]]
- **#incremental-findings** (1 paper): [[pmid-35585047]]
- **#indel-signatures** (1 paper): [[pmid-35982973]]
- **#independent-predictor** (1 paper): [[pmid-39147831]]
- **#indolent** (1 paper): [[pmid-32220891]]
- **#indolent-disease** (2 papers): [[pmid-21252315]], [[pmid-36493333]]
- **#induction** (1 paper): [[pmid-32437664]]
- **#induction-chemotherapy** (1 paper): [[pmid-28472509]]
- **#infant** (1 paper): [[pmid-25730765]]
- **#inherited-predisposition** (1 paper): [[pmid-23334668]]
- **#insvlr** (1 paper): [[pmid-23817572]]
- **#intclust** (1 paper): [[pmid-22522925]]
- **#intclust10** (1 paper): [[pmid-22522925]]
- **#intclust4** (1 paper): [[pmid-22522925]]
- **#intclust5** (1 paper): [[pmid-22522925]]
- **#integrated-model** (1 paper): [[pmid-36333289]]
- **#integrative** (1 paper): [[pmid-30537516]]
- **#integrative-clustering** (1 paper): [[pmid-22522925]]
- **#integrin** (1 paper): [[pmid-27749842]]
- **#intermediate-risk** (1 paper): [[pmid-25024180]]
- **#intra-tumor-heterogeneity** (3 papers): [[pmid-25164765]], [[pmid-26095796]], [[pmid-39305899]]
- **#intrahepatic** (1 paper): [[pmid-38864854]]
- **#intratumor-heterogeneity** (3 papers): [[pmid-24434212]], [[pmid-24487277]], [[pmid-26928463]]
- **#intratumoral-heterogeneity** (2 papers): [[pmid-30150660]], [[pmid-34910928]]
- **#intrinsic-resistance** (1 paper): [[pmid-32913971]]
- **#invasion** (1 paper): [[pmid-23525077]]
- **#invasive-ductal-carcinoma** (1 paper): [[pmid-32220886]]
- **#ipi** (1 paper): [[pmid-29713087]]
- **#ipmn** (1 paper): [[pmid-22158988]]
- **#irf6** (1 paper): [[pmid-21798893]]
- **#irt** (1 paper): [[pmid-35121644]]
- **#isc** (1 paper): [[pmid-39478232]]
- **#isoform** (1 paper): [[pmid-27776115]]
- **#itd** (1 paper): [[pmid-23817572]]
- **#ith** (1 paper): [[pmid-28445469]]

### J

- **#jak-stat** (2 papers): [[pmid-29301960]], [[pmid-36723991]]
- **#jak1** (3 papers): [[pmid-24293293]], [[pmid-25583493]], [[pmid-38949888]]
- **#jak2** (5 papers): [[pmid-24325359]], [[pmid-25730765]], [[pmid-29337640]], [[pmid-36723991]], [[pmid-38147626]]
- **#jak3** (1 paper): [[pmid-26551667]]
- **#japan** (1 paper): [[pmid-30427539]]
- **#jnk** (1 paper): [[pmid-31552290]]
- **#jnk-signaling** (1 paper): [[pmid-22722201]]
- **#jun** (1 paper): [[pmid-29100075]]
- **#juvenile-papillomatosis** (1 paper): [[pmid-33263939]]

### K

- **#k27m** (1 paper): [[pmid-23817572]]
- **#kataegis** (3 papers): [[pmid-25155756]], [[pmid-29422544]], [[pmid-32025007]]
- **#kdm6a** (8 papers): [[pmid-22722829]], [[pmid-22832583]], [[pmid-23685749]], [[pmid-24121792]], [[pmid-25092538]], [[pmid-25096233]], [[pmid-25730765]], [[pmid-28726821]]
- **#kdr** (1 paper): [[pmid-18948947]]
- **#keap1** (4 papers): [[pmid-22960745]], [[pmid-28336552]], [[pmid-29625050]], [[pmid-39147831]]
- **#keratinocyte** (1 paper): [[pmid-39091884]]
- **#khorana-score** (1 paper): [[pmid-39147831]]
- **#kiaa1549** (1 paper): [[pmid-23817572]]
- **#kif2a** (1 paper): [[pmid-22941189]]
- **#kinase** (1 paper): [[pmid-25583493]]
- **#kinase-fusions** (2 papers): [[msk-impact-2017]], [[pmid-35705558]]
- **#kinase-hotspot** (1 paper): [[pmid-23817572]]
- **#kinase-signaling** (1 paper): [[pmid-25730765]]
- **#kit** (4 papers): [[pmid-20601955]], [[pmid-31068700]], [[pmid-36593350]], [[pmid-37477937]]
- **#kmt2a** (1 paper): [[pmid-25730765]]
- **#kmt2c** (4 papers): [[pmid-24185509]], [[pmid-25303977]], [[pmid-28485815]], [[pmid-29610475]]
- **#kmt2d** (3 papers): [[pmid-21796119]], [[pmid-22343534]], [[pmid-29610475]]
- **#kras** (81 papers): [[pmid-18948947]], [[pmid-21252315]], [[pmid-22158988]], [[pmid-22343534]], [[pmid-22460905]], [[pmid-22802077]], [[pmid-22810696]], [[pmid-22895193]] *(+73 more)*
- **#kras-dosage** (1 paper): [[pmid-39753968]]
- **#kras-g12r** (1 paper): [[pmid-39214094]]
- **#kras-signaling** (1 paper): [[pmid-39214094]]

### L

- **#l1-retrotransposon** (1 paper): [[pmid-28667006]]
- **#l1cam** (2 papers): [[pmid-27749842]], [[pmid-39478232]]
- **#laml** (1 paper): [[pmid-29617662]]
- **#larotrectinib** (2 papers): [[pmid-23817572]], [[pmid-31871300]]
- **#late-event** (1 paper): [[pmid-24816253]]
- **#late-relapse** (1 paper): [[pmid-30867590]]
- **#leiomyosarcoma** (3 papers): [[pmid-32299819]], [[pmid-38488807]], [[pmid-39305899]]
- **#leptomeningeal** (1 paper): [[pmid-39289779]]
- **#letrozole** (1 paper): [[pmid-31552290]]
- **#leukemia** (8 papers): [[pmid-23415222]], [[pmid-23634996]], [[pmid-25730765]], [[pmid-26466571]], [[pmid-27276561]], [[pmid-27776115]], [[pmid-30333627]], [[pmid-35868306]]
- **#leukemogenesis** (1 paper): [[pmid-27776115]]
- **#lfs** (1 paper): [[pmid-22832583]]
- **#lgr5** (1 paper): [[pmid-39478232]]
- **#li-fraumeni** (1 paper): [[pmid-23334668]]
- **#libretto-001** (1 paper): [[pmid-35304457]]
- **#lig1** (1 paper): [[pmid-36001024]]
- **#line-1** (1 paper): [[pmid-33025139]]
- **#lineage** (1 paper): [[pmid-22460905]]
- **#lineage-restriction** (1 paper): [[pmid-39478232]]
- **#lineage-transformation** (1 paper): [[pmid-27776115]]
- **#liquid-biopsy** (23 papers): [[pmid-28445469]], [[pmid-30675060]], [[pmid-31768066]], [[pmid-32214244]], [[pmid-32633890]], [[pmid-32864625]], [[pmid-34059130]], [[pmid-34145282]] *(+15 more)*
- **#liver** (4 papers): [[pmid-25822088]], [[pmid-30052636]], [[pmid-31130341]], [[pmid-37769223]]
- **#liver-fluke** (1 paper): [[pmid-28667006]]
- **#llgl1** (1 paper): [[pmid-26683228]]
- **#lms** (2 papers): [[pmid-29100075]], [[pmid-39305899]]
- **#lncrna** (1 paper): [[pmid-35982973]]
- **#lobular** (2 papers): [[pmid-26451490]], [[pmid-38347189]]
- **#local-recurrence** (1 paper): [[pmid-39214094]]
- **#locoregional-control** (1 paper): [[pmid-37315267]]
- **#lof** (1 paper): [[pmid-29301960]]
- **#loh** (4 papers): [[pmid-29422544]], [[pmid-30687805]], [[pmid-38630790]], [[pmid-38758238]]
- **#long-tail** (2 papers): [[pmid-22722201]], [[pmid-29610475]]
- **#long-term** (1 paper): [[pmid-39642637]]
- **#longitudinal** (2 papers): [[pmid-38117484]], [[pmid-38488807]]
- **#low-frequency-drivers** (1 paper): [[pmid-22343534]]
- **#low-grade** (1 paper): [[pmid-37910594]]
- **#low-hypodiploid** (1 paper): [[pmid-23334668]]
- **#low-input-wgs** (1 paper): [[pmid-25024180]]
- **#low-mutation-burden** (1 paper): [[pmid-25730765]]
- **#low-tmb** (2 papers): [[pmid-26683228]], [[pmid-29301960]]
- **#loxl2** (1 paper): [[pmid-34534465]]
- **#lrp1b** (1 paper): [[pmid-18948947]]
- **#luad** (11 papers): [[pmid-18948947]], [[pmid-22980975]], [[pmid-25079552]], [[pmid-27158780]], [[pmid-28336552]], [[pmid-28445469]], [[pmid-29617662]], [[pmid-32791233]] *(+3 more)*
- **#luminal** (2 papers): [[pmid-27161491]], [[pmid-39550333]]
- **#luminal-a** (2 papers): [[pmid-29713003]], [[pmid-31552290]]
- **#luminal-b** (1 paper): [[pmid-29713003]]
- **#lung** (20 papers): [[pmid-18948947]], [[pmid-22941188]], [[pmid-22941189]], [[pmid-22980975]], [[pmid-25079552]], [[pmid-25765070]], [[pmid-28336552]], [[pmid-28445469]] *(+12 more)*
- **#lung-cancer** (1 paper): [[pmid-39289779]]
- **#lusc** (2 papers): [[pmid-27158780]], [[pmid-28445469]]
- **#lymph-node** (1 paper): [[pmid-34290393]]
- **#lymphocytic-infiltration** (1 paper): [[pmid-22522925]]
- **#lymphoid-differentiation** (1 paper): [[pmid-23334668]]
- **#lymphoma** (11 papers): [[pmid-21796119]], [[pmid-22343534]], [[pmid-23699601]], [[pmid-24145436]], [[pmid-25991819]], [[pmid-28985567]], [[pmid-29713087]], [[pmid-35927489]] *(+3 more)*
- **#lynch** (3 papers): [[pmid-32332851]], [[pmid-34819518]], [[pmid-39753968]]
- **#lynch-syndrome** (4 papers): [[pmid-30068706]], [[pmid-31263031]], [[pmid-34405229]], [[pmid-39550333]]
- **#lztr1** (1 paper): [[pmid-33025139]]

### M

- **#machine-learning** (4 papers): [[pmid-32214244]], [[pmid-36038778]], [[pmid-38864854]], [[pmid-39147831]]
- **#macrophage** (1 paper): [[pmid-37980418]]
- **#macrophages** (1 paper): [[pmid-33025139]]
- **#macropinocytosis** (1 paper): [[pmid-39214094]]
- **#maf** (1 paper): [[pmid-29596782]]
- **#magi3** (1 paper): [[pmid-22722202]]
- **#malignant-progression** (2 papers): [[pmid-31263031]], [[pmid-34910928]]
- **#mantle-cell-lymphoma** (1 paper): [[pmid-24145436]]
- **#map2k1** (6 papers): [[pmid-24265153]], [[pmid-25164765]], [[pmid-30205045]], [[pmid-32913971]], [[pmid-33509808]], [[pmid-36862133]]
- **#map2k2** (2 papers): [[pmid-24265153]], [[pmid-33509808]]
- **#map2k4** (1 paper): [[pmid-22522925]]
- **#map3k1** (4 papers): [[pmid-22722201]], [[pmid-22722202]], [[pmid-27161491]], [[pmid-31552290]]
- **#mapk** (32 papers): [[pmid-18772890]], [[pmid-18948947]], [[pmid-20601955]], [[pmid-22817889]], [[pmid-22941189]], [[pmid-23334668]], [[pmid-23817572]], [[pmid-23897969]] *(+24 more)*
- **#mapk-pathway** (1 paper): [[msk-50k-2026]]
- **#mapk-wt** (1 paper): [[pmid-39753968]]
- **#mapk1** (1 paper): [[pmid-26551667]]
- **#matched-normal** (2 papers): [[msk-impact-2017]], [[pmid-34145282]]
- **#matched-therapy** (1 paper): [[pmid-28336552]]
- **#mc1r** (1 paper): [[pmid-39975212]]
- **#mc3** (1 paper): [[pmid-29596782]]
- **#mcn** (1 paper): [[pmid-22158988]]
- **#mcrpc** (2 papers): [[pmid-28825054]], [[pmid-31061129]]
- **#mcspc** (1 paper): [[pmid-32220891]]
- **#mct1** (1 paper): [[pmid-31564440]]
- **#mdm2** (10 papers): [[pmid-18772890]], [[pmid-20601955]], [[pmid-24436047]], [[pmid-29100075]], [[pmid-29337640]], [[pmid-29625050]], [[pmid-33029006]], [[pmid-35377946]] *(+2 more)*
- **#mdm4** (1 paper): [[pmid-31068700]]
- **#mds** (2 papers): [[pmid-24030381]], [[pmid-27959731]]
- **#med12** (2 papers): [[pmid-22610119]], [[pmid-37315267]]
- **#medulloblastoma** (5 papers): [[pmid-22722829]], [[pmid-22820256]], [[pmid-22832583]], [[pmid-26760213]], [[pmid-28726821]]
- **#mef2b** (2 papers): [[pmid-21796119]], [[pmid-22343534]]
- **#megf8** (1 paper): [[pmid-38653864]]
- **#mek** (3 papers): [[pmid-22460905]], [[pmid-30867592]], [[pmid-33025139]]
- **#mek-inhibitor** (1 paper): [[pmid-23817572]]
- **#melanocyte** (1 paper): [[pmid-39975212]]
- **#melanoma** (16 papers): [[pmid-22622578]], [[pmid-22842228]], [[pmid-24265153]], [[pmid-25409260]], [[pmid-26091043]], [[pmid-26343386]], [[pmid-26359337]], [[pmid-26997480]] *(+8 more)*
- **#melanoma skin melanocytes uv clonal-evolution mutation-signatures single-cell wgs braf nras somatic-mutation aging normal-tissue field-cancerization uv-damage** (1 paper): [[pmid-33029006]]
- **#memory-t-cells** (1 paper): [[pmid-27149842]]
- **#men1** (2 papers): [[pmid-21252315]], [[pmid-30687805]]
- **#meningioma** (1 paper): [[pmid-34433969]]
- **#mesenchymal** (1 paper): [[pmid-24120142]]
- **#mesothelioma** (1 paper): [[pmid-38630790]]
- **#met** (7 papers): [[pmid-23897969]], [[pmid-25401301]], [[pmid-27158780]], [[pmid-28336552]], [[pmid-35304457]], [[pmid-36044468]], [[pmid-39289779]]
- **#met-to-met** (1 paper): [[pmid-37169874]]
- **#meta-analysis** (1 paper): [[pmid-34272401]]
- **#metabolic-dependency** (1 paper): [[pmid-29625050]]
- **#metabolic-shift** (1 paper): [[pmid-23792563]]
- **#metabolism** (1 paper): [[pmid-31564440]]
- **#metabolomics** (1 paper): [[pmid-33577785]]
- **#metabric** (1 paper): [[pmid-27161491]]
- **#metaplastic** (1 paper): [[pmid-33863915]]
- **#metastasis** (8 papers): [[pmid-25024180]], [[pmid-29610475]], [[pmid-30867590]], [[pmid-32719455]], [[pmid-34290393]], [[pmid-36543146]], [[pmid-37315267]], [[pmid-40097403]]
- **#metastatic** (3 papers): [[msk-impact-2017]], [[pmid-26928463]], [[pmid-32220891]]
- **#metastatic-burden** (1 paper): [[pmid-32220891]]
- **#metastatic-enrichment** (30 papers): [[msk-impact-2017]], [[pmid-22722839]], [[pmid-23685749]], [[pmid-25164765]], [[pmid-25583476]], [[pmid-25589618]], [[pmid-27442865]], [[pmid-27749842]] *(+22 more)*
- **#metastatic-patterns** (2 papers): [[pmid-35120664]], [[pmid-37084736]]
- **#methods** (1 paper): [[pmid-29596782]]
- **#methylation** (27 papers): [[pmid-18772890]], [[pmid-22832583]], [[pmid-23634996]], [[pmid-24120142]], [[pmid-24816253]], [[pmid-25631445]], [[pmid-26451490]], [[pmid-26466568]] *(+19 more)*
- **#mexico** (1 paper): [[pmid-22722202]]
- **#mfs** (1 paper): [[pmid-29100075]]
- **#mgmt** (8 papers): [[pmid-18772890]], [[pmid-24120142]], [[pmid-30643254]], [[pmid-31263031]], [[pmid-31852831]], [[pmid-33577785]], [[pmid-38117484]], [[pmid-40097403]]
- **#mibc** (1 paper): [[pmid-39499893]]
- **#mibg** (1 paper): [[pmid-40097403]]
- **#microbiome** (2 papers): [[pmid-32214244]], [[pmid-37202560]]
- **#microenvironment** (1 paper): [[pmid-29713003]]
- **#microsatellite-instability** (1 paper): [[pmid-28485815]]
- **#midline** (1 paper): [[pmid-23817572]]
- **#migration** (1 paper): [[pmid-39214094]]
- **#mirna** (2 papers): [[pmid-23792563]], [[pmid-30052636]]
- **#misdiagnosis** (1 paper): [[pmid-28472509]]
- **#mismatch-repair** (5 papers): [[pmid-18772890]], [[pmid-30643254]], [[pmid-31978347]], [[pmid-32730818]], [[pmid-37730754]]
- **#mitf** (3 papers): [[pmid-24265153]], [[pmid-25401301]], [[pmid-39975212]]
- **#mitochondria** (2 papers): [[pmid-25155756]], [[pmid-35487942]]
- **#mitotic** (1 paper): [[pmid-22522925]]
- **#mlana** (1 paper): [[pmid-39975212]]
- **#mlh1** (3 papers): [[pmid-30068706]], [[pmid-35849120]], [[pmid-36593350]]
- **#mll** (1 paper): [[pmid-25730765]]
- **#mll-aff1** (1 paper): [[pmid-25730765]]
- **#mll-mllt1** (1 paper): [[pmid-25730765]]
- **#mll2** (2 papers): [[pmid-21796119]], [[pmid-22722839]]
- **#mll3** (1 paper): [[pmid-28485815]]
- **#mmr** (4 papers): [[pmid-22895193]], [[pmid-28485815]], [[pmid-35849120]], [[pmid-38653864]]
- **#mmr-deficiency** (1 paper): [[pmid-40097403]]
- **#molecular-classifier** (1 paper): [[pmid-26855148]]
- **#molecular-imaging** (1 paper): [[pmid-37406106]]
- **#molecular-subtype** (3 papers): [[pmid-18948947]], [[pmid-28485815]], [[pmid-38630790]]
- **#molecular-subtypes** (180 papers): [[pmid-18772890]], [[pmid-20601955]], [[pmid-21720365]], [[pmid-21796119]], [[pmid-21798893]], [[pmid-21798897]], [[pmid-22158988]], [[pmid-22495314]] *(+172 more)*
- **#monosomy-3** (1 paper): [[pmid-26683228]]
- **#motility** (1 paper): [[pmid-23525077]]
- **#mouse-model** (4 papers): [[pmid-22895193]], [[pmid-26760213]], [[pmid-27776115]], [[pmid-39214094]]
- **#mpl** (1 paper): [[pmid-24325359]]
- **#mpn** (1 paper): [[pmid-24325359]]
- **#mpnst** (4 papers): [[pmid-25240281]], [[pmid-29100075]], [[pmid-32561749]], [[pmid-37350195]]
- **#mre11a** (1 paper): [[pmid-29610475]]
- **#mrna** (1 paper): [[pmid-22895193]]
- **#mscore** (1 paper): [[pmid-35487942]]
- **#msi** (54 papers): [[msk-50k-2026]], [[msk-impact-2017]], [[pmid-22810696]], [[pmid-22895193]], [[pmid-23636398]], [[pmid-25079317]], [[pmid-25233892]], [[pmid-25765070]] *(+46 more)*
- **#msi-h** (2 papers): [[pmid-29850653]], [[pmid-35235413]]
- **#msk-access** (5 papers): [[pmid-34059130]], [[pmid-36357680]], [[pmid-36543146]], [[pmid-37769223]], [[pmid-39147831]]
- **#msk-impact** (35 papers): [[msk-50k-2026]], [[msk-impact-2017]], [[pmid-28336552]], [[pmid-28472509]], [[pmid-28825054]], [[pmid-30427539]], [[pmid-30643254]], [[pmid-30675060]] *(+27 more)*
- **#mss** (7 papers): [[pmid-22895193]], [[pmid-25583493]], [[pmid-29316426]], [[pmid-30068706]], [[pmid-30150660]], [[pmid-34910928]], [[pmid-39478232]]
- **#mss-vs-msi** (1 paper): [[pmid-34910928]]
- **#mtap** (1 paper): [[pmid-22522925]]
- **#mtdna** (1 paper): [[pmid-35487942]]
- **#mtor** (18 papers): [[pmid-18948947]], [[pmid-21252315]], [[pmid-23334668]], [[pmid-23792563]], [[pmid-25155756]], [[pmid-25401301]], [[pmid-25583493]], [[pmid-26095796]] *(+10 more)*
- **#muc1** (1 paper): [[pmid-34534465]]
- **#muc5ac** (1 paper): [[pmid-34534465]]
- **#multi-algorithm** (1 paper): [[pmid-35487942]]
- **#multi-omic** (1 paper): [[pmid-35662283]]
- **#multi-omics** (9 papers): [[pmid-29625049]], [[pmid-29713003]], [[pmid-31068700]], [[pmid-31978347]], [[pmid-33577785]], [[pmid-34534465]], [[pmid-36001024]], [[pmid-36585450]] *(+1 more)*
- **#multiclonal-invasion** (1 paper): [[pmid-32220886]]
- **#multimodal** (1 paper): [[pmid-36038778]]
- **#multiple-myeloma** (2 papers): [[pmid-22460905]], [[pmid-24434212]]
- **#multiregion** (1 paper): [[pmid-24487277]]
- **#multivariate** (2 papers): [[pmid-25024180]], [[pmid-39147831]]
- **#mutagenic-field** (1 paper): [[pmid-38412093]]
- **#mutation** (1 paper): [[pmid-22941189]]
- **#mutation-burden** (1 paper): [[pmid-34272401]]
- **#mutation-calling** (1 paper): [[pmid-29596782]]
- **#mutation-clearance** (1 paper): [[pmid-27959731]]
- **#mutation-rate** (2 papers): [[pmid-22832583]], [[pmid-26095796]]
- **#mutation-signature** (1 paper): [[pmid-22941189]]
- **#mutation-signatures** (62 papers): [[msk-impact-2017]], [[pmid-21798897]], [[pmid-22622578]], [[pmid-22722201]], [[pmid-22810696]], [[pmid-22817889]], [[pmid-22842228]], [[pmid-22941188]] *(+54 more)*
- **#mutation-spectrum** (1 paper): [[pmid-22895193]]
- **#mutational-processes** (1 paper): [[pmid-22722201]]
- **#mutational-signature** (1 paper): [[pmid-23525077]]
- **#mutational-signatures** (9 papers): [[msk-50k-2026]], [[pmid-29713087]], [[pmid-30150660]], [[pmid-30537516]], [[pmid-32025007]], [[pmid-33863915]], [[pmid-34290393]], [[pmid-36723991]] *(+1 more)*
- **#mutational-spectrum** (1 paper): [[pmid-22495314]]
- **#mutsigcv** (1 paper): [[pmid-24434212]]
- **#mutual-exclusivity** (14 papers): [[msk-50k-2026]], [[pmid-21252315]], [[pmid-22722202]], [[pmid-22817889]], [[pmid-22895193]], [[pmid-23817572]], [[pmid-24120142]], [[pmid-25223734]] *(+6 more)*
- **#mutyh** (2 papers): [[pmid-35585047]], [[pmid-36593350]]
- **#myb** (4 papers): [[pmid-23685749]], [[pmid-26095796]], [[pmid-26631609]], [[pmid-26862087]]
- **#myb-nfib** (1 paper): [[pmid-26095796]]
- **#mybl1** (1 paper): [[pmid-26631609]]
- **#myc** (23 papers): [[pmid-22722201]], [[pmid-22941189]], [[pmid-25024180]], [[pmid-25855536]], [[pmid-26168399]], [[pmid-26760213]], [[pmid-26829750]], [[pmid-27158780]] *(+15 more)*
- **#myc-family** (1 paper): [[pmid-22941189]]
- **#mycl1** (1 paper): [[pmid-22941189]]
- **#mycn** (9 papers): [[pmid-23334666]], [[pmid-24436047]], [[pmid-26466568]], [[pmid-26855148]], [[pmid-28726821]], [[pmid-31693904]], [[pmid-35292802]], [[pmid-37169874]] *(+1 more)*
- **#mycosis-fungoides** (1 paper): [[pmid-26551667]]
- **#myd88** (3 papers): [[pmid-22343534]], [[pmid-29713087]], [[pmid-38995739]]
- **#myelodysplastic** (1 paper): [[pmid-24030381]]
- **#myelofibrosis** (1 paper): [[pmid-24325359]]
- **#myeloid-suppression** (1 paper): [[pmid-29867230]]
- **#myeloproliferative** (1 paper): [[pmid-24325359]]
- **#myod1** (2 papers): [[pmid-37315267]], [[pmid-41758938]]
- **#myoepithelial** (1 paper): [[pmid-36577525]]
- **#myofibroblast** (1 paper): [[pmid-39550333]]
- **#myogenesis** (1 paper): [[pmid-41758938]]
- **#mzl-origin** (1 paper): [[pmid-29713087]]

### N

- **#nab2-stat6** (1 paper): [[pmid-37980418]]
- **#nccn** (1 paper): [[pmid-39305899]]
- **#nci60** (1 paper): [[pmid-22802077]]
- **#ncor1** (1 paper): [[pmid-22722201]]
- **#near-haploid** (1 paper): [[pmid-23334668]]
- **#negative-selection** (1 paper): [[pmid-22343534]]
- **#neoadjuvant** (5 papers): [[pmid-25096233]], [[pmid-30742122]], [[pmid-35377946]], [[pmid-35970919]], [[pmid-39499893]]
- **#neoantigen** (10 papers): [[msk-50k-2026]], [[pmid-25765070]], [[pmid-26359337]], [[pmid-27149842]], [[pmid-27158780]], [[pmid-29033130]], [[pmid-29617662]], [[pmid-30150660]] *(+2 more)*
- **#nepc** (1 paper): [[pmid-38488813]]
- **#ner** (3 papers): [[pmid-22722201]], [[pmid-25096233]], [[pmid-39499893]]
- **#ner-impairment** (1 paper): [[pmid-39499893]]
- **#nerve-sheath** (2 papers): [[pmid-25240281]], [[pmid-33025139]]
- **#nerve-sheath-tumor** (1 paper): [[pmid-32561749]]
- **#neuroblastoma** (5 papers): [[pmid-23334666]], [[pmid-26466568]], [[pmid-35292802]], [[pmid-35585047]], [[pmid-37169874]]
- **#neuroblastoma pediatric mycn alk copy-number survival wgs wes targeted-therapy actionability focal-amplification deletion pediatric-cancer** (1 paper): [[pmid-23334666]]
- **#neuroendocrine** (5 papers): [[pmid-26168399]], [[pmid-26855148]], [[pmid-31061129]], [[pmid-38758238]], [[pmid-39478232]]
- **#neurofibroma** (1 paper): [[pmid-32561749]]
- **#neurotoxicity** (1 paper): [[pmid-28472509]]
- **#never-smoker** (1 paper): [[pmid-34493867]]
- **#nf-kb** (6 papers): [[pmid-22343534]], [[pmid-24434212]], [[pmid-25631445]], [[pmid-29713087]], [[pmid-36723991]], [[pmid-39214094]]
- **#nf1** (26 papers): [[pmid-18772890]], [[pmid-18948947]], [[pmid-20601955]], [[pmid-23334668]], [[pmid-23622249]], [[pmid-23817572]], [[pmid-23897969]], [[pmid-24120142]] *(+18 more)*
- **#nf2** (4 papers): [[pmid-27713405]], [[pmid-33025139]], [[pmid-34433969]], [[pmid-38630790]]
- **#nfat** (1 paper): [[pmid-26551667]]
- **#nfe2l2** (1 paper): [[pmid-22960745]]
- **#nfib** (4 papers): [[pmid-23685749]], [[pmid-26095796]], [[pmid-26631609]], [[pmid-26862087]]
- **#nfkb** (2 papers): [[pmid-26551667]], [[pmid-34272401]]
- **#nfkbie** (1 paper): [[pmid-26343386]]
- **#nivolumab** (4 papers): [[pmid-27169994]], [[pmid-29033130]], [[pmid-35662283]], [[pmid-38653864]]
- **#nk-cell** (1 paper): [[pmid-29100075]]
- **#nk-cells** (1 paper): [[pmid-33025139]]
- **#nkx3-1** (1 paper): [[pmid-23622249]]
- **#nmf-clustering** (1 paper): [[pmid-29713087]]
- **#node-negativity** (1 paper): [[pmid-39214094]]
- **#non-cerebellar** (1 paper): [[pmid-23817572]]
- **#non-clear-cell** (1 paper): [[pmid-25401301]]
- **#non-coding** (4 papers): [[pmid-28667006]], [[pmid-29670109]], [[pmid-32025007]], [[pmid-35982973]]
- **#non-coding-mutations** (1 paper): [[pmid-29316426]]
- **#non-muscle-invasive** (1 paper): [[pmid-28583311]]
- **#non-syndromic** (1 paper): [[pmid-36593350]]
- **#nonsense-mediated-decay** (1 paper): [[pmid-24658004]]
- **#noonan-syndrome** (1 paper): [[pmid-23817572]]
- **#normal-tissue** (2 papers): [[pmid-33029006]], [[pmid-39975212]]
- **#notch** (5 papers): [[pmid-22941189]], [[pmid-23415222]], [[pmid-29625050]], [[pmid-32220891]], [[pmid-34272401]]
- **#notch1** (13 papers): [[pmid-21798893]], [[pmid-21798897]], [[pmid-22343534]], [[pmid-22960745]], [[pmid-23685749]], [[pmid-25303977]], [[pmid-25631445]], [[pmid-26168399]] *(+5 more)*
- **#notch2** (2 papers): [[pmid-25303977]], [[pmid-29713087]]
- **#novel-drivers** (2 papers): [[pmid-22343534]], [[pmid-27158780]]
- **#novel-smgs** (1 paper): [[pmid-35487942]]
- **#npm1** (1 paper): [[pmid-27276561]]
- **#nqo1** (1 paper): [[pmid-22460905]]
- **#nras** (12 papers): [[pmid-22460905]], [[pmid-22622578]], [[pmid-24185509]], [[pmid-24265153]], [[pmid-24434212]], [[pmid-24436047]], [[pmid-25730765]], [[pmid-32913971]] *(+4 more)*
- **#nrf2** (1 paper): [[pmid-29625050]]
- **#nrg1** (1 paper): [[pmid-25583476]]
- **#nsclc** (10 papers): [[pmid-25765070]], [[pmid-28445469]], [[pmid-29337640]], [[pmid-29657128]], [[pmid-34493867]], [[pmid-36038778]], [[pmid-36357680]], [[pmid-37591896]] *(+2 more)*
- **#nsd1** (1 paper): [[pmid-25631445]]
- **#ntrk** (4 papers): [[pmid-27442865]], [[pmid-29316426]], [[pmid-31871300]], [[pmid-35292802]]
- **#ntrk-inhibitor** (1 paper): [[pmid-23817572]]
- **#ntrk1** (1 paper): [[pmid-36493333]]
- **#ntrk2** (1 paper): [[pmid-23817572]]
- **#ntrk3** (1 paper): [[pmid-35585047]]
- **#ntrks** (1 paper): [[pmid-18948947]]
- **#nucleotide-excision-repair** (2 papers): [[pmid-25096233]], [[pmid-39499893]]
- **#nutm1** (1 paper): [[pmid-25730765]]

### O

- **#oligodendroglioma** (1 paper): [[pmid-28472509]]
- **#oncocytoma** (1 paper): [[pmid-25401301]]
- **#oncofusion** (1 paper): [[pmid-35585047]]
- **#oncogene** (3 papers): [[pmid-22941189]], [[pmid-26168399]], [[pmid-30537516]]
- **#oncogenic-processes** (1 paper): [[pmid-29625049]]
- **#oncokb** (5 papers): [[msk-impact-2017]], [[pmid-28336552]], [[pmid-29625050]], [[pmid-35487942]], [[pmid-39289779]]
- **#open-science** (1 paper): [[pmid-29596782]]
- **#oral-cavity** (1 paper): [[pmid-25631445]]
- **#organoid** (2 papers): [[pmid-29625057]], [[pmid-31249418]]
- **#organoids** (3 papers): [[pmid-39214094]], [[pmid-39305899]], [[pmid-39478232]]
- **#organotropism** (2 papers): [[pmid-35120664]], [[pmid-37084736]]
- **#orr** (3 papers): [[pmid-32437664]], [[pmid-32719455]], [[pmid-35121644]]
- **#os** (2 papers): [[pmid-28472509]], [[pmid-35121644]]
- **#osteosarcoma** (2 papers): [[pmid-35585047]], [[pmid-39305899]]
- **#ovarian** (6 papers): [[pmid-21720365]], [[pmid-24658004]], [[pmid-34635660]], [[pmid-34819508]], [[pmid-35443055]], [[pmid-39386723]]
- **#overexpression** (1 paper): [[pmid-22895193]]
- **#oxaliplatin** (1 paper): [[pmid-32730818]]
- **#oxidative-damage** (1 paper): [[pmid-23525077]]
- **#oxidative-stress** (1 paper): [[pmid-22960745]]

### P

- **#p16** (1 paper): [[pmid-24816253]]
- **#p53** (2 papers): [[pmid-18948947]], [[pmid-24120142]]
- **#paad** (6 papers): [[pmid-22158988]], [[pmid-23103869]], [[pmid-24293293]], [[pmid-25855536]], [[pmid-34534465]], [[pmid-39214094]]
- **#pain** (1 paper): [[pmid-33025139]]
- **#pak1** (1 paper): [[pmid-34534465]]
- **#pak2** (1 paper): [[pmid-34534465]]
- **#palb2** (2 papers): [[pmid-24293293]], [[pmid-29610475]]
- **#pam50** (2 papers): [[pmid-22495314]], [[pmid-22522925]]
- **#pan-cancer** (8 papers): [[msk-50k-2026]], [[msk-impact-2017]], [[pmid-22460905]], [[pmid-29625050]], [[pmid-32214244]], [[pmid-35292802]], [[pmid-36001024]], [[pmid-39147831]]
- **#pan-cancer-clinical** (1 paper): [[pmid-29625055]]
- **#pan-cancer-comparison** (1 paper): [[pmid-25024180]]
- **#pan-cancer-map** (32 papers): [[msk-50k-2026]], [[msk-impact-2017]], [[pmid-22460905]], [[pmid-23000897]], [[pmid-25079317]], [[pmid-26451490]], [[pmid-26804919]], [[pmid-28007021]] *(+24 more)*
- **#pancanatlas** (1 paper): [[pmid-29596782]]
- **#pancreatic** (8 papers): [[pmid-22158988]], [[pmid-23103869]], [[pmid-24293293]], [[pmid-25855536]], [[pmid-31249418]], [[pmid-34534465]], [[pmid-35662283]], [[pmid-39214094]]
- **#pancreatic-cyst** (1 paper): [[pmid-22158988]]
- **#pancreatic-neuroendocrine** (2 papers): [[pmid-21252315]], [[pmid-30687805]]
- **#pannet** (1 paper): [[pmid-21252315]]
- **#papillary** (2 papers): [[pmid-25401301]], [[pmid-25417114]]
- **#paradoxical-activation** (1 paper): [[pmid-23817572]]
- **#paraganglioma** (2 papers): [[pmid-28162975]], [[pmid-40097403]]
- **#parasympathetic** (1 paper): [[pmid-40097403]]
- **#park2** (1 paper): [[pmid-22495314]]
- **#parp** (2 papers): [[pmid-31249418]], [[pmid-32719455]]
- **#parp-inhibitor** (4 papers): [[pmid-28825054]], [[pmid-29713003]], [[pmid-32317181]], [[pmid-34635660]]
- **#parpi** (1 paper): [[pmid-39753968]]
- **#passenger-mutations** (1 paper): [[pmid-23415222]]
- **#pathologic-response** (1 paper): [[pmid-39499893]]
- **#pathway** (1 paper): [[pmid-24120142]]
- **#pathway-alteration** (1 paper): [[pmid-35487942]]
- **#pathway-analysis** (9 papers): [[pmid-18948947]], [[pmid-23103869]], [[pmid-29625049]], [[pmid-29625050]], [[pmid-32220891]], [[pmid-32317181]], [[pmid-32561749]], [[pmid-32791233]] *(+1 more)*
- **#pathway-convergence** (2 papers): [[pmid-22722201]], [[pmid-34272401]]
- **#pathway-cross-talk** (1 paper): [[pmid-29625050]]
- **#pax3** (4 papers): [[pmid-24436047]], [[pmid-35585047]], [[pmid-37315267]], [[pmid-37730754]]
- **#pax5** (1 paper): [[pmid-25730765]]
- **#pax7** (3 papers): [[pmid-24436047]], [[pmid-37315267]], [[pmid-37730754]]
- **#pbaf** (1 paper): [[pmid-29301960]]
- **#pbrm1** (7 papers): [[pmid-23792563]], [[pmid-24185509]], [[pmid-24487277]], [[pmid-29301960]], [[pmid-29867230]], [[pmid-30150660]], [[pmid-34272401]]
- **#pcawg** (1 paper): [[pmid-32025007]]
- **#pcnsl** (1 paper): [[pmid-38995739]]
- **#pcpg** (1 paper): [[pmid-40097403]]
- **#pcv** (1 paper): [[pmid-28472509]]
- **#pd-1** (4 papers): [[pmid-29033130]], [[pmid-30742122]], [[pmid-32719455]], [[pmid-35662283]]
- **#pd-l1** (11 papers): [[pmid-27169994]], [[pmid-27939400]], [[pmid-29100075]], [[pmid-29713003]], [[pmid-29713087]], [[pmid-29867230]], [[pmid-32437664]], [[pmid-35121644]] *(+3 more)*
- **#pd-l2** (1 paper): [[pmid-36723991]]
- **#pd1** (1 paper): [[pmid-29337640]]
- **#pdac** (3 papers): [[pmid-31249418]], [[pmid-35662283]], [[pmid-39214094]]
- **#pdac-vs-pannet** (1 paper): [[pmid-21252315]]
- **#pdcd1** (1 paper): [[pmid-32299819]]
- **#pdgfra** (8 papers): [[pmid-18772890]], [[pmid-30675060]], [[pmid-31068700]], [[pmid-31263031]], [[pmid-33577785]], [[pmid-36593350]], [[pmid-37477937]], [[pmid-37990009]]
- **#pdl1** (4 papers): [[pmid-29337640]], [[pmid-36038778]], [[pmid-36723991]], [[pmid-39550333]]
- **#pdtc** (1 paper): [[pmid-26878173]]
- **#pdto** (1 paper): [[pmid-39305899]]
- **#pdx** (9 papers): [[pmid-25470049]], [[pmid-31693904]], [[pmid-31852831]], [[pmid-32332851]], [[pmid-32561749]], [[pmid-35440124]], [[pmid-37990009]], [[pmid-38488813]] *(+1 more)*
- **#pediatric** (28 papers): [[pmid-22722829]], [[pmid-22820256]], [[pmid-22832583]], [[pmid-23817572]], [[pmid-24436047]], [[pmid-25730765]], [[pmid-26466568]], [[pmid-26760213]] *(+20 more)*
- **#pediatric-cancer** (1 paper): [[pmid-23334666]]
- **#pembrolizumab** (3 papers): [[pmid-32437664]], [[pmid-36862133]], [[pmid-38949888]]
- **#pepci** (1 paper): [[pmid-30537516]]
- **#peripheral-blood** (1 paper): [[pmid-35121644]]
- **#peritoneal-disease** (1 paper): [[pmid-36493333]]
- **#personalised-medicine** (1 paper): [[pmid-31249418]]
- **#pfs** (5 papers): [[pmid-29301960]], [[pmid-32437664]], [[pmid-35121644]], [[pmid-35377946]], [[pmid-39499893]]
- **#phase-ii** (1 paper): [[pmid-35121644]]
- **#phase2** (1 paper): [[pmid-32437664]]
- **#pheochromocytoma** (2 papers): [[pmid-28162975]], [[pmid-40097403]]
- **#phosphoproteomics** (1 paper): [[pmid-34534465]]
- **#phylogenetic** (1 paper): [[pmid-28445469]]
- **#phylogenetics** (2 papers): [[pmid-32220886]], [[pmid-36543146]]
- **#pi3k** (36 papers): [[pmid-18772890]], [[pmid-18948947]], [[pmid-20601955]], [[pmid-22941189]], [[pmid-23334668]], [[pmid-23525077]], [[pmid-23685749]], [[pmid-23897969]] *(+28 more)*
- **#pi3k-pathway** (2 papers): [[pmid-23792563]], [[pmid-25730765]]
- **#pik3ca** (75 papers): [[pmid-18772890]], [[pmid-20601955]], [[pmid-21252315]], [[pmid-21720365]], [[pmid-21798893]], [[pmid-22495314]], [[pmid-22722201]], [[pmid-22722202]] *(+67 more)*
- **#pik3cb** (2 papers): [[pmid-31978347]], [[pmid-33263939]]
- **#pik3r1** (5 papers): [[pmid-18772890]], [[pmid-23622249]], [[pmid-25730765]], [[pmid-28485815]], [[pmid-35670774]]
- **#pilocytic-astrocytoma** (1 paper): [[pmid-23817572]]
- **#pituitary** (1 paper): [[pmid-38758238]]
- **#plasma** (1 paper): [[pmid-39289779]]
- **#plasma-cell** (1 paper): [[pmid-24434212]]
- **#plasticity** (1 paper): [[pmid-39478232]]
- **#platinum** (4 papers): [[pmid-26928463]], [[pmid-29713003]], [[pmid-31249418]], [[pmid-32730818]]
- **#platinum-chemotherapy** (1 paper): [[pmid-39499893]]
- **#plcb4** (1 paper): [[pmid-26683228]]
- **#plcg1** (1 paper): [[pmid-33577785]]
- **#pms2** (1 paper): [[pmid-35585047]]
- **#pnet** (2 papers): [[pmid-21252315]], [[pmid-30687805]]
- **#pold1** (2 papers): [[pmid-35487942]], [[pmid-36001024]]
- **#pole** (7 papers): [[msk-impact-2017]], [[pmid-23636398]], [[pmid-27149842]], [[pmid-28485815]], [[pmid-30068706]], [[pmid-35487942]], [[pmid-37651310]]
- **#polyclonal-resistance** (2 papers): [[pmid-24265153]], [[pmid-35304457]]
- **#polyclonal-seeding** (1 paper): [[pmid-37169874]]
- **#polycythemia-vera** (1 paper): [[pmid-24325359]]
- **#poor-prognosis** (1 paper): [[pmid-22522925]]
- **#positive-selection** (1 paper): [[pmid-27149842]]
- **#pp2a** (1 paper): [[pmid-22522925]]
- **#ppp2r1a** (1 paper): [[pmid-28485815]]
- **#ppp2r2a** (1 paper): [[pmid-22522925]]
- **#prad** (2 papers): [[pmid-29617662]], [[pmid-32317181]]
- **#prc2** (1 paper): [[pmid-25240281]]
- **#prdm1** (1 paper): [[pmid-24434212]]
- **#pre-malignant** (1 paper): [[pmid-34910928]]
- **#pre-transformation** (1 paper): [[pmid-23415222]]
- **#pre-treatment** (1 paper): [[pmid-25024180]]
- **#preanalytic** (1 paper): [[pmid-39289779]]
- **#precision-medicine** (3 papers): [[pmid-28007021]], [[pmid-29625057]], [[pmid-32719455]]
- **#precision-oncology** (10 papers): [[msk-impact-2017]], [[pmid-22460905]], [[pmid-29337640]], [[pmid-29625050]], [[pmid-31249418]], [[pmid-31263031]], [[pmid-35292802]], [[pmid-36543146]] *(+2 more)*
- **#preclinical** (1 paper): [[pmid-23897969]]
- **#predictive** (1 paper): [[pmid-32437664]]
- **#premenopausal** (1 paper): [[pmid-29713003]]
- **#preoperative** (1 paper): [[pmid-34290393]]
- **#preprint** (1 paper): [[pmid-39975212]]
- **#prescient** (1 paper): [[pmid-30537516]]
- **#prex2** (1 paper): [[pmid-22622578]]
- **#prf1** (1 paper): [[pmid-26359337]]
- **#primary-vs-metastatic** (4 papers): [[pmid-25164765]], [[pmid-27749842]], [[pmid-30290956]], [[pmid-31263031]]
- **#prkacb** (1 paper): [[pmid-28667006]]
- **#prkdc** (1 paper): [[pmid-18948947]]
- **#prognosis** (19 papers): [[pmid-21252315]], [[pmid-23415222]], [[pmid-24185509]], [[pmid-25092538]], [[pmid-25223734]], [[pmid-25991819]], [[pmid-27149842]], [[pmid-27276561]] *(+11 more)*
- **#prognostic** (2 papers): [[pmid-25024180]], [[pmid-39753968]]
- **#prognostic-biomarker** (3 papers): [[pmid-25024180]], [[pmid-30068706]], [[pmid-40256659]]
- **#prognostic-markers** (1 paper): [[pmid-27776115]]
- **#progression** (3 papers): [[pmid-24816253]], [[pmid-32220886]], [[pmid-33263939]]
- **#promoter-mutations** (1 paper): [[msk-impact-2017]]
- **#proneural** (1 paper): [[pmid-24120142]]
- **#prospective** (1 paper): [[pmid-28336552]]
- **#prospective-biomarker** (1 paper): [[pmid-39499893]]
- **#prostate** (23 papers): [[pmid-22610119]], [[pmid-22722839]], [[pmid-23622249]], [[pmid-25024180]], [[pmid-26000489]], [[pmid-26544944]], [[pmid-26855148]], [[pmid-26928463]] *(+15 more)*
- **#prostate-cancer** (1 paper): [[pmid-25024180]]
- **#protac** (1 paper): [[pmid-34544752]]
- **#protein-complex** (1 paper): [[pmid-31978347]]
- **#protein-expression** (1 paper): [[pmid-24658004]]
- **#proteomics** (7 papers): [[pmid-31978347]], [[pmid-33242424]], [[pmid-33577785]], [[pmid-34358469]], [[pmid-34433969]], [[pmid-34534465]], [[pmid-36001024]]
- **#prox1** (1 paper): [[pmid-39478232]]
- **#psa** (1 paper): [[pmid-25024180]]
- **#pseudohypoxia** (1 paper): [[pmid-40097403]]
- **#ptch1** (3 papers): [[pmid-22820256]], [[pmid-26760213]], [[pmid-28726821]]
- **#ptcl** (1 paper): [[pmid-37078708]]
- **#pten** (54 papers): [[pmid-18772890]], [[pmid-18948947]], [[pmid-21252315]], [[pmid-21798893]], [[pmid-22495314]], [[pmid-22622578]], [[pmid-22722201]], [[pmid-22722839]] *(+46 more)*
- **#ptpn11** (3 papers): [[pmid-23817572]], [[pmid-25730765]], [[pmid-33577785]]
- **#ptprd** (3 papers): [[pmid-18948947]], [[pmid-24434212]], [[pmid-35982973]]
- **#ptprk** (1 paper): [[pmid-22895193]]

### Q

- **#quality-of-life** (1 paper): [[pmid-28472509]]

### R

- **#r-chop** (1 paper): [[pmid-29713087]]
- **#rac1** (3 papers): [[pmid-22842228]], [[pmid-23525077]], [[pmid-24265153]]
- **#race** (2 papers): [[pmid-34667026]], [[pmid-37651310]]
- **#rad51b** (1 paper): [[pmid-34635660]]
- **#radiation** (1 paper): [[pmid-26760213]]
- **#radiation-deferral** (1 paper): [[pmid-28472509]]
- **#radiation-induced** (2 papers): [[pmid-37350195]], [[pmid-40100215]]
- **#radiomics** (2 papers): [[pmid-36038778]], [[pmid-37910594]]
- **#radiotherapy** (2 papers): [[pmid-37315267]], [[pmid-38117484]]
- **#raf** (2 papers): [[pmid-22460905]], [[pmid-24265153]]
- **#raf-inhibitor** (1 paper): [[pmid-31263031]]
- **#raf1** (2 papers): [[pmid-30867592]], [[pmid-33509808]]
- **#rag** (1 paper): [[pmid-36723991]]
- **#rag-mediated** (1 paper): [[pmid-27776115]]
- **#rapid-autopsy** (1 paper): [[pmid-26928463]]
- **#rare-cancer** (4 papers): [[pmid-24658004]], [[pmid-26862087]], [[pmid-36862133]], [[pmid-39305899]]
- **#rare-drivers** (2 papers): [[msk-50k-2026]], [[pmid-29610475]]
- **#rare-lesion** (1 paper): [[pmid-33263939]]
- **#ras** (6 papers): [[pmid-23334668]], [[pmid-26359337]], [[pmid-26878173]], [[pmid-29625050]], [[pmid-34819518]], [[pmid-38412093]]
- **#ras-mapk** (2 papers): [[pmid-22343534]], [[pmid-33025139]]
- **#ras-mut** (1 paper): [[pmid-36493333]]
- **#ras-pathway** (2 papers): [[pmid-24185509]], [[pmid-25730765]]
- **#ras-signaling** (1 paper): [[pmid-27776115]]
- **#rasopathy** (1 paper): [[pmid-23817572]]
- **#rb** (1 paper): [[pmid-24120142]]
- **#rb1** (46 papers): [[pmid-18772890]], [[pmid-18948947]], [[pmid-22495314]], [[pmid-22722201]], [[pmid-22722839]], [[pmid-22941188]], [[pmid-22941189]], [[pmid-22960745]] *(+38 more)*
- **#rbm10** (2 papers): [[pmid-25855536]], [[pmid-34290393]]
- **#rcc** (3 papers): [[pmid-25401301]], [[pmid-27713405]], [[pmid-29867230]]
- **#rdeb** (1 paper): [[pmid-34272401]]
- **#reactive-stroma** (1 paper): [[pmid-30537516]]
- **#real-world** (1 paper): [[pmid-39147831]]
- **#real-world-data** (4 papers): [[pmid-35705558]], [[pmid-37682528]], [[pmid-37699004]], [[pmid-39506116]]
- **#reclassification** (1 paper): [[pmid-35585047]]
- **#rectal** (2 papers): [[pmid-22810696]], [[pmid-35970919]]
- **#recurrence** (2 papers): [[pmid-26760213]], [[pmid-32791233]]
- **#reflux** (1 paper): [[pmid-23525077]]
- **#regional-differences** (1 paper): [[pmid-30427539]]
- **#regulatory-network** (1 paper): [[pmid-41758938]]
- **#relapse** (5 papers): [[pmid-25024180]], [[pmid-25223734]], [[pmid-25730765]], [[pmid-28445469]], [[pmid-37730754]]
- **#renal** (5 papers): [[pmid-24487277]], [[pmid-25155756]], [[pmid-25401301]], [[pmid-27169994]], [[pmid-29301960]]
- **#reproducibility** (1 paper): [[pmid-29596782]]
- **#residual-disease** (1 paper): [[pmid-28445469]]
- **#resistance** (26 papers): [[pmid-24265153]], [[pmid-27646943]], [[pmid-28027327]], [[pmid-29122777]], [[pmid-30150660]], [[pmid-30687805]], [[pmid-31552290]], [[pmid-32404308]] *(+18 more)*
- **#ret** (4 papers): [[pmid-25417114]], [[pmid-28336552]], [[pmid-29617662]], [[pmid-35304457]]
- **#retinoblastoma** (1 paper): [[pmid-33466343]]
- **#rhabdoid** (1 paper): [[pmid-26977886]]
- **#rhabdomyosarcoma** (5 papers): [[pmid-24436047]], [[pmid-37315267]], [[pmid-37730754]], [[pmid-39305899]], [[pmid-41758938]]
- **#rho-signaling** (1 paper): [[pmid-26862087]]
- **#rhoa** (3 papers): [[pmid-25583476]], [[pmid-26862087]], [[pmid-37078708]]
- **#rictor** (1 paper): [[pmid-36357680]]
- **#risk-stratification** (6 papers): [[pmid-25024180]], [[pmid-37315267]], [[pmid-37477937]], [[pmid-37980418]], [[pmid-38488807]], [[pmid-39147831]]
- **#rlf** (1 paper): [[pmid-22941189]]
- **#rlf-mycl1** (1 paper): [[pmid-22941189]]
- **#rms** (2 papers): [[pmid-37730754]], [[pmid-39305899]]
- **#rna-binding** (1 paper): [[pmid-33397444]]
- **#rna-processing** (1 paper): [[pmid-24434212]]
- **#rna-seq** (13 papers): [[pmid-21796119]], [[pmid-22495314]], [[pmid-22832583]], [[pmid-22895193]], [[pmid-24120142]], [[pmid-25240281]], [[pmid-26977886]], [[pmid-28007021]] *(+5 more)*
- **#rna-splicing** (3 papers): [[pmid-27149842]], [[pmid-30537516]], [[pmid-31068700]]
- **#rnf43** (2 papers): [[pmid-22158988]], [[pmid-25855536]]
- **#robo** (1 paper): [[pmid-23103869]]
- **#ros1** (1 paper): [[pmid-28336552]]
- **#rpl22** (1 paper): [[pmid-31978347]]
- **#rsf** (1 paper): [[pmid-39147831]]
- **#rspo2** (1 paper): [[pmid-22895193]]
- **#rspo3** (1 paper): [[pmid-22895193]]
- **#rtk** (9 papers): [[pmid-18772890]], [[pmid-24120142]], [[pmid-24436047]], [[pmid-25583493]], [[pmid-27158780]], [[pmid-29617662]], [[pmid-29625050]], [[pmid-30427539]] *(+1 more)*
- **#rtk-pathway** (1 paper): [[msk-50k-2026]]
- **#rtk-signaling** (1 paper): [[pmid-23334668]]
- **#runx1** (2 papers): [[pmid-22722202]], [[pmid-38147626]]

### S

- **#salivary** (5 papers): [[pmid-23685749]], [[pmid-26631609]], [[pmid-26862087]], [[pmid-31483290]], [[pmid-31871300]]
- **#sample-quality** (1 paper): [[pmid-39289779]]
- **#sarcoma** (21 papers): [[pmid-20601955]], [[pmid-24436047]], [[pmid-25223734]], [[pmid-25240281]], [[pmid-29100075]], [[pmid-31871300]], [[pmid-32299819]], [[pmid-35292802]] *(+13 more)*
- **#sbs** (1 paper): [[pmid-36723991]]
- **#sbs7** (1 paper): [[pmid-39975212]]
- **#sca** (1 paper): [[pmid-22158988]]
- **#sccoht** (1 paper): [[pmid-24658004]]
- **#schwannomatosis** (1 paper): [[pmid-33025139]]
- **#sclc** (5 papers): [[pmid-22941188]], [[pmid-22941189]], [[pmid-28196596]], [[pmid-35440124]], [[pmid-39185963]]
- **#scrna-seq** (3 papers): [[pmid-34910928]], [[pmid-37406106]], [[pmid-39478232]]
- **#sdh** (2 papers): [[pmid-36593350]], [[pmid-37477937]]
- **#sdha** (1 paper): [[pmid-36593350]]
- **#sdhb** (2 papers): [[pmid-36593350]], [[pmid-40097403]]
- **#secondary-cancer** (2 papers): [[pmid-37350195]], [[pmid-40100215]]
- **#secondary-gbm** (1 paper): [[pmid-24120142]]
- **#selective-sweep** (1 paper): [[pmid-23415222]]
- **#selpercatinib** (1 paper): [[pmid-35304457]]
- **#semaphorin** (1 paper): [[pmid-23103869]]
- **#sensitivity** (2 papers): [[pmid-35585047]], [[pmid-39289779]]
- **#sentinel-node** (1 paper): [[pmid-37315267]]
- **#sequencing-depth** (1 paper): [[pmid-35585047]]
- **#serial-biopsy** (2 papers): [[pmid-30687805]], [[pmid-39289779]]
- **#serial-passage** (1 paper): [[pmid-25470049]]
- **#serous** (1 paper): [[pmid-28485815]]
- **#serrated** (1 paper): [[pmid-34910928]]
- **#setd1b** (1 paper): [[pmid-38653864]]
- **#setd2** (7 papers): [[pmid-23792563]], [[pmid-24487277]], [[pmid-25730765]], [[pmid-27713405]], [[pmid-29301960]], [[pmid-30687805]], [[pmid-32791233]]
- **#setdb1** (1 paper): [[pmid-38630790]]
- **#sezary** (1 paper): [[pmid-26551667]]
- **#sf3b1** (3 papers): [[pmid-24030381]], [[pmid-29610475]], [[pmid-35927489]]
- **#sft** (1 paper): [[pmid-37980418]]
- **#shh** (4 papers): [[pmid-22722829]], [[pmid-22820256]], [[pmid-22832583]], [[pmid-28726821]]
- **#shh-medulloblastoma** (1 paper): [[pmid-22832583]]
- **#shh-pathway** (1 paper): [[pmid-26760213]]
- **#signaling** (1 paper): [[pmid-24185509]]
- **#signaling-pathway** (1 paper): [[pmid-23334668]]
- **#signature-s3** (1 paper): [[pmid-29713003]]
- **#significantly-mutated-genes** (4 papers): [[pmid-22343534]], [[pmid-22895193]], [[pmid-24120142]], [[pmid-27149842]]
- **#single-cell** (5 papers): [[pmid-25470049]], [[pmid-33029006]], [[pmid-35235413]], [[pmid-39975212]], [[pmid-41758938]]
- **#single-driver** (1 paper): [[pmid-24658004]]
- **#single-gene-driver** (1 paper): [[pmid-24658004]]
- **#single-pathway** (1 paper): [[pmid-23817572]]
- **#sister-chromatid** (1 paper): [[pmid-24121792]]
- **#ski-complex** (1 paper): [[pmid-31978347]]
- **#skin** (6 papers): [[pmid-25303977]], [[pmid-33029006]], [[pmid-34272401]], [[pmid-35982973]], [[pmid-38895302]], [[pmid-39975212]]
- **#slc6a2** (1 paper): [[pmid-40097403]]
- **#slfn11** (1 paper): [[pmid-22460905]]
- **#slit** (1 paper): [[pmid-23103869]]
- **#smad4** (14 papers): [[pmid-23103869]], [[pmid-23622249]], [[pmid-24293293]], [[pmid-24816253]], [[pmid-25855536]], [[pmid-30427539]], [[pmid-31249418]], [[pmid-33795256]] *(+6 more)*
- **#smarca2** (3 papers): [[pmid-23685749]], [[pmid-24658004]], [[pmid-37730754]]
- **#smarca4** (6 papers): [[pmid-22722829]], [[pmid-23525077]], [[pmid-24658004]], [[pmid-28726821]], [[pmid-32791233]], [[pmid-34290393]]
- **#smarcb1** (3 papers): [[pmid-26977886]], [[pmid-33025139]], [[pmid-36577525]]
- **#smarcd1** (1 paper): [[pmid-22722201]]
- **#smo** (2 papers): [[pmid-26760213]], [[pmid-28726821]]
- **#smoking** (3 papers): [[pmid-18948947]], [[pmid-27158780]], [[pmid-30150660]]
- **#snrna-seq** (1 paper): [[pmid-41758938]]
- **#snv** (1 paper): [[pmid-22495314]]
- **#socioeconomic** (1 paper): [[pmid-34667026]]
- **#socs1** (1 paper): [[pmid-36723991]]
- **#soft-tissue** (2 papers): [[pmid-20601955]], [[pmid-25240281]]
- **#solitary-fibrous-tumor** (1 paper): [[pmid-37980418]]
- **#somatic-genomics** (1 paper): [[pmid-34405229]]
- **#somatic-hypermutation** (4 papers): [[pmid-21796119]], [[pmid-22343534]], [[pmid-29713087]], [[pmid-36723991]]
- **#somatic-mutation** (3 papers): [[pmid-23334668]], [[pmid-24120142]], [[pmid-33029006]]
- **#somatic-mutations** (1 paper): [[pmid-29713003]]
- **#somatic-variants** (1 paper): [[pmid-29596782]]
- **#sotigalimab** (1 paper): [[pmid-35662283]]
- **#sox2** (3 papers): [[pmid-22941189]], [[pmid-22960745]], [[pmid-25631445]]
- **#sparse-mutational-landscape** (1 paper): [[pmid-24658004]]
- **#spatial** (2 papers): [[pmid-39386479]], [[pmid-39386723]]
- **#spatial-transcriptomics** (2 papers): [[pmid-39214094]], [[pmid-39975212]]
- **#specificity** (1 paper): [[pmid-39289779]]
- **#spen** (1 paper): [[pmid-29610475]]
- **#splice-site** (1 paper): [[pmid-24658004]]
- **#splice-variants** (1 paper): [[pmid-29316426]]
- **#spliceosome** (1 paper): [[pmid-29610475]]
- **#splicing** (5 papers): [[pmid-23415222]], [[pmid-24120142]], [[pmid-24325359]], [[pmid-27158780]], [[pmid-29625049]]
- **#spn** (1 paper): [[pmid-22158988]]
- **#spop** (8 papers): [[pmid-22610119]], [[pmid-23622249]], [[pmid-26544944]], [[pmid-28485815]], [[pmid-28825054]], [[pmid-29610475]], [[pmid-32220891]], [[pmid-35120664]]
- **#squamous** (11 papers): [[pmid-21798893]], [[pmid-22960745]], [[pmid-24686850]], [[pmid-25303977]], [[pmid-25589618]], [[pmid-29422544]], [[pmid-29625050]], [[pmid-34272401]] *(+3 more)*
- **#squamous-differentiation** (1 paper): [[pmid-21798893]]
- **#squamous-lineage** (1 paper): [[pmid-27158780]]
- **#src** (1 paper): [[pmid-34534465]]
- **#srsf2** (1 paper): [[pmid-24030381]]
- **#ss18-ssx** (1 paper): [[pmid-29100075]]
- **#stag2** (3 papers): [[pmid-24121792]], [[pmid-25223734]], [[pmid-33263939]]
- **#stage-specific** (1 paper): [[pmid-36543146]]
- **#staging** (3 papers): [[pmid-34290393]], [[pmid-37315267]], [[pmid-39214094]]
- **#stat3** (1 paper): [[pmid-26551667]]
- **#statistical-power** (1 paper): [[pmid-34272401]]
- **#stem-cell** (1 paper): [[pmid-39975212]]
- **#stk11** (5 papers): [[pmid-18948947]], [[pmid-28336552]], [[pmid-29337640]], [[pmid-34290393]], [[pmid-39147831]]
- **#stomach** (1 paper): [[pmid-25583476]]
- **#stroma** (1 paper): [[pmid-36333289]]
- **#structural-variant** (1 paper): [[pmid-24120142]]
- **#structural-variants** (14 papers): [[pmid-22622578]], [[pmid-22832583]], [[pmid-23622249]], [[pmid-25223734]], [[pmid-25730765]], [[pmid-26168399]], [[pmid-26466568]], [[pmid-26631609]] *(+6 more)*
- **#structural-variation** (1 paper): [[pmid-28373299]]
- **#subclonal** (5 papers): [[pmid-22495314]], [[pmid-23415222]], [[pmid-25730765]], [[pmid-28445469]], [[pmid-35585047]]
- **#subclone** (1 paper): [[pmid-24434212]]
- **#subtype** (1 paper): [[pmid-29713003]]
- **#subtyping** (1 paper): [[pmid-35487942]]
- **#surrogate-biomarker** (1 paper): [[pmid-38488807]]
- **#surrogate-endpoint** (1 paper): [[pmid-37910594]]
- **#surveillance** (2 papers): [[pmid-24816253]], [[pmid-34910928]]
- **#survival** (221 papers): [[msk-impact-2017]], [[pmid-18772890]], [[pmid-18948947]], [[pmid-20601955]], [[pmid-21252315]], [[pmid-21720365]], [[pmid-21798893]], [[pmid-21798897]] *(+213 more)*
- **#suz12** (1 paper): [[pmid-25240281]]
- **#sv** (1 paper): [[pmid-30537516]]
- **#swi** (2 papers): [[pmid-23525077]], [[pmid-24185509]]
- **#swi-snf** (10 papers): [[pmid-22722201]], [[pmid-24658004]], [[pmid-24816253]], [[pmid-26878173]], [[pmid-29301960]], [[pmid-29610475]], [[pmid-30150660]], [[pmid-33397444]] *(+2 more)*
- **#sympathetic** (1 paper): [[pmid-40097403]]
- **#synovial-sarcoma** (1 paper): [[pmid-29100075]]
- **#synthetic-lethality** (3 papers): [[pmid-24658004]], [[pmid-29625050]], [[pmid-31068700]]

### T

- **#t-cell** (5 papers): [[pmid-30742119]], [[pmid-30742122]], [[pmid-35121644]], [[pmid-35662283]], [[pmid-37078708]]
- **#t-cell-lymphoma** (1 paper): [[pmid-26551667]]
- **#tacc3** (2 papers): [[pmid-24120142]], [[pmid-24121792]]
- **#taf1** (1 paper): [[pmid-28485815]]
- **#tandem-duplication** (1 paper): [[pmid-32220891]]
- **#tandem-duplicator** (1 paper): [[pmid-32317181]]
- **#tanning** (1 paper): [[pmid-38895302]]
- **#targetable-fusion** (1 paper): [[pmid-33025139]]
- **#targetable-pathway** (1 paper): [[pmid-33025139]]
- **#targeted-ngs** (1 paper): [[pmid-29337640]]
- **#targeted-sequencing** (1 paper): [[pmid-25164765]]
- **#targeted-therapy** (121 papers): [[pmid-18772890]], [[pmid-18948947]], [[pmid-20601955]], [[pmid-21252315]], [[pmid-22817889]], [[pmid-22842228]], [[pmid-22895193]], [[pmid-22941189]] *(+113 more)*
- **#tazemetostat** (1 paper): [[pmid-22343534]]
- **#tbl1xr1** (1 paper): [[pmid-38995739]]
- **#tbr1** (1 paper): [[pmid-22832583]]
- **#tbx3** (2 papers): [[pmid-22722201]], [[pmid-30205045]]
- **#tcf7l2** (1 paper): [[pmid-22895193]]
- **#tcga** (23 papers): [[pmid-18772890]], [[pmid-21720365]], [[pmid-22810696]], [[pmid-23000897]], [[pmid-23634996]], [[pmid-23636398]], [[pmid-24476821]], [[pmid-25079317]] *(+15 more)*
- **#tcga-comparison** (1 paper): [[pmid-39499893]]
- **#tcr** (3 papers): [[pmid-22522925]], [[pmid-26551667]], [[pmid-29033130]]
- **#tcr-therapy** (1 paper): [[msk-50k-2026]]
- **#tcr-therapy-resistance** (1 paper): [[msk-50k-2026]]
- **#technical-benchmarking** (1 paper): [[pmid-35585047]]
- **#telomerase** (1 paper): [[pmid-26466568]]
- **#telomere** (4 papers): [[pmid-21252315]], [[pmid-24120142]], [[pmid-32025007]], [[pmid-40097403]]
- **#temozolomide** (4 papers): [[pmid-18772890]], [[pmid-24120142]], [[pmid-24336570]], [[pmid-38117484]]
- **#temporal-ordering** (1 paper): [[pmid-23415222]]
- **#tert** (31 papers): [[msk-impact-2017]], [[pmid-24120142]], [[pmid-25155756]], [[pmid-25417114]], [[pmid-26466568]], [[pmid-26824661]], [[pmid-26878173]], [[pmid-27442865]] *(+23 more)*
- **#tet** (1 paper): [[pmid-33025139]]
- **#tet2** (7 papers): [[pmid-22895193]], [[pmid-24030381]], [[pmid-24325359]], [[pmid-26551667]], [[pmid-31768066]], [[pmid-37078708]], [[pmid-38147626]]
- **#tet3** (1 paper): [[pmid-22895193]]
- **#tetraploidy** (1 paper): [[pmid-22832583]]
- **#tfiid** (1 paper): [[pmid-28485815]]
- **#tgf-beta** (6 papers): [[pmid-27149842]], [[pmid-29713003]], [[pmid-30427539]], [[pmid-35487942]], [[pmid-35982973]], [[pmid-39550333]]
- **#tgfb** (3 papers): [[pmid-24816253]], [[pmid-29625050]], [[pmid-31249418]]
- **#thca** (1 paper): [[pmid-29617662]]
- **#theranostics** (1 paper): [[pmid-40097403]]
- **#therapeutic-implication** (1 paper): [[pmid-39147831]]
- **#therapeutic-targeting** (1 paper): [[pmid-23334668]]
- **#therapeutic-vulnerability** (1 paper): [[pmid-34272401]]
- **#thromboembolism** (1 paper): [[pmid-39147831]]
- **#thyroid** (5 papers): [[pmid-25417114]], [[pmid-26878173]], [[pmid-31871300]], [[pmid-35304457]], [[pmid-38412093]]
- **#thyroid anaplastic atc braf ras tp53 tert copy-number survival wgs wes clonal-evolution tumor-evolution treatment-resistance actionability targeted-therapy mapk pi3k** (1 paper): [[pmid-38412093]]
- **#til** (2 papers): [[pmid-29713003]], [[pmid-32719455]]
- **#tils** (2 papers): [[pmid-27149842]], [[pmid-38630790]]
- **#tim3** (1 paper): [[pmid-29100075]]
- **#tissue-context** (1 paper): [[msk-50k-2026]]
- **#tissue-specificity** (6 papers): [[msk-50k-2026]], [[pmid-22817889]], [[pmid-24974848]], [[pmid-25991819]], [[pmid-27158780]], [[pmid-37350195]]
- **#tmb** (49 papers): [[msk-50k-2026]], [[msk-impact-2017]], [[pmid-24974848]], [[pmid-25096233]], [[pmid-25765070]], [[pmid-26091043]], [[pmid-26095796]], [[pmid-26359337]] *(+41 more)*
- **#tme** (4 papers): [[pmid-29625049]], [[pmid-29713003]], [[pmid-30742122]], [[pmid-38653864]]
- **#tmprss2** (3 papers): [[pmid-23622249]], [[pmid-29617662]], [[pmid-30537516]]
- **#tmprss2-erg** (2 papers): [[pmid-22722839]], [[pmid-26928463]]
- **#tmz** (1 paper): [[pmid-28472509]]
- **#tnbc** (7 papers): [[pmid-22495314]], [[pmid-26095796]], [[pmid-29713003]], [[pmid-30867590]], [[pmid-32719455]], [[pmid-35121644]], [[pmid-36001024]]
- **#tnfaip3** (1 paper): [[pmid-36723991]]
- **#tnfrsf14** (1 paper): [[pmid-22343534]]
- **#tobacco** (2 papers): [[pmid-21798893]], [[pmid-22941189]]
- **#top2a** (1 paper): [[pmid-32719455]]
- **#topoisomerase** (1 paper): [[pmid-22460905]]
- **#tp53** (185 papers): [[pmid-18772890]], [[pmid-18948947]], [[pmid-20601955]], [[pmid-21252315]], [[pmid-21720365]], [[pmid-21798893]], [[pmid-22495314]], [[pmid-22722201]] *(+177 more)*
- **#tp63** (1 paper): [[pmid-21798893]]
- **#tp73** (1 paper): [[pmid-26168399]]
- **#tpc** (1 paper): [[pmid-22722201]]
- **#tracerx** (1 paper): [[pmid-28445469]]
- **#traf3** (2 papers): [[pmid-24434212]], [[pmid-25631445]]
- **#trans** (1 paper): [[pmid-22522925]]
- **#transcription-factor** (1 paper): [[pmid-27776115]]
- **#transcriptome** (1 paper): [[pmid-26878173]]
- **#transcriptomic-subtype** (1 paper): [[pmid-31249418]]
- **#translocation** (1 paper): [[pmid-25401301]]
- **#trastuzumab** (2 papers): [[pmid-24816253]], [[pmid-32437664]]
- **#treatment-outcome** (1 paper): [[pmid-39499893]]
- **#treatment-refractory** (1 paper): [[pmid-38758238]]
- **#treatment-resistance** (46 papers): [[msk-impact-2017]], [[pmid-18772890]], [[pmid-22941188]], [[pmid-23415222]], [[pmid-23897969]], [[pmid-24336570]], [[pmid-25164765]], [[pmid-26000489]] *(+38 more)*
- **#treatment-response** (18 papers): [[pmid-24145436]], [[pmid-26928463]], [[pmid-29657128]], [[pmid-30290956]], [[pmid-31263031]], [[pmid-31552290]], [[pmid-31748746]], [[pmid-32913971]] *(+10 more)*
- **#treg** (1 paper): [[pmid-35121644]]
- **#triple-negative** (5 papers): [[pmid-22722202]], [[pmid-32719455]], [[pmid-33863915]], [[pmid-35121644]], [[pmid-36001024]]
- **#trk** (1 paper): [[pmid-31871300]]
- **#trk-inhibitor** (1 paper): [[pmid-23817572]]
- **#trkb** (1 paper): [[pmid-23817572]]
- **#trop2** (1 paper): [[pmid-39478232]]
- **#tsc1** (4 papers): [[pmid-18948947]], [[pmid-23897969]], [[pmid-25155756]], [[pmid-36543146]]
- **#tsc2** (4 papers): [[pmid-21252315]], [[pmid-25155756]], [[pmid-30687805]], [[pmid-37769223]]
- **#tsg** (1 paper): [[msk-50k-2026]]
- **#tsp** (1 paper): [[pmid-18948947]]
- **#tumor-agnostic** (4 papers): [[msk-50k-2026]], [[msk-impact-2017]], [[pmid-31871300]], [[pmid-39746944]]
- **#tumor-evolution** (6 papers): [[pmid-26683228]], [[pmid-29316426]], [[pmid-30675060]], [[pmid-31263031]], [[pmid-38412093]], [[pmid-38488807]]
- **#tumor-fraction** (1 paper): [[pmid-34059130]]
- **#tumor-heterogeneity** (11 papers): [[pmid-26928463]], [[pmid-29625057]], [[pmid-31768066]], [[pmid-32437664]], [[pmid-33025139]], [[pmid-34290393]], [[pmid-34910928]], [[pmid-36357680]] *(+3 more)*
- **#tumor-microenvironment** (30 papers): [[pmid-21720365]], [[pmid-25765070]], [[pmid-26091043]], [[pmid-26359337]], [[pmid-27149842]], [[pmid-27169994]], [[pmid-29033130]], [[pmid-29625048]] *(+22 more)*
- **#tumor-mutational-burden** (1 paper): [[pmid-26997480]]
- **#tumor-only-sequencing** (1 paper): [[pmid-36593350]]
- **#tumor-predisposition** (1 paper): [[pmid-24658004]]
- **#tumor-sidedness** (1 paper): [[pmid-34405229]]
- **#tumor-subtype** (1 paper): [[pmid-38412093]]
- **#tumor-suppressor** (12 papers): [[pmid-18948947]], [[pmid-21252315]], [[pmid-22522925]], [[pmid-23334668]], [[pmid-24434212]], [[pmid-24658004]], [[pmid-24816253]], [[pmid-25583493]] *(+4 more)*
- **#tumor-timing** (2 papers): [[pmid-30537516]], [[pmid-36723991]]
- **#tumor-type-specificity** (1 paper): [[pmid-24185509]]
- **#tumour-burden** (1 paper): [[pmid-39147831]]
- **#tumour-type-specificity** (1 paper): [[pmid-21252315]]
- **#turnaround-time** (1 paper): [[pmid-35585047]]

### U

- **#u2af1** (1 paper): [[pmid-29610475]]
- **#ubiquitin** (2 papers): [[pmid-22158988]], [[pmid-29610475]]
- **#umbrella-trial** (1 paper): [[pmid-32719455]]
- **#universal-screening** (1 paper): [[msk-50k-2026]]
- **#unknown-primary** (1 paper): [[pmid-33509808]]
- **#upper-tract** (3 papers): [[pmid-26278805]], [[pmid-32332851]], [[pmid-39550333]]
- **#ups** (1 paper): [[pmid-29100075]]
- **#urothelial** (22 papers): [[pmid-23897969]], [[pmid-24121792]], [[pmid-24476821]], [[pmid-25092538]], [[pmid-25096233]], [[pmid-26278805]], [[pmid-26901067]], [[pmid-27749842]] *(+14 more)*
- **#usp28** (1 paper): [[pmid-34272401]]
- **#uterine** (4 papers): [[pmid-23636398]], [[pmid-28485815]], [[pmid-32299819]], [[pmid-38488807]]
- **#utr** (1 paper): [[pmid-35982973]]
- **#utuc** (1 paper): [[pmid-39550333]]
- **#uv** (4 papers): [[pmid-34272401]], [[pmid-35982973]], [[pmid-38895302]], [[pmid-39975212]]
- **#uv-damage** (1 paper): [[pmid-33029006]]
- **#uv-signature** (2 papers): [[pmid-22622578]], [[pmid-25303977]]
- **#uveal-melanoma** (1 paper): [[pmid-26683228]]

### V

- **#vaf** (4 papers): [[pmid-36593350]], [[pmid-39147831]], [[pmid-39289779]], [[pmid-40256659]]
- **#validation** (2 papers): [[pmid-38488807]], [[pmid-39550333]]
- **#variant-classification** (1 paper): [[pmid-39499893]]
- **#variant-filtering** (1 paper): [[pmid-29596782]]
- **#vegf** (2 papers): [[pmid-33025139]], [[pmid-37350195]]
- **#vegfr** (1 paper): [[pmid-32719455]]
- **#vemurafenib** (1 paper): [[pmid-32913971]]
- **#vgll3** (1 paper): [[pmid-29100075]]
- **#vhl** (9 papers): [[pmid-22158988]], [[pmid-23792563]], [[pmid-24487277]], [[pmid-25401301]], [[pmid-27713405]], [[pmid-29301960]], [[pmid-29867230]], [[pmid-30687805]] *(+1 more)*
- **#vietnam** (1 paper): [[pmid-22722202]]
- **#viper** (1 paper): [[pmid-41758938]]
- **#vte** (1 paper): [[pmid-39147831]]
- **#vte-prediction** (1 paper): [[pmid-39147831]]
- **#vte-prevention** (1 paper): [[pmid-39147831]]
- **#vulva** (1 paper): [[pmid-29422544]]
- **#vus** (1 paper): [[pmid-39499893]]

### W

- **#warburg-effect** (1 paper): [[pmid-31564440]]
- **#wes** (20 papers): [[pmid-22158988]], [[pmid-22343534]], [[pmid-22722202]], [[pmid-23334666]], [[pmid-23415222]], [[pmid-24120142]], [[pmid-24265153]], [[pmid-24293293]] *(+12 more)*
- **#wgd** (7 papers): [[pmid-29622463]], [[pmid-32791233]], [[pmid-34290393]], [[pmid-34433969]], [[pmid-36723991]], [[pmid-39185963]], [[pmid-39753968]]
- **#wgs** (22 papers): [[pmid-22495314]], [[pmid-22722202]], [[pmid-23103869]], [[pmid-23334666]], [[pmid-23622249]], [[pmid-24120142]], [[pmid-24121792]], [[pmid-24434212]] *(+14 more)*
- **#whole-exome** (1 paper): [[pmid-25240281]]
- **#whole-exome-sequencing** (1 paper): [[pmid-25096233]]
- **#wnt** (24 papers): [[pmid-18948947]], [[pmid-22158988]], [[pmid-22722829]], [[pmid-22820256]], [[pmid-22832583]], [[pmid-22895193]], [[pmid-24816253]], [[pmid-25583493]] *(+16 more)*
- **#wnt-pathway** (1 paper): [[pmid-29316426]]
- **#wnt-reactivation** (1 paper): [[pmid-34910928]]
- **#wnt-signaling** (1 paper): [[pmid-22895193]]
- **#wrn** (1 paper): [[pmid-31978347]]

### X

- **#x-linked** (1 paper): [[pmid-25223734]]
- **#xeroderma-pigmentosum** (2 papers): [[pmid-25096233]], [[pmid-34272401]]
- **#xpo1** (1 paper): [[pmid-38147626]]
- **#xrcc1** (1 paper): [[pmid-36001024]]

### Y

- **#yap1** (1 paper): [[pmid-29100075]]
- **#yeats4** (1 paper): [[pmid-20601955]]
- **#young-women** (1 paper): [[pmid-24658004]]

### Z

- **#zfhx3** (1 paper): [[pmid-34667026]]
- **#zfp36l1** (1 paper): [[pmid-33397444]]
- **#zmym3** (1 paper): [[pmid-25223734]]

---

*Index auto-generated from 353 papers in `/papers/`. Concept tags sourced from YAML frontmatter `tags:` fields and `**Concepts:**` lines in Key Findings sections.*
