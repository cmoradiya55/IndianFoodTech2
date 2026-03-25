import { Metadata } from "next";
import Blog from "./Blog";

export const metadata: Metadata = {
  title: "Blog | Indian Foodtech - Peanut Butter Insights & Recipes",
  description:
    "Explore health tips, industry insights, creative recipes, and everything about peanut butter from Indian Foodtech — your trusted peanut butter manufacturer.",
  keywords: [
    "peanut butter blog",
    "peanut butter health benefits",
    "peanut butter recipes",
    "private label peanut butter",
    "Indian Foodtech blog",
  ],
  openGraph: {
    title: "Blog | Indian Foodtech",
    description:
      "Health tips, recipes, and industry insights about premium peanut butter from Indian Foodtech.",
    url: "https://www.indianfoodtech.in/blog",
    siteName: "Indian Foodtech",
    type: "website",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/blog",
  },
};

const BlogPage = () => {
  return <Blog />;
};

export default BlogPage;
