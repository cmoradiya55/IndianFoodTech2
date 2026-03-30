import { Metadata } from "next";
import PeanutButterSupplierNorway from "./PeanutButterSupplierNorway";

export const metadata: Metadata = {
  title: "Peanut Butter Supplier Norway | Peanøttsmør-Leverandør",
  description:
    "Reliable peanut butter supplier in Norway. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Norwegian market. Exporting top-tier nut butter to Oslo.",
  keywords: [
    "peanut butter supplier norway",
    "bulk peanut butter norway",
    "private label peanut butter norway",
    "peanøttsmør leverandør",
    "peanøttsmør engros",
    "import av peanøttsmør norge",
    "peanut butter supplier oslo",
    "norwegian food importers",
    "scandinavian peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Supplier Norway | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Norway. Premium bulk supply and customized private label solutions for Scandinavian distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-supplier-norway",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_NO",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-supplier-norway",
  },
};

export default function Page() {
  return <PeanutButterSupplierNorway />;
}
