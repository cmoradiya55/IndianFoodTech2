import { Metadata } from "next";
import PeanutButterImportItaly from "./PeanutButterImportItaly";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Italy | Bulk Export from India",
  description:
    "Reliable peanut butter importer in Italy. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Italian market.",
  keywords: [
    "peanut butter importer italy",
    "bulk peanut butter italy",
    "private label peanut butter italy",
    "importatore burro di arachidi",
    "burro di arachidi all'ingrosso",
    "importazione burro di arachidi italia",
    "peanut butter supplier rome",
    "italian food importers",
    "european peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Importer Italy | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Italy. Premium bulk supply and customized private label solutions for Southern European distributors.",
    url: "https://www.indianfoodtech.com/peanut-butter-import-italy",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_IT",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.com/peanut-butter-import-italy",
    languages: {
      "en-IT": "https://www.indianfoodtech.com/peanut-butter-import-italy",
      "x-default": "https://www.indianfoodtech.com/",
    },
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Italy"
        type="Importer"
        description="Reliable peanut butter importer in Italy. Indian Foodtech provides high-quality bulk supply and private label services for the Italian market."
        url="https://www.indianfoodtech.com/peanut-butter-import-italy"
      />
      <PeanutButterImportItaly />
    </>
  );
}
