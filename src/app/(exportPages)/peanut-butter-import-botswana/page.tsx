import { Metadata } from "next";
import PeanutButterImportBotswana from "./PeanutButterImportBotswana";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Botswana | Bulk Supply Gaborone",
  description:
    "Reliable peanut butter importer in Botswana. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Botswana market. Exporting top-tier nut butter to Gaborone.",
  keywords: [
    "peanut butter importer botswana",
    "bulk peanut butter botswana",
    "private label peanut butter botswana",
    "peanut butter supplier gaborone",
    "botswana food importers",
    "southern africa peanut butter supplier",
  ],
  openGraph: {
    title: "Peanut Butter Importer Botswana | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Botswana. Premium bulk supply and customized private label solutions for Southern African distributors.",
    url: "https://www.indianfoodtech.com/peanut-butter-import-botswana",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_BW",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.com/peanut-butter-import-botswana",
    languages: {
      "en-BW": "https://www.indianfoodtech.com/peanut-butter-import-botswana",
      "x-default": "https://www.indianfoodtech.com/",
    },
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Botswana"
        type="Importer"
        description="Reliable peanut butter importer in Botswana. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Botswana market."
        url="https://www.indianfoodtech.com/peanut-butter-import-botswana"
      />
      <PeanutButterImportBotswana />
    </>
  );
}
