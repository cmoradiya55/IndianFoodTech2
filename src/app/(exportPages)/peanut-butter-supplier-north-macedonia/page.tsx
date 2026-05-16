import { Metadata } from "next";
import PeanutButterSupplierNorthMacedonia from "./PeanutButterSupplierNorthMacedonia";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Supplier North Macedonia | Добавувач на Путер од Кикирики",
  description:
    "Reliable peanut butter supplier in North Macedonia. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Macedonian market. Exporting top-tier nut butter to Skopje.",
  keywords: [
    "peanut butter supplier north macedonia",
    "bulk peanut butter north macedonia",
    "private label peanut butter north macedonia",
    "добавувач на путер од кикирики",
    "путер од кикирики на големо",
    "увоз на путер од кикирики македонија",
    "peanut butter supplier skopje",
    "macedonian food importers",
    "balkan peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Supplier North Macedonia | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to North Macedonia. Premium bulk supply and customized private label solutions for Balkan distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-supplier-north-macedonia",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_MK",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-supplier-north-macedonia",
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="North Macedonia"
        type="Supplier"
        description="Reliable peanut butter supplier in North Macedonia. Indian Foodtech offers premium bulk supply and private label solutions."
        url="https://www.indianfoodtech.in/peanut-butter-supplier-north-macedonia"
      />
      <PeanutButterSupplierNorthMacedonia />
    </>
  );
}
