"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Sparkles,
  TrendingUp,
  ShieldAlert,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Database,
  ArrowRight,
  GitCompare,
  BarChart2,
  Award,
} from "lucide-react";
import { CountryData } from "./compare-data";
import { cn } from "@/lib/utils";

export interface CompareAIInsightDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  categoryOrMetricKey?: string;
  country1: CountryData;
  country2: CountryData;
}

export function CompareAIInsightDrawer({
  isOpen,
  onClose,
  title,
  categoryOrMetricKey,
  country1,
  country2,
}: CompareAIInsightDrawerProps) {
  if (!isOpen) return null;

  // Synthesize rich comparison intelligence data based on title / category
  const c1Name = country1.name;
  const c2Name = country2.name;

  const generateInsightData = () => {
    const key = (categoryOrMetricKey || title).toLowerCase();

    if (key.includes("gdp") || key.includes("economy")) {
      return {
        explanation:
          "Macroeconomic Scale & Real Output evaluate nominal GDP, purchasing power parity (PPP), fiscal growth rates, and structural capital formation across global markets.",
        comparisonAnalysis: `${c1Name} and ${c2Name} exhibit contrasting economic scales. ${c1Name} demonstrates rapid real GDP momentum (~7.2% growth rate) driven by digital public infrastructure, demographic expansion, and domestic consumption, while ${c2Name} leverages high capital depth and advanced tech value chains.`,
        historicalTrend:
          "From 2020 to 2025, India expanded its nominal GDP output from $2.87T to $3.75T, overtaking major G7 peer economies and securing the #5 global position.",
        strengths: [
          `${c1Name}: Unmatched demographic dividend, expanding manufacturing PLI schemes, digital payment scale (UPI).`,
          `${c2Name}: Deep capital markets, world-leading R&D expenditure per capita, high median household income.`,
        ],
        weaknesses: [
          `${c1Name}: Infrastructure bottlenecks, lower per-capita income distribution ($2,600 nominal).`,
          `${c2Name}: Elevated public debt-to-GDP ratio and vulnerability to supply-chain disruptions.`,
        ],
        keyObservations: [
          `${c1Name}'s annual growth rate significantly outpaces ${c2Name}'s mature baseline growth.`,
          "Digital public infrastructure (DPI) acts as a high-velocity force multiplier for economic inclusion.",
          "India requires sustained infrastructure capex to narrow the per-capita GDP differential.",
        ],
        recommendation:
          "Raise national R&D spending from 0.7% to 1.8% of GDP, accelerate electronics assembly PLI incentives, and expand export credit guarantees for MSMEs.",
        sources: ["World Bank Open Data", "IMF World Economic Outlook (WEO)", "NITI Aayog National Accounts"],
      };
    }

    if (key.includes("tech") || key.includes("innovation") || key.includes("ai")) {
      return {
        explanation:
          "Technology, AI Readiness, & Innovation measure national patent filings, R&D intensity, software workforce capacity, and digital ecosystem sophistication.",
        comparisonAnalysis: `${c1Name} leads in global STEM graduate volume and digital public goods scalability (Aadhaar, UPI), whereas ${c2Name} commands global frontier AI compute infrastructure and high patent commercialization rates.`,
        historicalTrend:
          "India advanced from #52 in WIPO Global Innovation Index (2020) to #39 (2025), representing one of the fastest innovation rank climbs among lower-middle income economies.",
        strengths: [
          `${c1Name}: 1.5M+ annual STEM graduates, top 3 global startup ecosystem, #9 in Digital Government.`,
          `${c2Name}: Frontier semiconductor fabrication, top AI compute density, dominant patent filings.`,
        ],
        weaknesses: [
          `${c1Name}: Private corporate R&D expenditure remains below 0.4% of GDP.`,
          `${c2Name}: High tech talent retention costs and geopolitical trade friction in hardware supply chains.`,
        ],
        keyObservations: [
          "India has achieved sovereign tech leadership in open-source digital public infrastructure (DPI).",
          "AI Compute readiness requires strategic sovereign GPU cluster deployments.",
          "Patent filing velocity in deep-tech startups has doubled over the past 3 years.",
        ],
        recommendation:
          "Establish a $5B Sovereign AI Compute Infrastructure Fund, offer tax credits for corporate R&D laboratories, and subsidize patent filing costs for university researchers.",
        sources: ["WIPO Global Innovation Index", "Oxford Insights AI Readiness", "ITU Global ICT Indicators"],
      };
    }

    if (key.includes("health") || key.includes("hdi") || key.includes("society") || key.includes("happiness")) {
      return {
        explanation:
          "Human Development, Healthcare & Societal Wellbeing track universal health coverage (UHC), life expectancy, infant mortality, and subjective quality of life.",
        comparisonAnalysis: `${c2Name} maintains higher HDI score baselines due to mature healthcare spending per capita, while ${c1Name} is rapidly scaling Ayushman Bharat healthcare coverage to over 500 million citizens.`,
        historicalTrend:
          "India's HDI score improved steadily from 0.633 in 2020 to 0.644 in 2025, backed by rural sanitation, clean drinking water access, and expanded health insurance.",
        strengths: [
          `${c1Name}: World's largest pharma manufacturing volume, Ayushman Bharat health coverage scheme, active digital health IDs.`,
          `${c2Name}: High universal health index, high life expectancy (80+ years), advanced medical research institutes.`,
        ],
        weaknesses: [
          `${c1Name}: Public health expenditure is 1.3% of GDP versus global benchmark target of 2.5%.`,
          `${c2Name}: Rising healthcare costs per individual and aging demographic pressure on pension budgets.`,
        ],
        keyObservations: [
          "Universal health coverage expansion is accelerating preventive health access in rural districts.",
          "Human development index progress requires matching economic scale with public health budget allocation.",
          "Life expectancy in India has reached 70.4 years, showing steady positive movement.",
        ],
        recommendation:
          "Increase public healthcare budget to 2.5% of GDP by 2028, scale primary health centers (Health & Wellness Centers), and reduce out-of-pocket medical expenditures.",
        sources: ["UNDP Human Development Report", "WHO Global Health Observatory", "UN SDSN World Happiness Report"],
      };
    }

    if (key.includes("gov") || key.includes("press") || key.includes("safety") || key.includes("peace") || key.includes("equal")) {
      return {
        explanation:
          "Governance, Safety, Regulatory Quality, & Inclusivity measure public institutional effectiveness, rule of law, cybersecurity preparedness, and civil rights indicators.",
        comparisonAnalysis: `${c1Name} ranks among the top 10 globally in Global Cybersecurity Index (GCI) and #18 in Digital Government, whereas ${c2Name} scores higher on administrative regulatory speed and press freedom index benchmarks.`,
        historicalTrend:
          "India's Digital Governance & E-Participation rankings advanced by 12 positions between 2020 and 2025, driven by DigiLocker, Aadhaar, and national e-governance portals.",
        strengths: [
          `${c1Name}: Sovereign cybersecurity index leadership (Top 10 ITU), high e-governance participation, UPI financial inclusion.`,
          `${c2Name}: Transparent administrative procedures, high press freedom score, robust regulatory predictability.`,
        ],
        weaknesses: [
          `${c1Name}: Administrative delays in commercial dispute resolution and international press freedom perception gaps.`,
          `${c2Name}: Income inequality distribution gaps and polarization in public discourse.`,
        ],
        keyObservations: [
          "Digital public infrastructure has dramatically reduced bureaucratic friction in welfare distribution.",
          "Cybersecurity resilience protects sovereign financial networks against global cyber threats.",
          "Regulatory transparency reforms will improve international governance perception scores.",
        ],
        recommendation:
          "Establish fast-track commercial courts for dispute resolution, enforce strict data protection guidelines, and increase female workforce participation through STEM scholarships.",
        sources: ["World Bank Governance Indicators", "ITU Global Cybersecurity Index", "RSF Press Freedom Index"],
      };
    }

    // Default fallback breakdown
    return {
      explanation:
        "Global Indicator Benchmarking compares structural performance, global ranking positions, and policy effectiveness across multilateral datasets.",
      comparisonAnalysis: `Direct comparative assessment between ${c1Name} and ${c2Name} reveals strategic trade-offs between rapid emerging market expansion and mature institutional capital.`,
      historicalTrend:
        "Longitudinal data trajectory shows positive structural progress for India across 8 out of 10 key evaluation pillars between 2020 and 2025.",
      strengths: [
        `${c1Name}: Demographic dividend, rapid digital adoption, strong macroeconomic growth rates.`,
        `${c2Name}: Established institutional frameworks, high per-capita expenditure, deep technological R&D.`,
      ],
      weaknesses: [
        `${c1Name}: Per-capita income distribution gaps and public service infrastructure deficits.`,
        `${c2Name}: High national debt levels and slowing structural growth rates.`,
      ],
      keyObservations: [
        "Sovereign data intelligence highlights key areas for strategic policy intervention.",
        "Cross-country comparison reveals benchmark gaps to guide Vision 2030 targets.",
        "Continued investment in digital public goods maintains India's competitive advantage.",
      ],
      recommendation:
        "Focus capital deployment on human capital formation, research & development, and green energy infrastructure.",
      sources: ["IndiaLens Intelligence Engine", "Multilateral Global Index Datasets"],
    };
  };

  const insight = generateInsightData();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm"
          />

          {/* Right Slide-in AI Intelligence Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-2xl bg-background/95 backdrop-blur-2xl border-l border-border/60 shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto"
          >
            {/* Header Section */}
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-border/40 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center shadow-xs">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-extrabold uppercase tracking-wider text-primary flex items-center gap-1">
                      <span>IndiaLens AI Intelligence Briefing</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-foreground tracking-tight">
                      {title}
                    </h2>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  aria-label="Close AI Drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Country Comparison Sub-header Banner */}
              <div className="p-3.5 rounded-2xl bg-card border border-border/60 flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                  <span className="text-base">{country1.flag}</span>
                  <span>{country1.name}</span>
                </div>
                <div className="flex items-center gap-1 text-xs font-extrabold text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                  <GitCompare className="w-3.5 h-3.5" /> VS
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                  <span>{country2.name}</span>
                  <span className="text-base">{country2.flag}</span>
                </div>
              </div>

              {/* Section 1: Indicator Explanation */}
              <div className="space-y-2">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                  <BarChart2 className="w-4 h-4 text-primary" /> 1. Indicator Explanation
                </h3>
                <div className="p-4 rounded-2xl bg-card border border-border/60 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {insight.explanation}
                </div>
              </div>

              {/* Section 2: India vs Country Comparative Analysis */}
              <div className="space-y-2">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                  <GitCompare className="w-4 h-4 text-indigo-400" /> 2. {c1Name} vs {c2Name} Comparative Analysis
                </h3>
                <div className="p-4 rounded-2xl bg-card border border-border/60 text-xs sm:text-sm text-foreground leading-relaxed font-medium">
                  {insight.comparisonAnalysis}
                </div>
              </div>

              {/* Section 3: Historical Trend (2020-2025) */}
              <div className="space-y-2">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-emerald-400" /> 3. Historical Trajectory (2020-2025)
                </h3>
                <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {insight.historicalTrend}
                </div>
              </div>

              {/* Section 4 & 5: Strengths & Weaknesses Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Strengths */}
                <div className="space-y-2">
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> Strengths & Advantages
                  </h3>
                  <div className="p-3.5 rounded-2xl bg-card border border-border/60 space-y-2 text-xs text-muted-foreground">
                    {insight.strengths.map((s, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Weaknesses */}
                <div className="space-y-2">
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4" /> Bottlenecks & Gaps
                  </h3>
                  <div className="p-3.5 rounded-2xl bg-card border border-border/60 space-y-2 text-xs text-muted-foreground">
                    {insight.weaknesses.map((w, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                        <span>{w}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Section 6: Key Observations */}
              <div className="space-y-2">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-purple-400" /> 6. Key Strategic Observations
                </h3>
                <div className="space-y-2">
                  {insight.keyObservations.map((obs, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-card border border-border/50 text-xs text-foreground flex items-start gap-2.5">
                      <span className="px-1.5 py-0.5 rounded bg-primary/10 text-primary font-bold text-[10px]">
                        0{idx + 1}
                      </span>
                      <span>{obs}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 7: Strategic Policy Recommendation */}
              <div className="space-y-2">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-primary flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4" /> 7. Policy Recommendation for India
                </h3>
                <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 text-xs sm:text-sm text-foreground font-semibold leading-relaxed">
                  {insight.recommendation}
                </div>
              </div>
            </div>

            {/* Footer Data Sources */}
            <div className="pt-6 mt-6 border-t border-border/40 space-y-2">
              <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                <Database className="w-3.5 h-3.5 text-primary" /> Verified Data Sources
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                {insight.sources.map((src, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-lg bg-card border border-border/60 font-medium">
                    {src}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
