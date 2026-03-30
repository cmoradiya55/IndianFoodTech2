import { Metadata } from "next";
import PeanutButterImportIceland from "./PeanutButterImportIceland";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Iceland | Innflutningsaðili hnetusmjörs á Íslandi",
  description:
    "Reliable peanut butter importer in Iceland. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Icelandic market. Exporting top-tier nut butter to Reykjavik.",
  keywords: [
    "peanut butter importer iceland",
    "bulk peanut butter iceland",
    "private label peanut butter iceland",
    "hnetusmjör innflytjandi",
    "hnetusmjör heildsala",
    "innflutningur hnetusmjörs ísland",
    "peanut butter supplier reykjavik",
    "icelandic food importers",
    "nordic peanut butter supply",
  ],
  openGraph: {
    title: "Peanut Butter Importer Iceland | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Iceland. Premium bulk supply and customized private label solutions for Nordic distributors.",
    url: "https://www.indianfoodtech.in/peanut-butter-import-iceland",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_IS",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.in/peanut-butter-import-iceland",
  },
};

export default function Page() {
  return <PeanutButterImportIceland />;
}
