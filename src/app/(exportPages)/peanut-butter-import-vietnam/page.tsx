import { Metadata } from "next";
import PeanutButterImportVietnam from "./PeanutButterImportVietnam";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Vietnam | Nhà nh?p kh?u bo d?u ph?ng",
  description:
    "Reliable peanut butter importer in Vietnam. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Vietnamese market.",
  keywords: [
    "peanut butter importer vietnam",
    "nhà nh?p kh?u bo d?u ph?ng vietnam",
    "bulk peanut butter ho chi minh city",
    "private label peanut butter vietnam",
    "peanut butter supplier hanoi",
    "vietnamese food importers",
  ],
  openGraph: {
    title: "Peanut Butter Importer Vietnam | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Vietnam. Premium bulk supply and customized private label solutions for Southeast Asian distributors.",
    url: "https://www.indianfoodtech.com/peanut-butter-import-vietnam",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "vi_VN",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.com/peanut-butter-import-vietnam",
    languages: {
      "vi-VN": "https://www.indianfoodtech.com/peanut-butter-import-vietnam",
      "x-default": "https://www.indianfoodtech.com/",
    },
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Vietnam"
        type="Importer"
        description="Reliable peanut butter importer in Vietnam. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Vietnamese market."
        url="https://www.indianfoodtech.com/peanut-butter-import-vietnam"
      />
      <PeanutButterImportVietnam />
    </>
  );
}
