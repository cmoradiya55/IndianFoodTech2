import { Metadata } from "next";
import PeanutButterImportUkraine from "./PeanutButterImportUkraine";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Ukraine | Імпортер арахісового масла в Україні",
  description:
    "Reliable peanut butter importer in Ukraine. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Ukrainian market. Exporting top-tier nut butter to Kyiv.",
  keywords: [
    "peanut butter importer ukraine",
    "bulk peanut butter ukraine",
    "private label peanut butter ukraine",
    "імпортер арахісового масла",
    "арахісове масло оптом",
    "імпорт арахісового масла україна",
    "peanut butter supplier kyiv",
    "ukrainian food importers",
    "eastern european peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Importer Ukraine | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Ukraine. Premium bulk supply and customized private label solutions for Ukrainian distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-import-ukraine",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_UA",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-import-ukraine",
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Ukraine"
        type="Importer"
        description="High-quality peanut butter export from India to Ukraine. Premium bulk supply and customized private label solutions for Eastern European distributors."
        url="https://www.indianfoodtech.in/peanut-butter-import-ukraine"
      />
      <PeanutButterImportUkraine />
    </>
  );
}
