"use client";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useCallback } from "react";

const AUTOPLAY_MS = 5000;

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
    number: "01",
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
    number: "02",
  },
  {
    id: 3,
    image: "/slider3.webp",
    tag: "100% Organic",
    titleLine1: "Nature's Nutty",
    titleLine2: "Treasure",
    description:
      "Packed with protein, free from preservatives, and made with 100% organic peanuts to give you pure nourishment with every spoonful.",
    mobileDescription:
      "High-protein nut spread, free from preservatives and crafted with organic peanuts for clean, active energy.",
    buttonText: "Explore Products",
    number: "03",
  },
];

const Slider = () => {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const goTo = useCallback((idx: number) => {
    setCurrent(idx);
    setProgress(0);
    setAnimKey((k) => k + 1);
  }, []);

  const next = useCallback(() => {
    goTo(current === slides.length - 1 ? 0 : current + 1);
  }, [current, goTo]);

  const prev = () => goTo(current === 0 ? slides.length - 1 : current - 1);

  useEffect(() => {
    const start = Date.now();
    const id = setInterval(() => {
      const pct = ((Date.now() - start) / AUTOPLAY_MS) * 100;
      if (pct >= 100) {
        clearInterval(id);
        next();
      } else {
        setProgress(pct);
      }
    }, 40);
    return () => clearInterval(id);
  }, [current, next]);

  const slide = slides[current];

  return (
    <>
      {/* MOBILE SLIDER (hidden on sm+) */}
      <div
        className="sm:hidden relative w-full overflow-hidden bg-[#F8F9FA]"
        style={{ height: "calc(100svh - 4rem)", minHeight: "520px" }}
      >
        {/* Top Image Section - Increased height and added rounded bottom */}
        <div
          className="relative w-full overflow-hidden rounded-b-[40px] shadow-lg z-10"
          style={{ height: "50%" }}
        >
          {slides.map((s, idx) => (
            <div
              key={s.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === current ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={s.image}
                alt={`Slide ${idx + 1}`}
                fill
                className="object-cover object-center"
                priority={idx === 0}
                sizes="100vw"
              />
            </div>
          ))}

          {/* Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

          {/* Floating Tag - More prominent and elegant */}
          <div
            key={`m-tag-${animKey}`}
            className="slider-item-anim absolute top-4 left-4 z-20 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold tracking-wider uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
            {slide.tag}
          </div>

          {/* Slide Number Overlay - Modernized */}
          <div className="absolute bottom-4 right-6 z-20 font-mono text-[11px] text-white/90 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
            <span className="font-bold text-white">{slide.number}</span>
            <span className="mx-1 text-white/40">/</span>
            <span>{String(slides.length).padStart(2, "0")}</span>
          </div>

          {/* Navigation Arrows - Minimalist floating icons */}
          <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between z-20">
            <button
              onClick={prev}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white active:scale-90 transition-transform"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white active:scale-90 transition-transform"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Section - Balanced and clean */}
        <div
          className="relative flex flex-col justify-between px-6 pt-10 pb-8 bg-[#F8F9FA]"
          style={{ height: "50%" }}
        >
          <div key={`m-content-${animKey}`} className="space-y-4">
            <div
              className="slider-item-anim font-bold leading-tight"
              style={{ animationDelay: "100ms" }}
            >
              <span
                className="block text-slate-900 tracking-tight"
                style={{ fontSize: "clamp(1.8rem, 8vw, 2.6rem)" }}
              >
                {slide.titleLine1}
              </span>
              <span
                className="block text-primary-500 tracking-tight"
                style={{ fontSize: "clamp(1.8rem, 8vw, 2.6rem)" }}
              >
                {slide.titleLine2}
              </span>
            </div>

            <div
              className="slider-line-anim h-[3px] w-12 rounded-full"
              style={{
                background: "linear-gradient(to right, #6F9E12, transparent)",
                animationDelay: "200ms",
              }}
            />

            <p
              className="slider-item-anim text-slate-600 text-sm md:text-base leading-relaxed max-w-[90%]"
              style={{ animationDelay: "300ms" }}
            >
              {slide.mobileDescription}
            </p>
          </div>

          {/* Bottom Actions - CTA + Interactive Indicators */}
          <div className="flex items-center justify-between mt-auto">
            <button
              onClick={() => router.push("/products")}
              className="slider-item-anim group flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-lg shadow-primary-500/20 active:scale-95 transition-all duration-300"
              style={{ animationDelay: "400ms" }}
            >
              {slide.buttonText}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Modern Dot Indicators */}
            <div className="flex items-center gap-1.5">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className="p-1"
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <div
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      idx === current
                        ? "w-8 bg-primary-500"
                        : "w-1.5 bg-slate-300"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Subtle Progress Bar at the very bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-200/40">
          <div
            className="h-full bg-primary-500/60"
            style={{ width: `${progress}%`, transition: "none" }}
          />
        </div>
      </div>

      {/* ── DESKTOP SLIDER (hidden on mobile, shown sm+) ── */}
      <div className="hidden sm:block relative w-full h-full overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto h-full px-6 xl2:px-10 3xl:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 lg:gap-12 xl2:gap-16 3xl:gap-24">
          {/* Left Side: Content Area */}
          <div key={`content-${animKey}`} className="z-20">
            {/* Tag badge */}
            <div
              className="slider-item-anim inline-flex items-center gap-2 border border-primary-500/20 bg-primary-50 text-primary-700 text-xs md:text-sm font-semibold px-4 py-2 rounded-full mb-3 xl2:mb-6 3xl:mb-8 shadow-sm"
              style={{ animationDelay: "0ms" }}
            >
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse shrink-0" />
              {slide.tag}
            </div>

            {/* Two-line title */}
            <h1
              className="slider-item-anim font-bold leading-tight mb-3 xl2:mb-6 3xl:mb-8"
              style={{ animationDelay: "100ms" }}
            >
              <span
                className="block text-slate-900 tracking-tight"
                style={{ fontSize: "clamp(1.8rem, min(4.5vw, 7vh), 4rem)" }}
              >
                {slide.titleLine1}
              </span>
              <span
                className="block text-primary-500 tracking-tight"
                style={{ fontSize: "clamp(1.8rem, min(4.5vw, 7vh), 4rem)" }}
              >
                {slide.titleLine2}
              </span>
            </h1>

            {/* Accent line */}
            <div
              className="slider-line-anim h-[4px] w-28 mb-4 xl2:mb-7 3xl:mb-10 rounded-full"
              style={{
                background: "linear-gradient(to right, #6F9E12, transparent)",
                animationDelay: "200ms",
              }}
            />

            {/* Description */}
            <p
              className="slider-item-anim text-slate-500 text-sm xl2:text-base 3xl:text-xl leading-relaxed mb-4 xl2:mb-8 3xl:mb-12 max-w-lg font-medium"
              style={{ animationDelay: "300ms" }}
            >
              {slide.description}
            </p>

            {/* CTA button */}
            <div
              className="slider-item-anim"
              style={{ animationDelay: "400ms" }}
            >
              <button
                onClick={() => router.push("/products")}
                className="group inline-flex items-center gap-3 3xl:gap-4 bg-primary-500 hover:bg-primary-600 text-white px-5 py-2.5 xl2:px-8 xl2:py-4 3xl:px-10 3xl:py-5 rounded-2xl font-bold text-sm xl2:text-base 3xl:text-xl transition-all duration-300 hover:shadow-[0_15px_45px_rgba(111,158,18,0.35)] hover:scale-[1.03] active:scale-95"
              >
                {slide.buttonText}
                <ArrowRight className="w-5 h-5 3xl:w-6 3xl:h-6 transition-transform duration-300 group-hover:translate-x-2" />
              </button>
            </div>
          </div>

          {/* Right Side: Image Frame Area */}
          <div
            className="relative w-full"
            style={{ height: "min(420px, calc(100vh - 200px))" }}
          >
            {/* Decorative soft background glow */}
            <div className="absolute inset-0 bg-primary-50/60 rounded-[40px] blur-3xl z-0 pointer-events-none" />

            {/* The Image Frame — landscape */}
            <div className="relative w-full h-full overflow-hidden rounded-[24px] xl2:rounded-[32px] 3xl:rounded-[40px] shadow-[0_35px_80px_-15px_rgba(0,0,0,0.2)] z-10 border-[10px] border-white bg-slate-50">
              {slides.map((s, idx) => (
                <div
                  key={s.id}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    idx === current
                      ? "opacity-100 transform scale-110"
                      : "opacity-0 transform scale-90"
                  }`}
                >
                  <Image
                    src={s.image}
                    alt={`Slide ${idx + 1}`}
                    fill
                    className="object-cover object-center"
                    priority={idx === 0}
                    sizes="(max-width: 1280px) 50vw, 850px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
