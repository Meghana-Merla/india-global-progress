"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { CategoriesHeader } from "./categories-header";
import { CategoryGrid } from "./category-grid";
import { CategoryAnalytics } from "./category-analytics";
import { IndicatorTable } from "./indicator-table";
import { CategoryDetailDrawer } from "./category-detail-drawer";
import { CATEGORIES_MOCK_DATA, CategoryDetailData, getCategoryIcon } from "./category-data";
import { Layers, Database, Sparkles, SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

export function CategoriesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("2025");
  const [sortBy, setSortBy] = useState("score-desc");
  const [selectedFilter, setSelectedFilter] = useState("all");

  // Active category selected for analytics & indicator table
  const [activeCategory, setActiveCategory] = useState<CategoryDetailData>(
    CATEGORIES_MOCK_DATA[0]
  );

  // Drawer state
  const [drawerCategory, setDrawerCategory] = useState<CategoryDetailData | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Reset filters
  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedYear("2025");
    setSortBy("score-desc");
    setSelectedFilter("all");
  };

  // Filter & sort categories list
  const filteredCategories = useMemo(() => {
    return CATEGORIES_MOCK_DATA.filter((cat) => {
      // Search check
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        cat.title.toLowerCase().includes(query) ||
        cat.shortDescription.toLowerCase().includes(query) ||
        cat.indicators.some((ind) => ind.name.toLowerCase().includes(query));

      // Filter check
      let matchesFilter = true;
      if (selectedFilter === "top-20") {
        matchesFilter = cat.globalRank <= 20;
      } else if (selectedFilter === "improving") {
        matchesFilter = cat.trendBadge.type === "up";
      } else if (selectedFilter === "tech-digital") {
        matchesFilter = ["technology", "digital-government", "education"].includes(cat.id);
      } else if (selectedFilter === "socio-economic") {
        matchesFilter = ["economy", "society", "healthcare", "equality"].includes(cat.id);
      }

      return matchesSearch && matchesFilter;
    }).sort((a, b) => {
      switch (sortBy) {
        case "score-asc":
          return a.overallScore - b.overallScore;
        case "rank-asc":
          return a.globalRank - b.globalRank;
        case "name-asc":
          return a.title.localeCompare(b.title);
        case "indicators-desc":
          return b.indicatorCount - a.indicatorCount;
        case "score-desc":
        default:
          return b.overallScore - a.overallScore;
      }
    });
  }, [searchQuery, sortBy, selectedFilter]);

  // Open drawer for detailed view
  const handleSelectCategoryForDrawer = (cat: CategoryDetailData) => {
    setActiveCategory(cat);
    setDrawerCategory(cat);
    setIsDrawerOpen(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-12 pb-16"
    >
      {/* 1. Header with Search, Year, Sort & Filter controls */}
      <CategoriesHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedYear={selectedYear}
        onYearChange={setSelectedYear}
        sortBy={sortBy}
        onSortChange={setSortBy}
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
        onReset={handleResetFilters}
      />

      {/* 2. Categories Grid (10 Development Categories) */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/40 pb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
              <Layers className="w-5 h-5 text-primary" />
              Strategic Development Pillars
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
              Click any category card to open full intelligence drawer with benchmark rankings and AI analysis.
            </p>
          </div>
          <span className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-card border border-border/60 text-muted-foreground self-start sm:self-auto">
            Showing <strong className="text-foreground">{filteredCategories.length}</strong> of {CATEGORIES_MOCK_DATA.length} Categories
          </span>
        </div>

        <CategoryGrid
          categories={filteredCategories}
          selectedCategoryId={activeCategory.id}
          onSelectCategory={handleSelectCategoryForDrawer}
          onResetFilters={handleResetFilters}
        />
      </section>

      {/* Category Switcher Pill Tabs for Deep Dive Analytics Section */}
      <section className="space-y-8 pt-4 border-t border-border/40">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-[11px] font-bold uppercase tracking-wider inline-flex items-center gap-1">
                <SlidersHorizontal className="w-3.5 h-3.5" /> DEEP DIVE EXPLORER
              </span>
            </div>
            <h2 className="text-2xl font-extrabold tracking-tight text-foreground">
              Deep-Dive Analysis: <span className="text-gradient-primary">{activeCategory.title}</span>
            </h2>
          </div>

          {/* Pill Selector for Active Category */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 max-w-full no-scrollbar">
            {CATEGORIES_MOCK_DATA.map((cat) => {
              const CatIcon = getCategoryIcon(cat.iconName);
              const isActive = activeCategory.id === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 cursor-pointer border",
                    isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-xs"
                      : "bg-card text-muted-foreground border-border/60 hover:text-foreground hover:border-primary/40"
                  )}
                >
                  <CatIcon className="w-3.5 h-3.5" />
                  <span>{cat.shortTitle}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Analytics Section (Trend Line, Radar Chart, Distribution Chart) */}
        <CategoryAnalytics category={activeCategory} />

        {/* 4. Indicator Explorer Table for Selected Category */}
        <IndicatorTable
          indicators={activeCategory.indicators}
          categoryTitle={activeCategory.title}
        />
      </section>

      {/* 5. Right Slide-Over Detail Drawer */}
      <CategoryDetailDrawer
        category={drawerCategory}
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </motion.div>
  );
}
