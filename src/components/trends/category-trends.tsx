"use client";

import React, { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  TooltipProps,
} from "recharts";
import { GlassCard } from "@/components/ui/glass-card";
import { CategoryTrendSeries, TrendYear, TREND_YEARS } from "@/data/mock/trends";
import { Layers, CheckCircle2, Circle, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";

export interface CategoryTrendsProps {
  categories: CategoryTrendSeries[];
  startYear?: TrendYear;
  endYear?: TrendYear;
}

// Custom Glass Tooltip for multi-line comparison chart
function MultiLineTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-950/95 border border-primary/40 p-3 rounded-xl shadow-2xl backdrop-blur-md text-xs space-y-2 z-50 min-w-[200px]">
        <div className="font-bold text-foreground text-sm border-b border-border/40 pb-1 flex items-center justify-between">
          <span>{label} Benchmark</span>
          <span className="text-[10px] text-muted-foreground">10-Category Index</span>
        </div>
        <div className="space-y-1 max-h-[220px] overflow-y-auto pr-1">
          {payload.map((entry: any) => (
            <div key={entry.name} className="flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-1.5 truncate">
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: entry.color }} />
                <span className="text-muted-foreground truncate">{entry.name}</span>
              </div>
              <span className="font-bold text-foreground font-mono">{entry.value} pts</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
}

export function CategoryTrends({ categories, startYear = "2020", endYear = "2025" }: CategoryTrendsProps) {
  const [mounted, setMounted] = useState(false);

  // Active state for each category (default: all 10 enabled)
  const [activeCategories, setActiveCategories] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    categories.forEach((cat) => {
      initial[cat.id] = true;
    });
    return initial;
  });

  const [metricMode, setMetricMode] = useState<"score" | "rank">("score");

  useEffect(() => {
    setMounted(true);
  }, []);

  // Filter years range
  const yearsInRange = TREND_YEARS.filter((y) => {
    const numericY = parseInt(y);
    return numericY >= parseInt(startYear) && numericY <= parseInt(endYear);
  });

  // Prepare Recharts format: [{ year: "2020", Economy: 65, Society: 50.1, ... }]
  const chartData = yearsInRange.map((y) => {
    const row: Record<string, any> = { year: y };
    categories.forEach((cat) => {
      if (metricMode === "score") {
        row[cat.name] = cat.scores[y];
      } else {
        row[cat.name] = cat.ranks[y];
      }
    });
    return row;
  });

  const toggleCategory = (id: string) => {
    setActiveCategories((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const enableAll = () => {
    const next: Record<string, boolean> = {};
    categories.forEach((cat) => {
      next[cat.id] = true;
    });
    setActiveCategories(next);
  };

  const disableAll = () => {
    const next: Record<string, boolean> = {};
    categories.forEach((cat) => {
      next[cat.id] = false;
    });
    // Keep at least the first active
    if (categories[0]) next[categories[0].id] = true;
    setActiveCategories(next);
  };

  return (
    <GlassCard hoverEffect className="p-6 border border-border/60 space-y-6">
      {/* Header Info */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-[11px] font-bold tracking-wider uppercase inline-flex items-center gap-1">
              <Layers className="w-3.5 h-3.5" /> 10-PILLAR COMPARISON
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            Category Trend Comparison
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
            Compare performance trajectory across all 10 international evaluation domains ({startYear}–{endYear})
          </p>
        </div>

        {/* Action Controls: Toggle buttons & Mode switch */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Mode switch */}
          <div className="flex items-center bg-background/80 p-1 rounded-xl border border-border text-xs font-semibold">
            <button
              onClick={() => setMetricMode("score")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                metricMode === "score"
                  ? "bg-primary text-white font-bold shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Overall Score (0–100)
            </button>
            <button
              onClick={() => setMetricMode("rank")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                metricMode === "rank"
                  ? "bg-primary text-white font-bold shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Global Rank (#)
            </button>
          </div>

          <button
            onClick={enableAll}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-card border border-border text-muted-foreground hover:text-foreground transition-all"
            title="Enable All Categories"
          >
            <Eye className="w-3.5 h-3.5 text-primary" />
            <span>Select All</span>
          </button>

          <button
            onClick={disableAll}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-card border border-border text-muted-foreground hover:text-foreground transition-all"
            title="Clear All Categories"
          >
            <EyeOff className="w-3.5 h-3.5 text-rose-400" />
            <span>Clear</span>
          </button>
        </div>
      </div>

      {/* Category Toggle Pills */}
      <div className="flex flex-wrap items-center gap-2 p-3 rounded-xl bg-background/60 border border-border/40">
        {categories.map((cat) => {
          const isActive = !!activeCategories[cat.id];
          return (
            <button
              key={cat.id}
              onClick={() => toggleCategory(cat.id)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                isActive
                  ? "bg-card text-foreground shadow-sm"
                  : "bg-secondary/40 text-muted-foreground opacity-50 hover:opacity-80"
              }`}
              style={{
                borderColor: isActive ? cat.color : "transparent",
              }}
            >
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ backgroundColor: cat.color }}
              />
              <span>{cat.name}</span>
              {isActive ? (
                <CheckCircle2 className="w-3 h-3 ml-0.5 text-emerald-400" />
              ) : (
                <Circle className="w-3 h-3 ml-0.5 text-muted-foreground/40" />
              )}
            </button>
          );
        })}
      </div>

      {/* Multi-Line Recharts Component */}
      <div className="w-full h-[360px] sm:h-[420px] pt-2">
        {mounted ? (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 15, right: 20, left: -10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="currentColor" className="text-border/30" vertical={false} />
              <XAxis
                dataKey="year"
                tick={{ fill: "currentColor", fontSize: 12, fontWeight: 700 }}
                className="text-muted-foreground"
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                reversed={metricMode === "rank"}
                domain={metricMode === "rank" ? [1, 140] : [30, 100]}
                tick={{ fill: "currentColor", fontSize: 11 }}
                className="text-muted-foreground"
                axisLine={false}
                tickLine={false}
                tickFormatter={(val) => (metricMode === "rank" ? `#${val}` : `${val}`)}
              />
              <Tooltip content={<MultiLineTooltip />} />

              {categories.map((cat) => {
                if (!activeCategories[cat.id]) return null;
                return (
                  <Line
                    key={cat.id}
                    type="monotone"
                    dataKey={cat.name}
                    stroke={cat.color}
                    strokeWidth={2.5}
                    dot={{ r: 3, fill: cat.color, stroke: "#0F172A", strokeWidth: 1 }}
                    activeDot={{ r: 6, fill: cat.color, stroke: "#FFFFFF", strokeWidth: 2 }}
                    isAnimationActive={true}
                    animationDuration={1000}
                  />
                );
              })}
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground animate-pulse">
            Loading 10-category multi-line trend comparison...
          </div>
        )}
      </div>
    </GlassCard>
  );
}
