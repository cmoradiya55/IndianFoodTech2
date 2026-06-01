import { Metadata } from "next";
import MarketSchema from "@/components/MarketSchema";
import PeanutButterImportMalaysia from "./PeanutButterImportMalaysia";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Malaysia | Pengimport Mentega Kacang",
  description:
    "Reliable peanut butter importer in Malaysia. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Malaysian market. Exporting top-tier nut butter to Kuala Lumpur.",
  keywords: [
    "peanut butter importer malaysia",
    "pengimport mentega kacang malaysia",
    "bulk peanut butter kuala lumpur",
    "private label peanut butter malaysia",
    "peanut butter supplier penang",
    "malaysian food importers",
  ],
  openGraph: {
    title: "Peanut Butter Importer Malaysia | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Malaysia. Premium bulk supply and customized private label solutions for Southeast Asian distributors.",
    url: "https://www.indianfoodtech.com/peanut-butter-import-malaysia",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "ms_MY",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.com/peanut-butter-import-malaysia",
    languages: {
      "ms-MY": "https://www.indianfoodtech.com/peanut-butter-import-malaysia",
      "x-default": "https://www.indianfoodtech.com/",
    },
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Malaysia"
        type="Importer"
        description="Reliable peanut butter importer in Malaysia. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Malaysian market."
        url="https://www.indianfoodtech.com/peanut-butter-import-malaysia"
      />
      <PeanutButterImportMalaysia />
    </>
  );
}
