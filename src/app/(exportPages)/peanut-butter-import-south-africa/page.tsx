import { Metadata } from "next";
import PeanutButterImportSouthAfrica from "./PeanutButterImportSouthAfrica";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Importer South Africa | Bulk Supply Johannesburg",
  description:
    "Reliable peanut butter importer in South Africa. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the South African market. Exporting top-tier nut butter to Johannesburg.",
  keywords: [
    "peanut butter importer south africa",
    "bulk peanut butter south africa",
    "private label peanut butter south africa",
    "peanut butter supplier cape town",
    "south african food importers",
  ],
  openGraph: {
    title: "Peanut Butter Importer South Africa | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to South Africa. Premium bulk supply and customized private label solutions for African distributors.",
    url: "https://www.indianfoodtech.com/peanut-butter-import-south-africa",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_ZA",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.com/peanut-butter-import-south-africa",
    languages: {
      "en-ZA": "https://www.indianfoodtech.com/peanut-butter-import-south-africa",
      "x-default": "https://www.indianfoodtech.com/",
    },
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="South Africa"
        type="Importer"
        description="Reliable peanut butter importer in South Africa. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the South African market."
        url="https://www.indianfoodtech.com/peanut-butter-import-south-africa"
      />
      <PeanutButterImportSouthAfrica />
    </>
  );
}
