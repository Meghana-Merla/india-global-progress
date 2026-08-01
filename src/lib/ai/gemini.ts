import { AIChatRequest } from "./types";
import { buildSystemPromptForRequest, detectIntent, extractEntity } from "./prompts";

const GEMINI_MODEL = "gemini-2.5-flash";
const MAX_RETRIES = 3;
const INITIAL_BACKOFF_MS = 1000;
const TIMEOUT_MS = 15000;

async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function callGeminiRawAPI(promptText: string): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY environment variable is not configured");
  }

  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`;

  let attempt = 0;
  let lastError: Error | null = null;

  while (attempt < MAX_RETRIES) {
    attempt++;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: promptText,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.3,
            maxOutputTokens: 1500,
          },
        }),
        signal: controller.signal,
      });

      clearTimeout(timer);

      if (response.ok) {
        const data = await response.json();
        const candidateText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (candidateText) {
          return candidateText.trim();
        }
        throw new Error("Empty candidate response from Gemini API");
      }

      const status = response.status;
      const errorText = await response.text().catch(() => "");

      if (status === 429 || status === 503 || status === 500) {
        lastError = new Error(`Gemini API HTTP ${status}: ${errorText}`);
        const backoff = INITIAL_BACKOFF_MS * Math.pow(2, attempt - 1);
        console.warn(
          `[Gemini AI] Attempt ${attempt}/${MAX_RETRIES} returned HTTP ${status}. Retrying in ${backoff}ms...`
        );
        await sleep(backoff);
        continue;
      }

      throw new Error(`Gemini API HTTP ${status}: ${errorText}`);
    } catch (err: any) {
      clearTimeout(timer);
      if (err.name === "AbortError") {
        lastError = new Error(`Gemini API call timed out after ${TIMEOUT_MS}ms`);
      } else {
        lastError = err;
      }

      if (attempt < MAX_RETRIES) {
        const backoff = INITIAL_BACKOFF_MS * Math.pow(2, attempt - 1);
        console.warn(
          `[Gemini AI] Attempt ${attempt}/${MAX_RETRIES} error: ${err.message}. Retrying in ${backoff}ms...`
        );
        await sleep(backoff);
      }
    }
  }

  throw lastError || new Error("Gemini API call failed after retries");
}

export async function generateAIIntelligence(
  req: AIChatRequest
): Promise<{ content: string; summary: string; sources: string[] }> {
  const promptText = buildSystemPromptForRequest(req);
  const intent = detectIntent(req.question, {
    pageContext: req.pageContext,
    selectedCountry: req.selectedCountry,
    comparisonCountry: req.comparisonCountry,
  });

  try {
    const rawOutput = await callGeminiRawAPI(promptText);
    return {
      content: rawOutput,
      summary: rawOutput,
      sources: ["Gemini 2.5 Flash Engine", "Global Indicator Datasets"],
    };
  } catch (err: any) {
    console.warn("[Gemini AI Falling Back to Natural Engine]", err.message);
    const fallbackContent = generateNaturalFallbackResponse(req, intent);
    return {
      content: fallbackContent,
      summary: fallbackContent,
      sources: ["IndiaLens Intelligence Engine"],
    };
  }
}

function generateNaturalFallbackResponse(req: AIChatRequest, intent: string): string {
  const q = req.question.toLowerCase().trim();
  const entityDetails = extractEntity(req.question);
  const country = req.selectedCountry || "India";

  if (intent === "indicator-explanation") {
    switch (entityDetails.entity) {
      case "hdi":
        return `### **Human Development Index (HDI) Analysis**\n\n${country} ranks **#134 globally** on the UNDP Human Development Index with a composite score of **0.644** (Medium Human Development category).\n\n**Core Component Metrics:**\n- **Life Expectancy at Birth:** 67.2 years\n- **Expected Years of Schooling:** 12.6 years\n- **Mean Years of Schooling:** 6.7 years\n- **GNI per Capita (PPP):** $6,950\n\n**Key Factors:**\n1. **Education Access:** Significant progress in school enrollment and digital learning platforms (SWAYAM, DIKSHA), elevating expected schooling duration.\n2. **Health Spending Gap:** Public healthcare expenditure (~1.3% of GDP) trails G20 peer averages, representing the primary structural constraint on life expectancy and health outcomes.\n3. **Trajectory:** The score has improved by +0.012 over the recent evaluation window, supported by clean water (Jal Jeevan Mission) and digital welfare distribution.`;

      case "healthcare":
        return `### **Healthcare Performance Overview**\n\n${country} ranks **#92 globally** on the WHO Universal Health Coverage Index with an overall domain score of **64.2 / 100**.\n\n**Key Performance Vectors:**\n- **Universal Insurance Coverage:** Ayushman Bharat PM-JAY provides health cover to over 500 million beneficiaries across 12,000+ empaneled hospitals.\n- **Pharmaceutical Manufacturing:** ${country} produces over 20% of global generic medicines and 60% of global vaccines, earning $25.4 Billion in pharma exports.\n- **Public Spending Deficit:** Government health spending stands at ~1.3% of GDP compared to the WHO global benchmark target of 2.5% to 3.8%.\n- **Digital Health Stack:** Over 400 million Ayushman Bharat Health Accounts (ABHA) created for electronic health records under ABDM.`;

      case "gdp":
        return `### **Economic Performance & Macroeconomic Overview**\n\n${country} ranks as the **#5 largest economy globally** with a nominal GDP of **$3.75 Trillion** and an annual real growth rate of **7.2%**, outperforming major G20 peer economies.\n\n**Macroeconomic Highlights:**\n- **Nominal GDP:** $3.75 Trillion (#5 Global)\n- **Real GDP Growth:** 7.2%\n- **DPI Acceleration:** Over 13 Billion monthly real-time UPI payment transactions.\n- **Capital Expenditure:** Massive public investment in dedicated freight corridors, high-speed rail, and national highway networks under PM Gati Shakti.`;

      case "innovation":
        return `### **Drivers of India's Innovation Rank Improvement**\n\n${country} has climbed to **#39 in the Global Innovation Index (WIPO)**, advancing 9 places over recent evaluation cycles.\n\n**Primary Catalysts:**\n1. **ICT Services & Talent Pool:** ${country} produces over **2.2 Million STEM graduates annually** and exports over **$190 Billion** in software and IT services.\n2. **Patent Filing Surge:** Domestic patent applications crossed **83,000+ filings annually**, driven by deep-tech, AI, and pharmaceutical innovation.\n3. **Digital Public Infrastructure (DPI):** Unified Payments Interface (UPI) and ONDC have dramatically lowered transaction costs for high-growth tech startups.\n4. **Venture Capital & Unicorn Ecosystem:** Dense startup clusters in Bengaluru, Delhi-NCR, and Hyderabad position ${country} as the 3rd largest startup ecosystem worldwide.`;

      case "ai-readiness":
        return `### **Government AI Readiness Analysis**\n\n${country} ranks **#32 globally** on Oxford Insights Government AI Readiness Index, driven by compute expansion, public AI initiatives, and developer workforce scale.\n\n**Core Strengths:**\n- **IndiaAI Mission:** Cabinet-approved $1.2 Billion outlay deploying a 10,000+ GPU supercomputing grid for researchers and startups.\n- **AI Talent Density:** ${country} has the #2 largest pool of AI developers globally, leading in open-source AI project contributions.\n- **Digital Public Goods:** Multilingual AI foundational models (Bhashini) deployed for public services across 22 official languages.`;

      default:
        return `### **${entityDetails.indicatorName} Analysis**\n\n${country} exhibits strong performance across ${entityDetails.indicatorName}. Analytical evaluation based on ${entityDetails.sources.join(", ")} data highlights steady structural progress, supported by digital infrastructure and workforce capacity.`;
    }
  }

  if (intent === "country-comparison") {
    const peer = req.comparisonCountry || (q.includes("china") ? "China" : q.includes("germany") ? "Germany" : "USA");
    return `### **Comparative Benchmark: ${country} vs. ${peer}**\n\nA strategic benchmark comparison highlights structural contrasts across economic scale, growth velocity, and technology infrastructure:\n\n| Strategic Indicator | ${country} | ${peer} | Key Leader |\n| :--- | :--- | :--- | :--- |\n| **GDP Rank & Scale** | #5 ($3.75T) | ${peer === "China" ? "#2 ($17.7T)" : peer === "Germany" ? "#3 ($4.45T)" : "#1 ($26.9T)"} | ${peer} (Scale) |\n| **Real GDP Growth Rate** | **7.2%** | ${peer === "China" ? "4.8%" : "1.2%"} | **${country} (Velocity)** |\n| **Digital Public Infrastructure** | **#9 Global (UPI)** | ${peer === "China" ? "#7 Global" : "#12 Global"} | **${country} (Open DPI)** |\n| **Global Innovation Index** | #39 Global | ${peer === "China" ? "#11 Global" : peer === "Germany" ? "#5 Global" : "#3 Global"} | ${peer} |\n| **AI Readiness Index** | #32 Global | ${peer === "China" ? "#2 Global" : "#1 Global"} | ${peer} |\n| **Median Age** | **28.4 Years** | ${peer === "China" ? "39.0 Years" : "44.0 Years"} | **${country} (Demographics)** |\n\n**Key Insights:**\n- **Growth Velocity:** ${country} leads in annual real GDP growth rate (7.2%), outperforming ${peer}.\n- **Digital Payment Infrastructure:** ${country}'s open-source DPI model (UPI) processes higher monthly real-time retail transaction volume.\n- **Demographic Horizon:** ${country}'s younger population provides a sustained demographic dividend window.`;
  }

  if (intent === "policy-recommendation") {
    return `### **Strategic Reform Priorities for ${country}**\n\nTo accelerate progress toward top-30 global standing across international benchmark indices:\n\n1. **Elevate Healthcare Spending:** Increase public health budget allocation from 1.3% to **2.5% of GDP** to lift Human Development Index (#134) metrics.\n2. **Expand R&D Tax Directives:** Boost Gross Expenditure on R&D (GERD) from 0.65% to 1.5% of GDP via private sector matching grants for semiconductor and biotech research.\n3. **Incentivize Female Workforce Participation:** Implement targeted STEM scholarships, childcare subsidies, and micro-loans to close the gender gap rank (#129).\n4. **Institutional & Regulatory Streamlining:** Simplify commercial judicial enforcement and administrative compliance to improve ease of doing business and press freedom perceptions (#159).`;
  }

  if (intent === "trend-analysis") {
    return `### **Multi-Year Progress Trajectory**\n\nLongitudinal indicator tracking confirms multi-dimensional upward mobility for ${country}:\n\n- **GDP Nominal Rank:** Ascended from **#7** to **#5** ($3.75 Trillion aggregate).\n- **Global Innovation Index:** Advanced from **#48** to **#39** (WIPO standings).\n- **Government AI Readiness:** Climbed from **#48** to **#32** (Oxford Insights).\n- **Digital Public Infrastructure:** Progressed from **#24** to **#9** globally.\n\n*Key Priority:* Translating macroeconomic and technological growth velocity into per capita income and social development gains.`;
  }

  return `### **Executive Intelligence Briefing**\n\n${country} demonstrates a **dynamic dual-speed trajectory** across international indicators:\n\n- 🚀 **High Performers:** Real GDP Rank (**#5**), Digital Public Infrastructure (**#9**), Software Exports (**#12**), Government AI Readiness (**#32**).\n- ⚖️ **Moderate Performers:** Global Innovation Index (**#39**), Ease of Logistics (**#38**).\n- 📈 **Growth Opportunities:** Human Development Index (**#134**), Press Freedom (**#159**), Gender Workforce Parity (**#129**).\n\n*Overall Assessment:* ${country}'s macroeconomic momentum and digital infrastructure provide strong leverage to accelerate social development indicators over the coming decade.`;
}
