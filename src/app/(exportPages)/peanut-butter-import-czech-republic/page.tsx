import { Metadata } from "next";
import PeanutButterImportCzechRepublic from "./PeanutButterImportCzechRepublic";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Czech Republic | Dodavatel Arašídového Másla",
  description:
    "Reliable peanut butter importer in Czech Republic. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Czech market. Exporting top-tier nut butter to Prague.",
  keywords: [
    "peanut butter importer czech republic",
    "bulk peanut butter czech republic",
    "private label peanut butter czech republic",
    "arašídové máslo dodavatel",
    "arašídové máslo velkoobchod",
    "dovoz arašídového másla česká republika",
    "peanut butter supplier prague",
    "czech food importers",
    "bohemian peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Importer Czech Republic | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Czech Republic. Premium bulk supply and customized private label solutions for Central European distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-import-czech-republic",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_CZ",
  },
  alternates: {
    canonical:
      "https://www.indianfoodtech.in/peanut-butter-import-czech-republic",
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Czech Republic"
        type="Importer"
        description="Reliable peanut butter importer in Czech Republic. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Czech market."
        url="https://www.indianfoodtech.in/peanut-butter-import-czech-republic"
      />
      <PeanutButterImportCzechRepublic />
    </>
  );
}
