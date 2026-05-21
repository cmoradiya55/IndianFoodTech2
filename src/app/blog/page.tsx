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
  alternates: {
    canonical: "https://www.indianfoodtech.in/blog",
  },
  openGraph: {
    title: "Blog | Indian Foodtech - Peanut Butter Insights & Recipes",
    description: "Explore health tips, industry insights, creative recipes, and everything about peanut butter from Indian Foodtech — your trusted peanut butter manufacturer.",
    url: "https://www.indianfoodtech.in/blog",
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
  return <Blog />;
};

export default BlogPage;
