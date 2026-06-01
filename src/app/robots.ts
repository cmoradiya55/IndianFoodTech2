import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.indianfoodtech.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default: allow all regular search engine crawlers
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api/",
      },
      // Block AI training crawlers — content must not be used for model training
      {
        userAgent: [
          "GPTBot",        // OpenAI training crawler
          "ClaudeBot",     // Anthropic training crawler
          "anthropic-ai",  // Anthropic training crawler (alternate agent)
          "Google-Extended", // Google AI training (Gemini/Bard training data)
          "Bytespider",    // ByteDance AI training crawler
          "CCBot",         // Common Crawl — used to train GPT, Llama, etc.
          "Diffbot",       // AI data extraction crawler
          "Amazonbot",
          "Meta-ExternalAgent",
          "Meta-ExternalFetcher"
        ],
        disallow: "/",
      },
      // Allow AI answer-engine crawlers for GEO/AEO (search, not training)
      {
        userAgent: [
          "ChatGPT-User",  // ChatGPT real-time web browsing (answers, not training)
          "OAI-SearchBot", // OpenAI SearchGPT indexing (answer engine)
          "PerplexityBot", // Perplexity answer engine indexing
          "Claude-Web",
          "anthropic-ai",
          "Perplexity-User",
          "GEMINI-Fetchbot",
          "Applebot-Extended",
          "DuckAssistBot"
        ],
        allow: "/",
        disallow: "/api/",
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
