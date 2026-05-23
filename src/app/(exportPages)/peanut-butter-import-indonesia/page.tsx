import { Metadata } from "next";
import PeanutButterImportIndonesia from "./PeanutButterImportIndonesia";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Indonesia | Importir Selai Kacang",
  description:
    "Reliable peanut butter importer in Indonesia. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Indonesian market. Exporting top-tier nut butter to Jakarta.",
  keywords: [
    "peanut butter importer indonesia",
    "importir selai kacang indonesia",
    "bulk peanut butter jakarta",
    "private label peanut butter indonesia",
    "peanut butter supplier surabaya",
    "indonesian food importers",
  ],
  openGraph: {
    title: "Peanut Butter Importer Indonesia | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Indonesia. Premium bulk supply and customized private label solutions for Southeast Asian distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-import-indonesia",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "id_ID",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-import-indonesia",
    languages: {
      "id-ID": "https://www.indianfoodtech.in/peanut-butter-import-indonesia",
      "x-default": "https://www.indianfoodtech.in/",
    },
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Indonesia"
        type="Importer"
        description="Reliable peanut butter importer in Indonesia. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Indonesian market."
        url="https://www.indianfoodtech.in/peanut-butter-import-indonesia"
      />
      <PeanutButterImportIndonesia />
    </>
  );
}
