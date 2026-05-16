import { Metadata } from "next";
import MarketSchema from "@/components/MarketSchema";
import PeanutButterImportArgentina from "./PeanutButterImportArgentina";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Argentina | Importador de Mantequilla de Maní",
  description:
    "Reliable peanut butter importer in Argentina. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Argentine market. Exporting top-tier nut butter to Buenos Aires.",
  keywords: [
    "peanut butter importer argentina",
    "importador mantequilla mani argentina",
    "bulk peanut butter buenos aires",
    "private label peanut butter argentina",
    "peanut butter supplier rosario",
    "argentine food importers",
  ],
  openGraph: {
    title: "Peanut Butter Importer Argentina | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Argentina. Premium bulk supply and customized private label solutions for South American distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-import-argentina",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "es_AR",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-import-argentina",
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Argentina"
        type="Importer"
        description="Reliable peanut butter importer in Argentina. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Argentine market."
        url="https://www.indianfoodtech.in/peanut-butter-import-argentina"
      />
      <PeanutButterImportArgentina />
    </>
  );
}
