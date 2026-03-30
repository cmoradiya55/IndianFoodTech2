import { Metadata } from "next";
import PeanutButterImportLiechtenstein from "./PeanutButterImportLiechtenstein";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Liechtenstein | Erdnussbutter-Importeur",
  description:
    "Reliable peanut butter importer in Liechtenstein. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Liechtenstein market. Exporting top-tier nut butter to Vaduz.",
  keywords: [
    "peanut butter importer liechtenstein",
    "bulk peanut butter liechtenstein",
    "private label peanut butter liechtenstein",
    "erdnussbutter importeur",
    "erdnussbutter großhandel",
    "erdnussbutter import liechtenstein",
    "peanut butter supplier vaduz",
    "liechtenstein food importers",
    "alpine peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Importer Liechtenstein | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Liechtenstein. Premium bulk supply and customized private label solutions for Alpine distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-import-liechtenstein",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_LI",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-import-liechtenstein",
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Liechtenstein"
        type="Importer"
        description="Reliable peanut butter importer in Liechtenstein. Indian Foodtech offers premium bulk supply, private label, and industrial solutions."
        url="https://www.indianfoodtech.in/peanut-butter-import-liechtenstein"
      />
      <PeanutButterImportLiechtenstein />
    </>
  );
}
