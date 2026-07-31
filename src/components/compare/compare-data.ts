export interface SummaryMetricValue {
  label: string;
  value: string | number;
  rank?: string;
  rankNum?: number; // lower number is better rank for rank metrics
  scoreNum?: number; // higher is better for index scores
  unit?: string;
  lowerIsBetter?: boolean; // default false (higher score is better, unless lowerIsBetter is true like rank #1)
}

export interface CountryMetrics {
  gdpRank: SummaryMetricValue;
  hdi: SummaryMetricValue;
  innovation: SummaryMetricValue;
  happiness: SummaryMetricValue;
  aiReadiness: SummaryMetricValue;
  pressFreedom: SummaryMetricValue;
  globalPeace: SummaryMetricValue;
  internetPenetration: SummaryMetricValue;
}

export interface CategoryDetail {
  name: string;
  score: number; // out of 100
  globalRank: string;
  rankNum: number;
}

export interface CountryData {
  id: string;
  name: string;
  flag: string;
  code: string;
  region: string;
  metrics: CountryMetrics;
  categories: Record<string, CategoryDetail>;
}

export const countriesData: Record<string, CountryData> = {
  IND: {
    id: "IND",
    name: "India",
    flag: "🇮🇳",
    code: "IND",
    region: "South Asia",
    metrics: {
      gdpRank: { label: "GDP Rank", value: "#5", rankNum: 5, lowerIsBetter: true, unit: "$3.75T" },
      hdi: { label: "HDI Score", value: "0.644", scoreNum: 0.644, rank: "#134", lowerIsBetter: false },
      innovation: { label: "Innovation Rank", value: "#39", rankNum: 39, scoreNum: 38.3, lowerIsBetter: true },
      happiness: { label: "Happiness Rank", value: "#126", rankNum: 126, scoreNum: 4.05, lowerIsBetter: true },
      aiReadiness: { label: "AI Readiness", value: "#32", rankNum: 32, scoreNum: 63.4, lowerIsBetter: true },
      pressFreedom: { label: "Press Freedom", value: "#159", rankNum: 159, scoreNum: 31.3, lowerIsBetter: true },
      globalPeace: { label: "Global Peace", value: "#116", rankNum: 116, scoreNum: 2.31, lowerIsBetter: true },
      internetPenetration: { label: "Internet Penetration", value: "52%", scoreNum: 52, lowerIsBetter: false },
    },
    categories: {
      economy: { name: "Economy", score: 78.4, globalRank: "#5", rankNum: 5 },
      society: { name: "Society", score: 62.1, globalRank: "#84", rankNum: 84 },
      governance: { name: "Governance", score: 58.9, globalRank: "#68", rankNum: 68 },
      technology: { name: "Technology", score: 82.3, globalRank: "#12", rankNum: 12 },
      education: { name: "Education", score: 66.7, globalRank: "#72", rankNum: 72 },
      healthcare: { name: "Healthcare", score: 64.2, globalRank: "#92", rankNum: 92 },
      environment: { name: "Environment", score: 52.8, globalRank: "#110", rankNum: 110 },
      safety: { name: "Safety", score: 61.5, globalRank: "#88", rankNum: 88 },
      equality: { name: "Equality", score: 57.3, globalRank: "#105", rankNum: 105 },
      "digital-government": { name: "Digital Government", score: 84.9, globalRank: "#9", rankNum: 9 },
    },
  },
  USA: {
    id: "USA",
    name: "United States",
    flag: "🇺🇸",
    code: "USA",
    region: "North America",
    metrics: {
      gdpRank: { label: "GDP Rank", value: "#1", rankNum: 1, lowerIsBetter: true, unit: "$26.9T" },
      hdi: { label: "HDI Score", value: "0.927", scoreNum: 0.927, rank: "#20", lowerIsBetter: false },
      innovation: { label: "Innovation Rank", value: "#3", rankNum: 3, scoreNum: 63.5, lowerIsBetter: true },
      happiness: { label: "Happiness Rank", value: "#23", rankNum: 23, scoreNum: 6.72, lowerIsBetter: true },
      aiReadiness: { label: "AI Readiness", value: "#1", rankNum: 1, scoreNum: 88.2, lowerIsBetter: true },
      pressFreedom: { label: "Press Freedom", value: "#55", rankNum: 55, scoreNum: 66.7, lowerIsBetter: true },
      globalPeace: { label: "Global Peace", value: "#131", rankNum: 131, scoreNum: 2.45, lowerIsBetter: true },
      internetPenetration: { label: "Internet Penetration", value: "92%", scoreNum: 92, lowerIsBetter: false },
    },
    categories: {
      economy: { name: "Economy", score: 94.2, globalRank: "#1", rankNum: 1 },
      society: { name: "Society", score: 85.5, globalRank: "#22", rankNum: 22 },
      governance: { name: "Governance", score: 81.3, globalRank: "#28", rankNum: 28 },
      technology: { name: "Technology", score: 96.1, globalRank: "#1", rankNum: 1 },
      education: { name: "Education", score: 88.9, globalRank: "#14", rankNum: 14 },
      healthcare: { name: "Healthcare", score: 84.6, globalRank: "#30", rankNum: 30 },
      environment: { name: "Environment", score: 68.4, globalRank: "#45", rankNum: 45 },
      safety: { name: "Safety", score: 72.1, globalRank: "#65", rankNum: 65 },
      equality: { name: "Equality", score: 66.8, globalRank: "#78", rankNum: 78 },
      "digital-government": { name: "Digital Government", score: 87.2, globalRank: "#5", rankNum: 5 },
    },
  },
  CHN: {
    id: "CHN",
    name: "China",
    flag: "🇨🇳",
    code: "CHN",
    region: "East Asia",
    metrics: {
      gdpRank: { label: "GDP Rank", value: "#2", rankNum: 2, lowerIsBetter: true, unit: "$17.7T" },
      hdi: { label: "HDI Score", value: "0.788", scoreNum: 0.788, rank: "#75", lowerIsBetter: false },
      innovation: { label: "Innovation Rank", value: "#11", rankNum: 11, scoreNum: 55.3, lowerIsBetter: true },
      happiness: { label: "Happiness Rank", value: "#60", rankNum: 60, scoreNum: 5.97, lowerIsBetter: true },
      aiReadiness: { label: "AI Readiness", value: "#2", rankNum: 2, scoreNum: 85.1, lowerIsBetter: true },
      pressFreedom: { label: "Press Freedom", value: "#172", rankNum: 172, scoreNum: 21.4, lowerIsBetter: true },
      globalPeace: { label: "Global Peace", value: "#80", rankNum: 80, scoreNum: 2.01, lowerIsBetter: true },
      internetPenetration: { label: "Internet Penetration", value: "76%", scoreNum: 76, lowerIsBetter: false },
    },
    categories: {
      economy: { name: "Economy", score: 91.5, globalRank: "#2", rankNum: 2 },
      society: { name: "Society", score: 74.3, globalRank: "#55", rankNum: 55 },
      governance: { name: "Governance", score: 60.1, globalRank: "#64", rankNum: 64 },
      technology: { name: "Technology", score: 92.4, globalRank: "#2", rankNum: 2 },
      education: { name: "Education", score: 79.8, globalRank: "#35", rankNum: 35 },
      healthcare: { name: "Healthcare", score: 78.2, globalRank: "#42", rankNum: 42 },
      environment: { name: "Environment", score: 58.6, globalRank: "#85", rankNum: 85 },
      safety: { name: "Safety", score: 78.9, globalRank: "#38", rankNum: 38 },
      equality: { name: "Equality", score: 62.4, globalRank: "#90", rankNum: 90 },
      "digital-government": { name: "Digital Government", score: 86.1, globalRank: "#7", rankNum: 7 },
    },
  },
  DEU: {
    id: "DEU",
    name: "Germany",
    flag: "🇩🇪",
    code: "DEU",
    region: "Europe",
    metrics: {
      gdpRank: { label: "GDP Rank", value: "#3", rankNum: 3, lowerIsBetter: true, unit: "$4.45T" },
      hdi: { label: "HDI Score", value: "0.950", scoreNum: 0.950, rank: "#7", lowerIsBetter: false },
      innovation: { label: "Innovation Rank", value: "#8", rankNum: 8, scoreNum: 58.8, lowerIsBetter: true },
      happiness: { label: "Happiness Rank", value: "#24", rankNum: 24, scoreNum: 6.71, lowerIsBetter: true },
      aiReadiness: { label: "AI Readiness", value: "#8", rankNum: 8, scoreNum: 77.4, lowerIsBetter: true },
      pressFreedom: { label: "Press Freedom", value: "#10", rankNum: 10, scoreNum: 83.8, lowerIsBetter: true },
      globalPeace: { label: "Global Peace", value: "#15", rankNum: 15, scoreNum: 1.45, lowerIsBetter: true },
      internetPenetration: { label: "Internet Penetration", value: "93%", scoreNum: 93, lowerIsBetter: false },
    },
    categories: {
      economy: { name: "Economy", score: 88.9, globalRank: "#3", rankNum: 3 },
      society: { name: "Society", score: 91.2, globalRank: "#8", rankNum: 8 },
      governance: { name: "Governance", score: 92.4, globalRank: "#6", rankNum: 6 },
      technology: { name: "Technology", score: 88.7, globalRank: "#6", rankNum: 6 },
      education: { name: "Education", score: 90.5, globalRank: "#9", rankNum: 9 },
      healthcare: { name: "Healthcare", score: 93.1, globalRank: "#5", rankNum: 5 },
      environment: { name: "Environment", score: 84.6, globalRank: "#12", rankNum: 12 },
      safety: { name: "Safety", score: 89.2, globalRank: "#14", rankNum: 14 },
      equality: { name: "Equality", score: 84.1, globalRank: "#18", rankNum: 18 },
      "digital-government": { name: "Digital Government", score: 82.5, globalRank: "#18", rankNum: 18 },
    },
  },
  JPN: {
    id: "JPN",
    name: "Japan",
    flag: "🇯🇵",
    code: "JPN",
    region: "East Asia",
    metrics: {
      gdpRank: { label: "GDP Rank", value: "#4", rankNum: 4, lowerIsBetter: true, unit: "$4.21T" },
      hdi: { label: "HDI Score", value: "0.920", scoreNum: 0.920, rank: "#24", lowerIsBetter: false },
      innovation: { label: "Innovation Rank", value: "#13", rankNum: 13, scoreNum: 54.6, lowerIsBetter: true },
      happiness: { label: "Happiness Rank", value: "#51", rankNum: 51, scoreNum: 6.12, lowerIsBetter: true },
      aiReadiness: { label: "AI Readiness", value: "#12", rankNum: 12, scoreNum: 74.8, lowerIsBetter: true },
      pressFreedom: { label: "Press Freedom", value: "#70", rankNum: 70, scoreNum: 62.1, lowerIsBetter: true },
      globalPeace: { label: "Global Peace", value: "#9", rankNum: 9, scoreNum: 1.33, lowerIsBetter: true },
      internetPenetration: { label: "Internet Penetration", value: "93%", scoreNum: 93, lowerIsBetter: false },
    },
    categories: {
      economy: { name: "Economy", score: 87.2, globalRank: "#4", rankNum: 4 },
      society: { name: "Society", score: 89.4, globalRank: "#14", rankNum: 14 },
      governance: { name: "Governance", score: 88.5, globalRank: "#15", rankNum: 15 },
      technology: { name: "Technology", score: 89.6, globalRank: "#5", rankNum: 5 },
      education: { name: "Education", score: 91.8, globalRank: "#6", rankNum: 6 },
      healthcare: { name: "Healthcare", score: 95.4, globalRank: "#2", rankNum: 2 },
      environment: { name: "Environment", score: 79.2, globalRank: "#25", rankNum: 25 },
      safety: { name: "Safety", score: 94.8, globalRank: "#3", rankNum: 3 },
      equality: { name: "Equality", score: 76.5, globalRank: "#48", rankNum: 48 },
      "digital-government": { name: "Digital Government", score: 83.4, globalRank: "#15", rankNum: 15 },
    },
  },
  GBR: {
    id: "GBR",
    name: "United Kingdom",
    flag: "🇬🇧",
    code: "GBR",
    region: "Europe",
    metrics: {
      gdpRank: { label: "GDP Rank", value: "#6", rankNum: 6, lowerIsBetter: true, unit: "$3.33T" },
      hdi: { label: "HDI Score", value: "0.940", scoreNum: 0.940, rank: "#15", lowerIsBetter: false },
      innovation: { label: "Innovation Rank", value: "#4", rankNum: 4, scoreNum: 62.4, lowerIsBetter: true },
      happiness: { label: "Happiness Rank", value: "#20", rankNum: 20, scoreNum: 6.79, lowerIsBetter: true },
      aiReadiness: { label: "AI Readiness", value: "#3", rankNum: 3, scoreNum: 82.5, lowerIsBetter: true },
      pressFreedom: { label: "Press Freedom", value: "#23", rankNum: 23, scoreNum: 78.5, lowerIsBetter: true },
      globalPeace: { label: "Global Peace", value: "#34", rankNum: 34, scoreNum: 1.69, lowerIsBetter: true },
      internetPenetration: { label: "Internet Penetration", value: "97%", scoreNum: 97, lowerIsBetter: false },
    },
    categories: {
      economy: { name: "Economy", score: 85.1, globalRank: "#6", rankNum: 6 },
      society: { name: "Society", score: 88.3, globalRank: "#16", rankNum: 16 },
      governance: { name: "Governance", score: 89.1, globalRank: "#12", rankNum: 12 },
      technology: { name: "Technology", score: 91.2, globalRank: "#4", rankNum: 4 },
      education: { name: "Education", score: 92.4, globalRank: "#4", rankNum: 4 },
      healthcare: { name: "Healthcare", score: 88.2, globalRank: "#20", rankNum: 20 },
      environment: { name: "Environment", score: 82.1, globalRank: "#16", rankNum: 16 },
      safety: { name: "Safety", score: 83.5, globalRank: "#28", rankNum: 28 },
      equality: { name: "Equality", score: 79.4, globalRank: "#32", rankNum: 32 },
      "digital-government": { name: "Digital Government", score: 89.3, globalRank: "#3", rankNum: 3 },
    },
  },
  SGP: {
    id: "SGP",
    name: "Singapore",
    flag: "🇸🇬",
    code: "SGP",
    region: "Southeast Asia",
    metrics: {
      gdpRank: { label: "GDP Rank", value: "#33", rankNum: 33, lowerIsBetter: true, unit: "$501B" },
      hdi: { label: "HDI Score", value: "0.949", scoreNum: 0.949, rank: "#9", lowerIsBetter: false },
      innovation: { label: "Innovation Rank", value: "#5", rankNum: 5, scoreNum: 61.5, lowerIsBetter: true },
      happiness: { label: "Happiness Rank", value: "#30", rankNum: 30, scoreNum: 6.52, lowerIsBetter: true },
      aiReadiness: { label: "AI Readiness", value: "#4", rankNum: 4, scoreNum: 81.9, lowerIsBetter: true },
      pressFreedom: { label: "Press Freedom", value: "#129", rankNum: 129, scoreNum: 47.9, lowerIsBetter: true },
      globalPeace: { label: "Global Peace", value: "#6", rankNum: 6, scoreNum: 1.30, lowerIsBetter: true },
      internetPenetration: { label: "Internet Penetration", value: "96%", scoreNum: 96, lowerIsBetter: false },
    },
    categories: {
      economy: { name: "Economy", score: 92.8, globalRank: "#8", rankNum: 8 },
      society: { name: "Society", score: 91.5, globalRank: "#7", rankNum: 7 },
      governance: { name: "Governance", score: 96.2, globalRank: "#1", rankNum: 1 },
      technology: { name: "Technology", score: 94.5, globalRank: "#3", rankNum: 3 },
      education: { name: "Education", score: 93.1, globalRank: "#3", rankNum: 3 },
      healthcare: { name: "Healthcare", score: 94.8, globalRank: "#3", rankNum: 3 },
      environment: { name: "Environment", score: 76.5, globalRank: "#32", rankNum: 32 },
      safety: { name: "Safety", score: 96.5, globalRank: "#1", rankNum: 1 },
      equality: { name: "Equality", score: 77.2, globalRank: "#42", rankNum: 42 },
      "digital-government": { name: "Digital Government", score: 95.1, globalRank: "#1", rankNum: 1 },
    },
  },
  BRA: {
    id: "BRA",
    name: "Brazil",
    flag: "🇧🇷",
    code: "BRA",
    region: "Latin America",
    metrics: {
      gdpRank: { label: "GDP Rank", value: "#9", rankNum: 9, lowerIsBetter: true, unit: "$2.17T" },
      hdi: { label: "HDI Score", value: "0.760", scoreNum: 0.760, rank: "#89", lowerIsBetter: false },
      innovation: { label: "Innovation Rank", value: "#49", rankNum: 49, scoreNum: 33.6, lowerIsBetter: true },
      happiness: { label: "Happiness Rank", value: "#44", rankNum: 44, scoreNum: 6.27, lowerIsBetter: true },
      aiReadiness: { label: "AI Readiness", value: "#38", rankNum: 38, scoreNum: 58.2, lowerIsBetter: true },
      pressFreedom: { label: "Press Freedom", value: "#82", rankNum: 82, scoreNum: 58.7, lowerIsBetter: true },
      globalPeace: { label: "Global Peace", value: "#132", rankNum: 132, scoreNum: 2.46, lowerIsBetter: true },
      internetPenetration: { label: "Internet Penetration", value: "84%", scoreNum: 84, lowerIsBetter: false },
    },
    categories: {
      economy: { name: "Economy", score: 72.1, globalRank: "#9", rankNum: 9 },
      society: { name: "Society", score: 68.4, globalRank: "#72", rankNum: 72 },
      governance: { name: "Governance", score: 61.2, globalRank: "#60", rankNum: 60 },
      technology: { name: "Technology", score: 69.5, globalRank: "#35", rankNum: 35 },
      education: { name: "Education", score: 67.8, globalRank: "#68", rankNum: 68 },
      healthcare: { name: "Healthcare", score: 71.4, globalRank: "#62", rankNum: 62 },
      environment: { name: "Environment", score: 69.8, globalRank: "#42", rankNum: 42 },
      safety: { name: "Safety", score: 55.4, globalRank: "#112", rankNum: 112 },
      equality: { name: "Equality", score: 54.1, globalRank: "#118", rankNum: 118 },
      "digital-government": { name: "Digital Government", score: 79.2, globalRank: "#24", rankNum: 24 },
    },
  },
};

export const countryList = Object.values(countriesData).map((c) => ({
  id: c.id,
  name: c.name,
  flag: c.flag,
  code: c.code,
  region: c.region,
}));

// Helper to determine winner for a metric
export function getMetricWinner(
  m1: SummaryMetricValue,
  m2: SummaryMetricValue,
  country1Name: string,
  country2Name: string
): "c1" | "c2" | "tie" {
  if (m1.lowerIsBetter) {
    const r1 = m1.rankNum ?? 999;
    const r2 = m2.rankNum ?? 999;
    if (r1 < r2) return "c1";
    if (r2 < r1) return "c2";
    return "tie";
  } else {
    const s1 = m1.scoreNum ?? 0;
    const s2 = m2.scoreNum ?? 0;
    if (s1 > s2) return "c1";
    if (s2 > s1) return "c2";
    return "tie";
  }
}
