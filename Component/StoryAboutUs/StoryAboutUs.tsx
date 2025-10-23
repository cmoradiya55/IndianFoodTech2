"use client"
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'

const StoryAboutUs = () => {
    const router = useRouter();
    const pathname = usePathname();

    const handleSubmit = () => {
        router.push('/aboutUs');
    }

    return (
        <div className="py-6 mb-10 sm:mb-20 px-4 sm:px-6 lg:px-8">

            {/* Header Section */}
            <div className="mb-8 sm:mb-10 flex gap-3 sm:gap-4">
                <div className="bg-primary-500 h-35 sm:h-28 md:h-35 w-1.5 sm:w-2 rounded-2xl flex-shrink-0"></div>
                <div className='mt-1 sm:mt-2'>
                    <h1 className="text-2xl sm:text-3xl md:text-[36px] lg:text-4xl font-bold text-gray-900 mb-2 leading-tight">
                        The Story About Us
                    </h1>
                    <p className="text-lg sm:text-xl md:text-[24px] text-primary-500 font-medium leading-relaxed" style={{ fontFamily: 'Inter_18pt-medium' }}>
                        Explore the journey behind our ideas and the
                        <br className="hidden sm:block" />
                        <span className="sm:hidden"> </span>
                        purpose that shapes them
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16 mt-8 sm:mt-16 lg:mt-30 max-w-7xl mx-auto relative">

                {/* Left Side - Image */}
                <div className="relative flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-start lg:ml-20">
                    {/* Main circular image */}
                    <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[563px] lg:h-[563px] rounded-full border-4 sm:border-6 lg:border-10 border-black overflow-hidden z-10">
                        <Image
                            src="/slider1.png"
                            alt="Peanut butter being poured"
                            className="w-full h-full object-cover"
                            fill
                            sizes="(max-width: 640px) 280px, (max-width: 768px) 350px, (max-width: 1024px) 450px, 563px"
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
                <div className="flex-1 bg-white w-full lg:w-[568px] lg:absolute lg:right-25 rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 md:p-10 lg:p-12 z-20 mt-6 lg:mt-0">

                    {/* Introduction Text */}
                    <p className="text-gray-800 text-base sm:text-lg md:text-xl lg:text-[22px] mb-4 sm:mb-6 leading-relaxed" style={{ fontFamily: 'Inter_18pt-medium' }}>
                        At Indian Foodtech, we make high-quality peanut butter, nut butter, and spreads for brands everywhere.
                    </p>

                    {/* Peanut Butter Your Way */}
                    <div className="mb-4 sm:mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-[26px] lg:text-[28px] font-bold text-primary-500 mb-2">
                            Peanut Butter Your Way
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base md:text-[16px] leading-relaxed" style={{ fontFamily: 'Inter_18pt-medium' }}>
                            You can choose from creamy, crunchy, natural, or flavored peanut butter. We offer flexible packaging like jars, pouches, and bulk packs.
                        </p>
                    </div>

                    {/* Large-Scale Supply */}
                    <div className="mb-4 sm:mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-[26px] lg:text-[28px] font-bold text-primary-500 mb-2">
                            Large-Scale Supply
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base md:text-[16px] leading-relaxed" style={{ fontFamily: 'Inter_18pt-medium' }}>
                            We handle bulk production and private labeling while meeting all food safety standards.
                        </p>
                    </div>

                    {/* Why Choose Us */}
                    <div className="mb-4 sm:mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-[26px] lg:text-[28px] font-bold text-primary-500 mb-2">
                            Why Choose Us
                        </h2>
                        <div className="space-y-2 sm:space-y-1" style={{ fontFamily: 'Inter_18pt-medium' }}>
                            <div className="flex items-start gap-3">
                                <span className="text-green-500 flex-shrink-0 mt-0.5">✅</span>
                                <p className="text-gray-700 text-sm sm:text-base md:text-[16px] leading-relaxed">
                                    We are trusted by new and well-known brands.
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-green-500 flex-shrink-0 mt-0.5">✅</span>
                                <p className="text-gray-700 text-sm sm:text-base md:text-[16px] leading-relaxed">
                                    We provide consistent quality and reliable supply.
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-green-500 flex-shrink-0 mt-0.5">✅</span>
                                <p className="text-gray-700 text-sm sm:text-base md:text-[16px] leading-relaxed">
                                    Our products are safe, healthy, and ready to export.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Learn More Button - Only show on main page */}
                    {pathname !== '/aboutUs' && (
                        <button
                            onClick={handleSubmit}
                            className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 sm:py-4 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
                            style={{ fontFamily: 'Inter_18pt-medium' }}>
                            Learn More
                        </button>
                    )}

                </div>
            </div>

        </div>
    )
}

export default StoryAboutUs