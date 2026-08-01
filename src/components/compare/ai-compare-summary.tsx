"use client";

import React from "react";
import { motion } from "framer-motion";
import { CountryData } from "./compare-data";
import { Brain, Sparkles, CheckCircle, Lightbulb } from "lucide-react";
import { openAIDrawer } from "@/components/common/ai-drawer";

export interface AICompareSummaryProps {
  country1: CountryData;
  country2: CountryData;
}

export function AICompareSummary({ country1, country2 }: AICompareSummaryProps) {
  // Identify pillars where country 1 leads and country 2 leads
  const categoryKeys = [
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

  const c1Leads: string[] = [];
  const c2Leads: string[] = [];

  categoryKeys.forEach((cat) => {
    const s1 = country1.categories[cat.id]?.score ?? 0;
    const s2 = country2.categories[cat.id]?.score ?? 0;
    if (s1 > s2) c1Leads.push(cat.name);
    else if (s2 > s1) c2Leads.push(cat.name);
  });

  const c1LeadsText = c1Leads.length > 0 ? c1Leads.slice(0, 3).join(", ") : "specific strategic niches";
  const c2LeadsText = c2Leads.length > 0 ? c2Leads.slice(0, 3).join(", ") : "established indicators";

  const handleClick = () => {
    openAIDrawer({
      page: "Compare",
      section: "Executive Benchmark",
      card: `${country1.name} vs ${country2.name}`,
      title: `Executive Comparison: ${country1.name} vs ${country2.name}`,
      type: "comparison",
      country: country1.name,
      metadata: {
        comparisonCountry: country2.name,
        c1Leads: c1LeadsText,
        c2Leads: c2LeadsText,
      },
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={handleClick}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/15 via-indigo-500/10 to-purple-500/15 border border-primary/20 p-6 sm:p-8 space-y-4 cursor-pointer group"
    >
      <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      {/* Badge Header */}
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-bold uppercase tracking-wider">
          <Brain className="w-3.5 h-3.5" /> IndiaLens AI Comparison Insight
        </span>
      </div>

      {/* Main AI Summary Text */}
      <div className="space-y-2 relative z-10">
        <h3 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
          Executive Benchmark: {country1.name} vs {country2.name}
        </h3>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          <span className="font-semibold text-foreground">{country1.name}</span> demonstrates notable performance in{" "}
          <span className="text-emerald-500 font-bold">{c1LeadsText}</span>, whereas{" "}
          <span className="font-semibold text-foreground">{country2.name}</span> holds comparative advantages in{" "}
          <span className="text-indigo-500 font-bold">{c2LeadsText}</span>.
        </p>
      </div>

      {/* Key Takeaway Bullet points */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 relative z-10">
        <div className="p-3.5 rounded-xl bg-card/80 border border-border/50 text-xs space-y-1">
          <div className="font-bold text-foreground flex items-center gap-1.5 text-emerald-500">
            <CheckCircle className="w-3.5 h-3.5" /> {country1.name} Key Strengths
          </div>
          <p className="text-muted-foreground">
            Strong momentum in digital public infrastructure, fintech scale, and technology growth trajectories.
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-card/80 border border-border/50 text-xs space-y-1">
          <div className="font-bold text-foreground flex items-center gap-1.5 text-indigo-500">
            <Lightbulb className="w-3.5 h-3.5" /> {country2.name} Key Strengths
          </div>
          <p className="text-muted-foreground">
            Established research infrastructure, high human development index scores, and institutional maturity.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
