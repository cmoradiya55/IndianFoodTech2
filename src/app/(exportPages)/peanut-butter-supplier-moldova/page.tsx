import { Metadata } from "next";
import PeanutButterSupplierMoldova from "./PeanutButterSupplierMoldova";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Supplier Moldova | Furnizor de Unt de Arahide",
  description:
    "Reliable peanut butter supplier in Moldova. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Moldovan market. Exporting top-tier nut butter to Chisinau.",
  keywords: [
    "peanut butter supplier moldova",
    "bulk peanut butter moldova",
    "private label peanut butter moldova",
    "furnizor unt de arahide",
    "unt de arahide en gros",
    "import unt de arahide moldova",
    "peanut butter supplier chisinau",
    "moldovan food importers",
    "eastern european peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Supplier Moldova | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Moldova. Premium bulk supply and customized private label solutions for Moldovan distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-supplier-moldova",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_MD",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-supplier-moldova",
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Moldova"
        type="Supplier"
        description="Reliable peanut butter supplier in Moldova. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Moldovan market."
        url="https://www.indianfoodtech.in/peanut-butter-supplier-moldova"
      />
      <PeanutButterSupplierMoldova />
    </>
  );
}
