import { Metadata } from "next";
import PeanutButterImportSpain from "./PeanutButterImportSpain";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Spain | Importador de Mantequilla de Cacahuete",
  description:
    "Reliable peanut butter importer in Spain. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Spanish market. Exporting top-tier nut butter to Madrid.",
  keywords: [
    "peanut butter importer spain",
    "bulk peanut butter spain",
    "private label peanut butter spain",
    "importador mantequilla de cacahuete",
    "mantequilla de cacahuete al por mayor",
    "importación mantequilla de cacahuete españa",
    "peanut butter supplier madrid",
    "spanish food importers",
    "european peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Importer Spain | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Spain. Premium bulk supply and customized private label solutions for European distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-import-spain",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_ES",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-import-spain",
  },
};

export default function Page() {
  return <PeanutButterImportSpain />;
}
