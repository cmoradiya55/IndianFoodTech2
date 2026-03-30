import { Metadata } from "next";
import PeanutButterImportLatvia from "./PeanutButterImportLatvia";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Latvia | Zemesriekstu sviesta importētājs Latvijā",
  description:
    "Reliable peanut butter importer in Latvia. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Latvian market. Exporting top-tier nut butter to Riga.",
  keywords: [
    "peanut butter importer latvia",
    "bulk peanut butter latvia",
    "private label peanut butter latvia",
    "zemesriekstu sviesta importētājs",
    "zemesriekstu sviests vairumtirdzniecība",
    "zemesriekstu sviesta imports latvijā",
    "peanut butter supplier riga",
    "latvian food importers",
    "baltic peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Importer Latvia | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Latvia. Premium bulk supply and customized private label solutions for Baltic distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-import-latvia",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_LV",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-import-latvia",
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Latvia"
        type="Importer"
        description="High-quality peanut butter export from India to Latvia. Premium bulk supply and customized private label solutions for Baltic distributors."
        url="https://www.indianfoodtech.in/peanut-butter-import-latvia"
      />
      <PeanutButterImportLatvia />
    </>
  );
}
