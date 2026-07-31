import React from "react";
import { Navbar } from "@/components/common/navbar";
import { CommandPalette } from "@/components/common/command-palette";
import { cn } from "@/lib/utils";

export interface AppShellProps {
  children: React.ReactNode;
  headerContent?: React.ReactNode;
  footerContent?: React.ReactNode;
  className?: string;
}

export function AppShell({
  children,
  headerContent,
  footerContent,
  className,
}: AppShellProps) {
  return (
    <div className="min-h-screen flex flex-col w-full bg-background text-foreground relative selection:bg-primary/20 selection:text-primary">
      {/* Background Ambient Mesh */}
      <div className="fixed inset-0 pointer-events-none bg-gradient-mesh z-0" />

      {/* Sticky Header Container */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md transition-all duration-300">
        {headerContent ? headerContent : <Navbar />}
      </header>

      {/* Main Content Area */}
      <main className={cn("flex-1 w-full relative z-10", className)}>
        {children}
      </main>

      {/* Footer Container */}
      <footer className="w-full border-t border-border/40 bg-background/60 backdrop-blur-sm py-8 relative z-10 mt-auto">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {footerContent ? (
            footerContent
          ) : (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="font-bold text-foreground tracking-tight">IndiaLens <span className="text-primary">AI</span></span>
                <span className="text-muted-foreground/60">•</span>
                <span>AI-powered Global Intelligence Dashboard</span>
              </div>
              <p className="text-xs">© {new Date().getFullYear()} IndiaLens AI. All rights reserved.</p>
            </div>
          )}
        </div>
      </footer>

      {/* Global AI Command Palette Modal */}
      <CommandPalette />
    </div>
  );
}
