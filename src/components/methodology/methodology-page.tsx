"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  Building2,
  BarChart3,
  Cpu,
  RefreshCw,
  AlertTriangle,
  FileCheck,
  Zap,
  Sparkles,
  Globe,
  Sliders,
  Scale,
  Lock,
  Search,
} from "lucide-react";

export function MethodologyPage() {
  const trustedOrgs = [
    { name: "World Bank Group", code: "WB", domain: "Macroeconomics, Poverty & Infrastructure" },
    { name: "International Monetary Fund", code: "IMF", domain: "Real GDP Growth & Fiscal Balance" },
    { name: "United Nations Development Programme", code: "UNDP", domain: "Human Development Index (HDI)" },
    { name: "World Intellectual Property Organization", code: "WIPO", domain: "Global Innovation Index (GII)" },
    { name: "World Economic Forum", code: "WEF", domain: "Global Gender Gap & Competitiveness" },
    { name: "World Health Organization", code: "WHO", domain: "Universal Health Coverage (UHC)" },
    { name: "Reporters Without Borders", code: "RSF", domain: "World Press Freedom Index" },
    { name: "International Telecommunication Union", code: "ITU", domain: "Global Cybersecurity Index (GCI)" },
    { name: "Institute for Economics and Peace", code: "IEP", domain: "Global Peace Index" },
    { name: "Germanwatch", code: "CCPI", domain: "Climate Change Performance Index" },
  ];

  const pipelineSteps = [
    {
      step: "01",
      title: "Data Extraction & Ingestion",
      desc: "Automated API endpoints and validated multilateral datasets harvest raw indicators annually.",
      icon: Database,
    },
    {
      step: "02",
      title: "Sanitisation & Imputation",
      desc: "Outlier filtering, cross-validation against official national gazettes (RBI, NITI Aayog), and missing data handling.",
      icon: FileCheck,
    },
    {
      step: "03",
      title: "Standardization & Scaling",
      desc: "Min-max normalization and Z-score alignment across heterogenous global measurement scales.",
      icon: Sliders,
    },
    {
      step: "04",
      title: "Gemini AI Synthesis",
      desc: "AI engine contextualizes quantitative scores into natural language briefs and executive reports.",
      icon: Cpu,
    },
  ];

  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Sovereign Data Governance</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
          Ranking <span className="text-gradient-primary">Methodology</span> & Pipeline
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Comprehensive breakdown of how IndiaLens AI collects, normalizes, processes, and synthesizes global indicator metrics for sovereign intelligence.
        </p>
      </div>

      {/* 1. Data Collection & Trusted Organizations */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6 glass-card p-6 sm:p-8 rounded-3xl border border-border/60 shadow-xl space-y-4">
          <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
            <Database className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-foreground">1. Data Collection</h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            IndiaLens AI gathers raw metrics directly from official multilateral institutions, global index published briefs, and sovereign statistical releases. Every data point undergoes strict schema validation before ingestion into our multi-year historical knowledge base.
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground pt-2">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>Multi-Source Automated Harvesting</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>Strict Provenance Verification & Audit Trails</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>Coverage Across 15+ Major World Economies</span>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-6 glass-card p-6 sm:p-8 rounded-3xl border border-border/60 shadow-xl space-y-4">
          <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center border border-indigo-500/20">
            <Building2 className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-foreground">2. Trusted Organizations</h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Our data ecosystem relies exclusively on authoritative global organizations with standardized benchmarking protocols:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 max-h-48 overflow-y-auto pr-1">
            {trustedOrgs.map((org, i) => (
              <div
                key={i}
                className="p-2.5 rounded-xl bg-card border border-border/50 flex items-center gap-2.5"
              >
                <span className="px-2 py-0.5 rounded text-[10px] font-black bg-primary/10 text-primary border border-primary/20">
                  {org.code}
                </span>
                <div className="truncate">
                  <div className="text-xs font-bold text-foreground truncate">{org.name}</div>
                  <div className="text-[10px] text-muted-foreground truncate">{org.domain}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Ranking Methodology & 4. Data Processing Pipeline */}
      <div className="glass-card p-6 sm:p-8 rounded-3xl border border-border/60 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/40 pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-bold uppercase tracking-wider mb-2">
              <BarChart3 className="w-3.5 h-3.5" /> Analytical Rigor
            </div>
            <h2 className="text-2xl font-bold text-foreground">3. Ranking Methodology & Core Metrics</h2>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-xl">
            Rankings evaluate India against global peer benchmark economies across 10 strategic development pillars: Economy, Society, Governance, Technology, Education, Healthcare, Environment, Safety, Equality, and Digital Government.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="space-y-3 pt-2">
          <h3 className="text-base font-bold text-foreground">4. Data Processing Pipeline</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pipelineSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-card/80 border border-border/60 space-y-3 relative overflow-hidden group hover:border-primary/50 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-primary/30 group-hover:text-primary transition-colors">
                      {step.step}
                    </span>
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-sm font-bold text-foreground">{step.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 5. Normalization & Percentile Calculation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-border/60 shadow-xl space-y-4">
          <div className="w-10 h-10 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center border border-purple-500/20">
            <Scale className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-foreground">5. Normalization & Percentile Calculation</h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            To compare indicators with different measuring units (e.g. GDP in Trillions of USD vs HDI on a 0-1 scale), IndiaLens AI applies Min-Max normalization and Percentile Ranking functions:
          </p>

          <div className="p-4 rounded-2xl bg-card border border-border/60 space-y-3 font-mono text-xs text-foreground">
            <div className="text-muted-foreground font-sans font-semibold text-xs">Percentile Rank Formula:</div>
            <div className="p-3 rounded-xl bg-background/80 border border-border text-center font-bold text-primary">
              Percentile = ( ( Total Countries - Rank + 1 ) / Total Countries ) × 100
            </div>
            <div className="text-muted-foreground font-sans text-xs pt-1">
              • Directionality adjustment ensures that lower numerical ranks (e.g., #1 or #5) yield higher percentile scores.
            </div>
          </div>
        </div>

        {/* 6. AI Insight Generation */}
        <div className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-3xl border border-border/60 shadow-xl space-y-4">
          <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
            <Zap className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-foreground">6. AI Insight Generation</h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Our AI Engine (powered by Google Gemini API) synthesizes verified indicator datasets into context-rich intelligence briefs:
          </p>
          <div className="space-y-2.5 pt-1 text-xs text-muted-foreground">
            <div className="p-3 rounded-xl bg-card border border-border/50 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <div>
                <strong className="text-foreground">Deterministic Grounding:</strong> AI prompts enforce zero hallucination by strictly locking responses to verified numerical data in memory.
              </div>
            </div>
            <div className="p-3 rounded-xl bg-card border border-border/50 flex items-start gap-2.5">
              <Globe className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-foreground">Multi-Pillar Correlation:</strong> AI evaluates cross-domain impacts (e.g. how Tech R&D impacts Economic GDP growth).
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 7. Update Frequency & 8. Transparency & Limitations */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6 glass-card p-6 sm:p-8 rounded-3xl border border-border/60 shadow-xl space-y-4">
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
            <RefreshCw className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-foreground">7. Update Frequency</h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            IndiaLens AI maintains a synchronized update cadence based on international reporting schedules:
          </p>
          <div className="space-y-2 text-xs sm:text-sm text-muted-foreground pt-1">
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-card border border-border/50">
              <span className="font-semibold text-foreground">Annual Indices (GII, HDI, CPI)</span>
              <span className="px-2 py-0.5 rounded bg-primary/10 text-primary font-bold text-[11px]">Updated Yearly</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-card border border-border/50">
              <span className="font-semibold text-foreground">Macroeconomic Metrics (GDP, Inflation)</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold text-[11px]">Updated Quarterly</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-card border border-border/50">
              <span className="font-semibold text-foreground">AI Intelligence Model & Cache</span>
              <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 font-bold text-[11px]">Continuous Sync</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 glass-card p-6 sm:p-8 rounded-3xl border border-border/60 shadow-xl space-y-4">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-foreground">8. Transparency & Limitations</h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            We maintain full transparency regarding global data nuances:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground pt-1">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
              <span><strong>Data Latency:</strong> Multilateral organizations often publish rankings with a 1-year reporting lag.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
              <span><strong>Subjective Indices:</strong> Perception-based indices (e.g. RSF Press Freedom) reflect survey methodologies that may carry qualitative variance.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
              <span><strong>Sovereign Revisions:</strong> Official GDP or census revisions are backported as soon as published by national statistical offices.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
