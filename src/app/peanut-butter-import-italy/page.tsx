import { Metadata } from "next";
import PeanutButterImportItaly from "./PeanutButterImportItaly";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Italy | Importatore di Burro di Arachidi in Italia",
  description:
    "Reliable peanut butter importer in Italy. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Italian market. Exporting top-tier nut butter to Rome.",
  keywords: [
    "peanut butter importer italy",
    "bulk peanut butter italy",
    "private label peanut butter italy",
    "importatore burro di arachidi",
    "burro di arachidi all'ingrosso",
    "importazione burro di arachidi italia",
    "peanut butter supplier rome",
    "italian food importers",
    "european peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Importer Italy | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Italy. Premium bulk supply and customized private label solutions for Southern European distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-import-italy",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_IT",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-import-italy",
  },
};

export default function Page() {
  return <PeanutButterImportItaly />;
}
