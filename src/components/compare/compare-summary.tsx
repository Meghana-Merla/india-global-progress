"use client";

import React from "react";
import { motion } from "framer-motion";
import { CountryData, getMetricWinner } from "./compare-data";
import { Trophy, CheckCircle2, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CompareSummaryProps {
  country1: CountryData;
  country2: CountryData;
}

export function CompareSummary({ country1, country2 }: CompareSummaryProps) {
  const metricKeys = [
    { key: "gdpRank", label: "GDP Rank" },
    { key: "hdi", label: "HDI Score" },
    { key: "innovation", label: "Innovation Rank" },
    { key: "happiness", label: "Happiness Rank" },
    { key: "aiReadiness", label: "AI Readiness" },
    { key: "pressFreedom", label: "Press Freedom" },
    { key: "globalPeace", label: "Global Peace" },
    { key: "internetPenetration", label: "Internet Penetration" },
  ] as const;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-500" />
            Comparison Summary Indicators
          </h2>
          <p className="text-xs text-muted-foreground">
            Direct indicator benchmark between {country1.name} and {country2.name}
          </p>
        </div>
      </div>

      <motion.div
        initial="initial"
        animate="animate"
        variants={{
          initial: {},
          animate: {
            transition: {
              staggerChildren: 0.05,
            },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {metricKeys.map(({ key, label }) => {
          const m1 = country1.metrics[key];
          const m2 = country2.metrics[key];
          const winner = getMetricWinner(m1, m2, country1.name, country2.name);

          return (
            <motion.div
              key={key}
              variants={{
                initial: { opacity: 0, y: 15 },
                animate: { opacity: 1, y: 0 },
              }}
              className="glass-card-hover p-4 rounded-2xl border border-border/50 flex flex-col justify-between space-y-3 relative overflow-hidden"
            >
              {/* Header Label & Source/Status */}
              <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground border-b border-border/30 pb-2">
                <span>{label}</span>
                {winner !== "tie" && (
                  <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full inline-flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    {winner === "c1" ? country1.name : country2.name} Leads
                  </span>
                )}
                {winner === "tie" && (
                  <span className="text-[10px] font-medium text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
                    Equal
                  </span>
                )}
              </div>

              {/* Side-by-side values */}
              <div className="grid grid-cols-2 gap-2 text-center pt-1">
                {/* Country 1 Value */}
                <div
                  className={cn(
                    "p-2.5 rounded-xl border transition-all",
                    winner === "c1"
                      ? "bg-primary/10 border-primary/40 ring-1 ring-primary/30"
                      : "bg-card/60 border-border/40"
                  )}
                >
                  <div className="text-[11px] font-semibold text-muted-foreground flex items-center justify-center gap-1">
                    <span>{country1.flag}</span>
                    <span>{country1.code}</span>
                  </div>
                  <div className="text-lg font-extrabold text-foreground mt-0.5">
                    {m1.value}
                  </div>
                  {m1.rank && (
                    <div className="text-[10px] text-muted-foreground">{m1.rank}</div>
                  )}
                  {m1.unit && (
                    <div className="text-[10px] text-muted-foreground">{m1.unit}</div>
                  )}
                </div>

                {/* Country 2 Value */}
                <div
                  className={cn(
                    "p-2.5 rounded-xl border transition-all",
                    winner === "c2"
                      ? "bg-indigo-500/10 border-indigo-500/40 ring-1 ring-indigo-500/30"
                      : "bg-card/60 border-border/40"
                  )}
                >
                  <div className="text-[11px] font-semibold text-muted-foreground flex items-center justify-center gap-1">
                    <span>{country2.flag}</span>
                    <span>{country2.code}</span>
                  </div>
                  <div className="text-lg font-extrabold text-foreground mt-0.5">
                    {m2.value}
                  </div>
                  {m2.rank && (
                    <div className="text-[10px] text-muted-foreground">{m2.rank}</div>
                  )}
                  {m2.unit && (
                    <div className="text-[10px] text-muted-foreground">{m2.unit}</div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
