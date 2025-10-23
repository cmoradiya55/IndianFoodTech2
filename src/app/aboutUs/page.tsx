import { Metadata } from "next";
import React from 'react'
import AboutUs from "./AboutUs";

export const metadata: Metadata = {
  title: 'About Us | Indian FoodTech',
  description: 'This is the About Us Page of Indian FoodTech',
};

export default function AboutUsPage() {
  return <AboutUs />;
}
