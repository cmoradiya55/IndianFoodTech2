import { Metadata } from "next";
import Blog from "./Blog";

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
  openGraph: {
    title: "Blog | Indian Foodtech - Peanut Butter Insights & Recipes",
    description: "Explore health tips, industry insights, creative recipes, and everything about peanut butter from Indian Foodtech — your trusted peanut butter manufacturer.",
    url: "https://www.indianfoodtech.in/blog",
    siteName: "Indian Foodtech",
    images: [
      {
        url: "https://www.indianfoodtech.in/country/main-hero.webp",
        width: 1200,
        height: 630,
        alt: "Peanut Butter Export Supply",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Indian Foodtech - Peanut Butter Insights & Recipes",
    description: "Explore health tips, industry insights, creative recipes, and everything about peanut butter from Indian Foodtech — your trusted peanut butter manufacturer.",
    images: ["https://www.indianfoodtech.in/country/main-hero.webp"],
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/blog",
    languages: {
      en: "https://www.indianfoodtech.in/blog",
      
    },
  },
};

const BlogPage = () => {
  return <Blog />;
};

export default BlogPage;
