"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search, Sun, Moon } from "lucide-react";
import { NavItem } from "./nav-links";
import { Logo } from "./logo";
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

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
  activePathname: string;
  theme?: string;
  onToggleTheme?: () => void;
}

export function MobileMenu({
  isOpen,
  onClose,
  items,
  activePathname,
  theme,
  onToggleTheme,
}: MobileMenuProps) {
  // Prevent background scrolling while open & handle ESC key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm lg:hidden"
          />

          {/* Left Slide-in Sidebar */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            className="fixed top-0 left-0 bottom-0 z-50 w-full max-w-[300px] sm:max-w-xs bg-background/95 backdrop-blur-2xl border-r border-border/60 shadow-2xl p-5 flex flex-col justify-between overflow-y-auto lg:hidden"
          >
            {/* Sidebar Header */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-border/40">
                <Logo onClick={onClose} />
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  aria-label="Close sidebar"
                  title="Close sidebar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-4 flex flex-col gap-1">
                {items.map((item) => {
                  const Icon = item.icon;
                  const isActive =
                    activePathname === item.href ||
                    (item.href !== "/" && activePathname.startsWith(item.href));

                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={onClose}
                      className={cn(
                        "flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 select-none",
                        isActive
                          ? "bg-primary/10 text-primary font-bold border border-primary/20 shadow-xs"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        {Icon && <Icon className="w-4 h-4 shrink-0 text-primary" />}
                        <span>{item.title}</span>
                      </div>
                      {item.badge && (
                        <span className="px-2 py-0.5 text-[9px] font-bold uppercase rounded-full bg-primary text-primary-foreground">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Sidebar Footer Actions */}
            <div className="pt-4 border-t border-border/40 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    onClose();
                    window.dispatchEvent(new CustomEvent("open-command-palette"));
                  }}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-muted/60 text-xs font-semibold text-foreground hover:bg-muted transition-colors flex-1 justify-center cursor-pointer"
                  aria-label="Search"
                >
                  <Search className="w-4 h-4 text-primary" />
                  <span>Search...</span>
                </button>

                {onToggleTheme && (
                  <button
                    onClick={onToggleTheme}
                    className="p-2 rounded-xl bg-muted/60 text-foreground hover:bg-muted transition-colors cursor-pointer"
                    aria-label="Toggle Theme"
                    title="Toggle Theme"
                  >
                    {theme === "dark" || theme === "system" ? (
                      <Sun className="w-4 h-4 text-amber-400" />
                    ) : (
                      <Moon className="w-4 h-4 text-indigo-400" />
                    )}
                  </button>
                )}

                <a
                  href="https://github.com/Meghana-Merla/india-global-progress"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-muted/60 text-foreground hover:bg-muted transition-colors"
                  aria-label="GitHub Repository"
                  title="GitHub Repository"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
