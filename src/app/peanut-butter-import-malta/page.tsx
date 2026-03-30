import { Metadata } from "next";
import PeanutButterImportMalta from "./PeanutButterImportMalta";

export const metadata: Metadata = {
  title: "Peanut Butter Importer in Malta | Mediterranean Quality Export from India",
  description: "Premium peanut butter importer in Malta. Indian Foodtech offers high-quality bulk supply, private label, and industrial solutions for the Maltese market. Exporting to Valletta.",
  keywords: [
    "peanut butter importer malta",
    "bulk peanut butter malta",
    "private label peanut butter malta",
    "maltese food imports",
    "peanut butter factory for malta"
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
    title: "Peanut Butter Importer in Malta | Mediterranean Quality Export from India",
    description: "Premium peanut butter importer in Malta. Indian Foodtech offers high-quality bulk supply, private label, and industrial solutions for the Maltese market. Exporting to Valletta.",
    url: "https://www.indianfoodtech.in/peanut-butter-import-malta",
    siteName: "Indian Foodtech",
    images: [
      {
        url: "https://www.indianfoodtech.in/country/malta-hero.webp",
        width: 1200,
        height: 630,
        alt: "Peanut Butter Export Supply",
      },
    ],
    locale: "en_MT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peanut Butter Importer in Malta | Mediterranean Quality Export from India",
    description: "Premium peanut butter importer in Malta. Indian Foodtech offers high-quality bulk supply, private label, and industrial solutions for the Maltese market. Exporting to Valletta.",
    images: ["https://www.indianfoodtech.in/country/malta-hero.webp"],
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-import-malta",
    languages: {
      en: "https://www.indianfoodtech.in/peanut-butter-import-malta",
      mt: "https://www.indianfoodtech.in/peanut-butter-import-malta",
    },
  },
};

export default function Page() {
  return <PeanutButterImportMalta />;
}
