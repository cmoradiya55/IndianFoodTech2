import { Metadata } from "next";
import PeanutButterImportKosovo from "./PeanutButterImportKosovo";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Kosovo | Bulk Export from India",
  description:
    "Reliable peanut butter importer in Kosovo. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Kosovo market.",
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
    url: "https://www.indianfoodtech.com/peanut-butter-import-kosovo",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_XK",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.com/peanut-butter-import-kosovo",
    languages: {
      "en-XK": "https://www.indianfoodtech.com/peanut-butter-import-kosovo",
      "x-default": "https://www.indianfoodtech.com/",
    },
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Kosovo"
        type="Importer"
        description="Reliable peanut butter importer in Kosovo. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Kosovo market."
        url="https://www.indianfoodtech.com/peanut-butter-import-kosovo"
      />
      <PeanutButterImportKosovo />
    </>
  );
}
