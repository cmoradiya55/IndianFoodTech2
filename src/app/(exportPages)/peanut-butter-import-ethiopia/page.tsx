import { Metadata } from "next";
import PeanutButterImportEthiopia from "./PeanutButterImportEthiopia";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Ethiopia | Bulk Supply Addis Ababa",
  description:
    "Reliable peanut butter importer in Ethiopia. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Ethiopian market.",
  keywords: [
    "peanut butter importer ethiopia",
    "bulk peanut butter addis ababa",
    "private label peanut butter ethiopia",
    "peanut butter supplier dire dawa",
    "ethiopian food importers",
  ],
  openGraph: {
    title: "Peanut Butter Importer Ethiopia | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Ethiopia. Premium bulk supply and customized private label solutions for African distributors.",
    url: "https://www.indianfoodtech.com/peanut-butter-import-ethiopia",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_ET",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.com/peanut-butter-import-ethiopia",
    languages: {
      "en-ET": "https://www.indianfoodtech.com/peanut-butter-import-ethiopia",
      "x-default": "https://www.indianfoodtech.com/",
    },
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Ethiopia"
        type="Importer"
        description="Reliable peanut butter importer in Ethiopia. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Ethiopian market."
        url="https://www.indianfoodtech.com/peanut-butter-import-ethiopia"
      />
      <PeanutButterImportEthiopia />
    </>
  );
}
