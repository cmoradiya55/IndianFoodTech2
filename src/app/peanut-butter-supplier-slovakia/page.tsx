import { Metadata } from "next";
import PeanutButterSupplierSlovakia from "./PeanutButterSupplierSlovakia";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Supplier Slovakia | Dodávateľ Arašidového Masla",
  description:
    "Reliable peanut butter supplier in Slovakia. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Slovak market. Exporting top-tier nut butter to Bratislava.",
  keywords: [
    "peanut butter supplier slovakia",
    "bulk peanut butter slovakia",
    "private label peanut butter slovakia",
    "dodávateľ arašidového masla",
    "arašidové maslo veľkoobchod",
    "import arašidového masla slovensko",
    "peanut butter supplier bratislava",
    "slovak food importers",
    "european peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Supplier Slovakia | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Slovakia. Premium bulk supply and customized private label solutions for Slovak distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-supplier-slovakia",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_SK",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-supplier-slovakia",
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Slovakia"
        type="Supplier"
        description="Reliable peanut butter supplier in Slovakia. Indian Foodtech offers premium bulk supply and private label solutions for the Slovakian market."
        url="https://www.indianfoodtech.in/peanut-butter-supplier-slovakia"
      />
      <PeanutButterSupplierSlovakia />
    </>
  );
}
