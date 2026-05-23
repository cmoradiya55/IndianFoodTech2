import { Metadata } from "next";
import PeanutButterImportNewZealand from "./PeanutButterImportNewZealand";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Importer New Zealand | Bulk Supply Auckland",
  description:
    "Reliable peanut butter importer in New Zealand. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Kiwi market. Exporting top-tier nut butter to Auckland.",
  keywords: [
    "peanut butter importer new zealand",
    "bulk peanut butter auckland",
    "private label peanut butter new zealand",
    "peanut butter supplier wellington",
    "new zealand food importers",
  ],
  openGraph: {
    title: "Peanut Butter Importer New Zealand | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to New Zealand. Premium bulk supply and customized private label solutions for Oceanic distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-import-new-zealand",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_NZ",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-import-new-zealand",
    languages: {
      "en-NZ": "https://www.indianfoodtech.in/peanut-butter-import-new-zealand",
      "x-default": "https://www.indianfoodtech.in/",
    },
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="New Zealand"
        type="Importer"
        description="Reliable peanut butter importer in New Zealand. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Kiwi market."
        url="https://www.indianfoodtech.in/peanut-butter-import-new-zealand"
      />
      <PeanutButterImportNewZealand />
    </>
  );
}
