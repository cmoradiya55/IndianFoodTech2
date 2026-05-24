import React from "react";

interface SchemaProps {
  type:
    | "Organization"
    | "WebSite"
    | "LocalBusiness"
    | "Product"
    | "BlogPosting"
    | "FAQPage"
    | "BreadcrumbList"
    | "HowTo";
  data: Record<string, unknown>;
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
