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
    <div className="relative w-full h-full flex flex-col justify-between max-w-7xl mx-auto py-6 sm:py-8 lg:py-10 px-4 sm:px-6">

      {/* Background Cinematic Spatial Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fafafc] via-white to-primary-50/10 -z-30 rounded-[48px]" />

      {/* Slow rotating fine-line decorative rings for ultra-modern aesthetic */}
      <motion.div
        variants={ringVariants}
        animate="animate1"
        className="absolute top-[-10%] right-[-5%] w-96 h-96 border border-slate-100 rounded-full -z-10 pointer-events-none"
      />
      <motion.div
        variants={ringVariants}
        animate="animate2"
        className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] border border-slate-100 rounded-full -z-10 pointer-events-none"
      />

      {/* Main Spacious Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-10 lg:gap-16 xl:gap-24 my-auto min-h-[380px] sm:min-h-[440px]">

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
                className="text-slate-500 text-sm sm:text-[15px] lg:text-[17px] leading-relaxed max-w-md font-medium"
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

      {/* Sleek Bottom Typographic Line-Dock Indicators (Desktop & Tablet md+) */}
      <div className="hidden md:flex justify-between items-center w-full border-t border-slate-200/60 pt-6 mt-12 z-20">
        <div className="flex gap-10 lg:gap-14">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => goTo(idx)}
              className="flex flex-col text-left group relative pb-3 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <span className={`text-[10px] font-black tracking-wider transition-colors duration-300 ${idx === current ? "text-primary-500" : "text-slate-400"}`}>
                  {s.number}
                </span>
                <span className={`text-xs font-black tracking-widest uppercase transition-colors duration-300 ${idx === current ? "text-slate-900" : "text-slate-400 group-hover:text-slate-600"}`}>
                  {s.tag}
                </span>
              </div>

              {/* Clean fine underline that scales width */}
              {idx === current && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary-500 origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
                    key={`progress-line-${animKey}`}
                  />
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Minimal Circle Arrow Nav */}
        <div className="flex gap-3">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-800 hover:border-slate-800 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-800 hover:border-slate-800 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Premium Mobile Bottom Line indicators (Mobile screen size) */}
      <div className="md:hidden flex justify-center gap-3 mt-6 z-20">
        {slides.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => goTo(idx)}
            className={`h-1 rounded-full transition-all duration-500 relative overflow-hidden ${idx === current ? "w-10 bg-primary-500" : "w-4 bg-slate-200"
              }`}
          >
            {idx === current && (
              <motion.div
                className="absolute inset-0 bg-primary-600 origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
                key={`mobile-progress-${animKey}`}
              />
            )}
          </button>
        ))}
      </div>

    </div>
  );
};

export default Hero;
