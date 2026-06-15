import { Metadata } from "next";
import PeanutButterImportGreece from "./PeanutButterImportGreece";
import MarketSchema from "@/components/MarketSchema";

export const metadata: Metadata = {
  title: "Peanut Butter Importer Greece | Bulk Export from India",
  description:
    "Reliable peanut butter importer in Greece. Indian Foodtech offers premium bulk supply, private label, and industrial solutions for the Greek market.",
  keywords: [
    "peanut butter importer greece",
    "bulk peanut butter greece",
    "private label peanut butter greece",
    "peanut butter supplier athens",
    "greek food importers",
    "mediterranean peanut butter supply",
    "peanut butter import Greece",
    "Greece peanut butter supplier",
    "peanut butter manufacturer Greece",
    "private label peanut butter Greece",
    "bulk peanut butter Greece",
    "wholesale peanut butter Greece",
    "import peanut butter Greece",
    "peanut butter exporter Greece",
    "natural peanut butter Greece",
    "organic peanut butter Greece",
    "creamy peanut butter Greece",
    "crunchy peanut butter Greece",
    "high protein peanut butter Greece",
    "premium peanut butter Greece",
    "peanut butter distributor Greece",
    "AGRION peanut butter",
    "food importer Greece",
    "food distributor Greece",
    "private label food manufacturer Greece",
    "φυστικοβούτυρο Ελλάδα",
    "προμηθευτής φυστικοβούτυρου Ελλάδα",
    "κατασκευαστής φυστικοβούτυρου Ελλάδα",
    "χονδρική φυστικοβούτυρο",
    "εισαγωγή φυστικοβούτυρου",
    "εξαγωγή φυστικοβούτυρου",
    "φυσικό φυστικοβούτυρο",
    "βιολογικό φυστικοβούτυρο",
    "κρεμώδες φυστικοβούτυρο",
    "τραγανό φυστικοβούτυρο",
    "φυστικοβούτυρο υψηλής πρωτεΐνης",
    "ιδιωτική ετικέτα φυστικοβούτυρο",
    "παραγωγή ιδιωτικής ετικέτας",
    "διανομέας τροφίμων Ελλάδα",
    "εισαγωγέας τροφίμων Ελλάδα",
    "προμηθευτής τροφίμων Ελλάδα",
    "buy peanut butter in bulk Greece",
    "wholesale peanut butter supplier Greece",
    "private label peanut butter manufacturer Greece",
    "natural peanut butter distributor Greece",
    "organic peanut butter supplier Greece",
    "high protein peanut butter Greece",
    "peanut butter for supermarkets Greece",
    "food importer Greece",
    "bulk peanut butter exporter to Greece",
    "premium peanut butter supplier Greece",
    "φυστικοβούτυρο χονδρική Ελλάδα",
    "προμηθευτής φυστικοβούτυρου για σούπερ μάρκετ",
    "κατασκευαστής φυστικοβούτυρου ιδιωτικής ετικέτας",
    "εισαγωγέας φυστικοβούτυρου Ελλάδα",
    "διανομέας φυστικοβούτυρου Ελλάδα",
    "βιολογικό φυστικοβούτυρο Ελλάδα",
    "peanut butter supplier Athens",
    "wholesale peanut butter Greece",
    "private label peanut butter Greece",
    "φυστικοβούτυρο Αθήνα",
    "προμηθευτής φυστικοβούτυρου Ελλάδα",
    "χονδρική φυστικοβούτυρο Ελλάδα",
    "εισαγωγέας φυστικοβούτυρου Αθήνα",
    "OEM peanut butter Greece",
    "ODM peanut butter supplier Greece",
    "private label nut butter manufacturer Greece",
    "bulk peanut butter for retailers",
    "healthy food distributor Greece",
    "OEM φυστικοβούτυρο",
    "ODM φυστικοβούτυρο",
    "παραγωγή φυστικοβούτυρου ιδιωτικής ετικέτας",
    "προμηθευτής υγιεινών τροφίμων Ελλάδα",
    "protein peanut butter Greece",
    "sugar free peanut butter Greece",
    "vegan peanut butter Greece",
    "organic peanut butter Greece",
    "φυστικοβούτυρο πρωτεΐνης",
    "φυστικοβούτυρο χωρίς ζάχαρη",
    "vegan φυστικοβούτυρο",
    "βιολογικό φυστικοβούτυρο",
  ],
  openGraph: {
    title: "Peanut Butter Importer Greece | Indian Foodtech",
    description:
      "High-quality peanut butter exported from India to Greece. Premium bulk supply and customized private label solutions for Mediterranean distributors.",
    url: "https://www.indianfoodtech.com/peanut-butter-import-greece",
    siteName: "Indian Foodtech",
    type: "website",
    locale: "en_GR",
  },
  alternates: {
    canonical: "https://www.indianfoodtech.com/peanut-butter-import-greece",
    languages: {
      "en-GR": "https://www.indianfoodtech.com/peanut-butter-import-greece",
      "x-default": "https://www.indianfoodtech.com/",
    },
  },
};

export default function Page() {
  return (
    <>
      <MarketSchema
        country="Greece"
        type="Importer"
        description="Reliable peanut butter importer in Greece. Indian Foodtech provides high-quality bulk supply and private label services for the Greek market."
        url="https://www.indianfoodtech.com/peanut-butter-import-greece"
      />
      <PeanutButterImportGreece />
    </>
  );
}
