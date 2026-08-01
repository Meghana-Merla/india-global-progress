export type ReportType = "executive" | "comparison" | "category" | "annual";

export interface ReportTemplate {
  id: ReportType;
  title: string;
  badge: string;
  description: string;
  iconName: "executive" | "comparison" | "category" | "annual";
  popular?: boolean;
}

export const REPORT_TEMPLATES: ReportTemplate[] = [
  {
    id: "executive",
    title: "Executive Intelligence Report",
    badge: "Full Overview",
    description: "Complete overview of India's global standing across economy, technology, governance, and development.",
    iconName: "executive",
    popular: true,
  },
  {
    id: "comparison",
    title: "Country Comparison Report",
    badge: "Bilateral Benchmark",
    description: "Detailed comparison between India and another benchmark country (e.g., USA, China, UK, Germany).",
    iconName: "comparison",
  },
  {
    id: "category",
    title: "Category Analysis Report",
    badge: "10 Strategic Pillars",
    description: "Deep analysis of Economy, Technology, Healthcare, Education, Safety, Governance, and other pillars.",
    iconName: "category",
  },
  {
    id: "annual",
    title: "Annual India Report",
    badge: "Yearly Synthesis",
    description: "Yearly performance summary with multi-year trajectory analysis and actionable AI recommendations.",
    iconName: "annual",
  },
];

export interface IndicatorRow {
  id: string;
  name: string;
  category: string;
  globalRank: string;
  score: string;
  change: string;
  status: "improved" | "declined" | "stable";
  source: string;
}

export interface CategoryRow {
  id: string;
  name: string;
  score: number; // 0-100
  globalRank: string;
  topPeer: string;
  gap: string;
  status: "leading" | "growing" | "lagging";
}

export interface HistoricalTrendPoint {
  year: string;
  rank: number;
  score: number;
  event: string;
}

export interface ComparisonRow {
  indicator: string;
  category: string;
  indiaVal: string;
  indiaRank: string;
  peerVal: string;
  peerRank: string;
  leader: "India" | "Peer" | "Tie";
}

export interface GeneratedReport {
  id: string;
  type: ReportType;
  title: string;
  subtitle: string;
  generatedAt: string;
  year: string;
  benchmarkCountry: string;
  executiveSummary: string;
  keyIndicators: IndicatorRow[];
  categoryPerformance: CategoryRow[];
  historicalTrends: HistoricalTrendPoint[];
  strengths: string[];
  areasForImprovement: string[];
  aiRecommendations: string[];
  dataSources: string[];
  comparisonData?: {
    benchmarkCountry: string;
    indiaLeadCount: number;
    peerLeadCount: number;
    rows: ComparisonRow[];
  };
}

