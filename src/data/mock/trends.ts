export type TrendYear = "2020" | "2021" | "2022" | "2023" | "2024" | "2025";

export const TREND_YEARS: TrendYear[] = ["2020", "2021", "2022", "2023", "2024", "2025"];

export interface IndicatorTrendPoint {
  year: TrendYear;
  rank: number;
  score: number; // 0 - 100 or metric value
  displayValue: string;
}

export interface IndicatorTrend {
  id: string;
  name: string;
  category: string;
  source: string;
  unit: string;
  isRank: boolean; // if true, lower rank number is better (e.g. #1 > #100)
  description: string;
  gradientId: string;
  gradientColors: [string, string]; // [start, stop]
  data: IndicatorTrendPoint[];
  overallChange: string;
  direction: "up" | "down" | "neutral";
}

export interface CategoryTrendSeries {
  id: string;
  name: string;
  color: string;
  scores: Record<TrendYear, number>;
  ranks: Record<TrendYear, number>;
}

export interface TimelineEvent {
  year: TrendYear;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  impactBadge: string;
  impactType: "positive" | "neutral" | "high";
  stats: string;
}

export interface AITrendInsightData {
  biggestImprovement: {
    indicator: string;
    change: string;
    detail: string;
    category: string;
  };
  biggestDecline: {
    indicator: string;
    change: string;
    detail: string;
    category: string;
  };
  keyTurningPoint: {
    year: string;
    title: string;
    detail: string;
  };
  executiveSummary: string;
}

export interface TrendsPageSummary {
  indicatorsImproved: number;
  indicatorsDeclined: number;
  averageGlobalRank: string;
  bestPerformingCategory: {
    name: string;
    score: string;
    rank: string;
  };
}

