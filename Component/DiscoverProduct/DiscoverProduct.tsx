"use client";
import React from "react";
import { AllProductsList, Product } from "@/utils/ProductList";
import { motion, Variants } from "framer-motion";
import ProductCard from "@/components/ProductCard";

const getStableProducts = (): Product[] =>
  AllProductsList.flatMap((category) => category.products).slice(0, 3);

const products = getStableProducts();

const DiscoverProduct = () => {

  // Framer Motion Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  const lineVariants: Variants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  return (
    <motion.div
      className="max-w-7xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Header Section */}
      <motion.div
        className="mb-8 sm:mb-10 md:mb-12 flex gap-3 sm:gap-4"
        variants={itemVariants}
      >
        <motion.div
          className="bg-primary-500 h-auto w-1 sm:w-1.5 lg:w-1.5 rounded-2xl origin-top"
          variants={lineVariants}
        ></motion.div>
        <div className="mt-1 sm:mt-2">
          <h2 className="text-2xl font-bold text-gray-900 mb-1 sm:mb-1.5">
            Discover Our Product
          </h2>
          <p
            className="text-[15px] text-primary-500 font-medium"
            style={{ fontFamily: "Poppins-medium" }}
          >
            Explore how our product brings ideas to life and adds real value.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-5 md:gap-x-6 gap-y-28 pt-24">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            variants={itemVariants}
            isActive={index === 1}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default DiscoverProduct;

