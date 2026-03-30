import { Metadata } from "next";
import PeanutButterImportFinland from "./PeanutButterImportFinland";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Finland | Maapähkinävoin maahantuoja Suomessa",
  description:
    "Reliable peanut butter importer in Finland. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Finnish market. Exporting top-tier nut butter to Helsinki.",
  keywords: [
    "peanut butter importer finland",
    "bulk peanut butter finland",
    "private label peanut butter finland",
    "maapähkinävoin maahantuoja",
    "maapähkinävoin tukkumyynti",
    "maapähkinävoin tuonti suomi",
    "peanut butter supplier helsinki",
    "finnish food importers",
    "nordic peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Importer Finland | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Finland. Premium bulk supply and customized private label solutions for Nordic distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-import-finland",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_FI",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-import-finland",
  },
};

export default function Page() {
  return <PeanutButterImportFinland />;
}
