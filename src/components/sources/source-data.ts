export interface DataOrganization {
  id: string;
  name: string;
  shortName: string;
  category: string;
  website: string;
  supportedIndicators: string[];
  updateFrequency: string;
  datasetCoverage: string;
  lastUpdated: string;
  description: string;
  logoBadgeColor: string; // Tailwind color string for logo avatar
}

export interface DatasetItem {
  id: string;
  indicator: string;
  source: string;
  frequency: string;
  coverage: string;
  years: string;
  category: string;
  status: "Active Sync" | "Verified" | "Scheduled";
}

export interface QualityMetric {
  id: string;
  title: string;
  value: string;
  badge: string;
  description: string;
  iconName: string;
}

export const ORGANIZATIONS_LIST: DataOrganization[] = [
  {
    id: "world-bank",
    name: "World Bank Group",
    shortName: "World Bank",
    category: "Economy & Infrastructure",
    website: "https://www.worldbank.org",
    supportedIndicators: ["Nominal GDP", "Per Capita GDP", "Logistics Performance Index (LPI)", "Ease of Doing Business"],
    updateFrequency: "Annual / Semi-Annual",
    datasetCoverage: "190+ Countries & Territories",
    lastUpdated: "Q1 2025",
    description: "Primary multilateral source for global economic output, income distribution, and international trade logistics metrics.",
    logoBadgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  },
  {
    id: "imf",
    name: "International Monetary Fund",
    shortName: "IMF",
    category: "Economy",
    website: "https://www.imf.org",
    supportedIndicators: ["Real GDP Growth Rate", "Inflation Rate", "Gross National Debt Ratio", "Foreign Exchange Reserves"],
    updateFrequency: "Bi-Annual (WEO Edition)",
    datasetCoverage: "195 Economies",
    lastUpdated: "Q1 2025",
    description: "Authority for global macroeconomic projections, balance of payments, and international monetary stability.",
    logoBadgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  },
  {
    id: "un",
    name: "United Nations",
    shortName: "United Nations",
    category: "Governance & Development",
    website: "https://www.un.org",
    supportedIndicators: ["UN E-Government Index", "Sustainable Development Goals (SDG) Progress", "E-Participation Index"],
    updateFrequency: "Annual / Bi-Annual",
    datasetCoverage: "193 Member States",
    lastUpdated: "2024–2025",
    description: "Global benchmarking for public sector digital transformation, sustainability targets, and international policy alignment.",
    logoBadgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  },
  {
    id: "undp",
    name: "United Nations Development Programme",
    shortName: "UNDP",
    category: "Society & Health",
    website: "https://www.undp.org",
    supportedIndicators: ["Human Development Index (HDI)", "Gender Inequality Index", "Inequality-Adjusted HDI", "Planetary Pressures Index"],
    updateFrequency: "Annual",
    datasetCoverage: "191 Countries",
    lastUpdated: "2024–2025",
    description: "Standard metric for long-term human development, life expectancy, adult literacy, and standard of living worldwide.",
    logoBadgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
  },
  {
    id: "who",
    name: "World Health Organization",
    shortName: "WHO",
    category: "Healthcare",
    website: "https://www.who.int",
    supportedIndicators: ["Global Health Expenditure (% GDP)", "Healthy Life Expectancy (HALE)", "Universal Health Coverage (UHC) Index"],
    updateFrequency: "Annual",
    datasetCoverage: "194 Member States",
    lastUpdated: "2024",
    description: "Direct authority for international public health monitoring, medical infrastructure capacity, and disease prevention.",
    logoBadgeColor: "bg-pink-500/10 text-pink-400 border-pink-500/30",
  },
  {
    id: "unesco",
    name: "UNESCO",
    shortName: "UNESCO",
    category: "Education & Science",
    website: "https://www.unesco.org",
    supportedIndicators: ["Tertiary Education Enrollment Ratio", "R&D Expenditure (% GDP)", "STEM Graduate Output Volume"],
    updateFrequency: "Annual",
    datasetCoverage: "185+ Nations",
    lastUpdated: "2024",
    description: "Global institution evaluating national education system capacity, scientific publishing, and technological research.",
    logoBadgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  },
  {
    id: "oecd",
    name: "Organization for Economic Co-operation and Development",
    shortName: "OECD",
    category: "Economy & Policy",
    website: "https://www.oecd.org",
    supportedIndicators: ["PISA Student Benchmark", "Tax Revenue Ratios", "Foreign Direct Investment (FDI) Outflows"],
    updateFrequency: "Annual",
    datasetCoverage: "38 Member + Key Partner Nations",
    lastUpdated: "2024–2025",
    description: "Leading economic organization providing international policy benchmarks, trade analysis, and structural statistics.",
    logoBadgeColor: "bg-violet-500/10 text-violet-400 border-violet-500/30",
  },
  {
    id: "wef",
    name: "World Economic Forum",
    shortName: "WEF",
    category: "Economy & Tech",
    website: "https://www.weforum.org",
    supportedIndicators: ["Global Competitiveness Index", "Global Gender Gap Index", "Future of Jobs Skills Readiness"],
    updateFrequency: "Annual",
    datasetCoverage: "140+ Economies",
    lastUpdated: "2024–2025",
    description: "Renowned institute assessing national economic competitiveness, industry transformation, and talent capital.",
    logoBadgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
  },
  {
    id: "oxford-insights",
    name: "Oxford Insights",
    shortName: "Oxford Insights",
    category: "Technology & AI",
    website: "https://www.oxfordinsights.com",
    supportedIndicators: ["Government AI Readiness Index", "Public Sector Data Infrastructure", "AI Governance Pillar Score"],
    updateFrequency: "Annual",
    datasetCoverage: "180+ Countries",
    lastUpdated: "2024–2025",
    description: "Premier research entity measuring government readiness to implement AI technologies across public services and industry.",
    logoBadgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/30",
  },
  {
    id: "wipo",
    name: "World Intellectual Property Organization",
    shortName: "WIPO",
    category: "Technology & Innovation",
    website: "https://www.wipo.int",
    supportedIndicators: ["Global Innovation Index (GII)", "Patent Application Filings", "High-Tech Exports Share"],
    updateFrequency: "Annual",
    datasetCoverage: "133 Economies",
    lastUpdated: "2024–2025",
    description: "Specialized UN agency evaluating multi-pillar innovation inputs, patent density, tech exports, and creative outputs.",
    logoBadgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  },
  {
    id: "transparency-intl",
    name: "Transparency International",
    shortName: "Transparency International",
    category: "Governance & Integrity",
    website: "https://www.transparency.org",
    supportedIndicators: ["Corruption Perceptions Index (CPI)", "Public Sector Integrity Rank"],
    updateFrequency: "Annual",
    datasetCoverage: "180 Countries",
    lastUpdated: "2024–2025",
    description: "Global movement measuring public sector corruption perceptions, governance ethics, and institutional transparency.",
    logoBadgeColor: "bg-red-500/10 text-red-400 border-red-500/30",
  },
  {
    id: "iqair",
    name: "IQAir Air Visual",
    shortName: "IQAir",
    category: "Environment & Health",
    website: "https://www.iqair.com",
    supportedIndicators: ["World Air Quality Index (PM2.5)", "Urban Cleanliness Index", "Air Pollution Exposure"],
    updateFrequency: "Real-time & Annual",
    datasetCoverage: "134 Countries / 7,800+ Cities",
    lastUpdated: "Real-Time Sync",
    description: "International environmental technology organization measuring air quality parameters across global cities.",
    logoBadgeColor: "bg-teal-500/10 text-teal-400 border-teal-500/30",
  },
  {
    id: "our-world-in-data",
    name: "Our World in Data",
    shortName: "Our World in Data",
    category: "Society & Energy",
    website: "https://ourworldindata.org",
    supportedIndicators: ["Renewable Energy Capacity", "Carbon Intensity per GDP", "Internet Adoption Rate"],
    updateFrequency: "Continuous / Monthly",
    datasetCoverage: "200+ Countries & Territories",
    lastUpdated: "2025",
    description: "Open-access scientific database tracking global progress against major health, energy, and environmental challenges.",
    logoBadgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  },
  {
    id: "startupblink",
    name: "StartupBlink",
    shortName: "StartupBlink",
    category: "Technology & Economy",
    website: "https://www.startupblink.com",
    supportedIndicators: ["Global Startup Ecosystem Rank", "Tech Unicorn Concentration", "Venture Capital Momentum"],
    updateFrequency: "Annual",
    datasetCoverage: "100 Countries / 1,000+ Cities",
    lastUpdated: "2024–2025",
    description: "Comprehensive startup ecosystem map evaluating regional innovation density, founder support, and tech ventures.",
    logoBadgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/30",
  },
];

