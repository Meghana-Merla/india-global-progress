import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  badge?: string;
  action?: React.ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({
  title,
  description,
  badge,
  action,
  align = "left",
  className,
  ...props
}: SectionHeadingProps) {
  const alignClass = {
    left: "text-left items-start",
    center: "text-center items-center justify-center mx-auto",
    right: "text-right items-end ml-auto",
  }[align];

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-12 w-full",
        align === "center" && "md:flex-col",
        className
      )}
      {...props}
    >
      <div className={cn("flex flex-col gap-2 max-w-3xl", alignClass)}>
        {badge && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 tracking-wide uppercase">
            {badge}
          </span>
        )}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          {title}
        </h2>
        {description && (
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {action && <div className="flex-shrink-0 mt-4 md:mt-0">{action}</div>}
    </div>
  );
}
