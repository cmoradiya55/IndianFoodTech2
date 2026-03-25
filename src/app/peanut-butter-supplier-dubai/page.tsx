import { Metadata } from "next";
import PeanutButterSupplierDubai from "./PeanutButterSupplierDubai";

export const metadata: Metadata = {
  title: "Peanut Butter Supplier in Dubai | Bulk Exporter from India",

  description:
    "Looking for a peanut butter supplier in Dubai? Indian Foodtech is a trusted manufacturer & exporter from India offering bulk supply, private label, OEM services & competitive pricing for the UAE market.",

  keywords: [
    "peanut butter supplier dubai",
    "peanut butter exporter india to dubai",
    "bulk peanut butter dubai",
    "private label peanut butter dubai",
    "import peanut butter uae",
    "peanut butter supplier uae",
  ],

  openGraph: {
    title: "Peanut Butter Supplier in Dubai | Indian Foodtech",
    description:
      "Trusted peanut butter manufacturer & exporter to Dubai & UAE. Bulk supply, private label & OEM services available.",
    url: "https://www.indianfoodtech.in/peanut-butter-supplier-dubai",
    siteName: "Indian Foodtech",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Peanut Butter Supplier in Dubai",
    description:
      "Bulk peanut butter exporter from India to Dubai & UAE. Private label & OEM available.",
  },

  alternates: {
    canonical:
      "https://www.indianfoodtech.in/peanut-butter-supplier-dubai",
  },
};

const PeanutButterSupplierDubaiPage = () => {
  return <PeanutButterSupplierDubai />;
};

export default PeanutButterSupplierDubaiPage;
