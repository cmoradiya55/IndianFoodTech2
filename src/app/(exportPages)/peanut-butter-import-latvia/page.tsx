import { Metadata } from "next";
import PeanutButterImportLatvia from "./PeanutButterImportLatvia";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Latvia | Bulk Export from India",
  description:
    "Reliable peanut butter importer in Latvia. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Latvian market.",
  keywords: [
    "peanut butter importer latvia",
    "bulk peanut butter latvia",
    "private label peanut butter latvia",
    "zemesriekstu sviesta importetajs",
    "zemesriekstu sviests vairumtirdznieciba",
    "zemesriekstu sviesta imports latvija",
    "peanut butter supplier riga",
    "latvian food importers",
    "baltic peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Importer Latvia | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Latvia. Premium bulk supply and customized private label solutions for Baltic distributors.",
    url: "https://www.indianfoodtech.com/peanut-butter-import-latvia",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_LV",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.com/peanut-butter-import-latvia",
    languages: {
      "en-LV": "https://www.indianfoodtech.com/peanut-butter-import-latvia",
      "x-default": "https://www.indianfoodtech.com/",
    },
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Latvia"
        type="Importer"
        description="High-quality peanut butter export from India to Latvia. Premium bulk supply and customized private label solutions for Baltic distributors."
        url="https://www.indianfoodtech.com/peanut-butter-import-latvia"
      />
      <PeanutButterImportLatvia />
    </>
  );
}
