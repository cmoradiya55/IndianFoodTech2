import { Metadata } from "next";
import PeanutButterImportDenmark from "./PeanutButterImportDenmark";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Denmark | Importør af Jordnøddesmør",
  description:
    "Reliable peanut butter importer in Denmark. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Danish market. Exporting top-tier nut butter to Copenhagen.",
  keywords: [
    "peanut butter importer denmark",
    "bulk peanut butter denmark",
    "private label peanut butter denmark",
    "jordnøddesmør importør",
    "jordnøddesmør engros",
    "import af jordnøddesmør danmark",
    "peanut butter supplier copenhagen",
    "danish food importers",
    "scandinavian peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Importer Denmark | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Denmark. Premium bulk supply and customized private label solutions for Scandinavian distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-import-denmark",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_DK",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-import-denmark",
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Denmark"
        type="Importer"
        description="High-quality peanut butter export from India to Denmark. Premium bulk supply and customized private label solutions for Scandinavian distributors."
        url="https://www.indianfoodtech.in/peanut-butter-import-denmark"
      />
      <PeanutButterImportDenmark />
    </>
  );
}
