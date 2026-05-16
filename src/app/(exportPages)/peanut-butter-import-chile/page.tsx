import { Metadata } from "next";
import PeanutButterImportChile from "./PeanutButterImportChile";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Chile | Importador de Mantequilla de Maní",
  description:
    "Reliable peanut butter importer in Chile. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Chilean market. Exporting top-tier nut butter to Santiago.",
  keywords: [
    "peanut butter importer chile",
    "importador mantequilla mani chile",
    "bulk peanut butter santiago",
    "private label peanut butter chile",
    "peanut butter supplier valparaiso",
    "chilean food importers",
  ],
  openGraph: {
    title: "Peanut Butter Importer Chile | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Chile. Premium bulk supply and customized private label solutions for South American distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-import-chile",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "es_CL",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-import-chile",
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Chile"
        type="Importer"
        description="Reliable peanut butter importer in Chile. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Chilean market."
        url="https://www.indianfoodtech.in/peanut-butter-import-chile"
      />
      <PeanutButterImportChile />
    </>
  );
}
