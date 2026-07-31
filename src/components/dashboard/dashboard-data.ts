export interface KPICardData {
  id: string;
  title: string;
  rank: string;
  score: string;
  trend: string;
  direction: "up" | "down" | "neutral";
  source: string;
  sparkline: number[];
}

export interface CategoryData {
  id: string;
  name: string;
  iconName: string;
  overallScore: number; // out of 100
  globalRank: string;
  progressPercent: number;
  indicatorCount: number;
  description: string;
}

export interface HighlightItem {
  id: string;
  title: string;
  publisher: string;
  date: string;
  type: "improvement" | "decline" | "neutral";
  changeBadge: string;
  currentRank: string;
  description: string;
}

export const kpiCardsData: KPICardData[] = [
  {
    id: "gdp-rank",
    title: "GDP Rank",
    rank: "#5",
    score: "$3.75 Trillion",
    trend: "+2 ranks",
    direction: "up",
    source: "World Bank",
    sparkline: [8, 7, 6, 5, 5],
  },
  {
    id: "hdi-rank",
    title: "HDI Rank",
    rank: "#134",
    score: "0.644 (Medium)",
    trend: "+1 rank",
    direction: "up",
    source: "UNDP",
    sparkline: [138, 136, 135, 134, 134],
  },
  {
    id: "innovation-rank",
    title: "Innovation Rank",
    rank: "#39",
    score: "38.3 / 100",
    trend: "+1 rank",
    direction: "up",
    source: "WIPO GII",
    sparkline: [46, 42, 40, 39, 39],
  },
  {
    id: "happiness-rank",
    title: "Happiness Rank",
    rank: "#126",
    score: "4.05 / 10",
    trend: "+2 ranks",
    direction: "up",
    source: "UN SDSN",
    sparkline: [136, 130, 128, 126, 126],
  },
  {
    id: "press-freedom",
    title: "Press Freedom",
    rank: "#159",
    score: "31.28 / 100",
    trend: "-2 ranks",
    direction: "down",
    source: "RSF",
    sparkline: [150, 153, 157, 159, 159],
  },
  {
    id: "global-peace",
    title: "Global Peace",
    rank: "#116",
    score: "2.31 Index",
    trend: "+3 ranks",
    direction: "up",
    source: "IEP Sydney",
    sparkline: [126, 123, 119, 116, 116],
  },
  {
    id: "ai-readiness",
    title: "AI Readiness",
    rank: "#32",
    score: "63.4 / 100",
    trend: "+4 ranks",
    direction: "up",
    source: "Oxford Insights",
    sparkline: [48, 41, 36, 32, 32],
  },
  {
    id: "gender-gap",
    title: "Gender Gap",
    rank: "#129",
    score: "0.643 Ratio",
    trend: "-2 ranks",
    direction: "down",
    source: "WEF",
    sparkline: [125, 127, 127, 129, 129],
  },
];

