import { Metadata } from "next";
import PeanutButterImportLithuania from "./PeanutButterImportLithuania";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Lithuania | Bulk Supply India",
  description:
    "Reliable peanut butter importer in Lithuania. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Lithuanian market.",
  keywords: [
    "peanut butter importer lithuania",
    "bulk peanut butter lithuania",
    "private label peanut butter lithuania",
    "žemes riešutu sviesto importuotojas",
    "žemes riešutu sviestas didmenine prekyba",
    "žemes riešutu sviesto importas lietuvoje",
    "peanut butter supplier vilnius",
    "lithuanian food importers",
    "baltic peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Importer Lithuania | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Lithuania. Premium bulk supply and customized private label solutions for Baltic distributors.",
    url: "https://www.indianfoodtech.com/peanut-butter-import-lithuania",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_LT",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.com/peanut-butter-import-lithuania",
    languages: {
      "en-LT": "https://www.indianfoodtech.com/peanut-butter-import-lithuania",
      "x-default": "https://www.indianfoodtech.com/",
    },
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Lithuania"
        type="Importer"
        description="Premium peanut butter exported from India to Lithuania. Indian Foodtech offers bulk supply and private label solutions for distributors in Vilnius."
        url="https://www.indianfoodtech.com/peanut-butter-import-lithuania"
      />
      <PeanutButterImportLithuania />
    </>
  );
}