export function generateReportData(
  type: ReportType,
  year: string = "2025",
  benchmarkCountry: string = "USA"
): GeneratedReport {
  const is2025 = year === "2025";
  const formattedDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (type === "comparison") {
    return {
      id: `report-comparison-${year}`,
      type: "comparison",
      title: `Bilateral Country Comparison: India vs ${benchmarkCountry}`,
      subtitle: `Comparative benchmark intelligence & strategic gap analysis for ${year}`,
      generatedAt: formattedDate,
      year,
      benchmarkCountry,
      executiveSummary: `This Bilateral Comparison Report evaluates India against ${benchmarkCountry} across key macroeconomic, technology, and social indicators for ${year}. India leads significantly in Digital Public Infrastructure scale (13B+ monthly UPI transactions), Renewable Energy installation growth rate, and STEM graduate volume. However, ${benchmarkCountry} retains structural advantages in per-capita GDP ($81,000+ vs $2,850), Healthcare infrastructure expenditure per capita, and patent grant volume. Strategic convergence is fastest in IT services exports and AI application deployment.`,
      keyIndicators: [
        { id: "gdp", name: "Nominal GDP", category: "Economy", globalRank: "#4 ($4.30T)", score: "7.2% Growth", change: "+1 Rank", status: "improved", source: "IMF / World Bank" },
        { id: "innovation", name: "Global Innovation Index", category: "Technology", globalRank: "#36 (41.2)", score: "41.2 / 100", change: "+3 Ranks", status: "improved", source: "WIPO" },
        { id: "ai", name: "AI Readiness Index", category: "Technology", globalRank: "#32 (65.8)", score: "65.8 / 100", change: "+4 Ranks", status: "improved", source: "Oxford Insights" },
        { id: "cyber", name: "Global Cybersecurity Index", category: "Safety", globalRank: "#7 (99.1)", score: "99.1 / 100", change: "+1 Rank", status: "improved", source: "ITU" },
        { id: "hdi", name: "Human Development Index", category: "Society", globalRank: "#128 (0.665)", score: "0.665 / 1.0", change: "+2 Ranks", status: "improved", source: "UNDP" },
      ],
      categoryPerformance: [
        { id: "tech", name: "Technology", score: 88, globalRank: "#9", topPeer: benchmarkCountry, gap: "-8 pts", status: "growing" },
        { id: "digital", name: "Digital Government", score: 91, globalRank: "#5", topPeer: "Estonia", gap: "-4 pts", status: "leading" },
        { id: "econ", name: "Economy", score: 82, globalRank: "#4", topPeer: benchmarkCountry, gap: "-14 pts", status: "leading" },
        { id: "education", name: "Education & Research", score: 70, globalRank: "#66", topPeer: benchmarkCountry, gap: "-22 pts", status: "growing" },
        { id: "healthcare", name: "Healthcare", score: 68, globalRank: "#84", topPeer: benchmarkCountry, gap: "-26 pts", status: "lagging" },
      ],
      historicalTrends: [
        { year: "2020", rank: 6, score: 2.66, event: "COVID-19 Pandemic Response" },
        { year: "2021", rank: 6, score: 3.15, event: "Digital India & UPI Scale" },
        { year: "2022", rank: 5, score: 3.39, event: "Surpassed UK in Nominal GDP" },
        { year: "2023", rank: 5, score: 3.73, event: "Chandrayaan-3 & IndiaAI Mission" },
        { year: "2024", rank: 5, score: 3.95, event: "5 Semiconductor Fabs Construction" },
        { year: "2025", rank: 4, score: 4.30, event: "World's 4th Largest Economy" },
      ],
      strengths: [
        `UPI payment architecture processes over 13B+ monthly transactions, outperforming ${benchmarkCountry}'s instant payment volume.`,
        "Surged to #4 globally in nominal GDP ($4.30 Trillion), demonstrating G20-leading real economic growth (~7.2%).",
        "Top 10 global ranking in Digital Government Stack (#5) and Cybersecurity Resilience (#7).",
        "World's largest annual pool of STEM and engineering graduates (2.5M+ annually).",
      ],
      areasForImprovement: [
        `Per capita income deficit ($2,850 in India vs $81,000+ in ${benchmarkCountry}).`,
        "Public health allocation constraints (1.3% of GDP vs 4.5%+ global benchmark target).",
        "Higher education research citation impact and university global rankings tier.",
        "Environmental Sustainability index deficit (#108 Global).",
      ],
      aiRecommendations: [
        "Elevate public healthcare spending to 2.5% of GDP by 2028 to reduce out-of-pocket medical expenditure.",
        "Expand deep-tech R&D tax incentives and private sector R&D match funding.",
        "Accelerate semiconductor fabrication facility commissioning to capture resilient supply chains.",
        "Deploy national grid decarbonization and green hydrogen export incentives.",
      ],
      dataSources: [
        "IMF World Economic Outlook (2025)",
        "World Intellectual Property Organization (WIPO GII 2025)",
        "Oxford Insights Government AI Readiness Index (2025)",
        "International Telecommunication Union (ITU Cybersecurity Index)",
        "UNDP Human Development Report (2025)",
      ],
      comparisonData: {
        benchmarkCountry,
        indiaLeadCount: 4,
        peerLeadCount: 6,
        rows: [
          { indicator: "GDP Growth Rate", category: "Economy", indiaVal: "7.2%", indiaRank: "#1 (G20)", peerVal: "2.1%", peerRank: "#12", leader: "India" },
          { indicator: "Digital Payments Volume", category: "Technology", indiaVal: "13.1B / mo", indiaRank: "#1", peerVal: "1.8B / mo", peerRank: "#6", leader: "India" },
          { indicator: "Nominal GDP Total", category: "Economy", indiaVal: "$4.30 Trillion", indiaRank: "#4", peerVal: "$28.7 Trillion", peerRank: "#1", leader: "Peer" },
          { indicator: "Per Capita GDP", category: "Economy", indiaVal: "$2,850", indiaRank: "#138", peerVal: "$81,600", peerRank: "#7", leader: "Peer" },
          { indicator: "Cybersecurity Index", category: "Safety", indiaVal: "99.1 / 100", indiaRank: "#7", peerVal: "98.4 / 100", peerRank: "#9", leader: "India" },
          { indicator: "Global Innovation Index", category: "Technology", indiaVal: "41.2 / 100", indiaRank: "#36", peerVal: "61.8 / 100", peerRank: "#3", leader: "Peer" },
        ],
      },
    };
  }

  if (type === "category") {
    return {
      id: `report-category-${year}`,
      type: "category",
      title: "10-Pillar Strategic Category Analysis Report",
      subtitle: `Comprehensive deep-dive across all 10 international evaluation domains for ${year}`,
      generatedAt: formattedDate,
      year,
      benchmarkCountry: "Global Average",
      executiveSummary: `The 10-Pillar Category Analysis Report offers a structured evaluation of India's performance across Economy, Technology, Digital Government, Governance, Education, Healthcare, Environment, Safety, Equality, and Society for ${year}. India displays elite global leadership in Digital Government (#5) and Technology (#9), strong momentum in Economy (#4) and Safety (#78), while structural growth opportunities remain in Environment (#108) and Healthcare (#84).`,
      keyIndicators: [
        { id: "digi-gov", name: "Digital Government Stack", category: "Digital Government", globalRank: "#5 (91.2)", score: "91.2 / 100", change: "+3 Ranks", status: "improved", source: "UN E-Government Survey" },
        { id: "gdp", name: "Nominal GDP", category: "Economy", globalRank: "#4 ($4.30T)", score: "82.0 / 100", change: "+1 Rank", status: "improved", source: "IMF" },
        { id: "tech", name: "Technology & IT Exports", category: "Technology", globalRank: "#9 (88.0)", score: "88.0 / 100", change: "+3 Ranks", status: "improved", source: "WIPO / WTO" },
        { id: "cyber", name: "Cybersecurity Index", category: "Safety", globalRank: "#7 (99.1)", score: "66.0 / 100", change: "+1 Rank", status: "improved", source: "ITU" },
        { id: "edu", name: "Higher Education & STEM", category: "Education", globalRank: "#66 (70.1)", score: "70.1 / 100", change: "+5 Ranks", status: "improved", source: "UNESCO" },
      ],
      categoryPerformance: [
        { id: "digital-gov", name: "Digital Government", score: 91.2, globalRank: "#5", topPeer: "Estonia", gap: "-4.2 pts", status: "leading" },
        { id: "technology", name: "Technology", score: 88.0, globalRank: "#9", topPeer: "South Korea", gap: "-6.5 pts", status: "leading" },
        { id: "economy", name: "Economy", score: 82.0, globalRank: "#4", topPeer: "USA", gap: "-12.0 pts", status: "leading" },
        { id: "education", name: "Education", score: 70.1, globalRank: "#66", topPeer: "Singapore", gap: "-18.5 pts", status: "growing" },
        { id: "healthcare", name: "Healthcare", score: 67.8, globalRank: "#84", topPeer: "Japan", gap: "-24.0 pts", status: "growing" },
        { id: "safety", name: "Safety & Security", score: 66.0, globalRank: "#78", topPeer: "Iceland", gap: "-22.1 pts", status: "growing" },
        { id: "society", name: "Society & Wellbeing", score: 65.5, globalRank: "#80", topPeer: "Finland", gap: "-26.2 pts", status: "growing" },
        { id: "governance", name: "Governance", score: 64.2, globalRank: "#62", topPeer: "Denmark", gap: "-28.0 pts", status: "growing" },
        { id: "equality", name: "Equality & Inclusion", score: 59.5, globalRank: "#102", topPeer: "Norway", gap: "-31.0 pts", status: "lagging" },
        { id: "environment", name: "Environment & Climate", score: 52.4, globalRank: "#108", topPeer: "Sweden", gap: "-36.5 pts", status: "lagging" },
      ],
      historicalTrends: [
        { year: "2020", rank: 8, score: 65.0, event: "Baseline 10-Pillar Assessment" },
        { year: "2021", rank: 7, score: 68.5, event: "Digital India Acceleration" },
        { year: "2022", rank: 7, score: 71.2, event: "Surpassed UK Economy" },
        { year: "2023", rank: 5, score: 74.5, event: "Space & AI Infrastructure Launch" },
        { year: "2024", rank: 5, score: 77.8, event: "Semiconductor Fabs Groundbreaking" },
        { year: "2025", rank: 4, score: 82.0, event: "#4 Global GDP & #5 Digital Govt" },
      ],
      strengths: [
        "Digital Government Stack (#5) outperforming most OECD economies.",
        "Technology exports and digital payment processing speed & volume.",
        "Strong macroeconomic resilience with 7.2% real GDP growth trajectory.",
        "Cybersecurity readiness index (#7) with top-tier international score.",
      ],
      areasForImprovement: [
        "Environment pillar score (52.4 / 100) reflecting urban air quality challenges.",
        "Healthcare per capita spending allocation requiring expansion to 2.5% GDP.",
        "Female labor force participation rate and gender gap index (#102).",
      ],
      aiRecommendations: [
        "Establish regional green technology centers to boost Environment pillar rankings.",
        "Scale public health coverage through Universal Health Insurance extension.",
        "Increase tertiary education vocational training funding by 15% annually.",
      ],
      dataSources: [
        "World Bank Open Data (2025)",
        "UN E-Government Knowledgebase (2025)",
        "WIPO Global Innovation Index (2025)",
        "Oxford Insights AI Index (2025)",
        "WHO Global Health Expenditure Database",
      ],
    };
  }

  if (type === "annual") {
    return {
      id: `report-annual-${year}`,
      type: "annual",
      title: `Annual India State of Progress Report (${year})`,
      subtitle: `Yearly synthesis, indicator movements, and national strategic scorecard`,
      generatedAt: formattedDate,
      year,
      benchmarkCountry: "Prior Year (2024)",
      executiveSummary: `The Annual India State of Progress Report (${year}) provides an authoritative evaluation of India's national journey over the past 12 months. Highlights include entry into the top 4 global economies by nominal GDP ($4.30 Trillion), elevation to #36 in the Global Innovation Index, and #32 in Government AI Readiness. Key driver of success remains India's scaleable Digital Public Infrastructure (DPI) coupled with proactive semiconductor supply chain investments.`,
      keyIndicators: [
        { id: "gdp", name: "Nominal GDP", category: "Economy", globalRank: "#4 ($4.30T)", score: "$4.30 Trillion", change: "+1 Rank (#5 → #4)", status: "improved", source: "IMF" },
        { id: "gii", name: "Global Innovation Index", category: "Technology", globalRank: "#36 (41.2)", score: "41.2 / 100", change: "+3 Ranks (#39 → #36)", status: "improved", source: "WIPO" },
        { id: "ai", name: "AI Readiness Index", category: "Technology", globalRank: "#32 (65.8)", score: "65.8 / 100", change: "+4 Ranks (#36 → #32)", status: "improved", source: "Oxford Insights" },
        { id: "cyber", name: "Cybersecurity Index", category: "Safety", globalRank: "#7 (99.1)", score: "99.1 / 100", change: "+1 Rank (#8 → #7)", status: "improved", source: "ITU" },
        { id: "hdi", name: "Human Development Index", category: "Society", globalRank: "#128 (0.665)", score: "0.665 / 1.0", change: "+2 Ranks (#130 → #128)", status: "improved", source: "UNDP" },
        { id: "happy", name: "Happiness Index", category: "Society", globalRank: "#118 (4.32)", score: "4.32 / 10", change: "+8 Ranks (#126 → #118)", status: "improved", source: "UN SDSN" },
      ],
      categoryPerformance: [
        { id: "digital", name: "Digital Government", score: 91.2, globalRank: "#5", topPeer: "Estonia", gap: "-4.2 pts", status: "leading" },
        { id: "tech", name: "Technology", score: 88.0, globalRank: "#9", topPeer: "South Korea", gap: "-6.5 pts", status: "leading" },
        { id: "econ", name: "Economy", score: 82.0, globalRank: "#4", topPeer: "USA", gap: "-12.0 pts", status: "leading" },
        { id: "safety", name: "Safety", score: 66.0, globalRank: "#78", topPeer: "Iceland", gap: "-22.1 pts", status: "growing" },
        { id: "edu", name: "Education", score: 70.1, globalRank: "#66", topPeer: "Singapore", gap: "-18.5 pts", status: "growing" },
      ],
      historicalTrends: [
        { year: "2020", rank: 48, score: 35.6, event: "COVID-19 Package & CoWIN Deployment" },
        { year: "2021", rank: 46, score: 36.4, event: "4B Monthly UPI Transactions Milestone" },
        { year: "2022", rank: 40, score: 38.0, event: "GDP Surpassed UK (#5 Global)" },
        { year: "2023", rank: 40, score: 38.3, event: "Chandrayaan-3 Moon Landing & IndiaAI" },
        { year: "2024", rank: 39, score: 39.5, event: "5 Commercial Semiconductor Fabs" },
        { year: "2025", rank: 36, score: 41.2, event: "#4 World Economy ($4.30T GDP)" },
      ],
      strengths: [
        `Achieved world's 4th largest GDP ($4.30T) in ${year}, outpacing major developed economies in growth rate.`,
        "Climbed to #32 in Global AI Readiness Index behind national compute mission investment.",
        "Over 13B+ monthly UPI payments processed across 400M+ active users.",
        "Strong cybersecurity score (99.1/100) protecting critical infrastructure.",
      ],
      areasForImprovement: [
        "Per-capita income development needing sustained high growth over 2 decades.",
        "Air quality index in major metropolitan areas.",
        "Higher education university research citations and patent grants per capita.",
      ],
      aiRecommendations: [
        "Prioritize deep-tech R&D subsidies and commercialization incubators.",
        "Scale renewable energy storage and solar microgrids to meet 500GW target.",
        "Expand digital literacy and technical vocational programs across tier-2 and tier-3 cities.",
      ],
      dataSources: [
        "IndiaLens AI Data Engine (2025 Edition)",
        "IMF World Economic Outlook (2025)",
        "WIPO Global Innovation Index (2025)",
        "World Bank LPI & Ease of Doing Business Reports",
      ],
    };
  }

  // Default: Executive Intelligence Report
  return {
    id: `report-executive-${year}`,
    type: "executive",
    title: `Executive Intelligence Report (${year} Edition)`,
    subtitle: "Complete strategic overview of India's global performance and international ranking trajectory",
    generatedAt: formattedDate,
    year,
    benchmarkCountry: "Global Benchmarks",
    executiveSummary: `The Executive Intelligence Report (${year}) presents a comprehensive assessment of India's international standings across economics, technology, public governance, and social indicators. India has achieved significant momentum over the past five years, ascending to the #4 largest economy globally ($4.30 Trillion GDP), while securing Top 10 worldwide rankings in Digital Public Infrastructure (#5) and Cybersecurity (#7). Strategic focus is recommended to improve health expenditure per capita and environmental sustainability metrics.`,
    keyIndicators: [
      { id: "gdp", name: "Nominal GDP Rank", category: "Economy", globalRank: "#4 ($4.30T)", score: "$4.30 Trillion", change: "+2 Ranks", status: "improved", source: "IMF & World Bank" },
      { id: "gii", name: "Global Innovation Index", category: "Technology", globalRank: "#36 (41.2)", score: "41.2 / 100", change: "+12 Ranks", status: "improved", source: "WIPO" },
      { id: "ai", name: "AI Readiness Index", category: "Technology", globalRank: "#32 (65.8)", score: "65.8 / 100", change: "+28 Ranks", status: "improved", source: "Oxford Insights" },
      { id: "cyber", name: "Global Cybersecurity Index", category: "Safety", globalRank: "#7 (99.1)", score: "99.1 / 100", change: "+3 Ranks", status: "improved", source: "ITU" },
      { id: "hdi", name: "Human Development Index", category: "Society", globalRank: "#128 (0.665)", score: "0.665 / 1.0", change: "+4 Ranks", status: "improved", source: "UNDP" },
      { id: "happy", name: "Happiness Index", category: "Society", globalRank: "#118 (4.32)", score: "4.32 / 10", change: "+26 Ranks", status: "improved", source: "UN SDSN" },
    ],
    categoryPerformance: [
      { id: "digital-gov", name: "Digital Government", score: 91.2, globalRank: "#5", topPeer: "Estonia", gap: "-4.2 pts", status: "leading" },
      { id: "tech", name: "Technology", score: 88.0, globalRank: "#9", topPeer: "South Korea", gap: "-6.5 pts", status: "leading" },
      { id: "econ", name: "Economy", score: 82.0, globalRank: "#4", topPeer: "USA", gap: "-12.0 pts", status: "leading" },
      { id: "edu", name: "Education", score: 70.1, globalRank: "#66", topPeer: "Singapore", gap: "-18.5 pts", status: "growing" },
      { id: "health", name: "Healthcare", score: 67.8, globalRank: "#84", topPeer: "Japan", gap: "-24.0 pts", status: "growing" },
      { id: "safety", name: "Safety", score: 66.0, globalRank: "#78", topPeer: "Iceland", gap: "-22.1 pts", status: "growing" },
    ],
    historicalTrends: [
      { year: "2020", rank: 6, score: 2.66, event: "COVID-19 & Atmanirbhar Bharat Package" },
      { year: "2021", rank: 6, score: 3.15, event: "Digital India & Telecom 5G Roadmap" },
      { year: "2022", rank: 5, score: 3.39, event: "Surpassed UK Economy (#5 Global)" },
      { year: "2023", rank: 5, score: 3.73, event: "Chandrayaan-3 Landing & IndiaAI" },
      { year: "2024", rank: 5, score: 3.95, event: "Global Innovation Index Surges to #39" },
      { year: "2025", rank: 4, score: 4.30, event: "#4 Global GDP & #5 Digital Govt" },
    ],
    strengths: [
      "Ascent to world's 4th largest economy ($4.30T nominal GDP) with robust 7.2% real GDP growth.",
      "Global leadership in Digital Public Infrastructure (DPI), processing 13B+ monthly UPI transactions.",
      "Top 10 international cybersecurity ranking (#7) with a near-perfect score (99.1/100).",
      "World-leading STEM talent pool and expanding semiconductor fabrication ecosystem.",
    ],
    areasForImprovement: [
      "Human Development Index rank (#128) constrained by per-capita spending allocations.",
      "Public healthcare expenditure allocation (1.3% of GDP vs 2.5% target).",
      "Environmental Sustainability index score (52.4 / 100).",
    ],
    aiRecommendations: [
      "Increase public health expenditure target to 2.5% of GDP by 2028.",
      "Expand tax incentives for private sector R&D and semiconductor fab development.",
      "Strengthen female labor force participation through targeted vocational and childcare programs.",
      "Accelerate green hydrogen and solar energy storage infrastructure deployment.",
    ],
    dataSources: [
      "IMF World Economic Outlook Database (2025)",
      "World Bank Open Data & Logistics Performance Index",
      "WIPO Global Innovation Index (2025)",
      "Oxford Insights Government AI Readiness Index (2025)",
      "UN E-Government & UNDP Human Development Reports",
    ],
  };
}
