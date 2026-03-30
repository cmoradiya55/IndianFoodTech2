import { Metadata } from "next";
import PeanutButterSupplierRomania from "./PeanutButterSupplierRomania";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Supplier Romania | Furnizor de Unt de Arahide",
  description:
    "Reliable peanut butter supplier in Romania. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Romanian market. Exporting top-tier nut butter to Bucharest.",
  keywords: [
    "peanut butter supplier romania",
    "bulk peanut butter romania",
    "private label peanut butter romania",
    "furnizor de unt de arahide",
    "unt de arahide en-gros",
    "import de unt de arahide romania",
    "peanut butter supplier bucharest",
    "romanian food importers",
    "european peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Supplier Romania | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Romania. Premium bulk supply and customized private label solutions for Romanian distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-supplier-romania",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_RO",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-supplier-romania",
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Romania"
        type="Supplier"
        description="Reliable peanut butter supplier in Romania. Indian Foodtech offers premium bulk supply and private label solutions for the Romanian market."
        url="https://www.indianfoodtech.in/peanut-butter-supplier-romania"
      />
      <PeanutButterSupplierRomania />
    </>
  );
}
