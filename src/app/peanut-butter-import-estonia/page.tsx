import { Metadata } from "next";
import PeanutButterImportEstonia from "./PeanutButterImportEstonia";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Estonia | Maapähklivõi maaletooja Eestis",
  description:
    "Reliable peanut butter importer in Estonia. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Estonian market. Exporting top-tier nut butter to Tallinn.",
  keywords: [
    "peanut butter importer estonia",
    "bulk peanut butter estonia",
    "private label peanut butter estonia",
    "maapähklivõi maaletooja",
    "maapähklivõi hulgimüük",
    "maapähklivõi import eestisse",
    "peanut butter supplier tallinn",
    "estonia food importers",
    "baltic peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Importer Estonia | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Estonia. Premium bulk supply and customized private label solutions for Baltic distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-import-estonia",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_EE",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-import-estonia",
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Estonia"
        type="Importer"
        description="Premium peanut butter exported from India to Estonia. Indian Foodtech offers bulk supply and private label solutions for distributors in Tallinn."
        url="https://www.indianfoodtech.in/peanut-butter-import-estonia"
      />
      <PeanutButterImportEstonia />
    </>
  );
}