export const DATASET_EXPLORER_MOCK: DatasetItem[] = [
  { id: "ds-1", indicator: "Nominal GDP ($ Trillion)", source: "IMF & World Bank", frequency: "Annual", coverage: "190+ Countries", years: "2020–2025", category: "Economy", status: "Active Sync" },
  { id: "ds-2", indicator: "Global Innovation Index (GII)", source: "WIPO", frequency: "Annual", coverage: "133 Economies", years: "2020–2025", category: "Technology", status: "Active Sync" },
  { id: "ds-3", indicator: "Government AI Readiness Index", source: "Oxford Insights", frequency: "Annual", coverage: "180+ Countries", years: "2020–2025", category: "Technology", status: "Active Sync" },
  { id: "ds-4", indicator: "Global Cybersecurity Index (GCI)", source: "ITU", frequency: "Annual", coverage: "194 Countries", years: "2020–2025", category: "Safety", status: "Active Sync" },
  { id: "ds-5", indicator: "Human Development Index (HDI)", source: "UNDP", frequency: "Annual", coverage: "191 Countries", years: "2020–2025", category: "Society", status: "Verified" },
  { id: "ds-6", indicator: "World Happiness Index", source: "UN SDSN", frequency: "Annual", coverage: "143 Countries", years: "2020–2025", category: "Society", status: "Verified" },
  { id: "ds-7", indicator: "Digital Public Infrastructure Scale", source: "UN / Ministry of Electronics", frequency: "Monthly", coverage: "India / Global", years: "2020–2025", category: "Digital Government", status: "Active Sync" },
  { id: "ds-8", indicator: "Global Health Expenditure (% GDP)", source: "WHO", frequency: "Annual", coverage: "194 Countries", years: "2020–2025", category: "Healthcare", status: "Verified" },
  { id: "ds-9", indicator: "Higher Education & STEM Output", source: "UNESCO", frequency: "Annual", coverage: "185+ Nations", years: "2020–2025", category: "Education", status: "Verified" },
  { id: "ds-10", indicator: "Corruption Perceptions Index", source: "Transparency International", frequency: "Annual", coverage: "180 Countries", years: "2020–2025", category: "Governance", status: "Verified" },
  { id: "ds-11", indicator: "Logistics Performance Index (LPI)", source: "World Bank", frequency: "Bi-Annual", coverage: "139 Economies", years: "2020–2025", category: "Economy", status: "Active Sync" },
  { id: "ds-12", indicator: "PM2.5 Air Quality Index", source: "IQAir", frequency: "Real-time", coverage: "134 Countries", years: "2020–2025", category: "Environment", status: "Active Sync" },
];

