"use client";

import React, { useState } from "react";
import { CompareHeader } from "./compare-header";
import { CompareSummary } from "./compare-summary";
import { CompareRadarChart } from "./compare-radar-chart";
import { CategoryComparison } from "./category-comparison";
import { AICompareSummary } from "./ai-compare-summary";
import { countriesData } from "./compare-data";

export function ComparePage() {
  const [country1Id, setCountry1Id] = useState("IND");
  const [country2Id, setCountry2Id] = useState("USA");

  const country1 = countriesData[country1Id] || countriesData["IND"];
  const country2 = countriesData[country2Id] || countriesData["USA"];

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
      />

      {/* 2. AI Intelligence Summary Spotlight */}
      <AICompareSummary country1={country1} country2={country2} />

      {/* 3. 8 Comparison Summary Metric Cards */}
      <CompareSummary country1={country1} country2={country2} />

      {/* 4. Recharts 10-Pillar Radar Chart */}
      <CompareRadarChart country1={country1} country2={country2} />

      {/* 5. 10 Detailed Category Comparisons */}
      <CategoryComparison country1={country1} country2={country2} />
    </div>
  );
}
