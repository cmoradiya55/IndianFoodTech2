import { Metadata } from "next";
import MarketSchema from "@/components/MarketSchema";
import PeanutButterExportIndia from "./PeanutButterExportIndia";

export const metadata: Metadata = {
  title: "Peanut Butter Exporter in India | Bulk Supply Mumbai",
  description:
    "Reliable peanut butter exporter in India. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Indian market. Located in the heart of the nut butter industry.",
  keywords: [
    "peanut butter exporter india",
    "bulk peanut butter supply india",
    "private label peanut butter india",
    "peanut butter manufacturer gujarat",
    "indian peanut butter export",
  ],
  openGraph: {
    title: "Peanut Butter Exporter India | Indian Foodtech",
    description:
      "High-quality peanut butter solutions in India. Premium bulk supply and customized private label solutions for domestic and international distributors.",
    url: "https://www.indianfoodtech.com/peanut-butter-export-india",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_IN",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.com/peanut-butter-export-india",
    languages: {
      "en-IN": "https://www.indianfoodtech.com/peanut-butter-export-india",
      "x-default": "https://www.indianfoodtech.com/",
    },
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="India"
        type="Exporter"
        description="Reliable peanut butter exporter in India. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Indian market."
        url="https://www.indianfoodtech.com/peanut-butter-export-india"
      />
      <PeanutButterExportIndia />
    </>
  );
}
