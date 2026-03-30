import { Metadata } from "next";
import PeanutButterSupplierCroatia from "./PeanutButterSupplierCroatia";

export const metadata: Metadata = {
  title: "Peanut Butter Supplier Croatia | Dobavljač Kikiriki Maslaca",
  description:
    "Reliable peanut butter supplier in Croatia. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Croatian market. Exporting top-tier nut butter to Zagreb.",
  keywords: [
    "peanut butter supplier croatia",
    "bulk peanut butter croatia",
    "private label peanut butter croatia",
    "dobavljač kikiriki maslaca",
    "veleprodaja kikiriki maslaca",
    "uvoz kikiriki maslaca hrvatska",
    "peanut butter supplier zagreb",
    "croatian food importers",
    "adriatic peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Supplier Croatia | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Croatia. Premium bulk supply and customized private label solutions for Adriatic distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-supplier-croatia",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_HR",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-supplier-croatia",
  },
};

const PeanutButterSupplierCroatiaPage = () => {
  return <PeanutButterSupplierCroatia />;
};

export default PeanutButterSupplierCroatiaPage;
