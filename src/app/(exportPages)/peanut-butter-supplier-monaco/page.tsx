import { Metadata } from "next";
import PeanutButterSupplierMonaco from "./PeanutButterSupplierMonaco";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Supplier Monaco | Fournisseur de Beurre de Cacahuète",
  description:
    "Reliable peanut butter supplier in Monaco. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Monégasque market. Exporting top-tier nut butter to Monte Carlo.",
  keywords: [
    "peanut butter supplier monaco",
    "bulk peanut butter monaco",
    "private label peanut butter monaco",
    "fournisseur de beurre de cacahuète",
    "beurre de cacahuète en gros",
    "importation de beurre de cacahuète monaco",
    "peanut butter supplier monte carlo",
    "monégasque food importers",
    "european peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Supplier Monaco | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Monaco. Premium bulk supply and customized private label solutions for Monégasque distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-supplier-monaco",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_MC",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-supplier-monaco",
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Monaco"
        type="Supplier"
        description="Reliable peanut butter supplier in Monaco. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Monegasque market."
        url="https://www.indianfoodtech.in/peanut-butter-supplier-monaco"
      />
      <PeanutButterSupplierMonaco />
    </>
  );
}
