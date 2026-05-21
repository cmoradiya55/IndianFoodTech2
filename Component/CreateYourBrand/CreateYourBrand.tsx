import Image from "next/image";
import React from "react";
import AllIconComponent from "../../public/AllIconComponent";
import { Package, ShieldCheck, Factory, ChevronRight } from "lucide-react";

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

const brandInfoItems = [
  {
    title: "Packaging Options",
    icon: Package,
    description:
      "Choose from a variety of jar sizes made from durable PET material.",
  },
  {
    title: "Long Shelf Life",
    icon: ShieldCheck,
    description:
      "Our peanut butter stays fresh for up to two years from the production date.",
  },
  {
    title: "Own Production Facility",
    icon: Factory,
    description:
      "We manufacture the jars ourselves, so we can ship to customers all over the world.",
  },
];

const CreateYourBrand = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="mb-8 sm:mb-10 flex gap-3 sm:gap-4">
        <div className="bg-primary-500 h-27 sm:h-28 md:h-35 lg:h-27 w-1 sm:w-1.5 lg:w-1.5 rounded-2xl flex-shrink-0"></div>
        <div className="mt-1 sm:mt-2">
          <h1 className="text-base sm:text-base md:text-lg lg:text-2xl font-bold text-gray-900 mb-2 leading-tight">
            Create Your Own Peanut Butter Brand
          </h1>
          <p
            className="text-sm sm:text-sm md:text-sm lg:text-base text-primary-500 font-medium leading-relaxed"
            style={{ fontFamily: "Poppins-medium" }}
          >
            We specialize in making top-quality peanut butter in India using
            <br className="hidden sm:block" />
            <span className="sm:hidden"></span>
            carefully selected peanuts for great taste and nutrition.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      {/* <div className="flex flex-col lg:flex-row-reverse items-center justify-center mt-8 sm:mt-8 lg:mt-10 max-w-7xl mx-auto relative mb-8 sm:mb-10 md:mb-16 px-4 sm:px-6 lg:px-8">
        <div className="relative flex-shrink-0 w-full lg:w-auto flex justify-center z-10 lg:ml-[-80px] xl:ml-[-50px]">
          <div className="relative w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px] rounded-full border-4 sm:border-6 lg:border-10 border-slate-900 overflow-hidden z-20">
            <Image
              src="/ChocolatePeanutButter.webp"
              alt="Chocolate Peanut Butter"
              className="w-full h-full object-cover"
              fill
              sizes="(max-width: 640px) 240px, (max-width: 768px) 300px, (max-width: 1024px) 400px, 500px"
            />
          </div>

          <div className="hidden sm:block absolute bottom-1 sm:bottom-2 -right-1 sm:-right-2 w-[40px] h-[40px] sm:w-[55px] sm:h-[55px] lg:w-[73px] lg:h-[73px] bg-[#d4dbc4] rounded-full z-10"></div>
          <div className="hidden sm:block absolute -bottom-6 sm:-bottom-8 lg:-bottom-10 right-48 sm:right-60 lg:right-75 w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] lg:w-[67px] lg:h-[67px] bg-[#d4dbc4] rounded-full z-10"></div>
          <div className="hidden md:block absolute -bottom-3 sm:-bottom-4 lg:-bottom-6 right-28 sm:right-32 lg:right-40 w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] lg:w-[24px] lg:h-[24px] bg-[#d4dbc4] rounded-full z-10"></div>
          <div className="hidden md:block absolute top-3 sm:top-4 lg:top-5 right-20 sm:right-24 lg:right-30 w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] lg:w-[24px] lg:h-[24px] bg-[#d4dbc4] rounded-full z-10"></div>
          <div className="hidden sm:block absolute top-12 sm:top-16 lg:top-20 right-1 sm:right-2 w-[28px] h-[28px] sm:w-[35px] sm:h-[35px] lg:w-[42px] lg:h-[42px] bg-[#d4dbc4] rounded-full z-10"></div>
        </div>

        <div className="flex-1 bg-[#e9e8ed] w-full max-w-[600px] lg:max-w-[480px] xl:max-w-[568px] rounded-2xl sm:rounded-3xl shadow-lg p-4 sm:p-5 md:p-6 lg:p-8 z-30 mt-8 lg:mt-0 relative">
          <div className="space-y-4">
            {brandInfoItems.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex gap-4 items-start p-2.5 sm:p-3 rounded-2xl hover:bg-white/30transition-all duration-300 cursor-default group"
                >
                  <div>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-1 leading-snug">
                      {item.title}
                    </h3>
                    <p
                      className="text-gray-700 text-xs sm:text-sm leading-relaxed"
                      style={{ fontFamily: "Poppins-medium" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div> */}

      {/* Main Content - Compact List Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 my-8 max-w-4xl mx-auto px-4 sm:px-0">
        {brandInfoItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="group relative flex flex-col justify-between bg-gray-50 hover:bg-white rounded-2xl border border-gray-100/80 p-5 sm:p-6 hover:border-primary-300 hover:shadow-soft transition-all duration-500 ease-out hover:-translate-y-1 cursor-pointer overflow-hidden"
            >
              {/* Card Background Glow */}
              <div className="absolute -right-20 -top-20 w-36 h-36 bg-primary-50 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Header: Icon & Numeric Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl text-primary-600 bg-primary-50 border border-primary-100 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <span className="text-3xl font-extrabold text-gray-100 group-hover:text-primary-100 transition-colors duration-500 leading-none select-none">
                    0{index + 1}
                  </span>
                </div>

                {/* Info Text */}
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p
                  className="text-gray-600 text-sm leading-relaxed mb-5"
                  style={{ fontFamily: "Poppins-medium" }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
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
                className={`${feature.bgColor} rounded-2xl p-2.5 sm:p-3 md:p-3.5 flex items-center justify-center`}
              >
                {typeof feature.Icon === "string" ? (
                  <AllIconComponent
                    width={28}
                    height={28}
                    icon={feature.Icon}
                  />
                ) : (
                  feature.Icon
                )}
              </div>
            </div>
            <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-1">
              {feature.title}
            </h4>
            <p
              className="text-gray-700 text-sm"
              style={{ fontFamily: "Poppins-medium" }}
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
