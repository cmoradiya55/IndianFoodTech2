import { Metadata } from "next";
import PeanutButterImportSlovenia from "./PeanutButterImportSlovenia";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Slovenia | Uvoznik arašidovega masla v Sloveniji",
  description:
    "Reliable peanut butter importer in Slovenia. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Slovenian market. Exporting top-tier nut butter to Ljubljana.",
  keywords: [
    "peanut butter importer slovenia",
    "bulk peanut butter slovenia",
    "private label peanut butter slovenia",
    "uvoznik arašidovega masla",
    "arašidovo maslo veleprodaja",
    "uvoz arašidovega masla slovenija",
    "peanut butter supplier ljubljana",
    "slovenian food importers",
    "central european peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Importer Slovenia | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Slovenia. Premium bulk supply and customized private label solutions for Central European distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-import-slovenia",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_SI",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-import-slovenia",
  },
};

export default function Page() {
  return <PeanutButterImportSlovenia />;
}
