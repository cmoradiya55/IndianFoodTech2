import { Metadata } from "next";
import PeanutButterImportKosovo from "./PeanutButterImportKosovo";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Kosovo | Importues i gjalpit të kikirikut në Kosovë",
  description:
    "Reliable peanut butter importer in Kosovo. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Kosovo market. Exporting top-tier nut butter to Pristina.",
  keywords: [
    "peanut butter importer kosovo",
    "bulk peanut butter kosovo",
    "private label peanut butter kosovo",
    "importues gjalpi kikiriku",
    "gjalpë kikiriku me shumicë",
    "importimi i gjalpit të kikirikut kosovë",
    "peanut butter supplier pristina",
    "kosovo food importers",
    "balkan peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Importer Kosovo | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Kosovo. Premium bulk supply and customized private label solutions for Balkan distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-import-kosovo",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_XK",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-import-kosovo",
  },
};

export default function Page() {
  return <PeanutButterImportKosovo />;
}
