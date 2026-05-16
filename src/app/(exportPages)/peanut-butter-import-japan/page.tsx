import { Metadata } from "next";
import MarketSchema from "@/components/MarketSchema";
import PeanutButterImportJapan from "./PeanutButterImportJapan";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Japan | ピーナッツバター輸入業者",
  description:
    "Reliable peanut butter importer in Japan. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Japanese market. Exporting top-tier nut butter to Tokyo.",
  keywords: [
    "peanut butter importer japan",
    "ピーナッツバター輸入業者",
    "bulk peanut butter tokyo",
    "private label peanut butter japan",
    "peanut butter supplier osaka",
    "japanese food importers",
  ],
  openGraph: {
    title: "Peanut Butter Importer Japan | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Japan. Premium bulk supply and customized private label solutions for Asian distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-import-japan",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "ja_JP",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-import-japan",
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Japan"
        type="Importer"
        description="Reliable peanut butter importer in Japan. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Japanese market."
        url="https://www.indianfoodtech.in/peanut-butter-import-japan"
      />
      <PeanutButterImportJapan />
    </>
  );
}
