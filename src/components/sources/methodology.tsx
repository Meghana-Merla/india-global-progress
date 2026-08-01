"use client";

import React from "react";
import {
  FileText,
  Sliders,
  Calculator,
  Cpu,
  HelpCircle,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface MethodologyProps {
  className?: string;
}

export function Methodology({ className }: MethodologyProps) {
  return (
    <div className={cn("space-y-8", className)}>
      {/* Title Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-[11px] font-bold uppercase tracking-wider inline-flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> GOVERNANCE & CALCULATIONS
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
          Scientific <span className="text-gradient-primary">Methodology</span> & Data Standards
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-3xl">
          IndiaLens AI follows standardized international frameworks to transform heterogeneous raw global metrics into comparable indices, ranks, and actionable AI insights.
        </p>
      </div>

      {/* Grid of 5 Premium Methodology Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1. How Rankings Are Collected */}
        <div className="glass-card p-6 rounded-2xl border border-border/60 shadow-md relative overflow-hidden group hover:border-primary/40 transition-all flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors pointer-events-none" />
          
          <div>
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/30 flex items-center justify-center font-bold">
                <FileText className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-extrabold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/20">
                STAGE 01
              </span>
            </div>

            <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              How Rankings Are Collected
            </h3>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
              Data points are ingested directly from official open-access APIs and audited published reports of multilateral organizations such as the World Bank, IMF, UN, and WIPO.
            </p>

            <ul className="space-y-2 text-xs text-foreground/90 font-medium border-t border-border/40 pt-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>Zero synthetic data creation or manual tampering</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>Direct API sync with automated validation schema</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>Source attribution tags attached to every single value</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 2. Normalization Methodology */}
        <div className="glass-card p-6 rounded-2xl border border-border/60 shadow-md relative overflow-hidden group hover:border-primary/40 transition-all flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors pointer-events-none" />

          <div>
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold">
                <Sliders className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-extrabold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                STAGE 02
              </span>
            </div>

            <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              Normalization Methodology
            </h3>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
              Because underlying metrics use differing units (USD, percentages, index points), raw data undergoes Min-Max scaling and Z-Score standardization onto a normalized 0–100 scale.
            </p>

            <div className="p-2.5 rounded-xl bg-background/60 border border-border/40 font-mono text-[11px] text-muted-foreground mb-3">
              Normalized = (X - Min) / (Max - Min) × 100
            </div>

            <ul className="space-y-2 text-xs text-foreground/90 font-medium border-t border-border/40 pt-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Enables cross-pillar comparability across indicators</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Adjusts for inverted metrics (e.g. lower CPI rank = better)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 3. Percentile Calculations */}
        <div className="glass-card p-6 rounded-2xl border border-border/60 shadow-md relative overflow-hidden group hover:border-primary/40 transition-all flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-colors pointer-events-none" />

          <div>
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold">
                <Calculator className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-extrabold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                STAGE 03
              </span>
            </div>

            <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              Percentile Calculations
            </h3>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
              To evaluate India relative to global cohort sizes that vary per study, relative percentiles are calculated to determine position relative to top tier economies.
            </p>

            <div className="p-2.5 rounded-xl bg-background/60 border border-border/40 font-mono text-[11px] text-muted-foreground mb-3">
              Percentile = [(N - Rank + 1) / N] × 100
            </div>

            <ul className="space-y-2 text-xs text-foreground/90 font-medium border-t border-border/40 pt-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Normalizes cohort size variations (133 vs 193 nations)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Clearly highlights top 10%, 25%, or 50% percentile bands</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 4. AI Insight Generation */}
        <div className="glass-card p-6 rounded-2xl border border-border/60 shadow-md relative overflow-hidden group hover:border-primary/40 transition-all flex flex-col justify-between md:col-span-2 lg:col-span-1">
          <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-colors pointer-events-none" />

          <div>
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/30 flex items-center justify-center font-bold">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-extrabold text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/20">
                STAGE 04
              </span>
            </div>

            <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              AI Insight Generation
            </h3>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
              Our proprietary analytical LLM engine processes verified multi-year timeseries, detecting inflection points, policy correlations, structural shifts, and trajectory projections.
            </p>

            <ul className="space-y-2 text-xs text-foreground/90 font-medium border-t border-border/40 pt-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                <span>Longitudinal trend analysis across 2020–2025</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                <span>Automated executive synthesis & anomaly flags</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 5. Difference Between Rank and Score */}
        <div className="glass-card p-6 rounded-2xl border border-border/60 shadow-md relative overflow-hidden group hover:border-primary/40 transition-all flex flex-col justify-between md:col-span-2 lg:col-span-2">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors pointer-events-none" />

          <div>
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center justify-center font-bold">
                <HelpCircle className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-extrabold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">
                CORE CONCEPT
              </span>
            </div>

            <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              Difference Between Rank and Score
            </h3>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
              Understanding the distinction between an ordinal position (Rank) and absolute benchmark value (Score) is critical when assessing national progress over time:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-border/40 pt-4">
              {/* Rank side */}
              <div className="p-3.5 rounded-xl bg-background/60 border border-border/40 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                  <TrendingUp className="w-3.5 h-3.5 text-primary" />
                  <span>Ordinal Rank (e.g., #39 of 133)</span>
                </div>
                <p className="text-xs text-muted-foreground leading-normal">
                  Measures relative positional ordering among participating nations. Rank can change due to competitor dynamics even when internal scores remain constant.
                </p>
              </div>

              {/* Score side */}
              <div className="p-3.5 rounded-xl bg-background/60 border border-border/40 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                  <Sliders className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Absolute Score (e.g., 38.3 / 100)</span>
                </div>
                <p className="text-xs text-muted-foreground leading-normal">
                  Measures absolute internal development quality against baseline criteria. Score reflects intrinsic capacity progress regardless of peer shifts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
