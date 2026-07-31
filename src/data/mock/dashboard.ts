export type Year = "2022" | "2023" | "2024" | "2025";

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

export interface DashboardYearData {
  kpis: KPICardData[];
  categories: CategoryData[];
  highlights: HighlightItem[];
  aiSummary: {
    title: string;
    description: string;
    badge: string;
  };
}

export const dashboardMockByYear: Record<Year, DashboardYearData> = {
  "2022": {
    aiSummary: {
      title: "India lays foundations for digital infrastructure & macroeconomic recovery",
      description:
        "In 2022, India ranked #7 globally in GDP ($3.15T), driven by post-pandemic economic rebound, rapid digital payments expansion (UPI), and steady IT services exports.",
      badge: "2022 Benchmark",
    },
    kpis: [
      { id: "gdp-rank", title: "GDP Rank", rank: "#7", score: "$3.15 Trillion", trend: "+1 rank", direction: "up", source: "World Bank", sparkline: [10, 9, 8, 7, 7] },
      { id: "hdi-rank", title: "HDI Rank", rank: "#138", score: "0.633 (Medium)", trend: "neutral", direction: "neutral", source: "UNDP", sparkline: [140, 139, 138, 138, 138] },
      { id: "innovation-rank", title: "Innovation Rank", rank: "#46", score: "35.1 / 100", trend: "+2 ranks", direction: "up", source: "WIPO GII", sparkline: [52, 48, 48, 46, 46] },
      { id: "happiness-rank", title: "Happiness Rank", rank: "#136", score: "3.77 / 10", trend: "+3 ranks", direction: "up", source: "UN SDSN", sparkline: [144, 139, 137, 136, 136] },
      { id: "press-freedom", title: "Press Freedom", rank: "#150", score: "34.60 / 100", trend: "-2 ranks", direction: "down", source: "RSF", sparkline: [142, 145, 148, 150, 150] },
      { id: "global-peace", title: "Global Peace", rank: "#126", score: "2.57 Index", trend: "+2 ranks", direction: "up", source: "IEP Sydney", sparkline: [135, 130, 128, 126, 126] },
      { id: "ai-readiness", title: "AI Readiness", rank: "#48", score: "54.2 / 100", trend: "+3 ranks", direction: "up", source: "Oxford Insights", sparkline: [60, 55, 51, 48, 48] },
      { id: "gender-gap", title: "Gender Gap", rank: "#135", score: "0.629 Ratio", trend: "-1 rank", direction: "down", source: "WEF", sparkline: [132, 133, 134, 135, 135] },
    ],
    categories: [
      { id: "economy", name: "Economy", iconName: "TrendingUp", overallScore: 71.2, globalRank: "#7 Global", progressPercent: 71.2, indicatorCount: 14, description: "GDP rebound, post-COVID expansion, and export growth" },
      { id: "society", name: "Society", iconName: "Users", overallScore: 56.4, globalRank: "#92 Global", progressPercent: 56.4, indicatorCount: 12, description: "Demographic dividend and basic welfare coverage rollout" },
      { id: "governance", name: "Governance", iconName: "Building2", overallScore: 54.1, globalRank: "#75 Global", progressPercent: 54.1, indicatorCount: 10, description: "E-governance scaling and administrative digitalization" },
      { id: "technology", name: "Technology", iconName: "Cpu", overallScore: 73.8, globalRank: "#18 Global", progressPercent: 73.8, indicatorCount: 15, description: "UPI transaction acceleration and 4G connectivity reach" },
      { id: "education", name: "Education", iconName: "GraduationCap", overallScore: 61.2, globalRank: "#79 Global", progressPercent: 61.2, indicatorCount: 9, description: "STEM degree output and primary school enrollment rates" },
      { id: "healthcare", name: "Healthcare", iconName: "HeartPulse", overallScore: 58.5, globalRank: "#98 Global", progressPercent: 58.5, indicatorCount: 11, description: "Ayushman Bharat expansion and vaccine manufacturing" },
      { id: "environment", name: "Environment", iconName: "Leaf", overallScore: 46.2, globalRank: "#122 Global", progressPercent: 46.2, indicatorCount: 8, description: "Solar capacity installation and air quality challenges" },
      { id: "safety", name: "Safety", iconName: "ShieldCheck", overallScore: 56.0, globalRank: "#96 Global", progressPercent: 56.0, indicatorCount: 7, description: "Internal stability and digital cybersecurity frameworks" },
      { id: "equality", name: "Equality", iconName: "Scale", overallScore: 52.1, globalRank: "#115 Global", progressPercent: 52.1, indicatorCount: 9, description: "Gender workforce participation and income parity efforts" },
      { id: "digital-government", name: "Digital Government", iconName: "Landmark", overallScore: 75.4, globalRank: "#18 Global", progressPercent: 75.4, indicatorCount: 13, description: "Aadhaar authentication and digital identity coverage" },
    ],
    highlights: [
      { id: "gii-2022", title: "Global Innovation Index 2022", publisher: "WIPO", date: "Sept 2022", type: "improvement", changeBadge: "+2 Ranks Jump", currentRank: "#46 Global", description: "India reached #46 in global innovation, leading lower-middle income economies." },
      { id: "gdp-2022", title: "IMF World Economic Outlook 2022", publisher: "IMF", date: "Oct 2022", type: "improvement", changeBadge: "Surpassed UK (#7)", currentRank: "#7 Global GDP", description: "Nominal GDP reached $3.15 Trillion, positioning India ahead of several G7 nations." },
      { id: "lpi-2022", title: "World Bank Logistics Index 2022", publisher: "World Bank", date: "June 2022", type: "neutral", changeBadge: "Steady Rank", currentRank: "#44 Global", description: "Port modernization and dedicated freight corridors initiated under PM Gati Shakti." },
    ],
  },
  "2023": {
    aiSummary: {
      title: "India becomes #5 GDP economy with rapid fintech & space milestone",
      description:
        "In 2023, India reached #5 global economy status ($3.39T GDP), achieved historical space success (Chandrayaan-3), and expanded UPI payments to international corridors.",
      badge: "2023 Benchmark",
    },
    kpis: [
      { id: "gdp-rank", title: "GDP Rank", rank: "#5", score: "$3.39 Trillion", trend: "+2 ranks", direction: "up", source: "World Bank", sparkline: [9, 8, 7, 5, 5] },
      { id: "hdi-rank", title: "HDI Rank", rank: "#136", score: "0.638 (Medium)", trend: "+2 ranks", direction: "up", source: "UNDP", sparkline: [139, 138, 136, 136, 136] },
      { id: "innovation-rank", title: "Innovation Rank", rank: "#42", score: "36.7 / 100", trend: "+4 ranks", direction: "up", source: "WIPO GII", sparkline: [48, 46, 44, 42, 42] },
      { id: "happiness-rank", title: "Happiness Rank", rank: "#130", score: "3.92 / 10", trend: "+6 ranks", direction: "up", source: "UN SDSN", sparkline: [139, 136, 132, 130, 130] },
      { id: "press-freedom", title: "Press Freedom", rank: "#153", score: "33.20 / 100", trend: "-3 ranks", direction: "down", source: "RSF", sparkline: [145, 148, 150, 153, 153] },
      { id: "global-peace", title: "Global Peace", rank: "#123", score: "2.48 Index", trend: "+3 ranks", direction: "up", source: "IEP Sydney", sparkline: [130, 126, 124, 123, 123] },
      { id: "ai-readiness", title: "AI Readiness", rank: "#41", score: "57.8 / 100", trend: "+7 ranks", direction: "up", source: "Oxford Insights", sparkline: [55, 48, 44, 41, 41] },
      { id: "gender-gap", title: "Gender Gap", rank: "#130", score: "0.635 Ratio", trend: "+5 ranks", direction: "up", source: "WEF", sparkline: [135, 135, 132, 130, 130] },
    ],
    categories: [
      { id: "economy", name: "Economy", iconName: "TrendingUp", overallScore: 74.5, globalRank: "#5 Global", progressPercent: 74.5, indicatorCount: 14, description: "Real GDP growth 7.2%, booming manufacturing & domestic consumption" },
      { id: "society", name: "Society", iconName: "Users", overallScore: 58.9, globalRank: "#88 Global", progressPercent: 58.9, indicatorCount: 12, description: "Clean water coverage expansion and digital financial inclusion" },
      { id: "governance", name: "Governance", iconName: "Building2", overallScore: 56.2, globalRank: "#72 Global", progressPercent: 56.2, indicatorCount: 10, description: "G20 presidency digital diplomacy leadership and e-service portals" },
      { id: "technology", name: "Technology", iconName: "Cpu", overallScore: 77.2, globalRank: "#15 Global", progressPercent: 77.2, indicatorCount: 15, description: "Chandrayaan-3 lunar landing success and 5G network rollout pace" },
      { id: "education", name: "Education", iconName: "GraduationCap", overallScore: 63.4, globalRank: "#76 Global", progressPercent: 63.4, indicatorCount: 9, description: "National Education Policy Implementation and IIT expansion" },
      { id: "healthcare", name: "Healthcare", iconName: "HeartPulse", overallScore: 60.8, globalRank: "#95 Global", progressPercent: 60.8, indicatorCount: 11, description: "Digital health ID (ABHA) creation and tele-medicine deployment" },
      { id: "environment", name: "Environment", iconName: "Leaf", overallScore: 48.9, globalRank: "#118 Global", progressPercent: 48.9, indicatorCount: 8, description: "500 GW green energy target roadmap and EV subsidy adoption" },
      { id: "safety", name: "Safety", iconName: "ShieldCheck", overallScore: 58.4, globalRank: "#92 Global", progressPercent: 58.4, indicatorCount: 7, description: "Cyber Defense Command establishment and border stability" },
      { id: "equality", name: "Equality", iconName: "Scale", overallScore: 54.3, globalRank: "#110 Global", progressPercent: 54.3, indicatorCount: 9, description: "Women-led development policy focus at G20 New Delhi declaration" },
      { id: "digital-government", name: "Digital Government", iconName: "Landmark", overallScore: 79.8, globalRank: "#14 Global", progressPercent: 79.8, indicatorCount: 13, description: "UPI international linkages (Singapore PayNow, UAE) and ONDC launch" },
    ],
    highlights: [
      { id: "chandrayaan-3", title: "Chandrayaan-3 Moon Landing", publisher: "ISRO", date: "August 2023", type: "improvement", changeBadge: "#1 Lunar South Pole", currentRank: "#4 Space Power", description: "India became the 1st nation to land near lunar south pole, cementing tech leadership." },
      { id: "g20-presidency", title: "G20 New Delhi Declaration", publisher: "G20 Summit", date: "Sept 2023", type: "improvement", changeBadge: "Global Consensus", currentRank: "#1 DPI Framework", description: "Global adoption of India's Digital Public Infrastructure model endorsed by 20 leaders." },
      { id: "gii-2023", title: "Global Innovation Index 2023", publisher: "WIPO", date: "Sept 2023", type: "improvement", changeBadge: "+4 Ranks Surge", currentRank: "#40 Global", description: "Climbed to #40 in world innovation standings." },
    ],
  },
  "2024": {
    aiSummary: {
      title: "India accelerates in AI readiness, Digital Public Goods & renewable transition",
      description:
        "In 2024, India reached $3.55T GDP, jumped to #36 in AI Readiness, and scaled digital public infrastructure to process over 10 billion monthly transactions.",
      badge: "2024 Benchmark",
    },
    kpis: [
      { id: "gdp-rank", title: "GDP Rank", rank: "#5", score: "$3.55 Trillion", trend: "+0 rank", direction: "neutral", source: "World Bank", sparkline: [7, 6, 5, 5, 5] },
      { id: "hdi-rank", title: "HDI Rank", rank: "#135", score: "0.641 (Medium)", trend: "+1 rank", direction: "up", source: "UNDP", sparkline: [138, 136, 135, 135, 135] },
      { id: "innovation-rank", title: "Innovation Rank", rank: "#40", score: "37.5 / 100", trend: "+2 ranks", direction: "up", source: "WIPO GII", sparkline: [46, 42, 40, 40, 40] },
      { id: "happiness-rank", title: "Happiness Rank", rank: "#128", score: "4.01 / 10", trend: "+2 ranks", direction: "up", source: "UN SDSN", sparkline: [136, 130, 128, 128, 128] },
      { id: "press-freedom", title: "Press Freedom", rank: "#157", score: "31.80 / 100", trend: "-4 ranks", direction: "down", source: "RSF", sparkline: [150, 153, 157, 157, 157] },
      { id: "global-peace", title: "Global Peace", rank: "#119", score: "2.38 Index", trend: "+4 ranks", direction: "up", source: "IEP Sydney", sparkline: [126, 123, 119, 119, 119] },
      { id: "ai-readiness", title: "AI Readiness", rank: "#36", score: "60.5 / 100", trend: "+5 ranks", direction: "up", source: "Oxford Insights", sparkline: [48, 41, 36, 36, 36] },
      { id: "gender-gap", title: "Gender Gap", rank: "#127", score: "0.641 Ratio", trend: "+3 ranks", direction: "up", source: "WEF", sparkline: [130, 130, 127, 127, 127] },
    ],
    categories: [
      { id: "economy", name: "Economy", iconName: "TrendingUp", overallScore: 76.8, globalRank: "#5 Global", progressPercent: 76.8, indicatorCount: 14, description: "Capital expenditure expansion and resilient domestic growth" },
      { id: "society", name: "Society", iconName: "Users", overallScore: 60.5, globalRank: "#86 Global", progressPercent: 60.5, indicatorCount: 12, description: "Middle class expansion and urban infrastructure projects" },
      { id: "governance", name: "Governance", iconName: "Building2", overallScore: 57.8, globalRank: "#70 Global", progressPercent: 57.8, indicatorCount: 10, description: "Single-window clearance portals and digital tax administration" },
      { id: "technology", name: "Technology", iconName: "Cpu", overallScore: 80.1, globalRank: "#14 Global", progressPercent: 80.1, indicatorCount: 15, description: "IndiaAI mission approval and national semiconductor fabrication investments" },
      { id: "education", name: "Education", iconName: "GraduationCap", overallScore: 65.1, globalRank: "#74 Global", progressPercent: 65.1, indicatorCount: 9, description: "Higher education international partnerships and tech skill programs" },
      { id: "healthcare", name: "Healthcare", iconName: "HeartPulse", overallScore: 62.5, globalRank: "#94 Global", progressPercent: 62.5, indicatorCount: 11, description: "Universal health insurance coverage reaching 500 million beneficiaries" },
      { id: "environment", name: "Environment", iconName: "Leaf", overallScore: 50.4, globalRank: "#114 Global", progressPercent: 50.4, indicatorCount: 8, description: "National Green Hydrogen Mission deployment & solar park additions" },
      { id: "safety", name: "Safety", iconName: "ShieldCheck", overallScore: 60.1, globalRank: "#90 Global", progressPercent: 60.1, indicatorCount: 7, description: "National Cybersecurity Strategy 2024 implementation" },
      { id: "equality", name: "Equality", iconName: "Scale", overallScore: 55.8, globalRank: "#108 Global", progressPercent: 55.8, indicatorCount: 9, description: "Female STEM enrollment surges and micro-entrepreneurship loans" },
      { id: "digital-government", name: "Digital Government", iconName: "Landmark", overallScore: 82.5, globalRank: "#11 Global", progressPercent: 82.5, indicatorCount: 13, description: "UPI hitting 11B+ monthly transactions and DigiLocker crossing 250M users" },
    ],
    highlights: [
      { id: "india-ai-2024", title: "IndiaAI Mission Cabinet Approval", publisher: "MeitY", date: "March 2024", type: "improvement", changeBadge: "$1.2B AI Outlay", currentRank: "#36 AI Readiness", description: "Approved 10,000+ GPU supercomputing cluster for domestic AI researchers and startups." },
      { id: "semicon-2024", title: "Semiconductor Fab Groundbreaking", publisher: "Ministry of Electronics", date: "Feb 2024", type: "improvement", changeBadge: "$15B Investment", currentRank: "#1 Semiconductor Hub Asia", description: "Commercial semiconductor manufacturing units initiated in Gujarat and Assam." },
      { id: "gii-2024", title: "Global Innovation Index 2024", publisher: "WIPO", date: "Sept 2024", type: "improvement", changeBadge: "#39 Global", currentRank: "#39 Global", description: "Sustained position in top 40 worldwide innovation leaders." },
    ],
  },
  "2025": {
    aiSummary: {
      title: "India demonstrates strong momentum in Technology & Digital Infrastructure",
      description:
        "In 2025, AI analysis indicates rapid progress in Digital Government (#9 Global) and AI Readiness (#32 Global), while highlighting strategic growth potential in Human Development & Press Freedom metrics.",
      badge: "2025 Benchmark",
    },
    kpis: [
      { id: "gdp-rank", title: "GDP Rank", rank: "#5", score: "$3.75 Trillion", trend: "+2 ranks", direction: "up", source: "World Bank", sparkline: [8, 7, 6, 5, 5] },
      { id: "hdi-rank", title: "HDI Rank", rank: "#134", score: "0.644 (Medium)", trend: "+1 rank", direction: "up", source: "UNDP", sparkline: [138, 136, 135, 134, 134] },
      { id: "innovation-rank", title: "Innovation Rank", rank: "#39", score: "38.3 / 100", trend: "+1 rank", direction: "up", source: "WIPO GII", sparkline: [46, 42, 40, 39, 39] },
      { id: "happiness-rank", title: "Happiness Rank", rank: "#126", score: "4.05 / 10", trend: "+2 ranks", direction: "up", source: "UN SDSN", sparkline: [136, 130, 128, 126, 126] },
      { id: "press-freedom", title: "Press Freedom", rank: "#159", score: "31.28 / 100", trend: "-2 ranks", direction: "down", source: "RSF", sparkline: [150, 153, 157, 159, 159] },
      { id: "global-peace", title: "Global Peace", rank: "#116", score: "2.31 Index", trend: "+3 ranks", direction: "up", source: "IEP Sydney", sparkline: [126, 123, 119, 116, 116] },
      { id: "ai-readiness", title: "AI Readiness", rank: "#32", score: "63.4 / 100", trend: "+4 ranks", direction: "up", source: "Oxford Insights", sparkline: [48, 41, 36, 32, 32] },
      { id: "gender-gap", title: "Gender Gap", rank: "#129", score: "0.643 Ratio", trend: "-2 ranks", direction: "down", source: "WEF", sparkline: [125, 127, 127, 129, 129] },
    ],
    categories: [
      { id: "economy", name: "Economy", iconName: "TrendingUp", overallScore: 78.4, globalRank: "#5 Global", progressPercent: 78.4, indicatorCount: 14, description: "GDP growth, FDI inflows, fiscal deficit & exports" },
      { id: "society", name: "Society", iconName: "Users", overallScore: 62.1, globalRank: "#84 Global", progressPercent: 62.1, indicatorCount: 12, description: "Human development, demographic dividend & social mobility" },
      { id: "governance", name: "Governance", iconName: "Building2", overallScore: 58.9, globalRank: "#68 Global", progressPercent: 58.9, indicatorCount: 10, description: "Government effectiveness, rule of law & regulatory quality" },
      { id: "technology", name: "Technology", iconName: "Cpu", overallScore: 82.3, globalRank: "#12 Global", progressPercent: 82.3, indicatorCount: 15, description: "Digital infrastructure, patent filings, AI readiness & IT exports" },
      { id: "education", name: "Education", iconName: "GraduationCap", overallScore: 66.7, globalRank: "#72 Global", progressPercent: 66.7, indicatorCount: 9, description: "STEM graduates, higher education enrollment & literacy rates" },
      { id: "healthcare", name: "Healthcare", iconName: "HeartPulse", overallScore: 64.2, globalRank: "#92 Global", progressPercent: 64.2, indicatorCount: 11, description: "Universal health coverage, life expectancy & hospital capacity" },
      { id: "environment", name: "Environment", iconName: "Leaf", overallScore: 52.8, globalRank: "#110 Global", progressPercent: 52.8, indicatorCount: 8, description: "Renewable energy adoption, air quality & carbon intensity" },
      { id: "safety", name: "Safety", iconName: "ShieldCheck", overallScore: 61.5, globalRank: "#88 Global", progressPercent: 61.5, indicatorCount: 7, description: "Cybersecurity preparedness, internal security & peace index" },
      { id: "equality", name: "Equality", iconName: "Scale", overallScore: 57.3, globalRank: "#105 Global", progressPercent: 57.3, indicatorCount: 9, description: "Gender parity, income distribution & economic opportunity" },
      { id: "digital-government", name: "Digital Government", iconName: "Landmark", overallScore: 84.9, globalRank: "#9 Global", progressPercent: 84.9, indicatorCount: 13, description: "UPI transactions, e-governance services & Digital Public Goods" },
    ],
    highlights: [
      { id: "gii-2025", title: "Global Innovation Index 2025", publisher: "WIPO", date: "July 2025", type: "improvement", changeBadge: "+1 Rank Improvement", currentRank: "#39 Global", description: "India gained 1 position in global innovation rankings, driven by high ICT service exports and startup ecosystem density." },
      { id: "ai-readiness-2025", title: "Government AI Readiness Index", publisher: "Oxford Insights", date: "June 2025", type: "improvement", changeBadge: "+4 Ranks Surge", currentRank: "#32 Global", description: "Climbed 4 places following national compute capacity expansion and public sector AI integration policies." },
      { id: "logistics-2025", title: "Logistics Performance Index", publisher: "World Bank", date: "May 2025", type: "improvement", changeBadge: "+6 Ranks Jump", currentRank: "#38 Global", description: "Significant progress in supply chain efficiency and port digitization under the PM Gati Shakti national master plan." },
      { id: "press-freedom-2025", title: "World Press Freedom Index", publisher: "Reporters Without Borders", date: "May 2025", type: "decline", changeBadge: "-2 Ranks Decline", currentRank: "#159 Global", description: "Slid 2 positions due to regional press regulatory challenges and digital access restrictions." },
      { id: "gender-gap-2025", title: "Global Gender Gap Report", publisher: "World Economic Forum", date: "April 2025", type: "decline", changeBadge: "-2 Ranks Shift", currentRank: "#129 Global", description: "Slight drop in political empowerment and economic participation sub-indexes." },
      { id: "peace-index-2025", title: "Global Peace Index", publisher: "Institute for Economics & Peace", date: "March 2025", type: "improvement", changeBadge: "+3 Ranks Improvement", currentRank: "#116 Global", description: "Up 3 spots reflecting reduced internal conflict metrics and improved neighbor relations." },
    ],
  },
};

export function getDashboardData(year: Year): DashboardYearData {
  return dashboardMockByYear[year] || dashboardMockByYear["2025"];
}
