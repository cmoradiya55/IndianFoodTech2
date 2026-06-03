"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { AllProductsList } from "@/utils/ProductList";
import { motion, Variants } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import ProductCard from "@/components/ProductCard";

const Products = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    if (category) {
      const categoryMap: { [key: string]: string } = {
        "peanut-butter": "Peanut Butter",
        "nut-butters": "Nut Butters",
        "roasted-peanuts": "Roasted Peanuts",
        spread: "Spread",
      };

      const categoryName = categoryMap[category];
      if (categoryName) {
        setTimeout(() => {
          requestAnimationFrame(() => {
            const element = document.getElementById(`category-${category}`);
            if (element) {
              const headerHeight =
                document.querySelector("header")?.offsetHeight ?? 80;
              const top =
                element.getBoundingClientRect().top +
                window.scrollY -
                headerHeight;
              window.scrollTo({ top, behavior: "smooth" });
            }
          });
        }, 400);
      }
    }
  }, [category]);

  // Framer Motion variants for grid stagger reveals
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 16 },
    },
  };

  return (
    <div className="bg-[#e9e8ed] py-6 sm:py-8 md:py-12 px-3 sm:px-4 md:px-8 lg:px-8 mt-12 sm:mt-6">
      <div
        className="max-w-7xl mx-auto container-custom"
        style={{ fontFamily: "NotoSerif-semibold" }}
      >

        <PageHeader
          title="Discover Our Product"
          description="Explore how our product brings ideas to life and adds real value."
          className="mb-6 sm:mb-10 md:mb-6 lg:mb-6"
        />

        {/* Dynamic Product Categories */}
        {AllProductsList.map((categoryItem, index) => {
          const categorySlug = categoryItem.categoryName
            .toLowerCase()
            .replace(/\s+/g, "-");

          return (
            <div key={categoryItem.id} id={`category-${categorySlug}`}>
              {/* Category Title with viewport entrance slide-down */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className="flex items-center justify-center mb-4 sm:mb-6 md:mb-8 lg:mb-10"
              >
                <div
                  className="bg-[#1D2C00] text-white mt-4 sm:mt-6 md:mt-8 lg:mt-10 px-8 sm:px-12 md:px-12 lg:px-30 py-2.5 sm:py-4 md:py-4 lg:py-3 rounded-full text-sm sm:text-xl md:text-xl lg:text-xl font-normal text-center shadow-md"
                  style={{ fontFamily: "Poppins-regular" }}
                >
                  {categoryItem.categoryName}
                </div>
              </motion.div>

              {/* Products Grid with staggered card entrances */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 sm:gap-x-5 md:gap-x-6 gap-y-28 pt-24 ${index < AllProductsList.length - 1 ? "mb-6 sm:mb-4 md:mb-4" : ""
                  }`}
              >
                {categoryItem.products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    variants={cardVariants}
                  />
                ))}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
