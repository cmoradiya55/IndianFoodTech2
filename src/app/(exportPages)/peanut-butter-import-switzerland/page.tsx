import { Metadata } from "next";
import PeanutButterImportSwitzerland from "./PeanutButterImportSwitzerland";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Switzerland | Importeur von Erdnussbutter",
  description:
    "Reliable peanut butter importer in Switzerland. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Swiss market. Exporting top-tier nut butter to Zurich.",
  keywords: [
    "peanut butter importer switzerland",
    "bulk peanut butter switzerland",
    "private label peanut butter switzerland",
    "erdnussbutter importeur",
    "erdnussbutter großhandel",
    "erdnussbutter import schweiz",
    "peanut butter supplier zurich",
    "swiss food importers",
    "european peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Importer Switzerland | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Switzerland. Premium bulk supply and customized private label solutions for Swiss distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-import-switzerland",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_CH",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-import-switzerland",
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Switzerland"
        type="Importer"
        description="Reliable peanut butter importer in Switzerland. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Swiss market."
        url="https://www.indianfoodtech.in/peanut-butter-import-switzerland"
      />
      <PeanutButterImportSwitzerland />
    </>
  );
}
