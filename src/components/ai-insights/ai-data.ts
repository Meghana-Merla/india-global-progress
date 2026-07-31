import {
  Brain,
  Sparkles,
  TrendingUp,
  AlertTriangle,
  FileCheck,
  Compass,
  LucideIcon,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";

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

export const suggestedPrompts = [
  "Why is India's Innovation Rank improving?",
  "Compare India and China.",
  "Explain India's Healthcare ranking.",
  "What should India improve next?",
  "Summarize India's global performance.",
];

export const mockInsightCards: AIInsightCardData[] = [
  {
    id: "exec-summary",
    title: "Executive Summary",
    subtitle: "High-level overview of India's global standing in 2025-2026",
    iconName: "Brain",
    badge: "AI Synthesized",
    badgeVariant: "primary",
    content:
      "India continues its upward trajectory in technology infrastructure, digital governance, and economic scale. Ranked #5 globally in real GDP and #9 in Digital Government, India shows exceptional strength in Digital Public Infrastructure (UPI, Aadhaar) and tech ecosystem growth. Strategic focus is required in human development, healthcare access, and press freedom indices to match economic scale with social indicators.",
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
      "To accelerate India's path toward top-20 status across global benchmark indices, policy intervention should prioritize healthcare spending expansion, STEM gender inclusion programs, environmental air quality standards enforcement, and stream-lined R&D tax incentives.",
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
];

export const mockResponsesMap: Record<string, string> = {
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
};

/**
 * Service function to simulate API calls (e.g. Gemini API backend)
 */
export async function fetchAIResponse(userPrompt: string): Promise<string> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Match prompt or return customized dynamic answer
  if (mockResponsesMap[userPrompt]) {
    return mockResponsesMap[userPrompt];
  }

  return `### **IndiaLens AI Analysis**\n\nBased on real-time intelligence for **"${userPrompt}"**:\n\nIndia's current global position demonstrates significant progress across core technology and economic metrics. Strategic alignment between public infrastructure investments and private innovation continues to boost international indicator rankings.\n\n- **Primary Driver:** Digital public goods and demographic advantage.\n- **Target Projection:** Continued rank improvements expected across 2026-2028 index releases.\n\n*Source: IndiaLens AI Knowledge Graph & Global Indicator Datasets.*`;
}
