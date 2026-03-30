import React from "react";

interface SchemaProps {
  type: "Organization" | "WebSite" | "LocalBusiness" | "Product";
  data: any;
}

const Schema = ({ type, data }: SchemaProps) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default Schema;
