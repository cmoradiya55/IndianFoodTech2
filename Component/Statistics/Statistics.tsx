"use client";
import React from "react";
import AllIconComponent from "../../public/AllIconComponent";
import { motion, Variants } from "framer-motion";
import PageHeader from "@/components/PageHeader";

interface StatItem {
  title: string;
  subtitle: string;
  icon: string | React.ReactNode;
  color?: string;
}

const Statistics = () => {
  const stats: StatItem[] = [
    {
      title: "75+ Countries",
      subtitle: "Exported Around the World",
      icon: "globalShippingIcon",
    },
    {
      title: "15+ Wide Range",
      subtitle: "Flavors for Everyone",
      icon: "packegeIcon",
    },
    {
      title: "5 MT/Day",
      subtitle: "Steady Daily Output",
      icon: "growArrowIcon",
    },
    {
      title: "Inhouse R&D",
      subtitle: "New Product Development",
      icon: "researchIcon",
      color: "#ffffff",
    },
  ];

  // Framer Motion Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Header Section */}
      <PageHeader
        title="Spreading Health and Happiness"
        description="Delivering trusted value"
        isPageHeader={false}
      />

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-7 px-4 sm:px-6 md:px-8 lg:px-12 mt-8 sm:mt-10 md:mt-12">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -6, scale: 1.01, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)" }}
            className="bg-white rounded-xl sm:rounded-2xl lg:rounded-2xl shadow-lg p-3 lg:p-4 transition-all duration-300 group/card cursor-pointer border border-gray-50"
          >
            <div className="flex flex-col items-center gap-3 sm:gap-4 lg:gap-5">
              {/* Green Circle Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px] bg-gradient-to-b from-primary-400 to-primary-600 rounded-xl sm:rounded-2xl lg:rounded-2xl flex-shrink-0 shadow-md flex items-center justify-center group-hover/card:scale-105 group-hover/card:rotate-2 transition-transform duration-300">
                {typeof stat.icon === "string" ? (
                  <AllIconComponent
                    icon={stat.icon}
                    width={24}
                    height={24}
                    color={stat.color || ""}
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-8 lg:h-8"
                  />
                ) : (
                  stat.icon
                )}
              </div>

              {/* Text Content */}
              <div className="flex-1 text-center">
                <div className="text-sm sm:text-base md:text-base lg:text-lg font-bold text-gray-900 mb-1">
                  {stat.title}
                </div>
                <div className="text-gray-800 text-xs sm:text-sm md:text-base lg:text-sm font-medium">
                  {stat.subtitle}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Statistics;
