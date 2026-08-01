export interface CategoryIndicator {
  id: string;
  name: string;
  rank: number;
  totalCountries: number;
  score: number;
  source: string;
  year: string;
  trend: "up" | "down" | "neutral";
  change: string;
  categoryId: string;
  description?: string;
}

export interface CountryComparisonItem {
  name: string;
  flag: string;
  rank: number;
  score: number;
}

export interface CategoryDetailData {
  id: string;
  title: string;
  shortTitle: string;
  iconName: string;
  overallScore: number;
  globalRank: number;
  totalCountries: number;
  trendBadge: {
    text: string;
    type: "up" | "down" | "neutral";
  };
  indicatorCount: number;
  shortDescription: string;
  overview: string;
  gradient: string;
  accentColor: string;
  historicalTrend: {
    year: string;
    score: number;
    rank: number;
    globalAvg: number;
  }[];
  indicators: CategoryIndicator[];
  strengths: string[];
  areasForImprovement: string[];
  countriesAhead: CountryComparisonItem[];
  countriesBehind: CountryComparisonItem[];
  aiSummary: {
    executiveSummary: string;
    keyDriver: string;
    recommendation: string;
  };
  distributionData: {
    range: string;
    count: number;
    isIndia?: boolean;
  }[];
  radarData: {
    pillar: string;
    indiaScore: number;
    globalAvg: number;
    topPerformerAvg: number;
  }[];
}

