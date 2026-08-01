import { AIChatRequest } from "./types";

export type AIIntent =
  | "indicator-explanation"
  | "country-analysis"
  | "country-comparison"
  | "trend-analysis"
  | "policy-recommendation"
  | "executive-summary";

export type IndicatorEntity =
  | "hdi"
  | "gdp"
  | "healthcare"
  | "innovation"
  | "education"
  | "environment"
  | "governance"
  | "ai-readiness"
  | "inflation"
  | "cybersecurity"
  | "general";

export interface EntityDetails {
  entity: IndicatorEntity;
  indicatorName: string;
  dynamicTitle: string;
  sources: string[];
  primaryDatasetName: string;
}

export const SENIOR_ANALYST_SYSTEM_INSTRUCTION = `
You are IndiaLens AI, an expert international policy analyst and data intelligence expert.
Your expertise spans global macroeconomic performance, international benchmark rankings (WIPO, WEF, World Bank, IMF, UNDP, UNESCO, Oxford Insights, IQAir, Yale EPI, World Justice Project), and digital public infrastructure.

DIRECTIVES:
1. Analyze the user's intent directly and choose the most natural structure for your response.
2. DO NOT enforce a fixed template or arbitrary headings (like "Key Strengths", "Areas of Concern", or "Recommendations") unless the user explicitly requested them in the prompt.
3. DO NOT start your response with hardcoded year titles like "Healthcare Analysis (2023)" or "Executive Summary (2025)". State factual findings naturally.
4. Ground assertions strictly in authoritative international indicator datasets and specified sources.
5. If the user asks to Explain -> explain that topic directly. If they ask to Compare -> provide a comparison. If they ask Why a rank is changing -> analyze the key drivers and catalysts. If they ask to Summarize -> provide an executive summary.
6. Return clean Markdown format only.
`.trim();

export function extractEntity(question: string): EntityDetails {
  const q = question.toLowerCase().trim();

  // 1. HDI (Human Development Index)
  if (/\b(hdi|human development|human development index)\b/i.test(q)) {
    return {
      entity: "hdi",
      indicatorName: "Human Development Index (HDI)",
      dynamicTitle: "Human Development Index Analysis",
      sources: ["UNDP"],
      primaryDatasetName: "UNDP Human Development Index",
    };
  }

  // 2. Healthcare
  if (/\b(healthcare|health|universal health|hospital|health index|health coverage)\b/i.test(q)) {
    return {
      entity: "healthcare",
      indicatorName: "Healthcare Performance",
      dynamicTitle: "Healthcare Performance Analysis",
      sources: ["WHO", "World Bank"],
      primaryDatasetName: "WHO & World Bank Universal Health Coverage Index",
    };
  }

  // 3. GDP / Economy
  if (/\b(gdp|economy|economic|economic growth|growth rate|gdp per capita|macroeconomic)\b/i.test(q)) {
    return {
      entity: "gdp",
      indicatorName: "Nominal GDP & Growth",
      dynamicTitle: "Economic Performance Analysis",
      sources: ["IMF", "World Bank"],
      primaryDatasetName: "IMF World Economic Outlook & World Bank GDP",
    };
  }

  // 4. Innovation
  if (/\b(innovation|gii|global innovation index|patents|stem graduates|r&d)\b/i.test(q)) {
    return {
      entity: "innovation",
      indicatorName: "Global Innovation Index (GII)",
      dynamicTitle: "Innovation Ecosystem Analysis",
      sources: ["WIPO", "WEF"],
      primaryDatasetName: "WIPO Global Innovation Index & WEF Datasets",
    };
  }

  // 5. Education
  if (/\b(education|schooling|literacy|tertiary enrollment|school)\b/i.test(q)) {
    return {
      entity: "education",
      indicatorName: "Education System",
      dynamicTitle: "Education System Analysis",
      sources: ["UNESCO"],
      primaryDatasetName: "UNESCO Global Education Statistics",
    };
  }

  // 6. Environment
  if (/\b(environment|environmental|climate|clean energy|carbon|renewable|epi|air quality|pm2\.5)\b/i.test(q)) {
    return {
      entity: "environment",
      indicatorName: "Environmental Performance",
      dynamicTitle: "Environmental & Sustainability Analysis",
      sources: ["IQAir", "Yale EPI"],
      primaryDatasetName: "IQAir & Yale Environmental Performance Index",
    };
  }

  // 7. Governance
  if (/\b(governance|rule of law|corruption|transparency|judicial|policy effectiveness)\b/i.test(q)) {
    return {
      entity: "governance",
      indicatorName: "Governance & Rule of Law",
      dynamicTitle: "Governance & Rule of Law Analysis",
      sources: ["World Justice Project", "Transparency International"],
      primaryDatasetName: "World Justice Project & Transparency International Datasets",
    };
  }

  // 8. AI Readiness (Strict word boundary)
  if (/\b(ai readiness|ai mission|artificial intelligence|government ai|compute grid)\b/i.test(q) || /\bai\b/i.test(q)) {
    return {
      entity: "ai-readiness",
      indicatorName: "Government AI Readiness",
      dynamicTitle: "Government AI Readiness Analysis",
      sources: ["Oxford Insights"],
      primaryDatasetName: "Oxford Insights Government AI Readiness Index",
    };
  }

  // 9. Inflation
  if (/\b(inflation|cpi|consumer price index|price stability|food inflation)\b/i.test(q)) {
    return {
      entity: "inflation",
      indicatorName: "Inflation & Price Index",
      dynamicTitle: "Inflation & Price Stability Analysis",
      sources: ["IMF", "Reserve Bank of India"],
      primaryDatasetName: "IMF & RBI Consumer Price Index",
    };
  }

  // 10. Cybersecurity
  if (/\b(cybersecurity|cyber security|gci|cyber readiness|cyber)\b/i.test(q)) {
    return {
      entity: "cybersecurity",
      indicatorName: "Global Cybersecurity Index",
      dynamicTitle: "Cybersecurity Capability Analysis",
      sources: ["ITU"],
      primaryDatasetName: "ITU Global Cybersecurity Index",
    };
  }

  // General default
  return {
    entity: "general",
    indicatorName: "Macroeconomic & Governance Indicators",
    dynamicTitle: "Executive Intelligence Summary",
    sources: ["World Bank", "IMF"],
    primaryDatasetName: "Global Macro & Benchmark Datasets",
  };
}

