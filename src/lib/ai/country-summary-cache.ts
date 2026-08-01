const summaryCache = new Map<string, string>();

export async function fetchCountryAISummary(
  countryName: string,
  countryId: string,
  year: string = "2025"
): Promise<string> {
  const cacheKey = `${countryId}-${year}`;
  if (summaryCache.has(cacheKey)) {
    return summaryCache.get(cacheKey)!;
  }

  try {
    const res = await fetch("/api/ai/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        question: `Generate a concise executive summary for ${countryName}'s Technology, Economy and Governance performance using the provided metrics.`,
        selectedCountry: countryName,
        selectedYear: year,
        pageContext: "world-map",
      }),
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();
    const summaryText = data.summary || data.rawText;
    if (summaryText && typeof summaryText === "string") {
      summaryCache.set(cacheKey, summaryText);
      return summaryText;
    }
  } catch (e) {
    console.warn("Country AI summary fetch failed, using fallback overview", e);
  }

  return "";
}
