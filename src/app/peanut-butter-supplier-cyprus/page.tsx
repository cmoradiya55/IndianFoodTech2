import { Metadata } from "next";
import PeanutButterSupplierCyprus from "./PeanutButterSupplierCyprus";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Supplier Cyprus | Προμηθευτής Φυστικοβούτυρου",
  description:
    "Reliable peanut butter supplier in Cyprus. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Cypriot market. Exporting top-tier nut butter to Nicosia.",
  keywords: [
    "peanut butter supplier cyprus",
    "bulk peanut butter cyprus",
    "private label peanut butter cyprus",
    "προμηθευτής φυστικοβούτυρου",
    "φυστικοβούτυρο χονδρική",
    "εισαγωγή φυστικοβούτυρου κύπρος",
    "peanut butter supplier nicosia",
    "cypriot food importers",
    "mediterranean peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Supplier Cyprus | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Cyprus. Premium bulk supply and customized private label solutions for Mediterranean distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-supplier-cyprus",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_CY",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-supplier-cyprus",
  },
};

const PeanutButterSupplierCyprusPage = () => {
  return (
    <>
      <MarketSchema
        country="Cyprus"
        type="Supplier"
        description="Reliable peanut butter supplier in Cyprus. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Cypriot market."
        url="https://www.indianfoodtech.in/peanut-butter-supplier-cyprus"
      />
      <PeanutButterSupplierCyprus />
    </>
  );
};

export default PeanutButterSupplierCyprusPage;
