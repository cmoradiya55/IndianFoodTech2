import { Metadata } from "next";
import MarketSchema from "@/components/MarketSchema";
import PeanutButterImportChina from "./PeanutButterImportChina";

export const metadata: Metadata = {
  title: "Peanut Butter Importer China | Bulk Export from India",
  description:
    "Reliable peanut butter importer in China. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Chinese market.",
  keywords: [
    "peanut butter importer china",
    "??????",
    "bulk peanut butter shanghai",
    "private label peanut butter china",
    "peanut butter supplier guangzhou",
    "chinese food importers",
  ],
  openGraph: {
    title: "Peanut Butter Importer China | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to China. Premium bulk supply and customized private label solutions for Asian distributors.",
    url: "https://www.indianfoodtech.com/peanut-butter-import-china",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "zh_CN",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.com/peanut-butter-import-china",
    languages: {
      "zh-CN": "https://www.indianfoodtech.com/peanut-butter-import-china",
      "x-default": "https://www.indianfoodtech.com/",
    },
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="China"
        type="Importer"
        description="Reliable peanut butter importer in China. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Chinese market."
        url="https://www.indianfoodtech.com/peanut-butter-import-china"
      />
      <PeanutButterImportChina />
    </>
  );
}