export const QUALITY_DASHBOARD_METRICS: QualityMetric[] = [
  {
    id: "orgs",
    title: "Trusted Organizations",
    value: "14 Institutions",
    badge: "100% International",
    description: "Multilateral agencies including World Bank, IMF, UN, WIPO, WHO, & UNDP",
    iconName: "Building2",
  },
  {
    id: "indicators",
    title: "Tracked Indicators",
    value: "50+ Indicators",
    badge: "10 Strategic Pillars",
    description: "Verified indicators spanning Economy, AI, Tech, Governance, Health, & Education",
    iconName: "Activity",
  },
  {
    id: "coverage",
    title: "Countries Coverage",
    value: "195 Countries",
    badge: "Global Scale",
    description: "Cross-country comparison data points matching official UN member states",
    iconName: "Globe",
  },
  {
    id: "years",
    title: "Historical Time Horizon",
    value: "6 Multi-Year Editions",
    badge: "2020 – 2025",
    description: "Continuous longitudinal data points tracking India's multi-year progress",
    iconName: "Calendar",
  },
  {
    id: "frequency",
    title: "Update Frequency",
    value: "Real-Time & Annual",
    badge: "Automated Pipelines",
    description: "Direct API integration for annual releases and monthly operational metrics",
    iconName: "RefreshCw",
  },
  {
    id: "integrity",
    title: "Data Verification Rate",
    value: "100% Verified",
    badge: "Zero Synthetic Tampering",
    description: "Strict provenance validation guarantees accuracy against published raw reports",
    iconName: "ShieldCheck",
  },
];
