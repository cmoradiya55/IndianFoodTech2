import { Metadata } from "next";
import PeanutButterSupplierBelgium from "./PeanutButterSupplierBelgium";

export const metadata: Metadata = {
  title: "Peanut Butter Supplier Belgium | Leverancier van Pindakaas",
  description:
    "Reliable peanut butter supplier in Belgium. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Belgian market. Exporting top-tier nut butter to Brussels.",
  keywords: [
    "peanut butter supplier belgium",
    "bulk peanut butter belgium",
    "private label peanut butter belgium",
    "leverancier van pindakaas",
    "pindakaas groothandel",
    "import van pindakaas belgië",
    "peanut butter supplier brussels",
    "belgian food importers",
    "european peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Supplier Belgium | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Belgium. Premium bulk supply and customized private label solutions for European distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-supplier-belgium",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_BE",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-supplier-belgium",
  },
};

const PeanutButterSupplierBelgiumPage = () => {
  return <PeanutButterSupplierBelgium />;
};

export default PeanutButterSupplierBelgiumPage;
