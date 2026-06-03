import { Metadata } from "next";
import PeanutButterImportIceland from "./PeanutButterImportIceland";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Iceland | Bulk Export from India",
  description:
    "Reliable peanut butter importer in Iceland. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Icelandic market.",
  keywords: [
    "peanut butter importer iceland",
    "bulk peanut butter iceland",
    "private label peanut butter iceland",
    "hnetusmjör innflytjandi",
    "hnetusmjör heildsala",
    "innflutningur hnetusmjörs ísland",
    "peanut butter supplier reykjavik",
    "icelandic food importers",
    "nordic peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Importer Iceland | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Iceland. Premium bulk supply and customized private label solutions for Nordic distributors.",
    url: "https://www.indianfoodtech.com/peanut-butter-import-iceland",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_IS",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.com/peanut-butter-import-iceland",
    languages: {
      "en-IS": "https://www.indianfoodtech.com/peanut-butter-import-iceland",
      "x-default": "https://www.indianfoodtech.com/",
    },
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Iceland"
        type="Importer"
        description="Reliable peanut butter importer in Iceland. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Icelandic market."
        url="https://www.indianfoodtech.com/peanut-butter-import-iceland"
      />
      <PeanutButterImportIceland />
    </>
  );
}
