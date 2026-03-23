"use client";
import React from "react";
import Image from "next/image";
import { AllProductsList } from "@/utils/ProductList";
import { useRouter } from "next/navigation";

const DiscoverProduct = () => {
  const router = useRouter();

  // Get 3 random products from all categories
  const getRandomProducts = () => {
    const allProducts = AllProductsList.flatMap(
      (category) => category.products,
    );
    const shuffled = allProducts.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  const products = getRandomProducts();

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="mb-8 sm:mb-10 md:mb-6 flex gap-3 sm:gap-4">
        <div className="bg-primary-500 h-30 sm:h-28 md:h-35 lg:h-20 w-1 sm:w-1.5 lg:w-1.5 rounded-2xl"></div>
        <div className="mt-1 sm:mt-2">
          <h1 className="text-base sm:text-base md:text-lg lg:text-base font-bold text-gray-900 mb-1 sm:mb-2">
            Discover Our Product
          </h1>
          <p
            className="text-sm sm:text-sm md:text-sm lg:text-base text-primary-500 font-medium"
            style={{ fontFamily: "Inter_18pt-medium" }}
          >
            Explore how our product brings ideas to life and adds real value.
          </p>
        </div>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border-[1px] border-[#D2D1D6] flex flex-col h-full"
          >
            {/* Product Image */}
            <div className="relative overflow-hidden w-[150px] sm:w-[170px] md:w-[180px] h-[150px] sm:h-[170px] md:h-[180px] rounded-xl sm:rounded-2xl mx-auto mt-4 sm:mt-5 md:mt-6">
              <Image
                src={product.cardImage}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Product Content */}
            <div className="p-3 sm:p-4 md:p-4 flex flex-col flex-grow">
              {/* Product Title with fixed height */}
              <div className="min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[3.5rem] flex items-center justify-center mb-2 sm:mb-3">
                <h3 className="text-sm sm:text-base font-bold text-gray-900 text-center leading-tight">
                  {product.name}
                </h3>
              </div>

              {/* Product Description with flex-grow to fill space */}
              <p
                className="text-[#5D6079] text-[10px] sm:text-xs leading-relaxed mb-4 sm:mb-5 md:mb-6 text-center flex-grow"
                style={{ fontFamily: "Inter_18pt-medium" }}
              >
                {product.description}
              </p>

              {/* Explore Button - pushed to bottom */}
              <button
                onClick={() => router.push(`/products/${product.id}`)}
                className="w-full bg-primary-500 hover:bg-primary-600 text-white font-normal py-2 sm:py-2.5 px-3 sm:px-4 rounded-full transition-colors duration-300 mt-auto text-xs sm:text-sm"
                style={{
                  boxShadow: "0 4px 12px rgba(127, 180, 50, 0.3)",
                  fontFamily: "Inter_18pt-medium",
                }}
              >
                Explore Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverProduct;
