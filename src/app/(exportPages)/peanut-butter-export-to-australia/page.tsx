import { Metadata } from "next";
import PeanutButterExportToAustralia from "./PeanutButterExportToAustralia";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Exporter to Australia | Bulk Supply Sydney",
  description:
    "Reliable peanut butter exporter to Australia. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Australian market.",
  keywords: [
    "peanut butter exporter to australia",
    "peanut butter manufacturer India export to Australia",
    "peanut butter supplier in Australia",
    "bulk peanut butter sydney",
    "private label peanut butter australia",
    "peanut butter supplier melbourne",
    "australian food exporters to",
    "peanut butter export to Australia",
    "Australia peanut butter supplier",
    "peanut butter manufacturer Australia",
    "private label peanut butter Australia",
    "bulk peanut butter Australia",
    "wholesale peanut butter Australia",
    "export peanut butter to Australia",
    "peanut butter exporter Australia",
    "natural peanut butter Australia",
    "organic peanut butter Australia",
    "creamy peanut butter Australia",
    "crunchy peanut butter Australia",
    "high protein peanut butter Australia",
    "healthy peanut butter Australia",
    "peanut butter distributor Australia",
    "peanut butter for supermarkets Australia",
    "peanut butter for retailers Australia",
    "peanut butter for gyms Australia",
    "peanut butter supplier Sydney",
    "peanut butter supplier Melbourne",
    "peanut butter supplier Brisbane",
    "peanut butter supplier Perth",
    "premium peanut butter Australia",
    "AGRION peanut butter",
    "private label food manufacturer Australia",
    "contract manufacturing peanut butter Australia",
    "bulk food supplier Australia",
    "buy peanut butter in bulk Australia",
    "private label peanut butter manufacturer Australia",
    "wholesale peanut butter supplier Australia",
    "best peanut butter supplier Australia",
    "bulk peanut butter for supermarkets Australia",
    "high protein peanut butter supplier Australia",
    "natural peanut butter wholesale Australia",
    "organic peanut butter distributor Australia",
    "peanut butter exporters to Australia",
    "contract manufacturing peanut butter Australia",
    "healthy peanut butter Australia",
    "protein peanut butter Australia",
    "natural peanut spread Australia",
    "bulk nut butter supplier Australia",
    "private label spreads Australia",
    "foodservice peanut butter Australia",
    "Australia peanut butter market",
    "Australia nut butter market",
  ],
  openGraph: {
    title: "Peanut Butter Exporter to Australia | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Australia. Premium bulk supply and customized private label solutions for Oceanic distributors.",
    url: "https://www.indianfoodtech.com/peanut-butter-export-to-australia",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_AU",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.com/peanut-butter-export-to-australia",
    languages: {
      "en-AU": "https://www.indianfoodtech.com/peanut-butter-export-to-australia",
      "x-default": "https://www.indianfoodtech.com/",
    },
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Australia"
        type="Exporter"
        description="Reliable peanut butter exporter to Australia. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Australian market."
        url="https://www.indianfoodtech.com/peanut-butter-export-to-australia"
      />
      <PeanutButterExportToAustralia />
    </>
  );
}