export function detectIntent(
  question: string,
  context?: { pageContext?: string; selectedCountry?: string; comparisonCountry?: string }
): AIIntent {
  const q = question.toLowerCase().trim();

  // 1. Country Comparison Intent
  if (
    q.includes("compare") ||
    q.includes(" vs ") ||
    q.includes(" vs. ") ||
    q.includes("versus") ||
    q.includes("difference between") ||
    q.includes("comparison") ||
    q.includes("contrast")
  ) {
    return "country-comparison";
  }

  // 2. Policy Recommendation Intent
  if (
    q.includes("recommend") ||
    q.includes("policy") ||
    q.includes("reform") ||
    q.includes("should india") ||
    q.includes("improve next") ||
    q.includes("action plan") ||
    q.includes("strategy") ||
    q.includes("priority") ||
    q.includes("prescription") ||
    q.includes("how to improve")
  ) {
    return "policy-recommendation";
  }

  // 3. Trend Analysis Intent (Triggers: trend, trajectory, future, forecast, projection, over time, multi-year, historical, improving, climb, progress, why, how, prediction)
  if (
    q.includes("trend") ||
    q.includes("trajectory") ||
    q.includes("future") ||
    q.includes("forecast") ||
    q.includes("projection") ||
    q.includes("over time") ||
    q.includes("multi-year") ||
    q.includes("historical") ||
    q.includes("improving") ||
    q.includes("climb") ||
    q.includes("progress") ||
    q.includes("why") ||
    q.includes("how") ||
    q.includes("prediction")
  ) {
    return "trend-analysis";
  }

  // 4. Indicator Explanation Intent (Triggers: explain, what is, definition, top, best, worst, score, ranking)
  const entityDetails = extractEntity(question);
  if (
    q.startsWith("explain") ||
    q.includes("explain ") ||
    q.includes("what is") ||
    q.includes("definition") ||
    q.includes("top") ||
    q.includes("best") ||
    q.includes("worst") ||
    q.includes("score") ||
    q.includes("ranking") ||
    entityDetails.entity !== "general"
  ) {
    return "indicator-explanation";
  }

  // 5. Executive Summary Intent
  if (
    q.includes("summarize") ||
    q.includes("summary") ||
    q.includes("executive summary") ||
    q.includes("overview") ||
    q.includes("briefing")
  ) {
    return "executive-summary";
  }

  // 6. Country Analysis Intent
  if (
    context?.pageContext === "world-map" ||
    q.includes("country analysis") ||
    q.includes("profile") ||
    q.includes("nation") ||
    q.includes("china") ||
    q.includes("usa") ||
    q.includes("germany") ||
    q.includes("japan") ||
    q.includes("france") ||
    q.includes("singapore") ||
    q.includes("brazil") ||
    q.includes("australia") ||
    q.includes("uae") ||
    q.includes("uk") ||
    (context?.selectedCountry && context.selectedCountry !== "India")
  ) {
    return "country-analysis";
  }

  return "executive-summary";
}

