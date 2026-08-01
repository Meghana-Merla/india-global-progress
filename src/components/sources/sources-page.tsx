"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Building2, SearchX } from "lucide-react";
import { SourcesHeader } from "./sources-header";
import { QualityDashboard } from "./quality-dashboard";
import { SourceCard } from "./source-card";
import { DatasetTable } from "./dataset-table";
import { Methodology } from "./methodology";
import { ORGANIZATIONS_LIST, DataOrganization } from "./source-data";

export function SourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedOrg, setSelectedOrg] = useState("All");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  // Dynamic category list for filter dropdown
  const categoryList = useMemo(() => {
    const categories = new Set(ORGANIZATIONS_LIST.map((org) => org.category));
    return Array.from(categories).sort();
  }, []);

  // Dynamic org list for filter dropdown
  const orgList = useMemo(() => {
    const orgs = new Set(ORGANIZATIONS_LIST.map((org) => org.shortName || org.name));
    return Array.from(orgs).sort();
  }, []);

  // Reset all filters
  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedOrg("All");
    setSortOrder("asc");
  };

  // Filter & sort organizations list
  const filteredOrganizations = useMemo(() => {
    return ORGANIZATIONS_LIST.filter((org) => {
      // Search query check
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        org.name.toLowerCase().includes(query) ||
        org.shortName.toLowerCase().includes(query) ||
        org.description.toLowerCase().includes(query) ||
        org.category.toLowerCase().includes(query) ||
        org.supportedIndicators.some((ind) => ind.toLowerCase().includes(query));

      // Category check
      const matchesCategory =
        selectedCategory === "All" || org.category === selectedCategory;

      // Organization check
      const matchesOrg =
        selectedOrg === "All" ||
        org.shortName === selectedOrg ||
        org.name === selectedOrg;

      return matchesSearch && matchesCategory && matchesOrg;
    }).sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (sortOrder === "asc") {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });
  }, [searchQuery, selectedCategory, selectedOrg, sortOrder]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-12 pb-16"
    >
      {/* 1. Header with Search & Filter Controls */}
      <SourcesHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        selectedOrg={selectedOrg}
        onOrgChange={setSelectedOrg}
        sortOrder={sortOrder}
        onSortToggle={() =>
          setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
        }
        categoryList={categoryList}
        orgList={orgList}
        onResetFilters={handleResetFilters}
      />

      {/* 2. Quality & Data Integrity Dashboard */}
      <QualityDashboard />

      {/* 3. Trusted Organizations Grid */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/40 pb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary" />
              Trusted International Organizations
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
              Multilateral institutions, UN specialized agencies, and global research centers.
            </p>
          </div>
          <span className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-card border border-border/60 text-muted-foreground self-start sm:self-auto">
            Showing <strong className="text-foreground">{filteredOrganizations.length}</strong> of {ORGANIZATIONS_LIST.length} Institutions
          </span>
        </div>

        {filteredOrganizations.length > 0 ? (
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredOrganizations.map((org) => (
              <SourceCard key={org.id} organization={org} />
            ))}
          </motion.div>
        ) : (
          <div className="glass-card p-12 text-center rounded-2xl border border-border/60 flex flex-col items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-muted-foreground mb-1">
              <SearchX className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-foreground">
              No matching data sources found
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-md">
              We couldn&apos;t find any data sources matching your query &quot;{searchQuery}&quot;. Try clearing filters or searching for another keyword.
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-2 px-4 py-2 text-xs font-bold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-sm cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </section>

      {/* 4. Dataset Explorer Table */}
      <section>
        <DatasetTable />
      </section>

      {/* 5. Scientific Methodology & Standards */}
      <section>
        <Methodology />
      </section>
    </motion.div>
  );
}
