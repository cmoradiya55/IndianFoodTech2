import React from "react";
import Schema from "./Schema";

interface MarketSchemaProps {
  country: string;
  type: "Importer" | "Supplier";
  description: string;
  url: string;
}

const MarketSchema = ({ country, type, description, url }: MarketSchemaProps) => {
  return (
    <Schema
      type="Product"
      data={{
        name: `Peanut Butter ${type} in ${country} - Indian Foodtech`,
        description: description,
        brand: {
          "@type": "Brand",
          name: "Indian Foodtech",
        },
        offers: {
          "@type": "AggregateOffer",
          url: url,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          areaServed: {
            "@type": "Country",
            name: country,
          },
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "150",
        },
      }}
    />
  );
};

export default MarketSchema;
