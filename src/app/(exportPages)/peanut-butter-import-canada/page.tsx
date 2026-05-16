import { Metadata } from "next";
import MarketSchema from "@/components/MarketSchema";
import PeanutButterImportCanada from "./PeanutButterImportCanada";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Canada | Bulk Supply Toronto",
  description:
    "Reliable peanut butter importer in Canada. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Canadian market. Exporting top-tier nut butter to Toronto.",
  keywords: [
    "peanut butter importer canada",
    "bulk peanut butter toronto",
    "private label peanut butter canada",
    "peanut butter supplier vancouver",
    "canadian food importers",
    "bulk peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Importer Canada | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Canada. Premium bulk supply and customized private label solutions for North American distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-import-canada",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_CA",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-import-canada",
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Canada"
        type="Importer"
        description="Reliable peanut butter importer in Canada. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Canadian market."
        url="https://www.indianfoodtech.in/peanut-butter-import-canada"
      />
      <PeanutButterImportCanada />
    </>
  );
}
