import React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "muted" | "glass";
}

export function Section({
  children,
  className,
  id,
  variant = "default",
  ...props
}: SectionProps) {
  const variantClass = {
    default: "bg-transparent",
    muted: "bg-muted/50 border-y border-border/40",
    glass: "glass-panel my-8",
  }[variant];

  return (
    <section
      id={id}
      className={cn(
        "w-full section-padding relative overflow-hidden",
        variantClass,
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
