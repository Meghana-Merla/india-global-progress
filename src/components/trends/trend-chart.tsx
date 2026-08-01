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
  TooltipProps,
} from "recharts";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { IndicatorTrend, TrendYear } from "@/data/mock/trends";
import { TrendingUp, ArrowUpRight, ArrowDownRight, ExternalLink } from "lucide-react";

export interface TrendChartProps {
  indicator: IndicatorTrend;
  startYear?: TrendYear;
  endYear?: TrendYear;
}

// Custom Glass Tooltip for Recharts
function CustomTooltip({ active, payload }: any) {
  if (active && payload && payload.length) {
    const dataPoint = payload[0].payload;
    return (
      <div className="bg-slate-950/95 border border-primary/40 p-3 rounded-xl shadow-2xl backdrop-blur-md text-xs space-y-1 z-50">
        <div className="font-bold text-foreground text-sm flex items-center justify-between gap-4">
          <span>{dataPoint.year} Edition</span>
          <span className="text-xs px-2 py-0.5 rounded bg-primary/20 text-primary font-bold">
            {dataPoint.displayValue}
          </span>
        </div>
        <div className="text-muted-foreground text-[11px]">
          Global Rank: <span className="font-bold text-foreground">#{dataPoint.rank}</span>
        </div>
        <div className="text-muted-foreground text-[11px]">
          Metric Score: <span className="font-bold text-foreground">{dataPoint.score}</span>
        </div>
      </div>
    );
  }
  return null;
}

export function TrendChart({ indicator, startYear = "2020", endYear = "2025" }: TrendChartProps) {
  const [mounted, setMounted] = useState(false);
  const [viewMode, setViewMode] = useState<"rank" | "score">("rank");

  useEffect(() => {
    setMounted(true);
  }, []);

  // Filter chart points based on selected start and end years
  const filteredData = indicator.data.filter((d) => {
    const y = parseInt(d.year);
    return y >= parseInt(startYear) && y <= parseInt(endYear);
  });

  const isRankView = viewMode === "rank";

  // Calculate Y-axis domain based on data values
  const ranks = filteredData.map((d) => d.rank);
  const scores = filteredData.map((d) => d.score);
  
  const minRank = Math.max(1, Math.min(...ranks) - 2);
  const maxRank = Math.max(...ranks) + 2;

  const minScore = Math.max(0, Math.floor(Math.min(...scores) * 0.9));
  const maxScore = Math.ceil(Math.max(...scores) * 1.1);

  const startPoint = filteredData[0] || indicator.data[0];
  const endPoint = filteredData[filteredData.length - 1] || indicator.data[indicator.data.length - 1];

  const rankDiff = startPoint.rank - endPoint.rank; // Positive means rank improved (e.g. 6 to 4 = +2)
  const isImproved = rankDiff >= 0;

  return (
    <GlassCard hoverEffect className="p-5 border border-border/60 flex flex-col justify-between h-full space-y-4">
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground text-[10px] font-bold uppercase tracking-wider">
              {indicator.category}
            </span>
            <span className="text-[11px] text-muted-foreground">{indicator.source}</span>
          </div>
          <h3 className="text-lg font-bold text-foreground mt-1 flex items-center gap-2">
            {indicator.name}
          </h3>
          <p className="text-xs text-muted-foreground line-clamp-1">{indicator.description}</p>
        </div>

        {/* Controls: Rank vs Score Toggle & Change Badge */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <div className="flex items-center bg-background/80 p-0.5 rounded-lg border border-border text-[11px] font-semibold">
            <button
              onClick={() => setViewMode("rank")}
              className={`px-2 py-1 rounded-md transition-all ${
                isRankView ? "bg-primary text-white font-bold" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Rank
            </button>
            <button
              onClick={() => setViewMode("score")}
              className={`px-2 py-1 rounded-md transition-all ${
                !isRankView ? "bg-primary text-white font-bold" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Score
            </button>
          </div>

          <span
            className={`inline-flex items-center gap-0.5 px-2.5 py-1 rounded-full text-xs font-bold border ${
              isImproved
                ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                : "bg-rose-500/10 text-rose-400 border-rose-500/30"
            }`}
          >
            {isImproved ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
            {indicator.overallChange}
          </span>
        </div>
      </div>

      {/* Chart Visualization */}
      <div className="w-full h-[220px] sm:h-[240px] pt-2">
        {mounted ? (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={filteredData} margin={{ top: 10, right: 15, left: -15, bottom: 5 }}>
              <defs>
                <linearGradient id={indicator.gradientId} x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor={indicator.gradientColors[0]} stopOpacity={1} />
                  <stop offset="100%" stopColor={indicator.gradientColors[1]} stopOpacity={1} />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" stroke="currentColor" className="text-border/30" vertical={false} />

              <XAxis
                dataKey="year"
                tick={{ fill: "currentColor", fontSize: 11, fontWeight: 600 }}
                className="text-muted-foreground"
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                reversed={isRankView} // For ranks, lower rank (e.g. #1) is visually top
                domain={isRankView ? [minRank, maxRank] : [minScore, maxScore]}
                tick={{ fill: "currentColor", fontSize: 10 }}
                className="text-muted-foreground"
                axisLine={false}
                tickLine={false}
                tickFormatter={(val) => (isRankView ? `#${val}` : `${val}`)}
              />

              <Tooltip content={<CustomTooltip />} />

              <Line
                type="monotone"
                dataKey={isRankView ? "rank" : "score"}
                stroke={`url(#${indicator.gradientId})`}
                strokeWidth={3}
                dot={{
                  r: 4,
                  fill: indicator.gradientColors[0],
                  stroke: "#0F172A",
                  strokeWidth: 2,
                }}
                activeDot={{
                  r: 7,
                  fill: indicator.gradientColors[0],
                  stroke: "#FFFFFF",
                  strokeWidth: 2,
                }}
                isAnimationActive={true}
                animationDuration={1200}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground animate-pulse">
            Loading interactive trend chart...
          </div>
        )}
      </div>

      {/* Footer Metrics Summary */}
      <div className="flex items-center justify-between text-xs pt-2 border-t border-border/30 text-muted-foreground">
        <div>
          Start ({startPoint.year}): <span className="font-bold text-foreground">{startPoint.displayValue}</span>
        </div>
        <div>
          Current ({endPoint.year}): <span className="font-bold text-primary">{endPoint.displayValue}</span>
        </div>
      </div>
    </GlassCard>
  );
}
