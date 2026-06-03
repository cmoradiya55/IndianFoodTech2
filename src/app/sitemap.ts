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
    "peanut-butter-import-czech-republic",
    "peanut-butter-import-denmark",
    "peanut-butter-import-estonia",
    "peanut-butter-import-finland",
    "peanut-butter-import-france",
    "peanut-butter-import-germany",
    "peanut-butter-import-greece",
    "peanut-butter-import-hungary",
    "peanut-butter-import-iceland",
    "peanut-butter-import-ireland",
    "peanut-butter-import-italy",
    "peanut-butter-import-kosovo",
    "peanut-butter-import-latvia",
    "peanut-butter-import-liechtenstein",
    "peanut-butter-import-lithuania",
    "peanut-butter-import-luxembourg",
    "peanut-butter-import-malta",
    "peanut-butter-import-montenegro",
    "peanut-butter-import-slovenia",
    "peanut-butter-import-spain",
    "peanut-butter-import-sweden",
    "peanut-butter-import-switzerland",
    "peanut-butter-import-ukraine",
    "peanut-butter-import-united-kingdom",
    "peanut-butter-import-vatican-city",
    "peanut-butter-import-united-states",
    "peanut-butter-import-canada",
    "peanut-butter-import-mexico",
    "peanut-butter-import-brazil",
    "peanut-butter-import-argentina",
    "peanut-butter-import-chile",
    "peanut-butter-import-colombia",
    "peanut-butter-import-china",
    "peanut-butter-import-india",
    "peanut-butter-import-japan",
    "peanut-butter-import-south-korea",
    "peanut-butter-import-indonesia",
    "peanut-butter-import-thailand",
    "peanut-butter-import-malaysia",
    "peanut-butter-import-vietnam",
    "peanut-butter-import-singapore",
    "peanut-butter-import-united-arab-emirates",
    "peanut-butter-import-saudi-arabia",
    "peanut-butter-import-qatar",
    "peanut-butter-import-kuwait",
    "peanut-butter-import-nigeria",
    "peanut-butter-import-south-africa",
    "peanut-butter-import-kenya",
    "peanut-butter-import-ghana",
    "peanut-butter-import-egypt",
    "peanut-butter-import-ethiopia",
    "peanut-butter-import-tanzania",
    "peanut-butter-import-botswana",
    "peanut-butter-import-australia",
    "peanut-butter-import-new-zealand",
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