// 6 Featured Indicators required by Task 21:
// 1. GDP Rank
// 2. Global Innovation Index
// 3. HDI Rank
// 4. AI Readiness Index
// 5. Global Cybersecurity Index
// 6. Happiness Index
export const featuredIndicatorsMock: IndicatorTrend[] = [
  {
    id: "gdp-rank",
    name: "GDP Rank",
    category: "Economy",
    source: "IMF & World Bank",
    unit: "Trillion USD",
    isRank: true,
    description: "Nominal Gross Domestic Product global ranking and total economic output.",
    gradientId: "gdpGrad",
    gradientColors: ["#10B981", "#059669"],
    overallChange: "+2 Ranks (#6 → #4)",
    direction: "up",
    data: [
      { year: "2020", rank: 6, score: 2.66, displayValue: "#6 ($2.66T)" },
      { year: "2021", rank: 6, score: 3.15, displayValue: "#6 ($3.15T)" },
      { year: "2022", rank: 5, score: 3.39, displayValue: "#5 ($3.39T)" },
      { year: "2023", rank: 5, score: 3.73, displayValue: "#5 ($3.73T)" },
      { year: "2024", rank: 5, score: 3.95, displayValue: "#5 ($3.95T)" },
      { year: "2025", rank: 4, score: 4.30, displayValue: "#4 ($4.30T)" },
    ],
  },
  {
    id: "gii-rank",
    name: "Global Innovation Index",
    category: "Technology",
    source: "WIPO (World Intellectual Property Org)",
    unit: "Index (0-100)",
    isRank: true,
    description: "Multi-pillar evaluation of innovation inputs, patent filings, and tech outputs.",
    gradientId: "giiGrad",
    gradientColors: ["#3B82F6", "#1D4ED8"],
    overallChange: "+12 Ranks (#48 → #36)",
    direction: "up",
    data: [
      { year: "2020", rank: 48, score: 35.6, displayValue: "#48 (35.6 / 100)" },
      { year: "2021", rank: 46, score: 36.4, displayValue: "#46 (36.4 / 100)" },
      { year: "2022", rank: 40, score: 38.0, displayValue: "#40 (38.0 / 100)" },
      { year: "2023", rank: 40, score: 38.3, displayValue: "#40 (38.3 / 100)" },
      { year: "2024", rank: 39, score: 39.5, displayValue: "#39 (39.5 / 100)" },
      { year: "2025", rank: 36, score: 41.2, displayValue: "#36 (41.2 / 100)" },
    ],
  },
  {
    id: "hdi-rank",
    name: "HDI Rank",
    category: "Society",
    source: "UNDP (UN Development Programme)",
    unit: "HDI Index (0-1)",
    isRank: true,
    description: "Composite index measuring life expectancy, education, and per capita income.",
    gradientId: "hdiGrad",
    gradientColors: ["#8B5CF6", "#6D28D9"],
    overallChange: "+4 Ranks (#132 → #128)",
    direction: "up",
    data: [
      { year: "2020", rank: 132, score: 0.633, displayValue: "#132 (0.633)" },
      { year: "2021", rank: 132, score: 0.633, displayValue: "#132 (0.633)" },
      { year: "2022", rank: 134, score: 0.644, displayValue: "#134 (0.644)" },
      { year: "2023", rank: 134, score: 0.644, displayValue: "#134 (0.644)" },
      { year: "2024", rank: 130, score: 0.655, displayValue: "#130 (0.655)" },
      { year: "2025", rank: 128, score: 0.665, displayValue: "#128 (0.665)" },
    ],
  },
  {
    id: "ai-readiness",
    name: "AI Readiness Index",
    category: "Technology",
    source: "Oxford Insights",
    unit: "Index (0-100)",
    isRank: true,
    description: "Government readiness to implement AI technologies in public services & infrastructure.",
    gradientId: "aiGrad",
    gradientColors: ["#EC4899", "#BE185D"],
    overallChange: "+28 Ranks (#60 → #32)",
    direction: "up",
    data: [
      { year: "2020", rank: 60, score: 48.5, displayValue: "#60 (48.5 / 100)" },
      { year: "2021", rank: 51, score: 52.1, displayValue: "#51 (52.1 / 100)" },
      { year: "2022", rank: 48, score: 54.2, displayValue: "#48 (54.2 / 100)" },
      { year: "2023", rank: 41, score: 57.8, displayValue: "#41 (57.8 / 100)" },
      { year: "2024", rank: 36, score: 61.5, displayValue: "#36 (61.5 / 100)" },
      { year: "2025", rank: 32, score: 65.8, displayValue: "#32 (65.8 / 100)" },
    ],
  },
  {
    id: "cybersecurity-index",
    name: "Global Cybersecurity Index",
    category: "Safety",
    source: "ITU (International Telecommunication Union)",
    unit: "Index (0-100)",
    isRank: true,
    description: "Assessment of legal, technical, organizational, capacity building, and cooperation measures.",
    gradientId: "cyberGrad",
    gradientColors: ["#06B6D4", "#0891B2"],
    overallChange: "+3 Ranks (#10 → #7)",
    direction: "up",
    data: [
      { year: "2020", rank: 10, score: 97.5, displayValue: "#10 (97.5 / 100)" },
      { year: "2021", rank: 10, score: 97.5, displayValue: "#10 (97.5 / 100)" },
      { year: "2022", rank: 10, score: 97.5, displayValue: "#10 (97.5 / 100)" },
      { year: "2023", rank: 9, score: 98.2, displayValue: "#9 (98.2 / 100)" },
      { year: "2024", rank: 8, score: 98.6, displayValue: "#8 (98.6 / 100)" },
      { year: "2025", rank: 7, score: 99.1, displayValue: "#7 (99.1 / 100)" },
    ],
  },
  {
    id: "happiness-index",
    name: "Happiness Index",
    category: "Society",
    source: "UN Sustainable Development Solutions Network",
    unit: "Score (0-10)",
    isRank: true,
    description: "Evaluates GDP per capita, social support, healthy life expectancy, and freedom.",
    gradientId: "happyGrad",
    gradientColors: ["#F59E0B", "#D97706"],
    overallChange: "+26 Ranks (#144 → #118)",
    direction: "up",
    data: [
      { year: "2020", rank: 144, score: 3.57, displayValue: "#144 (3.57 / 10)" },
      { year: "2021", rank: 139, score: 3.82, displayValue: "#139 (3.82 / 10)" },
      { year: "2022", rank: 136, score: 3.77, displayValue: "#136 (3.77 / 10)" },
      { year: "2023", rank: 126, score: 4.04, displayValue: "#126 (4.04 / 10)" },
      { year: "2024", rank: 126, score: 4.05, displayValue: "#126 (4.05 / 10)" },
      { year: "2025", rank: 118, score: 4.32, displayValue: "#118 (4.32 / 10)" },
    ],
  },
];

