import React from "react";
import { cn } from "@/lib/utils";

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
  variant?: "elevated" | "flat" | "glass" | "metric" | "compact" | "table";
  className?: string;
}

export function GlassCard({
  children,
  hoverEffect = true,
  variant = "glass",
  className,
  ...props
}: GlassCardProps) {
  const variantStyles = {
    elevated: "bg-card text-card-foreground border border-border shadow-lg rounded-xl",
    flat: "bg-card/60 text-card-foreground border border-border/60 rounded-xl",
    glass: "bg-card/80 text-card-foreground backdrop-blur-md border border-border shadow-sm rounded-xl",
    metric: "bg-card text-card-foreground border border-border shadow-xs rounded-xl p-5",
    compact: "bg-card/80 text-card-foreground border border-border/80 rounded-lg p-3",
    table: "bg-card text-card-foreground border border-border rounded-xl overflow-hidden",
  };

  const baseHover = hoverEffect
    ? "hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-200"
    : "";

  return (
    <div
      className={cn(
        variantStyles[variant] || variantStyles.glass,
        baseHover,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
