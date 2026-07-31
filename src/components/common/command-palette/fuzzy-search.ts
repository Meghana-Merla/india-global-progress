import { CommandItem, commandItems } from "./command-items";

export interface ScoredCommandItem {
  item: CommandItem;
  score: number;
}

export function searchCommandItems(query: string): CommandItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return commandItems;

  const scored: ScoredCommandItem[] = [];

  for (const item of commandItems) {
    const title = item.title.toLowerCase();
    const desc = item.description.toLowerCase();
    const cat = item.category.toLowerCase();
    const keywords = item.keywords.map((k) => k.toLowerCase());

    let score = 0;

    // Direct title match
    if (title === q) {
      score += 100;
    } else if (title.startsWith(q)) {
      score += 80;
    } else if (title.includes(q)) {
      score += 60;
    }

    // Keyword exact/prefix match
    for (const kw of keywords) {
      if (kw === q) score += 90;
      else if (kw.startsWith(q)) score += 70;
      else if (kw.includes(q)) score += 50;
    }

    // Description match
    if (desc.includes(q)) {
      score += 30;
    }

    // Category match
    if (cat.includes(q)) {
      score += 20;
    }

    // Intent rules mapping
    if (q.includes("compare") && item.category === "actions") score += 50;
    if (q.includes("world map") && item.id === "page-world-map") score += 90;
    if (q.includes("healthcare") && item.id === "cat-healthcare") score += 90;
    if (q.includes("explain") && item.category === "ai-prompts") score += 60;
    if (q.includes("report") && item.id === "action-generate-report") score += 90;

    if (score > 0) {
      scored.push({ item, score });
    }
  }

  // Sort descending by score
  scored.sort((a, b) => b.score - a.score);

  return scored.map((s) => s.item);
}
