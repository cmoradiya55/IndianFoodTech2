import { Metadata } from "next";
import PeanutButterImportIreland from "./PeanutButterImportIreland";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Ireland | Allmhaireoir im cnónna talún in Éirinn",
  description:
    "Reliable peanut butter importer in Ireland. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Irish market. Exporting top-tier nut butter to Dublin.",
  keywords: [
    "peanut butter importer ireland",
    "bulk peanut butter ireland",
    "private label peanut butter ireland",
    "allmhaireoir im cnónna talún",
    "mórchóir im cnónna talún éire",
    "soláthraí im cnónna talún dublin",
    "peanut butter supplier ireland",
    "irish food importers",
    "emerald isle peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Importer Ireland | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Ireland. Premium bulk supply and customized private label solutions for Irish distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-import-ireland",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_IE",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-import-ireland",
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Ireland"
        type="Importer"
        description="Premium peanut butter exported from India to Ireland. Indian Foodtech offers bulk supply and private label solutions for distributors in Dublin and beyond."
        url="https://www.indianfoodtech.in/peanut-butter-import-ireland"
      />
      <PeanutButterImportIreland />
    </>
  );
}
