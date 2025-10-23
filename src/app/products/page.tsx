import { Metadata } from "next";
import React from 'react'
import Products from "./Products";

export const metadata: Metadata = {
  title: 'Products | Indian FoodTech',
  description: 'This is the Products Page of Indian FoodTech',
};

export default function ProductsPage() {
  return <Products />;
}