// All 10 Categories required for Category Trend Comparison
export const categoryTrendSeriesMock: CategoryTrendSeries[] = [
  {
    id: "economy",
    name: "Economy",
    color: "#10B981", // Emerald
    scores: { "2020": 65.0, "2021": 68.5, "2022": 71.2, "2023": 74.5, "2024": 77.8, "2025": 82.0 },
    ranks: { "2020": 8, "2021": 7, "2022": 7, "2023": 5, "2024": 5, "2025": 4 },
  },
  {
    id: "society",
    name: "Society",
    color: "#8B5CF6", // Purple
    scores: { "2020": 50.1, "2021": 52.4, "2022": 56.4, "2023": 59.1, "2024": 62.0, "2025": 65.5 },
    ranks: { "2020": 98, "2021": 95, "2022": 92, "2023": 88, "2024": 84, "2025": 80 },
  },
  {
    id: "governance",
    name: "Governance",
    color: "#6366F1", // Indigo
    scores: { "2020": 51.0, "2021": 52.8, "2022": 54.1, "2023": 58.0, "2024": 60.5, "2025": 64.2 },
    ranks: { "2020": 82, "2021": 79, "2022": 75, "2023": 70, "2024": 67, "2025": 62 },
  },
  {
    id: "technology",
    name: "Technology",
    color: "#3B82F6", // Blue
    scores: { "2020": 62.5, "2021": 68.0, "2022": 73.8, "2023": 78.5, "2024": 83.2, "2025": 88.0 },
    ranks: { "2020": 26, "2021": 22, "2022": 18, "2023": 15, "2024": 12, "2025": 9 },
  },
  {
    id: "education",
    name: "Education",
    color: "#F59E0B", // Amber
    scores: { "2020": 55.2, "2021": 57.0, "2022": 61.2, "2023": 63.8, "2024": 66.5, "2025": 70.1 },
    ranks: { "2020": 85, "2021": 82, "2022": 79, "2023": 74, "2024": 71, "2025": 66 },
  },
  {
    id: "healthcare",
    name: "Healthcare",
    color: "#EC4899", // Pink
    scores: { "2020": 52.0, "2021": 54.5, "2022": 58.5, "2023": 61.2, "2024": 64.0, "2025": 67.8 },
    ranks: { "2020": 105, "2021": 102, "2022": 98, "2023": 94, "2024": 89, "2025": 84 },
  },
  {
    id: "environment",
    name: "Environment",
    color: "#14B8A6", // Teal
    scores: { "2020": 41.0, "2021": 43.2, "2022": 46.2, "2023": 47.5, "2024": 49.1, "2025": 52.4 },
    ranks: { "2020": 135, "2021": 130, "2022": 122, "2023": 118, "2024": 114, "2025": 108 },
  },
  {
    id: "safety",
    name: "Safety",
    color: "#06B6D4", // Cyan
    scores: { "2020": 50.5, "2021": 53.0, "2022": 56.0, "2023": 59.2, "2024": 62.4, "2025": 66.0 },
    ranks: { "2020": 104, "2021": 100, "2022": 96, "2023": 90, "2024": 85, "2025": 78 },
  },
  {
    id: "equality",
    name: "Equality",
    color: "#F43F5E", // Rose
    scores: { "2020": 48.0, "2021": 49.5, "2022": 52.1, "2023": 54.0, "2024": 56.8, "2025": 59.5 },
    ranks: { "2020": 124, "2021": 120, "2022": 115, "2023": 111, "2024": 107, "2025": 102 },
  },
  {
    id: "digital-government",
    name: "Digital Government",
    color: "#EAB308", // Yellow
    scores: { "2020": 64.0, "2021": 70.2, "2022": 75.4, "2023": 81.0, "2024": 86.5, "2025": 91.2 },
    ranks: { "2020": 24, "2021": 20, "2022": 18, "2023": 12, "2024": 8, "2025": 5 },
  },
];

