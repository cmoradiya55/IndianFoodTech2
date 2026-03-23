import { Metadata } from "next";
import React from 'react'
import PrivateLabels from "./PrivateLabels";

export const metadata: Metadata = {
  title: "Private Labels",
  description:
    "Partner with Indian Food Tech for premium B2B private label peanut butter manufacturing and flexible packaging solutions tailored for your brand.",
};

export default function PrivateLabelsPage() {
  return <PrivateLabels />;
}
