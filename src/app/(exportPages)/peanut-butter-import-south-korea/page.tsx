import { Metadata } from "next";
import PeanutButterImportSouthKorea from "./PeanutButterImportSouthKorea";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Importer South Korea | 땅콩 버터 수입업자",
  description:
    "Reliable peanut butter importer in South Korea. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Korean market. Exporting top-tier nut butter to Seoul.",
  keywords: [
    "peanut butter importer south korea",
    "땅콩 버터 수입업자",
    "bulk peanut butter seoul",
    "private label peanut butter korea",
    "peanut butter supplier busan",
    "korean food importers",
  ],
  openGraph: {
    title: "Peanut Butter Importer South Korea | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to South Korea. Premium bulk supply and customized private label solutions for Asian distributors.",
    url: "https://www.indianfoodtech.com/peanut-butter-import-south-korea",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "ko_KR",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.com/peanut-butter-import-south-korea",
    languages: {
      "ko-KR": "https://www.indianfoodtech.com/peanut-butter-import-south-korea",
      "x-default": "https://www.indianfoodtech.com/",
    },
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="South Korea"
        type="Importer"
        description="Reliable peanut butter importer in South Korea. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Korean market."
        url="https://www.indianfoodtech.com/peanut-butter-import-south-korea"
      />
      <PeanutButterImportSouthKorea />
    </>
  );
}
