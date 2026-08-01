"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  BarChart,
  Bar,
  Cell,
} from "recharts";
import { CategoryDetailData } from "./category-data";
import { TrendingUp, Radar as RadarIcon, BarChart3, Activity } from "lucide-react";

export interface CategoryAnalyticsProps {
  category: CategoryDetailData;
  className?: string;
}

export function CategoryAnalytics({
  category,
  className,
}: CategoryAnalyticsProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="space-y-6">
      {/* Analytics Title */}
      <div className="flex items-center justify-between border-b border-border/40 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-[11px] font-bold uppercase tracking-wider inline-flex items-center gap-1">
              <Activity className="w-3.5 h-3.5" /> VISUAL ANALYTICS
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-foreground">
            {category.title} Analytics & Distribution Charts
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
            Multi-year longitudinal trajectory, pillar sub-dimensions, and global cohort positioning.
          </p>
        </div>
      </div>

      {/* Grid of 3 Recharts Analytics Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 1. Multi-Year Trend Line / Area Chart */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="glass-card p-5 sm:p-6 rounded-2xl border border-border/60 space-y-4 lg:col-span-2 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                Historical Trajectory (2020 – 2025)
              </h3>
              <p className="text-xs text-muted-foreground">
                India score progression vs global category average
              </p>
            </div>
          </div>

          <div className="w-full h-[280px] sm:h-[320px] flex items-center justify-center">
            {mounted ? (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={category.historicalTrend}
                  margin={{ top: 10, right: 20, left: -10, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="indiaTrendGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={category.accentColor || "#3B82F6"} stopOpacity={0.4} />
                      <stop offset="95%" stopColor={category.accentColor || "#3B82F6"} stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="year"
                    stroke="currentColor"
                    className="text-muted-foreground text-xs"
                  />
                  <YAxis
                    domain={[30, 100]}
                    stroke="currentColor"
                    className="text-muted-foreground text-xs"
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
                  <Legend wrapperStyle={{ paddingTop: "10px", fontSize: "12px" }} />
                  <Area
                    type="monotone"
                    dataKey="score"
                    name="India Score"
                    stroke={category.accentColor || "#3B82F6"}
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#indiaTrendGrad)"
                  />
                  <Area
                    type="monotone"
                    dataKey="globalAvg"
                    name="Global Avg"
                    stroke="#94A3B8"
                    strokeWidth={2}
                    strokeDasharray="4 4"
                    fill="none"
                  />
                </AreaChart>
              </ResponsiveContainer>
            ) : (
              <div className="text-xs text-muted-foreground animate-pulse">
                Loading trajectory chart...
              </div>
            )}
          </div>
        </motion.div>

        {/* 2. Sub-Dimension Radar Chart */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="glass-card p-5 sm:p-6 rounded-2xl border border-border/60 space-y-4 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-base font-bold text-foreground flex items-center gap-2">
              <RadarIcon className="w-4 h-4 text-emerald-400" />
              Sub-Pillar Radar Profile
            </h3>
            <p className="text-xs text-muted-foreground">
              Multi-sub-dimension breakdown (0 - 100)
            </p>
          </div>

          <div className="w-full h-[280px] sm:h-[320px] flex items-center justify-center">
            {mounted ? (
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={category.radarData} margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
                  <PolarGrid stroke="currentColor" className="text-border/40" />
                  <PolarAngleAxis
                    dataKey="pillar"
                    tick={{ fill: "currentColor", fontSize: 10, fontWeight: 600 }}
                    className="text-foreground"
                  />
                  <PolarRadiusAxis
                    angle={30}
                    domain={[0, 100]}
                    tick={{ fill: "currentColor", fontSize: 9 }}
                    className="text-muted-foreground"
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(15, 23, 42, 0.95)",
                      borderColor: "rgba(255, 255, 255, 0.15)",
                      borderRadius: "12px",
                      color: "#fff",
                      fontSize: "11px",
                    }}
                  />
                  <Radar
                    name="India Score"
                    dataKey="indiaScore"
                    stroke={category.accentColor || "#10B981"}
                    fill={category.accentColor || "#10B981"}
                    fillOpacity={0.4}
                    strokeWidth={2}
                  />
                  <Radar
                    name="Global Avg"
                    dataKey="globalAvg"
                    stroke="#94A3B8"
                    fill="#94A3B8"
                    fillOpacity={0.2}
                    strokeWidth={1.5}
                  />
                </RadarChart>
              </ResponsiveContainer>
            ) : (
              <div className="text-xs text-muted-foreground animate-pulse">
                Loading radar chart...
              </div>
            )}
          </div>
        </motion.div>

        {/* 3. Global Score Distribution Bar Chart */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="glass-card p-5 sm:p-6 rounded-2xl border border-border/60 space-y-4 lg:col-span-3 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-base font-bold text-foreground flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-purple-400" />
              Global Cohort Score Distribution
            </h3>
            <p className="text-xs text-muted-foreground">
              Number of countries by score range (highlighting India&apos;s active score bucket)
            </p>
          </div>

          <div className="w-full h-[220px] flex items-center justify-center">
            {mounted ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={category.distributionData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                  <XAxis dataKey="range" stroke="currentColor" className="text-muted-foreground text-xs" />
                  <YAxis stroke="currentColor" className="text-muted-foreground text-xs" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(15, 23, 42, 0.95)",
                      borderColor: "rgba(255, 255, 255, 0.15)",
                      borderRadius: "12px",
                      color: "#fff",
                      fontSize: "12px",
                    }}
                  />
                  <Bar dataKey="count" name="Country Count" radius={[6, 6, 0, 0]}>
                    {category.distributionData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.isIndia ? category.accentColor || "#8B5CF6" : "#475569"}
                        opacity={entry.isIndia ? 1 : 0.6}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="text-xs text-muted-foreground animate-pulse">
                Loading distribution chart...
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
