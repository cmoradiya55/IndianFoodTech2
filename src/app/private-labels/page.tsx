import { Metadata } from "next";
import React from 'react'
import PrivateLabels from "./PrivateLabels";

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
    canonical: "https://www.indianfoodtech.in/private-labels",
    languages: {
      "en-US": "https://www.indianfoodtech.in/private-labels",
      "x-default": "https://www.indianfoodtech.in/",
    },
  },
  openGraph: {
    title: "Private Label Peanut Butter | Indian Foodtech",
    description:
      "Partner with Indian Food Tech for premium B2B private label peanut butter manufacturing and flexible packaging solutions tailored for your brand.",
    url: "https://www.indianfoodtech.in/private-labels",
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
  return <PrivateLabels />;
}
