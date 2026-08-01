"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { ReportTemplate } from "./report-data";
import {
  FileText,
  GitCompare,
  Layers,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

export interface ReportTemplateCardProps {
  template: ReportTemplate;
  isSelected: boolean;
  onSelect: () => void;
  index?: number;
}

export function ReportTemplateCard({
  template,
  isSelected,
  onSelect,
  index = 0,
}: ReportTemplateCardProps) {
  // Select icon component
  const renderIcon = () => {
    switch (template.iconName) {
      case "comparison":
        return <GitCompare className="w-5 h-5 text-indigo-400" />;
      case "category":
        return <Layers className="w-5 h-5 text-emerald-400" />;
      case "annual":
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      default:
        return <FileText className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.08 }}
      onClick={onSelect}
      className="cursor-pointer h-full"
    >
      <GlassCard
        hoverEffect
        className={`p-5 rounded-2xl border transition-all duration-300 h-full flex flex-col justify-between relative group ${
          isSelected
            ? "border-primary bg-primary/10 shadow-glow"
            : "border-border/60 hover:border-primary/50 bg-card/80"
        }`}
      >
        {/* Top Header */}
        <div>
          <div className="flex items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2.5">
              <div
                className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${
                  isSelected
                    ? "bg-primary text-white border-primary/40 shadow-xs"
                    : "bg-background/80 border-border/80 text-foreground"
                }`}
              >
                {renderIcon()}
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                  {template.badge}
                </span>
                {template.popular && (
                  <span className="ml-1.5 text-[10px] font-bold text-amber-400">
                    ★ Popular
                  </span>
                )}
              </div>
            </div>

            {/* Selection Check Circle */}
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${
                isSelected
                  ? "bg-primary text-white scale-110"
                  : "border border-border/80 text-transparent group-hover:border-primary/60"
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Title & Description */}
          <h3 className="text-base font-extrabold text-foreground group-hover:text-primary transition-colors">
            {template.title}
          </h3>
          <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed line-clamp-3">
            {template.description}
          </p>
        </div>

        {/* Footer Action Tag */}
        <div className="pt-4 mt-3 border-t border-border/30 flex items-center justify-between text-xs font-semibold">
          <span className={isSelected ? "text-primary font-bold" : "text-muted-foreground"}>
            {isSelected ? "Active Template" : "Select Template"}
          </span>
          <span className="inline-flex items-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity text-[11px]">
            Preview <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>

        {/* Ambient Glow */}
        {isSelected && (
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/15 rounded-full blur-xl pointer-events-none" />
        )}
      </GlassCard>
    </motion.div>
  );
}
