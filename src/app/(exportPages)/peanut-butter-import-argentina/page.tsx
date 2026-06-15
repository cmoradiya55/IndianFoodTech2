import { Metadata } from "next";
import MarketSchema from "@/components/MarketSchema";
import PeanutButterImportArgentina from "./PeanutButterImportArgentina";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Argentina | Bulk Supply India",
  description:
    "Reliable peanut butter importer in Argentina. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Argentine market.",
  keywords: [
    "peanut butter importer argentina",
    "importador mantequilla mani argentina",
    "bulk peanut butter buenos aires",
    "private label peanut butter argentina",
    "peanut butter supplier rosario",
    "argentine food importers",
    "peanut butter manufacturer in india for argentina",
    "bulk peanut butter supplier india",
    "private label peanut butter manufacturer india",
    "peanut butter exporter argentina",
    "peanut butter manufacturer argentina",
    "peanut butter supplier argentina",
    "peanut butter distributors argentina",
    "peanut butter import Argentina",
    "Argentina peanut butter supplier",
    "peanut butter manufacturer Argentina",
    "private label peanut butter Argentina",
    "bulk peanut butter Argentina",
    "wholesale peanut butter Argentina",
    "import peanut butter from Argentina",
    "Argentinian peanut butter exporter",
    "peanut butter factory Argentina",
    "peanut butter distributor Argentina",
    "natural peanut butter Argentina",
    "creamy peanut butter Argentina",
    "crunchy peanut butter Argentina",
    "organic peanut butter Argentina",
    "high protein peanut butter",
    "peanut butter export company Argentina",
    "AGRION peanut butter",
    "premium peanut butter Argentina",
    "mantequilla de maní Argentina",
    "proveedor de mantequilla de maní Argentina",
    "fabricante de mantequilla de maní Argentina",
    "mantequilla de maní al por mayor",
    "mantequilla de maní a granel",
    "exportador de mantequilla de maní Argentina",
    "importación de mantequilla de maní",
    "mantequilla de maní natural",
    "mantequilla de maní orgánica",
    "mantequilla de maní cremosa",
    "mantequilla de maní crocante",
    "marca privada mantequilla de maní",
    "fabricación por contrato mantequilla de maní",
    "mantequilla de maní rica en proteínas",
    "proveedor de alimentos Argentina",
    "exportador de alimentos Argentina"
  ],
  openGraph: {
    title: "Peanut Butter Importer Argentina | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Argentina. Premium bulk supply and customized private label solutions for South American distributors.",
    url: "https://www.indianfoodtech.com/peanut-butter-import-argentina",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "es_AR",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.com/peanut-butter-import-argentina",
    languages: {
      "es-AR": "https://www.indianfoodtech.com/peanut-butter-import-argentina",
      "x-default": "https://www.indianfoodtech.com/",
    },
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Argentina"
        type="Importer"
        description="Reliable peanut butter importer in Argentina. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Argentine market."
        url="https://www.indianfoodtech.com/peanut-butter-import-argentina"
      />
      <PeanutButterImportArgentina />
    </>
  );
}
