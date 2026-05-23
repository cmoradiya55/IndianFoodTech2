import { Metadata } from "next";
import MarketSchema from "@/components/MarketSchema";
import PeanutButterImportIndia from "./PeanutButterImportIndia";

export const metadata: Metadata = {
  title: "Peanut Butter Importer India | Bulk Supply Mumbai",
  description:
    "Reliable peanut butter importer in India. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Indian market. Located in the heart of the nut butter industry.",
  keywords: [
    "peanut butter importer india",
    "bulk peanut butter supply india",
    "private label peanut butter india",
    "peanut butter manufacturer gujarat",
    "indian peanut butter export",
  ],
  openGraph: {
    title: "Peanut Butter Importer India | Indian Foodtech",
    description:
      "High-quality peanut butter solutions in India. Premium bulk supply and customized private label solutions for domestic and international distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-import-india",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_IN",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-import-india",
    languages: {
      "en-IN": "https://www.indianfoodtech.in/peanut-butter-import-india",
      "x-default": "https://www.indianfoodtech.in/",
    },
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="India"
        type="Importer"
        description="Reliable peanut butter importer in India. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Indian market."
        url="https://www.indianfoodtech.in/peanut-butter-import-india"
      />
      <PeanutButterImportIndia />
    </>
  );
}
