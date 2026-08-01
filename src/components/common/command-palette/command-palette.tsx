"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { searchCommandItems } from "./fuzzy-search";
import { CommandItem } from "./command-items";
import {
  Search,
  LayoutDashboard,
  Layers,
  ArrowLeftRight,
  Globe,
  Brain,
  Sparkles,
  Download,
  Cpu,
  Landmark,
  TrendingUp,
  HeartPulse,
  GraduationCap,
  Building2,
  Leaf,
  ShieldCheck,
  Scale,
  Users,
  MapPin,
  BarChart3,
  FileText,
  Database,
  Smile,
  Lock,
  X,
  History,
  CornerDownLeft,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useYear } from "@/providers";

const iconMap: Record<string, LucideIcon> = {
  LayoutDashboard,
  Layers,
  ArrowLeftRight,
  Globe,
  Brain,
  Sparkles,
  Download,
  Cpu,
  Landmark,
  TrendingUp,
  HeartPulse,
  GraduationCap,
  Building2,
  Leaf,
  ShieldCheck,
  Scale,
  Users,
  MapPin,
  BarChart3,
  FileText,
  Database,
  Smile,
  Lock,
};

const RECENT_SEARCHES_KEY = "indialens_recent_searches";

import { generateReportData } from "@/components/reports/report-data";
import { exportReportPDF } from "@/components/reports/report-export";

