import React from "react";
import AllIconComponent from "../../public/AllIconComponent";

const PROCESSES = [
  {
    iconName: "understandingNeedsIcon",
    title: "Understanding Your Needs",
    description:
      "We begin by listening. Tell us about your market, your customers, and what you want your product to achieve. Whether it's for retail shelves, export, or wholesale, we help shape the right product concept for your brand.",
  },
  {
    iconName: "perfectRecipeIcon",
    title: "Creating the Perfect Recipe",
    description:
      "Our food technologists craft a formula that fits your vision—right down to taste, texture, and nutrition. You'll get lab samples to test and review, and we'll refine them until you're fully satisfied with the result.",
  },
  {
    iconName: "brandDesignIcon",
    title: "Design That Speaks Your Brand",
    description:
      "Our creative team designs labels and packaging that reflect your brand identity. Once the look is approved, we get everything ready for production—ensuring your product not only tastes great but also looks amazing on the shelf.",
  },
  {
    iconName: "productionDeliveryIcon",
    title: "Production & Delivery",
    description:
      "With advanced facilities and strict quality checks, we bring your product to life. Every jar is produced, packed, and shipped with care, ensuring safe packaging and on-time delivery, every time.",
  },
];

const WorksProcessSection = () => {
  return (
    <div className="py-8 sm:py-6 md:py-8 lg:py-8">
      {/* Section Header */}
      <div className="flex justify-center mb-6 sm:mb-6 md:mb-8 lg:mb-10">
        <div
          className="bg-[#1D2C00] text-white mt-4 sm:mt-8 md:mt-10 lg:mt-10 px-8 sm:px-12 md:px-18 lg:px-12 py-2 sm:py-2 md:py-2 lg:py-3 rounded-full text-sm sm:text-xl md:text-lg lg:text-lg font-normal text-center shadow-md"
          style={{ fontFamily: "Inter_18pt-regular" }}
        >
          How It Works – Our Process
        </div>
      </div>

      {/* Unified Responsive Timeline Layout */}
      <div className="w-full max-w-[800px] mx-auto px-4 md:px-0">
        <div className="relative mx-auto h-full">
          {/* Vertical Line */}
          <div className="absolute left-[24px] md:left-[37px] -top-8 md:-top-15 -bottom-6 md:-bottom-10 w-0 border-l-[2px] md:border-l-[4px] border-dashed border-primary-500"></div>

          {/* Start Dot */}
          <div className="absolute left-[17px] md:left-[27px] -top-8 md:-top-15 w-[16px] h-[16px] md:w-[24px] md:h-[24px] bg-primary-500 rounded-full"></div>

          {/* End Dot */}
          <div className="absolute left-[17px] md:left-[27px] -bottom-6 md:-bottom-10 w-[16px] h-[16px] md:w-[24px] md:h-[24px] bg-primary-500 rounded-full"></div>

          {/* Process Steps */}
          <div className="space-y-8 md:space-y-10 relative z-10 pt-2 pb-2">
            {PROCESSES.map((process, index) => (
              <div
                key={index}
                className="flex items-start gap-4 md:gap-[58px] relative"
              >
                {/* Icon Circle */}
                <div className="bg-primary-500 h-[50px] w-[50px] md:h-[78px] md:w-[78px] mt-4 md:mt-10 flex shrink-0 items-center justify-center rounded-full shadow-lg relative z-20">
                  <div className="flex-shrink-0 bg-[#F6F6F6] w-[38px] h-[38px] md:w-[60px] md:h-[60px] rounded-full flex items-center justify-center shadow-inner md:shadow-2xl relative z-10">
                    <div className="w-[18px] h-[18px] md:w-[27px] md:h-[27px] text-black">
                      <AllIconComponent
                        icon={process.iconName}
                        width="100%"
                        height="100%"
                      />
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-white rounded-2xl md:rounded-3xl shadow-xl shadow-[#d4dbc4] p-5 md:p-6 space-y-2">
                  <h3
                    className="text-base md:text-lg font-medium text-black"
                    style={{ fontFamily: "NotoSerif-semibold" }}
                  >
                    {process.title}
                  </h3>
                  <p
                    className="text-[#5D6079] text-xs min-[400px]:text-sm md:text-base leading-relaxed"
                    style={{ fontFamily: "Inter_18pt-regular" }}
                  >
                    {process.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksProcessSection;