export function generateDynamicTitle(intent: AIIntent, question: string, req: AIChatRequest): string {
  const q = question.toLowerCase().trim();
  const entityDetails = extractEntity(question);
  const country = req.selectedCountry || "India";
  const peer = req.comparisonCountry || (q.includes("china") ? "China" : q.includes("germany") ? "Germany" : "USA");

  if (intent === "country-comparison") {
    return `${country} vs ${peer} Comparative Intelligence`;
  }

  if (intent === "trend-analysis") {
    if (entityDetails.entity === "innovation") {
      return "Innovation Trend Analysis";
    }
    if (entityDetails.entity !== "general") {
      return `${entityDetails.indicatorName} Trend Analysis`;
    }
    return "Multi-Year Trend Analysis";
  }

  if (intent === "policy-recommendation") {
    return "Strategic Policy Recommendations";
  }

  if (intent === "country-analysis") {
    return `${country} Sovereign Intelligence Summary`;
  }

  if (intent === "executive-summary") {
    return "Executive Intelligence Summary";
  }

  return entityDetails.dynamicTitle;
}

// -------------------------------------------------------------------------
// DATA EXTRACTORS - Retrieve ONLY relevant structured records
// -------------------------------------------------------------------------

export function getRelevantDataForIntent(intent: AIIntent, req: AIChatRequest) {
  const q = req.question.toLowerCase().trim();
  const year = req.selectedYear || "2025";
  const primaryCountry = req.selectedCountry || "India";
  const entityDetails = extractEntity(req.question);

  if (intent === "indicator-explanation") {
    switch (entityDetails.entity) {
      case "hdi":
        return {
          datasets: ["UNDP Human Development Index (HDI)"],
          sources: ["UNDP"],
          data: {
            indicator: "Human Development Index (HDI)",
            country: primaryCountry,
            rank: "#134 Global",
            score: 0.644,
            metrics: {
              expectedSchoolingYears: 12.6,
              meanSchoolingYears: 6.7,
              gniPerCapitaPpp: "$6,950",
              lifeExpectancyYears: 67.2,
            },
          },
        };

      case "healthcare":
        return {
          datasets: ["WHO Universal Health Coverage Index", "World Bank Health Accounts"],
          sources: ["WHO", "World Bank"],
          data: {
            indicator: "Healthcare Index",
            country: primaryCountry,
            rank: "#92 Global",
            score: 64.2,
            metrics: {
              publicHealthSpendingPercentGdp: 1.3,
              lifeExpectancy: 67.2,
              ayushmanBharatCoverage: "500M+ beneficiaries",
              pharmaExports: "$25.4 Billion",
            },
          },
        };

      case "gdp":
        return {
          datasets: ["IMF World Economic Outlook", "World Bank GDP Nominal & PPP"],
          sources: ["IMF", "World Bank"],
          data: {
            indicator: "Nominal GDP & Growth Rate",
            country: primaryCountry,
            rank: "#5 Global ($3.75 Trillion)",
            metrics: {
              realGdpGrowthRate: "7.2%",
              gdpPerCapitaNominal: "$2,610",
              cpiInflationRate: "4.8%",
            },
          },
        };

      case "innovation":
        return {
          datasets: ["WIPO Global Innovation Index (GII 2025)", "WEF Future of Jobs & Innovation"],
          sources: ["WIPO", "WEF"],
          data: {
            indicator: "Global Innovation Index",
            country: primaryCountry,
            rank: "#39 Global",
            score: 38.4,
            metrics: {
              annualStemGraduates: "2.2 Million",
              ictServiceExports: "$190+ Billion",
              patentFilingsAnnual: "83,000+",
            },
          },
        };

      case "education":
        return {
          datasets: ["UNESCO Global Education Statistics"],
          sources: ["UNESCO"],
          data: {
            indicator: "Education System",
            country: primaryCountry,
            rank: "12.6 Expected Years",
            metrics: {
              expectedSchoolingYears: 12.6,
              meanSchoolingYears: 6.7,
              literacyRate: "77.7%",
            },
          },
        };

      case "environment":
        return {
          datasets: ["IQAir Global Air Quality", "Yale Environmental Performance Index"],
          sources: ["IQAir", "Yale EPI"],
          data: {
            indicator: "Environmental Performance Index",
            country: primaryCountry,
            rank: "#180 Global",
            metrics: {
              renewableEnergyCapacity: "175+ GW",
              solarCapacity: "70+ GW",
              airQualityIndexPm25: "53.4 ug/m3",
            },
          },
        };

      case "governance":
        return {
          datasets: ["World Justice Project Rule of Law Index", "Transparency International CPI"],
          sources: ["World Justice Project", "Transparency International"],
          data: {
            indicator: "Governance & Rule of Law",
            country: primaryCountry,
            rank: "#78 Global",
            metrics: {
              ruleOfLawScore: 0.52,
              regulatoryQualityIndex: 58.9,
              corruptionPerceptionsIndex: 40,
            },
          },
        };

      case "ai-readiness":
        return {
          datasets: ["Oxford Insights Government AI Readiness Index"],
          sources: ["Oxford Insights"],
          data: {
            indicator: "Government AI Readiness",
            country: primaryCountry,
            rank: "#32 Global",
            score: 68.5,
            metrics: {
              nationalComputeGpuCluster: "10,000+ GPUs",
              aiMissionBudget: "$1.2 Billion",
              aiDeveloperTalentPool: "#2 Globally",
            },
          },
        };

      default:
        return {
          datasets: ["UNDP Human Development Index (HDI)"],
          sources: ["UNDP"],
          data: {
            indicator: "Human Development Index (HDI)",
            country: primaryCountry,
            rank: "#134 Global",
            score: 0.644,
            metrics: {
              expectedSchoolingYears: 12.6,
              meanSchoolingYears: 6.7,
              gniPerCapitaPpp: "$6,950",
            },
          },
        };
    }
  }

  if (intent === "country-comparison") {
    const peerCountry = req.comparisonCountry || (q.includes("china") ? "China" : q.includes("germany") ? "Germany" : "USA");
    return {
      datasets: [`${primaryCountry} Macro Datasets`, `${peerCountry} Macro Datasets`],
      sources: ["World Bank", "IMF", "WIPO"],
      data: {
        subjectCountry: primaryCountry,
        benchmarkCountry: peerCountry,
        comparisons: [
          { metric: "GDP Rank", [primaryCountry]: "#5 ($3.75T)", [peerCountry]: peerCountry === "China" ? "#2 ($17.7T)" : peerCountry === "Germany" ? "#3 ($4.45T)" : "#1 ($26.9T)" },
          { metric: "Real GDP Growth", [primaryCountry]: "7.2%", [peerCountry]: peerCountry === "China" ? "4.8%" : "1.2%" },
          { metric: "Digital Public Infrastructure", [primaryCountry]: "#9 Global (UPI)", [peerCountry]: peerCountry === "China" ? "#7 Global" : "#12 Global" },
          { metric: "Global Innovation Index", [primaryCountry]: "#39 Global", [peerCountry]: peerCountry === "China" ? "#11 Global" : peerCountry === "Germany" ? "#5 Global" : "#3 Global" },
        ],
      },
    };
  }

  if (intent === "country-analysis") {
    return {
      datasets: [`${primaryCountry} Sovereign Profile Dataset`],
      sources: ["World Bank", "IMF"],
      data: {
        country: primaryCountry,
        profile: {
          gdpRank: primaryCountry === "Germany" ? "#3 ($4.45T)" : primaryCountry === "China" ? "#2 ($17.7T)" : primaryCountry === "USA" ? "#1 ($26.9T)" : primaryCountry === "Japan" ? "#4 ($4.21T)" : "#5 ($3.75T)",
          overallGlobalRank: primaryCountry === "Germany" ? "#5 Global" : primaryCountry === "China" ? "#12 Global" : primaryCountry === "USA" ? "#3 Global" : primaryCountry === "Singapore" ? "#1 Global" : "#50 Global",
          keyStrengths: [`High performance in ${primaryCountry} core sector`, "Strong institutional framework", "Leading export capabilities"],
        },
      },
    };
  }

  if (intent === "trend-analysis") {
    const isInnovation = entityDetails.entity === "innovation";
    return {
      datasets: isInnovation
        ? ["WIPO Global Innovation Index Historical Standings", "WEF R&D Trajectory"]
        : ["IndiaLens Longitudinal Trajectory Dataset", "WIPO & World Bank Historical Ranks"],
      sources: isInnovation ? ["WIPO", "WEF"] : ["WIPO", "World Bank", "UNDP"],
      data: {
        country: primaryCountry,
        trajectory: isInnovation
          ? [
              { year: "2020", giiRank: "#48", score: 35.6 },
              { year: "2022", giiRank: "#46", score: 36.6 },
              { year: "2023", giiRank: "#40", score: 38.1 },
              { year: "2025", giiRank: "#39", score: 38.4 },
            ]
          : [
              { year: "2020", gdpRank: "#7", giiRank: "#48", dpiRank: "#24" },
              { year: "2022", gdpRank: "#7", giiRank: "#46", dpiRank: "#18" },
              { year: "2023", gdpRank: "#5", giiRank: "#40", dpiRank: "#12" },
              { year: "2025", gdpRank: "#5", giiRank: "#39", dpiRank: "#9" },
            ],
      },
    };
  }

  if (intent === "policy-recommendation") {
    return {
      datasets: ["NITI Aayog Strategic Reform Directives", "UNDP HDI & WEF Gender Gap Datasets"],
      sources: ["NITI Aayog", "UNDP"],
      data: {
        country: primaryCountry,
        bottlenecks: ["Public Health Budget (1.3% GDP)", "World Press Freedom Rank (#159)", "Gender Workforce Parity (#129)"],
      },
    };
  }

  return {
    datasets: [`${primaryCountry} Executive Briefing Master Dataset`],
    sources: ["World Bank", "IMF", "WIPO", "UNDP"],
    data: {
      country: primaryCountry,
      macroOverview: "Nominal GDP #5 ($3.75T), 7.2% Real Growth Rate, DPI Rank #9",
    },
  };
}

