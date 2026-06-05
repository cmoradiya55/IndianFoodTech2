"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

export interface PageHeaderProps {
  title: string;
  description?: React.ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  barClassName?: string;
  isPageHeader?: boolean;
}

const barVariants: Variants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1], // premium cubic-bezier easeOut
    },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1], // easeOutCubic
      delay: 0.05,
    },
  },
};

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  className = "",
  titleClassName = "",
  descriptionClassName = "",
  barClassName = "",
  isPageHeader = false,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className={`flex gap-3 sm:gap-4 lg:gap-5 ${className}`}
    >
      {/* Animated accent vertical bar */}
      <motion.div
        variants={barVariants}
        className={`bg-primary-500 w-1 sm:w-1.5 lg:w-1.5 rounded-2xl flex-shrink-0 origin-top h-auto ${barClassName}`}
      />

      {/* Animated text content */}
      <motion.div variants={textVariants} className="my-0.5 sm:my-1.5">
        {isPageHeader ? (
          <h1
            className={`text-xl sm:text-xl md:text-lg lg:text-xl font-bold text-gray-900 mb-1 sm:mb-1.5 leading-tight tracking-tight ${titleClassName}`}
          >
            {title}
          </h1>
        ) : (
          <h2
            className={`text-xl sm:text-xl md:text-lg lg:text-xl font-bold text-gray-900 mb-1 sm:mb-1.5 leading-tight tracking-tight ${titleClassName}`}
          >
            {title}
          </h2>
        )}
        {description && (
          <p
            className={`text-sm sm:text-lg md:text-base text-primary-500 font-medium leading-relaxed ${descriptionClassName}`}
            style={{ fontFamily: "Poppins-medium" }}
          >
            {description}
          </p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default PageHeader;