export const CATEGORIES_MOCK_DATA: CategoryDetailData[] = [
  {
    id: "economy",
    title: "Economy",
    shortTitle: "Economy",
    iconName: "TrendingUp",
    overallScore: 78.4,
    globalRank: 5,
    totalCountries: 195,
    trendBadge: { text: "+2 ranks", type: "up" },
    indicatorCount: 16,
    shortDescription: "GDP growth, inflation, export value, ease of business & global trade metrics.",
    overview: "India's economic pillar remains one of its strongest global growth engines, driven by robust GDP expansion, digital commerce scale, and surging foreign direct investment inflows.",
    gradient: "from-blue-500 to-indigo-600",
    accentColor: "#3B82F6",
    historicalTrend: [
      { year: "2020", score: 68.2, rank: 9, globalAvg: 52.1 },
      { year: "2021", score: 71.0, rank: 8, globalAvg: 53.4 },
      { year: "2022", score: 73.5, rank: 7, globalAvg: 54.0 },
      { year: "2023", score: 75.8, rank: 6, globalAvg: 54.8 },
      { year: "2024", score: 77.1, rank: 5, globalAvg: 55.2 },
      { year: "2025", score: 78.4, rank: 5, globalAvg: 55.9 },
    ],
    indicators: [
      { id: "ind-ec-1", name: "Nominal GDP Output ($ Trillion)", rank: 5, totalCountries: 195, score: 88.5, source: "IMF / World Bank", year: "2025", trend: "up", change: "+1 rank", categoryId: "economy" },
      { id: "ind-ec-2", name: "Real GDP Growth Rate (%)", rank: 1, totalCountries: 195, score: 96.2, source: "IMF WEO", year: "2025", trend: "up", change: "Top Tier", categoryId: "economy" },
      { id: "ind-ec-3", name: "Logistics Performance Index (LPI)", rank: 38, totalCountries: 139, score: 72.8, source: "World Bank", year: "2025", trend: "up", change: "+6 ranks", categoryId: "economy" },
      { id: "ind-ec-4", name: "Foreign Direct Investment (FDI) Outflows", rank: 12, totalCountries: 180, score: 74.0, source: "UNCTAD", year: "2025", trend: "up", change: "+3 ranks", categoryId: "economy" },
      { id: "ind-ec-5", name: "Inflation Rate Stability", rank: 42, totalCountries: 190, score: 65.4, source: "RBI / IMF", year: "2025", trend: "neutral", change: "Stable", categoryId: "economy" },
    ],
    strengths: [
      "Top 5 world economy by nominal output",
      "Fastest growing major GDP economy globally",
      "Rapidly improving port & freight logistics index",
      "Strong foreign exchange reserves buffer",
    ],
    areasForImprovement: [
      "Per capita income distribution parity",
      "Manufacturing share of total GDP",
      "Female labor force participation rate",
    ],
    countriesAhead: [
      { name: "United States", flag: "🇺🇸", rank: 1, score: 94.2 },
      { name: "China", flag: "🇨🇳", rank: 2, score: 91.8 },
      { name: "Germany", flag: "🇩🇪", rank: 3, score: 85.6 },
      { name: "Japan", flag: "🇯🇵", rank: 4, score: 82.1 },
    ],
    countriesBehind: [
      { name: "United Kingdom", flag: "🇬🇧", rank: 6, score: 77.2 },
      { name: "France", flag: "🇫🇷", rank: 7, score: 75.8 },
      { name: "Brazil", flag: "🇧🇷", rank: 8, score: 71.4 },
      { name: "Canada", flag: "🇨🇦", rank: 9, score: 70.2 },
    ],
    aiSummary: {
      executiveSummary: "India's economy continues to outpace major peer nations with a projected 7.0%+ annual growth rate. Capital expenditure in infrastructure and digital payment rails provide key structural tailwinds.",
      keyDriver: "Massive public infrastructure investment coupled with digital financial inclusion (UPI/DPI).",
      recommendation: "Focus on expanding high-value electronics manufacturing export zones and skill alignment.",
    },
    distributionData: [
      { range: "0 - 20", count: 28 },
      { range: "21 - 40", count: 62 },
      { range: "41 - 60", count: 65 },
      { range: "61 - 80", count: 35, isIndia: true },
      { range: "81 - 100", count: 5 },
    ],
    radarData: [
      { pillar: "Macro Output", indiaScore: 88, globalAvg: 55, topPerformerAvg: 95 },
      { pillar: "Growth Momentum", indiaScore: 96, globalAvg: 50, topPerformerAvg: 96 },
      { pillar: "Logistics", indiaScore: 73, globalAvg: 58, topPerformerAvg: 92 },
      { pillar: "Financial Depth", indiaScore: 70, globalAvg: 54, topPerformerAvg: 90 },
      { pillar: "Trade Openness", indiaScore: 65, globalAvg: 60, topPerformerAvg: 88 },
    ],
  },
  {
    id: "society",
    title: "Society",
    shortTitle: "Society",
    iconName: "Users",
    overallScore: 62.8,
    globalRank: 64,
    totalCountries: 191,
    trendBadge: { text: "+4 ranks", type: "up" },
    indicatorCount: 12,
    shortDescription: "Human development, demographic trends, quality of life & social wellbeing.",
    overview: "India's society pillar highlights steady gains in Human Development Index (HDI), expanded access to clean water, basic housing, and financial inclusion across rural and urban demographics.",
    gradient: "from-purple-500 to-violet-600",
    accentColor: "#8B5CF6",
    historicalTrend: [
      { year: "2020", score: 54.1, rank: 76, globalAvg: 58.2 },
      { year: "2021", score: 56.4, rank: 72, globalAvg: 58.8 },
      { year: "2022", score: 58.2, rank: 69, globalAvg: 59.1 },
      { year: "2023", score: 60.0, rank: 67, globalAvg: 59.6 },
      { year: "2024", score: 61.5, rank: 65, globalAvg: 60.1 },
      { year: "2025", score: 62.8, rank: 64, globalAvg: 60.5 },
    ],
    indicators: [
      { id: "ind-so-1", name: "Human Development Index (HDI)", rank: 134, totalCountries: 191, score: 64.4, source: "UNDP", year: "2025", trend: "up", change: "+1 rank", categoryId: "society" },
      { id: "ind-so-2", name: "Financial Inclusion Index", rank: 18, totalCountries: 180, score: 86.2, source: "World Bank / Findex", year: "2025", trend: "up", change: "+5 ranks", categoryId: "society" },
      { id: "ind-so-3", name: "Clean Cooking & Electricity Access", rank: 45, totalCountries: 190, score: 79.5, source: "UN IEA", year: "2025", trend: "up", change: "+8 ranks", categoryId: "society" },
      { id: "ind-so-4", name: "World Happiness Index", rank: 126, totalCountries: 143, score: 40.5, source: "UN SDSN", year: "2025", trend: "neutral", change: "Stable", categoryId: "society" },
    ],
    strengths: [
      "Unprecedented speed of universal financial account opening",
      "Near-universal household electrification and LPG access",
      "Demographic dividend with young workforce ratio",
    ],
    areasForImprovement: [
      "Overall HDI rank relative to middle-income peers",
      "Urban sanitation and waste management coverage",
      "Subjective wellbeing & life satisfaction score",
    ],
    countriesAhead: [
      { name: "Norway", flag: "🇳🇴", rank: 1, score: 96.1 },
      { name: "Switzerland", flag: "🇨🇭", rank: 2, score: 95.8 },
      { name: "Singapore", flag: "🇸🇬", rank: 9, score: 90.2 },
      { name: "China", flag: "🇨🇳", rank: 52, score: 68.4 },
    ],
    countriesBehind: [
      { name: "Indonesia", flag: "🇮🇩", rank: 68, score: 61.2 },
      { name: "Vietnam", flag: "🇻🇳", rank: 71, score: 60.5 },
      { name: "South Africa", flag: "🇿🇦", rank: 82, score: 56.4 },
      { name: "Pakistan", flag: "🇵🇰", rank: 112, score: 45.2 },
    ],
    aiSummary: {
      executiveSummary: "Social indicators reflect rapid infrastructure uplift in essential services (electricity, bank accounts, sanitation), while long-term HDI metrics require persistent investment in healthcare and adult education.",
      keyDriver: "Direct Benefit Transfer (DBT) pipelines eliminating leakage in social welfare delivery.",
      recommendation: "Accelerate quality secondary education retention and nutrition programs for children.",
    },
    distributionData: [
      { range: "0 - 20", count: 18 },
      { range: "21 - 40", count: 42 },
      { range: "41 - 60", count: 68 },
      { range: "61 - 80", count: 48, isIndia: true },
      { range: "81 - 100", count: 15 },
    ],
    radarData: [
      { pillar: "Financial Access", indiaScore: 86, globalAvg: 58, topPerformerAvg: 98 },
      { pillar: "Essential Utilities", indiaScore: 80, globalAvg: 62, topPerformerAvg: 99 },
      { pillar: "Education Access", indiaScore: 68, globalAvg: 65, topPerformerAvg: 95 },
      { pillar: "Life Expectancy", indiaScore: 58, globalAvg: 68, topPerformerAvg: 94 },
      { pillar: "Social Protection", indiaScore: 60, globalAvg: 55, topPerformerAvg: 92 },
    ],
  },
  {
    id: "governance",
    title: "Governance",
    shortTitle: "Governance",
    iconName: "Building2",
    overallScore: 58.6,
    globalRank: 78,
    totalCountries: 180,
    trendBadge: { text: "Stable", type: "neutral" },
    indicatorCount: 10,
    shortDescription: "Rule of law, corruption perception, government effectiveness & democracy index.",
    overview: "India's governance landscape balances strong democratic institutional foundations, rapid public service digitization, and ongoing reforms in administrative transparency.",
    gradient: "from-amber-500 to-orange-600",
    accentColor: "#F59E0B",
    historicalTrend: [
      { year: "2020", score: 55.2, rank: 82, globalAvg: 52.0 },
      { year: "2021", score: 56.0, rank: 80, globalAvg: 52.2 },
      { year: "2022", score: 57.1, rank: 79, globalAvg: 52.5 },
      { year: "2023", score: 57.8, rank: 78, globalAvg: 52.8 },
      { year: "2024", score: 58.2, rank: 78, globalAvg: 53.0 },
      { year: "2025", score: 58.6, rank: 78, globalAvg: 53.2 },
    ],
    indicators: [
      { id: "ind-gv-1", name: "Corruption Perceptions Index (CPI)", rank: 93, totalCountries: 180, score: 39.0, source: "Transparency Intl", year: "2025", trend: "neutral", change: "Stable", categoryId: "governance" },
      { id: "ind-gv-2", name: "Government Effectiveness Pillar", rank: 48, totalCountries: 180, score: 68.2, source: "World Bank WGI", year: "2025", trend: "up", change: "+3 ranks", categoryId: "governance" },
      { id: "ind-gv-3", name: "Rule of Law Index", rank: 79, totalCountries: 142, score: 52.0, source: "World Justice Project", year: "2025", trend: "neutral", change: "Stable", categoryId: "governance" },
      { id: "ind-gv-4", name: "Regulatory Quality Index", rank: 54, totalCountries: 180, score: 64.5, source: "World Bank WGI", year: "2025", trend: "up", change: "+2 ranks", categoryId: "governance" },
    ],
    strengths: [
      "Vibrant multi-party democratic electoral integrity",
      "High government capacity for digital service delivery",
      "Independent judicial review framework",
    ],
    areasForImprovement: [
      "Judicial backlog and enforcement delays",
      "Public sector administrative corruption perception",
      "Ease of contract enforcement and dispute resolution",
    ],
    countriesAhead: [
      { name: "Denmark", flag: "🇩🇰", rank: 1, score: 92.4 },
      { name: "Finland", flag: "🇫🇮", rank: 2, score: 91.0 },
      { name: "United Kingdom", flag: "🇬🇧", rank: 18, score: 81.2 },
      { name: "South Korea", flag: "🇰🇷", rank: 31, score: 73.5 },
    ],
    countriesBehind: [
      { name: "Thailand", flag: "🇹🇭", rank: 84, score: 56.2 },
      { name: "Philippines", flag: "🇵🇭", rank: 97, score: 51.0 },
      { name: "Turkey", flag: "🇹🇷", rank: 115, score: 44.8 },
      { name: "Nigeria", flag: "🇳🇬", rank: 145, score: 32.1 },
    ],
    aiSummary: {
      executiveSummary: "Government effectiveness and digital delivery scores show noticeable upward momentum, balancing structural delays in judicial enforcement and bureaucracy.",
      keyDriver: "Digitization of land records, tax filing, and procurement systems (GeM).",
      recommendation: "Expand judicial capacity and streamline commercial dispute courts for faster resolution.",
    },
    distributionData: [
      { range: "0 - 20", count: 24 },
      { range: "21 - 40", count: 50 },
      { range: "41 - 60", count: 62, isIndia: true },
      { range: "61 - 80", count: 32 },
      { range: "81 - 100", count: 12 },
    ],
    radarData: [
      { pillar: "Govt Effectiveness", indiaScore: 68, globalAvg: 54, topPerformerAvg: 94 },
      { pillar: "Regulatory Quality", indiaScore: 65, globalAvg: 55, topPerformerAvg: 92 },
      { pillar: "Voice & Accountability", indiaScore: 60, globalAvg: 52, topPerformerAvg: 96 },
      { pillar: "Rule of Law", indiaScore: 52, globalAvg: 53, topPerformerAvg: 90 },
      { pillar: "Integrity / CPI", indiaScore: 39, globalAvg: 45, topPerformerAvg: 90 },
    ],
  },
  {
    id: "technology",
    title: "Technology & Innovation",
    shortTitle: "Tech & AI",
    iconName: "Cpu",
    overallScore: 76.2,
    globalRank: 39,
    totalCountries: 133,
    trendBadge: { text: "+1 rank", type: "up" },
    indicatorCount: 15,
    shortDescription: "R&D expenditure, AI readiness, patent applications & global innovation rank.",
    overview: "India stands as a global technology powerhouse, driven by software export leadership, booming AI readiness, massive startup ecosystem density, and rapid patent filing growth.",
    gradient: "from-cyan-500 to-blue-600",
    accentColor: "#06B6D4",
    historicalTrend: [
      { year: "2020", score: 62.0, rank: 48, globalAvg: 48.0 },
      { year: "2021", score: 66.5, rank: 46, globalAvg: 49.1 },
      { year: "2022", score: 70.1, rank: 40, globalAvg: 50.2 },
      { year: "2023", score: 73.0, rank: 40, globalAvg: 51.0 },
      { year: "2024", score: 75.0, rank: 39, globalAvg: 51.8 },
      { year: "2025", score: 76.2, rank: 39, globalAvg: 52.5 },
    ],
    indicators: [
      { id: "ind-tc-1", name: "Global Innovation Index (GII)", rank: 39, totalCountries: 133, score: 38.3, source: "WIPO", year: "2025", trend: "up", change: "+1 rank", categoryId: "technology" },
      { id: "ind-tc-2", name: "Government AI Readiness Index", rank: 32, totalCountries: 181, score: 64.2, source: "Oxford Insights", year: "2025", trend: "up", change: "+3 ranks", categoryId: "technology" },
      { id: "ind-tc-3", name: "Global Startup Ecosystem Rank", rank: 3, totalCountries: 100, score: 85.0, source: "StartupBlink", year: "2025", trend: "neutral", change: "Top 3", categoryId: "technology" },
      { id: "ind-tc-4", name: "Domestic Patent Application Growth", rank: 6, totalCountries: 150, score: 82.1, source: "WIPO IP Statistics", year: "2025", trend: "up", change: "+4 ranks", categoryId: "technology" },
      { id: "ind-tc-5", name: "High-Tech Exports Share (% Mfg)", rank: 28, totalCountries: 140, score: 71.5, source: "World Bank", year: "2025", trend: "up", change: "+2 ranks", categoryId: "technology" },
    ],
    strengths: [
      "Top 3 global startup ecosystem by unicorn count",
      "World leader in IT services export volume",
      "Surging domestic patent filings by local universities & firms",
      "High Government AI adoption and public dataset availability",
    ],
    areasForImprovement: [
      "Gross expenditure on R&D as % of GDP (target > 1.5%)",
      "High-speed fiber broadband penetration in rural sectors",
      "Semiconductor fabrication domestic capacity",
    ],
    countriesAhead: [
      { name: "Switzerland", flag: "🇨🇭", rank: 1, score: 96.5 },
      { name: "Sweden", flag: "🇸🇪", rank: 2, score: 94.2 },
      { name: "United States", flag: "🇺🇸", rank: 3, score: 93.0 },
      { name: "China", flag: "🇨🇳", rank: 11, score: 86.4 },
    ],
    countriesBehind: [
      { name: "Russia", flag: "🇷🇺", rank: 51, score: 68.2 },
      { name: "Brazil", flag: "🇧🇷", rank: 54, score: 65.0 },
      { name: "South Africa", flag: "🇿🇦", rank: 61, score: 60.1 },
      { name: "Mexico", flag: "🇲🇽", rank: 58, score: 62.4 },
    ],
    aiSummary: {
      executiveSummary: "India's innovation rank has surged 9 places since 2020, powered by digital infrastructure, software engineering depth, and venture capital maturity.",
      keyDriver: "Rapid expansion of India Semiconductor Mission and National AI Mission.",
      recommendation: "Incentivize private sector R&D spending through tax credits and university-industry hubs.",
    },
    distributionData: [
      { range: "0 - 20", count: 20 },
      { range: "21 - 40", count: 45 },
      { range: "41 - 60", count: 38 },
      { range: "61 - 80", count: 22, isIndia: true },
      { range: "81 - 100", count: 8 },
    ],
    radarData: [
      { pillar: "Startup Momentum", indiaScore: 85, globalAvg: 50, topPerformerAvg: 95 },
      { pillar: "AI Readiness", indiaScore: 64, globalAvg: 48, topPerformerAvg: 92 },
      { pillar: "Patent Density", indiaScore: 82, globalAvg: 52, topPerformerAvg: 98 },
      { pillar: "High-Tech Trade", indiaScore: 72, globalAvg: 55, topPerformerAvg: 90 },
      { pillar: "R&D Spend %", indiaScore: 48, globalAvg: 50, topPerformerAvg: 94 },
    ],
  },
  {
    id: "education",
    title: "Education",
    shortTitle: "Education",
    iconName: "GraduationCap",
    overallScore: 65.4,
    globalRank: 52,
    totalCountries: 185,
    trendBadge: { text: "+3 ranks", type: "up" },
    indicatorCount: 11,
    shortDescription: "Literacy rates, higher ed rankings, STEM graduates & educational index.",
    overview: "India produces the world's largest annual cohort of STEM graduates, with expanding higher education institutions, NEP 2020 structural reforms, and rising global university rankings.",
    gradient: "from-emerald-500 to-teal-600",
    accentColor: "#10B981",
    historicalTrend: [
      { year: "2020", score: 57.0, rank: 61, globalAvg: 54.0 },
      { year: "2021", score: 59.2, rank: 58, globalAvg: 54.5 },
      { year: "2022", score: 61.5, rank: 55, globalAvg: 55.0 },
      { year: "2023", score: 63.0, rank: 54, globalAvg: 55.4 },
      { year: "2024", score: 64.2, rank: 53, globalAvg: 55.8 },
      { year: "2025", score: 65.4, rank: 52, globalAvg: 56.2 },
    ],
    indicators: [
      { id: "ind-ed-1", name: "Annual STEM Graduate Output Volume", rank: 1, totalCountries: 185, score: 98.0, source: "UNESCO", year: "2025", trend: "up", change: "#1 World", categoryId: "education" },
      { id: "ind-ed-2", name: "Tertiary Education Gross Enrollment", rank: 45, totalCountries: 185, score: 68.0, source: "UNESCO UIS", year: "2025", trend: "up", change: "+4 ranks", categoryId: "education" },
      { id: "ind-ed-3", name: "QS World University Rankings Presence", rank: 24, totalCountries: 120, score: 72.5, source: "QS Top Universities", year: "2025", trend: "up", change: "+5 ranks", categoryId: "education" },
      { id: "ind-ed-4", name: "Adult Literacy Rate (%)", rank: 98, totalCountries: 185, score: 77.7, source: "UNESCO / Census", year: "2025", trend: "up", change: "+2 ranks", categoryId: "education" },
    ],
    strengths: [
      "Global leader in absolute volume of engineering & STEM graduates",
      "Rising international ranking of IITs, IISc, and IIMs",
      "National Education Policy (NEP) multi-disciplinary framework",
    ],
    areasForImprovement: [
      "Public expenditure on education as % of GDP (target 6%)",
      "Pupil-to-teacher ratio in primary rural schools",
      "Vocational training certification alignment with industry",
    ],
    countriesAhead: [
      { name: "United States", flag: "🇺🇸", rank: 1, score: 92.8 },
      { name: "United Kingdom", flag: "🇬🇧", rank: 2, score: 90.4 },
      { name: "Germany", flag: "🇩🇪", rank: 4, score: 88.0 },
      { name: "China", flag: "🇨🇳", rank: 15, score: 80.2 },
    ],
    countriesBehind: [
      { name: "Brazil", flag: "🇧🇷", rank: 58, score: 62.0 },
      { name: "Mexico", flag: "🇲🇽", rank: 64, score: 58.5 },
      { name: "Egypt", flag: "🇪🇬", rank: 72, score: 53.0 },
      { name: "Bangladesh", flag: "🇧🇩", rank: 95, score: 45.0 },
    ],
    aiSummary: {
      executiveSummary: "STEM talent creation remains India's primary global competitive advantage, while broader literacy expansion and school infrastructure upgrades continue under NEP 2020.",
      keyDriver: "Expansion of technical institutes, digital classrooms (DIKSHA), and PM-SHRI school upgrades.",
      recommendation: "Focus on primary school foundational literacy and teacher-student ratio optimization.",
    },
    distributionData: [
      { range: "0 - 20", count: 22 },
      { range: "21 - 40", count: 48 },
      { range: "41 - 60", count: 55 },
      { range: "61 - 80", count: 45, isIndia: true },
      { range: "81 - 100", count: 15 },
    ],
    radarData: [
      { pillar: "STEM Graduate Volume", indiaScore: 98, globalAvg: 50, topPerformerAvg: 98 },
      { pillar: "Higher Ed Rank", indiaScore: 72, globalAvg: 55, topPerformerAvg: 96 },
      { pillar: "Tertiary Enrollment", indiaScore: 68, globalAvg: 58, topPerformerAvg: 92 },
      { pillar: "Adult Literacy", indiaScore: 78, globalAvg: 75, topPerformerAvg: 99 },
      { pillar: "Edu Spend %", indiaScore: 48, globalAvg: 52, topPerformerAvg: 88 },
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare",
    shortTitle: "Healthcare",
    iconName: "Activity",
    overallScore: 60.2,
    globalRank: 71,
    totalCountries: 194,
    trendBadge: { text: "+2 ranks", type: "up" },
    indicatorCount: 13,
    shortDescription: "Life expectancy, healthcare coverage, WHO global health security index.",
    overview: "India's healthcare sector is undergoing rapid modernization through Ayushman Bharat universal coverage, digital health IDs (ABDM), and global leadership in pharmaceutical manufacturing.",
    gradient: "from-rose-500 to-pink-600",
    accentColor: "#F43F5E",
    historicalTrend: [
      { year: "2020", score: 52.4, rank: 79, globalAvg: 56.0 },
      { year: "2021", score: 54.0, rank: 76, globalAvg: 56.5 },
      { year: "2022", score: 56.2, rank: 74, globalAvg: 57.0 },
      { year: "2023", score: 57.8, rank: 73, globalAvg: 57.4 },
      { year: "2024", score: 59.0, rank: 72, globalAvg: 57.8 },
      { year: "2025", score: 60.2, rank: 71, globalAvg: 58.2 },
    ],
    indicators: [
      { id: "ind-hc-1", name: "Universal Health Coverage (UHC) Index", rank: 68, totalCountries: 194, score: 65.0, source: "WHO", year: "2025", trend: "up", change: "+3 ranks", categoryId: "healthcare" },
      { id: "ind-hc-2", name: "Vaccine & Pharma Manufacturing Scale", rank: 1, totalCountries: 194, score: 97.5, source: "WHO / GAVI", year: "2025", trend: "up", change: "#1 Global", categoryId: "healthcare" },
      { id: "ind-hc-3", name: "Healthy Life Expectancy (HALE)", rank: 94, totalCountries: 194, score: 61.2, source: "WHO GHO", year: "2025", trend: "up", change: "+1 rank", categoryId: "healthcare" },
      { id: "ind-hc-4", name: "Public Health Expenditure (% GDP)", rank: 110, totalCountries: 194, score: 38.0, source: "WHO", year: "2025", trend: "neutral", change: "Stable", categoryId: "healthcare" },
    ],
    strengths: [
      "Pharmacy of the world: leading affordable generic drug exporter",
      "Ayushman Bharat health insurance covering 500M+ beneficiaries",
      "Ayushman Bharat Digital Mission (ABDM) electronic health records",
    ],
    areasForImprovement: [
      "Doctor & hospital bed density per 1,000 population ratio",
      "Public sector health expenditure as % of GDP (target 2.5%)",
      "Rural primary health center staffing and diagnostics",
    ],
    countriesAhead: [
      { name: "Japan", flag: "🇯🇵", rank: 1, score: 94.8 },
      { name: "Singapore", flag: "🇸🇬", rank: 2, score: 93.5 },
      { name: "Germany", flag: "🇩🇪", rank: 8, score: 89.0 },
      { name: "China", flag: "🇨🇳", rank: 48, score: 71.0 },
    ],
    countriesBehind: [
      { name: "Indonesia", flag: "🇮🇩", rank: 76, score: 58.0 },
      { name: "Pakistan", flag: "🇵🇰", rank: 122, score: 44.5 },
      { name: "Nigeria", flag: "🇳🇬", rank: 148, score: 35.0 },
      { name: "Bangladesh", flag: "🇧🇩", rank: 88, score: 52.4 },
    ],
    aiSummary: {
      executiveSummary: "India's healthcare ecosystem blends world-class pharmaceutical capacity and scale insurance with the imperative to build out physical rural hospital bed infrastructure.",
      keyDriver: "Mass scale digital health record integration (ABDM) and wellness centers.",
      recommendation: "Elevate public healthcare budgetary allocation to 2.5% of GDP.",
    },
    distributionData: [
      { range: "0 - 20", count: 25 },
      { range: "21 - 40", count: 48 },
      { range: "41 - 60", count: 62, isIndia: true },
      { range: "61 - 80", count: 44 },
      { range: "81 - 100", count: 15 },
    ],
    radarData: [
      { pillar: "Pharma Capacity", indiaScore: 98, globalAvg: 50, topPerformerAvg: 98 },
      { pillar: "Insurance Coverage", indiaScore: 78, globalAvg: 55, topPerformerAvg: 95 },
      { pillar: "UHC Index", indiaScore: 65, globalAvg: 62, topPerformerAvg: 94 },
      { pillar: "Life Expectancy", indiaScore: 61, globalAvg: 66, topPerformerAvg: 94 },
      { pillar: "Bed Density", indiaScore: 40, globalAvg: 52, topPerformerAvg: 88 },
    ],
  },
  {
    id: "environment",
    title: "Environment",
    shortTitle: "Environment",
    iconName: "Leaf",
    overallScore: 68.0,
    globalRank: 44,
    totalCountries: 180,
    trendBadge: { text: "+5 ranks", type: "up" },
    indicatorCount: 14,
    shortDescription: "Renewable energy adoption, climate risk, air quality & forest coverage.",
    overview: "India is accelerating its green transition, ranking among global top 4 in renewable solar/wind installed capacity, while combating urban PM2.5 air quality challenges.",
    gradient: "from-green-500 to-emerald-600",
    accentColor: "#10B981",
    historicalTrend: [
      { year: "2020", score: 55.0, rank: 58, globalAvg: 52.0 },
      { year: "2021", score: 58.2, rank: 52, globalAvg: 52.5 },
      { year: "2022", score: 61.4, rank: 48, globalAvg: 53.0 },
      { year: "2023", score: 64.0, rank: 46, globalAvg: 53.4 },
      { year: "2024", score: 66.2, rank: 45, globalAvg: 53.8 },
      { year: "2025", score: 68.0, rank: 44, globalAvg: 54.2 },
    ],
    indicators: [
      { id: "ind-en-1", name: "Renewable Energy Installed Capacity (GW)", rank: 4, totalCountries: 180, score: 92.0, source: "IRENA / Our World in Data", year: "2025", trend: "up", change: "Top 4 Global", categoryId: "environment" },
      { id: "ind-en-2", name: "Climate Change Performance Index (CCPI)", rank: 7, totalCountries: 63, score: 84.5, source: "Germanwatch", year: "2025", trend: "up", change: "+1 rank", categoryId: "environment" },
      { id: "ind-en-3", name: "Forest & Tree Cover Share (%)", rank: 10, totalCountries: 180, score: 72.0, source: "ISFR / FAO", year: "2025", trend: "up", change: "Expanding", categoryId: "environment" },
      { id: "ind-en-4", name: "Urban Air Quality PM2.5 Index", rank: 112, totalCountries: 134, score: 38.0, source: "IQAir", year: "2025", trend: "neutral", change: "Needs Action", categoryId: "environment" },
    ],
    strengths: [
      "Top 4 world leader in solar and wind power generation capacity",
      "Ranked Top 10 in Global Climate Change Performance Index (CCPI)",
      "International Solar Alliance (ISA) global founding leadership",
    ],
    areasForImprovement: [
      "Northern plains urban seasonal air quality (PM2.5)",
      "Coal dependency share in total electricity grid baseline",
      "Industrial water treatment and river rejuvenation",
    ],
    countriesAhead: [
      { name: "Denmark", flag: "🇩🇰", rank: 1, score: 91.2 },
      { name: "Sweden", flag: "🇸🇪", rank: 2, score: 89.5 },
      { name: "United Kingdom", flag: "🇬🇧", rank: 6, score: 84.0 },
      { name: "Germany", flag: "🇩🇪", rank: 14, score: 78.2 },
    ],
    countriesBehind: [
      { name: "United States", flag: "🇺🇸", rank: 52, score: 65.0 },
      { name: "China", flag: "🇨🇳", rank: 51, score: 65.5 },
      { name: "Australia", flag: "🇦🇺", rank: 55, score: 63.8 },
      { name: "Russia", flag: "🇷🇺", rank: 68, score: 55.0 },
    ],
    aiSummary: {
      executiveSummary: "India's renewable energy deployment is one of the fastest in world history, achieving 180+ GW non-fossil capacity ahead of 2030 Panchamrit targets.",
      keyDriver: "National Green Hydrogen Mission and PLI incentives for solar PV modules.",
      recommendation: "Accelerate battery energy storage systems (BESS) for grid balancing.",
    },
    distributionData: [
      { range: "0 - 20", count: 20 },
      { range: "21 - 40", count: 42 },
      { range: "41 - 60", count: 58 },
      { range: "61 - 80", count: 48, isIndia: true },
      { range: "81 - 100", count: 12 },
    ],
    radarData: [
      { pillar: "Renewable Capacity", indiaScore: 92, globalAvg: 52, topPerformerAvg: 96 },
      { pillar: "Climate Action (CCPI)", indiaScore: 85, globalAvg: 50, topPerformerAvg: 88 },
      { pillar: "Tree Cover Share", indiaScore: 72, globalAvg: 60, topPerformerAvg: 94 },
      { pillar: "Energy Intensity", indiaScore: 68, globalAvg: 55, topPerformerAvg: 90 },
      { pillar: "Air Quality PM2.5", indiaScore: 38, globalAvg: 55, topPerformerAvg: 92 },
    ],
  },
  {
    id: "safety",
    title: "Safety",
    shortTitle: "Safety",
    iconName: "ShieldCheck",
    overallScore: 71.5,
    globalRank: 42,
    totalCountries: 194,
    trendBadge: { text: "+3 ranks", type: "up" },
    indicatorCount: 9,
    shortDescription: "Global peace index, cyber security readiness & public safety scores.",
    overview: "India's safety parameters showcase strong national cybersecurity infrastructure, low violent crime rates compared to population scale, and enhanced border vigilance.",
    gradient: "from-sky-500 to-blue-700",
    accentColor: "#0284C7",
    historicalTrend: [
      { year: "2020", score: 62.0, rank: 54, globalAvg: 55.0 },
      { year: "2021", score: 64.5, rank: 50, globalAvg: 55.4 },
      { year: "2022", score: 67.0, rank: 46, globalAvg: 55.8 },
      { year: "2023", score: 69.2, rank: 44, globalAvg: 56.2 },
      { year: "2024", score: 70.4, rank: 43, globalAvg: 56.6 },
      { year: "2025", score: 71.5, rank: 42, globalAvg: 57.0 },
    ],
    indicators: [
      { id: "ind-sf-1", name: "Global Cybersecurity Index (GCI)", rank: 10, totalCountries: 194, score: 93.8, source: "ITU", year: "2025", trend: "up", change: "Top 10", categoryId: "safety" },
      { id: "ind-sf-2", name: "Public Safety & Violent Crime Low Index", rank: 42, totalCountries: 163, score: 72.4, source: "IEP Global Peace Index", year: "2025", trend: "up", change: "+2 ranks", categoryId: "safety" },
      { id: "ind-sf-3", name: "Disaster Risk Mitigation & Recovery", rank: 15, totalCountries: 180, score: 82.0, source: "UN UNDRR", year: "2025", trend: "up", change: "+4 ranks", categoryId: "safety" },
    ],
    strengths: [
      "Global Tier-1 ITU Cybersecurity index classification",
      "Pioneering disaster response (NDRF) zero-casualty evacuation capabilities",
      "Low street crime rate relative to mega-city population size",
    ],
    areasForImprovement: [
      "Road safety and traffic mortality reduction",
      "Regional geopolitical boundary stability score",
      "Cyber financial fraud awareness for rural internet users",
    ],
    countriesAhead: [
      { name: "Iceland", flag: "🇮🇸", rank: 1, score: 95.2 },
      { name: "Singapore", flag: "🇸🇬", rank: 2, score: 94.0 },
      { name: "United Kingdom", flag: "🇬🇧", rank: 18, score: 84.5 },
      { name: "Estonia", flag: "🇪🇪", rank: 12, score: 88.0 },
    ],
    countriesBehind: [
      { name: "United States", flag: "🇺🇸", rank: 58, score: 66.0 },
      { name: "Brazil", flag: "🇧🇷", rank: 110, score: 48.0 },
      { name: "South Africa", flag: "🇿🇦", rank: 125, score: 42.5 },
      { name: "Mexico", flag: "🇲🇽", rank: 130, score: 40.0 },
    ],
    aiSummary: {
      executiveSummary: "India's cybersecurity defense architecture is world-class (ITU Tier-1), complemented by strong natural disaster early warning systems.",
      keyDriver: "CERT-In digital defense mechanisms and National Disaster Response Force readiness.",
      recommendation: "Focus on automated smart traffic management and highway safety infrastructure.",
    },
    distributionData: [
      { range: "0 - 20", count: 15 },
      { range: "21 - 40", count: 35 },
      { range: "41 - 60", count: 60 },
      { range: "61 - 80", count: 64, isIndia: true },
      { range: "81 - 100", count: 20 },
    ],
    radarData: [
      { pillar: "Cybersecurity", indiaScore: 94, globalAvg: 55, topPerformerAvg: 98 },
      { pillar: "Disaster Preparedness", indiaScore: 82, globalAvg: 58, topPerformerAvg: 92 },
      { pillar: "Public Order", indiaScore: 72, globalAvg: 60, topPerformerAvg: 95 },
      { pillar: "Border Defense", indiaScore: 70, globalAvg: 52, topPerformerAvg: 90 },
      { pillar: "Road Safety", indiaScore: 45, globalAvg: 58, topPerformerAvg: 92 },
    ],
  },
  {
    id: "equality",
    title: "Equality",
    shortTitle: "Equality",
    iconName: "Scale",
    overallScore: 56.4,
    globalRank: 88,
    totalCountries: 146,
    trendBadge: { text: "+4 ranks", type: "up" },
    indicatorCount: 8,
    shortDescription: "Gender parity index, income distribution & global social mobility rank.",
    overview: "India is actively advancing financial gender inclusion and parliamentary female representation (Nari Shakti Vandan Adhiniyam), working to bridge income disparities across regions.",
    gradient: "from-fuchsia-500 to-purple-600",
    accentColor: "#D946EF",
    historicalTrend: [
      { year: "2020", score: 48.0, rank: 105, globalAvg: 54.0 },
      { year: "2021", score: 50.2, rank: 98, globalAvg: 54.2 },
      { year: "2022", score: 52.5, rank: 94, globalAvg: 54.6 },
      { year: "2023", score: 54.1, rank: 91, globalAvg: 55.0 },
      { year: "2024", score: 55.3, rank: 90, globalAvg: 55.3 },
      { year: "2025", score: 56.4, rank: 88, globalAvg: 55.8 },
    ],
    indicators: [
      { id: "ind-eq-1", name: "Women Financial Account Parity Index", rank: 14, totalCountries: 146, score: 88.0, source: "World Bank Findex", year: "2025", trend: "up", change: "+6 ranks", categoryId: "equality" },
      { id: "ind-eq-2", name: "Global Gender Gap Index", rank: 125, totalCountries: 146, score: 64.3, source: "WEF", year: "2025", trend: "up", change: "+4 ranks", categoryId: "equality" },
      { id: "ind-eq-3", name: "Social Mobility Index", rank: 76, totalCountries: 82, score: 48.0, source: "WEF", year: "2025", trend: "neutral", change: "Stable", categoryId: "equality" },
    ],
    strengths: [
      "Elimination of gender gap in Jan Dhan bank account ownership",
      "Constitutional 33% reservation for women in Parliament passed",
      "Rising female enrollment ratio in STEM higher education",
    ],
    areasForImprovement: [
      "Female labor force participation rate in formal sectors",
      "Regional wealth distribution Gini coefficient",
      "Wage gap parity in corporate management roles",
    ],
    countriesAhead: [
      { name: "Iceland", flag: "🇮🇸", rank: 1, score: 91.2 },
      { name: "Finland", flag: "🇫🇮", rank: 2, score: 87.5 },
      { name: "Norway", flag: "🇳🇴", rank: 3, score: 86.8 },
      { name: "United Kingdom", flag: "🇬🇧", rank: 15, score: 79.0 },
    ],
    countriesBehind: [
      { name: "Pakistan", flag: "🇵🇰", rank: 142, score: 57.0 },
      { name: "Iran", flag: "🇮🇷", rank: 143, score: 56.5 },
      { name: "Chad", flag: "🇹🇩", rank: 144, score: 55.0 },
      { name: "Afghanistan", flag: "🇦🇫", rank: 146, score: 40.5 },
    ],
    aiSummary: {
      executiveSummary: "Financial account parity has closed the banking gender gap, while legislative quotas for female political representation set the stage for long-term parity acceleration.",
      keyDriver: "Jan Dhan Yojana and Self-Help Group (SHG) micro-finance networks.",
      recommendation: "Provide workplace childcare facilities and remote work flexibilities to boost female labor force participation.",
    },
    distributionData: [
      { range: "0 - 20", count: 12 },
      { range: "21 - 40", count: 32 },
      { range: "41 - 60", count: 58, isIndia: true },
      { range: "61 - 80", count: 34 },
      { range: "81 - 100", count: 10 },
    ],
    radarData: [
      { pillar: "Banking Parity", indiaScore: 88, globalAvg: 60, topPerformerAvg: 98 },
      { pillar: "Political Empowerment", indiaScore: 68, globalAvg: 45, topPerformerAvg: 90 },
      { pillar: "STEM Edu Parity", indiaScore: 75, globalAvg: 62, topPerformerAvg: 95 },
      { pillar: "Labor Force Share", indiaScore: 42, globalAvg: 60, topPerformerAvg: 88 },
      { pillar: "Social Mobility", indiaScore: 48, globalAvg: 55, topPerformerAvg: 85 },
    ],
  },
  {
    id: "digital-government",
    title: "Digital Government",
    shortTitle: "Digital Govt",
    iconName: "Laptop",
    overallScore: 82.5,
    globalRank: 18,
    totalCountries: 193,
    trendBadge: { text: "+6 ranks", type: "up" },
    indicatorCount: 10,
    shortDescription: "UN E-Government index, digital public infrastructure & online services.",
    overview: "India is a globally acknowledged benchmark in Digital Public Infrastructure (DPI), led by Aadhaar identity, UPI payments, DigiLocker, and seamless online public service delivery.",
    gradient: "from-indigo-500 to-blue-600",
    accentColor: "#6366F1",
    historicalTrend: [
      { year: "2020", score: 66.0, rank: 32, globalAvg: 50.0 },
      { year: "2021", score: 70.5, rank: 28, globalAvg: 51.0 },
      { year: "2022", score: 74.8, rank: 24, globalAvg: 52.0 },
      { year: "2023", score: 78.0, rank: 21, globalAvg: 52.8 },
      { year: "2024", score: 80.5, rank: 19, globalAvg: 53.5 },
      { year: "2025", score: 82.5, rank: 18, globalAvg: 54.0 },
    ],
    indicators: [
      { id: "ind-dg-1", name: "UN E-Participation Index (EPI)", rank: 9, totalCountries: 193, score: 92.4, source: "United Nations", year: "2025", trend: "up", change: "Top 10", categoryId: "digital-government" },
      { id: "ind-dg-2", name: "Digital Public Infrastructure Scale (DPI)", rank: 1, totalCountries: 193, score: 99.0, source: "UN / World Bank", year: "2025", trend: "up", change: "#1 World Benchmark", categoryId: "digital-government" },
      { id: "ind-dg-3", name: "UN E-Government Development Index (EGDI)", rank: 35, totalCountries: 193, score: 78.5, source: "United Nations", year: "2025", trend: "up", change: "+5 ranks", categoryId: "digital-government" },
      { id: "ind-dg-4", name: "Online Service Index (OSI)", rank: 14, totalCountries: 193, score: 89.2, source: "UN DESA", year: "2025", trend: "up", change: "+3 ranks", categoryId: "digital-government" },
    ],
    strengths: [
      "Global pioneer in India Stack (Aadhaar, UPI, CoWIN, DigiLocker, ONDC)",
      "#1 world benchmark in digital real-time payment volume (46% of global total)",
      "High UN E-Participation Index (EPI) score for citizen feedback (MyGov)",
    ],
    areasForImprovement: [
      "Last-mile rural digital literacy for elderly demographics",
      "Personal data protection compliance infrastructure",
      "Cyber resilience against nation-state DDoS targeted attacks",
    ],
    countriesAhead: [
      { name: "Denmark", flag: "🇩🇰", rank: 1, score: 97.5 },
      { name: "Estonia", flag: "🇪🇪", rank: 2, score: 96.8 },
      { name: "South Korea", flag: "🇰🇷", rank: 3, score: 95.0 },
      { name: "Singapore", flag: "🇸🇬", rank: 4, score: 94.2 },
    ],
    countriesBehind: [
      { name: "United Kingdom", flag: "🇬🇧", rank: 20, score: 81.0 },
      { name: "United States", flag: "🇺🇸", rank: 22, score: 80.2 },
      { name: "Germany", flag: "🇩🇪", rank: 25, score: 78.0 },
      { name: "China", flag: "🇨🇳", rank: 30, score: 75.4 },
    ],
    aiSummary: {
      executiveSummary: "India's Digital Public Infrastructure (DPI) model is now being exported globally to developing nations under the G20 Framework as a prime case study of inclusive governance.",
      keyDriver: "Open API interoperability across identity, payments, and document verification.",
      recommendation: "Expand ONDC and Account Aggregator ecosystem to digitize MSME credit flows.",
    },
    distributionData: [
      { range: "0 - 20", count: 28 },
      { range: "21 - 40", count: 42 },
      { range: "41 - 60", count: 50 },
      { range: "61 - 80", count: 55 },
      { range: "81 - 100", count: 18, isIndia: true },
    ],
    radarData: [
      { pillar: "DPI & Identity Stack", indiaScore: 99, globalAvg: 45, topPerformerAvg: 99 },
      { pillar: "Real-time Payments", indiaScore: 98, globalAvg: 40, topPerformerAvg: 98 },
      { pillar: "E-Participation", indiaScore: 92, globalAvg: 50, topPerformerAvg: 96 },
      { pillar: "Online Services", indiaScore: 89, globalAvg: 55, topPerformerAvg: 95 },
      { pillar: "Cyber Data Security", indiaScore: 72, globalAvg: 52, topPerformerAvg: 92 },
    ],
  },
];
