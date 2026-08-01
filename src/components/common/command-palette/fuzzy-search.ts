import { CommandItem, commandItems } from "./command-items";

export interface ScoredCommandItem {
  item: CommandItem;
  score: number;
}

// Explicit alias lookup table for instant high-relevance boosting
const ALIAS_MAP: Record<string, string[]> = {
  gii: ["global innovation index", "innovation", "cat-technology", "ind-gii"],
  innovation: ["global innovation index", "cat-technology", "ind-gii"],
  hdi: ["human development index", "human development", "cat-society", "ind-hdi"],
  gdp: ["gross domestic product", "gdp per capita", "cat-economy", "ind-gdp", "ind-gdp-per-capita"],
  ai: ["ai readiness", "ai insights", "cat-technology", "ind-ai-readiness", "page-ai-insights"],
  "ai readiness": ["ai readiness", "ind-ai-readiness"],
  cyber: ["cybersecurity", "cat-safety", "ind-cybersecurity"],
  health: ["healthcare", "health", "cat-healthcare", "ind-healthcare-index"],
  healthcare: ["healthcare", "cat-healthcare", "ind-healthcare-index"],
  gov: ["governance", "digital government", "cat-governance", "cat-digital-gov"],
  tech: ["technology", "cat-technology", "ind-gii"],
  digital: ["digital government", "cat-digital-gov", "ind-cybersecurity", "ind-internet"],
  peace: ["global peace", "cat-safety", "ind-peace"],
  usa: ["country-usa"],
  "united states": ["country-usa"],
  china: ["country-chn"],
  germany: ["country-deu"],
  japan: ["country-jpn"],
  singapore: ["country-sgp"],
  brazil: ["country-bra"],
  australia: ["country-aus"],
  france: ["country-fra"],
  uae: ["country-are"],
};

export function searchCommandItems(query: string): CommandItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return commandItems;

  const qTokens = q.split(/\s+/).filter(Boolean);
  const scored: ScoredCommandItem[] = [];

  for (const item of commandItems) {
    const title = item.title.toLowerCase();
    const titleWords = title.split(/[\s()\-:]+/).filter(Boolean);
    const desc = item.description.toLowerCase();
    const cat = item.category.toLowerCase();
    const keywords = item.keywords.map((k) => k.toLowerCase());
    const itemId = item.id.toLowerCase();

    let score = 0;

    // 1. Direct Title Matches
    if (title === q) {
      score += 200;
    } else if (title.startsWith(q)) {
      score += 150;
    } else if (titleWords.some((w) => w.startsWith(q))) {
      score += 125;
    } else if (title.includes(q)) {
      score += 70;
    }

    // 2. Keyword & Alias Matches
    for (const kw of keywords) {
      if (kw === q) {
        score += 160;
      } else if (kw.startsWith(q)) {
        score += 110;
      } else {
        const kwWords = kw.split(/\s+/);
        if (kwWords.some((w) => w.startsWith(q))) {
          score += 90;
        } else if (kw.includes(q)) {
          score += 60;
        }
      }
    }

    // Check Alias Map
    if (ALIAS_MAP[q]) {
      const targets = ALIAS_MAP[q];
      if (
        targets.includes(itemId) ||
        targets.some((t) => title.includes(t) || keywords.includes(t))
      ) {
        score += 140;
      }
    }

    // 3. Multi-word Token Coverage
    if (qTokens.length > 1) {
      let tokensMatched = 0;
      for (const token of qTokens) {
        const matchesTitle = titleWords.some((w) => w.startsWith(token) || w.includes(token));
        const matchesKw = keywords.some((k) => k.startsWith(token) || k.includes(token));
        const matchesDesc = desc.includes(token);

        if (matchesTitle || matchesKw || matchesDesc) {
          tokensMatched++;
        }
      }

      if (tokensMatched === qTokens.length) {
        score += 80 * qTokens.length;
      }
    }

    // 4. Description & Category Match
    if (desc.includes(q)) {
      score += 35;
    }

    if (cat.includes(q)) {
      score += 25;
    }

    // 5. Intent Helper Rules
    if (q.includes("compare") && item.category === "pages" && item.id === "page-compare") {
      score += 100;
    }
    if (q.includes("report") && item.category === "pages" && item.id === "page-reports") {
      score += 100;
    }
    if (q.includes("source") && item.category === "pages" && item.id === "page-sources") {
      score += 100;
    }

    if (score > 0) {
      scored.push({ item, score });
    }
  }

  // Sort descending by score
  scored.sort((a, b) => b.score - a.score);

  return scored.map((s) => s.item);
}
