import { Year } from "./dashboard";

export interface MapCountryData {
  id: string;
  name: string;
  flag: string;
  code: string;
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

export const worldMapMockByYear: Record<Year, MapCountryData[]> = {
  "2022": [
    {
      id: "IND", name: "India", flag: "🇮🇳", code: "IND", region: "South Asia", coords: [20.5937, 78.9629],
      overallScore: 64.8, globalRank: "#62 Global", rankNum: 62, population: "1.41 Billion", gdpRank: "#7 ($3.15T)",
      overview: "Post-COVID economic recovery with initial scaling of Digital Public Infrastructure and software exports.",
      categories: { economy: 71.2, society: 56.4, governance: 54.1, technology: 73.8, education: 61.2, healthcare: 58.5, environment: 46.2, safety: 56.0, equality: 52.1, "digital-government": 75.4 },
      strengths: ["Digital Identity & Aadhaar Stack", "Software Engineering Talent & IT Exports", "Post-pandemic Economic Growth Momentum"],
      improvements: ["Air Quality & Carbon Intensity", "Press Freedom & Administrative Simplification", "Healthcare Infrastructure Per Capita"],
      isIndia: true,
    },
    {
      id: "USA", name: "United States", flag: "🇺🇸", code: "USA", region: "North America", coords: [37.0902, -95.7129],
      overallScore: 86.8, globalRank: "#3 Global", rankNum: 3, population: "332 Million", gdpRank: "#1 ($25.4T)",
      overview: "Leading financial and technological powerhouse with top-tier research universities and capital depth.",
      categories: { economy: 92.5, society: 83.2, governance: 79.5, technology: 94.2, education: 87.1, healthcare: 82.4, environment: 66.1, safety: 70.4, equality: 64.2, "digital-government": 85.1 },
      strengths: ["Tech Frontier & Capital Depth", "Higher Education & Patents"], improvements: ["Healthcare Cost Inflation", "Income Inequality"],
    },
    {
      id: "CHN", name: "China", flag: "🇨🇳", code: "CHN", region: "East Asia", coords: [35.8617, 104.1954],
      overallScore: 78.9, globalRank: "#14 Global", rankNum: 14, population: "1.42 Billion", gdpRank: "#2 ($17.9T)",
      overview: "Global manufacturing power expanding high-speed infrastructure and technology deployment.",
      categories: { economy: 89.2, society: 71.4, governance: 57.5, technology: 89.8, education: 76.5, healthcare: 75.1, environment: 54.2, safety: 76.1, equality: 59.8, "digital-government": 83.5 },
      strengths: ["Manufacturing Scale & High-Speed Rail", "EV Battery Supply Chains"], improvements: ["Press Freedom", "Regulatory Transparency"],
    },
    {
      id: "DEU", name: "Germany", flag: "🇩🇪", code: "DEU", region: "Europe", coords: [51.1657, 10.4515],
      overallScore: 86.4, globalRank: "#5 Global", rankNum: 5, population: "83 Million", gdpRank: "#4 ($4.07T)",
      overview: "Industrial and engineering leader with strong social welfare and environmental commitments.",
      categories: { economy: 86.5, society: 89.5, governance: 90.8, technology: 86.4, education: 88.9, healthcare: 91.5, environment: 82.1, safety: 87.5, equality: 82.4, "digital-government": 79.8 },
      strengths: ["Precision Engineering", "Social Welfare"], improvements: ["Digital Government Adoption"],
    },
    {
      id: "JPN", name: "Japan", flag: "🇯🇵", code: "JPN", region: "East Asia", coords: [36.2048, 138.2529],
      overallScore: 85.2, globalRank: "#7 Global", rankNum: 7, population: "126 Million", gdpRank: "#3 ($4.23T)",
      overview: "High-tech economy famed for public safety, robotics innovation, and healthcare systems.",
      categories: { economy: 85.4, society: 87.9, governance: 86.8, technology: 87.2, education: 90.1, healthcare: 94.2, environment: 76.8, safety: 93.5, equality: 74.2, "digital-government": 80.5 },
      strengths: ["Public Safety", "Longevity & Health Coverage"], improvements: ["Demographic Aging"],
    },
  ],
  "2023": [
    {
      id: "IND", name: "India", flag: "🇮🇳", code: "IND", region: "South Asia", coords: [20.5937, 78.9629],
      overallScore: 68.1, globalRank: "#56 Global", rankNum: 56, population: "1.42 Billion", gdpRank: "#5 ($3.39T)",
      overview: "Reached #5 global economy status, Chandrayaan-3 lunar landing success, and internationalization of UPI.",
      categories: { economy: 74.5, society: 58.9, governance: 56.2, technology: 77.2, education: 63.4, healthcare: 60.8, environment: 48.9, safety: 58.4, equality: 54.3, "digital-government": 79.8 },
      strengths: ["Lunar Space Tech & Chandrayaan-3", "UPI International Linkages", "Real GDP Growth Leader (7.2%)"],
      improvements: ["Gender Parity in Workforce", "Urban Environment Quality", "Human Development Index"],
      isIndia: true,
    },
    {
      id: "USA", name: "United States", flag: "🇺🇸", code: "USA", region: "North America", coords: [37.0902, -95.7129],
      overallScore: 87.5, globalRank: "#3 Global", rankNum: 3, population: "333 Million", gdpRank: "#1 ($26.1T)",
      overview: "Surged in generative AI commercialization and corporate R&D investment.",
      categories: { economy: 93.1, society: 84.1, governance: 80.2, technology: 95.1, education: 87.8, healthcare: 83.2, environment: 67.2, safety: 71.2, equality: 65.1, "digital-government": 86.2 },
      strengths: ["Generative AI Ecosystem", "Capital Markets"], improvements: ["Political Polarization"],
    },
    {
      id: "CHN", name: "China", flag: "🇨🇳", code: "CHN", region: "East Asia", coords: [35.8617, 104.1954],
      overallScore: 79.8, globalRank: "#13 Global", rankNum: 13, population: "1.41 Billion", gdpRank: "#2 ($17.8T)",
      overview: "Accelerated solar and EV technology exports alongside AI research outputs.",
      categories: { economy: 90.2, society: 72.8, governance: 58.9, technology: 90.8, education: 77.8, healthcare: 76.4, environment: 56.1, safety: 77.4, equality: 60.9, "digital-government": 84.8 },
      strengths: ["EV Expansion & Solar Supply Chain", "Patent Filings"], improvements: ["Real Estate Sector Stabilization"],
    },
    {
      id: "DEU", name: "Germany", flag: "🇩🇪", code: "DEU", region: "Europe", coords: [51.1657, 10.4515],
      overallScore: 87.0, globalRank: "#5 Global", rankNum: 5, population: "84 Million", gdpRank: "#3 ($4.43T)",
      overview: "Transitioned energy grid away from fossil fuels while maintaining manufacturing quality.",
      categories: { economy: 87.5, society: 90.2, governance: 91.5, technology: 87.4, education: 89.5, healthcare: 92.4, environment: 83.4, safety: 88.2, equality: 83.2, "digital-government": 81.2 },
      strengths: ["Green Energy Grid Acceleration", "Export Quality"], improvements: ["Energy Cost Inflation"],
    },
    {
      id: "JPN", name: "Japan", flag: "🇯🇵", code: "JPN", region: "East Asia", coords: [36.2048, 138.2529],
      overallScore: 85.9, globalRank: "#7 Global", rankNum: 7, population: "125 Million", gdpRank: "#4 ($4.21T)",
      overview: "Pioneered automated robotics and public safety innovations.",
      categories: { economy: 86.2, society: 88.5, governance: 87.5, technology: 88.4, education: 91.0, healthcare: 94.8, environment: 78.1, safety: 94.1, equality: 75.4, "digital-government": 82.0 },
      strengths: ["Automated Healthcare & Robotics", "Low Crime Index"], improvements: ["Digital Currency & Cloud Migration"],
    },
  ],
  "2024": [
    {
      id: "IND", name: "India", flag: "🇮🇳", code: "IND", region: "South Asia", coords: [20.5937, 78.9629],
      overallScore: 70.2, globalRank: "#52 Global", rankNum: 52, population: "1.43 Billion", gdpRank: "#5 ($3.55T)",
      overview: "Approved $1.2B IndiaAI mission, initiated semiconductor fabrication, and expanded 5G nationwide.",
      categories: { economy: 76.8, society: 60.5, governance: 57.8, technology: 80.1, education: 65.1, healthcare: 62.5, environment: 50.4, safety: 60.1, equality: 55.8, "digital-government": 82.5 },
      strengths: ["IndiaAI Mission Supercomputing Outlay", "Semiconductor Fab Groundbreaking", "11B+ Monthly UPI Transactions"],
      improvements: ["Press Freedom & Media Regulations", "Air Quality Standards Enforcement"],
      isIndia: true,
    },
    {
      id: "USA", name: "United States", flag: "🇺🇸", code: "USA", region: "North America", coords: [37.0902, -95.7129],
      overallScore: 88.1, globalRank: "#3 Global", rankNum: 3, population: "334 Million", gdpRank: "#1 ($26.5T)",
      overview: "Led global semiconductor design, cloud compute, and private space technology launches.",
      categories: { economy: 93.8, society: 85.0, governance: 81.0, technology: 95.8, education: 88.4, healthcare: 84.1, environment: 68.0, safety: 71.8, equality: 66.2, "digital-government": 86.8 },
      strengths: ["AI Frontier Compute & Cloud", "Commercial Space Flight"], improvements: ["National Debt Growth"],
    },
    {
      id: "CHN", name: "China", flag: "🇨🇳", code: "CHN", region: "East Asia", coords: [35.8617, 104.1954],
      overallScore: 80.5, globalRank: "#12 Global", rankNum: 12, population: "1.41 Billion", gdpRank: "#2 ($17.7T)",
      overview: "Expanded autonomous electric transport, industrial automation, and deep space probes.",
      categories: { economy: 91.0, society: 73.8, governance: 59.5, technology: 91.8, education: 78.8, healthcare: 77.5, environment: 57.5, safety: 78.2, equality: 61.8, "digital-government": 85.5 },
      strengths: ["Autonomous EV Infrastructure", "Robotic Factory Density"], improvements: ["Demographic Shift"],
    },
  ],
  "2025": [
    {
      id: "IND", name: "India", flag: "🇮🇳", code: "IND", region: "South Asia", coords: [20.5937, 78.9629],
      overallScore: 72.4, globalRank: "#50 Global", rankNum: 50, population: "1.43 Billion", gdpRank: "#5 ($3.75T)",
      overview: "Fastest-growing major economy with world-leading Digital Public Infrastructure (UPI), expanding IT sector, and high demographic dividend.",
      categories: { economy: 78.4, society: 62.1, governance: 58.9, technology: 82.3, education: 66.7, healthcare: 64.2, environment: 52.8, safety: 61.5, equality: 57.3, "digital-government": 84.9 },
      strengths: ["Digital Government & Public Goods (UPI, Aadhaar)", "Tech Ecosystem & AI Talent Density", "High Real GDP Growth Rate (7%+) & Exports", "STEM Graduate Output & Space Tech Innovations"],
      improvements: ["Human Development Index & Universal Sanitation", "Air Quality & Carbon Intensity per Capita", "Press Freedom & Regulatory Modernization"],
      isIndia: true,
    },
    {
      id: "USA", name: "United States", flag: "🇺🇸", code: "USA", region: "North America", coords: [37.0902, -95.7129],
      overallScore: 88.5, globalRank: "#3 Global", rankNum: 3, population: "335 Million", gdpRank: "#1 ($26.9T)",
      overview: "Global financial and technological leader with top-tier research universities, venture capital depth, and AI innovation.",
      categories: { economy: 94.2, society: 85.5, governance: 81.3, technology: 96.1, education: 88.9, healthcare: 84.6, environment: 68.4, safety: 72.1, equality: 66.8, "digital-government": 87.2 },
      strengths: ["Global Technology & AI Frontier Research", "Capital Markets & Corporate R&D Expenditure", "Higher Education Institutions & Patents"],
      improvements: ["Income Parity & Social Mobility", "Healthcare Cost Inflation"],
    },
    {
      id: "CHN", name: "China", flag: "🇨🇳", code: "CHN", region: "East Asia", coords: [35.8617, 104.1954],
      overallScore: 81.2, globalRank: "#12 Global", rankNum: 12, population: "1.41 Billion", gdpRank: "#2 ($17.7T)",
      overview: "Manufacturing powerhouse advancing rapidly in green tech, high-speed rail, AI deployment, and patent applications.",
      categories: { economy: 91.5, society: 74.3, governance: 60.1, technology: 92.4, education: 79.8, healthcare: 78.2, environment: 58.6, safety: 78.9, equality: 62.4, "digital-government": 86.1 },
      strengths: ["Industrial Output & EV Infrastructure", "Patents & Quantum Computing Patents", "Infrastructure Modernization"],
      improvements: ["Press Freedom & Internet Access", "Governance Transparency Metrics"],
    },
    {
      id: "DEU", name: "Germany", flag: "🇩🇪", code: "DEU", region: "Europe", coords: [51.1657, 10.4515],
      overallScore: 87.8, globalRank: "#5 Global", rankNum: 5, population: "84 Million", gdpRank: "#3 ($4.45T)",
      overview: "Industrial leader with high social security standards, advanced engineering exports, and strong environmental commitments.",
      categories: { economy: 88.9, society: 91.2, governance: 92.4, technology: 88.7, education: 90.5, healthcare: 93.1, environment: 84.6, safety: 89.2, equality: 84.1, "digital-government": 82.5 },
      strengths: ["High Social Mobility & Welfare System", "Precision Engineering & Heavy Machinery Exports", "Rule of Law & Press Freedom Index"],
      improvements: ["Digital Government Transformation Speed", "Venture Capital Availability for Startups"],
    },
    {
      id: "JPN", name: "Japan", flag: "🇯🇵", code: "JPN", region: "East Asia", coords: [36.2048, 138.2529],
      overallScore: 86.9, globalRank: "#7 Global", rankNum: 7, population: "125 Million", gdpRank: "#4 ($4.21T)",
      overview: "High-tech economy famous for public safety, longevity, robotics innovation, and world-class public infrastructure.",
      categories: { economy: 87.2, society: 89.4, governance: 88.5, technology: 89.6, education: 91.8, healthcare: 95.4, environment: 79.2, safety: 94.8, equality: 76.5, "digital-government": 83.4 },
      strengths: ["Public Safety Index & Low Crime", "Universal Health System & High Life Expectancy", "Robotics & Automotive Engineering"],
      improvements: ["Demographic Ageing & Labor Pool Shrinkage", "Gender Equality in Executive Positions"],
    },
  ],
};

export function getWorldMapData(year: Year): MapCountryData[] {
  return worldMapMockByYear[year] || worldMapMockByYear["2025"];
}

export function getScoreColor(score: number, isIndia?: boolean): string {
  if (isIndia) return "#F97316";
  if (score >= 88) return "#10B981";
  if (score >= 82) return "#3B82F6";
  if (score >= 75) return "#6366F1";
  return "#F59E0B";
}
