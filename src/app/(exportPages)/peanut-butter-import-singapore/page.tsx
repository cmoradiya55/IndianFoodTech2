import { Metadata } from "next";
import PeanutButterImportSingapore from "./PeanutButterImportSingapore";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Singapore | Bulk Supply Hub",
  description:
    "Reliable peanut butter importer in Singapore. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Singaporean market. Exporting top-tier nut butter to the Lion City.",
  keywords: [
    "peanut butter importer singapore",
    "bulk peanut butter singapore",
    "private label peanut butter singapore",
    "peanut butter supplier singapore",
    "singapore food importers",
  ],
  openGraph: {
    title: "Peanut Butter Importer Singapore | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Singapore. Premium bulk supply and customized private label solutions for Southeast Asian distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-import-singapore",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_SG",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-import-singapore",
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Singapore"
        type="Importer"
        description="Reliable peanut butter importer in Singapore. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Singaporean market."
        url="https://www.indianfoodtech.in/peanut-butter-import-singapore"
      />
      <PeanutButterImportSingapore />
    </>
  );
}
