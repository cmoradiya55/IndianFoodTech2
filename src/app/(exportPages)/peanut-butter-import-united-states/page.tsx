import { Metadata } from "next";
import MarketSchema from "@/components/MarketSchema";
import PeanutButterImportUnitedStates from "./PeanutButterImportUnitedStates";

export const metadata: Metadata = {
  title: "Peanut Butter Importer United States | Indian Foodtech",
  description:
    "Reliable peanut butter importer in United States. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the American market.",
  keywords: [
    "peanut butter importer united states",
    "bulk peanut butter usa",
    "private label peanut butter america",
    "peanut butter supplier new york",
    "us food importers",
    "bulk nut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Importer United States | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to United States. Premium bulk supply and customized private label solutions for North American distributors.",
    url: "https://www.indianfoodtech.com/peanut-butter-import-united-states",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical:
      "https://www.indianfoodtech.com/peanut-butter-import-united-states",
    languages: {
      "en-US": "https://www.indianfoodtech.com/peanut-butter-import-united-states",
      "x-default": "https://www.indianfoodtech.com/",
    },
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="United States"
        type="Importer"
        description="Reliable peanut butter importer in United States. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the American market."
        url="https://www.indianfoodtech.com/peanut-butter-import-united-states"
      />
      <PeanutButterImportUnitedStates />
    </>
  );
}
