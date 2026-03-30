import { Metadata } from "next";
import PeanutButterImportLithuania from "./PeanutButterImportLithuania";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Lithuania | Zemės riešutų sviesto importuotojas Lietuvoje",
  description:
    "Reliable peanut butter importer in Lithuania. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Lithuanian market. Exporting top-tier nut butter to Vilnius.",
  keywords: [
    "peanut butter importer lithuania",
    "bulk peanut butter lithuania",
    "private label peanut butter lithuania",
    "žemės riešutų sviesto importuotojas",
    "žemės riešutų sviestas didmeninė prekyba",
    "žemės riešutų sviesto importas lietuvoje",
    "peanut butter supplier vilnius",
    "lithuanian food importers",
    "baltic peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Importer Lithuania | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Lithuania. Premium bulk supply and customized private label solutions for Baltic distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-import-lithuania",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_LT",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-import-lithuania",
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Lithuania"
        type="Importer"
        description="Premium peanut butter exported from India to Lithuania. Indian Foodtech offers bulk supply and private label solutions for distributors in Vilnius."
        url="https://www.indianfoodtech.in/peanut-butter-import-lithuania"
      />
      <PeanutButterImportLithuania />
    </>
  );
}
