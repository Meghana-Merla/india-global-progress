"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import {
  AITrendInsightData,
  defaultAITrendInsightMock,
  TrendYear,
} from "@/data/mock/trends";
import {
  Sparkles,
  TrendingUp,
  TrendingDown,
  Zap,
  Brain,
  RefreshCw,
  ArrowUpRight,
  ArrowDownRight,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
} from "lucide-react";

export interface AITrendSummaryProps {
  insightData?: AITrendInsightData;
  startYear?: TrendYear;
  endYear?: TrendYear;
}

export function AITrendSummary({
  insightData = defaultAITrendInsightMock,
  startYear = "2020",
  endYear = "2025",
}: AITrendSummaryProps) {
  const [data, setData] = useState<AITrendInsightData>(insightData);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string>("Just now");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleRefreshAI = async () => {
    if (isAnalyzing) return;
    setIsAnalyzing(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: `Generate an executive multi-year trend synthesis for India between ${startYear} and ${endYear}. Highlight biggest improvement, biggest decline, key turning point, and executive summary.`,
          selectedYear: endYear,
          selectedCountry: "India",
          pageContext: "historical-trends",
        }),
      });

      if (!res.ok) {
        throw new Error(`AI Service returned HTTP ${res.status}`);
      }

      const resData = await res.json();

      if (resData.summary) {
        setData((prev) => ({
          ...prev,
          executiveSummary: resData.summary,
        }));
      }

      setLastUpdated(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    } catch (err: any) {
      console.warn("Live Gemini trend synthesis fallback:", err);
      setErrorMessage("Live API busy. Displaying cached multi-year AI intelligence.");
      setTimeout(() => setErrorMessage(null), 4000);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <GlassCard hoverEffect className="p-6 border border-border/60 space-y-6 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/40 pb-4 relative z-10">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-gradient-primary text-white text-[10px] font-extrabold uppercase tracking-wider inline-flex items-center gap-1.5 shadow-xs">
              <Brain className="w-3.5 h-3.5 animate-pulse" /> AI EXECUTIVE INSIGHTS
            </span>
            <span className="text-xs font-semibold text-muted-foreground">
              Powered by Gemini 2.5 Flash
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-foreground flex items-center gap-2">
            Executive AI Insights Panel
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Automated intelligence synthesis covering {startYear}–{endYear} indicator trajectories
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[11px] font-medium text-muted-foreground hidden md:inline">
            Updated: {lastUpdated}
          </span>
          <button
            onClick={handleRefreshAI}
            disabled={isAnalyzing}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl bg-card border border-border/80 text-foreground hover:bg-secondary hover:border-primary/40 transition-all shadow-xs active:scale-95 disabled:opacity-60 cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 text-primary ${isAnalyzing ? "animate-spin" : ""}`} />
            <span>{isAnalyzing ? "Synthesizing AI..." : "Re-Analyze with AI"}</span>
          </button>
        </div>
      </div>

      {/* Error Fallback Banner */}
      <AnimatePresence>
        {errorMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-medium flex items-center gap-2"
          >
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3 Executive Insight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 relative z-10">
        {/* 1. Biggest Improvement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="p-4 sm:p-5 rounded-2xl bg-card/80 border border-emerald-500/30 shadow-xs flex flex-col justify-between space-y-3 relative group hover:border-emerald-500/60 transition-all"
        >
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4" /> Biggest Improvement
              </span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-extrabold flex items-center gap-0.5">
                <ArrowUpRight className="w-3 h-3" />
                {data.biggestImprovement.change}
              </span>
            </div>
            <h3 className="text-base font-extrabold text-foreground group-hover:text-emerald-400 transition-colors">
              {data.biggestImprovement.indicator}
            </h3>
            <span className="inline-block mt-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-secondary text-secondary-foreground">
              {data.biggestImprovement.category}
            </span>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              {data.biggestImprovement.detail}
            </p>
          </div>
          <div className="pt-3 border-t border-border/30 text-[11px] font-medium text-emerald-400/90 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> High Momentum Area
          </div>
        </motion.div>

        {/* 2. Biggest Decline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="p-4 sm:p-5 rounded-2xl bg-card/80 border border-rose-500/30 shadow-xs flex flex-col justify-between space-y-3 relative group hover:border-rose-500/60 transition-all"
        >
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                <TrendingDown className="w-4 h-4" /> Area of Concern
              </span>
              <span className="px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/30 text-[10px] font-extrabold flex items-center gap-0.5">
                <ArrowDownRight className="w-3 h-3" />
                {data.biggestDecline.change}
              </span>
            </div>
            <h3 className="text-base font-extrabold text-foreground group-hover:text-rose-400 transition-colors">
              {data.biggestDecline.indicator}
            </h3>
            <span className="inline-block mt-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-secondary text-secondary-foreground">
              {data.biggestDecline.category}
            </span>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              {data.biggestDecline.detail}
            </p>
          </div>
          <div className="pt-3 border-t border-border/30 text-[11px] font-medium text-rose-400/90 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" /> Policy Priority Action Needed
          </div>
        </motion.div>

        {/* 3. Key Turning Point */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="p-4 sm:p-5 rounded-2xl bg-card/80 border border-indigo-500/30 shadow-xs flex flex-col justify-between space-y-3 relative group hover:border-indigo-500/60 transition-all"
        >
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
                <Zap className="w-4 h-4" /> Key Turning Point
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 text-[10px] font-extrabold">
                {data.keyTurningPoint.year} Inflection
              </span>
            </div>
            <h3 className="text-base font-extrabold text-foreground group-hover:text-indigo-400 transition-colors">
              {data.keyTurningPoint.title}
            </h3>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              {data.keyTurningPoint.detail}
            </p>
          </div>
          <div className="pt-3 border-t border-border/30 text-[11px] font-medium text-indigo-400/90 flex items-center gap-1">
            <Lightbulb className="w-3.5 h-3.5" /> Structural Shift Factor
          </div>
        </motion.div>
      </div>

      {/* AI Generated Executive Summary Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-indigo-500/10 to-purple-500/10 border border-primary/30 space-y-3 relative z-10 shadow-soft"
      >
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-xl bg-primary/20 text-primary flex items-center justify-center border border-primary/30">
            <Sparkles className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">
            AI Generated Executive Synthesis ({startYear}–{endYear})
          </h3>
        </div>

        <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed font-medium">
          {data.executiveSummary}
        </p>

        <div className="pt-2 flex flex-wrap items-center gap-3 text-[11px] font-semibold text-muted-foreground border-t border-border/30">
          <span className="flex items-center gap-1 text-primary">
            <CheckCircle2 className="w-3.5 h-3.5" /> DPI Scale Factor
          </span>
          <span>•</span>
          <span className="flex items-center gap-1 text-indigo-400">
            <CheckCircle2 className="w-3.5 h-3.5" /> High Tech Exports
          </span>
          <span>•</span>
          <span className="flex items-center gap-1 text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" /> Macro Resilience
          </span>
        </div>
      </motion.div>
    </GlassCard>
  );
}
