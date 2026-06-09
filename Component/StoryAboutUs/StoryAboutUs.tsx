"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { motion, Variants } from "framer-motion";
import { Award, ShieldCheck, Sparkles, ShieldCheckIcon, Globe } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const StoryAboutUs = ({ isPageHeader }: { isPageHeader?: boolean }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleSubmit = () => {
    router.push("/about-us");
  };

  const strengths = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Trusted Brand Partner",
      desc: "We are trusted by new, emerging startups as well as globally well-known legacy brands.",
    },
    {
      icon: <ShieldCheckIcon className="w-6 h-6" />,
      title: "Uncompromised Quality",
      desc: "We provide consistent culinary quality, stable viscosity profiles, and reliable logistics supply.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Export Certified",
      desc: "Our products are completely safe, healthy, aflatoxin-controlled, and ready for international export.",
    },
  ];

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

  const imageCardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, x: -30 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
        delay: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
        delay: 0.3,
      },
    },
  };

  // Drifting animations for background blobs
  const blobVariants: Variants = {
    animate1: {
      y: [0, -15, 0],
      x: [0, 10, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    animate2: {
      y: [0, 15, 0],
      x: [0, -12, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <PageHeader
        title="The Story About Us"
        description="Explore the journey behind our ideas and the purpose that shapes them"
        className="mb-10 sm:mb-12"
        titleClassName="text-2xl font-extrabold"
        descriptionClassName="text-[15px] leading-relaxed tracking-wide max-w-xl"
        isPageHeader={isPageHeader}
      />

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 xl:gap-16 mt-8 sm:mt-10 max-w-7xl mx-auto relative">
        {/* Left Side - Landscape Image with Premium Offset Frames & Blobs */}
        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start lg:pl-6">

          {/* Animated decorative circles/blobs */}
          <motion.div
            variants={blobVariants}
            animate="animate1"
            className="absolute top-10 -left-6 w-12 h-12 bg-primary-100/50 rounded-full blur-sm -z-10"
          ></motion.div>
          <motion.div
            variants={blobVariants}
            animate="animate2"
            className="absolute -bottom-8 left-[35%] w-16 h-16 bg-primary-200/40 rounded-full blur-md -z-10"
          ></motion.div>
          <motion.div
            variants={blobVariants}
            animate="animate1"
            className="absolute top-[30%] left-[8%] w-6 h-6 bg-primary-300/30 rounded-full -z-10"
          ></motion.div>
          <motion.div
            variants={blobVariants}
            animate="animate2"
            className="absolute top-4 right-[25%] w-8 h-8 bg-primary-100/60 rounded-full -z-10"
          ></motion.div>

          {/* Underlay Offset Border (Creating a premium layered depth effect matching landscape proportions) */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-full max-w-[280px] sm:max-w-[380px] md:max-w-[480px] lg:max-w-[540px] h-[175px] sm:h-[240px] md:h-[300px] lg:h-[340px] border-2 border-dashed border-primary-300 rounded-3xl -z-10"></div>

          {/* Main Premium Card Image Container (Landscape 16:10 Aspect Ratio) */}
          <motion.div
            variants={imageCardVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="relative w-full max-w-[280px] sm:max-w-[380px] md:max-w-[480px] lg:max-w-[540px] h-[175px] sm:h-[240px] md:h-[300px] lg:h-[340px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group"
          >
            {/* Soft overlay gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

            <Image
              src="/about_us.webp"
              alt="Premium Quality Ingredients"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              fill
              sizes="(max-width: 640px) 280px, (max-width: 768px) 380px, (max-width: 1024px) 480px, 540px"
              priority
            />

            {/* Bottom Floating Info Tag */}
            <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-sm px-3.5 py-1.5 rounded-xl border border-white/10 z-20 hidden sm:flex items-center gap-1.5 text-white">
              <Sparkles className="w-3.5 h-3.5 text-primary-300 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-medium tracking-wide">Pure & Nutrient Rich</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Elevated Glassmorphic Content Card (Adjacent layout for landscape harmony) */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -4, boxShadow: "0 30px 60px -15px rgba(111, 158, 18, 0.15)" }}
          className="w-full lg:w-1/2 bg-white/95 backdrop-blur-md rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-6 sm:p-8 border border-gray-100/50 z-20 transition-shadow duration-500"
        >
          {/* Introduction Text */}
          <motion.p
            variants={itemVariants}
            className="aeo-speakable-summary text-gray-800 text-sm sm:text-base mb-6 leading-relaxed font-medium "
            style={{ fontFamily: "Poppins-medium" }}
          >
            At Indian Foodtech, we make high-quality peanut butter, premium tahini paste, nut butter,
            and spreads for brands everywhere.
          </motion.p>

          <div className="space-y-6">
            {/* Peanut Butter Your Way */}
            <motion.div
              variants={itemVariants}
              className="group/item"
            >
              <h3 className="text-base sm:text-lg font-bold text-primary-500 mb-1.5 flex items-center gap-2 group-hover/item:text-primary-600 transition-colors">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-500 group-hover/item:scale-150 transition-transform"></span>
                Peanut Butter Your Way
              </h3>
              <p
                className="text-gray-600 text-xs sm:text-sm leading-relaxed pl-3.5 border-l border-gray-200"
                style={{ fontFamily: "Poppins-medium" }}
              >
                You can choose from creamy, crunchy, natural, or flavored peanut
                butter. We offer flexible packaging like jars, pouches, and bulk
                packs.
              </p>
            </motion.div>

            {/* Large-Scale Supply */}
            <motion.div
              variants={itemVariants}
              className="group/item"
            >
              <h3 className="text-base sm:text-lg font-bold text-primary-500 mb-1.5 flex items-center gap-2 group-hover/item:text-primary-600 transition-colors">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-500 group-hover/item:scale-150 transition-transform"></span>
                Large-Scale Supply
              </h3>
              <p
                className="text-gray-600 text-xs sm:text-sm leading-relaxed pl-3.5 border-l border-gray-200"
                style={{ fontFamily: "Poppins-medium" }}
              >
                We handle bulk production and private labeling while meeting all
                food safety standards.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Why Choose Us Bottom Grid Section */}
      <motion.div
        variants={itemVariants}
        className="mt-6 sm:mt-20 border-t border-gray-200/50 pt-8 sm:pt-6"
      >
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-700 font-bold text-xs uppercase tracking-widest mb-3">
            <ShieldCheck className="w-4 h-4 text-primary-500" />
            Core Strengths
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Why Choose Us
          </h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto mt-2" style={{ fontFamily: "Poppins-medium" }}>
            We combine manufacturing excellence with certified safety standards to fuel your brand's growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {strengths.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6, boxShadow: "0 20px 40px -15px rgba(111, 158, 18, 0.12)" }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100/60 shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-300 group/card text-center flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mb-5 group-hover/card:bg-primary-500 group-hover/card:text-white transition-all duration-300 shadow-sm shadow-primary-500/10">
                {card.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2.5">
                {card.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed" style={{ fontFamily: "Poppins-medium" }}>
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default StoryAboutUs;