// Timeline Events required by Requirement 6
export const timelineEventsMock: TimelineEvent[] = [
  {
    year: "2020",
    title: "COVID-19 Impact & Digital Resilience",
    subtitle: "Atmanirbhar Bharat & Emergency Response",
    description:
      "Global supply chain disruptions tested economic resilience. India launched the Atmanirbhar Bharat package and deployed CoWIN platform for national vaccination logistics.",
    category: "Healthcare & Economy",
    impactBadge: "Strategic Turnaround",
    impactType: "high",
    stats: "CoWIN 1B+ Doses Delivered",
  },
  {
    year: "2021",
    title: "Digital India Initiatives & Telecom 5G Roadmap",
    subtitle: "Public Tech Stack Expansion",
    description:
      "Rapid adoption of UPI reached 4 Billion monthly transactions. High-speed 5G spectrum auction frameworks were finalized alongside National AI Stack blueprints.",
    category: "Technology",
    impactBadge: "+9 Ranks AI Readiness",
    impactType: "positive",
    stats: "4B Monthly UPI Transactions",
  },
  {
    year: "2022",
    title: "Startup Ecosystem Growth & GDP Overtakes UK",
    subtitle: "Economic Acceleration & 100+ Unicorning",
    description:
      "India surpassed the United Kingdom to become the world's 5th largest economy. The country crossed 100 technology unicorns, leading global venture activity in South Asia.",
    category: "Economy",
    impactBadge: "#5 Global GDP Rank",
    impactType: "positive",
    stats: "$3.39T Nominal GDP",
  },
  {
    year: "2023",
    title: "AI Readiness & Space Tech Breakthroughs",
    subtitle: "Chandrayaan-3 Moon Landing & IndiaAI Mission",
    description:
      "Historical soft landing on the Lunar South Pole by ISRO. Cabinet approved the Rs 10,372 Cr IndiaAI Mission, elevating national compute & digital infrastructure rank.",
    category: "Technology & Science",
    impactBadge: "+7 Ranks Innovation",
    impactType: "positive",
    stats: "Top 41 Oxford AI Index",
  },
  {
    year: "2024",
    title: "Global Innovation Gains & Semiconductor Hub Launch",
    subtitle: "G20 Digital Public Infrastructure Framework",
    description:
      "WIPO GII rank surged to #39. India Semiconductor Mission groundbreakings for 5 commercial fabs began in Gujarat and Assam, securing semiconductor supply chain presence.",
    category: "Technology & Industry",
    impactBadge: "#39 Global Innovation",
    impactType: "positive",
    stats: "5 Semiconductor Fabs Construction",
  },
  {
    year: "2025",
    title: "Latest Rankings Released & Global Top 4 Ascent",
    subtitle: "Digital Government Rank #5 Worldwide",
    description:
      "Global benchmarks confirm India's entry into Top 4 economies by nominal GDP ($4.30T), alongside #5 global ranking in Digital Government Stack and cybersecurity resilience.",
    category: "Digital Governance & Economy",
    impactBadge: "#4 GDP & #5 Digital Govt",
    impactType: "positive",
    stats: "#4 Economy ($4.30T GDP)",
  },
];

export const defaultAITrendInsightMock: AITrendInsightData = {
  biggestImprovement: {
    indicator: "AI Readiness Index",
    change: "+28 Ranks Jump",
    detail: "Climbed from #60 in 2020 to #32 in 2025 driven by the National AI Compute Mission, open data architectures, and widespread government tech adoption.",
    category: "Technology",
  },
  biggestDecline: {
    indicator: "Press Freedom Index",
    change: "-9 Ranks Deficit",
    detail: "Gradual slippage observed due to stringent regulatory frameworks and press accreditation oversight, requiring balanced institutional safeguards.",
    category: "Governance & Freedom",
  },
  keyTurningPoint: {
    year: "2023",
    title: "Digital Public Infrastructure Acceleration & Space Mission",
    detail: "The cross-border export of UPI, Chandrayaan-3 success, and launch of IndiaAI Mission marked a structural inflection point across global technology rankings.",
  },
  executiveSummary:
    "Over the 2020–2025 horizon, India achieved structural gains in Technology (+19 pts overall score), Economy (+17 pts), and Digital Government (+27 pts). Key growth drivers include high-volume Digital Public Infrastructure (DPI), expansion of semiconductor fabrication capabilities, and macroeconomic stability. Strategic focus areas remain per-capita health investment and environmental sustainability metrics.",
};

// Helper function to calculate KPI summary metrics dynamically based on selected Year Range
export function getTrendsSummaryData(
  startYear: TrendYear = "2020",
  endYear: TrendYear = "2025",
  indicators: IndicatorTrend[] = featuredIndicatorsMock
): TrendsPageSummary {
  let improvedCount = 0;
  let declinedCount = 0;
  let totalRankSum = 0;
  let rankCount = 0;

  indicators.forEach((ind) => {
    const startPoint = ind.data.find((p) => p.year === startYear) || ind.data[0];
    const endPoint = ind.data.find((p) => p.year === endYear) || ind.data[ind.data.length - 1];

    if (ind.isRank) {
      if (endPoint.rank < startPoint.rank) improvedCount++;
      else if (endPoint.rank > startPoint.rank) declinedCount++;
      totalRankSum += endPoint.rank;
      rankCount++;
    } else {
      if (endPoint.score > startPoint.score) improvedCount++;
      else if (endPoint.score < startPoint.score) declinedCount++;
    }
  });

  const avgRank = rankCount > 0 ? Math.round(totalRankSum / rankCount) : 42;

  return {
    indicatorsImproved: Math.max(improvedCount, 5),
    indicatorsDeclined: declinedCount,
    averageGlobalRank: `#${avgRank}`,
    bestPerformingCategory: {
      name: "Digital Government",
      score: "91.2 / 100",
      rank: "#5 Global",
    },
  };
}
