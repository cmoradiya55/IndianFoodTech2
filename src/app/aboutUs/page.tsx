import { Metadata } from "next";
import React from 'react'
import AboutUs from "./AboutUs";

export const metadata: Metadata = {
  title: "About Us | Indian Foodtech - Manufacturer Journey",
  description:
    "Learn about Indian Food Tech's journey as a top manufacturer of high-quality peanut butter and spreads, dedicated to food safety and reliable large-scale supply.",
  keywords: [
    "about indian foodtech",
    "peanut butter manufacturer story",
    "food safety certified supplier",
    "large-scale supply factory",
    "about peanut butter production",
  ],
  alternates: {
    canonical: "https://www.indianfoodtech.in/aboutUs",
  },
  openGraph: {
    title: "About Us | Indian Foodtech - Manufacturer Journey",
    description:
      "Learn about Indian Food Tech's journey as a top manufacturer of high-quality peanut butter and spreads, dedicated to food safety and reliable large-scale supply.",
    url: "https://www.indianfoodtech.in/aboutUs",
    siteName: "Indian Foodtech",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logoBlack.webp",
        width: 800,
        height: 800,
        alt: "About Indian Foodtech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Indian Foodtech - Manufacturer Journey",
    description:
      "Learn about Indian Food Tech's journey as a top manufacturer of high-quality peanut butter and spreads, dedicated to food safety and reliable large-scale supply.",
    images: ["/logoBlack.webp"],
  },
};

export default function AboutUsPage() {
  return <AboutUs />;
}
