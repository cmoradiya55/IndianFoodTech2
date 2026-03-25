import { Metadata } from "next";
import PeanutButterSupplierUsa from "./PeanutButterSupplierUsa";

export const metadata: Metadata = {
  title: "Peanut Butter Supplier in USA | Bulk Exporter from India",

  description:
    "Looking for a peanut butter supplier in the USA? Indian Foodtech is a trusted manufacturer & exporter from India offering bulk supply, private label, OEM services & competitive pricing for the US market.",

  keywords: [
    "peanut butter supplier usa",
    "peanut butter exporter india to usa",
    "bulk peanut butter usa",
    "private label peanut butter usa",
    "import peanut butter united states",
    "peanut butter manufacturer india",
  ],

  openGraph: {
    title: "Peanut Butter Supplier in USA | Indian Foodtech",
    description:
      "Trusted peanut butter manufacturer & exporter to the USA. Bulk supply, private label & OEM services available.",
    url: "https://www.indianfoodtech.in/peanut-butter-supplier-usa",
    siteName: "Indian Foodtech",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Peanut Butter Supplier in USA",
    description:
      "Bulk peanut butter exporter from India to USA. Private label & OEM available.",
  },

  alternates: {
    canonical:
      "https://www.indianfoodtech.in/peanut-butter-supplier-usa",
  },
};

const PeanutButterSupplierUsaPage = () => {
  return <PeanutButterSupplierUsa />;
};

export default PeanutButterSupplierUsaPage;
