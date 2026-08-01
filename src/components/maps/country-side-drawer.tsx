"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapCountryData } from "./map-data";
import { fetchCountryAISummary } from "@/lib/ai/country-summary-cache";
import {
  X,
  Trophy,
  Users,
  Building,
  CheckCircle2,
  AlertCircle,
  GitCompare,
  Radar as RadarIcon,
  Sparkles,
  Loader2,
} from "lucide-react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface CountrySideDrawerProps {
  country: MapCountryData | null;
  onClose: () => void;
}

export function CountrySideDrawer({ country, onClose }: CountrySideDrawerProps) {
  const [mounted, setMounted] = useState(false);
  const [aiSummary, setAiSummary] = useState<string | null>(null);
  const [loadingAi, setLoadingAi] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (country) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [country]);

  // ESC key listener to close drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && country) {
        onClose();
      }
    };
    if (country) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [country, onClose]);

  // Fetch Gemini AI Summary for the country
  useEffect(() => {
    if (country) {
      setLoadingAi(true);
      fetchCountryAISummary(country.name, country.id || country.code)
        .then((summary) => {
          if (summary) {
            setAiSummary(summary);
          } else {
            setAiSummary(country.overview);
          }
        })
        .catch(() => setAiSummary(country.overview))
        .finally(() => setLoadingAi(false));
    } else {
      setAiSummary(null);
    }
  }, [country]);

  if (!country) return null;

  const isIndia = Boolean(
    country.isIndia ||
      country.id === "IND" ||
      country.code === "IND" ||
      country.name?.toLowerCase() === "india"
  );

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
    { id: "digital-government", name: "Digital Govt" },
  ];

  const radarData = categoryKeys.map((cat) => ({
    pillar: cat.name,
    score: country.categories[cat.id as keyof typeof country.categories] || 50,
  }));

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity"
        />

        {/* Slide-over Panel */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="relative w-full max-w-md bg-card border-l border-border/60 shadow-2xl h-full flex flex-col z-10 overflow-y-auto"
        >
          {/* Header */}
          <div className="p-6 border-b border-border/40 flex items-start justify-between gap-4 sticky top-0 bg-card/95 backdrop-blur-md z-20">
            <div className="flex items-center gap-3">
              <span className="text-4xl shadow-xs">{country.flag}</span>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-extrabold text-foreground tracking-tight">
                    {country.name}
                  </h2>
                  {isIndia && (
                    <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30 text-[10px] font-bold uppercase">
                      HOST NATION
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground font-medium">
                  {country.region} • Code: {country.code}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-secondary/80 text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="p-6 space-y-6 flex-1">
            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-2xl bg-secondary/60 border border-border/50 space-y-1">
                <div className="text-muted-foreground text-xs flex items-center gap-1 font-semibold">
                  <Trophy className="w-3.5 h-3.5 text-amber-500" /> Overall Index
                </div>
                <div className="text-xl font-extrabold text-foreground">
                  {country.overallScore} <span className="text-xs text-muted-foreground">/100</span>
                </div>
                <div className="text-[10px] text-muted-foreground font-bold">
                  {country.globalRank}
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-secondary/60 border border-border/50 space-y-1">
                <div className="text-muted-foreground text-xs flex items-center gap-1 font-semibold">
                  <Building className="w-3.5 h-3.5 text-blue-500" /> GDP Rank
                </div>
                <div className="text-xl font-extrabold text-foreground">
                  {country.gdpRank}
                </div>
                <div className="text-[10px] text-muted-foreground font-bold flex items-center gap-1">
                  <Users className="w-3 h-3" /> {country.population}
                </div>
              </div>
            </div>

            {/* Overview Description (Gemini AI Summary) */}
            <div className="space-y-1.5">
              <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-primary" /> Gemini AI Executive Summary
              </h3>
              <div className="text-xs sm:text-sm text-foreground leading-relaxed bg-muted/40 p-3.5 rounded-xl border border-border/40 min-h-[70px]">
                {loadingAi ? (
                  <div className="flex items-center gap-2 text-muted-foreground py-2 font-medium">
                    <Loader2 className="w-4 h-4 animate-spin text-primary" />
                    <span>Generating AI summary for {country.name}...</span>
                  </div>
                ) : (
                  aiSummary || country.overview
                )}
              </div>
            </div>

            {/* Recharts Radar Chart */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                <RadarIcon className="w-4 h-4 text-primary" /> 10-Pillar Performance Radar
              </h3>
              <div className="w-full h-[250px] bg-secondary/30 rounded-2xl border border-border/40 p-2 flex items-center justify-center">
                {mounted ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={radarData} margin={{ top: 10, right: 20, bottom: 10, left: 20 }}>
                      <PolarGrid stroke="currentColor" className="text-border/40" />
                      <PolarAngleAxis
                        dataKey="pillar"
                        tick={{ fill: "currentColor", fontSize: 10, fontWeight: 600 }}
                        className="text-foreground"
                      />
                      <PolarRadiusAxis domain={[0, 100]} tick={false} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "rgba(15, 23, 42, 0.95)",
                          borderRadius: "10px",
                          color: "#fff",
                          fontSize: "11px",
                        }}
                      />
                      <Radar
                        name={country.name}
                        dataKey="score"
                        stroke={isIndia ? "#F97316" : "#3B82F6"}
                        fill={isIndia ? "#F97316" : "#3B82F6"}
                        fillOpacity={0.4}
                        strokeWidth={2}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="text-xs text-muted-foreground">Loading chart...</div>
                )}
              </div>
            </div>

            {/* Top Strengths */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Top Strategic Strengths
              </h3>
              <ul className="space-y-1.5">
                {country.strengths.map((strength, i) => (
                  <li
                    key={i}
                    className="text-xs text-foreground bg-emerald-500/10 border border-emerald-500/20 p-2.5 rounded-xl flex items-start gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas for Improvement */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4" /> Growth & Improvement Areas
              </h3>
              <ul className="space-y-1.5">
                {country.improvements.map((imp, i) => (
                  <li
                    key={i}
                    className="text-xs text-foreground bg-amber-500/10 border border-amber-500/20 p-2.5 rounded-xl flex items-start gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <span>{imp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Drawer Footer Actions */}
          <div className="p-4 border-t border-border/40 bg-card/95 backdrop-blur-md sticky bottom-0 z-20">
            {isIndia ? (
              <div className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-secondary/80 text-muted-foreground font-bold text-sm border border-border/60 cursor-not-allowed">
                <GitCompare className="w-4 h-4 text-muted-foreground" />
                <span>Viewing Host Country</span>
              </div>
            ) : (
              <Link
                href={`/compare?c1=IND&c2=${country.id || country.code}`}
                onClick={onClose}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-primary text-white font-bold text-sm shadow-glow hover:opacity-95 transition-all"
              >
                <GitCompare className="w-4 h-4" />
                <span>Compare {country.name} with India 🇮🇳</span>
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

