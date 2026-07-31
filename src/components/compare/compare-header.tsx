"use client";

import React from "react";
import { ArrowLeftRight, Sparkles, Globe2, Calendar } from "lucide-react";
import { countryList } from "./compare-data";
import { motion } from "framer-motion";
import { useYear } from "@/providers";
import { Year } from "@/data/mock";

export interface CompareHeaderProps {
  country1Id: string;
  country2Id: string;
  onCountry1Change: (id: string) => void;
  onCountry2Change: (id: string) => void;
  onSwap: () => void;
}

export function CompareHeader({
  country1Id,
  country2Id,
  onCountry1Change,
  onCountry2Change,
  onSwap,
}: CompareHeaderProps) {
  const { selectedYear, setSelectedYear, availableYears } = useYear();
  const c1 = countryList.find((c) => c.id === country1Id) || countryList[0];
  const c2 = countryList.find((c) => c.id === country2Id) || countryList[1];

  return (
    <div className="space-y-6 pb-6 border-b border-border/40">
      {/* Title & Tagline */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Cross-Country Intelligence Benchmark ({selectedYear})</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
          Country <span className="text-gradient-primary">Comparison</span>
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Compare India's international rankings and pillar performances side-by-side with global peers.
        </p>

        {/* Global Year Switcher Bar */}
        <div className="pt-2 flex items-center justify-center">
          <div className="inline-flex items-center gap-2 p-1.5 rounded-xl bg-card border border-border shadow-xs">
            <Calendar className="w-4 h-4 text-primary ml-2" />
            <span className="text-xs font-bold text-muted-foreground">Benchmark Year:</span>
            <div className="flex items-center gap-1">
              {availableYears.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    selectedYear === year
                      ? "bg-primary text-white shadow-xs"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Country Selectors Box */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card-hover p-4 sm:p-6 rounded-2xl border border-border/60 max-w-4xl mx-auto shadow-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-11 items-center gap-4 sm:gap-6">
          {/* Left Country Selector */}
          <div className="md:col-span-5 space-y-2">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1">
              <Globe2 className="w-3.5 h-3.5 text-primary" /> Primary Country
            </label>
            <div className="relative">
              <select
                value={country1Id}
                onChange={(e) => onCountry1Change(e.target.value)}
                className="w-full pl-12 pr-8 py-3 rounded-xl bg-card border border-border text-foreground font-bold text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-primary/40 cursor-pointer shadow-xs appearance-none transition-all"
              >
                {countryList.map((c) => (
                  <option key={c.id} value={c.id} disabled={c.id === country2Id}>
                    {c.flag} {c.name} ({c.code})
                  </option>
                ))}
              </select>
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-2xl pointer-events-none">
                {c1.flag}
              </span>
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-muted-foreground pointer-events-none">
                ▼
              </div>
            </div>
          </div>

          {/* VS & Swap Button */}
          <div className="md:col-span-1 flex flex-col items-center justify-center my-1 md:my-0">
            <button
              onClick={onSwap}
              title="Swap Countries"
              className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300 shadow-md active:scale-95 group cursor-pointer"
            >
              <ArrowLeftRight className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
            </button>
            <span className="text-[10px] font-extrabold text-muted-foreground mt-1 uppercase tracking-widest">
              VS
            </span>
          </div>

          {/* Right Country Selector */}
          <div className="md:col-span-5 space-y-2">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1">
              <Globe2 className="w-3.5 h-3.5 text-indigo-500" /> Benchmark Country
            </label>
            <div className="relative">
              <select
                value={country2Id}
                onChange={(e) => onCountry2Change(e.target.value)}
                className="w-full pl-12 pr-8 py-3 rounded-xl bg-card border border-border text-foreground font-bold text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/40 cursor-pointer shadow-xs appearance-none transition-all"
              >
                {countryList.map((c) => (
                  <option key={c.id} value={c.id} disabled={c.id === country1Id}>
                    {c.flag} {c.name} ({c.code})
                  </option>
                ))}
              </select>
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-2xl pointer-events-none">
                {c2.flag}
              </span>
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-muted-foreground pointer-events-none">
                ▼
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
