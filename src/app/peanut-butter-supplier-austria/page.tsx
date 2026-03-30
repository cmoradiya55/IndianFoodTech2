import { Metadata } from "next";
import PeanutButterSupplierAustria from "./PeanutButterSupplierAustria";

export const metadata: Metadata = {
  title: "Peanut Butter Supplier Austria | Erdnussbutter-Lieferant",
  description:
    "Reliable peanut butter supplier in Austria. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Austrian market. Exporting top-tier nut butter to Vienna.",
  keywords: [
    "peanut butter supplier austria",
    "bulk peanut butter austria",
    "private label peanut butter austria",
    "erdnussbutter lieferant",
    "erdnussbutter großhandel",
    "erdnussbutter import österreich",
    "peanut butter supplier vienna",
    "austrian food importers",
    "european peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Supplier Austria | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Austria. Premium bulk supply and customized private label solutions for European distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-supplier-austria",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_AT",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-supplier-austria",
  },
};

const PeanutButterSupplierAustriaPage = () => {
  return <PeanutButterSupplierAustria />;
};

export default PeanutButterSupplierAustriaPage;
