import { Metadata } from "next";
import MarketSchema from "@/components/MarketSchema";
import PeanutButterImportSaudiArabia from "./PeanutButterImportSaudiArabia";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Saudi Arabia | مستورد زبدة الفول السوداني",
  description:
    "Reliable peanut butter importer in Saudi Arabia. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the KSA market. Exporting top-tier nut butter to Riyadh.",
  keywords: [
    "peanut butter importer saudi arabia",
    "مستورد زبدة الفول السوداني السعودية",
    "bulk peanut butter riyadh",
    "private label peanut butter saudi arabia",
    "peanut butter supplier jeddah",
    "saudi food importers",
  ],
  openGraph: {
    title: "Peanut Butter Importer Saudi Arabia | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Saudi Arabia. Premium bulk supply and customized private label solutions for Middle Eastern distributors.",
    url: "https://www.indianfoodtech.com/peanut-butter-import-saudi-arabia",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "ar_SA",
  },
  alternates: {
    canonical:
      "https://www.indianfoodtech.com/peanut-butter-import-saudi-arabia",
    languages: {
      "ar-SA": "https://www.indianfoodtech.com/peanut-butter-import-saudi-arabia",
      "x-default": "https://www.indianfoodtech.com/",
    },
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Saudi Arabia"
        type="Importer"
        description="Reliable peanut butter importer in Saudi Arabia. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the KSA market."
        url="https://www.indianfoodtech.com/peanut-butter-import-saudi-arabia"
      />
      <PeanutButterImportSaudiArabia />
    </>
  );
}
