import { Metadata } from "next";
import MarketSchema from "@/components/MarketSchema";
import PeanutButterImportKenya from "./PeanutButterImportKenya";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Kenya | Bulk Supply Nairobi",
  description:
    "Reliable peanut butter importer in Kenya. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Kenyan market. Exporting top-tier nut butter to Nairobi.",
  keywords: [
    "peanut butter importer kenya",
    "bulk peanut butter nairobi",
    "private label peanut butter kenya",
    "peanut butter supplier mombasa",
    "kenyan food importers",
  ],
  openGraph: {
    title: "Peanut Butter Importer Kenya | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Kenya. Premium bulk supply and customized private label solutions for African distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-import-kenya",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_KE",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-import-kenya",
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Kenya"
        type="Importer"
        description="Reliable peanut butter importer in Kenya. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Kenyan market."
        url="https://www.indianfoodtech.in/peanut-butter-import-kenya"
      />
      <PeanutButterImportKenya />
    </>
  );
}
