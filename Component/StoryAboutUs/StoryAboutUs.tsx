"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const StoryAboutUs = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleSubmit = () => {
    router.push("/aboutUs");
  };

  return (
    <div className="sm:pb-15">
      {/* Header Section */}
      <div className="mb-8 sm:mb-10 flex gap-3 sm:gap-4">
        <div className="bg-primary-500 h-22 sm:h-28 md:h-35 lg:h-25 w-1 sm:w-1.5 lg:w-1.5 rounded-2xl flex-shrink-0"></div>
        <div className="mt-1 sm:mt-2">
          <h1 className="text-base sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-2 leading-tight">
            The Story About Us
          </h1>
          <p
            className="text-sm sm:text-sm md:text-sm lg:text-base text-primary-500 font-medium leading-relaxed"
            style={{ fontFamily: "Inter_18pt-medium" }}
          >
            Explore the journey behind our ideas and the
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            purpose that shapes them
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-4 mt-8 sm:mt-8 lg:mt-10 max-w-7xl mx-auto relative">
        {/* Left Side - Image */}
        <div className="relative flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-start lg:ml-20">
          {/* Main circular image */}
          <div className="relative w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full border-4 sm:border-6 lg:border-10 border-black overflow-hidden z-10">
            <Image
              src="/slider1.png"
              alt="Peanut butter being poured"
              className="w-full h-full object-cover"
              fill
              sizes="(max-width: 640px) 240px, (max-width: 768px) 300px, (max-width: 1024px) 400px, 500px"
            />
          </div>

          {/* Decorative circles - Hidden on mobile, scaled on tablet */}
          <div className="hidden sm:block absolute bottom-1 sm:bottom-2 -left-1 sm:-left-2 w-[40px] h-[40px] sm:w-[55px] sm:h-[55px] lg:w-[73px] lg:h-[73px] bg-[#d4dbc4] rounded-full"></div>
          <div className="hidden sm:block absolute -bottom-6 sm:-bottom-8 lg:-bottom-10 left-48 sm:left-60 lg:left-75 w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] lg:w-[67px] lg:h-[67px] bg-[#d4dbc4] rounded-full"></div>
          <div className="hidden md:block absolute -bottom-3 sm:-bottom-4 lg:-bottom-6 left-28 sm:left-32 lg:left-40 w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] lg:w-[24px] lg:h-[24px] bg-[#d4dbc4] rounded-full"></div>
          <div className="hidden md:block absolute top-3 sm:top-4 lg:top-5 left-20 sm:left-24 lg:left-30 w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] lg:w-[24px] lg:h-[24px] bg-[#d4dbc4] rounded-full"></div>
          <div className="hidden sm:block absolute top-12 sm:top-16 lg:top-20 left-1 sm:left-2 w-[28px] h-[28px] sm:w-[35px] sm:h-[35px] lg:w-[42px] lg:h-[42px] bg-[#d4dbc4] rounded-full"></div>
        </div>

        {/* Right Side - Content */}
        <div className="flex-1 bg-white w-full lg:w-[568px] lg:absolute lg:right-25 rounded-2xl sm:rounded-3xl shadow-lg p-4 sm:p-4 md:p-6 lg:p-8 z-20 mt-6 lg:mt-0">
          {/* Introduction Text */}
          <p
            className="text-gray-800 text-[11px] sm:text-xs md:text-sm lg:text-base mb-2 sm:mb-3 leading-relaxed"
            style={{ fontFamily: "Inter_18pt-medium" }}
          >
            At Indian Foodtech, we make high-quality peanut butter, nut butter,
            and spreads for brands everywhere.
          </p>

          {/* Peanut Butter Your Way */}
          <div className="mb-2 sm:mb-3">
            <h2 className="text-lg sm:text-base md:text-xl lg:text-xl font-bold text-primary-500 mb-1">
              Peanut Butter Your Way
            </h2>
            <p
              className="text-gray-700 text-xs sm:text-sm md:text-sm leading-relaxed"
              style={{ fontFamily: "Inter_18pt-medium" }}
            >
              You can choose from creamy, crunchy, natural, or flavored peanut
              butter. We offer flexible packaging like jars, pouches, and bulk
              packs.
            </p>
          </div>

          {/* Large-Scale Supply */}
          <div className="mb-3 sm:mb-4">
            <h2 className="text-lg sm:text-base md:text-xl lg:text-xl font-bold text-primary-500 mb-1 sm:mb-2">
              Large-Scale Supply
            </h2>
            <p
              className="text-gray-700 text-xs sm:text-sm md:text-sm leading-relaxed"
              style={{ fontFamily: "Inter_18pt-medium" }}
            >
              We handle bulk production and private labeling while meeting all
              food safety standards.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="mb-3 sm:mb-5">
            <h2 className="text-lg sm:text-base md:text-xl lg:text-xl font-bold text-primary-500 mb-1 sm:mb-2">
              Why Choose Us
            </h2>
            <div
              className="space-y-2 sm:space-y-1"
              style={{ fontFamily: "Inter_18pt-medium" }}
            >
              <div className="flex items-start gap-2 sm:gap-3">
                <span className="text-green-500 flex-shrink-0 mt-px">✅</span>
                <p className="text-gray-700 text-xs sm:text-sm md:text-sm leading-relaxed">
                  We are trusted by new and well-known brands.
                </p>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <span className="text-green-500 flex-shrink-0 mt-px">✅</span>
                <p className="text-gray-700 text-xs sm:text-sm md:text-sm leading-relaxed">
                  We provide consistent quality and reliable supply.
                </p>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <span className="text-green-500 flex-shrink-0 mt-px">✅</span>
                <p className="text-gray-700 text-xs sm:text-sm md:text-sm leading-relaxed">
                  Our products are safe, healthy, and ready to export.
                </p>
              </div>
            </div>
          </div>

          {/* Learn More Button - Only show on main page */}
          {pathname !== "/aboutUs" && (
            <button
              onClick={handleSubmit}
              className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2.5 sm:py-3 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg text-xs sm:text-sm"
              style={{ fontFamily: "Inter_18pt-medium" }}
            >
              Learn More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoryAboutUs;
