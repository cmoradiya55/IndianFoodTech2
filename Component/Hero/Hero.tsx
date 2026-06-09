"use client";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const AUTOPLAY_MS = 6000;

const slides = [
  {
    id: 1,
    image: "/slider1.webp",
    tag: "Premium Quality",
    titleLine1: "Pure. Healthy.",
    titleLine2: "Delicious.",
    description:
      "Crafted from the finest peanuts, our butters are rich in taste, natural in goodness, and made to keep you healthy every day.",
    mobileDescription:
      "Made from premium peanuts, our rich butters deliver pure, natural goodness to support your daily wellness journey.",
    buttonText: "Explore Products",
    buttonLink: "/products",
    number: "01",
    minimalTagline: "Premium Quality",
  },
  {
    id: 2,
    image: "/slider2.webp",
    tag: "Heart Healthy",
    titleLine1: "A Spread",
    titleLine2: "of Happiness",
    description:
      "Smooth and flavorful peanut butter crafted to keep your heart healthy and your taste buds satisfied, every single bite.",
    mobileDescription:
      "Enjoy a flavorful, wholesome peanut butter spread designed to nourish your body and satisfy your taste buds.",
    buttonText: "Explore Products",
    buttonLink: "/products",
    number: "02",
    minimalTagline: "Guaranteed Purity",
  },
  {
    id: 3,
    image: "/discoverProduct2.webp",
    tag: "Private Labeling",
    titleLine1: "Your Brand.",
    titleLine2: "Our Expertise.",
    description:
      "Scale your brand globally with premium private label manufacturing. From custom formulations to export-ready packaging, we are your trusted B2B partner.",
    mobileDescription:
      "Scale your brand with certified custom private-label manufacturing and global export services.",
    buttonText: "Partner With Us",
    buttonLink: "/contact-us",
    number: "03",
    minimalTagline: "B2B Production Partner",
  },
];

const Hero = () => {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const goTo = useCallback((idx: number) => {
    setCurrent(idx);
    setAnimKey((k) => k + 1);
  }, []);

  const next = useCallback(() => {
    goTo(current === slides.length - 1 ? 0 : current + 1);
  }, [current, goTo]);

  const prev = () => goTo(current === 0 ? slides.length - 1 : current - 1);

  // Autoplay Loop
  useEffect(() => {
    const id = setInterval(() => {
      next();
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [current, next]);

  const slide = slides[current];

  // Framer Motion Cinematic Slow-Drift Variants
  const textContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08,
      },
    },
  };

  const textItemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 45,
        damping: 14,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.25,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.98, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      filter: "blur(4px)",
      transition: {
        duration: 0.4,
      },
    },
  };

  const ringVariants: Variants = {
    animate1: {
      rotate: [0, 360],
      transition: {
        duration: 25,
        repeat: Infinity,
        ease: "linear",
      },
    },
    animate2: {
      rotate: [360, 0],
      transition: {
        duration: 35,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between max-w-7xl mx-auto py-14 sm:py-8 lg:py-10 px-4 sm:px-6">

      {/* Main Spacious Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-10 lg:gap-16 xl:gap-24 my-auto min-h-[380px] sm:min-h-[440px] py-4 2xl:py-40">

        {/* Left Side: Editorial Typography Column */}
        <div className="md:col-span-5 z-20 flex flex-col justify-center text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={`slide-text-${current}`}
              variants={textContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col gap-3 sm:gap-4 relative"
            >

              {/* Large Editorial Headline */}
              <motion.h1
                variants={textItemVariants}
                className="font-black leading-[1.08] sm tracking-tight text-3xl sm:text-4xl lg:text-[46px] xl:text-[54px] text-slate-900"
              >
                {slide.titleLine1}
                <span className="block text-primary-500 mt-1">
                  {slide.titleLine2}
                </span>
              </motion.h1>

              {/* Simple Fine-Line Separator */}
              <motion.div
                variants={textItemVariants}
                className="h-[1px] w-20 bg-slate-200"
              />

              {/* High-legibility Editorial Paragraph */}
              <motion.p
                variants={textItemVariants}
                className="aeo-speakable-summary text-slate-500 text-sm sm:text-[15px] lg:text-[17px] leading-relaxed max-w-md font-medium"
                style={{ fontFamily: "Poppins-medium" }}
              >
                <span className="sm:hidden">{slide.mobileDescription}</span>
                <span className="hidden sm:inline">{slide.description}</span>
              </motion.p>

              {/* Minimalist Premium Button */}
              <motion.div
                variants={textItemVariants}
                className="mt-4"
              >
                <button
                  onClick={() => router.push(slide.buttonLink)}
                  className="group relative inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white font-bold px-7 py-3 sm:px-8 sm:py-3.5 rounded-full text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-slate-900/10 hover:-translate-y-0.5 active:scale-98"
                  style={{ fontFamily: "Poppins-bold" }}
                >
                  {slide.buttonText}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Capsule Media Frame */}
        <div className="md:col-span-7 flex items-center justify-center">

          <AnimatePresence mode="wait">
            <motion.div
              key={`slide-media-${current}`}
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-full aspect-[16/8] rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100 bg-white group/image"
            >
              {/* Image zoom effect on hover */}
              <Image
                src={slide.image}
                alt={slide.tag}
                fill
                className="object-cover object-center group-hover/image:scale-[1.03] transition-transform duration-[6s] ease-out"
                priority
                sizes="(max-width: 640px) 90vw, (max-width: 1280px) 50vw, 850px"
              />

              {/* Ultra-Minimal floating capsule tag */}
              <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 z-20 flex items-center gap-1.5 text-white">
                <Sparkles className="w-3 h-3 text-primary-300" />
                <span className="text-[9px] tracking-widest font-bold uppercase">{slide.minimalTagline}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Hero;