function parseQueryIntent(query: string): string | null {
  const q = query.trim().toLowerCase();
  if (!q) return null;

  // 1. Explain Intent (e.g. "Explain HDI", "Explain GDP", "Explain AI Readiness", "Explain Happiness Index", "Explain Innovation")
  if (q.startsWith("explain ") || q.startsWith("explain")) {
    return `/ai-insights?prompt=${encodeURIComponent(query.trim())}`;
  }

  // 2. Report Export Intent
  if (q === "export report" || q === "download report" || q === "pdf report" || q === "generate report") {
    return "action:export-report";
  }

  // 3. Comparison Intent (e.g. "Compare India and China", "Compare India with USA", "India vs Germany", "Japan vs India", "Singapore comparison", "China comparison")
  if (
    q.includes("compare") ||
    q.includes(" vs ") ||
    q.includes(" vs. ") ||
    q.includes("versus") ||
    q.includes("comparison")
  ) {
    const COUNTRY_ALIASES: Array<{ code: string; names: string[] }> = [
      { code: "IND", names: ["india", "ind", "bharat"] },
      { code: "USA", names: ["united states", "usa", "america", "us"] },
      { code: "CHN", names: ["china", "chn", "beijing"] },
      { code: "DEU", names: ["germany", "deu", "berlin"] },
      { code: "JPN", names: ["japan", "jpn", "tokyo"] },
      { code: "GBR", names: ["united kingdom", "uk", "gbr", "britain"] },
      { code: "SGP", names: ["singapore", "sgp"] },
      { code: "BRA", names: ["brazil", "bra"] },
      { code: "AUS", names: ["australia", "aus"] },
      { code: "FRA", names: ["france", "fra"] },
      { code: "ARE", names: ["united arab emirates", "uae", "are", "dubai"] },
    ];

    const matches: Array<{ code: string; index: number }> = [];
    for (const c of COUNTRY_ALIASES) {
      for (const name of c.names) {
        const idx = q.indexOf(name);
        if (idx !== -1) {
          if (!matches.some((m) => m.code === c.code)) {
            matches.push({ code: c.code, index: idx });
          }
          break;
        }
      }
    }
    matches.sort((a, b) => a.index - b.index);
    const foundCodes = matches.map((m) => m.code);

    if (foundCodes.length >= 2) {
      return `/compare?c1=${foundCodes[0]}&c2=${foundCodes[1]}`;
    } else if (foundCodes.length === 1) {
      const c1 = "IND";
      const c2 = foundCodes[0] === "IND" ? "USA" : foundCodes[0];
      return `/compare?c1=${c1}&c2=${c2}`;
    } else {
      return `/compare`;
    }
  }

  // 4. Country Intent (e.g. "India", "USA", "United States", "China", "Japan", "Germany", "France", "Brazil", "Singapore", "UAE", "Australia")
  const COUNTRY_EXACT_MAP: Record<string, string> = {
    india: "IND",
    ind: "IND",
    bharat: "IND",
    "united states": "USA",
    usa: "USA",
    america: "USA",
    us: "USA",
    china: "CHN",
    chn: "CHN",
    germany: "DEU",
    deu: "DEU",
    japan: "JPN",
    jpn: "JPN",
    "united kingdom": "GBR",
    uk: "GBR",
    gbr: "GBR",
    britain: "GBR",
    singapore: "SGP",
    sgp: "SGP",
    brazil: "BRA",
    bra: "BRA",
    australia: "AUS",
    aus: "AUS",
    france: "FRA",
    fra: "FRA",
    "united arab emirates": "ARE",
    uae: "ARE",
    are: "ARE",
  };

  if (COUNTRY_EXACT_MAP[q]) {
    return `/world-map?country=${COUNTRY_EXACT_MAP[q]}`;
  }

  // 5. Category Intent (e.g. "Economy", "Technology", "Healthcare", "Governance", "Education", "Environment", "Safety", "Equality", "Digital Government")
  const CATEGORY_EXACT_MAP: Record<string, string> = {
    economy: "economy",
    eco: "economy",
    society: "society",
    soc: "society",
    governance: "governance",
    gov: "governance",
    technology: "technology",
    tech: "technology",
    "tech & ai": "technology",
    education: "education",
    edu: "education",
    healthcare: "healthcare",
    health: "healthcare",
    environment: "environment",
    env: "environment",
    safety: "safety",
    equality: "equality",
    eq: "equality",
    "digital government": "digital-government",
    "digital-government": "digital-government",
    "digital gov": "digital-government",
  };

  if (CATEGORY_EXACT_MAP[q]) {
    return `/categories?category=${CATEGORY_EXACT_MAP[q]}`;
  }

  // 6. Indicator Intent (e.g. "GDP", "HDI", "AI Readiness", "Innovation", "Healthcare Index", "Inflation", "GII", "Cybersecurity", "Peace", "Happiness", "Climate Change", "Air Quality")
  const INDICATOR_EXACT_MAP: Record<string, string> = {
    gdp: "gdp",
    "gdp growth": "gdp-growth",
    "gdp per capita": "gdp-per-capita",
    hdi: "hdi",
    "human development index": "hdi",
    "ai readiness": "ai-readiness",
    ai: "ai-readiness",
    innovation: "gii",
    gii: "gii",
    "global innovation index": "gii",
    healthcare: "healthcare-index",
    "healthcare index": "healthcare-index",
    inflation: "inflation",
    unemployment: "unemployment",
    cybersecurity: "cybersecurity",
    peace: "global-peace",
    "global peace": "global-peace",
    happiness: "happiness",
    "happiness index": "happiness",
    "gender gap": "gender-gap",
    "climate change": "climate-change",
    "air quality": "air-quality",
  };

  if (INDICATOR_EXACT_MAP[q]) {
    return `/categories?indicator=${INDICATOR_EXACT_MAP[q]}`;
  }

  // 7. General Page Names
  if (q === "world map" || q === "map") return "/world-map";
  if (q === "ai insights" || q === "ai") return "/ai-insights";
  if (q === "reports" || q === "report") return "/reports";
  if (q === "categories" || q === "category") return "/categories";
  if (q === "compare" || q === "comparison") return "/compare";
  if (q === "trends" || q === "trend") return "/trends";
  if (q === "sources" || q === "data sources") return "/sources";
  if (q === "dashboard" || q === "home") return "/dashboard";

  return null;
}

