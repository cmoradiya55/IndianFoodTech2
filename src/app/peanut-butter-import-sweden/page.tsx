import { Metadata } from "next";
import PeanutButterImportSweden from "./PeanutButterImportSweden";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Sweden | Jordnötssmör Importör i Sverige",
  description:
    "Reliable peanut butter importer in Sweden. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Swedish market. Exporting top-tier nut butter to Stockholm.",
  keywords: [
    "peanut butter importer sweden",
    "bulk peanut butter sweden",
    "private label peanut butter sweden",
    "jordnötssmör importör",
    "jordnötssmör grossist",
    "import av jordnötssmör sverige",
    "peanut butter supplier stockholm",
    "swedish food importers",
    "nordic peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Importer Sweden | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Sweden. Premium bulk supply and customized private label solutions for Nordic distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-import-sweden",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_SE",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-import-sweden",
  },
};

export default function Page() {
  return <PeanutButterImportSweden />;
}
