import React from "react";

interface SchemaProps {
  type:
    | "Organization"
    | "WebSite"
    | "WebPage"
    | "AboutPage"
    | "ContactPage"
    | "Service"
    | "LocalBusiness"
    | "Product"
    | "BlogPosting"
    | "FAQPage"
    | "BreadcrumbList"
    | "HowTo"
    | "Person";
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
