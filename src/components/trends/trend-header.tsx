"use client";

import React, { useState } from "react";
import { Download, Search, Filter, Calendar, Sparkles, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendYear, TREND_YEARS } from "@/data/mock/trends";

export interface TrendHeaderProps {
  startYear: TrendYear;
  endYear: TrendYear;
  onStartYearChange: (year: TrendYear) => void;
  onEndYearChange: (year: TrendYear) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  categoriesList: string[];
  onExportChart?: () => void;
  onResetFilters?: () => void;
}

export function TrendHeader({
  startYear,
  endYear,
  onStartYearChange,
  onEndYearChange,
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  categoriesList,
  onExportChart,
  onResetFilters,
}: TrendHeaderProps) {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleExport = () => {
    if (onExportChart) {
      onExportChart();
    } else {
      // Default CSV export trigger for trends
      const content = "data:text/csv;charset=utf-8,Indicator,Category,2020,2021,2022,2023,2024,2025\nGDP Rank,Economy,#6,#6,#5,#5,#5,#4\nGlobal Innovation Index,Technology,#48,#46,#40,#40,#39,#36\nHDI Rank,Society,#132,#132,#134,#134,#130,#128\nAI Readiness Index,Technology,#60,#51,#48,#41,#36,#32\nGlobal Cybersecurity Index,Safety,#10,#10,#10,#9,#8,#7\nHappiness Index,Society,#144,#139,#136,#126,#126,#118";
      const encodedUri = encodeURI(content);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", `indialens_trends_${startYear}-${endYear}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    setToastMessage(`Exporting Historical Trends (${startYear}–${endYear}) dataset...`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="flex flex-col gap-6 pb-6 border-b border-border/40">
      {/* Top Title & Subtitle */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-[11px] font-bold tracking-wider uppercase inline-flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> MULTI-YEAR ANALYTICS (2020–2025)
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Historical <span className="text-gradient-primary">Trends</span>
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-1 max-w-3xl">
            Analyze India's global performance across years using interactive visualizations and AI-powered trend analysis.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 self-start md:self-auto">
          {onResetFilters && (
            <button
              onClick={onResetFilters}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all cursor-pointer"
              title="Reset Filters"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}

          <button
            onClick={handleExport}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl bg-gradient-primary text-white shadow-glow hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all active:scale-95 cursor-pointer"
            title="Export Chart & Data"
          >
            <Download className="w-4 h-4" />
            <span>Export Chart</span>
          </button>
        </div>
      </div>

      {/* Top Controls Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 p-3.5 rounded-2xl glass-card border border-border/60">
        {/* Year Range Selector */}
        <div className="lg:col-span-4 flex items-center gap-2 bg-background/60 p-1.5 rounded-xl border border-border/50">
          <Calendar className="w-4 h-4 text-primary ml-2 shrink-0" />
          <span className="text-xs font-semibold text-muted-foreground shrink-0">Range:</span>
          
          {/* Start Year Dropdown */}
          <select
            value={startYear}
            onChange={(e) => {
              const val = e.target.value as TrendYear;
              if (parseInt(val) <= parseInt(endYear)) {
                onStartYearChange(val);
              }
            }}
            className="flex-1 bg-card text-foreground text-xs font-bold py-1.5 px-2 rounded-lg border border-border/80 hover:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all cursor-pointer"
            aria-label="Start Year"
          >
            {TREND_YEARS.map((y) => (
              <option key={`start-${y}`} value={y} disabled={parseInt(y) > parseInt(endYear)}>
                {y}
              </option>
            ))}
          </select>

          <span className="text-xs font-bold text-muted-foreground">to</span>

          {/* End Year Dropdown */}
          <select
            value={endYear}
            onChange={(e) => {
              const val = e.target.value as TrendYear;
              if (parseInt(val) >= parseInt(startYear)) {
                onEndYearChange(val);
              }
            }}
            className="flex-1 bg-card text-foreground text-xs font-bold py-1.5 px-2 rounded-lg border border-border/80 hover:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all cursor-pointer"
            aria-label="End Year"
          >
            {TREND_YEARS.map((y) => (
              <option key={`end-${y}`} value={y} disabled={parseInt(y) < parseInt(startYear)}>
                {y}
              </option>
            ))}
          </select>
        </div>

        {/* Category Filter */}
        <div className="lg:col-span-4 flex items-center gap-2 bg-background/60 p-1.5 rounded-xl border border-border/50">
          <Filter className="w-4 h-4 text-primary ml-2 shrink-0" />
          <span className="text-xs font-semibold text-muted-foreground shrink-0">Category:</span>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="flex-1 bg-card text-foreground text-xs font-bold py-1.5 px-2.5 rounded-lg border border-border/80 hover:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all cursor-pointer truncate"
            aria-label="Category Filter"
          >
            <option value="All">All Categories ({categoriesList.length})</option>
            {categoriesList.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Indicator Search */}
        <div className="lg:col-span-4 relative flex items-center">
          <Search className="w-4 h-4 text-muted-foreground absolute left-3 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search indicators (e.g. GDP, GII, HDI, AI...)"
            className="w-full bg-background/60 text-foreground placeholder:text-muted-foreground/60 text-xs font-medium py-2.5 pl-9 pr-3 rounded-xl border border-border/50 hover:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-3 text-xs text-muted-foreground hover:text-foreground"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Export Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-2xl bg-slate-900/95 text-white text-xs font-semibold shadow-2xl border border-primary/40 flex items-center gap-3 backdrop-blur-md"
          >
            <Download className="w-4 h-4 text-primary animate-bounce" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