// -------------------------------------------------------------------------
// PROMPT BUILDERS (Dynamic Structure - No Hardcoded Templates)
// -------------------------------------------------------------------------

export function buildDynamicPrompt(
  intent: AIIntent,
  req: AIChatRequest,
  datasetInfo: any
): string {
  const entityDetails = extractEntity(req.question);
  const country = req.selectedCountry || "India";
  const year = req.selectedYear || "2025";
  const sources = datasetInfo.sources || entityDetails.sources;

  return `
${SENIOR_ANALYST_SYSTEM_INSTRUCTION}

Internal Analysis Context (DO NOT output as headers):
- Evaluation Year: ${year}
- Primary Subject: ${country}
- Intent: ${intent.toUpperCase()}
- Indicator Focus: ${entityDetails.indicatorName}
- Sources: ${sources.join(", ")}

Retrieved Benchmark Data:
${JSON.stringify(datasetInfo.data, null, 2)}

User Question: "${req.question}"

Instructions:
1. Provide a direct, highly relevant, and natural analytical response to "${req.question}".
2. Adapt your response structure directly to what is asked:
   - If EXPLAINING (e.g. "Explain India's HDI") -> focus specifically on HDI metrics, components, and rankings. Do NOT inject unrelated sections like GDP, Healthcare, or Recommendations unless asked.
   - If ANALYZING CAUSES (e.g. "Why is India's Innovation Rank improving?") -> explain specific catalysts like STEM graduates, IT exports, patent filings, and digital public infrastructure.
   - If COMPARING (e.g. "Compare India and China") -> provide a direct side-by-side comparative analysis.
   - If SUMMARIZING -> provide a concise executive summary.
3. DO NOT force rigid repetitive templates like "Key Strengths", "Areas of Concern", or "Recommendations" unless asked.
4. DO NOT start your response with hardcoded year titles like "Healthcare Analysis (${year})" or "Executive Summary (${year})".
5. Format response in clean Markdown.
`.trim();
}

export function buildPromptForIntent(intent: AIIntent, req: AIChatRequest) {
  const datasetInfo = getRelevantDataForIntent(intent, req);
  const promptText = buildDynamicPrompt(intent, req, datasetInfo);

  return {
    promptText,
    promptName: `buildDynamicPrompt:${intent}`,
    datasetNames: datasetInfo.datasets,
  };
}

export function buildSystemPromptForRequest(req: AIChatRequest): string {
  const intent = detectIntent(req.question, {
    pageContext: req.pageContext,
    selectedCountry: req.selectedCountry,
    comparisonCountry: req.comparisonCountry,
  });
  const { promptText } = buildPromptForIntent(intent, req);
  return promptText;
}
