import { Metadata } from "next";
import PeanutButterSupplierBosniaHerzegovina from "./PeanutButterSupplierBosniaHerzegovina";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Supplier Bosnia & Herzegovina | Dobavljač Kikiriki Putera",
  description:
    "Reliable peanut butter supplier in Bosnia & Herzegovina. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Bosnian market. Exporting top-tier nut butter to Sarajevo.",
  keywords: [
    "peanut butter supplier bosnia and herzegovina",
    "bulk peanut butter bosnia",
    "private label peanut butter bosnia",
    "dobavljač kikiriki putera",
    "veleprodaja kikiriki putera",
    "uvoz kikiriki putera bosna",
    "peanut butter supplier sarajevo",
    "bosnian food importers",
    "balkan peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Supplier Bosnia & Herzegovina | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Bosnia & Herzegovina. Premium bulk supply and customized private label solutions for Balkan distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-supplier-bosnia-herzegovina",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_BA",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-supplier-bosnia-herzegovina",
  },
};

const PeanutButterSupplierBosniaHerzegovinaPage = () => {
  return (
    <>
      <MarketSchema
        country="Bosnia Herzegovina"
        type="Supplier"
        description="Reliable peanut butter supplier in Bosnia Herzegovina. Indian Foodtech offers premium bulk supply, private label, and industrial solutions."
        url="https://www.indianfoodtech.in/peanut-butter-supplier-bosnia-herzegovina"
      />
      <PeanutButterSupplierBosniaHerzegovina />
    </>
  );
};

export default PeanutButterSupplierBosniaHerzegovinaPage;
