import { Metadata } from "next";
import PeanutButterImportKuwait from "./PeanutButterImportKuwait";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Kuwait | مستورد زبدة الفول السوداني",
  description:
    "Reliable peanut butter importer in Kuwait. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Kuwaiti market. Exporting top-tier nut butter to Kuwait City.",
  keywords: [
    "peanut butter importer kuwait",
    "مستورد زبدة الفول السوداني الكويت",
    "bulk peanut butter kuwait city",
    "private label peanut butter kuwait",
    "peanut butter supplier al jahra",
    "kuwaiti food importers",
  ],
  openGraph: {
    title: "Peanut Butter Importer Kuwait | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Kuwait. Premium bulk supply and customized private label solutions for Middle Eastern distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-import-kuwait",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "ar_KW",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-import-kuwait",
    languages: {
      "ar-KW": "https://www.indianfoodtech.in/peanut-butter-import-kuwait",
      "x-default": "https://www.indianfoodtech.in/",
    },
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Kuwait"
        type="Importer"
        description="Reliable peanut butter importer in Kuwait. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Kuwaiti market."
        url="https://www.indianfoodtech.in/peanut-butter-import-kuwait"
      />
      <PeanutButterImportKuwait />
    </>
  );
}
