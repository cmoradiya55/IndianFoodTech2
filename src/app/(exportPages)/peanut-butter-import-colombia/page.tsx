import { Metadata } from "next";
import MarketSchema from "@/components/MarketSchema";
import PeanutButterImportColombia from "./PeanutButterImportColombia";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Colombia | Importador de Mantequilla de Maní",
  description:
    "Reliable peanut butter importer in Colombia. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Colombian market. Exporting top-tier nut butter to Bogotá.",
  keywords: [
    "peanut butter importer colombia",
    "importador mantequilla mani colombia",
    "bulk peanut butter bogota",
    "private label peanut butter colombia",
    "peanut butter supplier medellin",
    "colombian food importers",
  ],
  openGraph: {
    title: "Peanut Butter Importer Colombia | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Colombia. Premium bulk supply and customized private label solutions for South American distributors.",
    url: "https://www.indianfoodtech.com/peanut-butter-import-colombia",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "es_CO",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.com/peanut-butter-import-colombia",
    languages: {
      "es-CO": "https://www.indianfoodtech.com/peanut-butter-import-colombia",
      "x-default": "https://www.indianfoodtech.com/",
    },
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Colombia"
        type="Importer"
        description="Reliable peanut butter importer in Colombia. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Colombian market."
        url="https://www.indianfoodtech.com/peanut-butter-import-colombia"
      />
      <PeanutButterImportColombia />
    </>
  );
}
