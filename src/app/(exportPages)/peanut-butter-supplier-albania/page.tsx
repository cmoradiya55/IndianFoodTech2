import { Metadata } from "next";
import PeanutButterSupplierAlbania from "./PeanutButterSupplierAlbania";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Supplier Albania | Bulk Export from India",
  description:
    "Reliable peanut butter supplier in Albania. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Albanian market.",
  keywords: [
    "peanut butter supplier albania",
    "bulk peanut butter albania",
    "private label peanut butter albania",
    "furnizues gjalpi kikiriku",
    "gjalpë kikiriku me shumicë",
    "importimi i gjalpit të kikirikut shqipëri",
    "peanut butter supplier tirana",
    "albanian food importers",
    "balkan peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Supplier Albania | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Albania. Premium bulk supply and customized private label solutions for Balkan distributors.",
    url: "https://www.indianfoodtech.com/peanut-butter-supplier-albania",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_AL",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.com/peanut-butter-supplier-albania",
    languages: {
      "en-AL": "https://www.indianfoodtech.com/peanut-butter-supplier-albania",
      "x-default": "https://www.indianfoodtech.com/",
    },
  },
};

const PeanutButterSupplierAlbaniaPage = () => {
  return (
    <>
      <MarketSchema
        country="Albania"
        type="Supplier"
        description="Reliable peanut butter supplier in Albania. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Albanian market."
        url="https://www.indianfoodtech.com/peanut-butter-supplier-albania"
      />
      <PeanutButterSupplierAlbania />
    </>
  );
};

export default PeanutButterSupplierAlbaniaPage;
