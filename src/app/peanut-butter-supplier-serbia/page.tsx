import { Metadata } from "next";
import PeanutButterSupplierSerbia from "./PeanutButterSupplierSerbia";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Supplier Serbia | Добављач Путера од Кикирикија",
  description:
    "Reliable peanut butter supplier in Serbia. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Serbian market. Exporting top-tier nut butter to Belgrade.",
  keywords: [
    "peanut butter supplier serbia",
    "bulk peanut butter serbia",
    "private label peanut butter serbia",
    "добављач путера од кикирикија",
    "путер од кикирикија на велико",
    "увоз путера од кикирикија србија",
    "peanut butter supplier belgrade",
    "serbian food importers",
    "balkan peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Supplier Serbia | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Serbia. Premium bulk supply and customized private label solutions for Serbian distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-supplier-serbia",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_RS",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-supplier-serbia",
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Serbia"
        type="Supplier"
        description="Reliable peanut butter supplier in Serbia. Indian Foodtech offers premium bulk supply and private label solutions for the Serbian market."
        url="https://www.indianfoodtech.in/peanut-butter-supplier-serbia"
      />
      <PeanutButterSupplierSerbia />
    </>
  );
}
