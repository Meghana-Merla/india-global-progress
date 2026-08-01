"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { GeneratedReport } from "./report-data";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";
import {
  FileText,
  Sparkles,
  Award,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  Brain,
  Globe,
  Database,
  Printer,
  FileSpreadsheet,
  ArrowUpRight,
  ArrowDownRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

export interface ReportPreviewProps {
  report: GeneratedReport;
  onExportPDF: () => void;
  onExportCSV: () => void;
  onBenchmarkCountryChange?: (country: string) => void;
  isGenerating?: boolean;
}

export function ReportPreview({
  report,
  onExportPDF,
  onExportCSV,
  onBenchmarkCountryChange,
  isGenerating = false,
}: ReportPreviewProps) {
  const [activeTab, setActiveTab] = useState<"full" | "indicators" | "categories" | "ai">("full");

  // Format Recharts data for Category Performance Chart
  const categoryChartData = report.categoryPerformance.map((cat) => ({
    name: cat.name,
    score: cat.score,
  }));

  // Format Recharts data for Historical Trend Chart
  const trendChartData = report.historicalTrends.map((t) => ({
    year: t.year,
    rank: t.rank,
    score: t.score,
  }));

  return (
    <GlassCard hoverEffect className="p-6 sm:p-8 border border-border/60 space-y-8 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Document Header Banner */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-border/40 pb-6 relative z-10">
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-gradient-primary text-white text-[10px] font-extrabold uppercase tracking-wider shadow-xs">
              {report.type.toUpperCase()} REPORT
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground text-[11px] font-bold">
              {report.year} Edition
            </span>
            <span className="text-xs text-muted-foreground font-medium">
              Generated: {report.generatedAt}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground">
            {report.title}
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-3xl">
            {report.subtitle}
          </p>

          {/* Benchmark Peer Switcher for Comparison Report */}
          {report.type === "comparison" && onBenchmarkCountryChange && (
            <div className="flex items-center gap-2 pt-2">
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold text-muted-foreground">Compare Against:</span>
              <select
                value={report.benchmarkCountry}
                onChange={(e) => onBenchmarkCountryChange(e.target.value)}
                className="bg-card text-foreground text-xs font-bold py-1 px-2.5 rounded-lg border border-border/80 hover:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all cursor-pointer"
              >
                {["USA", "China", "United Kingdom", "Germany", "Japan", "Brazil"].map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Action Export Buttons inside Preview */}
        <div className="flex items-center gap-2.5 self-start lg:self-auto">
          <button
            onClick={onExportCSV}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-xl bg-card border border-border text-foreground hover:bg-secondary hover:border-primary/40 transition-all shadow-xs cursor-pointer"
            title="Export CSV Data"
          >
            <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" />
            <span>CSV</span>
          </button>

          <button
            onClick={onExportPDF}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-extrabold rounded-xl bg-gradient-primary text-white shadow-glow hover:opacity-95 transition-all cursor-pointer"
            title="Export PDF Document"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print PDF</span>
          </button>
        </div>
      </div>

      {/* Loading Overlay */}
      {isGenerating && (
        <div className="p-4 rounded-xl bg-primary/10 border border-primary/30 text-primary text-xs font-bold flex items-center justify-center gap-2 animate-pulse">
          <Sparkles className="w-4 h-4 animate-spin" />
          <span>IndiaLens AI is generating your fresh report data...</span>
        </div>
      )}

      {/* 1. Executive Summary Section */}
      <section className="space-y-3 relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
            <Brain className="w-4 h-4" />
          </div>
          <h3 className="text-lg font-bold text-foreground tracking-tight">
            1. Executive Summary
          </h3>
        </div>

        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-indigo-500/10 to-purple-500/10 border border-primary/30 shadow-soft">
          <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed font-medium">
            {report.executiveSummary}
          </p>
        </div>
      </section>

      {/* 2. Key Strategic Indicators Section */}
      <section className="space-y-4 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-bold text-foreground tracking-tight">
              2. Key Strategic Indicators ({report.year})
            </h3>
          </div>
          <span className="text-xs text-muted-foreground font-medium">
            {report.keyIndicators.length} Key Global Benchmarks
          </span>
        </div>

        {/* Indicators Data Table */}
        <div className="overflow-x-auto rounded-2xl border border-border/60 bg-card/80 shadow-xs">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-border/60 bg-muted/40 text-muted-foreground font-bold text-[11px] uppercase tracking-wider">
                <th className="p-3.5">Indicator Name</th>
                <th className="p-3.5">Category</th>
                <th className="p-3.5">Global Rank</th>
                <th className="p-3.5">Metric Score</th>
                <th className="p-3.5">Change</th>
                <th className="p-3.5">Source</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40 font-medium">
              {report.keyIndicators.map((ind) => (
                <tr key={ind.id} className="hover:bg-secondary/40 transition-colors">
                  <td className="p-3.5 font-bold text-foreground">{ind.name}</td>
                  <td className="p-3.5">
                    <span className="px-2 py-0.5 rounded bg-secondary text-secondary-foreground text-[10px] font-bold">
                      {ind.category}
                    </span>
                  </td>
                  <td className="p-3.5 font-extrabold text-primary">{ind.globalRank}</td>
                  <td className="p-3.5 text-foreground">{ind.score}</td>
                  <td className="p-3.5">
                    <span
                      className={`inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                        ind.status === "improved"
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                          : "bg-rose-500/10 text-rose-400 border border-rose-500/30"
                      }`}
                    >
                      {ind.status === "improved" ? (
                        <ArrowUpRight className="w-3 h-3" />
                      ) : (
                        <ArrowDownRight className="w-3 h-3" />
                      )}
                      {ind.change}
                    </span>
                  </td>
                  <td className="p-3.5 text-muted-foreground text-xs">{ind.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. Category Performance & 9. Charts */}
      <section className="space-y-4 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-bold text-foreground tracking-tight">
              3. Category Performance Breakdown
            </h3>
          </div>
          <span className="text-xs text-muted-foreground font-medium">
            Overall Pillar Score (0–100)
          </span>
        </div>

        {/* Visual Bar Chart for Categories */}
        <div className="p-5 rounded-2xl bg-card/90 border border-border/60 shadow-xs space-y-3">
          <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
            Domain Score Benchmarks Visualization
          </h4>
          <div className="w-full h-[220px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categoryChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="currentColor" className="text-border/30" vertical={false} />
                <XAxis dataKey="name" tick={{ fill: "currentColor", fontSize: 10 }} className="text-muted-foreground" axisLine={false} tickLine={false} />
                <YAxis domain={[0, 100]} tick={{ fill: "currentColor", fontSize: 10 }} className="text-muted-foreground" axisLine={false} tickLine={false} />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-slate-950/95 border border-primary/40 p-2.5 rounded-xl text-xs font-bold text-foreground shadow-xl">
                          <div>{payload[0].payload.name}</div>
                          <div className="text-primary">{payload[0].value} / 100 pts</div>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="score" fill="#3B82F6" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Category Performance Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {report.categoryPerformance.map((cat) => (
            <div
              key={cat.id}
              className="p-4 rounded-xl bg-card border border-border/60 space-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-bold text-foreground">{cat.name}</span>
                  <span className="font-extrabold text-primary">{cat.globalRank}</span>
                </div>
                <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-primary h-full rounded-full transition-all duration-500"
                    style={{ width: `${cat.score}%` }}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between text-[11px] text-muted-foreground pt-1 border-t border-border/30">
                <span>Score: <strong className="text-foreground">{cat.score}</strong></span>
                <span>Top Peer: <strong className="text-foreground">{cat.topPeer}</strong> ({cat.gap})</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Historical Trends Section */}
      <section className="space-y-4 relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
            <Zap className="w-4 h-4" />
          </div>
          <h3 className="text-lg font-bold text-foreground tracking-tight">
            4. Historical Multi-Year Trajectory
          </h3>
        </div>

        <div className="p-5 rounded-2xl bg-card/90 border border-border/60 shadow-xs space-y-3">
          <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
            Multi-Year Progress Trajectory (2020–{report.year})
          </h4>
          <div className="w-full h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="currentColor" className="text-border/30" vertical={false} />
                <XAxis dataKey="year" tick={{ fill: "currentColor", fontSize: 11 }} className="text-muted-foreground" axisLine={false} tickLine={false} />
                <YAxis domain={[0, 100]} tick={{ fill: "currentColor", fontSize: 10 }} className="text-muted-foreground" axisLine={false} tickLine={false} />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-slate-950/95 border border-primary/40 p-2.5 rounded-xl text-xs font-bold text-foreground shadow-xl">
                          <div>{payload[0].payload.year} Edition</div>
                          <div className="text-emerald-400">Score: {payload[0].value} pts</div>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Line type="monotone" dataKey="score" stroke="#10B981" strokeWidth={3} dot={{ r: 4, fill: "#10B981" }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* 5. Strengths & 6. Areas for Improvement Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {/* Strengths */}
        <div className="p-5 sm:p-6 rounded-2xl bg-card/80 border border-emerald-500/30 space-y-4">
          <div className="flex items-center gap-2 text-emerald-400 font-extrabold text-sm uppercase tracking-wider border-b border-emerald-500/20 pb-3">
            <CheckCircle2 className="w-4 h-4" />
            <span>5. Key Strategic Strengths</span>
          </div>
          <ul className="space-y-2.5">
            {report.strengths.map((str, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                <span>{str}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Areas for Improvement */}
        <div className="p-5 sm:p-6 rounded-2xl bg-card/80 border border-rose-500/30 space-y-4">
          <div className="flex items-center gap-2 text-rose-400 font-extrabold text-sm uppercase tracking-wider border-b border-rose-500/20 pb-3">
            <AlertCircle className="w-4 h-4" />
            <span>6. Areas for Improvement</span>
          </div>
          <ul className="space-y-2.5">
            {report.areasForImprovement.map((area, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                <span>{area}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. AI Recommendations Section */}
      <section className="space-y-3 relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center">
            <Sparkles className="w-4 h-4" />
          </div>
          <h3 className="text-lg font-bold text-foreground tracking-tight">
            7. AI Recommendations (Gemini 2.5 Flash)
          </h3>
        </div>

        <div className="p-5 sm:p-6 rounded-2xl bg-card/90 border border-purple-500/30 space-y-3 shadow-soft">
          <ul className="space-y-3">
            {report.aiRecommendations.map((rec, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-foreground font-medium">
                <span className="w-6 h-6 rounded-lg bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  0{idx + 1}
                </span>
                <span className="leading-relaxed">{rec}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8. Data Sources Section & Footer */}
      <section className="space-y-3 pt-4 border-t border-border/40 relative z-10 text-xs">
        <div className="flex items-center gap-2 text-muted-foreground font-bold uppercase tracking-wider text-[11px]">
          <Database className="w-3.5 h-3.5 text-primary" />
          <span>8. Official Data Sources & Citations</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {report.dataSources.map((src, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-xl bg-card border border-border/60 text-muted-foreground text-xs font-semibold"
            >
              {src}
            </span>
          ))}
        </div>

        {/* Footer info */}
        <div className="pt-6 mt-4 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between text-muted-foreground text-[11px]">
          <div>
            Official Intelligence Document • Generated by <strong className="text-foreground">IndiaLens AI Platform</strong>
          </div>
          <div className="mt-2 sm:mt-0 font-medium">
            India Lens AI © {report.year} • All Rights Reserved
          </div>
        </div>
      </section>
    </GlassCard>
  );
}
