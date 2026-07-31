import React from "react";
import { cn } from "@/lib/utils";

export interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  maxWidth?: "default" | "full" | "narrow";
}

export function PageContainer({
  children,
  className,
  maxWidth = "default",
  ...props
}: PageContainerProps) {
  const maxWidthClass = {
    default: "max-w-[1440px]",
    full: "max-w-full",
    narrow: "max-w-5xl",
  }[maxWidth];

  return (
    <div
      className={cn(
        "mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 w-full",
        maxWidthClass,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
