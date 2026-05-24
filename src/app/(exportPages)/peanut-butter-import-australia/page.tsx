import { Metadata } from "next";
import PeanutButterImportAustralia from "./PeanutButterImportAustralia";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Australia | Bulk Supply Sydney",
  description:
    "Reliable peanut butter importer in Australia. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Australian market. Exporting top-tier nut butter to Sydney.",
  keywords: [
    "peanut butter importer australia",
    "bulk peanut butter sydney",
    "private label peanut butter australia",
    "peanut butter supplier melbourne",
    "australian food importers",
  ],
  openGraph: {
    title: "Peanut Butter Importer Australia | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Australia. Premium bulk supply and customized private label solutions for Oceanic distributors.",
    url: "https://www.indianfoodtech.com/peanut-butter-import-australia",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_AU",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.com/peanut-butter-import-australia",
    languages: {
      "en-AU": "https://www.indianfoodtech.com/peanut-butter-import-australia",
      "x-default": "https://www.indianfoodtech.com/",
    },
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Australia"
        type="Importer"
        description="Reliable peanut butter importer in Australia. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Australian market."
        url="https://www.indianfoodtech.com/peanut-butter-import-australia"
      />
      <PeanutButterImportAustralia />
    </>
  );
}
