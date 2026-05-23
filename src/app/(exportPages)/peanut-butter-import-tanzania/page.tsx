import { Metadata } from "next";
import PeanutButterImportTanzania from "./PeanutButterImportTanzania";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Tanzania | Bulk Supply Dar es Salaam",
  description:
    "Reliable peanut butter importer in Tanzania. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Tanzanian market. Exporting top-tier nut butter to Dar es Salaam.",
  keywords: [
    "peanut butter importer tanzania",
    "bulk peanut butter dar es salaam",
    "private label peanut butter tanzania",
    "peanut butter supplier zanzibar",
    "tanzanian food importers",
  ],
  openGraph: {
    title: "Peanut Butter Importer Tanzania | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Tanzania. Premium bulk supply and customized private label solutions for African distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-import-tanzania",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_TZ",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-import-tanzania",
    languages: {
      "en-TZ": "https://www.indianfoodtech.in/peanut-butter-import-tanzania",
      "x-default": "https://www.indianfoodtech.in/",
    },
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Tanzania"
        type="Importer"
        description="Reliable peanut butter importer in Tanzania. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Tanzanian market."
        url="https://www.indianfoodtech.in/peanut-butter-import-tanzania"
      />
      <PeanutButterImportTanzania />
    </>
  );
}
