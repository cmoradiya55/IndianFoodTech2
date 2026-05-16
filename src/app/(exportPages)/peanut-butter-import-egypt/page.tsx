import { Metadata } from "next";
import PeanutButterImportEgypt from "./PeanutButterImportEgypt";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Egypt | مستورد زبدة الفول السوداني",
  description:
    "Reliable peanut butter importer in Egypt. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Egyptian market. Exporting top-tier nut butter to Cairo.",
  keywords: [
    "peanut butter importer egypt",
    "مستورد زبدة الفول السوداني مصر",
    "bulk peanut butter cairo",
    "private label peanut butter egypt",
    "peanut butter supplier alexandria",
    "egyptian food importers",
  ],
  openGraph: {
    title: "Peanut Butter Importer Egypt | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Egypt. Premium bulk supply and customized private label solutions for African distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-import-egypt",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "ar_EG",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-import-egypt",
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Egypt"
        type="Importer"
        description="Reliable peanut butter importer in Egypt. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Egyptian market."
        url="https://www.indianfoodtech.in/peanut-butter-import-egypt"
      />
      <PeanutButterImportEgypt />
    </>
  );
}
