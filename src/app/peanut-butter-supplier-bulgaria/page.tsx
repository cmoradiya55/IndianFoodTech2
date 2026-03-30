import { Metadata } from "next";
import PeanutButterSupplierBulgaria from "./PeanutButterSupplierBulgaria";

export const metadata: Metadata = {
  title: "Peanut Butter Supplier Bulgaria | Доставчик на Фъстъчено Масло",
  description:
    "Reliable peanut butter supplier in Bulgaria. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Bulgarian market. Exporting top-tier nut butter to Sofia.",
  keywords: [
    "peanut butter supplier bulgaria",
    "bulk peanut butter bulgaria",
    "private label peanut butter bulgaria",
    "доставчик на фъстъчено масло",
    "фъстъчено масло на едро",
    "внос на фъстъчено масло българия",
    "peanut butter supplier sofia",
    "bulgarian food importers",
    "balkan peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Supplier Bulgaria | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Bulgaria. Premium bulk supply and customized private label solutions for Balkan distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-supplier-bulgaria",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_BG",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-supplier-bulgaria",
  },
};

const PeanutButterSupplierBulgariaPage = () => {
  return <PeanutButterSupplierBulgaria />;
};

export default PeanutButterSupplierBulgariaPage;
