import { Metadata } from "next";
import PeanutButterImportBrazil from "./PeanutButterImportBrazil";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Brazil | Bulk Export from India",
  description:
    "Reliable peanut butter importer in Brazil. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Brazilian market.",
  keywords: [
    "peanut butter importer brazil",
    "importador manteiga amendoim brasil",
    "bulk peanut butter sao paulo",
    "private label peanut butter brazil",
    "peanut butter supplier rio de janeiro",
    "brazilian food importers",
  ],
  openGraph: {
    title: "Peanut Butter Importer Brazil | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Brazil. Premium bulk supply and customized private label solutions for South American distributors.",
    url: "https://www.indianfoodtech.com/peanut-butter-import-brazil",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "pt_BR",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.com/peanut-butter-import-brazil",
    languages: {
      "pt-BR": "https://www.indianfoodtech.com/peanut-butter-import-brazil",
      "x-default": "https://www.indianfoodtech.com/",
    },
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Brazil"
        type="Importer"
        description="Reliable peanut butter importer in Brazil. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Brazilian market."
        url="https://www.indianfoodtech.com/peanut-butter-import-brazil"
      />
      <PeanutButterImportBrazil />
    </>
  );
}
