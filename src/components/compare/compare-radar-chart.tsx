"use client";

import React, { useEffect, useState } from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { CountryData } from "./compare-data";
import { Radar as RadarIcon } from "lucide-react";
import { motion } from "framer-motion";

export interface CompareRadarChartProps {
  country1: CountryData;
  country2: CountryData;
}

export function CompareRadarChart({ country1, country2 }: CompareRadarChartProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Format data for Recharts Radar
  const categoryKeys = [
    { id: "economy", name: "Economy" },
    { id: "society", name: "Society" },
    { id: "governance", name: "Governance" },
    { id: "technology", name: "Technology" },
    { id: "education", name: "Education" },
    { id: "healthcare", name: "Healthcare" },
    { id: "environment", name: "Environment" },
    { id: "safety", name: "Safety" },
    { id: "equality", name: "Equality" },
    { id: "digital-government", name: "Digital Govt" },
  ];

  const chartData = categoryKeys.map((cat) => {
    const score1 = country1.categories[cat.id]?.score ?? 50;
    const score2 = country2.categories[cat.id]?.score ?? 50;
    return {
      pillar: cat.name,
      [country1.name]: score1,
      [country2.name]: score2,
      fullMark: 100,
    };
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-card-hover p-5 sm:p-6 rounded-2xl border border-border/60 space-y-4"
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <RadarIcon className="w-5 h-5 text-primary" />
            10-Pillar Radar Comparison
          </h2>
          <p className="text-xs text-muted-foreground">
            Multi-dimensional comparative analysis across strategic evaluation categories (0 - 100 index)
          </p>
        </div>
      </div>

      {/* Recharts Container */}
      <div className="w-full h-[380px] sm:h-[420px] flex items-center justify-center">
        {mounted ? (
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={chartData} margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
              <PolarGrid stroke="currentColor" className="text-border/40" />
              <PolarAngleAxis
                dataKey="pillar"
                tick={{ fill: "currentColor", fontSize: 12, fontWeight: 600 }}
                className="text-foreground"
              />
              <PolarRadiusAxis
                angle={30}
                domain={[0, 100]}
                tick={{ fill: "currentColor", fontSize: 10 }}
                className="text-muted-foreground"
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(15, 23, 42, 0.95)",
                  borderColor: "rgba(255, 255, 255, 0.15)",
                  borderRadius: "12px",
                  color: "#fff",
                  fontSize: "12px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                }}
              />
              <Legend
                wrapperStyle={{ paddingTop: "10px", fontSize: "13px", fontWeight: "bold" }}
              />
              <Radar
                name={`${country1.flag} ${country1.name}`}
                dataKey={country1.name}
                stroke="#10B981"
                fill="#10B981"
                fillOpacity={0.4}
                strokeWidth={2.5}
              />
              <Radar
                name={`${country2.flag} ${country2.name}`}
                dataKey={country2.name}
                stroke="#6366F1"
                fill="#6366F1"
                fillOpacity={0.4}
                strokeWidth={2.5}
              />
            </RadarChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex items-center justify-center text-xs text-muted-foreground animate-pulse">
            Loading comparison radar chart...
          </div>
        )}
      </div>
    </motion.div>
  );
}