export function CommandPalette() {
  const router = useRouter();
  const { selectedYear } = useYear();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [exportNotice, setExportNotice] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Load recent searches from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(RECENT_SEARCHES_KEY);
      if (saved) {
        setRecentSearches(JSON.parse(saved));
      }
    } catch (e) {
      console.warn("Could not load recent searches", e);
    }
  }, []);

  // Save recent search
  const saveRecentSearch = (text: string) => {
    if (!text.trim()) return;
    setRecentSearches((prev) => {
      const updated = [text, ...prev.filter((item) => item !== text)].slice(0, 5);
      try {
        localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
      } catch (e) {
        console.warn("Could not save recent search", e);
      }
      return updated;
    });
  };

  // Keyboard shortcut listener (Ctrl+K / Cmd+K / Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    const handleOpenEvent = () => setIsOpen(true);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-command-palette", handleOpenEvent);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-command-palette", handleOpenEvent);
    };
  }, [isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      setSelectedIndex(0);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  // Filter items based on query
  const filteredItems = searchCommandItems(query);

  // Reset selected index when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Execute selected command or query
  const handleExecuteItem = (item?: CommandItem) => {
    if (query.trim()) {
      const intentTarget = parseQueryIntent(query.trim());
      if (intentTarget) {
        saveRecentSearch(query.trim());
        setIsOpen(false);
        if (intentTarget === "action:export-report") {
          setExportNotice("Generating professional PDF report...");
          const report = generateReportData("executive", selectedYear, "USA");
          exportReportPDF(report);
          setTimeout(() => setExportNotice(null), 2500);
        } else {
          router.push(intentTarget);
        }
        return;
      }
    }

    const targetItem = item || filteredItems[selectedIndex];

    if (!targetItem && query.trim()) {
      // Dynamic AI Intent query fallback
      saveRecentSearch(query.trim());
      setIsOpen(false);
      
      const q = query.trim().toLowerCase();
      if (q.includes("compare")) {
        router.push("/compare");
      } else if (q.includes("world map") || q.includes("map")) {
        router.push("/world-map");
      } else if (q.includes("report")) {
        setExportNotice("Generating professional PDF report...");
        const report = generateReportData("executive", selectedYear, "USA");
        exportReportPDF(report);
        setTimeout(() => setExportNotice(null), 2500);
      } else {
        router.push(`/ai-insights?prompt=${encodeURIComponent(query.trim())}`);
      }
      return;
    }

    if (!targetItem) return;

    saveRecentSearch(targetItem.title);
    setIsOpen(false);

    if (targetItem.action.type === "navigate") {
      router.push(targetItem.action.target);
    } else if (targetItem.action.type === "ai-prompt") {
      router.push(`/ai-insights?prompt=${encodeURIComponent(targetItem.action.target)}`);
    } else if (targetItem.action.type === "custom-action") {
      if (targetItem.action.target === "export-report") {
        setExportNotice("Generating professional PDF report...");
        const report = generateReportData("executive", selectedYear, "USA");
        exportReportPDF(report);
        setTimeout(() => setExportNotice(null), 2500);
      }
    }
  };


  // Keyboard navigation within list
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev === 0 ? Math.max(0, filteredItems.length - 1) : prev - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      handleExecuteItem();
    }
  };

  if (!isOpen && !exportNotice) return null;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md transition-all"
            />

            {/* Modal Dialog Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-2xl rounded-2xl glass-card border border-border/80 shadow-2xl overflow-hidden z-10 bg-card/95 backdrop-blur-xl"
            >
              {/* Input Header Bar */}
              <div className="p-4 border-b border-border/50 flex items-center gap-3 bg-card/50">
                <Search className="w-5 h-5 text-primary shrink-0 animate-pulse" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Type a command or search (e.g. 'Compare India and China', 'Healthcare', 'Explain HDI')..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleInputKeyDown}
                  className="w-full bg-transparent text-sm sm:text-base font-semibold text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
                {query ? (
                  <button
                    onClick={() => setQuery("")}
                    className="p-1 rounded-md text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-4 h-4" />
                  </button>
                ) : (
                  <kbd className="px-2 py-0.5 rounded text-[10px] font-bold bg-secondary text-muted-foreground border border-border shrink-0">
                    ESC
                  </kbd>
                )}
              </div>

              {/* Quick Recent Searches Pills (when input query is empty) */}
              {!query && recentSearches.length > 0 && (
                <div className="px-4 py-2.5 border-b border-border/30 bg-muted/20 flex items-center gap-2 overflow-x-auto scrollbar-none">
                  <span className="text-[11px] font-bold text-muted-foreground shrink-0 flex items-center gap-1">
                    <History className="w-3 h-3 text-primary" /> Recent:
                  </span>
                  {recentSearches.map((search, idx) => (
                    <button
                      key={idx}
                      onClick={() => setQuery(search)}
                      className="px-2.5 py-1 text-[11px] font-semibold rounded-full bg-card border border-border text-foreground hover:bg-primary/10 hover:text-primary transition-all shrink-0 cursor-pointer"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              )}

              {/* Command Items List */}
              <div
                ref={listRef}
                className="max-h-[380px] overflow-y-auto p-2 space-y-1 divide-y divide-border/20"
              >
                {filteredItems.length > 0 ? (
                  filteredItems.map((item, idx) => {
                    const IconComponent = iconMap[item.iconName] || Search;
                    const isSelected = selectedIndex === idx;

                    return (
                      <div
                        key={item.id}
                        onClick={() => handleExecuteItem(item)}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={cn(
                          "p-3 rounded-xl flex items-center justify-between gap-3 cursor-pointer transition-all duration-150 select-none",
                          isSelected
                            ? "bg-primary/15 border border-primary/30 text-foreground shadow-xs"
                            : "hover:bg-secondary/60 text-muted-foreground"
                        )}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div
                            className={cn(
                              "w-9 h-9 rounded-xl flex items-center justify-center border shrink-0 transition-colors",
                              isSelected
                                ? "bg-primary text-white border-primary/40 shadow-xs"
                                : "bg-secondary/80 text-foreground border-border/60"
                            )}
                          >
                            <IconComponent className="w-4 h-4" />
                          </div>

                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-xs sm:text-sm text-foreground truncate">
                                {item.title}
                              </span>
                              {item.badge && (
                                <span
                                  className={cn(
                                    "px-2 py-0.2 text-[9px] font-extrabold uppercase rounded-full border shrink-0",
                                    item.category === "pages" && "bg-blue-500/10 text-blue-500 border-blue-500/20",
                                    item.category === "actions" && "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
                                    item.category === "ai-prompts" && "bg-purple-500/10 text-purple-500 border-purple-500/20",
                                    item.category === "categories" && "bg-amber-500/10 text-amber-500 border-amber-500/20",
                                    item.category === "countries" && "bg-indigo-500/10 text-indigo-500 border-indigo-500/20",
                                    item.category === "indicators" && "bg-rose-500/10 text-rose-500 border-rose-500/20"
                                  )}
                                >
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-muted-foreground truncate mt-0.5">
                              {item.description}
                            </p>
                          </div>
                        </div>

                        {isSelected && (
                          <kbd className="hidden sm:flex items-center gap-1 px-2 py-1 text-[10px] font-bold rounded bg-primary/20 text-primary border border-primary/30 shrink-0">
                            <span>Select</span>
                            <CornerDownLeft className="w-3 h-3" />
                          </kbd>
                        )}
                      </div>
                    );
                  })
                ) : (
                  <div className="p-8 text-center space-y-2">
                    <Sparkles className="w-8 h-8 text-primary mx-auto animate-bounce" />
                    <h3 className="font-bold text-sm text-foreground">
                      Ask IndiaLens AI for "{query}"
                    </h3>
                    <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                      Press <kbd className="px-1.5 py-0.5 rounded bg-secondary font-bold text-foreground">Enter ↵</kbd> to launch AI analytical briefing in AI Insights.
                    </p>
                  </div>
                )}
              </div>

              {/* Keyboard Footer Shortcuts Bar */}
              <div className="p-3 border-t border-border/40 bg-card/80 backdrop-blur-md flex items-center justify-between text-[11px] text-muted-foreground font-semibold">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 rounded bg-secondary border border-border text-[10px]">↑↓</kbd> Navigate
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 rounded bg-secondary border border-border text-[10px]">↵</kbd> Select
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 rounded bg-secondary border border-border text-[10px]">ESC</kbd> Close
                  </span>
                </div>
                <span className="text-primary font-bold hidden sm:inline">
                  IndiaLens AI Command Core
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Export Report Toast */}
      {exportNotice && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl bg-slate-900 text-white text-xs font-semibold shadow-2xl border border-primary/40 flex items-center gap-2"
        >
          <Download className="w-4 h-4 text-primary animate-bounce" />
          <span>{exportNotice}</span>
        </motion.div>
      )}
    </>
  );
}
