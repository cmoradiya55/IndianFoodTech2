import React from "react";
import AllIconComponent from "../../public/AllIconComponent";

interface StatItem {
  title: string;
  subtitle: string;
  icon: string | React.ReactNode;
}

const Statistics = () => {
  const stats: StatItem[] = [
    {
      title: "30+ Exported",
      subtitle: "Around the World",
      icon: "globalShippingIcon",
    },
    {
      title: "40+ Wide Range",
      subtitle: "Flavors for Everyone",
      icon: "packegeIcon",
    },
    {
      title: "5 MT/Day",
      subtitle: "Steady Daily Output",
      icon: "growArrowIcon",
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <div className="mb-4 sm:mb-4 md:mb-6 lg:mb-8 flex gap-3 sm:gap-4 lg:gap-5">
        <div className="bg-primary-500 h-40 sm:h-28 md:h-35 lg:h-28 w-1 sm:w-1.5 lg:w-1.5 rounded-2xl flex-shrink-0"></div>
        <div className="mt-1 sm:mt-1 lg:mt-2">
          <h1 className="text-base sm:text-base md:text-lg lg:text-base font-bold text-gray-900 mb-2 leading-tight">
            Spreading Health and Happiness
            <br />
            Since 2019
          </h1>
          <p
            className="text-sm sm:text-sm md:text-sm lg:text-base text-primary-500 font-medium leading-relaxed"
            style={{ fontFamily: "Inter_18pt-medium" }}
          >
            Delivering trusted value since 2019
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7 px-4 sm:px-6 md:px-8 lg:px-12">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl sm:rounded-2xl lg:rounded-2xl shadow-lg p-1 sm:p-2 md:p-3 lg:p-4 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex items-start gap-3 sm:gap-4 lg:gap-5">
              {/* Green Circle Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px] bg-gradient-to-b from-primary-400 to-primary-600 rounded-xl sm:rounded-2xl lg:rounded-2xl flex-shrink-0 shadow-md flex items-center justify-center">
                {typeof stat.icon === "string" ? (
                  <AllIconComponent
                    icon={stat.icon}
                    width={24}
                    height={24}
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-8 lg:h-8"
                  />
                ) : (
                  stat.icon
                )}
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <div className="text-sm sm:text-base md:text-base lg:text-lg font-bold text-gray-900 mb-1">
                  {stat.title}
                </div>
                <div className="text-gray-800 text-xs sm:text-sm md:text-base lg:text-sm font-medium">
                  {stat.subtitle}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
