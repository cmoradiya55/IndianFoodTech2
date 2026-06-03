import { Metadata } from "next";
import MarketSchema from "@/components/MarketSchema";
import PeanutButterImportJapan from "./PeanutButterImportJapan";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Japan | Bulk Export from India",
  description:
    "Reliable peanut butter importer in Japan. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Japanese market.",
  keywords: [
    "peanut butter importer japan",
    "????????????",
    "bulk peanut butter tokyo",
    "private label peanut butter japan",
    "peanut butter supplier osaka",
    "japanese food importers",
  ],
  openGraph: {
    title: "Peanut Butter Importer Japan | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Japan. Premium bulk supply and customized private label solutions for Asian distributors.",
    url: "https://www.indianfoodtech.com/peanut-butter-import-japan",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "ja_JP",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.com/peanut-butter-import-japan",
    languages: {
      "ja-JP": "https://www.indianfoodtech.com/peanut-butter-import-japan",
      "x-default": "https://www.indianfoodtech.com/",
    },
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Japan"
        type="Importer"
        description="Reliable peanut butter importer in Japan. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Japanese market."
        url="https://www.indianfoodtech.com/peanut-butter-import-japan"
      />
      <PeanutButterImportJapan />
    </>
  );
}
