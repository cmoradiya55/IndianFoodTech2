import { Metadata } from "next";
import Blog from "./Blog";
import Schema from "@/components/Schema";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.indianfoodtech.com";

export const metadata: Metadata = {
  title: "Blog | Indian Foodtech - Peanut Butter Insights & Recipes",
  description: "Explore health tips, industry insights, creative recipes, and everything about peanut butter from Indian Foodtech — your trusted peanut butter manufacturer.",
  keywords: [
    "peanut butter blog",
    "peanut butter health benefits",
    "peanut butter recipes",
    "private label peanut butter",
    "Indian Foodtech blog"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Indian Foodtech - Peanut Butter Insights & Recipes",
    description: "Explore health tips, industry insights, creative recipes, and everything about peanut butter from Indian Foodtech — your trusted peanut butter manufacturer.",
    url: "/blog",
    siteName: "Indian Foodtech",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logoBlack.webp",
        width: 800,
        height: 800,
        alt: "Indian Foodtech Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Indian Foodtech - Peanut Butter Insights & Recipes",
    description: "Explore health tips, industry insights, creative recipes, and everything about peanut butter from Indian Foodtech — your trusted peanut butter manufacturer.",
    images: ["/logoBlack.webp"],
  },
};

const BlogPage = () => {
  return (
    <>
      <Schema
        type="BreadcrumbList"
        data={{
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
            { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
          ],
        }}
      />
      <Schema
        type="WebPage"
        data={{
          "@id": `${BASE_URL}/blog#webpage`,
          name: "Blog | Indian Foodtech - Peanut Butter Insights & Recipes",
          description:
            "Explore health tips, industry insights, creative recipes, and everything about peanut butter from Indian Foodtech — your trusted peanut butter manufacturer.",
          url: `${BASE_URL}/blog`,
          inLanguage: "en",
          isPartOf: { "@id": `${BASE_URL}/#website` },
          about: { "@id": `${BASE_URL}/#organization` },
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: [".aeo-speakable-summary"],
          },
        }}
      />
      <Blog />
    </>
  );
};

export default BlogPage;
