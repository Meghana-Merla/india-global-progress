import { Year } from "./dashboard";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
  sources?: string[];
}

export interface AIInsightCardData {
  id: string;
  title: string;
  subtitle: string;
  iconName: "Brain" | "TrendingUp" | "AlertTriangle" | "Compass" | "Sparkles";
  badge: string;
  badgeVariant: "emerald" | "amber" | "indigo" | "primary" | "rose";
  content: string;
  keyPoints: string[];
}

export interface AIYearData {
  insightCards: AIInsightCardData[];
  suggestedPrompts: string[];
  mockResponsesMap: Record<string, string>;
}

export const aiMockByYear: Record<Year, AIYearData> = {
  "2022": {
    suggestedPrompts: [
      "Summarize India's 2022 Economic Performance.",
      "How did UPI scale in 2022?",
      "Explain India's 2022 Innovation ranking.",
      "Compare India and UK in 2022.",
      "What were India's main challenges in 2022?",
    ],
    insightCards: [
      {
        id: "exec-summary",
        title: "Executive Summary",
        subtitle: "High-level overview of India's global standing in 2022",
        iconName: "Brain",
        badge: "2022 Synthesis",
        badgeVariant: "primary",
        content:
          "In 2022, India demonstrated resilient macroeconomic recovery following COVID-19 disruptions, ranking #7 globally in GDP ($3.15T). Key growth pillars included UPI payment adoption, IT service exports, and steady climb to #46 in the Global Innovation Index.",
        keyPoints: [
          "#7 Global Economy ($3.15T nominal GDP)",
          "#18 in Digital Government infrastructure rollout",
          "#46 in Global Innovation Index (leading lower-middle income economies)",
          "Over 7 billion monthly UPI digital payment transactions",
        ],
      },
      {
        id: "key-strengths",
        title: "Key Strengths",
        subtitle: "Core drivers of competitive advantage in 2022",
        iconName: "TrendingUp",
        badge: "Growth Drivers",
        badgeVariant: "emerald",
        content:
          "India's financial tech ecosystem and software export resilience formed the cornerstone of its international positioning in 2022, driven by Aadhaar and UPI digital public rails.",
        keyPoints: [
          "UPI scaling reaching 7B+ monthly transactions",
          "Software & IT services exports hitting record volume",
          "Post-pandemic manufacturing and domestic consumption recovery",
          "High annual STEM graduate throughput",
        ],
      },
      {
        id: "areas-of-concern",
        title: "Areas of Concern",
        subtitle: "Lagging metrics requiring policy attention in 2022",
        iconName: "AlertTriangle",
        badge: "Attention Needed",
        badgeVariant: "rose",
        content:
          "Human Development (#138), Press Freedom (#150), and air quality indices highlighted significant structural gaps between economic scale and social/environmental indicators.",
        keyPoints: [
          "HDI Rank #138 under post-pandemic health spending pressures",
          "World Press Freedom rank #150",
          "Urban air particulate levels in major metro centers",
          "Gender workforce participation deficit",
        ],
      },
      {
        id: "policy-recommendations",
        title: "Policy Recommendations",
        subtitle: "Strategic directives for 2022-2024 acceleration",
        iconName: "Compass",
        badge: "Strategic Directions",
        badgeVariant: "indigo",
        content:
          "Recommendations emphasized expanding Gati Shakti infrastructure coordination, boosting semiconductor production incentives, and elevating healthcare spending targets.",
        keyPoints: [
          "Fast-track Gati Shakti multimodal transport corridor integration",
          "Implement PLI schemes for electronics and semiconductor fabs",
          "Expand Ayushman Bharat health cover to rural tier-3 districts",
          "Incentivize rooftop solar installation",
        ],
      },
      {
        id: "future-outlook",
        title: "Future Outlook",
        subtitle: "Projections framed from 2022 baseline",
        iconName: "Sparkles",
        badge: "2025 Projection",
        badgeVariant: "amber",
        content:
          "Models projected India to overtake the UK and Germany by 2027-2028, with Digital Public Infrastructure serving as a multiplier across financial inclusion and e-commerce.",
        keyPoints: [
          "Projected $3.5T GDP horizon by 2024",
          "Target top-40 rank in Global Innovation Index by 2024",
          "5G rollout expected to add $450B to economy by 2030",
          "Target 50% non-fossil power capacity by 2030",
        ],
      },
    ],
    mockResponsesMap: {
      "Summarize India's 2022 Economic Performance.":
        "### **India 2022 Economic Summary**\n\nIn 2022, India ranked **#7 Globally** with a nominal GDP of **$3.15 Trillion**:\n\n- **Post-COVID Recovery:** GDP grew by over **7.0%**, outperforming major peer economies.\n- **Fintech Leadership:** UPI processed over 7 Billion transactions monthly.\n- **Innovation Climb:** India reached **#46 in GII**, up 2 positions from 2021.",

      "How did UPI scale in 2022?":
        "### **UPI Growth Trajectory in 2022**\n\n- UPI transaction volumes crossed **7.4 Billion monthly transactions** by late 2022.\n- Accounted for over **52% of all digital retail payments** in India.\n- Layed the groundwork for international cross-border linkages starting in 2023.",

      "Explain India's 2022 Innovation ranking.":
        "### **WIPO Global Innovation Index 2022**\n\n- **Rank:** #46 Global\n- **Score:** 35.1 / 100\n- **Key Drivers:** ICT service exports, STEM graduate concentration, and startup density in Bengaluru, Delhi-NCR, and Hyderabad.",

      "Compare India and UK in 2022.":
        "### **India vs UK (2022)**\n\n- **GDP:** India surpassed the UK in late 2022 to become the **#5 largest economy** during Q4 2022 ($3.15T vs $3.08T).\n- **Growth Rate:** India (~7.0%) vs UK (~4.1%).\n- **HDI:** UK (#18) led India (#138) in per capita human development metrics.",

      "What were India's main challenges in 2022?":
        "### **Top Challenges in 2022**\n\n1. **Human Development Index (#138)** under health expenditure constraints.\n2. **Press Freedom Index (#150)** facing regulatory scrutiny.\n3. **Global Energy Inflation** following geopolitical conflict impact on crude import bills.",
    },
  },
  "2023": {
    suggestedPrompts: [
      "Summarize Chandrayaan-3 and G20 impact in 2023.",
      "How did India reach #5 GDP rank?",
      "Explain India's 2023 Innovation progress.",
      "What were India's 2023 G20 DPI outcomes?",
      "Analyze India's 2023 AI Readiness jump.",
    ],
    insightCards: [
      {
        id: "exec-summary",
        title: "Executive Summary",
        subtitle: "High-level overview of India's global standing in 2023",
        iconName: "Brain",
        badge: "2023 Synthesis",
        badgeVariant: "primary",
        content:
          "2023 marked a landmark year for India: reaching #5 in global GDP ($3.39T), executing the Chandrayaan-3 lunar south pole landing, and hosting the G20 Summit with global endorsement of India's Digital Public Infrastructure model.",
        keyPoints: [
          "#5 Global Economy ($3.39T GDP)",
          "#1 Lunar South Pole Landing (Chandrayaan-3)",
          "#40 Global Innovation Index climb",
          "Global G20 Consensus on Digital Public Goods",
        ],
      },
      {
        id: "key-strengths",
        title: "Key Strengths",
        subtitle: "Core drivers of competitive advantage in 2023",
        iconName: "TrendingUp",
        badge: "Landmark Milestones",
        badgeVariant: "emerald",
        content:
          "Space technology achievements, G20 multilateral diplomacy, and international UPI payment connections (Singapore, UAE) elevated India's global tech profile.",
        keyPoints: [
          "ISRO space exploration efficiency and cost-effectiveness",
          "Internationalization of UPI fintech infrastructure",
          "7.2% real GDP annual growth rate",
          "Expanding 5G telecom coverage to 500+ cities",
        ],
      },
      {
        id: "areas-of-concern",
        title: "Areas of Concern",
        subtitle: "Lagging metrics requiring policy attention in 2023",
        iconName: "AlertTriangle",
        badge: "Attention Needed",
        badgeVariant: "rose",
        content:
          "Press Freedom (#153) and urban environmental indicators continued to lag behind rapid macroeconomic and technology progress.",
        keyPoints: [
          "Press Freedom rank #153",
          "HDI Rank #136",
          "Monsoon-related agricultural volatility",
          "Air pollution levels in northern industrial corridors",
        ],
      },
      {
        id: "policy-recommendations",
        title: "Policy Recommendations",
        subtitle: "Strategic roadmap formulated in 2023",
        iconName: "Compass",
        badge: "Roadmap 2023",
        badgeVariant: "indigo",
        content:
          "Key priorities included approving a national AI Supercomputing outlay, supporting domestic semiconductor fabs, and scaling green hydrogen production.",
        keyPoints: [
          "Establish National Compute Grid for AI innovation",
          "Subsidize semiconductor foundry construction in Gujarat & Assam",
          "Increase healthcare allocation in annual union budget",
          "Promote women-led startup initiatives",
        ],
      },
      {
        id: "future-outlook",
        title: "Future Outlook",
        subtitle: "Projections framed from 2023 baseline",
        iconName: "Sparkles",
        badge: "2028 Horizon",
        badgeVariant: "amber",
        content:
          "Projections indicated India would reach $5 Trillion GDP by 2027-2028 and break into top-35 in AI Readiness with public GPU cluster deployment.",
        keyPoints: [
          "On track for $4 Trillion GDP by 2025-2026",
          "Potential top-35 AI Readiness rank by 2025",
          "UPI monthly volumes targeted to exceed 10 Billion",
          "50% non-fossil power capacity target by 2030",
        ],
      },
    ],
    mockResponsesMap: {
      "Summarize Chandrayaan-3 and G20 impact in 2023.":
        "### **2023 Landmark Milestones**\n\n- **Chandrayaan-3:** India became the 1st country to land near the Moon's South Pole on August 23, 2023.\n- **G20 New Delhi Summit:** Unanimous adoption of the New Delhi Declaration and global framework for Digital Public Infrastructure.",

      "How did India reach #5 GDP rank?":
        "### **Ascent to #5 Global Economy**\n\nIndia's nominal GDP reached **$3.39 Trillion** in 2023, driven by **7.2% real growth**, robust domestic consumer spending, and record capital expenditures in national highways and railways.",

      "Explain India's 2023 Innovation progress.":
        "### **WIPO GII 2023 Highlights**\n\n- **Rank:** #40 Global (jumped 6 positions from 2021).\n- **Strengths:** Software exports, STEM graduates, and unicorn density.",

      "What were India's 2023 G20 DPI outcomes?":
        "### **G20 Digital Public Infrastructure Framework**\n\n- Global endorsement of India's Open source stack (UPI, Aadhaar, DigiLocker).\n- Launch of the Global Digital Public Infrastructure Repository (GDPIR).",

      "Analyze India's 2023 AI Readiness jump.":
        "### **AI Readiness Climb (#41 Global)**\n\nIndia jumped 7 spots to #41 in Oxford Insights AI Readiness, backed by national AI policies, expanding data center capacity, and tech workforce size.",
    },
  },
  "2024": {
    suggestedPrompts: [
      "Summarize India's 2024 AI Mission launch.",
      "What is the status of Semiconductor fabs in 2024?",
      "How did UPI perform in 2024?",
      "Explain India's 2024 Innovation index rank.",
      "What are India's primary goals for 2025?",
    ],
    insightCards: [
      {
        id: "exec-summary",
        title: "Executive Summary",
        subtitle: "High-level overview of India's global standing in 2024",
        iconName: "Brain",
        badge: "2024 Synthesis",
        badgeVariant: "primary",
        content:
          "In 2024, India reached $3.55T GDP, approved the $1.2B IndiaAI Mission to deploy 10,000+ GPUs, broke ground on commercial semiconductor fabs, and processed over 11B monthly UPI payments.",
        keyPoints: [
          "#5 Global Economy ($3.55T GDP)",
          "#36 in AI Readiness Index (jumped 5 positions)",
          "#11 in Digital Government deployment",
          "Cabinet approval of $1.2B IndiaAI Mission",
        ],
      },
      {
        id: "key-strengths",
        title: "Key Strengths",
        subtitle: "Core drivers of competitive advantage in 2024",
        iconName: "TrendingUp",
        badge: "Tech Superpower",
        badgeVariant: "emerald",
        content:
          "National compute capacity expansion, commercial semiconductor factory construction, and 5G telecom coverage across 98% of districts accelerated India's digital ecosystem.",
        keyPoints: [
          "IndiaAI Mission 10,000+ GPU supercomputing cluster",
          "3 Commercial Semiconductor fabs under construction",
          "11B+ monthly transactions on UPI",
          "250M+ registered users on DigiLocker",
        ],
      },
      {
        id: "areas-of-concern",
        title: "Areas of Concern",
        subtitle: "Lagging metrics requiring policy attention in 2024",
        iconName: "AlertTriangle",
        badge: "Attention Needed",
        badgeVariant: "rose",
        content:
          "Press Freedom (#157) and Gender Parity (#127) required urgent structural reforms to match technological and macroeconomic acceleration.",
        keyPoints: [
          "Press Freedom Rank #157",
          "HDI Rank #135",
          "Female labor force participation gap",
          "Urban air quality in northern plains",
        ],
      },
      {
        id: "policy-recommendations",
        title: "Policy Recommendations",
        subtitle: "Strategic roadmap for 2024-2026",
        iconName: "Compass",
        badge: "Strategic Policy",
        badgeVariant: "indigo",
        content:
          "Policy focus centered on scaling R&D tax credits for deep-tech, promoting female STEM scholarships, and enforcing cleaner emission standards in top 20 cities.",
        keyPoints: [
          "Expand R&D tax incentives for deep-tech and biotech startups",
          "Launch national female STEM apprenticeship program",
          "Accelerate EV bus fleet adoption in public transport",
          "Streamline patent examination timelines at IPO office",
        ],
      },
      {
        id: "future-outlook",
        title: "Future Outlook",
        subtitle: "Projections framed from 2024 baseline",
        iconName: "Sparkles",
        badge: "2030 Roadmap",
        badgeVariant: "amber",
        content:
          "Modeling projected India becoming the #3 global economy by 2027-2028 with domestic semiconductor fabs coming online by 2025-2026.",
        keyPoints: [
          "Target $3.75T GDP in 2025 and $5T by 2027",
          "Projected top-30 AI Readiness rank by 2026",
          "First domestic silicon chips expected to ship by 2025",
          "Target 50% non-fossil energy capacity by 2030",
        ],
      },
    ],
    mockResponsesMap: {
      "Summarize India's 2024 AI Mission launch.":
        "### **IndiaAI Mission Overview (2024)**\n\n- **Outlay:** ₹10,372 Crore (~$1.2 Billion).\n- **GPU Compute:** Setting up a public-private partnership cluster of **10,000+ GPUs**.\n- **Foundational Models:** Development of indigenous multi-lingual AI foundational models for Indian languages.",

      "What is the status of Semiconductor fabs in 2024?":
        "### **Semiconductor Fabs in 2024**\n\n- **Gujarat Fab (Dholera):** Tata Electronics + Powerchip (PSMC) $11B fab broke ground.\n- **Assam OSAT Plant:** Tata $3B assembly and testing facility started construction.\n- **Sanand Micron Plant:** Testing facility completed trial runs.",

      "How did UPI perform in 2024?":
        "### **UPI Performance 2024**\n\n- **Monthly Volume:** Sustained **11+ Billion monthly transactions**.\n- **Annual Value:** Crossed **$2 Trillion annualized payment value**.\n- **Global Expansion:** Launched in France (Eiffel Tower), Mauritius, Sri Lanka, and Nepal.",

      "Explain India's 2024 Innovation index rank.":
        "### **WIPO GII 2024**\n\n- **Rank:** #40 Global\n- India maintained top position in Central & Southern Asia for the 12th consecutive year.",

      "What are India's primary goals for 2025?":
        "### **Top Goals for 2025**\n\n1. Overtake Japan to reach **#4 GDP Rank**.\n2. Ship first domestically packaged semiconductor chips.\n3. Expand AI compute infrastructure to 15,000 GPUs.",
    },
  },
  "2025": {
    suggestedPrompts: [
      "Why is India's Innovation Rank improving?",
      "Compare India and China.",
      "Explain India's Healthcare ranking.",
      "What should India improve next?",
      "Summarize India's global performance.",
    ],
    insightCards: [
      {
        id: "exec-summary",
        title: "Executive Summary",
        subtitle: "High-level overview of India's global standing in 2025-2026",
        iconName: "Brain",
        badge: "AI Synthesized",
        badgeVariant: "primary",
        content:
          "India continues its upward trajectory in technology infrastructure, digital governance, and economic scale. Ranked #5 globally in real GDP ($3.75T) and #9 in Digital Government, India shows exceptional strength in Digital Public Infrastructure (UPI, Aadhaar) and tech ecosystem growth. Strategic focus is required in human development, healthcare access, and press freedom indices to match economic scale with social indicators.",
        keyPoints: [
          "#5 Global Economy with $3.75T real GDP",
          "#9 Global leader in Digital Public Infrastructure",
          "#39 in Global Innovation Index (up from #46 in 2021)",
          "Strong growth trajectory in STEM graduates and computing capacity",
        ],
      },
      {
        id: "key-strengths",
        title: "Key Strengths",
        subtitle: "Core pillars driving international competitive advantage",
        iconName: "TrendingUp",
        badge: "High Growth",
        badgeVariant: "emerald",
        content:
          "India's primary global advantages stem from its rapid digitalization, public fintech innovation, software engineering export volume, and high demographic dividend. The nation leads developing economies in public digital services adoption and AI readiness expansion.",
        keyPoints: [
          "Digital Payment Scalability (UPI processing 13B+ monthly transactions)",
          "Government AI Readiness Index jump to #32 Global",
          "Robust ICT services exports and tech startup density",
          "Renewable Energy installation pace (Solar & Green Hydrogen push)",
        ],
      },
      {
        id: "areas-of-concern",
        title: "Areas of Concern",
        subtitle: "Key metrics trailing global peer averages",
        iconName: "AlertTriangle",
        badge: "Attention Needed",
        badgeVariant: "rose",
        content:
          "While macroeconomic indicators show rapid improvement, social development metrics present structural challenges. Human development rank (#134), Press Freedom (#159), and Gender Parity (#129) highlight areas where targeted institutional reform and social investment are essential.",
        keyPoints: [
          "HDI Rank #134 due to per capita health expenditure gaps",
          "World Press Freedom Index rank #159 reflecting regulatory hurdles",
          "Global Gender Gap rank #129 in economic participation",
          "Air Quality & Urban Carbon Intensity metrics in major metropolitan zones",
        ],
      },
      {
        id: "policy-recommendations",
        title: "Policy Recommendations",
        subtitle: "Actionable strategic roadmap for rank acceleration",
        iconName: "Compass",
        badge: "Strategic Roadmap",
        badgeVariant: "indigo",
        content:
          "To accelerate India's path toward top-20 status across global benchmark indices, policy intervention should prioritize healthcare spending expansion, STEM gender inclusion programs, environmental air quality standards enforcement, and streamlined R&D tax incentives.",
        keyPoints: [
          "Increase public health expenditure target to 2.5% of GDP",
          "Expand national R&D incentives to foster deep-tech patent filings",
          "Incentivize female workforce participation in high-growth STEM sectors",
          "Strengthen judicial process speed and regulatory predictability for foreign investment",
        ],
      },
      {
        id: "future-outlook",
        title: "Future Outlook",
        subtitle: "Predictive trends and 2030 projection model",
        iconName: "Sparkles",
        badge: "2030 Vision",
        badgeVariant: "amber",
        content:
          "Predictive modeling indicates India is on track to become the #3 global economy by 2028. Continued investment in digital public infrastructure, green hydrogen production, and semiconductor manufacturing could propel India into the top-30 in Global Innovation and top-20 in AI Readiness by 2030.",
        keyPoints: [
          "Projected $5 Trillion economy target achievable by 2027-2028",
          "Potential top-30 GII rank with semiconductor fab manufacturing online",
          "Digital Government adoption projected to reach 92% of public services by 2028",
          "Green energy grid transition aiming for 50% non-fossil fuel capacity by 2030",
        ],
      },
    ],
    mockResponsesMap: {
      "Why is India's Innovation Rank improving?":
        "### **Why India's Innovation Rank Is Improving**\n\nIndia's climb to **#39 in the Global Innovation Index (WIPO)** is driven by three primary catalysts:\n\n1. **Digital Public Infrastructure (DPI):** Nationwide adoption of UPI, Aadhaar, and Open Network for Digital Commerce (ONDC) has drastically lowered transaction friction for tech startups.\n2. **ICT Services Exports & Tech Talent:** India leads lower-middle-income economies in software services exports, producing over **2.2 million STEM graduates annually**.\n3. **Venture Capital & Unicorn Ecosystem:** Dense startup clusters in Bengaluru, Delhi-NCR, and Mumbai have accelerated patent filings in AI, fintech, and climate tech.\n\n> *Key Milestone:* India has improved 7 positions since 2021, making it one of the top innovation overperformers relative to GDP per capita.",

      "Compare India and China.":
        "### **India vs. China: Strategic Benchmark Summary**\n\n- **Economic Scale & GDP:** China ranks **#2 ($17.7T)** while India ranks **#5 ($3.75T)**. India maintains a higher annual GDP growth rate (~7.2% vs ~4.8%).\n- **Digital Government:** India ranks **#9 Global** (led by real-time UPI fintech stack), closely matching China (**#7 Global**).\n- **Technology & AI:** China ranks **#2** in AI Readiness and Patent Output, while India ranks **#32**, supported by rapid compute expansion.\n- **Demographics:** India boasts a younger median age (**28.4 years** vs China's **39.0 years**), offering a longer demographic dividend window.",

      "Explain India's Healthcare ranking.":
        "### **Analysis of India's Healthcare Ranking (#92 Global)**\n\nIndia's **Healthcare Index score is 64.2 / 100**, placing it **#92 globally**. Key drivers include:\n\n- **Strengths:** Low cost of medical procedures, world leading pharmaceutical manufacturing ('Pharmacy of the World'), and rapid expansion of Ayushman Bharat health insurance covering 500M+ citizens.\n- **Challenges:** Public healthcare spending (~1.3% of GDP) trails the global average (3.8%). Rural doctor-to-patient ratios and bed capacity remain key bottlenecks.\n- **Trajectory:** Expanding digital tele-medicine (eSanjeevani) and AI diagnostics is expected to lift scores by +4 points over the next 2-3 years.",

      "What should India improve next?":
        "### **Top 4 Strategic Focus Areas for India**\n\n1. **Public Health Spending:** Raise health budget from 1.3% to **2.5% of GDP** to improve HDI ranking (#134).\n2. **Press Freedom & Regulatory Transparency:** Address international perception gaps and administrative delays to improve RSF score (#159).\n3. **Gender Workforce Parity:** Implement female STEM scholarship and childcare subsidies to raise gender gap rank (#129).\n4. **Urban Environmental Quality:** Accelerate industrial emissions standards and EV fleet adoption in top 20 cities.",

      "Summarize India's global performance.":
        "### **India Global Performance Executive Briefing**\n\nIndia demonstrates a **dual-speed profile** in international rankings:\n\n- 🚀 **High Performers:** Real GDP Rank (**#5**), Digital Government (**#9**), Technology & IT Exports (**#12**), Government AI Readiness (**#32**).\n- ⚖️ **Moderate Performers:** Global Innovation Index (**#39**), Ease of Logistics (**#38**).\n- 📈 **Growth Opportunities:** Human Development Index (**#134**), Press Freedom (**#159**), Gender Gap (**#129**).\n\n*Overall Assessment:* India's macroeconomic momentum and digital foundation provide strong leverage to elevate social development metrics over the coming decade.",
    },
  },
};

export function getAIData(year: Year): AIYearData {
  return aiMockByYear[year] || aiMockByYear["2025"];
}

export async function fetchAIResponseByYear(year: Year, userPrompt: string): Promise<string> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const yearData = getAIData(year);
  if (yearData.mockResponsesMap[userPrompt]) {
    return yearData.mockResponsesMap[userPrompt];
  }

  return `### **IndiaLens Intelligence Briefing**\n\nBased on global rankings datasets for **"${userPrompt}"**:\n\nIndia's global position demonstrates steady structural progress across technology and macroeconomic indicators. Strategic alignment between public infrastructure investments and private innovation continues to boost international rankings.\n\n- **Primary Driver:** Digital public goods scalability and demographic dividend.\n- **Indicator Focus:** Active execution of national digitalization, high STEM graduate throughput, and manufacturing PLI goals.\n\n*Source: IndiaLens Knowledge Graph & Authoritative Global Datasets.*`;
}
