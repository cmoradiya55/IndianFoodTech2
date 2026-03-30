import { Metadata } from "next";
import PeanutButterSupplierBelarus from "./PeanutButterSupplierBelarus";

export const metadata: Metadata = {
  title: "Peanut Butter Supplier Belarus | Поставщик Арахисового Масла",
  description:
    "Reliable peanut butter supplier in Belarus. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Belarusian market. Exporting top-tier nut butter to Minsk.",
  keywords: [
    "peanut butter supplier belarus",
    "bulk peanut butter belarus",
    "private label peanut butter belarus",
    "поставщик арахисового масла",
    "арахисовое масло оптом",
    "импорт арахисового масла беларусь",
    "peanut butter supplier minsk",
    "belarusian food importers",
    "eastern european peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Supplier Belarus | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Belarus. Premium bulk supply and customized private label solutions for distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-supplier-belarus",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_BY",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-supplier-belarus",
  },
};

const PeanutButterSupplierBelarusPage = () => {
  return <PeanutButterSupplierBelarus />;
};

export default PeanutButterSupplierBelarusPage;
