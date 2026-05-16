import { Metadata } from "next";
import PeanutButterImportQatar from "./PeanutButterImportQatar";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Qatar | مستورد زبدة الفول السوداني",
  description:
    "Reliable peanut butter importer in Qatar. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Qatari market. Exporting top-tier nut butter to Doha.",
  keywords: [
    "peanut butter importer qatar",
    "مستورد زبدة الفول السوداني قطر",
    "bulk peanut butter doha",
    "private label peanut butter qatar",
    "peanut butter supplier al rayyan",
    "qatari food importers",
  ],
  openGraph: {
    title: "Peanut Butter Importer Qatar | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Qatar. Premium bulk supply and customized private label solutions for Middle Eastern distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-import-qatar",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "ar_QA",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-import-qatar",
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Qatar"
        type="Importer"
        description="Reliable peanut butter importer in Qatar. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Qatari market."
        url="https://www.indianfoodtech.in/peanut-butter-import-qatar"
      />
      <PeanutButterImportQatar />
    </>
  );
}
