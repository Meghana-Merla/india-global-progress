"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { CompareHeader } from "./compare-header";
import { CompareSummary } from "./compare-summary";
import { CompareRadarChart } from "./compare-radar-chart";
import { CategoryComparison } from "./category-comparison";
import { AICompareSummary } from "./ai-compare-summary";
import { CompareAIInsightDrawer } from "./compare-ai-insight-drawer";
import { CountrySideDrawer } from "@/components/maps/country-side-drawer";
import { useYear } from "@/providers";
import { getCompareData, getWorldMapData, MapCountryData } from "@/data/mock";

export function ComparePage() {
  const searchParams = useSearchParams();
  const c1Param = searchParams.get("c1") || searchParams.get("country1");
  const c2Param = searchParams.get("c2") || searchParams.get("country2");
  const drawerParam = searchParams.get("country") || searchParams.get("drawer");

  const { selectedYear } = useYear();
  const [country1Id, setCountry1Id] = useState("IND");
  const [country2Id, setCountry2Id] = useState("USA");
  const [selectedDrawerCountry, setSelectedDrawerCountry] = useState<MapCountryData | null>(null);

  // AI Insight Drawer state
  const [aiInsightState, setAiInsightState] = useState<{
    isOpen: boolean;
    title: string;
    key?: string;
  }>({
    isOpen: false,
    title: "",
  });

  const handleOpenAIInsight = (title: string, key?: string) => {
    setAiInsightState({
      isOpen: true,
      title,
      key,
    });
  };

  const currentCompareData = getCompareData(selectedYear);
  const worldMapCountries = getWorldMapData(selectedYear);

  useEffect(() => {
    if (c1Param && currentCompareData[c1Param.toUpperCase()]) {
      setCountry1Id(c1Param.toUpperCase());
    }
    if (c2Param && currentCompareData[c2Param.toUpperCase()]) {
      setCountry2Id(c2Param.toUpperCase());
    }
  }, [c1Param, c2Param, currentCompareData]);

  useEffect(() => {
    if (drawerParam) {
      const q = drawerParam.trim().toLowerCase();
      const matched = worldMapCountries.find(
        (c) =>
          c.id.toLowerCase() === q ||
          c.code.toLowerCase() === q ||
          (c.slug && c.slug.toLowerCase() === q) ||
          c.name.toLowerCase() === q ||
          c.name.toLowerCase().includes(q)
      );
      if (matched) {
        setSelectedDrawerCountry(matched);
      }
    }
  }, [drawerParam, worldMapCountries]);

  const handleOpenDrawerById = (id: string) => {
    const matched = worldMapCountries.find(
      (c) => c.id === id || c.code === id || (c.slug && c.slug === id.toLowerCase())
    );
    if (matched) {
      setSelectedDrawerCountry(matched);
    }
  };

  const country1 = currentCompareData[country1Id] || currentCompareData["IND"];
  const country2 = currentCompareData[country2Id] || currentCompareData["USA"];

  const handleSwap = () => {
    setCountry1Id(country2Id);
    setCountry2Id(country1Id);
  };

  return (
    <div className="space-y-10 pb-12">
      {/* 1. Header & Country Selectors */}
      <CompareHeader
        country1Id={country1Id}
        country2Id={country2Id}
        onCountry1Change={setCountry1Id}
        onCountry2Change={setCountry2Id}
        onSwap={handleSwap}
        onOpenDrawer={handleOpenDrawerById}
      />

      {/* 2. AI Intelligence Summary Spotlight */}
      <AICompareSummary country1={country1} country2={country2} />

      {/* 3. 8 Comparison Summary Metric Cards */}
      <CompareSummary
        country1={country1}
        country2={country2}
        onOpenDrawer={handleOpenDrawerById}
        onSelectMetricForAI={handleOpenAIInsight}
      />

      {/* 4. Recharts 10-Pillar Radar Chart */}
      <CompareRadarChart country1={country1} country2={country2} />

      {/* 5. 10 Detailed Category Comparisons */}
      <CategoryComparison
        country1={country1}
        country2={country2}
        onSelectCategoryForAI={(name, id) => handleOpenAIInsight(name, id)}
      />

      {/* 6. Country Side Drawer */}
      <CountrySideDrawer
        country={selectedDrawerCountry}
        onClose={() => setSelectedDrawerCountry(null)}
      />

      {/* 7. AI Insight Drawer for Compare Cards & Sections */}
      <CompareAIInsightDrawer
        isOpen={aiInsightState.isOpen}
        onClose={() => setAiInsightState((prev) => ({ ...prev, isOpen: false }))}
        title={aiInsightState.title}
        categoryOrMetricKey={aiInsightState.key}
        country1={country1}
        country2={country2}
      />
    </div>
  );
}
