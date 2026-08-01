"use client";

import React, { useState } from "react";
import {
  FileText,
  Download,
  FileSpreadsheet,
  Sparkles,
  Calendar,
  Layers,
  RefreshCw,
  Printer,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ReportType, REPORT_TEMPLATES } from "./report-data";

export interface ReportsHeaderProps {
  selectedYear: string;
  onYearChange: (year: string) => void;
  selectedReportType: ReportType;
  onReportTypeChange: (type: ReportType) => void;
  onGenerateReport: () => void;
  onExportPDF: () => void;
  onExportCSV: () => void;
  isGenerating?: boolean;
}

export function ReportsHeader({
  selectedYear,
  onYearChange,
  selectedReportType,
  onReportTypeChange,
  onGenerateReport,
  onExportPDF,
  onExportCSV,
  isGenerating = false,
}: ReportsHeaderProps) {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handlePdfClick = () => {
    onExportPDF();
    triggerToast("Generating & preparing PDF print preview...");
  };

  const handleCsvClick = () => {
    onExportCSV();
    triggerToast("Exporting CSV report dataset...");
  };

  return (
    <div className="flex flex-col gap-6 pb-6 border-b border-border/40">
      {/* Top Title & Subtitle */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-[11px] font-bold tracking-wider uppercase inline-flex items-center gap-1">
              <FileText className="w-3.5 h-3.5" /> INTELLIGENCE SUITE
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Reports <span className="text-gradient-primary">Center</span>
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-1 max-w-3xl">
            Generate comprehensive intelligence reports powered by India's global ranking data and AI insights.
          </p>
        </div>

        {/* Action Buttons: Export PDF & CSV */}
        <div className="flex items-center gap-2.5 self-start lg:self-auto">
          <button
            onClick={handleCsvClick}
            className="inline-flex items-center gap-2 px-3.5 py-2.5 text-xs font-bold rounded-xl bg-card border border-border text-foreground hover:bg-secondary hover:border-primary/40 transition-all shadow-xs active:scale-95 cursor-pointer"
            title="Export CSV Dataset"
          >
            <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
            <span>Export CSV</span>
          </button>

          <button
            onClick={handlePdfClick}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-xl bg-gradient-primary text-white shadow-glow hover:opacity-95 transition-all active:scale-95 cursor-pointer"
            title="Export PDF Document"
          >
            <Printer className="w-4 h-4" />
            <span>Export PDF</span>
          </button>
        </div>
      </div>

      {/* Top Controls Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 p-3.5 rounded-2xl glass-card border border-border/60">
        {/* 1. Year Selector */}
        <div className="lg:col-span-3 flex items-center gap-2 bg-background/60 p-1.5 rounded-xl border border-border/50">
          <Calendar className="w-4 h-4 text-primary ml-2 shrink-0" />
          <span className="text-xs font-semibold text-muted-foreground shrink-0">Year:</span>
          <select
            value={selectedYear}
            onChange={(e) => onYearChange(e.target.value)}
            className="flex-1 bg-card text-foreground text-xs font-bold py-1.5 px-2.5 rounded-lg border border-border/80 hover:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all cursor-pointer"
            aria-label="Select Report Year"
          >
            {["2025", "2024", "2023", "2022", "2021", "2020"].map((y) => (
              <option key={y} value={y}>
                {y} Edition
              </option>
            ))}
          </select>
        </div>

        {/* 2. Report Type Selector */}
        <div className="lg:col-span-5 flex items-center gap-2 bg-background/60 p-1.5 rounded-xl border border-border/50">
          <Layers className="w-4 h-4 text-primary ml-2 shrink-0" />
          <span className="text-xs font-semibold text-muted-foreground shrink-0">Template:</span>
          <select
            value={selectedReportType}
            onChange={(e) => onReportTypeChange(e.target.value as ReportType)}
            className="flex-1 bg-card text-foreground text-xs font-bold py-1.5 px-2.5 rounded-lg border border-border/80 hover:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all cursor-pointer truncate"
            aria-label="Select Report Template"
          >
            {REPORT_TEMPLATES.map((tmpl) => (
              <option key={tmpl.id} value={tmpl.id}>
                {tmpl.title} ({tmpl.badge})
              </option>
            ))}
          </select>
        </div>

        {/* 3. Generate Report Button */}
        <div className="lg:col-span-4 flex items-center">
          <button
            onClick={onGenerateReport}
            disabled={isGenerating}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-extrabold rounded-xl bg-card border border-primary/40 text-primary hover:bg-primary/10 hover:border-primary transition-all active:scale-95 shadow-xs cursor-pointer disabled:opacity-60"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isGenerating ? "animate-spin" : ""}`} />
            <span>{isGenerating ? "Synthesizing Report..." : "Generate Fresh Report"}</span>
          </button>
        </div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-2xl bg-slate-900/95 text-white text-xs font-semibold shadow-2xl border border-primary/40 flex items-center gap-3 backdrop-blur-md"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
