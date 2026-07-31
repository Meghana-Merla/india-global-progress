export interface DataSourceItem {
  id: string;
  name: string;
  shortName?: string;
  description: string;
  category: string;
  categoryVariant?: "economy" | "health" | "governance" | "technology" | "education" | "general";
  url?: string;
}

export const trustedSources: DataSourceItem[] = [
  {
    id: "world-bank",
    name: "World Bank",
    shortName: "WB",
    description: "Global development indicators, Ease of Doing Business, and economic data.",
    category: "Economy",
    categoryVariant: "economy",
    url: "https://www.worldbank.org",
  },
  {
    id: "imf",
    name: "International Monetary Fund",
    shortName: "IMF",
    description: "World Economic Outlook, GDP projections, and macroeconomic stability metrics.",
    category: "Economy",
    categoryVariant: "economy",
    url: "https://www.imf.org",
  },
  {
    id: "un",
    name: "United Nations",
    shortName: "UN",
    description: "Human Development Index (HDI), E-Government, and Sustainable Development Goals.",
    category: "Society",
    categoryVariant: "general",
    url: "https://www.un.org",
  },
  {
    id: "who",
    name: "World Health Organization",
    shortName: "WHO",
    description: "Global health statistics, universal health coverage, and disease prevention metrics.",
    category: "Health",
    categoryVariant: "health",
    url: "https://www.who.int",
  },
  {
    id: "unesco",
    name: "UNESCO",
    shortName: "UNESCO",
    description: "Global literacy rates, higher education enrollment, and cultural heritage indices.",
    category: "Education",
    categoryVariant: "education",
    url: "https://www.unesco.org",
  },
  {
    id: "oecd",
    name: "OECD",
    shortName: "OECD",
    description: "PISA education scores, tax metrics, and economic co-operation indicators.",
    category: "Economy & Policy",
    categoryVariant: "economy",
    url: "https://www.oecd.org",
  },
  {
    id: "wef",
    name: "World Economic Forum",
    shortName: "WEF",
    description: "Global Competitiveness Index, Gender Gap Index, and Future of Jobs data.",
    category: "Governance",
    categoryVariant: "governance",
    url: "https://www.weforum.org",
  },
  {
    id: "transparency-international",
    name: "Transparency International",
    shortName: "TI",
    description: "Corruption Perceptions Index (CPI) and public sector integrity benchmarks.",
    category: "Governance",
    categoryVariant: "governance",
    url: "https://www.transparency.org",
  },
  {
    id: "oxford-insights",
    name: "Oxford Insights",
    shortName: "OI",
    description: "Government AI Readiness Index and digital transformation assessments.",
    category: "Technology",
    categoryVariant: "technology",
    url: "https://www.oxfordinsights.com",
  },
  {
    id: "wipo",
    name: "World Intellectual Property Organization",
    shortName: "WIPO",
    description: "Global Innovation Index (GII), patent filings, and trademark statistics.",
    category: "Technology",
    categoryVariant: "technology",
    url: "https://www.wipo.int",
  },
  {
    id: "our-world-in-data",
    name: "Our World in Data",
    shortName: "OWID",
    description: "Empirical research and data visualizations on global poverty, climate, and energy.",
    category: "Environment & Data",
    categoryVariant: "general",
    url: "https://ourworldindata.org",
  },
];
