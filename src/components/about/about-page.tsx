"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Target,
  Layers,
  Cpu,
  Globe,
  Database,
  Compass,
  ArrowRight,
  CheckCircle2,
  Brain,
  TrendingUp,
  GitCompare,
  FileText,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Link from "next/link";

export function AboutPage() {
  const coreFeatures = [
    {
      title: "10 Strategic Pillars",
      desc: "Granular tracking across Economy, Tech, Society, Governance, Health, Education, Environment, Safety, Equality & Digital Gov.",
      icon: Layers,
    },
    {
      title: "Interactive Trends (2020-2025)",
      desc: "Longitudinal trajectory charts analyzing multi-year momentum and rank progression.",
      icon: TrendingUp,
    },
    {
      title: "Country Compare Matrix",
      desc: "Side-by-side benchmarking of India against global peers (USA, China, Germany, Japan, UK, UAE, etc.).",
      icon: GitCompare,
    },
    {
      title: "Spatial World Map",
      desc: "Geographic visualization across 15+ major global economies with instant focus capabilities.",
      icon: Globe,
    },
    {
      title: "Gemini AI Intelligence",
      desc: "Real-time AI chatbot and automated briefing synthesis answering complex sovereign queries.",
      icon: Brain,
    },
    {
      title: "Executive PDF Reports",
      desc: "One-click generation of professional executive briefing documents with printable styling.",
      icon: FileText,
    },
  ];

  const techStack = [
    { name: "Next.js 16 (App Router)", cat: "Core Framework", color: "border-primary/30 text-primary bg-primary/10" },
    { name: "React 19 & TypeScript", cat: "UI Library & Types", color: "border-indigo-500/30 text-indigo-400 bg-indigo-500/10" },
    { name: "Tailwind CSS & Glassmorphism", cat: "Design System", color: "border-sky-500/30 text-sky-400 bg-sky-500/10" },
    { name: "Framer Motion", cat: "Animations", color: "border-purple-500/30 text-purple-400 bg-purple-500/10" },
    { name: "Google Gemini AI API", cat: "AI Core Engine", color: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10" },
    { name: "Recharts & Lucide Icons", cat: "Data Vis & Icons", color: "border-amber-500/30 text-amber-400 bg-amber-500/10" },
  ];

  const roadmapItems = [
    { phase: "Q1 2026", title: "Sub-National Intelligence", desc: "State & district level indicator tracking across 28 Indian States & UTs." },
    { phase: "Q2 2026", title: "Predictive AI Forecasting", desc: "Machine learning trajectory projections towards Vision 2030 development goals." },
    { phase: "Q3 2026", title: "Real-time Sentiment Integration", desc: "News impact and global multilateral perception sentiment tracking." },
    { phase: "Q4 2026", title: "Custom User Workspaces", desc: "Personalized indicator bookmarking, alert triggers & saved custom report builder." },
  ];

  return (
    <div className="space-y-12 pb-16">
      {/* Header Hero */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>About IndiaLens AI</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
          Sovereign AI <span className="text-gradient-primary">Intelligence</span> Platform
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Empowering citizens, policy analysts, researchers, and global leaders with unified, transparent, AI-synthesized intelligence on India's international standings.
        </p>
      </div>

      {/* 1. What is IndiaLens AI & 2. Why it was built */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6 glass-card p-6 sm:p-8 rounded-3xl border border-border/60 shadow-xl space-y-4">
          <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
            <Globe className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-foreground">1. What is IndiaLens AI</h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">IndiaLens AI</strong> is a next-generation agentic global data intelligence platform designed specifically to track, benchmark, and analyze India’s positioning across major international index rankings and macroeconomic metrics.
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            By combining multi-lateral datasets from institutions like the World Bank, IMF, UN, and WIPO with Google Gemini AI capabilities, IndiaLens AI provides actionable, zero-hallucination insights in real-time.
          </p>
        </div>

        <div className="lg:col-span-6 glass-card p-6 sm:p-8 rounded-3xl border border-border/60 shadow-xl space-y-4">
          <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center border border-indigo-500/20">
            <Target className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-foreground">2. Why it was Built</h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Global indicator rankings are typically scattered across dozens of complex PDF briefs, multi-lateral database queries, and isolated statistical tables.
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            IndiaLens AI was built to democratize sovereign data access—offering a unified dark-glass interactive dashboard that translates raw statistical data into instant multi-year trajectories and AI conversational briefs.
          </p>
        </div>
      </div>

      {/* 3. Core Features */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-2xl font-extrabold text-foreground">3. Core Features</h2>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Explore the powerful tools integrated into IndiaLens AI
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreFeatures.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div
                key={i}
                className="glass-card p-6 rounded-3xl border border-border/60 space-y-3 hover:border-primary/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-foreground">{feat.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Technology Stack & 5. AI Capabilities */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6 glass-card p-6 sm:p-8 rounded-3xl border border-border/60 shadow-xl space-y-4">
          <div className="w-10 h-10 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center border border-purple-500/20">
            <Cpu className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-foreground">4. Technology Stack</h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Built using modern, high-performance web standards for seamless responsiveness and visual excellence:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-2xl border ${tech.color} space-y-0.5`}
              >
                <div className="text-xs font-bold text-foreground">{tech.name}</div>
                <div className="text-[10px] text-muted-foreground">{tech.cat}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 glass-card p-6 sm:p-8 rounded-3xl border border-border/60 shadow-xl space-y-4">
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
            <Brain className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-foreground">5. AI Capabilities</h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Powered by Google Gemini 2.5 Flash Engine and custom intelligence prompt chains:
          </p>
          <div className="space-y-3 text-xs sm:text-sm text-muted-foreground pt-1">
            <div className="p-3.5 rounded-2xl bg-card border border-border/60 flex items-start gap-3">
              <Zap className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <div>
                <strong className="text-foreground">Natural Language Indicator Analysis:</strong> Ask complex questions such as "How has India's GII score changed since 2020?" and receive structured breakdowns.
              </div>
            </div>
            <div className="p-3.5 rounded-2xl bg-card border border-border/60 flex items-start gap-3">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-foreground">Strict Grounded Truth:</strong> Prompt architecture ensures AI responses reference verified indicator databases with transparent citation sources.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Data Sources & 7. Future Roadmap */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6 glass-card p-6 sm:p-8 rounded-3xl border border-border/60 shadow-xl space-y-4">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20">
            <Database className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-foreground">6. Data Sources</h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            IndiaLens AI aggregates authoritative indicators from multilateral global bodies:
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["World Bank", "IMF", "UNDP", "WIPO", "WEF", "WHO", "RSF", "ITU", "Germanwatch", "NITI Aayog", "RBI"].map((s, i) => (
              <span key={i} className="px-3 py-1 rounded-xl bg-card border border-border/60 text-xs font-semibold text-foreground">
                {s}
              </span>
            ))}
          </div>
          <div className="pt-2">
            <Link
              href="/sources"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
            >
              <span>Explore Data Sources Catalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-6 glass-card p-6 sm:p-8 rounded-3xl border border-border/60 shadow-xl space-y-4">
          <div className="w-10 h-10 rounded-2xl bg-sky-500/10 text-sky-400 flex items-center justify-center border border-sky-500/20">
            <Compass className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-foreground">7. Future Roadmap</h2>
          <div className="space-y-2.5 pt-1">
            {roadmapItems.map((item, idx) => (
              <div key={idx} className="p-3 rounded-2xl bg-card border border-border/50 flex items-start gap-3">
                <span className="px-2 py-0.5 rounded bg-primary/10 text-primary font-mono text-[10px] font-bold shrink-0">
                  {item.phase}
                </span>
                <div>
                  <div className="text-xs font-bold text-foreground">{item.title}</div>
                  <div className="text-[11px] text-muted-foreground">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
