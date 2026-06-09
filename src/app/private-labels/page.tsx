import { Metadata } from "next";
import React from 'react'
import PrivateLabels from "./PrivateLabels";
import Schema from "@/components/Schema";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.indianfoodtech.com";

export const metadata: Metadata = {
  title: "Private Label Peanut Butter | Indian Foodtech",
  description:
    "Partner with Indian Food Tech for premium B2B private label peanut butter manufacturing and flexible packaging solutions tailored for your brand.",
  keywords: [
    "private label peanut butter",
    "peanut butter manufacturer india",
    "B2B peanut butter supplier",
    "contract packaging peanut butter",
    "custom recipe peanut butter",
    "tahini paste wholesale",
  ],
  alternates: {
    canonical: "/private-labels",
    languages: {
      "en-US": "/private-labels",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Private Label Peanut Butter | Indian Foodtech",
    description:
      "Partner with Indian Food Tech for premium B2B private label peanut butter manufacturing and flexible packaging solutions tailored for your brand.",
    url: "/private-labels",
    siteName: "Indian Foodtech",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logoBlack.webp",
        width: 800,
        height: 800,
        alt: "Private Label Peanut Butter Manufacturing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Label Peanut Butter | Indian Foodtech",
    description:
      "Partner with Indian Food Tech for premium B2B private label peanut butter manufacturing and flexible packaging solutions tailored for your brand.",
    images: ["/logoBlack.webp"],
  },
};

export default function PrivateLabelsPage() {
  return (
    <>
      <Schema
        type="BreadcrumbList"
        data={{
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
            { "@type": "ListItem", position: 2, name: "Private Labels", item: `${BASE_URL}/private-labels` },
          ],
        }}
      />
      <Schema
        type="WebPage"
        data={{
          "@id": `${BASE_URL}/private-labels#webpage`,
          name: "Private Label Peanut Butter | Indian Foodtech",
          description:
            "Partner with Indian Food Tech for premium B2B private label peanut butter manufacturing and flexible packaging solutions tailored for your brand.",
          url: `${BASE_URL}/private-labels`,
          inLanguage: "en",
          isPartOf: { "@id": `${BASE_URL}/#website` },
          about: { "@id": `${BASE_URL}/#organization` },
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: [".aeo-speakable-summary"],
          },
        }}
      />
      <Schema
        type="Service"
        data={{
          serviceType: "Private Label Peanut Butter Manufacturing",
          name: "Private Label & Contract Manufacturing",
          description:
            "End-to-end private label manufacturing for peanut butter, nut butters, and spreads — custom formulation, branded packaging design, label printing, destination-market labeling compliance, and full export documentation under your brand.",
          provider: { "@id": `${BASE_URL}/#organization` },
          areaServed: { "@type": "Place", name: "Worldwide" },
          audience: {
            "@type": "BusinessAudience",
            audienceType: "Retail brands, supermarket chains, distributors, and importers",
          },
          url: `${BASE_URL}/private-labels`,
        }}
      />
      <PrivateLabels />
    </>
  );
}
