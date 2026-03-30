import { Metadata } from "next";
import PeanutButterSupplierAndorra from "./PeanutButterSupplierAndorra";

export const metadata: Metadata = {
  title: "Peanut Butter Supplier Andorra | Proveïdor de Mantega de Cacauet",
  description:
    "Reliable peanut butter supplier in Andorra. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Andorran market. Exporting top-tier nut butter to Andorra la Vella.",
  keywords: [
    "peanut butter supplier andorra",
    "bulk peanut butter andorra",
    "private label peanut butter andorra",
    "proveïdor mantega de cacauet",
    "mantega de cacauet a l'engròs",
    "importació de mantega de cacauet andorra",
    "peanut butter supplier andorra la vella",
    "andorran food importers",
    "european peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Supplier Andorra | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Andorra. Premium bulk supply and customized private label solutions for European distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-supplier-andorra",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_AD",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-supplier-andorra",
  },
};

const PeanutButterSupplierAndorraPage = () => {
  return <PeanutButterSupplierAndorra />;
};

export default PeanutButterSupplierAndorraPage;
