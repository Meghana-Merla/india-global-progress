import React from "react";
import { cn } from "@/lib/utils";

export interface StatsGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}

export function StatsGrid({
  children,
  columns = 4,
  className,
  ...props
}: StatsGridProps) {
  const columnClass = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <div
      className={cn(
        "grid gap-4 sm:gap-6 w-full",
        columnClass,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
