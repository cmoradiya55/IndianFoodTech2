import { Metadata } from "next";
import PeanutButterSupplierSanMarino from "./PeanutButterSupplierSanMarino";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Supplier San Marino | Fornitore di Burro d'Arachidi",
  description:
    "Reliable peanut butter supplier in San Marino. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Sammarinese market. Exporting top-tier nut butter to San Marino City.",
  keywords: [
    "peanut butter supplier san marino",
    "bulk peanut butter san marino",
    "private label peanut butter san marino",
    "fornitore di burro d'arachidi",
    "burro d'arachidi all'ingrosso",
    "importazione di burro d'arachidi san marino",
    "peanut butter supplier san marino city",
    "sammarinese food importers",
    "european peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Supplier San Marino | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to San Marino. Premium bulk supply and customized private label solutions for Sammarinese distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-supplier-san-marino",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_SM",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-supplier-san-marino",
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="San Marino"
        type="Supplier"
        description="Reliable peanut butter supplier in San Marino. Indian Foodtech offers premium bulk supply and private label solutions."
        url="https://www.indianfoodtech.in/peanut-butter-supplier-san-marino"
      />
      <PeanutButterSupplierSanMarino />
    </>
  );
}
