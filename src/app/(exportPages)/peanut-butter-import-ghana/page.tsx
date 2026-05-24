import { Metadata } from "next";
import MarketSchema from "@/components/MarketSchema";
import PeanutButterImportGhana from "./PeanutButterImportGhana";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Ghana | Bulk Supply Accra",
  description:
    "Reliable peanut butter importer in Ghana. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Ghanaian market. Exporting top-tier nut butter to Accra.",
  keywords: [
    "peanut butter importer ghana",
    "bulk peanut butter accra",
    "private label peanut butter ghana",
    "peanut butter supplier kumasi",
    "ghanaian food importers",
  ],
  openGraph: {
    title: "Peanut Butter Importer Ghana | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Ghana. Premium bulk supply and customized private label solutions for African distributors.",
    url: "https://www.indianfoodtech.com/peanut-butter-import-ghana",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_GH",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.com/peanut-butter-import-ghana",
    languages: {
      "en-GH": "https://www.indianfoodtech.com/peanut-butter-import-ghana",
      "x-default": "https://www.indianfoodtech.com/",
    },
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Ghana"
        type="Importer"
        description="Reliable peanut butter importer in Ghana. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Ghanaian market."
        url="https://www.indianfoodtech.com/peanut-butter-import-ghana"
      />
      <PeanutButterImportGhana />
    </>
  );
}
