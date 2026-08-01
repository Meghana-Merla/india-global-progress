"use client";

import React from "react";
import {
  Search,
  Filter,
  ShieldCheck,
  Building2,
  ArrowUpDown,
  RotateCcw,
} from "lucide-react";

export interface SourcesHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedOrg: string;
  onOrgChange: (org: string) => void;
  sortOrder: "asc" | "desc";
  onSortToggle: () => void;
  categoryList: string[];
  orgList: string[];
  onResetFilters: () => void;
}

export function SourcesHeader({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedOrg,
  onOrgChange,
  sortOrder,
  onSortToggle,
  categoryList,
  orgList,
  onResetFilters,
}: SourcesHeaderProps) {
  return (
    <div className="flex flex-col gap-6 pb-6 border-b border-border/40">
      {/* Top Title & Subtitle */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-[11px] font-bold tracking-wider uppercase inline-flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> DATA TRANSPARENCY & PROVENANCE
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Trusted Data <span className="text-gradient-primary">Sources</span>
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-1 max-w-3xl">
            Every insight in IndiaLens AI is backed by trusted international organizations to ensure transparency, credibility and accuracy.
          </p>
        </div>

        {/* Action Button: Reset */}
        <div className="self-start lg:self-auto">
          <button
            onClick={onResetFilters}
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
        {/* 1. Search Sources Input */}
        <div className="lg:col-span-4 relative flex items-center">
          <Search className="w-4 h-4 text-muted-foreground absolute left-3 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search sources or indicators (e.g., World Bank, GDP, WIPO...)"
            className="w-full bg-background/60 text-foreground placeholder:text-muted-foreground/60 text-xs font-medium py-2.5 pl-9 pr-8 rounded-xl border border-border/50 hover:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
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

        {/* 2. Filter by Category */}
        <div className="lg:col-span-3 flex items-center gap-2 bg-background/60 p-1.5 rounded-xl border border-border/50">
          <Filter className="w-4 h-4 text-primary ml-2 shrink-0" />
          <span className="text-xs font-semibold text-muted-foreground shrink-0">Category:</span>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="flex-1 bg-card text-foreground text-xs font-bold py-1.5 px-2 rounded-lg border border-border/80 hover:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all cursor-pointer truncate"
            aria-label="Filter by Category"
          >
            <option value="All">All Categories ({categoryList.length})</option>
            {categoryList.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* 3. Filter by Organization */}
        <div className="lg:col-span-3 flex items-center gap-2 bg-background/60 p-1.5 rounded-xl border border-border/50">
          <Building2 className="w-4 h-4 text-primary ml-2 shrink-0" />
          <span className="text-xs font-semibold text-muted-foreground shrink-0">Org:</span>
          <select
            value={selectedOrg}
            onChange={(e) => onOrgChange(e.target.value)}
            className="flex-1 bg-card text-foreground text-xs font-bold py-1.5 px-2 rounded-lg border border-border/80 hover:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all cursor-pointer truncate"
            aria-label="Filter by Organization"
          >
            <option value="All">All Orgs ({orgList.length})</option>
            {orgList.map((org) => (
              <option key={org} value={org}>
                {org}
              </option>
            ))}
          </select>
        </div>

        {/* 4. Sort A-Z Button */}
        <div className="lg:col-span-2 flex items-center">
          <button
            onClick={onSortToggle}
            className="w-full inline-flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-bold rounded-xl bg-card border border-border text-foreground hover:bg-secondary hover:border-primary/40 transition-all cursor-pointer shadow-xs"
            title="Toggle Sort Order"
          >
            <ArrowUpDown className="w-3.5 h-3.5 text-primary" />
            <span>Sort: {sortOrder === "asc" ? "A-Z" : "Z-A"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
