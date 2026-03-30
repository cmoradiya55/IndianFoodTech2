import { Metadata } from "next";
import PeanutButterImportVaticanCity from "./PeanutButterImportVaticanCity";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Vatican City | Importatore di Burro d'Arachidi",
  description:
    "Reliable peanut butter importer in Vatican City. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Holy See. Exporting top-tier nut butter.",
  keywords: [
    "peanut butter importer vatican city",
    "bulk peanut butter vatican city",
    "private label peanut butter vatican city",
    "importatore burro d'arachidi",
    "burro d'arachidi all'ingrosso",
    "vatican food importers",
    "holy see food supply",
  ],
  openGraph: {
    title: "Peanut Butter Importer Vatican City | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Vatican City. Premium bulk supply and customized private label solutions for distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-import-vatican-city",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_VA",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-import-vatican-city",
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Vatican City"
        type="Importer"
        description="Reliable peanut butter importer in Vatican City. Indian Foodtech offers premium bulk supply, private label, and industrial solutions."
        url="https://www.indianfoodtech.in/peanut-butter-import-vatican-city"
      />
      <PeanutButterImportVaticanCity />
    </>
  );
}
