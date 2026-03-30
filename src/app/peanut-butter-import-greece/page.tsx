import { Metadata } from "next";
import PeanutButterImportGreece from "./PeanutButterImportGreece";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Greece | Εισαγωγέας φυστικοβούτυρου στo Ελλάδα",
  description:
    "Reliable peanut butter importer in Greece. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Greek market. Exporting top-tier nut butter to Athens.",
  keywords: [
    "peanut butter importer greece",
    "bulk peanut butter greece",
    "private label peanut butter greece",
    "εισαγωγέας φυστικοβούτυρου",
    "φυστικοβούτυρο χονδρική",
    "εισαγωγή φυστικοβούτυρου ελλάδα",
    "peanut butter supplier athens",
    "greek food importers",
    "mediterranean peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Importer Greece | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Greece. Premium bulk supply and customized private label solutions for Mediterranean distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-import-greece",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_GR",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-import-greece",
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Greece"
        type="Importer"
        description="Reliable peanut butter importer in Greece. Indian Foodtech provides high-quality bulk supply and private label services for the Greek market."
        url="https://www.indianfoodtech.in/peanut-butter-import-greece"
      />
      <PeanutButterImportGreece />
    </>
  );
}
