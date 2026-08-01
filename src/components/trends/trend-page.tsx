"use client";

import React, { useState, useMemo } from "react";
import { TrendHeader } from "./trend-header";
import { TrendSummary } from "./trend-summary";
import { TrendChart } from "./trend-chart";
import { CategoryTrends } from "./category-trends";
import { AITrendSummary } from "./ai-trend-summary";
import { TrendTimeline } from "./trend-timeline";
import {
  featuredIndicatorsMock,
  categoryTrendSeriesMock,
  timelineEventsMock,
  defaultAITrendInsightMock,
  getTrendsSummaryData,
  TrendYear,
} from "@/data/mock/trends";
import { TrendingUp, SearchX, RotateCcw } from "lucide-react";

export function TrendPage() {
  const [startYear, setStartYear] = useState<TrendYear>("2020");
  const [endYear, setEndYear] = useState<TrendYear>("2025");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Extract unique category list from indicators
  const categoriesList = useMemo(() => {
    const set = new Set<string>();
    featuredIndicatorsMock.forEach((ind) => set.add(ind.category));
    return Array.from(set);
  }, []);

  // Filter indicators based on category and search query
  const filteredIndicators = useMemo(() => {
    return featuredIndicatorsMock.filter((ind) => {
      const matchesCategory =
        selectedCategory === "All" || ind.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        ind.name.toLowerCase().includes(q) ||
        ind.category.toLowerCase().includes(q) ||
        ind.description.toLowerCase().includes(q) ||
        ind.source.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Dynamically compute KPI summary based on selected range and filtered indicators
  const summary = useMemo(() => {
    return getTrendsSummaryData(startYear, endYear, filteredIndicators);
  }, [startYear, endYear, filteredIndicators]);

  const handleResetFilters = () => {
    setStartYear("2020");
    setEndYear("2025");
    setSelectedCategory("All");
    setSearchQuery("");
  };

  return (
    <div className="space-y-10 pb-16">
      {/* 1. Page Header with Controls */}
      <TrendHeader
        startYear={startYear}
        endYear={endYear}
        onStartYearChange={setStartYear}
        onEndYearChange={setEndYear}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        categoriesList={categoriesList}
        onResetFilters={handleResetFilters}
      />

      {/* 2. Key Metrics Summary Cards */}
      <section className="space-y-3">
        <TrendSummary summary={summary} startYear={startYear} endYear={endYear} />
      </section>

      {/* 3. Featured Indicator Charts Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold tracking-tight text-foreground flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
            Featured Indicator Trajectories ({startYear}–{endYear})
          </h2>
          <span className="text-xs text-muted-foreground font-medium">
            Showing {filteredIndicators.length} of {featuredIndicatorsMock.length} Key Indicators
          </span>
        </div>

        {filteredIndicators.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIndicators.map((indicator) => (
              <TrendChart
                key={indicator.id}
                indicator={indicator}
                startYear={startYear}
                endYear={endYear}
              />
            ))}
          </div>
        ) : (
          <div className="p-8 sm:p-12 rounded-2xl glass-card border border-border/60 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-muted/60 text-muted-foreground flex items-center justify-center mx-auto">
              <SearchX className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-foreground">No matching indicators found</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Try adjusting your search query or selecting "All Categories"
              </p>
            </div>
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-xl bg-primary text-white hover:opacity-90 transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All Filters</span>
            </button>
          </div>
        )}
      </section>

      {/* 4. 10-Category Trend Comparison Multi-Line Chart */}
      <section className="space-y-4">
        <CategoryTrends
          categories={categoryTrendSeriesMock}
          startYear={startYear}
          endYear={endYear}
        />
      </section>

      {/* 5. Executive AI Trend Insights */}
      <section className="space-y-4">
        <AITrendSummary
          insightData={defaultAITrendInsightMock}
          startYear={startYear}
          endYear={endYear}
        />
      </section>

      {/* 6. Chronological Policy Timeline */}
      <section className="space-y-4">
        <TrendTimeline
          events={timelineEventsMock}
          startYear={startYear}
          endYear={endYear}
        />
      </section>
    </div>
  );
}
