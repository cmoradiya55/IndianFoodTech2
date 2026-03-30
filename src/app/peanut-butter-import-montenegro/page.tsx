import { Metadata } from "next";
import PeanutButterImportMontenegro from "./PeanutButterImportMontenegro";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Montenegro | Uvoznik kikiriki putera u Crnoj Gori",
  description:
    "Reliable peanut butter importer in Montenegro. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Montenegrin market. Exporting top-tier nut butter to Podgorica.",
  keywords: [
    "peanut butter importer montenegro",
    "bulk peanut butter montenegro",
    "private label peanut butter montenegro",
    "uvoznik kikiriki putera",
    "kikiriki puter veleprodaja",
    "uvoz kikiriki putera crna gora",
    "peanut butter supplier podgorica",
    "montenegrin food importers",
    "balkan peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Importer Montenegro | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Montenegro. Premium bulk supply and customized private label solutions for Balkan distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-import-montenegro",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_ME",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-import-montenegro",
  },
};

export default function Page() {
  return <PeanutButterImportMontenegro />;
}
