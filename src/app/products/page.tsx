import { Metadata } from "next";
import React, { Suspense } from 'react'
import Products from "./Products";

export const metadata: Metadata = {
  title: 'Products | Indian FoodTech',
  description: 'This is the Products Page of Indian FoodTech',
};

// Loading component for the suspense boundary
function ProductsLoading() {
  return (
    <div className='bg-[#e9e8ed] py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-8 lg:px-16 min-h-screen flex items-center justify-center'>
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
