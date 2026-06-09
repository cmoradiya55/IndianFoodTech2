import { Metadata } from "next";
import React from 'react'
import ContactUs from "./ContactUs";
import Schema from "@/components/Schema";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.indianfoodtech.com";

export const metadata: Metadata = {
  title: "Contact Us | Indian Foodtech - Get a Quote",
  description:
    "Get in touch with Indian Food Tech. We are here to assist with inquiries about our peanut butter products, bulk orders, shipping, and private label partnerships.",
  keywords: [
    "contact indian foodtech",
    "peanut butter quote",
    "bulk orders peanut butter",
    "private label inquiry",
    "peanut butter supplier contact",
  ],
  alternates: {
    canonical: "/contact-us",
    languages: {
      "en-US": "/contact-us",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Contact Us | Indian Foodtech - Get a Quote",
    description:
      "Get in touch with Indian Food Tech. We are here to assist with inquiries about our peanut butter products, bulk orders, shipping, and private label partnerships.",
    url: "/contact-us",
    siteName: "Indian Foodtech",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logoBlack.webp",
        width: 800,
        height: 800,
        alt: "Contact Indian Foodtech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Indian Foodtech - Get a Quote",
    description:
      "Get in touch with Indian Food Tech. We are here to assist with inquiries about our peanut butter products, bulk orders, shipping, and private label partnerships.",
    images: ["/logoBlack.webp"],
  },
};

export default function ContactUsPage() {
  return (
    <>
      <Schema
        type="BreadcrumbList"
        data={{
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
            { "@type": "ListItem", position: 2, name: "Contact Us", item: `${BASE_URL}/contact-us` },
          ],
        }}
      />
      <Schema
        type="ContactPage"
        data={{
          "@id": `${BASE_URL}/contact-us#webpage`,
          name: "Contact Indian Foodtech",
          description:
            "Reach Indian Foodtech for bulk peanut butter orders, private label manufacturing inquiries, samples, and export quotes. Our export team responds within 24 hours on business days.",
          url: `${BASE_URL}/contact-us`,
          inLanguage: "en",
          isPartOf: { "@id": `${BASE_URL}/#website` },
          about: { "@id": `${BASE_URL}/#organization` },
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: [".aeo-speakable-summary"],
          },
          mainEntity: {
            "@id": `${BASE_URL}/#organization`,
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-97148-99711",
              contactType: "sales",
              email: "office@indianfoodtech.in",
              areaServed: "Worldwide",
              availableLanguage: ["en", "hi", "gu"],
            },
          },
        }}
      />
      <ContactUs isPageHeader={true} />
    </>
  );
}