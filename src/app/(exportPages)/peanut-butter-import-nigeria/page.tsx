import { Metadata } from "next";
import MarketSchema from "@/components/MarketSchema";
import PeanutButterImportNigeria from "./PeanutButterImportNigeria";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Nigeria | Bulk Export from India",
  description:
    "Reliable peanut butter importer in Nigeria. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Nigerian market.",
  keywords: [
    "peanut butter importer nigeria",
    "bulk peanut butter lagos",
    "private label peanut butter nigeria",
    "peanut butter supplier kano",
    "nigerian food importers",
  ],
  openGraph: {
    title: "Peanut Butter Importer Nigeria | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Nigeria. Premium bulk supply and customized private label solutions for African distributors.",
    url: "https://www.indianfoodtech.com/peanut-butter-import-nigeria",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_NG",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.com/peanut-butter-import-nigeria",
    languages: {
      "en-NG": "https://www.indianfoodtech.com/peanut-butter-import-nigeria",
      "x-default": "https://www.indianfoodtech.com/",
    },
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Nigeria"
        type="Importer"
        description="Reliable peanut butter importer in Nigeria. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Nigerian market."
        url="https://www.indianfoodtech.com/peanut-butter-import-nigeria"
      />
      <PeanutButterImportNigeria />
    </>
  );
}
