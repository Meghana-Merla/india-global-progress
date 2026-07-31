"use client";

import React from "react";
import { motion } from "framer-motion";
import { CountryData } from "./compare-data";
import { Layers, ArrowUpRight, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CategoryComparisonProps {
  country1: CountryData;
  country2: CountryData;
}

export function CategoryComparison({ country1, country2 }: CategoryComparisonProps) {
  const categoryList = [
    { id: "economy", name: "Economy" },
    { id: "society", name: "Society" },
    { id: "governance", name: "Governance" },
    { id: "technology", name: "Technology" },
    { id: "education", name: "Education" },
    { id: "healthcare", name: "Healthcare" },
    { id: "environment", name: "Environment" },
    { id: "safety", name: "Safety" },
    { id: "equality", name: "Equality" },
    { id: "digital-government", name: "Digital Government" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-500" />
            10-Pillar Detailed Category Breakdown
          </h2>
          <p className="text-xs text-muted-foreground">
            Granular comparison of index scores, global rankings, and score differentials
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {categoryList.map((cat, idx) => {
          const c1Cat = country1.categories[cat.id] || { score: 0, globalRank: "#N/A", rankNum: 999 };
          const c2Cat = country2.categories[cat.id] || { score: 0, globalRank: "#N/A", rankNum: 999 };

          const diff = +(c1Cat.score - c2Cat.score).toFixed(1);
          const c1Leads = diff > 0;
          const c2Leads = diff < 0;
          const isEqual = diff === 0;

          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.04 }}
              className="glass-card-hover p-4 sm:p-5 rounded-2xl border border-border/50 space-y-4"
            >
              {/* Category Title & Lead Difference Badge */}
              <div className="flex items-center justify-between border-b border-border/30 pb-3">
                <div className="font-bold text-base text-foreground">
                  {cat.name}
                </div>

                {/* Score Difference Badge */}
                <div
                  className={cn(
                    "text-xs font-extrabold px-2.5 py-0.5 rounded-full border flex items-center gap-1",
                    c1Leads && "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
                    c2Leads && "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
                    isEqual && "bg-secondary text-muted-foreground border-border/60"
                  )}
                >
                  {c1Leads && <TrendingUp className="w-3 h-3 text-emerald-500" />}
                  {c2Leads && <TrendingDown className="w-3 h-3 text-indigo-500" />}
                  {isEqual && <Minus className="w-3 h-3" />}
                  <span>
                    {c1Leads && `${country1.code} +${Math.abs(diff)} pts`}
                    {c2Leads && `${country2.code} +${Math.abs(diff)} pts`}
                    {isEqual && "Equal"}
                  </span>
                </div>
              </div>

              {/* Country 1 Progress Bar */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="flex items-center gap-1.5 text-foreground">
                    <span>{country1.flag}</span>
                    <span>{country1.name}</span>
                    <span className="text-[10px] font-bold text-muted-foreground px-1.5 py-0.2 rounded bg-secondary">
                      {c1Cat.globalRank}
                    </span>
                  </span>
                  <span className="font-bold text-emerald-500">{c1Cat.score} / 100</span>
                </div>
                <div className="w-full h-2 rounded-full bg-secondary overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${c1Cat.score}%` }}
                    transition={{ duration: 0.8 }}
                    className="h-full rounded-full bg-emerald-500"
                  />
                </div>
              </div>

              {/* Country 2 Progress Bar */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="flex items-center gap-1.5 text-foreground">
                    <span>{country2.flag}</span>
                    <span>{country2.name}</span>
                    <span className="text-[10px] font-bold text-muted-foreground px-1.5 py-0.2 rounded bg-secondary">
                      {c2Cat.globalRank}
                    </span>
                  </span>
                  <span className="font-bold text-indigo-500">{c2Cat.score} / 100</span>
                </div>
                <div className="w-full h-2 rounded-full bg-secondary overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${c2Cat.score}%` }}
                    transition={{ duration: 0.8 }}
                    className="h-full rounded-full bg-indigo-500"
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
