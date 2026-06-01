"use client";

import React, { useState } from "react";
import Image from "next/image";
import CertificationList from "@/data/CertificationList.json";
import ImagePreviewModal from "@/components/ImagePreviewModal";
import { motion, Variants } from "framer-motion";

const OurCertification = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<{
    image: string | null;
    title: string;
  }>({
    image: null,
    title: "",
  });

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
    <section className="bg-white relative">
      <motion.div
        className="container mx-auto px-4 relative z-10"
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
            className="bg-primary-500 h-21 sm:h-28 md:h-35 lg:h-26 w-1 sm:w-1.5 lg:w-1.5 rounded-2xl flex-shrink-0 origin-top"
            variants={lineVariants}
          ></motion.div>
          <div className="mt-1 sm:mt-2">
            <h2 className="text-base sm:text-base md:text-lg lg:text-2xl font-bold text-gray-900 mb-1 sm:mb-1.5">
              Our Certifications
            </h2>
            <p
              className="text-sm sm:text-sm md:text-sm lg:text-base text-primary-500 font-medium"
              style={{ fontFamily: "Poppins-medium" }}
            >
              We maintain the highest standards of quality and food safety,
              <br />
              backed by internationally recognized certifications.
            </p>
          </div>
        </motion.div>

        {/* Certificates */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
          {CertificationList.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group cursor-pointer bg-white rounded-2xl p-4 sm:p-6 w-full shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-all duration-300 flex flex-col items-center justify-center gap-3 sm:gap-4 border border-[var(--color-secondary-200)] hover:border-[var(--color-primary-200)]"
              onClick={() =>
                setSelectedCertificate({
                  image: cert.certificate,
                  title: cert.name,
                })
              }
            >
              {/* Logo Container */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center z-10 transition-transform duration-500 group-hover:scale-105 mt-2">
                <Image
                  src={cert.logo}
                  alt={cert.name}
                  fill
                  className="object-contain drop-shadow-sm group-hover:drop-shadow-md transition-all duration-500"
                  sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 112px"
                />
              </div>

              {/* Text Container */}
              <div className="z-10 flex flex-col items-center justify-end flex-grow w-full gap-1.5 sm:gap-2">
                <h3
                  className="text-[13px] sm:text-sm md:text-[15px] font-bold text-gray-800 text-center group-hover:text-primary-600 transition-colors duration-300 leading-tight"
                  style={{ fontFamily: "Poppins-bold" }}
                >
                  {cert.name}
                </h3>

                {/* View Detail animated text */}
                <div className="overflow-hidden h-4 flex items-center justify-center">
                  <span
                    className="text-xs sm:text-xs text-primary-500 font-medium transition-all duration-500 opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0"
                    style={{ fontFamily: "Poppins-medium" }}
                  >
                    View Certificate &rarr;
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <ImagePreviewModal
        image={selectedCertificate.image}
        title={selectedCertificate.title}
        onClose={() => setSelectedCertificate({ image: null, title: "" })}
      />
    </section>
  );
};

export default OurCertification;
