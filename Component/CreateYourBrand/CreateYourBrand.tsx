"use client";
import React from "react";
import AllIconComponent from "../../public/AllIconComponent";
import { Package, ShieldCheck, Factory } from "lucide-react";
import { motion, Variants } from "framer-motion";
import PageHeader from "@/components/PageHeader";

const features = [
  {
    title: "Excellent Quality",
    bgColor: "bg-[#FF4B8D]",
    Icon: "excellentQualityIcon",
    description: "Smooth and flavorful peanut butter.",
  },
  {
    title: "Global Shipping",
    bgColor: "bg-[#8B65FF]",
    Icon: "globalShippingIcon",
    description: "We export to 75+ countries across Europe, the Middle East, Asia, Africa, and the Americas.",
  },
  {
    title: "In-House Production",
    bgColor: "bg-[#3895FF]",
    Icon: "calenderIcon",
    description: "Everything made under one roof.",
  },
  {
    title: "Two-Year Freshness",
    bgColor: "bg-[#FFB428]",
    Icon: "calenderIcon",
    description: "Guaranteed long shelf life.",
  },
];

const brandInfoItems = [
  {
    title: "Packaging Options",
    icon: Package,
    description:
      "Choose from PET jars, glass jars, sachets, pouches, buckets, and many packaging solutions for global markets.",
  },
  {
    title: "Long Shelf Life",
    icon: ShieldCheck,
    description:
      "Our peanut butter stays fresh for up to two years with quality, safety, and excellent product consistency.",
  },
  {
    title: "Own Production Facility",
    icon: Factory,
    description:
      "Our advanced roasting, sorting, and packaging facilities ensure consistent quality and timely delivery across worldwide markets.",
  },
];

const CreateYourBrand = () => {
  // Framer Motion Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        stiffness: 85,
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
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Header Section */}
      <PageHeader
        title="Create Your Own Peanut Butter Brand"
        description="We specialize in manufacturing top-quality peanut butter and nut butter in India."
        isPageHeader={false}
        descriptionClassName="max-w-xl"
      />

      {/* Main Content - Compact List Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 my-8 max-w-4xl mx-auto px-4 sm:px-0">
        {brandInfoItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6, boxShadow: "0 20px 40px -15px rgba(111,158,18,0.1)" }}
              className="group relative flex flex-col justify-between bg-gray-50 hover:bg-white rounded-2xl border border-gray-100/80 p-5 sm:p-6 hover:border-primary-300 transition-all duration-500 ease-out cursor-pointer overflow-hidden"
            >
              {/* Card Background Glow */}
              <div className="absolute -right-20 -top-20 w-36 h-36 bg-primary-50 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Header: Icon & Numeric Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl text-primary-600 bg-primary-50 border border-primary-100 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2">
                    <Icon className="w-7 h-7 stroke-[1.8]" />
                  </div>
                </div>

                {/* Info Text */}
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p
                  className="text-gray-600 text-sm leading-relaxed mb-5"
                  style={{ fontFamily: "Poppins-medium" }}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 px-4 sm:px-0">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -4, scale: 1.01, boxShadow: "0 12px 24px -10px rgba(0,0,0,0.06)" }}
            className="bg-gray-100 hover:bg-white border border-transparent hover:border-gray-200/80 rounded-2xl p-3 sm:p-4 md:p-5 text-center transition-all duration-300 group/feature cursor-pointer"
          >
            <div className="flex justify-center mb-3 sm:mb-4">
              <div
                className={`${feature.bgColor} rounded-2xl p-2.5 sm:p-3 md:p-3.5 flex items-center justify-center transition-transform duration-300 group-hover/feature:scale-105 group-hover/feature:rotate-2`}
              >
                {typeof feature.Icon === "string" ? (
                  <AllIconComponent
                    width={28}
                    height={28}
                    icon={feature.Icon}
                  />
                ) : (
                  feature.Icon
                )}
              </div>
            </div>
            <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-1">
              {feature.title}
            </h4>
            <p
              className="text-gray-700 text-sm"
              style={{ fontFamily: "Poppins-medium" }}
            >
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CreateYourBrand;
