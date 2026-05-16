import { Metadata } from "next";
import PeanutButterImportGermany from "./PeanutButterImportGermany";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Germany | Erdnussbutter-Importeur",
  description:
    "Reliable peanut butter importer in Germany. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the German market. Exporting top-tier nut butter to Berlin.",
  keywords: [
    "peanut butter importer germany",
    "bulk peanut butter germany",
    "private label peanut butter germany",
    "erdnussbutter importeur",
    "erdnussbutter großhandel",
    "erdnussbutter import deutschland",
    "peanut butter supplier berlin",
    "german food importers",
    "central european peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Importer Germany | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Germany. Premium bulk supply and customized private label solutions for Central European distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-import-germany",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_DE",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-import-germany",
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Germany"
        type="Importer"
        description="Premium peanut butter exported from India to Germany. Indian Foodtech offers bulk supply and private label solutions for distributors in Berlin and Hamburg."
        url="https://www.indianfoodtech.in/peanut-butter-import-germany"
      />
      <PeanutButterImportGermany />
    </>
  );
}
