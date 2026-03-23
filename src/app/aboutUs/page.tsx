import { Metadata } from "next";
import React from 'react'
import AboutUs from "./AboutUs";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Indian Food Tech's journey as a top manufacturer of high-quality peanut butter and spreads, dedicated to food safety and reliable large-scale supply.",
};

export default function AboutUsPage() {
  return <AboutUs />;
}
