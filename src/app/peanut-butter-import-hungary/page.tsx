import { Metadata } from "next";
import PeanutButterImportHungary from "./PeanutButterImportHungary";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Hungary | Mogyoróvaj importőr Magyarországon",
  description:
    "Reliable peanut butter importer in Hungary. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Hungarian market. Exporting top-tier nut butter to Budapest.",
  keywords: [
    "peanut butter importer hungary",
    "bulk peanut butter hungary",
    "private label peanut butter hungary",
    "mogyoróvaj importőr",
    "mogyoróvaj nagykereskedelem",
    "mogyoróvaj import magyarországon",
    "peanut butter supplier budapest",
    "hungarian food importers",
    "central european peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Importer Hungary | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Hungary. Premium bulk supply and customized private label solutions for Central European distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-import-hungary",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_HU",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-import-hungary",
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Hungary"
        type="Importer"
        description="High-quality peanut butter export from India to Hungary. Premium bulk supply and customized private label solutions for Eastern European distributors."
        url="https://www.indianfoodtech.in/peanut-butter-import-hungary"
      />
      <PeanutButterImportHungary />
    </>
  );
}
