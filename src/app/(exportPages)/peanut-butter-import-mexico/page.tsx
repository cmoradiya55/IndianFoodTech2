import { Metadata } from "next";
import PeanutButterImportMexico from "./PeanutButterImportMexico";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Mexico | Importador de Mantequilla de Maní",
  description:
    "Reliable peanut butter importer in Mexico. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Mexican market. Exporting top-tier nut butter to Mexico City.",
  keywords: [
    "peanut butter importer mexico",
    "importador mantequilla mani mexico",
    "bulk peanut butter mexico city",
    "private label peanut butter mexico",
    "peanut butter supplier guadalajara",
    "mexican food importers",
  ],
  openGraph: {
    title: "Peanut Butter Importer Mexico | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Mexico. Premium bulk supply and customized private label solutions for North American distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-import-mexico",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "es_MX",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-import-mexico",
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Mexico"
        type="Importer"
        description="Reliable peanut butter importer in Mexico. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Mexican market."
        url="https://www.indianfoodtech.in/peanut-butter-import-mexico"
      />
      <PeanutButterImportMexico />
    </>
  );
}
