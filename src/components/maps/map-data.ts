export interface MapCountryData {
  id: string;
  name: string;
  flag: string;
  code: string;
  slug?: string;
  region: string;
  coords: [number, number]; // [latitude, longitude]
  overallScore: number; // out of 100
  globalRank: string;
  rankNum: number;
  population: string;
  gdpRank: string;
  overview: string;
  categories: {
    economy: number;
    society: number;
    governance: number;
    technology: number;
    education: number;
    healthcare: number;
    environment: number;
    safety: number;
    equality: number;
    "digital-government": number;
  };
  strengths: string[];
  improvements: string[];
  isIndia?: boolean;
}

export const worldMapCountries: MapCountryData[] = [
  {
    id: "IND",
    name: "India",
    flag: "🇮🇳",
    code: "IND",
    region: "South Asia",
    coords: [20.5937, 78.9629],
    overallScore: 72.4,
    globalRank: "#50 Global",
    rankNum: 50,
    population: "1.43 Billion",
    gdpRank: "#5 ($3.75T)",
    overview: "Fastest-growing major economy with world-leading Digital Public Infrastructure (UPI), expanding IT sector, and high demographic dividend.",
    categories: {
      economy: 78.4,
      society: 62.1,
      governance: 58.9,
      technology: 82.3,
      education: 66.7,
      healthcare: 64.2,
      environment: 52.8,
      safety: 61.5,
      equality: 57.3,
      "digital-government": 84.9,
    },
    strengths: [
      "Digital Government & Public Goods (UPI, Aadhaar)",
      "Tech Ecosystem & AI Talent Density",
      "High Real GDP Growth Rate (7%+) & Exports",
      "STEM Graduate Output & Space Tech Innovations",
    ],
    improvements: [
      "Human Development Index & Universal Sanitation",
      "Air Quality & Carbon Intensity per Capita",
      "Press Freedom & Regulatory Modernization",
    ],
    isIndia: true,
  },
  {
    id: "USA",
    name: "United States",
    flag: "🇺🇸",
    code: "USA",
    region: "North America",
    coords: [37.0902, -95.7129],
    overallScore: 88.5,
    globalRank: "#3 Global",
    rankNum: 3,
    population: "335 Million",
    gdpRank: "#1 ($26.9T)",
    overview: "Global financial and technological leader with top-tier research universities, venture capital depth, and AI innovation.",
    categories: {
      economy: 94.2,
      society: 85.5,
      governance: 81.3,
      technology: 96.1,
      education: 88.9,
      healthcare: 84.6,
      environment: 68.4,
      safety: 72.1,
      equality: 66.8,
      "digital-government": 87.2,
    },
    strengths: [
      "Global Technology & AI Frontier Research",
      "Capital Markets & Corporate R&D Expenditure",
      "Higher Education Institutions & Patents",
    ],
    improvements: [
      "Income Parity & Social Mobility",
      "Healthcare Cost Inflation",
    ],
  },
  {
    id: "CHN",
    name: "China",
    flag: "🇨🇳",
    code: "CHN",
    region: "East Asia",
    coords: [35.8617, 104.1954],
    overallScore: 81.2,
    globalRank: "#12 Global",
    rankNum: 12,
    population: "1.41 Billion",
    gdpRank: "#2 ($17.7T)",
    overview: "Manufacturing powerhouse advancing rapidly in green tech, high-speed rail, AI deployment, and patent applications.",
    categories: {
      economy: 91.5,
      society: 74.3,
      governance: 60.1,
      technology: 92.4,
      education: 79.8,
      healthcare: 78.2,
      environment: 58.6,
      safety: 78.9,
      equality: 62.4,
      "digital-government": 86.1,
    },
    strengths: [
      "Industrial Output & EV Infrastructure",
      "Patents & Quantum Computing Patents",
      "Infrastructure Modernization",
    ],
    improvements: [
      "Press Freedom & Internet Access",
      "Governance Transparency Metrics",
    ],
  },
  {
    id: "DEU",
    name: "Germany",
    flag: "🇩🇪",
    code: "DEU",
    region: "Europe",
    coords: [51.1657, 10.4515],
    overallScore: 87.8,
    globalRank: "#5 Global",
    rankNum: 5,
    population: "84 Million",
    gdpRank: "#3 ($4.45T)",
    overview: "Industrial leader with high social security standards, advanced engineering exports, and strong environmental commitments.",
    categories: {
      economy: 88.9,
      society: 91.2,
      governance: 92.4,
      technology: 88.7,
      education: 90.5,
      healthcare: 93.1,
      environment: 84.6,
      safety: 89.2,
      equality: 84.1,
      "digital-government": 82.5,
    },
    strengths: [
      "High Social Mobility & Welfare System",
      "Precision Engineering & Heavy Machinery Exports",
      "Rule of Law & Press Freedom Index",
    ],
    improvements: [
      "Digital Government Transformation Speed",
      "Venture Capital Availability for Startups",
    ],
  },
  {
    id: "JPN",
    name: "Japan",
    flag: "🇯🇵",
    code: "JPN",
    region: "East Asia",
    coords: [36.2048, 138.2529],
    overallScore: 86.9,
    globalRank: "#7 Global",
    rankNum: 7,
    population: "125 Million",
    gdpRank: "#4 ($4.21T)",
    overview: "High-tech economy famous for public safety, longevity, robotics innovation, and world-class public infrastructure.",
    categories: {
      economy: 87.2,
      society: 89.4,
      governance: 88.5,
      technology: 89.6,
      education: 91.8,
      healthcare: 95.4,
      environment: 79.2,
      safety: 94.8,
      equality: 76.5,
      "digital-government": 83.4,
    },
    strengths: [
      "Public Safety Index & Low Crime",
      "Universal Health System & High Life Expectancy",
      "Robotics & Automotive Engineering",
    ],
    improvements: [
      "Demographic Ageing & Labor Pool Shrinkage",
      "Gender Equality in Executive Positions",
    ],
  },
  {
    id: "GBR",
    name: "United Kingdom",
    flag: "🇬🇧",
    code: "GBR",
    region: "Europe",
    coords: [55.3781, -3.4360],
    overallScore: 86.4,
    globalRank: "#8 Global",
    rankNum: 8,
    population: "67 Million",
    gdpRank: "#6 ($3.33T)",
    overview: "Global financial hub with prestigious universities, fintech innovation, and strong soft power influence.",
    categories: {
      economy: 85.1,
      society: 88.3,
      governance: 89.1,
      technology: 91.2,
      education: 92.4,
      healthcare: 88.2,
      environment: 82.1,
      safety: 83.5,
      equality: 79.4,
      "digital-government": 89.3,
    },
    strengths: [
      "Fintech Hub & Global Banking Infrastructure",
      "Academic Research Impact & Oxbridge Universities",
      "E-Governance & Digital Public Services",
    ],
    improvements: [
      "Regional Economic Disparities",
      "Public Infrastructure Spending Deficits",
    ],
  },
  {
    id: "SGP",
    name: "Singapore",
    flag: "🇸🇬",
    code: "SGP",
    region: "Southeast Asia",
    coords: [1.3521, 103.8198],
    overallScore: 91.5,
    globalRank: "#1 Global",
    rankNum: 1,
    population: "5.9 Million",
    gdpRank: "#33 ($501B)",
    overview: "Global trade and logistics center with top governance rankings, digital government leadership, and ease of doing business.",
    categories: {
      economy: 92.8,
      society: 91.5,
      governance: 96.2,
      technology: 94.5,
      education: 93.1,
      healthcare: 94.8,
      environment: 76.5,
      safety: 96.5,
      equality: 77.2,
      "digital-government": 95.1,
    },
    strengths: [
      "Ease of Doing Business & Low Corruption",
      "Smart Nation Digital Government Stack",
      "Port & Air Logistics Connectivity",
    ],
    improvements: [
      "High Domestic Cost of Living",
      "Land Availability & Carbon Transition",
    ],
  },
  {
    id: "BRA",
    name: "Brazil",
    flag: "🇧🇷",
    code: "BRA",
    region: "Latin America",
    coords: [-14.2350, -51.9253],
    overallScore: 68.2,
    globalRank: "#65 Global",
    rankNum: 65,
    population: "215 Million",
    gdpRank: "#9 ($2.17T)",
    overview: "Latin America's largest economy, rich in agricultural exports, renewable energy generation, and biodiversity.",
    categories: {
      economy: 72.1,
      society: 68.4,
      governance: 61.2,
      technology: 69.5,
      education: 67.8,
      healthcare: 71.4,
      environment: 69.8,
      safety: 55.4,
      equality: 54.1,
      "digital-government": 79.2,
    },
    strengths: [
      "Agribusiness & Renewable Bio-Fuels",
      "Pix Digital Instant Payment Network",
      "Rich Biodiversity & Green Energy Grid",
    ],
    improvements: [
      "Urban Safety & Internal Peace Metrics",
      "Gini Index Income Inequality",
    ],
  },
  {
    id: "AUS",
    name: "Australia",
    flag: "🇦🇺",
    code: "AUS",
    region: "Oceania",
    coords: [-25.2744, 133.7751],
    overallScore: 87.1,
    globalRank: "#6 Global",
    rankNum: 6,
    population: "26 Million",
    gdpRank: "#13 ($1.7T)",
    overview: "High quality of life with abundant mineral resources, solar energy expansion, and strong tertiary education system.",
    categories: {
      economy: 86.4,
      society: 92.1,
      governance: 91.5,
      technology: 84.8,
      education: 91.2,
      healthcare: 92.8,
      environment: 78.4,
      safety: 90.1,
      equality: 82.5,
      "digital-government": 86.8,
    },
    strengths: [
      "Human Development & Air Quality Index",
      "Critical Minerals & Clean Energy Transition",
      "Higher Education International Student Ecosystem",
    ],
    improvements: [
      "Manufacturing Diversification",
      "Housing Affordability in Capital Cities",
    ],
  },
  {
    id: "FRA",
    name: "France",
    flag: "🇫🇷",
    code: "FRA",
    region: "Europe",
    coords: [46.2276, 2.2137],
    overallScore: 85.8,
    globalRank: "#9 Global",
    rankNum: 9,
    population: "68 Million",
    gdpRank: "#7 ($3.05T)",
    overview: "European leader in aerospace, nuclear power generation, luxury goods, and cultural soft power.",
    categories: {
      economy: 84.8,
      society: 89.2,
      governance: 87.4,
      technology: 87.5,
      education: 88.6,
      healthcare: 91.4,
      environment: 83.2,
      safety: 82.1,
      equality: 81.5,
      "digital-government": 85.9,
    },
    strengths: [
      "Low-Carbon Nuclear Energy Grid",
      "Aerospace Engineering & High-Speed Transit",
      "Social Healthcare Coverage",
    ],
    improvements: [
      "Fiscal Deficit & Public Debt Ratio",
      "Labor Market Rigidity",
    ],
  },
  {
    id: "ARE",
    name: "United Arab Emirates",
    flag: "🇦🇪",
    code: "ARE",
    region: "Middle East",
    coords: [23.4241, 53.8478],
    overallScore: 79.8,
    globalRank: "#22 Global",
    rankNum: 22,
    population: "9.5 Million",
    gdpRank: "#31 ($504B)",
    overview: "Regional economic hub driving smart cities, AI infrastructure investment, and global trade diversification.",
    categories: {
      economy: 86.2,
      society: 78.4,
      governance: 79.5,
      technology: 85.1,
      education: 76.2,
      healthcare: 81.4,
      environment: 62.5,
      safety: 91.8,
      equality: 69.4,
      "digital-government": 90.2,
    },
    strengths: [
      "Smart City Infrastructure & AI Investment",
      "Public Safety & High Income per Capita",
      "Global Airport & Maritime Logistics",
    ],
    improvements: [
      "Water Scarcity & Extreme Heat Adaptability",
      "Domestic Talent Generation & University Research",
    ],
  },
];

export function getScoreColor(score: number, isIndia?: boolean): string {
  if (isIndia) return "#F97316"; // Primary saffron orange for India
  if (score >= 88) return "#10B981"; // Emerald green for top tier
  if (score >= 82) return "#3B82F6"; // Sky blue for strong tier
  if (score >= 75) return "#6366F1"; // Indigo for moderate tier
  return "#F59E0B"; // Amber for developing tier
}
