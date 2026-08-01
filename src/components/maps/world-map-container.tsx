"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { getWorldMapData, MapCountryData } from "@/data/mock";
import { useYear } from "@/providers";
import { CountrySideDrawer } from "./country-side-drawer";
import { Search, RotateCcw, Globe, Info } from "lucide-react";
import { motion } from "framer-motion";

// Dynamically import Leaflet map inner component to disable SSR
const LeafletMap = dynamic(
  () => import("./leaflet-map-inner").then((mod) => mod.LeafletMapInner),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[500px] rounded-2xl bg-secondary/40 border border-border/50 flex flex-col items-center justify-center gap-3">
        <Globe className="w-8 h-8 text-primary animate-spin" />
        <span className="text-xs font-semibold text-muted-foreground">
          Initializing Interactive World Map...
        </span>
      </div>
    ),
  }
);

export function WorldMapContainer() {
  const searchParams = useSearchParams();
  const countryParam = searchParams.get("country");

  const { selectedYear } = useYear();
  const worldMapCountries = getWorldMapData(selectedYear);

  const [selectedCountry, setSelectedCountry] = useState<MapCountryData | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [targetCoords, setTargetCoords] = useState<[number, number] | null>(null);

  useEffect(() => {
    if (countryParam) {
      const q = countryParam.trim().toLowerCase();
      const matched = worldMapCountries.find(
        (c) =>
          c.id.toLowerCase() === q ||
          c.code.toLowerCase() === q ||
          (c.slug && c.slug.toLowerCase() === q) ||
          c.name.toLowerCase() === q ||
          c.name.toLowerCase().includes(q)
      );
      if (matched) {
        setSelectedCountry(matched);
        setTargetCoords(matched.coords);
      }
    }
  }, [countryParam, worldMapCountries]);

  const filteredCountries = worldMapCountries.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectCountry = (country: MapCountryData) => {
    setSelectedCountry(country);
    setTargetCoords(country.coords);
  };

  const handleResetView = () => {
    setSelectedCountry(null);
    setSearchQuery("");
    setTargetCoords([20, 10]);
  };

  const handleSearchSelect = (country: MapCountryData) => {
    handleSelectCountry(country);
    setSearchQuery("");
  };

  return (
    <div className="space-y-4">
      {/* Top Map Toolbar: Search & Reset View */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
          <input
            type="text"
            placeholder={`Search country on ${selectedYear} map...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-xs font-semibold rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 shadow-xs transition-all"
          />

          {/* Autocomplete Dropdown */}
          {searchQuery.trim().length > 0 && (
            <div className="absolute left-0 right-0 top-full mt-1 z-30 bg-card border border-border/80 rounded-xl shadow-xl max-h-56 overflow-y-auto p-1.5 space-y-1">
              {filteredCountries.length > 0 ? (
                filteredCountries.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => handleSearchSelect(c)}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold hover:bg-primary/10 hover:text-primary transition-all flex items-center justify-between cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span>{c.flag}</span>
                      <span>{c.name}</span>
                    </span>
                    <span className="text-[10px] text-muted-foreground">{c.globalRank}</span>
                  </button>
                ))
              ) : (
                <div className="px-3 py-2 text-xs text-muted-foreground text-center">
                  No matching country found
                </div>
              )}
            </div>
          )}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Quick Focus India button */}
          <button
            onClick={() => {
              const india = worldMapCountries.find((c) => c.id === "IND");
              if (india) handleSelectCountry(india);
            }}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-xl bg-primary/10 text-primary border border-primary/30 hover:bg-primary hover:text-white transition-all shadow-xs cursor-pointer"
          >
            <span>🇮🇳 Focus India</span>
          </button>

          {/* Reset View Button */}
          <button
            onClick={handleResetView}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-xl bg-card border border-border text-foreground hover:bg-secondary transition-all shadow-xs cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-muted-foreground" />
            <span>Reset View</span>
          </button>
        </div>
      </div>

      {/* Main Map Box */}
      <div className="relative w-full h-[540px] sm:h-[600px] rounded-2xl border border-border/60 overflow-hidden shadow-lg">
        <LeafletMap
          onSelectCountry={handleSelectCountry}
          selectedCountryId={selectedCountry?.id}
          targetCoords={targetCoords}
        />

        {/* Map Legend Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-4 left-4 z-20 glass-card p-3 rounded-xl border border-border/60 text-xs space-y-2 shadow-xl max-w-xs"
        >
          <div className="font-bold text-foreground text-[11px] flex items-center gap-1">
            <Info className="w-3.5 h-3.5 text-primary" /> Overall Score Legend ({selectedYear})
          </div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-[10px] font-semibold text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
              <span>88+ Top Tier</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6]" />
              <span>82 - 87 Strong</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#6366F1]" />
              <span>75 - 81 Moderate</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
              <span>&lt; 75 Developing</span>
            </div>
            <div className="col-span-2 pt-1 border-t border-border/40 flex items-center gap-1.5 text-purple-400 font-bold">
              <span className="w-3 h-3 rounded-full bg-[#7C3AED] ring-2 ring-purple-500/40" />
              <span>🇮🇳 India ({selectedYear})</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Side Drawer Component */}
      <CountrySideDrawer
        country={selectedCountry}
        onClose={() => setSelectedCountry(null)}
      />
    </div>
  );
}
