"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Calendar,
  Globe,
  RefreshCw,
  CheckCircle2,
  Tag,
} from "lucide-react";
import { DataOrganization } from "./source-data";
import { cn } from "@/lib/utils";
import { openAIDrawer } from "@/components/common/ai-drawer";

export interface SourceCardProps {
  organization: DataOrganization;
  className?: string;
}

export function SourceCard({ organization, className }: SourceCardProps) {
  const initials = organization.shortName || organization.name.slice(0, 3).toUpperCase();

  const handleClick = () => {
    openAIDrawer({
      page: "Sources",
      section: "Multilateral Organizations",
      card: organization.name,
      title: `${organization.name} (${organization.shortName})`,
      type: "source",
      country: "Global / India",
      year: "2025",
      metadata: {
        category: (organization as any).category || "Multilateral Source",
        indicatorsTracked: (organization as any).indicatorsTracked || (organization as any).indicatorCount || 10,
        reliabilityScore: (organization as any).reliabilityScore || "98%",
        updateFrequency: (organization as any).updateFrequency || "Annual",
        description: (organization as any).description || organization.name,
      },
    });
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      onClick={handleClick}
      className={cn(
        "glass-card-hover p-6 flex flex-col justify-between border border-border/60 rounded-2xl relative overflow-hidden group shadow-md transition-all duration-300 cursor-pointer",
        className
      )}
    >
      {/* Top Accent Line on Hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div>
        {/* Header: Logo Badge, Name & Category */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            {/* Styled Logo Avatar Placeholder */}
            <div
              className={cn(
                "w-12 h-12 rounded-xl border flex items-center justify-center font-extrabold text-sm tracking-wide shadow-xs shrink-0 transition-transform group-hover:scale-105",
                organization.logoBadgeColor || "bg-primary/10 text-primary border-primary/20"
              )}
            >
              {initials}
            </div>

            <div>
              <h3 className="text-base font-bold text-foreground tracking-tight group-hover:text-primary transition-colors leading-tight">
                {organization.name}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground border border-border/40 inline-flex items-center gap-1">
                  <Tag className="w-3 h-3 text-primary" />
                  {organization.category}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
          {organization.description}
        </p>

        {/* Key Metadata Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 p-3 rounded-xl bg-background/50 border border-border/40 mb-4 text-xs">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground/80 flex items-center gap-1">
              <RefreshCw className="w-3 h-3 text-primary shrink-0" /> Update Freq.
            </span>
            <span className="font-semibold text-foreground mt-0.5 truncate" title={organization.updateFrequency}>
              {organization.updateFrequency}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground/80 flex items-center gap-1">
              <Globe className="w-3 h-3 text-emerald-400 shrink-0" /> Coverage
            </span>
            <span className="font-semibold text-foreground mt-0.5 truncate" title={organization.datasetCoverage}>
              {organization.datasetCoverage}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground/80 flex items-center gap-1">
              <Calendar className="w-3 h-3 text-amber-400 shrink-0" /> Last Sync
            </span>
            <span className="font-semibold text-foreground mt-0.5 truncate" title={organization.lastUpdated}>
              {organization.lastUpdated}
            </span>
          </div>
        </div>

        {/* Supported Indicators Tags */}
        <div className="mb-4">
          <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider block mb-2">
            Supported Indicators ({organization.supportedIndicators.length})
          </span>
          <div className="flex flex-wrap gap-1.5">
            {organization.supportedIndicators.map((indicator, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded-lg bg-card/80 border border-border/60 text-[11px] font-medium text-foreground/90 flex items-center gap-1 group-hover:border-primary/30 transition-colors"
              >
                <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                {indicator}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Verified Source Footer */}
      <div className="pt-3 border-t border-border/40 flex items-center justify-between gap-3">
        <span className="text-[11px] font-medium text-muted-foreground inline-flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Verified Source API Data
        </span>
      </div>
    </motion.div>
  );
}
