import { Metadata } from "next";
import React from 'react'
import PrivateLabels from "./PrivateLabels";

export const metadata: Metadata = {
  title: 'Private Labels | Indian FoodTech',
  description: 'This is the Private Labels Page of Indian FoodTech',
};

export default function PrivateLabelsPage() {
  return <PrivateLabels />;
}
