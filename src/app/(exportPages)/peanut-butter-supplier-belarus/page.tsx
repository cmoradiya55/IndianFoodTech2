import { Metadata } from "next";
import PeanutButterSupplierBelarus from "./PeanutButterSupplierBelarus";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Supplier Belarus | Bulk Export from India",
  description:
    "Reliable peanut butter supplier in Belarus. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Belarusian market.",
  keywords: [
    "peanut butter supplier belarus",
    "bulk peanut butter belarus",
    "private label peanut butter belarus",
    "????????? ??????????? ?????",
    "?????????? ????? ?????",
    "?????? ??????????? ????? ????????",
    "peanut butter supplier minsk",
    "belarusian food importers",
    "eastern european peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Supplier Belarus | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Belarus. Premium bulk supply and customized private label solutions for distributors.",
    url: "https://www.indianfoodtech.com/peanut-butter-supplier-belarus",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_BY",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.com/peanut-butter-supplier-belarus",
    languages: {
      "en-BY": "https://www.indianfoodtech.com/peanut-butter-supplier-belarus",
      "x-default": "https://www.indianfoodtech.com/",
    },
  },
};

const PeanutButterSupplierBelarusPage = () => {
  return (
    <>
      <MarketSchema
        country="Belarus"
        type="Supplier"
        description="Reliable peanut butter supplier in Belarus. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Belarusian market."
        url="https://www.indianfoodtech.com/peanut-butter-supplier-belarus"
      />
      <PeanutButterSupplierBelarus />
    </>
  );
};

export default PeanutButterSupplierBelarusPage;
