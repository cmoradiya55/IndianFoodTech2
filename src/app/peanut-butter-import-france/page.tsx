import { Metadata } from "next";
import PeanutButterImportFrance from "./PeanutButterImportFrance";

export const metadata: Metadata = {
  title: "Peanut Butter Importer France | Importateur de Beurre de Cacahuète",
  description:
    "Reliable peanut butter importer in France. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the French market. Exporting top-tier nut butter to Paris.",
  keywords: [
    "peanut butter importer france",
    "bulk peanut butter france",
    "private label peanut butter france",
    "importateur beurre de cacahuète",
    "beurre de cacahuète en gros",
    "importation de beurre de cacahuète france",
    "peanut butter supplier paris",
    "french food importers",
    "european peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Importer France | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to France. Premium bulk supply and customized private label solutions for Western European distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-import-france",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_FR",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-import-france",
  },
};

export default function Page() {
  return <PeanutButterImportFrance />;
}
