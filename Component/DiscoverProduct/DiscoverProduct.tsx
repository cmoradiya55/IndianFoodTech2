"use client";
import React from "react";
import { AllProductsList, Product } from "@/utils/ProductList";
import { motion, Variants } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import PageHeader from "@/components/PageHeader";

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
      <PageHeader
        title="Discover Our Product"
        description="Explore how our product brings ideas to life and adds real value."
        isPageHeader={false}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-5 md:gap-x-6 gap-y-28 pt-24 mt-8 sm:mt-10 md:mt-12" >
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

