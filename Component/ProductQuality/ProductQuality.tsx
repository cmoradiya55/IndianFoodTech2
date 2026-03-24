import React from "react";
import AllIconComponent from "../../public/AllIconComponent";

const ProductQuality = () => {
  const qualityFeatures = [
    {
      title: "100% Organic",
      description: "Sourced naturally for the freshest taste and nutrition.",
      icon: "organicIcon",
    },
    {
      title: "No Preservative",
      description: "Clean ingredients, nothing artificial, only nature's best.",
      icon: "noPreservativeIcon",
    },
    {
      title: "Heart Healthy",
      description: "Crafted to support your wellbeing with every bite.",
      icon: "heartHealthyIcon",
    },
    {
      title: "Bulk Option",
      description: "Flexible packaging to meet your home or business needs.",
      icon: "bulkOptionIcon",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="mb-8 sm:mb-10 md:mb-6 flex gap-3 sm:gap-4">
        <div className="bg-primary-500 h-33 sm:h-28 md:h-35 lg:h-28 w-1 sm:w-1.5 lg:w-1.5 rounded-2xl flex-shrink-0"></div>
        <div className="mt-1 sm:mt-2">
          <h1 className="text-base sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
            Why We Stand Out
          </h1>
          <p
            className="text-sm sm:text-sm md:text-sm lg:text-base text-primary-500 font-medium leading-relaxed"
            style={{ fontFamily: "Inter_18pt-medium" }}
          >
            We deliver unmatched quality, innovative solutions, and dedicated
            support to help
            <br className="hidden md:block" />
            you achieve your goals effortlessly. Experience excellence every
            step of the way.
          </p>
        </div>
      </div>

      {/* Quality Points Grid */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-3 sm:gap-5 md:gap-6">
        {qualityFeatures.map((feature, index) => {
          return (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-4 md:p-5 shadow-sm border border-[#D2D1D6] hover:shadow-md transition-shadow duration-300 h-full"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-1.5 sm:gap-4 md:gap-6 h-full">
                {/* Icon */}
                <div className="text-primary-500 mt-1 sm:mt-2 flex-shrink-0">
                  <div className="w-8 h-8 sm:w-auto sm:h-auto flex items-center justify-center">
                    <AllIconComponent
                      icon={feature.icon}
                      width={40}
                      height={40}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-0 sm:pt-1 flex flex-col">
                  <h3 className="text-xs sm:text-lg md:text-lg font-bold text-gray-900 mb-0.5 sm:mb-0 leading-tight">
                    {feature.title}
                  </h3>
                  <p
                    className="text-gray-600 text-[9px] sm:text-xs leading-relaxed flex-grow"
                    style={{
                      fontFamily: "Inter_18pt-medium",
                      letterSpacing: "0.2px",
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quality Assurance Section */}
      <div className="mt-8 sm:mt-10 md:mt-6 bg-[#00280C] px-6 sm:px-6 md:px-20 py-6 sm:py-5 md:py-5 rounded-2xl sm:rounded-3xl md:rounded-3xl flex flex-col gap-4 sm:gap-6 md:gap-4 text-center items-center">
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-primary-500">
          Quality Assurance
        </h2>
        <p
          className="text-xs sm:text-sm md:text-base text-white leading-relaxed"
          style={{ fontFamily: "Inter_18pt-medium" }}
        >
          Our peanut butter is crafted with the highest standards, ensuring
          every jar delivers pure taste, safety, and premium quality you can
          trust
        </p>
      </div>
    </div>
  );
};

export default ProductQuality;
