"use client";

import React from "react";
import {
  Search,
  Filter,
  Calendar,
  Layers,
  ArrowUpDown,
  RotateCcw,
  Sparkles,
} from "lucide-react";

export interface CategoriesHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedYear: string;
  onYearChange: (year: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
  onReset: () => void;
}

export function CategoriesHeader({
  searchQuery,
  onSearchChange,
  selectedYear,
  onYearChange,
  sortBy,
  onSortChange,
  selectedFilter,
  onFilterChange,
  onReset,
}: CategoriesHeaderProps) {
  return (
    <div className="flex flex-col gap-6 pb-6 border-b border-border/40">
      {/* Title & Subtitle */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-[11px] font-bold tracking-wider uppercase inline-flex items-center gap-1">
              <Layers className="w-3.5 h-3.5" /> MULTI-DIMENSIONAL INTELLIGENCE
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Global <span className="text-gradient-primary">Categories</span>
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-1 max-w-3xl leading-relaxed">
            Explore India&apos;s performance across every major international development category using interactive analytics and AI-powered insights.
          </p>
        </div>

        {/* Action Button: Reset */}
        <div className="self-start lg:self-auto flex items-center gap-2">
          <button
            onClick={onReset}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-xl bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all shadow-xs cursor-pointer"
            title="Reset Filters"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Filters</span>
          </button>
        </div>
      </div>

      {/* Top Controls Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 p-3.5 rounded-2xl glass-card border border-border/60">
        {/* 1. Search Category */}
        <div className="lg:col-span-4 relative flex items-center">
          <Search className="w-4 h-4 text-muted-foreground absolute left-3 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search category (e.g. Economy, Tech, Health...)"
            className="w-full bg-background/60 text-foreground placeholder:text-muted-foreground/60 text-xs font-medium py-2.5 pl-9 pr-8 rounded-xl border border-border/50 hover:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-3 text-xs text-muted-foreground hover:text-foreground cursor-pointer"
            >
              ✕
            </button>
          )}
        </div>

        {/* 2. Year Selector */}
        <div className="lg:col-span-2 flex items-center gap-2 bg-background/60 p-1.5 rounded-xl border border-border/50">
          <Calendar className="w-4 h-4 text-amber-400 ml-2 shrink-0" />
          <span className="text-xs font-semibold text-muted-foreground shrink-0">Year:</span>
          <select
            value={selectedYear}
            onChange={(e) => onYearChange(e.target.value)}
            className="flex-1 bg-card text-foreground text-xs font-bold py-1.5 px-2 rounded-lg border border-border/80 hover:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all cursor-pointer"
            aria-label="Select Year"
          >
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </div>

        {/* 3. Sort By */}
        <div className="lg:col-span-3 flex items-center gap-2 bg-background/60 p-1.5 rounded-xl border border-border/50">
          <ArrowUpDown className="w-4 h-4 text-primary ml-2 shrink-0" />
          <span className="text-xs font-semibold text-muted-foreground shrink-0">Sort:</span>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="flex-1 bg-card text-foreground text-xs font-bold py-1.5 px-2 rounded-lg border border-border/80 hover:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all cursor-pointer truncate"
            aria-label="Sort By"
          >
            <option value="score-desc">Overall Score (High - Low)</option>
            <option value="score-asc">Overall Score (Low - High)</option>
            <option value="rank-asc">Global Rank (Best First)</option>
            <option value="name-asc">Category Name (A - Z)</option>
            <option value="indicators-desc">Most Indicators</option>
          </select>
        </div>

        {/* 4. Filter */}
        <div className="lg:col-span-3 flex items-center gap-2 bg-background/60 p-1.5 rounded-xl border border-border/50">
          <Filter className="w-4 h-4 text-emerald-400 ml-2 shrink-0" />
          <span className="text-xs font-semibold text-muted-foreground shrink-0">Filter:</span>
          <select
            value={selectedFilter}
            onChange={(e) => onFilterChange(e.target.value)}
            className="flex-1 bg-card text-foreground text-xs font-bold py-1.5 px-2 rounded-lg border border-border/80 hover:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all cursor-pointer truncate"
            aria-label="Filter Categories"
          >
            <option value="all">All Categories (10)</option>
            <option value="top-20">Top 20 Global Rank</option>
            <option value="improving">Improving Momentum</option>
            <option value="tech-digital">Tech & Digital Pillars</option>
            <option value="socio-economic">Socio-Economic Pillars</option>
          </select>
        </div>
      </div>
    </div>
  );
}
