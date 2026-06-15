import type { MetadataRoute } from "next";
import BlogList from "@/data/BlogList.json";
import ProductList from "@/data/ProductList.json";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.indianfoodtech.com";

function parseBlogDate(dateStr: string): Date {
  // "20 March, 2026" → Date
  const match = dateStr.match(/^(\d+)\s+(\w+),?\s+(\d{4})$/);
  if (!match) return new Date("2026-03-01");
  const [, day, month, year] = match;
  const parsed = new Date(`${month} ${day}, ${year}`);
  return isNaN(parsed.getTime()) ? new Date("2026-03-01") : parsed;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const corePages = [
    {
      url: "",
      priority: 1.0,
      changeFrequency: "weekly" as const,
      date: "2026-03-01",
    },
    {
      url: "products",
      priority: 0.9,
      changeFrequency: "weekly" as const,
      date: "2026-03-01",
    },
    {
      url: "private-labels",
      priority: 0.8,
      changeFrequency: "monthly" as const,
      date: "2026-03-01",
    },
    {
      url: "about-us",
      priority: 0.7,
      changeFrequency: "monthly" as const,
      date: "2026-03-01",
    },
    {
      url: "contact-us",
      priority: 0.7,
      changeFrequency: "monthly" as const,
      date: "2026-03-01",
    },
    {
      url: "blog",
      priority: 0.8,
      changeFrequency: "weekly" as const,
      date: "2026-03-01",
    },
  ];

  const internationalPages = [
    "peanut-butter-export-to-czech-republic",
    "peanut-butter-export-to-denmark",
    "peanut-butter-export-to-estonia",
    "peanut-butter-export-to-finland",
    "peanut-butter-export-to-france",
    "peanut-butter-export-to-germany",
    "peanut-butter-export-to-greece",
    "peanut-butter-export-to-hungary",
    "peanut-butter-export-to-iceland",
    "peanut-butter-export-to-ireland",
    "peanut-butter-export-to-italy",
    "peanut-butter-export-to-kosovo",
    "peanut-butter-export-to-latvia",
    "peanut-butter-export-to-liechtenstein",
    "peanut-butter-export-to-lithuania",
    "peanut-butter-export-to-luxembourg",
    "peanut-butter-export-to-malta",
    "peanut-butter-export-to-montenegro",
    "peanut-butter-export-to-slovenia",
    "peanut-butter-export-to-spain",
    "peanut-butter-export-to-sweden",
    "peanut-butter-export-to-switzerland",
    "peanut-butter-export-to-ukraine",
    "peanut-butter-export-to-united-kingdom",
    "peanut-butter-export-to-vatican-city",
    "peanut-butter-export-to-united-states",
    "peanut-butter-export-to-canada",
    "peanut-butter-export-to-mexico",
    "peanut-butter-export-to-brazil",
    "peanut-butter-export-to-argentina",
    "peanut-butter-export-to-chile",
    "peanut-butter-export-to-colombia",
    "peanut-butter-export-to-china",
    "peanut-butter-export-to-japan",
    "peanut-butter-export-to-south-korea",
    "peanut-butter-export-to-indonesia",
    "peanut-butter-export-to-thailand",
    "peanut-butter-export-to-malaysia",
    "peanut-butter-export-to-vietnam",
    "peanut-butter-export-to-singapore",
    "peanut-butter-export-to-united-arab-emirates",
    "peanut-butter-export-to-saudi-arabia",
    "peanut-butter-export-to-qatar",
    "peanut-butter-export-to-kuwait",
    "peanut-butter-export-to-nigeria",
    "peanut-butter-export-to-south-africa",
    "peanut-butter-export-to-kenya",
    "peanut-butter-export-to-ghana",
    "peanut-butter-export-to-egypt",
    "peanut-butter-export-to-ethiopia",
    "peanut-butter-export-to-tanzania",
    "peanut-butter-export-to-botswana",
    "peanut-butter-export-to-australia",
    "peanut-butter-export-to-new-zealand",
    "peanut-butter-supplier-albania",
    "peanut-butter-supplier-andorra",
    "peanut-butter-supplier-austria",
    "peanut-butter-supplier-belarus",
    "peanut-butter-supplier-belgium",
    "peanut-butter-supplier-bosnia-herzegovina",
    "peanut-butter-supplier-bulgaria",
    "peanut-butter-supplier-croatia",
    "peanut-butter-supplier-cyprus",
    "peanut-butter-supplier-moldova",
    "peanut-butter-supplier-monaco",
    "peanut-butter-supplier-netherlands",
    "peanut-butter-supplier-north-macedonia",
    "peanut-butter-supplier-norway",
    "peanut-butter-supplier-philippines",
    "peanut-butter-supplier-poland",
    "peanut-butter-supplier-portugal",
    "peanut-butter-supplier-romania",
    "peanut-butter-supplier-russia",
    "peanut-butter-supplier-san-marino",
    "peanut-butter-supplier-serbia",
    "peanut-butter-supplier-slovakia",
  ];

  const allProducts = (
    ProductList as Array<{ products: Array<{ slug: string }> }>
  ).flatMap((cat) => cat.products);

  const blogEntries: MetadataRoute.Sitemap = BlogList.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: parseBlogDate(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const productEntries: MetadataRoute.Sitemap = allProducts.map((product) => ({
    url: `${BASE_URL}/products/${product.slug}`,
    lastModified: new Date("2026-03-01"),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [
    ...corePages.map((page) => ({
      url: page.url ? `${BASE_URL}/${page.url}` : BASE_URL,
      lastModified: new Date(page.date),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...internationalPages.map((slug) => ({
      url: `${BASE_URL}/${slug}`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...blogEntries,
    ...productEntries,
  ];
}
