import { Metadata } from "next";
import PeanutButterSupplierRussia from "./PeanutButterSupplierRussia";

export const metadata: Metadata = {
  title: "Peanut Butter Supplier Russia | Поставщик Арахисового Масла",
  description:
    "Reliable peanut butter supplier in Russia. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Russian market. Exporting top-tier nut butter to Moscow.",
  keywords: [
    "peanut butter supplier russia",
    "bulk peanut butter russia",
    "private label peanut butter russia",
    "поставщик арахисового масла",
    "арахисовое масло оптом",
    "импорт арахисового масла россия",
    "peanut butter supplier moscow",
    "russian food importers",
    "eurasian peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Supplier Russia | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Russia. Premium bulk supply and customized private label solutions for Russian distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-supplier-russia",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_RU",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-supplier-russia",
  },
};

export default function Page() {
  return <PeanutButterSupplierRussia />;
}
