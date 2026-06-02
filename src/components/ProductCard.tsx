"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Product } from "@/utils/ProductList";

interface ProductCardProps {
  product: Product;
  variants?: import("framer-motion").Variants;
  isActive?: boolean;
  price?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  variants,
}) => {
  const router = useRouter();




  return (
    /* overflow-visible lets the product image pop above the card top edge */
    <motion.div
      variants={variants}
      whileHover={{ y: -6 }}
      onClick={() => router.push(`/products/${product.slug}`)}
      className={`relative flex flex-col items-center rounded-[22px] cursor-pointer transition-all duration-300 overflow-visible select-none bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] min-h-[300px]`}
    >
      {/* ── Product image — -mt-16 pulls it 64 px above the card top ── */}
      <div className="relative w-[120px] h-[190px] -mt-24 z-10 flex-shrink-0">
        <Image
          src={product.cardImage || product.detailImage}
          alt={product.name}
          fill
          className="object-contain transition-all duration-300"
        />
      </div>

      {/* ── Card content ── */}
      <div className="flex flex-col items-center w-full px-5 pt-3 pb-5 gap-1">
        {/* Name */}
        <h3
          className={`text-base font-bold text-center leading-snug transition-colors duration-300 text-[#1D2C00]`}
          style={{ fontFamily: "NotoSerif-semibold" }}
        >
          {product.name}
        </h3>

        {/* Description */}
        <p
          className={`text-[11px] text-center leading-relaxed line-clamp-2 transition-colors duration-300 text-[#1D2C00] py-6`}
          style={{ fontFamily: "Poppins-medium" }}
        >
          {product.description}
        </p>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => router.push(`/products/${product.slug}`)}
          className="w-full bg-primary-500 hover:bg-primary-600 text-white font-normal py-1.5 sm:py-2 px-3 sm:px-6 rounded-full transition-colors duration-300 mt-auto text-[10px] min-[400px]:text-[11px] sm:text-base self-start sm:self-auto shadow-md sm:shadow-none"
          style={{
            boxShadow: "0 4px 12px rgba(127, 180, 50, 0.3)",
            fontFamily: "Poppins-medium",
          }}
        >
          Explore Details
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
