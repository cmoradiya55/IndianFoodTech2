"use client";
import React from "react";
import StoryAboutUs from "../../../Component/StoryAboutUs/StoryAboutUs";
import { motion, Variants } from "framer-motion";

const AboutUs = () => {
  const benefits = [
    "Complete focus on Private Label & Contract Manufacturing, from start to finish.",
    "Reliable global supply chain to guarantee on-time delivery anywhere in the world.",
    "Customizable solutions with a variety of pack sizes, flavors, and packaging choices.",
    "International-standard production with rigorous quality control at every stage.",
    "Expertise in premium spreads including Peanut Butter, Almond Butter, Cashew Butter, Tahini, and many more nut-based varieties.",
  ];

  // Framer Motion staggered grid variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <>
      <div className="bg-[#e9e8ed] py-6 sm:py-8 md:py-12 px-3 sm:px-4 md:px-8 lg:px-8">
        <div
          className="max-w-7xl mx-auto container-custom"
          style={{ fontFamily: "NotoSerif-semibold" }}
        >
          {/* Story About Us Section */}
          <StoryAboutUs />

          {/* Why Partner with Us Section */}
          <div className="mt-8 sm:mt-12 md:mt-16">
            {/* Header with entrance slide-down */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 120, damping: 15 }}
                className="bg-[#1D2C00] text-white px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full text-xs sm:text-sm md:text-base font-normal text-center shadow-md"
                style={{ fontFamily: "Poppins-regular" }}
              >
                Why Partner with Indian Foodtech?
              </motion.div>
            </div>

            {/* Staggered Benefits List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="space-y-3 sm:space-y-4"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.01, x: 5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.06)" }}
                  className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 shadow-sm flex items-center gap-3.5 transition-all duration-300 border border-gray-100/50 cursor-default"
                >
                  {/* Benefit Text */}
                  <p className="text-gray-800 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
                    <span className="text-primary-500 text-sm sm:text-lg md:text-base mr-2 sm:mr-3">
                      ⦿
                    </span>
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Your Brand Is Our Priority Section with backdrop glows and spring viewport scaling */}
      <div
        className="bg-[#00280C] py-14 px-4 sm:px-6 md:px-8 relative overflow-hidden"
        style={{ fontFamily: "NotoSerif-semibold" }}
      >
        {/* Soft elegant glowing ambient overlays */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-48 h-48 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center text-center gap-3 sm:gap-4 py-2"
          >
            <h2 className="text-primary-500 text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wider">
              your brand is our priority
            </h2>
            <p
              className="text-[#D4DBC4] text-xs sm:text-sm md:text-base font-normal px-4 sm:px-0 max-w-3xl leading-relaxed"
              style={{ fontFamily: "Poppins-regular" }}
            >
              Our mission is simple: to help businesses grow with high-quality,
              cost-effective,
              <br className="hidden md:block" />
              and tailor-made food products.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Looking for a Dependable Private Label Food Manufacturer in India? Section */}
      <div className="py-6 bg-[#e9e8ed]">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-[#D4DBC4] py-6 px-4 sm:px-6 md:px-8 rounded-[24px] max-w-7xl mx-auto container-custom shadow-sm border border-gray-200/10"
          style={{ fontFamily: "Poppins-regular" }}
        >
          <p className="text-black text-xs sm:text-sm md:text-base font-medium text-center px-4 sm:px-0 leading-relaxed">
            Looking for a dependable private label food manufacturer in India?
            Indian
            <br className="hidden md:block" />
            Foodtech is the partner you can trust.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default AboutUs;
