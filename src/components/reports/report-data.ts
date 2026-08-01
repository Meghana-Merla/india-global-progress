import { Year, getDashboardData } from "@/data/mock/dashboard";
import { getAIData } from "@/data/mock/ai";
import { compareMockByYear } from "@/data/mock/compare";

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

function getCategoryForKPI(id: string): string {
  switch (id) {
    case "gdp-rank":
      return "Economy";
    case "hdi-rank":
      return "Society";
    case "innovation-rank":
      return "Technology";
    case "happiness-rank":
      return "Society";
    case "press-freedom":
      return "Governance";
    case "global-peace":
      return "Safety";
    case "ai-readiness":
      return "Technology";
    case "gender-gap":
      return "Equality";
    default:
      return "Strategic Domain";
  }
}

function getTopPeerForCategory(id: string): string {
  const peers: Record<string, string> = {
    economy: "USA",
    society: "Finland",
    governance: "Denmark",
    technology: "South Korea",
    education: "Singapore",
    healthcare: "Japan",
    environment: "Sweden",
    safety: "Iceland",
    equality: "Norway",
    "digital-government": "Estonia",
  };
  return peers[id] || "Global Peer";
}

export function generateReportData(
  type: ReportType,
  yearStr: string = "2025",
  benchmarkCountry: string = "USA"
): GeneratedReport {
  const year: Year = (["2022", "2023", "2024", "2025"].includes(yearStr) ? yearStr : "2025") as Year;
  
  const dashboardData = getDashboardData(year);
  const aiData = getAIData(year);

  const formattedDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // Dynamic KPI list from dashboard data for the selected year
  const keyIndicators: IndicatorRow[] = dashboardData.kpis.map((kpi) => ({
    id: kpi.id,
    name: kpi.title,
    category: getCategoryForKPI(kpi.id),
    globalRank: kpi.rank,
    score: kpi.score,
    change: kpi.trend,
    status: kpi.direction === "up" ? "improved" : kpi.direction === "down" ? "declined" : "stable",
    source: kpi.source,
  }));

  // Dynamic Category list from dashboard data for the selected year
  const categoryPerformance: CategoryRow[] = dashboardData.categories.map((cat) => {
    const topPeer = getTopPeerForCategory(cat.id);
    const gapVal = (100 - cat.overallScore).toFixed(1);
    return {
      id: cat.id,
      name: cat.name,
      score: cat.overallScore,
      globalRank: cat.globalRank,
      topPeer,
      gap: `-${gapVal} pts`,
      status: cat.overallScore >= 75 ? "leading" : cat.overallScore >= 60 ? "growing" : "lagging",
    };
  });

  // Dynamic historical trajectory up to selected year
  const allTrajectoryPoints: HistoricalTrendPoint[] = [
    { year: "2020", rank: 7, score: 32.6, event: "COVID-19 Response & CoWIN Rollout" },
    { year: "2021", rank: 7, score: 34.0, event: "DPI Scale & 4G Telecom Expansion" },
    { year: "2022", rank: 7, score: 35.1, event: "#7 Global GDP ($3.15T) & GII #46 Climb" },
    { year: "2023", rank: 5, score: 36.7, event: "#5 Global GDP ($3.39T) & Chandrayaan-3 Landing" },
    { year: "2024", rank: 5, score: 37.5, event: "IndiaAI Mission ($1.2B) & Semiconductor Fabs Groundbreaking" },
    { year: "2025", rank: 5, score: 38.3, event: "#5 Global GDP ($3.75T) & AI Readiness #32 Surge" },
  ];

  const historicalTrends = allTrajectoryPoints.filter(
    (pt) => parseInt(pt.year) <= parseInt(year)
  );

  // Year-specific executive summary, strengths, areas for improvement, AI recommendations
  const execCard = aiData.insightCards.find((c) => c.id === "exec-summary");
  const strengthsCard = aiData.insightCards.find((c) => c.id === "key-strengths");
  const concernsCard = aiData.insightCards.find((c) => c.id === "areas-of-concern");
  const policyCard = aiData.insightCards.find((c) => c.id === "policy-recommendations");

  const executiveSummary = execCard
    ? `${execCard.content}`
    : `${dashboardData.aiSummary.title}: ${dashboardData.aiSummary.description}`;

  const strengths = strengthsCard
    ? strengthsCard.keyPoints
    : dashboardData.highlights.map((h) => `${h.title}: ${h.description}`);

  const areasForImprovement = concernsCard
    ? concernsCard.keyPoints
    : [
        `Human Development Index rank (${keyIndicators.find((k) => k.id === "hdi-rank")?.globalRank || "#134"})`,
        `Press Freedom Index rank (${keyIndicators.find((k) => k.id === "press-freedom")?.globalRank || "#159"})`,
        `Environmental air quality metrics in metro corridors`,
      ];

  const aiRecommendations = policyCard
    ? policyCard.keyPoints
    : [
        `Increase public health spending allocation target to 2.5% of GDP`,
        `Expand deep-tech R&D tax incentives and semiconductor fab investment`,
        `Incentivize female workforce participation in STEM and technology sectors`,
      ];

  const dataSources = [
    `IMF World Economic Outlook Database (${year})`,
    `World Bank Open Data (${year})`,
    `WIPO Global Innovation Index (${year})`,
    `Oxford Insights Government AI Readiness Index (${year})`,
    `UNDP Human Development Report (${year})`,
  ];

  let title = `Executive Intelligence Report (${year} Edition)`;
  let subtitle = `Complete strategic overview of India's global performance and international ranking trajectory for ${year}`;
  let reportBenchmark = "Global Benchmarks";

  if (type === "annual") {
    title = `IndiaLens AI Annual Report ${year}`;
    subtitle = `Yearly synthesis, indicator movements, and national strategic scorecard for ${year}`;
    reportBenchmark = `Prior Year (${parseInt(year) - 1})`;
  } else if (type === "comparison") {
    title = `Bilateral Country Comparison: India vs ${benchmarkCountry} (${year})`;
    subtitle = `Comparative benchmark intelligence & strategic gap analysis for ${year}`;
    reportBenchmark = benchmarkCountry;
  } else if (type === "category") {
    title = `10-Pillar Strategic Category Analysis Report (${year})`;
    subtitle = `Comprehensive deep-dive across all 10 international evaluation domains for ${year}`;
    reportBenchmark = "Global Average";
  }

  // Bilateral comparison data if comparison type is requested
  let comparisonData: GeneratedReport["comparisonData"] = undefined;
  if (type === "comparison") {
    const yearCompareMap = compareMockByYear[year];
    const indData = yearCompareMap?.IND;
    const peerCode =
      benchmarkCountry === "United Kingdom"
        ? "GBR"
        : benchmarkCountry === "Germany"
        ? "DEU"
        : benchmarkCountry === "Japan"
        ? "JPN"
        : benchmarkCountry === "Brazil"
        ? "BRA"
        : benchmarkCountry === "China"
        ? "CHN"
        : "USA";
    const peerData = yearCompareMap?.[peerCode];

    if (indData && peerData) {
      comparisonData = {
        benchmarkCountry,
        indiaLeadCount: 3,
        peerLeadCount: 3,
        rows: [
          {
            indicator: "Nominal GDP",
            category: "Economy",
            indiaVal: String(indData.metrics.gdpRank.unit || indData.metrics.gdpRank.value),
            indiaRank: String(indData.metrics.gdpRank.value),
            peerVal: String(peerData.metrics.gdpRank.unit || peerData.metrics.gdpRank.value),
            peerRank: String(peerData.metrics.gdpRank.value),
            leader: (indData.metrics.gdpRank.rankNum || 99) < (peerData.metrics.gdpRank.rankNum || 99) ? "India" : "Peer",
          },
          {
            indicator: "Global Innovation Index",
            category: "Technology",
            indiaVal: `${indData.metrics.innovation.scoreNum || 38.3} / 100`,
            indiaRank: String(indData.metrics.innovation.value),
            peerVal: `${peerData.metrics.innovation.scoreNum || 60} / 100`,
            peerRank: String(peerData.metrics.innovation.value),
            leader: (indData.metrics.innovation.rankNum || 99) < (peerData.metrics.innovation.rankNum || 99) ? "India" : "Peer",
          },
          {
            indicator: "AI Readiness Index",
            category: "Technology",
            indiaVal: `${indData.metrics.aiReadiness.scoreNum || 63.4} / 100`,
            indiaRank: String(indData.metrics.aiReadiness.value),
            peerVal: `${peerData.metrics.aiReadiness.scoreNum || 70} / 100`,
            peerRank: String(peerData.metrics.aiReadiness.value),
            leader: (indData.metrics.aiReadiness.rankNum || 99) < (peerData.metrics.aiReadiness.rankNum || 99) ? "India" : "Peer",
          },
          {
            indicator: "Human Development Index",
            category: "Society",
            indiaVal: String(indData.metrics.hdi.value),
            indiaRank: String(indData.metrics.hdi.rank || "#134"),
            peerVal: String(peerData.metrics.hdi.value),
            peerRank: String(peerData.metrics.hdi.rank || "#20"),
            leader: (indData.metrics.hdi.scoreNum || 0) > (peerData.metrics.hdi.scoreNum || 0) ? "India" : "Peer",
          },
        ],
      };
    }
  }

  return {
    id: `report-${type}-${year}`,
    type,
    title,
    subtitle,
    generatedAt: formattedDate,
    year,
    benchmarkCountry: reportBenchmark,
    executiveSummary,
    keyIndicators,
    categoryPerformance,
    historicalTrends,
    strengths,
    areasForImprovement,
    aiRecommendations,
    dataSources,
    comparisonData,
  };
}
