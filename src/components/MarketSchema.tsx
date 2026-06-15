import React from "react";
import Schema from "./Schema";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.indianfoodtech.com";

interface MarketSchemaProps {
  country: string;
  type: "Importer" | "Supplier" | "Exporter";
  description: string;
  url: string;
}

const MarketSchema = ({ country, type, description, url }: MarketSchemaProps) => {
  const pageName = `Peanut Butter ${type} in ${country} - Indian Foodtech`;

  return (
    <>
      <Schema
        type="WebPage"
        data={{
          "@id": `${url}#webpage`,
          name: pageName,
          description,
          url,
          inLanguage: "en",
          isPartOf: { "@id": `${BASE_URL}/#website` },
          about: { "@id": `${BASE_URL}/#organization` },
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: [".aeo-speakable-summary"],
          },
        }}
      />
      <Schema
        type="BreadcrumbList"
        data={{
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: BASE_URL,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: pageName,
              item: url,
            },
          ],
        }}
      />
      <Schema
        type="Product"
        data={{
          name: pageName,
          description,
          url,
          brand: {
            "@type": "Brand",
            name: "Indian Foodtech",
          },
          manufacturer: { "@id": `${BASE_URL}/#organization` },
          offers: {
            "@type": "AggregateOffer",
            url,
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            areaServed: {
              "@type": "Country",
              name: country,
            },
          },
        }}
      />
    </>
  );
};

export default MarketSchema;
