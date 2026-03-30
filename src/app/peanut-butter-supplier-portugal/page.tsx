import { Metadata } from "next";
import PeanutButterSupplierPortugal from "./PeanutButterSupplierPortugal";

export const metadata: Metadata = {
  title: "Peanut Butter Supplier Portugal | Fornecedor de Manteiga de Amendoim",
  description:
    "Reliable peanut butter supplier in Portugal. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Portuguese market. Exporting top-tier nut butter to Lisbon.",
  keywords: [
    "peanut butter supplier portugal",
    "bulk peanut butter portugal",
    "private label peanut butter portugal",
    "fornecedor de manteiga de amendoim",
    "manteiga de amendoim por atacado",
    "importação de manteiga de amendoim portugal",
    "peanut butter supplier lisbon",
    "portuguese food importers",
    "european peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Supplier Portugal | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Portugal. Premium bulk supply and customized private label solutions for Portuguese distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-supplier-portugal",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_PT",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-supplier-portugal",
  },
};

export default function Page() {
  return <PeanutButterSupplierPortugal />;
}
