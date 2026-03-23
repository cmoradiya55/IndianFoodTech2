import Image from "next/image";
import React from "react";
import AllIconComponent from "../../public/AllIconComponent";

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
    description: "We export to countries worldwide.",
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

const CreateYourBrand = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="mb-8 sm:mb-10 flex gap-3 sm:gap-4">
        <div className="bg-primary-500 h-40 sm:h-28 md:h-35 lg:h-28 w-1 sm:w-1.5 lg:w-1.5 rounded-2xl flex-shrink-0"></div>
        <div className="mt-1 sm:mt-2">
          <h1 className="text-base sm:text-base md:text-lg lg:text-base font-bold text-gray-900 mb-2 leading-tight">
            Create Your Own Peanut Butter Brand
          </h1>
          <p
            className="text-sm sm:text-sm md:text-sm lg:text-base text-primary-500 font-medium leading-relaxed"
            style={{ fontFamily: "Inter_18pt-medium" }}
          >
            We specialize in making top-quality peanut butter in India using
            <br className="hidden sm:block" />
            <span className="sm:hidden"></span>
            carefully selected peanuts for great taste and nutrition.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:grid lg:grid-cols-2 gap-6 sm:gap-4 items-start mb-8 sm:mb-10 md:mb-6">
        {/* Left Side - Info Cards */}
        <div className="flex flex-col items-center w-full">
          {/* Get In Touch Button */}
          <button
            className="w-full max-w-[640px] bg-[#1D2C00] hover:bg-primary-900 text-white text-lg sm:text-xl font-semibold py-2 sm:py-4 px-6 sm:px-8 rounded-full transition-colors"
            style={{ fontFamily: "Inter_18pt-medium" }}
          >
            Get In Touch
          </button>

          {/* Info Cards Container */}
          <div className="bg-[#d4dbc4] w-full max-w-[530px] sm:rounded-t-3xl rounded-b-3xl px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 space-y-2 sm:space-y-3">
            {/* Packaging Options */}
            <div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
                Packaging Options
              </h3>
              <p
                className="text-gray-700 text-xs sm:text-sm md:text-sm leading-relaxed"
                style={{ fontFamily: "Inter_18pt-medium" }}
              >
                Choose from a variety of jar sizes made from durable PET
                material.
              </p>
            </div>

            {/* Long Shelf Life */}
            <div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
                Long Shelf Life
              </h3>
              <p
                className="text-gray-700 text-xs sm:text-sm md:text-sm leading-relaxed"
                style={{ fontFamily: "Inter_18pt-medium" }}
              >
                Our peanut butter stays fresh for up to two years from the
                production date.
              </p>
            </div>

            {/* Own Production Facility */}
            <div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
                Own Production Facility
              </h3>
              <p
                className="text-gray-700 text-xs sm:text-sm md:text-sm leading-relaxed"
                style={{ fontFamily: "Inter_18pt-medium" }}
              >
                We manufacture the jars ourselves, so we can ship to customers
                all over the world.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Circular Badge */}
        <div className="flex justify-center items-center sm:-mt-13 w-full">
          <div className="relative w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px]">
            <div className="absolute inset-0 rounded-full flex items-center justify-center bg-[#d4dbc4]">
              {/* Central Image */}
              <div className="relative w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[260px] md:h-[260px] rounded-full border-4 sm:border-6 md:border-10 border-primary-500 shadow-xl shadow-primary-300 overflow-hidden z-10">
                <Image
                  src="/privateLabel/ChocolatePeanutButter.png"
                  alt="Chocolate Peanut Butter"
                  className="w-full h-full object-cover"
                  fill
                  sizes="(max-width: 640px) 160px, (max-width: 768px) 200px, 260px"
                />
              </div>
            </div>
            {/* Circular Text */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 485 485"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 242, 242 m -200, 0 a 200,200 0 1,1 400,0 a 200,200 0 1,1 -400,0"
                  fill="none"
                />
              </defs>
              <text className="text-lg text-[32.5px] font-bold fill-gray-800">
                <textPath href="#circlePath" startOffset="0%">
                  Your brand name, our trusted quality. • our brand name, our
                  trusted quality •
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 px-4 sm:px-0">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-2xl p-3 sm:p-4 md:p-5 text-center"
          >
            <div className="flex justify-center mb-3 sm:mb-4">
              <div
                className={`${feature.bgColor} rounded-2xl p-2 sm:p-2 md:p-3 flex items-center justify-center`}
              >
                {typeof feature.Icon === "string" ? (
                  <AllIconComponent
                    width={30}
                    height={30}
                    icon={feature.Icon}
                  />
                ) : (
                  feature.Icon
                )}
              </div>
            </div>
            <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-2">
              {feature.title}
            </h4>
            <p
              className="text-gray-700 text-xs"
              style={{ fontFamily: "Inter_18pt-medium" }}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateYourBrand;
