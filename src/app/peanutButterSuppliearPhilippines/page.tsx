import PeanutButterSuppliearPhilippines from "./PeanutButterSuppliearPhilippines";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Peanut Butter Supplier in Philippines | Bulk Exporter from India",

  description:
    "Looking for a peanut butter supplier in Philippines? Indian Foodtech is a trusted manufacturer & exporter from India offering bulk supply, private label, OEM services & competitive pricing.",

  keywords: [
    "peanut butter supplier philippines",
    "peanut butter exporter india to philippines",
    "bulk peanut butter philippines",
    "private label peanut butter philippines",
    "import peanut butter philippines",
  ],

  openGraph: {
    title: "Peanut Butter Supplier in Philippines | Indian Foodtech",
    description:
      "Trusted peanut butter manufacturer & exporter to Philippines. Bulk supply, private label & OEM services available.",
    url: "https://www.indianfoodtech.in/peanut-butter-supplier-philippines",
    siteName: "Indian Foodtech",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Peanut Butter Supplier in Philippines",
    description:
      "Bulk peanut butter exporter from India to Philippines. Private label & OEM available.",
  },

  alternates: {
    canonical:
      "https://www.indianfoodtech.in/peanut-butter-supplier-philippines",
  },
};

const PeanutButterSuppliearPhilippinesPage = () => {
  return <PeanutButterSuppliearPhilippines />;
};

export default PeanutButterSuppliearPhilippinesPage;
