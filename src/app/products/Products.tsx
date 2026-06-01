"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AllProductsList } from "@/utils/ProductList";
import { motion, Variants } from "framer-motion";
import PageHeader from "@/components/PageHeader";

const Products = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const handleExploreDetails = (categoryId: string) => {
    router.push(`/products/${categoryId}`);
  };

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
    <div className="bg-[#e9e8ed] py-6 sm:py-8 md:py-12 px-3 sm:px-4 md:px-8 lg:px-8">
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
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-6 ${index < AllProductsList.length - 1 ? "mb-6 sm:mb-4 md:mb-4" : ""
                  }`}
              >
                {/* Card */}
                {categoryItem.products.map((product) => (
                  <motion.div
                    key={product.id}
                    variants={cardVariants}
                    whileHover={{ scale: 1.02, translateY: -3 }}
                    className="bg-white rounded-2xl sm:rounded-3xl shadow-md sm:shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-[#D2D1D6] flex flex-row group sm:flex-col items-center sm:items-stretch h-auto sm:h-full p-2 sm:p-0"
                  >
                    {/* Product Image */}
                    <div className="relative shrink-0 overflow-hidden w-28 h-28 min-[400px]:w-32 min-[400px]:h-32 sm:w-[200px] md:w-[216px] sm:h-[180px] md:h-[180px] rounded-xl sm:rounded-2xl ml-2 sm:mx-auto mt-0 sm:mt-6 md:mt-8 border border-gray-100 sm:border-none">
                      <Image
                        src={product.cardImage || product.detailImage}
                        alt={product.name}
                        fill
                        className="object-contain"
                      />
                    </div>

                    {/* Product Content */}
                    <div className="px-3 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 flex flex-col grow h-full justify-center sm:justify-start">
                      {/* Header with fixed min-height for 2 lines */}
                      <div className="min-h-0 sm:min-h-14 md:min-h-18 flex items-center justify-start sm:justify-center mb-1 sm:mb-0">
                        <h3 className="text-sm min-[400px]:text-base sm:text-xl font-bold text-gray-900 text-left sm:text-center leading-tight line-clamp-2 sm:line-clamp-none">
                          {product.name}
                        </h3>
                      </div>

                      <p
                        className="text-[#5D6079] text-[10px] min-[400px]:text-[11px] sm:text-sm leading-relaxed mb-2.5 sm:mb-5 md:mb-6 text-left sm:text-center grow line-clamp-2 sm:line-clamp-none"
                        style={{ fontFamily: "Poppins-medium" }}
                      >
                        {product.description}
                      </p>

                      {/* Explore Details Button */}
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => handleExploreDetails(product.slug)}
                        className="w-[120px] min-[400px]:w-[130px] sm:w-full bg-primary-500 hover:bg-primary-600 text-white font-normal py-1.5 sm:py-2 px-3 sm:px-6 rounded-full transition-colors duration-300 mt-auto text-[10px] min-[400px]:text-[11px] sm:text-base self-start sm:self-auto shadow-md sm:shadow-none"
                        style={{
                          boxShadow: "0 4px 12px rgba(127, 180, 50, 0.3)",
                          fontFamily: "Poppins-medium",
                        }}
                      >
                        Explore Details
                      </motion.button>
                    </div>
                  </motion.div>
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
