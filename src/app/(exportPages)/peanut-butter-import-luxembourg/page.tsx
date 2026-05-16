import { Metadata } from "next";
import PeanutButterImportLuxembourg from "./PeanutButterImportLuxembourg";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Luxembourg | Importateur de Beurre d'Arachide",
  description:
    "Reliable peanut butter importer in Luxembourg. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Luxembourg market. Exporting top-tier nut butter to Luxembourg City.",
  keywords: [
    "peanut butter importer luxembourg",
    "bulk peanut butter luxembourg",
    "private label peanut butter luxembourg",
    "importateur beurre d'arachide",
    "beurre d'arachide en gros",
    "importation de beurre d'arachide luxembourg",
    "peanut butter supplier luxembourg city",
    "luxembourg food importers",
    "benelux peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Importer Luxembourg | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Luxembourg. Premium bulk supply and customized private label solutions for BeNeLux distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-import-luxembourg",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_LU",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-import-luxembourg",
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Luxembourg"
        type="Importer"
        description="Reliable peanut butter importer in Luxembourg. Indian Foodtech offers premium bulk supply, private label, and industrial solutions."
        url="https://www.indianfoodtech.in/peanut-butter-import-luxembourg"
      />
      <PeanutButterImportLuxembourg />
    </>
  );
}
