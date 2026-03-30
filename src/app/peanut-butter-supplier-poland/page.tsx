import { Metadata } from "next";
import PeanutButterSupplierPoland from "./PeanutButterSupplierPoland";

export const metadata: Metadata = {
  title: "Peanut Butter Supplier Poland | Dostawca Masła Orzechowego",
  description:
    "Reliable peanut butter supplier in Poland. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Polish market. Exporting top-tier nut butter to Warsaw.",
  keywords: [
    "peanut butter supplier poland",
    "bulk peanut butter poland",
    "private label peanut butter poland",
    "dostawca masła orzechowego",
    "hurtownia masła orzechowego",
    "import masła orzechowego polska",
    "peanut butter supplier warsaw",
    "polish food importers",
    "european peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Supplier Poland | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Poland. Premium bulk supply and customized private label solutions for Polish distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-supplier-poland",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_PL",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-supplier-poland",
  },
};

export default function Page() {
  return <PeanutButterSupplierPoland />;
}
