import { Metadata } from "next";
import React from 'react'
import ContactUs from "./ContactUs";

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
    canonical: "https://www.indianfoodtech.in/contact-us",
    languages: {
      "en-US": "https://www.indianfoodtech.in/contact-us",
      "x-default": "https://www.indianfoodtech.in/",
    },
  },
  openGraph: {
    title: "Contact Us | Indian Foodtech - Get a Quote",
    description:
      "Get in touch with Indian Food Tech. We are here to assist with inquiries about our peanut butter products, bulk orders, shipping, and private label partnerships.",
    url: "https://www.indianfoodtech.in/contact-us",
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
  return <ContactUs />;
}