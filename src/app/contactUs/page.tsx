import { Metadata } from "next";
import React from 'react'
import ContactUs from "./ContactUs";

export const metadata: Metadata = {
  title: 'Contact Us | Indian FoodTech',
  description: 'This is the Contact Us Page of Indian FoodTech',
};

export default function ContactUsPage() {
  return <ContactUs />;
}