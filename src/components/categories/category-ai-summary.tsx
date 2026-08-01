"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CategoryDetailData } from "./category-data";
import {
  Sparkles,
  Brain,
  RefreshCw,
  AlertCircle,
  Lightbulb,
  CheckCircle2,
  Zap,
} from "lucide-react";

export interface CategoryAISummaryProps {
  category: CategoryDetailData;
  className?: string;
}

export function CategoryAISummary({
  category,
  className,
}: CategoryAISummaryProps) {
  const [executiveSummary, setExecutiveSummary] = useState(
    category.aiSummary.executiveSummary
  );
  const [keyDriver, setKeyDriver] = useState(category.aiSummary.keyDriver);
  const [recommendation, setRecommendation] = useState(
    category.aiSummary.recommendation
  );
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState("Just now");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Sync state if category changes
  useEffect(() => {
    setExecutiveSummary(category.aiSummary.executiveSummary);
    setKeyDriver(category.aiSummary.keyDriver);
    setRecommendation(category.aiSummary.recommendation);
    setErrorMessage(null);
  }, [category]);

  const handleRefreshAI = async () => {
    if (isAnalyzing) return;
    setIsAnalyzing(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: `Provide a concise executive analysis of India's ${category.title} performance in 2025. Current Global Rank: #${category.globalRank} out of ${category.totalCountries}, Score: ${category.overallScore}/100. Highlight key growth drivers and strategic policy recommendations.`,
          selectedYear: "2025",
          selectedCountry: "India",
          pageContext: `category-${category.id}`,
        }),
      });

      if (!res.ok) {
        throw new Error(`AI Service returned HTTP ${res.status}`);
      }

      const resData = await res.json();

      if (resData.summary) {
        setExecutiveSummary(resData.summary);
      }

      setLastUpdated(
        new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    } catch (err: any) {
      console.warn("Live Gemini category synthesis fallback:", err);
      setErrorMessage(
        "Live AI service busy. Displaying verified intelligence model analysis."
      );
      setTimeout(() => setErrorMessage(null), 4000);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="glass-card p-6 rounded-2xl border border-primary/30 space-y-6 relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-indigo-500/5">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/40 pb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-gradient-primary text-white text-[10px] font-extrabold uppercase tracking-wider inline-flex items-center gap-1.5 shadow-xs">
              <Brain className="w-3.5 h-3.5 animate-pulse" /> AI CATEGORY ANALYSIS
            </span>
            <span className="text-xs font-semibold text-muted-foreground">
              Gemini 2.5 Flash
            </span>
          </div>
          <h3 className="text-xl font-extrabold tracking-tight text-foreground flex items-center gap-2">
            Executive Synthesis & Strategic Outlook
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[11px] font-medium text-muted-foreground hidden sm:inline">
            Synced: {lastUpdated}
          </span>
          <button
            onClick={handleRefreshAI}
            disabled={isAnalyzing}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold rounded-xl bg-card border border-border text-foreground hover:bg-secondary hover:border-primary/40 transition-all shadow-xs active:scale-95 disabled:opacity-60 cursor-pointer"
          >
            <RefreshCw
              className={`w-3.5 h-3.5 text-primary ${
                isAnalyzing ? "animate-spin" : ""
              }`}
            />
            <span>{isAnalyzing ? "Synthesizing..." : "Re-Analyze with AI"}</span>
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

      {/* AI Summary Content Box */}
      <div className="space-y-4">
        <p className="text-sm text-foreground/90 leading-relaxed font-medium">
          {executiveSummary}
        </p>

        {/* Driver & Recommendation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Key Driver */}
          <div className="p-4 rounded-xl bg-background/60 border border-border/40 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-primary" />
              <span>Primary Growth Catalyst</span>
            </div>
            <p className="text-xs text-muted-foreground leading-normal font-medium">
              {keyDriver}
            </p>
          </div>

          {/* Strategic Recommendation */}
          <div className="p-4 rounded-xl bg-background/60 border border-border/40 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-wider">
              <Lightbulb className="w-3.5 h-3.5 text-emerald-400" />
              <span>Strategic Policy Action</span>
            </div>
            <p className="text-xs text-muted-foreground leading-normal font-medium">
              {recommendation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
