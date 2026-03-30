import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const corePages = [
    { url: "", priority: 1, changeFrequency: "weekly" as const },
    { url: "products", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "privateLabels", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "aboutUs", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "contactUs", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "blog", priority: 0.8, changeFrequency: "weekly" as const },
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

  return [
    ...corePages.map((page) => ({
      url: `${baseUrl}/${page.url}`.replace(/\/$/, ""),
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...internationalPages.map((slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
