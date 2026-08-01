"use client";

import React from "react";
import { LucideIcon, TrendingUp, CheckCircle2 } from "lucide-react";
import { OverviewCard } from "./overview-card";
import { CircularScore } from "./circular-score";

export interface PreviewCardItem {
  id: string;
  title: string;
  type: "score" | "rank" | "metric" | "info";
  value: string | number;
  subValue?: string;
  badge?: string;
  badgeVariant?: "default" | "success" | "warning" | "accent" | "danger";
  icon?: LucideIcon;
  description?: string;
  trend?: string;
}

export interface SnapshotCardProps {
  card: PreviewCardItem;
  className?: string;
  onClick?: () => void;
}

export function SnapshotCard({ card, className, onClick }: SnapshotCardProps) {
  const Icon = card.icon;

  if (card.type === "score") {
    return (
      <OverviewCard
        title={card.title}
        badge={card.badge}
        badgeVariant={card.badgeVariant}
        icon={Icon}
        className={className}
        onClick={onClick}
        footer={card.description}
      >
        <div className="flex items-center justify-between gap-4 py-1">
          <CircularScore score={typeof card.value === "number" ? card.value : 71.8} size={76} />
          <div className="flex flex-col justify-center">
            <span className="text-2xl font-extrabold text-foreground">71.8 / 100</span>
            <span className="text-xs text-muted-foreground mt-0.5">
              Strong performance across tech & economy
            </span>
          </div>
        </div>
      </OverviewCard>
    );
  }

  if (card.type === "rank") {
    return (
      <OverviewCard
        title={card.title}
        badge={card.badge}
        badgeVariant={card.badgeVariant}
        icon={Icon}
        className={className}
        onClick={onClick}
        footer={
          card.trend && (
            <span className="text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" />
              {card.trend}
            </span>
          )
        }
      >
        <div className="flex items-baseline gap-2 py-2">
          <span className="text-4xl font-extrabold tracking-tight text-foreground">
            {card.value}
          </span>
          <span className="text-lg font-semibold text-muted-foreground">
            {card.subValue || "/ 193"}
          </span>
        </div>
      </OverviewCard>
    );
  }

  return (
    <OverviewCard
      title={card.title}
      badge={card.badge}
      badgeVariant={card.badgeVariant}
      icon={Icon}
      className={className}
      onClick={onClick}
      footer={card.description}
    >
      <div className="py-2">
        <div className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
          {card.value}
        </div>
      </div>
    </OverviewCard>
  );
}
