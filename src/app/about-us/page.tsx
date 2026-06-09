import { Metadata } from "next";
import React from 'react'
import AboutUs from "./AboutUs";
import Schema from "@/components/Schema";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.indianfoodtech.com";

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
    canonical: "/about-us",
    languages: {
      "en-US": "/about-us",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "About Us | Indian Foodtech - Manufacturer Journey",
    description:
      "Learn about Indian Food Tech's journey as a top manufacturer of high-quality peanut butter and spreads, dedicated to food safety and reliable large-scale supply.",
    url: "/about-us",
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
  return (
    <>
      <Schema
        type="BreadcrumbList"
        data={{
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
            { "@type": "ListItem", position: 2, name: "About Us", item: `${BASE_URL}/about-us` },
          ],
        }}
      />
      <Schema
        type="AboutPage"
        data={{
          "@id": `${BASE_URL}/about-us#webpage`,
          name: "About Indian Foodtech",
          description:
            "Indian Foodtech is a B2B peanut butter and nut butter manufacturer and exporter based in Surat, Gujarat, India, producing 5 MT daily and exporting to 75+ countries with FSSAI, Halal, and ISO certifications.",
          url: `${BASE_URL}/about-us`,
          inLanguage: "en",
          isPartOf: { "@id": `${BASE_URL}/#website` },
          about: { "@id": `${BASE_URL}/#organization` },
          mainEntity: { "@id": `${BASE_URL}/#organization` },
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: [".aeo-speakable-summary"],
          },
        }}
      />
      <AboutUs />
    </>
  );
}
