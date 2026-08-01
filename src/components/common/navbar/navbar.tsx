"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Sun, Moon, Menu, ChevronDown } from "lucide-react";
import { NavItem, navigationItems } from "./nav-links";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";
import { cn } from "@/lib/utils";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export interface NavbarProps {
  items?: NavItem[];
  className?: string;
}

export function Navbar({ items = navigationItems, className }: NavbarProps) {
  const pathname = usePathname();
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = resolvedTheme || theme;

  const handleToggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  // Primary visible items on desktop
  const primaryTitles = ["Home", "Dashboard", "Categories", "Compare", "World Map", "AI Insights"];
  const primaryItems = items.filter((item) => primaryTitles.includes(item.title));
  const secondaryItems = items.filter((item) => !primaryTitles.includes(item.title));

  const isMoreActive = secondaryItems.some(
    (item) =>
      pathname === item.href ||
      (item.href !== "/" && pathname.startsWith(item.href))
  );

  return (
    <nav
      className={cn(
        "w-full h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto gap-4 border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-40",
        className
      )}
    >
      {/* Left Section: Brand Logo */}
      <div className="flex items-center shrink-0">
        <Logo />
      </div>

      {/* Center Navigation: Desktop Nav Pills */}
      <div className="hidden lg:flex items-center gap-1 bg-secondary/80 p-1 rounded-lg border border-border shrink-0">
        {primaryItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.title}
              href={item.href}
              className={cn(
                "relative px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-150 flex items-center gap-1 select-none shrink-0",
                isActive
                  ? "text-primary bg-primary/10 shadow-xs border border-primary/20 font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-background/60"
              )}
            >
              <span className="relative z-10">{item.title}</span>
              {item.badge && (
                <span className="relative z-10 px-1.5 py-0.2 text-[9px] font-bold rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}

        {/* More Dropdown for remaining desktop items */}
        {secondaryItems.length > 0 && (
          <div className="relative">
            <button
              onClick={() => setMoreOpen((prev) => !prev)}
              className={cn(
                "px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-150 flex items-center gap-1 cursor-pointer select-none shrink-0",
                isMoreActive
                  ? "bg-purple-600 text-white font-semibold"
                  : "text-zinc-400 hover:text-zinc-100 hover:bg-white/5"
              )}
              aria-label="More navigation pages"
            >
              <span>More</span>
              <ChevronDown
                className={cn(
                  "w-3.5 h-3.5 transition-transform duration-200",
                  moreOpen && "rotate-180"
                )}
              />
            </button>

            <AnimatePresence>
              {moreOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setMoreOpen(false)}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 mt-2 w-44 py-1.5 rounded-2xl bg-background/95 backdrop-blur-xl border border-border/60 shadow-2xl z-50 flex flex-col gap-0.5 p-1.5"
                  >
                    {secondaryItems.map((item) => {
                      const Icon = item.icon;
                      const isActive =
                        pathname === item.href ||
                        (item.href !== "/" && pathname.startsWith(item.href));

                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={() => setMoreOpen(false)}
                          className={cn(
                            "flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium transition-colors select-none",
                            isActive
                              ? "bg-primary/10 text-primary font-bold border border-primary/20"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                          )}
                        >
                          {Icon && <Icon className="w-3.5 h-3.5 text-primary shrink-0" />}
                          <span>{item.title}</span>
                        </Link>
                      );
                    })}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Right Section: Action Icons */}
      <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
        {/* Command Palette Trigger Button */}
        <button
          onClick={() => window.dispatchEvent(new CustomEvent("open-command-palette"))}
          className="flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-secondary/60 border border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all text-xs font-medium cursor-pointer shadow-xs"
          aria-label="Open Command Palette (Ctrl+K)"
          title="Open Command Palette (Ctrl+K)"
        >
          <Search className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-primary shrink-0" />
          <span className="hidden sm:inline">Search...</span>
          <kbd className="hidden md:inline-block px-1.5 py-0.2 rounded text-[10px] font-bold bg-background border border-border/80 text-muted-foreground shadow-xs">
            ⌘K
          </kbd>
        </button>

        {/* Theme Toggle Button */}
        {mounted && (
          <button
            onClick={handleToggleTheme}
            className="p-2 sm:p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle Theme"
            title="Toggle Theme"
          >
            {currentTheme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-400" />
            )}
          </button>
        )}

        {/* GitHub Link Button */}
        <a
          href="https://github.com/Meghana-Merla/india-global-progress"
          target="_blank"
          rel="noreferrer"
          className="p-2 sm:p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors focus:outline-none"
          aria-label="GitHub Repository"
          title="GitHub Repository"
        >
          <GithubIcon className="w-4 h-4" />
        </a>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="lg:hidden p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors focus:outline-none active:scale-95 cursor-pointer"
          aria-label="Open mobile menu"
          title="Open mobile menu"
        >
          <Menu className="w-5 h-5 text-foreground" />
        </button>
      </div>

      {/* Slide-in Mobile Drawer */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        items={items}
        activePathname={pathname}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />
    </nav>
  );
}
