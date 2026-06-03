import { Metadata } from "next";
import MarketSchema from "@/components/MarketSchema";
import PeanutButterImportUnitedArabEmirates from "./PeanutButterImportUnitedArabEmirates";

export const metadata: Metadata = {
  title: "Peanut Butter Importer UAE | ?????? ???? ????? ????????",
  description:
    "Reliable peanut butter importer in UAE. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Emirates market.",
  keywords: [
    "peanut butter importer uae",
    "?????? ???? ????? ???????? ????????",
    "bulk peanut butter dubai",
    "private label peanut butter uae",
    "peanut butter supplier abu dhabi",
    "emirates food importers",
  ],
  openGraph: {
    title: "Peanut Butter Importer UAE | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to UAE. Premium bulk supply and customized private label solutions for Middle Eastern distributors.",
    url: "https://www.indianfoodtech.com/peanut-butter-import-united-arab-emirates",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "ar_AE",
  },
  alternates: {
    canonical:
      "https://www.indianfoodtech.com/peanut-butter-import-united-arab-emirates",
    languages: {
      "ar-AE": "https://www.indianfoodtech.com/peanut-butter-import-united-arab-emirates",
      "x-default": "https://www.indianfoodtech.com/",
    },
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="United Arab Emirates"
        type="Importer"
        description="Reliable peanut butter importer in UAE. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Emirates market."
        url="https://www.indianfoodtech.com/peanut-butter-import-united-arab-emirates"
      />
      <PeanutButterImportUnitedArabEmirates />
    </>
  );
}
