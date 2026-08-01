import { Year } from "./dashboard";

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

export const worldMapMockByYear: Record<Year, MapCountryData[]> = {
  "2022": [
    {
      id: "IND", name: "India", flag: "🇮🇳", code: "IND", slug: "ind", region: "South Asia", coords: [20.5937, 78.9629],
      overallScore: 64.8, globalRank: "#62 Global", rankNum: 62, population: "1.41 Billion", gdpRank: "#7 ($3.15T)",
      overview: "Post-COVID economic recovery with initial scaling of Digital Public Infrastructure and software exports.",
      categories: { economy: 71.2, society: 56.4, governance: 54.1, technology: 73.8, education: 61.2, healthcare: 58.5, environment: 46.2, safety: 56.0, equality: 52.1, "digital-government": 75.4 },
      strengths: ["Digital Identity & Aadhaar Stack", "Software Engineering Talent & IT Exports", "Post-pandemic Economic Growth Momentum"],
      improvements: ["Air Quality & Carbon Intensity", "Press Freedom & Administrative Simplification", "Healthcare Infrastructure Per Capita"],
      isIndia: true,
    },
    {
      id: "USA", name: "United States", flag: "🇺🇸", code: "USA", slug: "usa", region: "North America", coords: [37.0902, -95.7129],
      overallScore: 86.8, globalRank: "#3 Global", rankNum: 3, population: "332 Million", gdpRank: "#1 ($25.4T)",
      overview: "Leading financial and technological powerhouse with top-tier research universities and capital depth.",
      categories: { economy: 92.5, society: 83.2, governance: 79.5, technology: 94.2, education: 87.1, healthcare: 82.4, environment: 66.1, safety: 70.4, equality: 64.2, "digital-government": 85.1 },
      strengths: ["Tech Frontier & Capital Depth", "Higher Education & Patents"], improvements: ["Healthcare Cost Inflation", "Income Inequality"],
    },
    {
      id: "CHN", name: "China", flag: "🇨🇳", code: "CHN", slug: "chn", region: "East Asia", coords: [35.8617, 104.1954],
      overallScore: 78.9, globalRank: "#14 Global", rankNum: 14, population: "1.42 Billion", gdpRank: "#2 ($17.9T)",
      overview: "Global manufacturing power expanding high-speed infrastructure and technology deployment.",
      categories: { economy: 89.2, society: 71.4, governance: 57.5, technology: 89.8, education: 76.5, healthcare: 75.1, environment: 54.2, safety: 76.1, equality: 59.8, "digital-government": 83.5 },
      strengths: ["Manufacturing Scale & High-Speed Rail", "EV Battery Supply Chains"], improvements: ["Press Freedom", "Regulatory Transparency"],
    },
    {
      id: "DEU", name: "Germany", flag: "🇩🇪", code: "DEU", slug: "deu", region: "Europe", coords: [51.1657, 10.4515],
      overallScore: 86.4, globalRank: "#5 Global", rankNum: 5, population: "83 Million", gdpRank: "#4 ($4.07T)",
      overview: "Industrial and engineering leader with strong social welfare and environmental commitments.",
      categories: { economy: 86.5, society: 89.5, governance: 90.8, technology: 86.4, education: 88.9, healthcare: 91.5, environment: 82.1, safety: 87.5, equality: 82.4, "digital-government": 79.8 },
      strengths: ["Precision Engineering", "Social Welfare"], improvements: ["Digital Government Adoption"],
    },
    {
      id: "JPN", name: "Japan", flag: "🇯🇵", code: "JPN", slug: "jpn", region: "East Asia", coords: [36.2048, 138.2529],
      overallScore: 85.2, globalRank: "#7 Global", rankNum: 7, population: "126 Million", gdpRank: "#3 ($4.23T)",
      overview: "High-tech economy famed for public safety, robotics innovation, and healthcare systems.",
      categories: { economy: 85.4, society: 87.9, governance: 86.8, technology: 87.2, education: 90.1, healthcare: 94.2, environment: 76.8, safety: 93.5, equality: 74.2, "digital-government": 80.5 },
      strengths: ["Public Safety", "Longevity & Health Coverage"], improvements: ["Demographic Aging"],
    },
    {
      id: "GBR", name: "United Kingdom", flag: "🇬🇧", code: "GBR", slug: "gbr", region: "Europe", coords: [55.3781, -3.4360],
      overallScore: 85.2, globalRank: "#8 Global", rankNum: 8, population: "67 Million", gdpRank: "#6 ($3.08T)",
      overview: "Global financial hub with prestigious research universities and fintech innovation.",
      categories: { economy: 83.4, society: 86.5, governance: 87.4, technology: 89.2, education: 91.0, healthcare: 86.5, environment: 79.5, safety: 81.9, equality: 77.1, "digital-government": 87.4 },
      strengths: ["Fintech Hub", "Academic Research Impact"], improvements: ["Public Infrastructure Deficits"],
    },
    {
      id: "SGP", name: "Singapore", flag: "🇸🇬", code: "SGP", slug: "sgp", region: "Southeast Asia", coords: [1.3521, 103.8198],
      overallScore: 90.2, globalRank: "#1 Global", rankNum: 1, population: "5.8 Million", gdpRank: "#34 ($467B)",
      overview: "Global trade and logistics center with top governance rankings and digital government leadership.",
      categories: { economy: 90.5, society: 89.2, governance: 94.8, technology: 92.1, education: 91.8, healthcare: 93.1, environment: 73.8, safety: 95.2, equality: 74.8, "digital-government": 93.4 },
      strengths: ["Ease of Doing Business", "Smart Nation Stack"], improvements: ["Cost of Living"],
    },
    {
      id: "BRA", name: "Brazil", flag: "🇧🇷", code: "BRA", slug: "bra", region: "Latin America", coords: [-14.2350, -51.9253],
      overallScore: 66.8, globalRank: "#68 Global", rankNum: 68, population: "214 Million", gdpRank: "#11 ($1.92T)",
      overview: "Latin America's largest economy, rich in agricultural exports and renewable energy generation.",
      categories: { economy: 68.5, society: 65.2, governance: 58.4, technology: 65.4, education: 64.2, healthcare: 68.1, environment: 66.4, safety: 52.1, equality: 51.4, "digital-government": 74.5 },
      strengths: ["Agribusiness & Bio-Fuels", "Pix Instant Payments"], improvements: ["Urban Safety", "Income Inequality"],
    },
    {
      id: "AUS", name: "Australia", flag: "🇦🇺", code: "AUS", slug: "aus", region: "Oceania", coords: [-25.2744, 133.7751],
      overallScore: 86.0, globalRank: "#6 Global", rankNum: 6, population: "25 Million", gdpRank: "#13 ($1.6T)",
      overview: "High quality of life with abundant mineral resources and solar energy expansion.",
      categories: { economy: 85.0, society: 91.0, governance: 90.2, technology: 83.5, education: 90.0, healthcare: 91.5, environment: 77.0, safety: 89.0, equality: 81.0, "digital-government": 85.5 },
      strengths: ["Human Development", "Critical Minerals"], improvements: ["Manufacturing Diversification"],
    },
    {
      id: "FRA", name: "France", flag: "🇫🇷", code: "FRA", slug: "fra", region: "Europe", coords: [46.2276, 2.2137],
      overallScore: 84.8, globalRank: "#9 Global", rankNum: 9, population: "67 Million", gdpRank: "#7 ($2.95T)",
      overview: "European leader in aerospace, nuclear power generation, and cultural soft power.",
      categories: { economy: 83.5, society: 88.0, governance: 86.0, technology: 86.2, education: 87.5, healthcare: 90.0, environment: 82.0, safety: 81.0, equality: 80.0, "digital-government": 84.5 },
      strengths: ["Nuclear Energy Grid", "Aerospace Engineering"], improvements: ["Fiscal Deficit"],
    },
    {
      id: "ARE", name: "United Arab Emirates", flag: "🇦🇪", code: "ARE", slug: "are", region: "Middle East", coords: [23.4241, 53.8478],
      overallScore: 78.5, globalRank: "#24 Global", rankNum: 24, population: "9.3 Million", gdpRank: "#32 ($480B)",
      overview: "Regional economic hub driving smart cities and global trade diversification.",
      categories: { economy: 84.5, society: 76.5, governance: 78.0, technology: 83.8, education: 74.5, healthcare: 79.8, environment: 60.5, safety: 90.5, equality: 67.8, "digital-government": 88.5 },
      strengths: ["Smart Infrastructure", "Public Safety"], improvements: ["Water Scarcity"],
    },
  ],
  "2023": [
    {
      id: "IND", name: "India", flag: "🇮🇳", code: "IND", slug: "ind", region: "South Asia", coords: [20.5937, 78.9629],
      overallScore: 68.1, globalRank: "#56 Global", rankNum: 56, population: "1.42 Billion", gdpRank: "#5 ($3.39T)",
      overview: "Reached #5 global economy status, Chandrayaan-3 lunar landing success, and internationalization of UPI.",
      categories: { economy: 74.5, society: 58.9, governance: 56.2, technology: 77.2, education: 63.4, healthcare: 60.8, environment: 48.9, safety: 58.4, equality: 54.3, "digital-government": 79.8 },
      strengths: ["Lunar Space Tech & Chandrayaan-3", "UPI International Linkages", "Real GDP Growth Leader (7.2%)"],
      improvements: ["Gender Parity in Workforce", "Urban Environment Quality", "Human Development Index"],
      isIndia: true,
    },
    {
      id: "USA", name: "United States", flag: "🇺🇸", code: "USA", slug: "usa", region: "North America", coords: [37.0902, -95.7129],
      overallScore: 87.5, globalRank: "#3 Global", rankNum: 3, population: "333 Million", gdpRank: "#1 ($26.1T)",
      overview: "Surged in generative AI commercialization and corporate R&D investment.",
      categories: { economy: 93.1, society: 84.1, governance: 80.2, technology: 95.1, education: 87.8, healthcare: 83.2, environment: 67.2, safety: 71.2, equality: 65.1, "digital-government": 86.2 },
      strengths: ["Generative AI Ecosystem", "Capital Markets"], improvements: ["Political Polarization"],
    },
    {
      id: "CHN", name: "China", flag: "🇨🇳", code: "CHN", slug: "chn", region: "East Asia", coords: [35.8617, 104.1954],
      overallScore: 79.8, globalRank: "#13 Global", rankNum: 13, population: "1.41 Billion", gdpRank: "#2 ($17.8T)",
      overview: "Accelerated solar and EV technology exports alongside AI research outputs.",
      categories: { economy: 90.2, society: 72.8, governance: 58.9, technology: 90.8, education: 77.8, healthcare: 76.4, environment: 56.1, safety: 77.4, equality: 60.9, "digital-government": 84.8 },
      strengths: ["EV Expansion & Solar Supply Chain", "Patent Filings"], improvements: ["Real Estate Sector Stabilization"],
    },
    {
      id: "DEU", name: "Germany", flag: "🇩🇪", code: "DEU", slug: "deu", region: "Europe", coords: [51.1657, 10.4515],
      overallScore: 87.0, globalRank: "#5 Global", rankNum: 5, population: "84 Million", gdpRank: "#3 ($4.43T)",
      overview: "Transitioned energy grid away from fossil fuels while maintaining manufacturing quality.",
      categories: { economy: 87.5, society: 90.2, governance: 91.5, technology: 87.4, education: 89.5, healthcare: 92.4, environment: 83.4, safety: 88.2, equality: 83.2, "digital-government": 81.2 },
      strengths: ["Green Energy Grid Acceleration", "Export Quality"], improvements: ["Energy Cost Inflation"],
    },
    {
      id: "JPN", name: "Japan", flag: "🇯🇵", code: "JPN", slug: "jpn", region: "East Asia", coords: [36.2048, 138.2529],
      overallScore: 85.9, globalRank: "#7 Global", rankNum: 7, population: "125 Million", gdpRank: "#4 ($4.21T)",
      overview: "Pioneered automated robotics and public safety innovations.",
      categories: { economy: 86.2, society: 88.5, governance: 87.5, technology: 88.4, education: 91.0, healthcare: 94.8, environment: 78.1, safety: 94.1, equality: 75.4, "digital-government": 82.0 },
      strengths: ["Automated Healthcare & Robotics", "Low Crime Index"], improvements: ["Digital Currency & Cloud Migration"],
    },
    {
      id: "GBR", name: "United Kingdom", flag: "🇬🇧", code: "GBR", slug: "gbr", region: "Europe", coords: [55.3781, -3.4360],
      overallScore: 85.8, globalRank: "#8 Global", rankNum: 8, population: "67 Million", gdpRank: "#6 ($3.34T)",
      overview: "Global financial hub with academic research impact and fintech leadership.",
      categories: { economy: 84.2, society: 87.4, governance: 88.2, technology: 90.4, education: 91.8, healthcare: 87.4, environment: 81.0, safety: 82.8, equality: 78.2, "digital-government": 88.5 },
      strengths: ["Fintech Hub", "Academic Research"], improvements: ["Public Infrastructure"],
    },
    {
      id: "SGP", name: "Singapore", flag: "🇸🇬", code: "SGP", slug: "sgp", region: "Southeast Asia", coords: [1.3521, 103.8198],
      overallScore: 90.8, globalRank: "#1 Global", rankNum: 1, population: "5.9 Million", gdpRank: "#33 ($497B)",
      overview: "Global trade center with top governance and digital government stack.",
      categories: { economy: 91.8, society: 90.4, governance: 95.5, technology: 93.5, education: 92.5, healthcare: 94.0, environment: 75.1, safety: 96.0, equality: 76.1, "digital-government": 94.2 },
      strengths: ["Low Corruption", "Smart Nation"], improvements: ["Cost of Living"],
    },
    {
      id: "BRA", name: "Brazil", flag: "🇧🇷", code: "BRA", slug: "bra", region: "Latin America", coords: [-14.2350, -51.9253],
      overallScore: 67.5, globalRank: "#66 Global", rankNum: 66, population: "215 Million", gdpRank: "#9 ($2.17T)",
      overview: "Latin America's largest economy with agricultural exports and renewable energy.",
      categories: { economy: 71.0, society: 67.2, governance: 60.1, technology: 68.0, education: 66.4, healthcare: 70.2, environment: 68.2, safety: 54.2, equality: 53.1, "digital-government": 77.8 },
      strengths: ["Bio-Fuels", "Pix Payments"], improvements: ["Safety", "Inequality"],
    },
    {
      id: "AUS", name: "Australia", flag: "🇦🇺", code: "AUS", slug: "aus", region: "Oceania", coords: [-25.2744, 133.7751],
      overallScore: 86.5, globalRank: "#6 Global", rankNum: 6, population: "26 Million", gdpRank: "#13 ($1.7T)",
      overview: "High quality of life with abundant mineral resources and solar energy.",
      categories: { economy: 85.8, society: 91.5, governance: 91.0, technology: 84.0, education: 90.8, healthcare: 92.0, environment: 77.8, safety: 89.5, equality: 81.8, "digital-government": 86.0 },
      strengths: ["Human Development", "Clean Energy"], improvements: ["Housing Affordability"],
    },
    {
      id: "FRA", name: "France", flag: "🇫🇷", code: "FRA", slug: "fra", region: "Europe", coords: [46.2276, 2.2137],
      overallScore: 85.2, globalRank: "#9 Global", rankNum: 9, population: "68 Million", gdpRank: "#7 ($3.00T)",
      overview: "European leader in aerospace, nuclear power, and luxury goods.",
      categories: { economy: 84.0, society: 88.5, governance: 86.8, technology: 86.8, education: 88.0, healthcare: 90.8, environment: 82.5, safety: 81.5, equality: 80.8, "digital-government": 85.0 },
      strengths: ["Nuclear Grid", "Aerospace"], improvements: ["Public Debt"],
    },
    {
      id: "ARE", name: "United Arab Emirates", flag: "🇦🇪", code: "ARE", slug: "are", region: "Middle East", coords: [23.4241, 53.8478],
      overallScore: 79.0, globalRank: "#23 Global", rankNum: 23, population: "9.4 Million", gdpRank: "#31 ($495B)",
      overview: "Regional hub driving smart city initiatives and trade diversification.",
      categories: { economy: 85.2, society: 77.5, governance: 78.8, technology: 84.5, education: 75.4, healthcare: 80.5, environment: 61.5, safety: 91.0, equality: 68.5, "digital-government": 89.5 },
      strengths: ["Smart Cities", "Public Safety"], improvements: ["Water Scarcity"],
    },
  ],
  "2024": [
    {
      id: "IND", name: "India", flag: "🇮🇳", code: "IND", slug: "ind", region: "South Asia", coords: [20.5937, 78.9629],
      overallScore: 70.2, globalRank: "#52 Global", rankNum: 52, population: "1.43 Billion", gdpRank: "#5 ($3.55T)",
      overview: "Approved $1.2B IndiaAI mission, initiated semiconductor fabrication, and expanded 5G nationwide.",
      categories: { economy: 76.8, society: 60.5, governance: 57.8, technology: 80.1, education: 65.1, healthcare: 62.5, environment: 50.4, safety: 60.1, equality: 55.8, "digital-government": 82.5 },
      strengths: ["IndiaAI Mission Supercomputing Outlay", "Semiconductor Fab Groundbreaking", "11B+ Monthly UPI Transactions"],
      improvements: ["Press Freedom & Media Regulations", "Air Quality Standards Enforcement"],
      isIndia: true,
    },
    {
      id: "USA", name: "United States", flag: "🇺🇸", code: "USA", slug: "usa", region: "North America", coords: [37.0902, -95.7129],
      overallScore: 88.1, globalRank: "#3 Global", rankNum: 3, population: "334 Million", gdpRank: "#1 ($26.5T)",
      overview: "Led global semiconductor design, cloud compute, and private space technology launches.",
      categories: { economy: 93.8, society: 85.0, governance: 81.0, technology: 95.8, education: 88.4, healthcare: 84.1, environment: 68.0, safety: 71.8, equality: 66.2, "digital-government": 86.8 },
      strengths: ["AI Frontier Compute & Cloud", "Commercial Space Flight"], improvements: ["National Debt Growth"],
    },
    {
      id: "CHN", name: "China", flag: "🇨🇳", code: "CHN", slug: "chn", region: "East Asia", coords: [35.8617, 104.1954],
      overallScore: 80.5, globalRank: "#12 Global", rankNum: 12, population: "1.41 Billion", gdpRank: "#2 ($17.7T)",
      overview: "Expanded autonomous electric transport, industrial automation, and deep space probes.",
      categories: { economy: 91.0, society: 73.8, governance: 59.5, technology: 91.8, education: 78.8, healthcare: 77.5, environment: 57.5, safety: 78.2, equality: 61.8, "digital-government": 85.5 },
      strengths: ["Autonomous EV Infrastructure", "Robotic Factory Density"], improvements: ["Demographic Shift"],
    },
    {
      id: "DEU", name: "Germany", flag: "🇩🇪", code: "DEU", slug: "deu", region: "Europe", coords: [51.1657, 10.4515],
      overallScore: 87.4, globalRank: "#5 Global", rankNum: 5, population: "84 Million", gdpRank: "#3 ($4.45T)",
      overview: "Advanced industrial leader with green energy grid transition and engineering excellence.",
      categories: { economy: 88.2, society: 90.8, governance: 92.0, technology: 88.1, education: 90.1, healthcare: 92.8, environment: 84.0, safety: 88.8, equality: 83.8, "digital-government": 82.0 },
      strengths: ["Welfare System", "Precision Engineering"], improvements: ["Digital Government Transformation"],
    },
    {
      id: "JPN", name: "Japan", flag: "🇯🇵", code: "JPN", slug: "jpn", region: "East Asia", coords: [36.2048, 138.2529],
      overallScore: 86.4, globalRank: "#7 Global", rankNum: 7, population: "125 Million", gdpRank: "#4 ($4.21T)",
      overview: "High-tech economy famed for public safety, longevity, and robotics innovation.",
      categories: { economy: 86.8, society: 89.0, governance: 88.0, technology: 89.0, education: 91.4, healthcare: 95.1, environment: 78.8, safety: 94.5, equality: 76.0, "digital-government": 82.8 },
      strengths: ["Public Safety", "Life Expectancy"], improvements: ["Demographic Aging"],
    },
    {
      id: "GBR", name: "United Kingdom", flag: "🇬🇧", code: "GBR", slug: "gbr", region: "Europe", coords: [55.3781, -3.4360],
      overallScore: 86.1, globalRank: "#8 Global", rankNum: 8, population: "67 Million", gdpRank: "#6 ($3.33T)",
      overview: "Global financial hub with prestigious research universities and fintech leadership.",
      categories: { economy: 84.8, society: 88.0, governance: 88.8, technology: 90.8, education: 92.1, healthcare: 87.8, environment: 81.8, safety: 83.2, equality: 79.0, "digital-government": 89.0 },
      strengths: ["Fintech Hub", "Academic Research Impact"], improvements: ["Public Infrastructure"],
    },
    {
      id: "SGP", name: "Singapore", flag: "🇸🇬", code: "SGP", slug: "sgp", region: "Southeast Asia", coords: [1.3521, 103.8198],
      overallScore: 91.2, globalRank: "#1 Global", rankNum: 1, population: "5.9 Million", gdpRank: "#33 ($501B)",
      overview: "Global trade and logistics center with top governance and digital government stack.",
      categories: { economy: 92.5, society: 91.0, governance: 96.0, technology: 94.0, education: 92.8, healthcare: 94.5, environment: 76.0, safety: 96.2, equality: 76.8, "digital-government": 94.8 },
      strengths: ["Ease of Doing Business", "Smart Nation Stack"], improvements: ["Cost of Living"],
    },
    {
      id: "BRA", name: "Brazil", flag: "🇧🇷", code: "BRA", slug: "bra", region: "Latin America", coords: [-14.2350, -51.9253],
      overallScore: 68.0, globalRank: "#65 Global", rankNum: 65, population: "215 Million", gdpRank: "#9 ($2.17T)",
      overview: "Latin America's largest economy, rich in agricultural exports and renewable energy.",
      categories: { economy: 71.8, society: 68.0, governance: 60.8, technology: 69.0, education: 67.2, healthcare: 71.0, environment: 69.2, safety: 55.0, equality: 53.8, "digital-government": 78.8 },
      strengths: ["Agribusiness", "Pix Payments"], improvements: ["Urban Safety"],
    },
    {
      id: "AUS", name: "Australia", flag: "🇦🇺", code: "AUS", slug: "aus", region: "Oceania", coords: [-25.2744, 133.7751],
      overallScore: 86.8, globalRank: "#6 Global", rankNum: 6, population: "26 Million", gdpRank: "#13 ($1.7T)",
      overview: "High quality of life with mineral resources, solar energy expansion, and education.",
      categories: { economy: 86.1, society: 91.8, governance: 91.2, technology: 84.4, education: 91.0, healthcare: 92.4, environment: 78.1, safety: 89.8, equality: 82.1, "digital-government": 86.4 },
      strengths: ["Human Development", "Clean Energy"], improvements: ["Housing Affordability"],
    },
    {
      id: "FRA", name: "France", flag: "🇫🇷", code: "FRA", slug: "fra", region: "Europe", coords: [46.2276, 2.2137],
      overallScore: 85.5, globalRank: "#9 Global", rankNum: 9, population: "68 Million", gdpRank: "#7 ($3.05T)",
      overview: "European leader in aerospace, nuclear power generation, and luxury goods.",
      categories: { economy: 84.4, society: 88.8, governance: 87.1, technology: 87.1, education: 88.3, healthcare: 91.1, environment: 82.8, safety: 81.8, equality: 81.1, "digital-government": 85.5 },
      strengths: ["Nuclear Energy Grid", "Aerospace"], improvements: ["Fiscal Deficit"],
    },
    {
      id: "ARE", name: "United Arab Emirates", flag: "🇦🇪", code: "ARE", slug: "are", region: "Middle East", coords: [23.4241, 53.8478],
      overallScore: 79.4, globalRank: "#22 Global", rankNum: 22, population: "9.5 Million", gdpRank: "#31 ($504B)",
      overview: "Regional economic hub driving smart cities, AI infrastructure, and trade diversification.",
      categories: { economy: 85.8, society: 78.0, governance: 79.1, technology: 84.8, education: 75.8, healthcare: 81.0, environment: 62.0, safety: 91.4, equality: 69.0, "digital-government": 89.8 },
      strengths: ["Smart City Infrastructure", "Public Safety"], improvements: ["Water Scarcity"],
    },
  ],
  "2025": [
    {
      id: "IND", name: "India", flag: "🇮🇳", code: "IND", slug: "ind", region: "South Asia", coords: [20.5937, 78.9629],
      overallScore: 72.4, globalRank: "#50 Global", rankNum: 50, population: "1.43 Billion", gdpRank: "#5 ($3.75T)",
      overview: "Fastest-growing major economy with world-leading Digital Public Infrastructure (UPI), expanding IT sector, and high demographic dividend.",
      categories: { economy: 78.4, society: 62.1, governance: 58.9, technology: 82.3, education: 66.7, healthcare: 64.2, environment: 52.8, safety: 61.5, equality: 57.3, "digital-government": 84.9 },
      strengths: ["Digital Government & Public Goods (UPI, Aadhaar)", "Tech Ecosystem & AI Talent Density", "High Real GDP Growth Rate (7%+) & Exports", "STEM Graduate Output & Space Tech Innovations"],
      improvements: ["Human Development Index & Universal Sanitation", "Air Quality & Carbon Intensity per Capita", "Press Freedom & Regulatory Modernization"],
      isIndia: true,
    },
    {
      id: "USA", name: "United States", flag: "🇺🇸", code: "USA", slug: "usa", region: "North America", coords: [37.0902, -95.7129],
      overallScore: 88.5, globalRank: "#3 Global", rankNum: 3, population: "335 Million", gdpRank: "#1 ($26.9T)",
      overview: "Global financial and technological leader with top-tier research universities, venture capital depth, and AI innovation.",
      categories: { economy: 94.2, society: 85.5, governance: 81.3, technology: 96.1, education: 88.9, healthcare: 84.6, environment: 68.4, safety: 72.1, equality: 66.8, "digital-government": 87.2 },
      strengths: ["Global Technology & AI Frontier Research", "Capital Markets & Corporate R&D Expenditure", "Higher Education Institutions & Patents"],
      improvements: ["Income Parity & Social Mobility", "Healthcare Cost Inflation"],
    },
    {
      id: "CHN", name: "China", flag: "🇨🇳", code: "CHN", slug: "chn", region: "East Asia", coords: [35.8617, 104.1954],
      overallScore: 81.2, globalRank: "#12 Global", rankNum: 12, population: "1.41 Billion", gdpRank: "#2 ($17.7T)",
      overview: "Manufacturing powerhouse advancing rapidly in green tech, high-speed rail, AI deployment, and patent applications.",
      categories: { economy: 91.5, society: 74.3, governance: 60.1, technology: 92.4, education: 79.8, healthcare: 78.2, environment: 58.6, safety: 78.9, equality: 62.4, "digital-government": 86.1 },
      strengths: ["Industrial Output & EV Infrastructure", "Patents & Quantum Computing Patents", "Infrastructure Modernization"],
      improvements: ["Press Freedom & Internet Access", "Governance Transparency Metrics"],
    },
    {
      id: "DEU", name: "Germany", flag: "🇩🇪", code: "DEU", slug: "deu", region: "Europe", coords: [51.1657, 10.4515],
      overallScore: 87.8, globalRank: "#5 Global", rankNum: 5, population: "84 Million", gdpRank: "#3 ($4.45T)",
      overview: "Industrial leader with high social security standards, advanced engineering exports, and strong environmental commitments.",
      categories: { economy: 88.9, society: 91.2, governance: 92.4, technology: 88.7, education: 90.5, healthcare: 93.1, environment: 84.6, safety: 89.2, equality: 84.1, "digital-government": 82.5 },
      strengths: ["High Social Mobility & Welfare System", "Precision Engineering & Heavy Machinery Exports", "Rule of Law & Press Freedom Index"],
      improvements: ["Digital Government Transformation Speed", "Venture Capital Availability for Startups"],
    },
    {
      id: "JPN", name: "Japan", flag: "🇯🇵", code: "JPN", slug: "jpn", region: "East Asia", coords: [36.2048, 138.2529],
      overallScore: 86.9, globalRank: "#7 Global", rankNum: 7, population: "125 Million", gdpRank: "#4 ($4.21T)",
      overview: "High-tech economy famous for public safety, longevity, robotics innovation, and world-class public infrastructure.",
      categories: { economy: 87.2, society: 89.4, governance: 88.5, technology: 89.6, education: 91.8, healthcare: 95.4, environment: 79.2, safety: 94.8, equality: 76.5, "digital-government": 83.4 },
      strengths: ["Public Safety Index & Low Crime", "Universal Health System & High Life Expectancy", "Robotics & Automotive Engineering"],
      improvements: ["Demographic Ageing & Labor Pool Shrinkage", "Gender Equality in Executive Positions"],
    },
    {
      id: "GBR", name: "United Kingdom", flag: "🇬🇧", code: "GBR", slug: "gbr", region: "Europe", coords: [55.3781, -3.4360],
      overallScore: 86.4, globalRank: "#8 Global", rankNum: 8, population: "67 Million", gdpRank: "#6 ($3.33T)",
      overview: "Global financial hub with prestigious research universities, fintech innovation, and strong soft power influence.",
      categories: { economy: 85.1, society: 88.3, governance: 89.1, technology: 91.2, education: 92.4, healthcare: 88.2, environment: 82.1, safety: 83.5, equality: 79.4, "digital-government": 89.3 },
      strengths: ["Fintech Hub & Global Banking Infrastructure", "Academic Research Impact & Oxbridge Universities", "E-Governance & Digital Public Services"],
      improvements: ["Regional Economic Disparities", "Public Infrastructure Spending Deficits"],
    },
    {
      id: "SGP", name: "Singapore", flag: "🇸🇬", code: "SGP", slug: "sgp", region: "Southeast Asia", coords: [1.3521, 103.8198],
      overallScore: 91.5, globalRank: "#1 Global", rankNum: 1, population: "5.9 Million", gdpRank: "#33 ($501B)",
      overview: "Global trade and logistics center with top governance rankings, digital government leadership, and ease of doing business.",
      categories: { economy: 92.8, society: 91.5, governance: 96.2, technology: 94.5, education: 93.1, healthcare: 94.8, environment: 76.5, safety: 96.5, equality: 77.2, "digital-government": 95.1 },
      strengths: ["Ease of Doing Business & Low Corruption", "Smart Nation Digital Government Stack", "Port & Air Logistics Connectivity"],
      improvements: ["High Domestic Cost of Living", "Land Availability & Carbon Transition"],
    },
    {
      id: "BRA", name: "Brazil", flag: "🇧🇷", code: "BRA", slug: "bra", region: "Latin America", coords: [-14.2350, -51.9253],
      overallScore: 68.2, globalRank: "#65 Global", rankNum: 65, population: "215 Million", gdpRank: "#9 ($2.17T)",
      overview: "Latin America's largest economy, rich in agricultural exports, renewable energy generation, and biodiversity.",
      categories: { economy: 72.1, society: 68.4, governance: 61.2, technology: 69.5, education: 67.8, healthcare: 71.4, environment: 69.8, safety: 55.4, equality: 54.1, "digital-government": 79.2 },
      strengths: ["Agribusiness & Renewable Bio-Fuels", "Pix Digital Instant Payment Network", "Rich Biodiversity & Green Energy Grid"],
      improvements: ["Urban Safety & Internal Peace Metrics", "Gini Index Income Inequality"],
    },
    {
      id: "AUS", name: "Australia", flag: "🇦🇺", code: "AUS", slug: "aus", region: "Oceania", coords: [-25.2744, 133.7751],
      overallScore: 87.1, globalRank: "#6 Global", rankNum: 6, population: "26 Million", gdpRank: "#13 ($1.7T)",
      overview: "High quality of life with abundant mineral resources, solar energy expansion, and strong tertiary education system.",
      categories: { economy: 86.4, society: 92.1, governance: 91.5, technology: 84.8, education: 91.2, healthcare: 92.8, environment: 78.4, safety: 90.1, equality: 82.5, "digital-government": 86.8 },
      strengths: ["Human Development & Air Quality Index", "Critical Minerals & Clean Energy Transition", "Higher Education Ecosystem"],
      improvements: ["Manufacturing Diversification", "Housing Affordability"],
    },
    {
      id: "FRA", name: "France", flag: "🇫🇷", code: "FRA", slug: "fra", region: "Europe", coords: [46.2276, 2.2137],
      overallScore: 85.8, globalRank: "#9 Global", rankNum: 9, population: "68 Million", gdpRank: "#7 ($3.05T)",
      overview: "European leader in aerospace, nuclear power generation, luxury goods, and cultural soft power.",
      categories: { economy: 84.8, society: 89.2, governance: 87.4, technology: 87.5, education: 88.6, healthcare: 91.4, environment: 83.2, safety: 82.1, equality: 81.5, "digital-government": 85.9 },
      strengths: ["Low-Carbon Nuclear Energy Grid", "Aerospace Engineering & High-Speed Transit", "Universal Healthcare Coverage"],
      improvements: ["Fiscal Deficit & Public Debt Ratio", "Labor Market Rigidity"],
    },
    {
      id: "ARE", name: "United Arab Emirates", flag: "🇦🇪", code: "ARE", slug: "are", region: "Middle East", coords: [23.4241, 53.8478],
      overallScore: 79.8, globalRank: "#22 Global", rankNum: 22, population: "9.5 Million", gdpRank: "#31 ($504B)",
      overview: "Regional economic hub driving smart cities, AI infrastructure investment, and global trade diversification.",
      categories: { economy: 86.2, society: 78.4, governance: 79.5, technology: 85.1, education: 76.2, healthcare: 81.4, environment: 62.5, safety: 91.8, equality: 69.4, "digital-government": 90.2 },
      strengths: ["Smart City Infrastructure & AI Investment", "Public Safety & High Income per Capita", "Global Logistics"],
      improvements: ["Water Scarcity & Extreme Heat Adaptability", "Domestic Talent Generation"],
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