export const categoryOverviewData: CategoryData[] = [
  {
    id: "economy",
    name: "Economy",
    iconName: "TrendingUp",
    overallScore: 78.4,
    globalRank: "#5 Global",
    progressPercent: 78.4,
    indicatorCount: 14,
    description: "GDP growth, FDI inflows, fiscal deficit & exports",
  },
  {
    id: "society",
    name: "Society",
    iconName: "Users",
    overallScore: 62.1,
    globalRank: "#84 Global",
    progressPercent: 62.1,
    indicatorCount: 12,
    description: "Human development, demographic dividend & social mobility",
  },
  {
    id: "governance",
    name: "Governance",
    iconName: "Building2",
    overallScore: 58.9,
    globalRank: "#68 Global",
    progressPercent: 58.9,
    indicatorCount: 10,
    description: "Government effectiveness, rule of law & regulatory quality",
  },
  {
    id: "technology",
    name: "Technology",
    iconName: "Cpu",
    overallScore: 82.3,
    globalRank: "#12 Global",
    progressPercent: 82.3,
    indicatorCount: 15,
    description: "Digital infrastructure, patent filings, AI readiness & IT exports",
  },
  {
    id: "education",
    name: "Education",
    iconName: "GraduationCap",
    overallScore: 66.7,
    globalRank: "#72 Global",
    progressPercent: 66.7,
    indicatorCount: 9,
    description: "STEM graduates, higher education enrollment & literacy rates",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    iconName: "HeartPulse",
    overallScore: 64.2,
    globalRank: "#92 Global",
    progressPercent: 64.2,
    indicatorCount: 11,
    description: "Universal health coverage, life expectancy & hospital capacity",
  },
  {
    id: "environment",
    name: "Environment",
    iconName: "Leaf",
    overallScore: 52.8,
    globalRank: "#110 Global",
    progressPercent: 52.8,
    indicatorCount: 8,
    description: "Renewable energy adoption, air quality & carbon intensity",
  },
  {
    id: "safety",
    name: "Safety",
    iconName: "ShieldCheck",
    overallScore: 61.5,
    globalRank: "#88 Global",
    progressPercent: 61.5,
    indicatorCount: 7,
    description: "Cybersecurity preparedness, internal security & peace index",
  },
  {
    id: "equality",
    name: "Equality",
    iconName: "Scale",
    overallScore: 57.3,
    globalRank: "#105 Global",
    progressPercent: 57.3,
    indicatorCount: 9,
    description: "Gender parity, income distribution & economic opportunity",
  },
  {
    id: "digital-government",
    name: "Digital Government",
    iconName: "Landmark",
    overallScore: 84.9,
    globalRank: "#9 Global",
    progressPercent: 84.9,
    indicatorCount: 13,
    description: "UPI transactions, e-governance services & Digital Public Goods",
  },
];

export const recentHighlightsData: HighlightItem[] = [
  {
    id: "gii-2025",
    title: "Global Innovation Index 2025",
    publisher: "WIPO",
    date: "July 2025",
    type: "improvement",
    changeBadge: "+1 Rank Improvement",
    currentRank: "#39 Global",
    description: "India gained 1 position in global innovation rankings, driven by high ICT service exports and startup ecosystem density.",
  },
  {
    id: "ai-readiness-2025",
    title: "Government AI Readiness Index",
    publisher: "Oxford Insights",
    date: "June 2025",
    type: "improvement",
    changeBadge: "+4 Ranks Surge",
    currentRank: "#32 Global",
    description: "Climbed 4 places following national compute capacity expansion and public sector AI integration policies.",
  },
  {
    id: "logistics-2025",
    title: "Logistics Performance Index",
    publisher: "World Bank",
    date: "May 2025",
    type: "improvement",
    changeBadge: "+6 Ranks Jump",
    currentRank: "#38 Global",
    description: "Significant progress in supply chain efficiency and port digitization under the PM Gati Shakti national master plan.",
  },
  {
    id: "press-freedom-2025",
    title: "World Press Freedom Index",
    publisher: "Reporters Without Borders",
    date: "May 2025",
    type: "decline",
    changeBadge: "-2 Ranks Decline",
    currentRank: "#159 Global",
    description: "Slid 2 positions due to regional press regulatory challenges and digital access restrictions.",
  },
  {
    id: "gender-gap-2025",
    title: "Global Gender Gap Report",
    publisher: "World Economic Forum",
    date: "April 2025",
    type: "decline",
    changeBadge: "-2 Ranks Shift",
    currentRank: "#129 Global",
    description: "Slight drop in political empowerment and economic participation sub-indexes.",
  },
  {
    id: "peace-index-2025",
    title: "Global Peace Index",
    publisher: "Institute for Economics & Peace",
    date: "March 2025",
    type: "improvement",
    changeBadge: "+3 Ranks Improvement",
    currentRank: "#116 Global",
    description: "Up 3 spots reflecting reduced internal conflict metrics and improved neighbor relations.",
  },
];
