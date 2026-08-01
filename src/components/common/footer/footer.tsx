"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Globe,
  Database,
  Cpu,
  Mail,
  MessageSquare,
} from "lucide-react";
import { Logo } from "@/components/common/navbar/logo";

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

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="w-full border-t border-border/40 bg-card/60 backdrop-blur-xl relative z-10 overflow-hidden text-xs sm:text-sm">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8 space-y-12 relative z-10">
        {/* Top Newsletter & Banner Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 rounded-3xl glass-card border border-border/60 shadow-xl bg-gradient-to-r from-background/90 via-card/80 to-background/90">
          <div className="lg:col-span-6 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-[11px] font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Stay Informed
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-foreground tracking-tight">
              Subscribe to Global Intelligence Digest
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-xl">
              Get monthly AI-generated briefings on India's international indicator movements, policy benchmarks, and economic trajectories.
            </p>
          </div>

          <div className="lg:col-span-6 flex items-center">
            {subscribed ? (
              <div className="w-full p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold flex items-center justify-center gap-2 text-xs sm:text-sm animate-pulse">
                <CheckCircle2 className="w-4 h-4" />
                <span>Thank you for subscribing! Intelligence briefs will arrive monthly.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="w-full flex flex-col sm:flex-row gap-2.5">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your professional email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm font-medium rounded-xl bg-background/80 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-extrabold rounded-xl bg-gradient-primary text-white shadow-glow hover:opacity-95 transition-all active:scale-95 cursor-pointer shrink-0"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 4 Column Main Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pt-4">
          {/* Column 1: About IndiaLens AI */}
          <div className="lg:col-span-4 space-y-4">
            <Logo />
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              IndiaLens AI is an advanced agentic intelligence platform tracking India's global standings, economic trajectory, and international indicators across 10 strategic evaluation pillars.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="px-2.5 py-1 rounded-lg bg-secondary text-secondary-foreground text-[11px] font-bold border border-border/50 inline-flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-primary" /> 100+ Indicators
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-secondary text-secondary-foreground text-[11px] font-bold border border-border/50 inline-flex items-center gap-1">
                <Database className="w-3.5 h-3.5 text-emerald-400" /> 15+ Data Sources
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-secondary text-secondary-foreground text-[11px] font-bold border border-border/50 inline-flex items-center gap-1">
                <Cpu className="w-3.5 h-3.5 text-purple-400" /> Gemini Engine
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold text-foreground uppercase tracking-wider text-primary">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-2 font-medium text-xs sm:text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-muted-foreground hover:text-primary transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/compare" className="text-muted-foreground hover:text-primary transition-colors">
                  Compare
                </Link>
              </li>
              <li>
                <Link href="/world-map" className="text-muted-foreground hover:text-primary transition-colors">
                  World Map
                </Link>
              </li>
              <li>
                <Link href="/trends" className="text-muted-foreground hover:text-primary transition-colors">
                  Trends
                </Link>
              </li>
              <li>
                <Link href="/ai-insights" className="text-muted-foreground hover:text-primary transition-colors">
                  AI Insights
                </Link>
              </li>
              <li>
                <Link href="/reports" className="text-muted-foreground hover:text-primary transition-colors">
                  Reports
                </Link>
              </li>
              <li className="col-span-2">
                <Link href="/sources" className="text-muted-foreground hover:text-primary transition-colors">
                  Data Sources
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources & Methodology */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold text-foreground uppercase tracking-wider text-primary">
              Resources
            </h4>
            <ul className="space-y-2 font-medium text-xs sm:text-sm">
              <li>
                <Link href="/methodology" className="text-muted-foreground hover:text-primary transition-colors">
                  Methodology
                </Link>
              </li>
              <li>
                <Link href="/sources" className="text-muted-foreground hover:text-primary transition-colors">
                  Data Sources
                </Link>
              </li>
              <li>
                <Link href="/ai-insights" className="text-muted-foreground hover:text-primary transition-colors">
                  AI Model Specs
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/Meghana-Merla/india-global-progress"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Support & Social */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-extrabold text-foreground uppercase tracking-wider text-primary">
              Support & Community
            </h4>
            <ul className="space-y-2 font-medium text-xs sm:text-sm">
              <li>
                <a href="mailto:support@indialens.ai" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Support
                </a>
              </li>
              <li>
                <a href="https://github.com/Meghana-Merla/india-global-progress/issues" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  Feedback & Issues
                </a>
              </li>
              <li>
                <a href="https://github.com/Meghana-Merla/india-global-progress" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  Report Data Anomaly
                </a>
              </li>
            </ul>

            <div className="pt-2 space-y-2">
              <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider block">
                Connect With Us
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/Meghana-Merla/india-global-progress"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-card border border-border/80 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all flex items-center justify-center"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-card border border-border/80 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all flex items-center justify-center"
                  aria-label="Twitter"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-card border border-border/80 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all flex items-center justify-center"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-card border border-border/80 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all flex items-center justify-center"
                  aria-label="Discord"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar Footer */}
        <div className="pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>
            © {new Date().getFullYear()} <strong className="text-foreground">IndiaLens AI</strong>. All rights reserved. Built for sovereign data intelligence.
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <span>•</span>
            <Link href="/disclaimer" className="hover:text-foreground transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
