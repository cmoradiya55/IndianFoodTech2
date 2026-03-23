import { Metadata } from "next";
import React, { Suspense } from 'react'
import Products from "./Products";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Explore Indian Food Tech's range of creamy, crunchy, natural, and flavored peanut butters and nut spreads available in jars, pouches, and bulk packs.",
};

// Loading component for the suspense boundary
function ProductsLoading() {
  return (
    <div className='bg-[#e9e8ed] py-8 sm:py-6 md:py-8 lg:py-5 px-3 sm:px-4 md:px-8 lg:px-8 min-h-screen flex items-center justify-center'>
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading products...</p>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<ProductsLoading />}>
      <Products />
    </Suspense>
  );
}
