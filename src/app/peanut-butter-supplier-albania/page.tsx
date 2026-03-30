import { Metadata } from "next";
import PeanutButterSupplierAlbania from "./PeanutButterSupplierAlbania";

export const metadata: Metadata = {
  title: "Peanut Butter Supplier Albania | Furnizues i Gjalpit të Kikirikut",
  description:
    "Reliable peanut butter supplier in Albania. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Albanian market. Exporting top-tier nut butter to Tirana.",
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
    url: "https://www.indianfoodtech.in/peanut-butter-supplier-albania",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_AL",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-supplier-albania",
  },
};

const PeanutButterSupplierAlbaniaPage = () => {
  return <PeanutButterSupplierAlbania />;
};

export default PeanutButterSupplierAlbaniaPage;
