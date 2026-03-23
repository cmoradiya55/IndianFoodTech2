import { Metadata } from "next";
import React from 'react'
import ContactUs from "./ContactUs";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Indian Food Tech. We are here to assist with inquiries about our peanut butter products, bulk orders, shipping, and private label partnerships.",
};

export default function ContactUsPage() {
  return <ContactUs />;
}