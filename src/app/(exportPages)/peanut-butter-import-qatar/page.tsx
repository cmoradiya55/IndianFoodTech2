import { Metadata } from "next";
import PeanutButterImportQatar from "./PeanutButterImportQatar";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Qatar | ?????? ???? ????? ????????",
  description:
    "Reliable peanut butter importer in Qatar. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Qatari market.",
  keywords: [
    "peanut butter importer qatar",
    "?????? ???? ????? ???????? ???",
    "bulk peanut butter doha",
    "private label peanut butter qatar",
    "peanut butter supplier al rayyan",
    "qatari food importers",
  ],
  openGraph: {
    title: "Peanut Butter Importer Qatar | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Qatar. Premium bulk supply and customized private label solutions for Middle Eastern distributors.",
    url: "https://www.indianfoodtech.com/peanut-butter-import-qatar",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "ar_QA",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.com/peanut-butter-import-qatar",
    languages: {
      "ar-QA": "https://www.indianfoodtech.com/peanut-butter-import-qatar",
      "x-default": "https://www.indianfoodtech.com/",
    },
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Qatar"
        type="Importer"
        description="Reliable peanut butter importer in Qatar. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Qatari market."
        url="https://www.indianfoodtech.com/peanut-butter-import-qatar"
      />
      <PeanutButterImportQatar />
    </>
  );
}
