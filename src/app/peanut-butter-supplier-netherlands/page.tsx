import { Metadata } from "next";
import PeanutButterSupplierNetherlands from "./PeanutButterSupplierNetherlands";

export const metadata: Metadata = {
  title: "Peanut Butter Supplier Netherlands | Pindakaas Leverancier",
  description:
    "Reliable peanut butter supplier in the Netherlands. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Dutch market. Exporting top-tier nut butter to Amsterdam.",
  keywords: [
    "peanut butter supplier netherlands",
    "bulk peanut butter netherlands",
    "private label peanut butter netherlands",
    "pindakaas leverancier",
    "pindakaas groothandel",
    "import van pindakaas nederland",
    "peanut butter supplier amsterdam",
    "dutch food importers",
    "european peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Supplier Netherlands | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to the Netherlands. Premium bulk supply and customized private label solutions for Dutch distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-supplier-netherlands",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_NL",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-supplier-netherlands",
  },
};

export default function Page() {
  return <PeanutButterSupplierNetherlands />;
}
