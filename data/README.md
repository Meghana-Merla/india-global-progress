# Data Management Directory

This directory contains the dataset storage and management architecture for the **IndiaLens AI** platform. It provides a structured pipeline for ingesting, processing, and maintaining multi-country indicators from trusted international organizations.

---

## Directory Structure

```
data/
├── raw/                      # Unmodified source data from global organizations
│   ├── world-bank/           # World Bank Open Data (GDP, R&D, Tech Exports)
│   ├── imf/                  # IMF World Economic Outlook (GDP Growth, Inflation)
│   ├── un/                   # United Nations Data Portal (Demographics, SDGs)
│   ├── undp/                 # UNDP Human Development Reports (HDI, GII)
│   ├── who/                  # WHO Global Health Observatory (Life Expectancy, Healthcare)
│   ├── unesco/               # UNESCO Institute for Statistics (Education, Research)
│   ├── oecd/                 # OECD Data Explorer (PISA, Productivity, FDI)
│   ├── wef/                  # World Economic Forum (Competitiveness, Gender Gap)
│   ├── wipo/                 # WIPO Global Innovation Index (GII, Patents, Trademarks)
│   ├── oxford-insights/      # Oxford Insights (Government AI Readiness Index)
│   ├── transparency-international/ # Transparency International (Corruption Perceptions)
│   ├── our-world-in-data/    # Our World in Data (Energy, Carbon, Technology)
│   ├── iqair/                # IQAir (Air Quality Index, PM2.5)
│   └── startupblink/         # StartupBlink (Startup Ecosystem Rankings)
├── processed/                # Cleaned, normalized, and unified datasets ready for DB ingestion
└── metadata/                 # Configuration and catalog files describing data sources
    └── sources.json          # Structured registry of all 14 data sources & metadata
```

---

## Folder Specifications

### 1. `raw/` Folder
- **Purpose**: Stores original, immutable dataset files fetched or downloaded directly from official sources.
- **Rules**:
  - Files inside `raw/` should never be manually edited or altered.
  - Subdirectories are organized strictly by organization slug.
  - Keeps raw source files in their native formats (e.g., CSV, JSON, XLSX, SDMX).

### 2. `processed/` Folder
- **Purpose**: Holds processed, cleaned, and standardized datasets produced by data ingestion pipelines.
- **Transformation Pipeline**:
  - Normalizes country codes to standard ISO codes (e.g., `IND`, `USA`, `CHN`, `DEU`).
  - Standardizes indicator codes, measurement units, and time-series year ranges.
  - Prepares structured records matching the PostgreSQL / Prisma database schema (`Country`, `Indicator`, `IndicatorValue`, `HistoricalRanking`).

### 3. `metadata/` Folder
- **Purpose**: Maintains schema definitions, data source catalogs, and update logs.
- **Key File (`sources.json`)**: Contains details for each data provider including:
  - `name`: Full name of the dataset/portal
  - `organization`: Publishing body
  - `officialWebsite`: URL to official data portal
  - `updateFrequency`: Data release cadence (Annual, Quarterly, etc.)
  - `expectedFileFormat`: Native formats expected during import
  - `supportedIndicators`: List of key metrics ingested from the source
  - `license`: Data license and attribution requirement
  - `lastUpdated`: Timestamp of the latest ingestion execution
