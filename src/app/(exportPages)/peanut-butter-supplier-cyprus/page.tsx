import { Metadata } from "next";
import PeanutButterSupplierCyprus from "./PeanutButterSupplierCyprus";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Supplier Cyprus | ???µ??e?t?? F?st???ß??t????",
  description:
    "Reliable peanut butter supplier in Cyprus. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Cypriot market.",
  keywords: [
    "peanut butter supplier cyprus",
    "bulk peanut butter cyprus",
    "private label peanut butter cyprus",
    "p??µ??e?t?? f?st???ß??t????",
    "f?st???ß??t??? ???d????",
    "e?sa???? f?st???ß??t???? ??p???",
    "peanut butter supplier nicosia",
    "cypriot food importers",
    "mediterranean peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Supplier Cyprus | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Cyprus. Premium bulk supply and customized private label solutions for Mediterranean distributors.",
    url: "https://www.indianfoodtech.com/peanut-butter-supplier-cyprus",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_CY",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.com/peanut-butter-supplier-cyprus",
    languages: {
      "en-CY": "https://www.indianfoodtech.com/peanut-butter-supplier-cyprus",
      "x-default": "https://www.indianfoodtech.com/",
    },
  },
};

const PeanutButterSupplierCyprusPage = () => {
  return (
    <>
      <MarketSchema
        country="Cyprus"
        type="Supplier"
        description="Reliable peanut butter supplier in Cyprus. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Cypriot market."
        url="https://www.indianfoodtech.com/peanut-butter-supplier-cyprus"
      />
      <PeanutButterSupplierCyprus />
    </>
  );
};

export default PeanutButterSupplierCyprusPage;
