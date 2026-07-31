"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Search, Sun, Moon, Menu } from "lucide-react";
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
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav
      className={cn(
        "w-full h-[72px] flex items-center justify-between px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto",
        className
      )}
    >
      {/* Left Section: Brand Logo */}
      <div className="flex items-center gap-6">
        <Logo />
      </div>

      {/* Center Navigation: Desktop Nav Pills */}
      <div className="hidden lg:flex items-center gap-1 bg-secondary/50 p-1.5 rounded-full border border-border/40 backdrop-blur-sm shadow-inner">
        {items.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.title}
              href={item.href}
              className={cn(
                "relative px-3.5 py-1.5 text-xs md:text-sm font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 select-none",
                isActive
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-background/40"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="active-nav-pill"
                  className="absolute inset-0 bg-background shadow-sm rounded-full border border-primary/20"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.title}</span>
              {item.badge && (
                <span className="relative z-10 px-1.5 py-0.2 text-[9px] font-bold uppercase rounded-full bg-primary text-primary-foreground">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </div>

      {/* Right Section: Action Icons */}
      <div className="flex items-center gap-2">
        {/* Command Palette Trigger Button */}
        <button
          onClick={() => window.dispatchEvent(new CustomEvent("open-command-palette"))}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/60 border border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all text-xs font-medium cursor-pointer"
          aria-label="Open Command Palette (Ctrl+K)"
          title="Open Command Palette (Ctrl+K)"
        >
          <Search className="w-3.5 h-3.5 text-primary" />
          <span className="hidden sm:inline">Search...</span>
          <kbd className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-background border border-border/80 text-muted-foreground shadow-xs">
            ⌘K
          </kbd>
        </button>

        {/* Theme Toggle Button */}
        <button
          onClick={handleToggleTheme}
          className="p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors focus:outline-none"
          aria-label="Toggle theme"
        >
          {mounted && theme === "dark" ? (
            <Sun className="w-4 h-4 text-amber-400" />
          ) : (
            <Moon className="w-4 h-4 text-slate-700" />
          )}
        </button>

        {/* GitHub Link Button */}
        <a
          href="https://github.com/Meghana-Merla/india-global-progress"
          target="_blank"
          rel="noreferrer"
          className="hidden sm:flex p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors focus:outline-none"
          aria-label="GitHub Repository"
        >
          <GithubIcon className="w-4 h-4" />
        </a>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors focus:outline-none"
          aria-label="Open mobile menu"
        >
          <Menu className="w-5 h-5" />
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
