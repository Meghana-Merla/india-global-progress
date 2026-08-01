"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface OverviewCardProps {
  title: string;
  badge?: string;
  badgeVariant?: "default" | "success" | "warning" | "accent" | "danger";
  icon?: LucideIcon;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function OverviewCard({
  title,
  badge,
  badgeVariant = "default",
  icon: Icon,
  children,
  footer,
  className,
  onClick,
}: OverviewCardProps) {
  const badgeStyles = {
    default: "bg-secondary text-secondary-foreground border-border/40",
    success: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    warning: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    accent: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",
    danger: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
  }[badgeVariant];

  return (
    <motion.div
      variants={{
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      onClick={onClick}
      className={cn(
        "glass-card-hover p-6 flex flex-col justify-between shadow-soft border border-border/50 relative overflow-hidden group select-none min-h-[190px]",
        onClick && "cursor-pointer",
        className
      )}
    >
      {/* Header Row: Title & Badge */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-2.5">
          {Icon && (
            <div className="p-2 rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
              <Icon className="w-4 h-4" />
            </div>
          )}
          <h3 className="text-sm font-semibold text-foreground tracking-tight">
            {title}
          </h3>
        </div>

        {badge && (
          <span
            className={cn(
              "px-2.5 py-0.5 text-[11px] font-semibold rounded-full border tracking-wide whitespace-nowrap",
              badgeStyles
            )}
          >
            {badge}
          </span>
        )}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col justify-center">{children}</div>

      {/* Optional Footer */}
      {footer && (
        <div className="mt-4 pt-3 border-t border-border/40 text-xs text-muted-foreground flex items-center gap-1.5">
          {footer}
        </div>
      )}
    </motion.div>
  );
}
