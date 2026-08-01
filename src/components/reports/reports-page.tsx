"use client";

import React, { useState, useMemo } from "react";
import { ReportsHeader } from "./reports-header";
import { ReportTemplateCard } from "./report-template-card";
import { ReportPreview } from "./report-preview";
import {
  ReportType,
  REPORT_TEMPLATES,
  generateReportData,
} from "./report-data";
import { exportReportCSV, exportReportPDF } from "./report-export";
import { useYear } from "@/providers";
import { FileText, Sparkles } from "lucide-react";

export function ReportsPage() {
  const { selectedYear, setSelectedYear } = useYear();
  const [selectedReportType, setSelectedReportType] = useState<ReportType>("executive");
  const [benchmarkCountry, setBenchmarkCountry] = useState<string>("USA");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  // Synchronize with Global Year Provider
  const handleYearChange = (year: string) => {
    if (["2022", "2023", "2024", "2025"].includes(year)) {
      setSelectedYear(year as any);
    }
  };

  // Generate dynamic report data based on template, year, and benchmark country
  const reportData = useMemo(() => {
    return generateReportData(selectedReportType, selectedYear, benchmarkCountry);
  }, [selectedReportType, selectedYear, benchmarkCountry]);

  // Simulate dynamic fresh report generation with loading spinner
  const handleGenerateReport = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 800);
  };

  // Handlers for exporting PDF and CSV
  const handleExportPDF = () => {
    exportReportPDF(reportData);
  };

  const handleExportCSV = () => {
    exportReportCSV(reportData);
  };

  return (
    <div className="space-y-10 pb-16">
      {/* 1. Page Header */}
      <ReportsHeader
        selectedYear={selectedYear}
        onYearChange={handleYearChange}
        selectedReportType={selectedReportType}
        onReportTypeChange={setSelectedReportType}
        onGenerateReport={handleGenerateReport}
        onExportPDF={handleExportPDF}
        onExportCSV={handleExportCSV}
        isGenerating={isGenerating}
      />

      {/* 2. Report Templates Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold tracking-tight text-foreground flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
            Select Report Template
          </h2>
          <span className="text-xs text-muted-foreground font-medium">
            4 Professional Templates Available
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {REPORT_TEMPLATES.map((tmpl, idx) => (
            <ReportTemplateCard
              key={tmpl.id}
              template={tmpl}
              isSelected={selectedReportType === tmpl.id}
              onSelect={() => setSelectedReportType(tmpl.id)}
              index={idx}
            />
          ))}
        </div>
      </section>

      {/* 3. Interactive Report Preview Panel */}
      <section className="space-y-4 pt-2">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold tracking-tight text-foreground flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            Report Document Preview
          </h2>
          <span className="text-xs text-muted-foreground font-medium">
            Live Preview • {reportData.title}
          </span>
        </div>

        <ReportPreview
          report={reportData}
          onExportPDF={handleExportPDF}
          onExportCSV={handleExportCSV}
          onBenchmarkCountryChange={setBenchmarkCountry}
          isGenerating={isGenerating}
        />
      </section>
    </div>
  );
}
