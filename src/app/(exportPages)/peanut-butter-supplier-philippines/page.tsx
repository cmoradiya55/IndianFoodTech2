import { Metadata } from "next";
import PeanutButterSuppliearPhilippines from "./PeanutButterSuppliearPhilippines";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Supplier Philippines | Supplier sa Pilipinas",
  description:
    "Reliable peanut butter supplier in the Philippines. Indian Foodtech offers premium bulk supply, private label, and solutions for the Philippine market.",
  keywords: [
    "peanut butter supplier philippines",
    "bulk peanut butter philippines",
    "private label peanut butter philippines",
    "supplier ng peanut butter",
    "peanut butter wholesale philippines",
    "import peanut butter philippines",
    "peanut butter supplier manila",
    "filipino food importers",
    "asian peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Supplier Philippines | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to the Philippines. Premium bulk supply and customized private label solutions for Philippine distributors.",
    url: "https://www.indianfoodtech.com/peanut-butter-supplier-philippines",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_PH",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.com/peanut-butter-supplier-philippines",
    languages: {
      "en-PH": "https://www.indianfoodtech.com/peanut-butter-supplier-philippines",
      "x-default": "https://www.indianfoodtech.com/",
    },
  },
};

const PeanutButterSuppliearPhilippinesPage = () => {
  return (
    <>
      <MarketSchema
        country="Philippines"
        type="Supplier"
        description="Reliable peanut butter supplier in Philippines. Indian Foodtech offers premium bulk supply and private label solutions for the Filipino market."
        url="https://www.indianfoodtech.com/peanut-butter-supplier-philippines"
      />
      <PeanutButterSuppliearPhilippines />
    </>
  );
};

export default PeanutButterSuppliearPhilippinesPage;
