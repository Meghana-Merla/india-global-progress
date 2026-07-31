import React from "react";
import { cn } from "@/lib/utils";

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
  className?: string;
}

export function GlassCard({
  children,
  hoverEffect = true,
  className,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        hoverEffect ? "glass-card-hover" : "glass-card",
        "p-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
