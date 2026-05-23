import { Metadata } from "next";
import MarketSchema from "@/components/MarketSchema";
import PeanutButterImportThailand from "./PeanutButterImportThailand";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Thailand | ผู้นำเข้าเนยถั่ว",
  description:
    "Reliable peanut butter importer in Thailand. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Thai market. Exporting top-tier nut butter to Bangkok.",
  keywords: [
    "peanut butter importer thailand",
    "ผู้นำเข้าเนยถั่ว",
    "bulk peanut butter bangkok",
    "private label peanut butter thailand",
    "peanut butter supplier chiang mai",
    "thai food importers",
  ],
  openGraph: {
    title: "Peanut Butter Importer Thailand | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Thailand. Premium bulk supply and customized private label solutions for Southeast Asian distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-import-thailand",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "th_TH",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-import-thailand",
    languages: {
      "th-TH": "https://www.indianfoodtech.in/peanut-butter-import-thailand",
      "x-default": "https://www.indianfoodtech.in/",
    },
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Thailand"
        type="Importer"
        description="Reliable peanut butter importer in Thailand. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Thai market."
        url="https://www.indianfoodtech.in/peanut-butter-import-thailand"
      />
      <PeanutButterImportThailand />
    </>
  );
}
