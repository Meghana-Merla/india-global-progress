"use client";

import React from "react";
import { WorldMapContainer } from "./world-map-container";
import { Sparkles, Globe, MapPin, BarChart2, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useYear } from "@/providers";

export function MapPage() {
  const { selectedYear, setSelectedYear, availableYears } = useYear();

  return (
    <div className="space-y-8 pb-12">
      {/* Page Header */}
      <div className="space-y-2 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-wider">
          <Globe className="w-3.5 h-3.5" />
          <span>Geographic Global Intelligence ({selectedYear})</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
          Interactive <span className="text-gradient-primary">World Map</span>
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Visualize India's global rankings and compare strategic evaluation scores across world economies.
        </p>

        {/* Global Year Switcher Bar */}
        <div className="pt-2 flex items-center justify-center">
          <div className="inline-flex items-center gap-2 p-1.5 rounded-xl bg-card border border-border shadow-xs">
            <Calendar className="w-4 h-4 text-primary ml-2" />
            <span className="text-xs font-bold text-muted-foreground">Edition:</span>
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

      {/* Main Map Component */}
      <WorldMapContainer />

      {/* Quick Map Insights Cards */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <div className="glass-card-hover p-4 sm:p-5 rounded-2xl border border-border/50 space-y-2">
          <div className="flex items-center gap-2 text-primary font-bold text-xs">
            <MapPin className="w-4 h-4" /> Global Reach
          </div>
          <h3 className="font-bold text-base text-foreground">
            15 Major Economies Benchmarked
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Geographic coverage spanning North America, Europe, East Asia, South Asia, and Latin America.
          </p>
        </div>

        <div className="glass-card-hover p-4 sm:p-5 rounded-2xl border border-border/50 space-y-2">
          <div className="flex items-center gap-2 text-indigo-500 font-bold text-xs">
            <BarChart2 className="w-4 h-4" /> Pillar Analytics
          </div>
          <h3 className="font-bold text-base text-foreground">
            Interactive Side Drawers
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Click any country marker on the map to explore top strengths, growth areas, and 10-pillar radar charts.
          </p>
        </div>

        <div className="glass-card-hover p-4 sm:p-5 rounded-2xl border border-border/50 space-y-2">
          <div className="flex items-center gap-2 text-emerald-500 font-bold text-xs">
            <Sparkles className="w-4 h-4" /> Focus India
          </div>
          <h3 className="font-bold text-base text-foreground">
            Direct Peer Comparison
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Seamlessly jump into direct side-by-side indicator benchmarks using the "Compare with India" drawer action.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
