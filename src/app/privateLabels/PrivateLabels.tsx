import Image from 'next/image';
import React from 'react'
import WorksProcessSection from '../../../Component/WorksProcessSection/WorksProcessSection';

const PrivateLabels = () => {
    return (
        <div className='bg-[#e9e8ed] py-6 sm:py-8 md:py-10 lg:py-10 px-3 sm:px-4 md:px-8 lg:px-16'>
            <div className='max-w-7xl mx-auto container-custom' style={{ fontFamily: 'NotoSerif-semibold' }}>

                {/* Header Section */}
                <div className="mb-8 sm:mb-10 lg:mb-10 flex gap-3 sm:gap-4">
                    <div className="bg-primary-500 h-20 sm:h-28 md:h-35 lg:h-35 w-2 rounded-2xl flex-shrink-0"></div>
                    <div className='mt-1 sm:mt-2'>
                        <h1 className="text-2xl sm:text-3xl md:text-[36px] lg:text-[36px] font-bold text-gray-900 mb-2 sm:mb-2">
                            Private Label, Your Brand Our Expertise
                        </h1>
                        <p className="text-base sm:text-lg md:text-[24px] lg:text-[24px] text-primary-500 font-medium leading-relaxed" style={{ fontFamily: 'Inter_18pt-medium' }}>
                            Bring your ideas to life with custom-made food products crafted
                            <br className="hidden md:block" />
                            to match your taste, style, and vision.
                        </p>
                    </div>
                </div>

                {/* About Private Labels Section */}
                <div>
                    {/* Mobile/Tablet Layout - Stacked */}
                    <div className="block lg:hidden">
                        <div className='bg-white p-4 sm:p-6 md:p-8 mt-6 sm:mt-8 mb-8 sm:mb-12 rounded-2xl sm:rounded-3xl shadow-lg'>
                            {/* Image Section */}
                            <div className="flex justify-center mb-6 sm:mb-8">
                                <div className="relative w-[250px] sm:w-[300px] md:w-[350px] h-[250px] sm:h-[300px] md:h-[350px] rounded-3xl sm:rounded-[40px] border-4 sm:border-6 border-black overflow-hidden">
                                    <Image
                                        src="/privateLabelImage.png"
                                        alt="Peanut butter being poured"
                                        className="w-full h-full object-cover"
                                        fill
                                    />
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className='flex flex-col text-center'>
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-black mb-3 sm:mb-4">
                                    About Private Label
                                </h2>
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6" style={{ fontFamily: 'Inter_18pt-regular' }}>
                                    At Indian Foodtech, we make it simple for you to launch your own brand of delicious nut-based spreads. From peanut butter to almond butter and beyond, we create high-quality products that can proudly carry your label. Our team works side by side with you to ensure every detail taste, quality, and packaging meets your exact expectations. With us, your brand doesn&#39;t just grow, it shines brighter than ever.
                                </p>
                                <button
                                    className="bg-primary-500 hover:bg-primary-600 shadow-xl shadow-primary-500/50 text-white font-medium text-sm sm:text-base py-3 sm:py-4 px-4 sm:px-6 rounded-full transition-colors duration-200 hover:shadow-lg w-full"
                                    style={{ fontFamily: 'Inter_18pt-regular' }}>
                                    Enquire Now
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Layout - Side by Side (lg+) - UNCHANGED */}
                    <div className="hidden lg:block">
                        <div className='bg-white px-4 sm:px-8 lg:px-16 mt-30 mb-20 rounded-3xl items-center shadow-xl flex h-[396px] relative'>
                            <div className='w-[60%] absolute left-1/8'>
                                <div className="relative w-[458px] h-[458px] rounded-[56px] border-12 border-black overflow-hidden z-10">
                                    <Image
                                        src="/privateLabelImage.png"
                                        alt="Peanut butter being poured"
                                        className="w-full h-full object-cover"
                                        layout="fill"
                                    />
                                </div>

                                {/* Decoration circles */}
                                <div className="absolute bottom-1/2 right-55 w-[74px] h-[74px] bg-[#d4dbc4] rounded-full"></div>
                                <div className="absolute -bottom-7 left-70 w-[32px] h-[32px] bg-[#d4dbc4] rounded-full"></div>
                                <div className="absolute -bottom-3 -left-10 w-[116px] h-[116px] bg-[#d4dbc4] rounded-full"></div>
                                <div className="absolute -top-10 left-80 w-[52px] h-[52px] bg-[#d4dbc4] rounded-full"></div>
                                <div className="absolute -top-7 left-10 w-[33px] h-[33px] bg-[#d4dbc4] rounded-full"></div>
                            </div>
                            <div className='w-[40%] ml-168 flex flex-col'>
                                <h2 className="text-3xl md:text-4xl font-medium text-black mb-4">
                                    About Private Label
                                </h2>
                                <p className="text-gray-600 text-base mb-4" style={{ fontFamily: 'Inter_18pt-regular' }}>
                                    At Indian Foodtech, we make it simple for you to launch your own brand of delicious nut-based spreads. From peanut butter to almond butter and beyond, we create high-quality products that can proudly carry your label. Our team works side by side with you to ensure every detail taste, quality, and packaging meets your exact expectations. With us, your brand doesn&#39;t just grow, it shines brighter than ever.
                                </p>
                                <button
                                    className="bg-primary-500 hover:bg-primary-600 shadow-xl shadow-primary-500/50 text-white font-medium text-lg py-4 px-6 rounded-full transition-colors duration-200 hover:shadow-lg w-full md:w-auto"
                                    style={{ fontFamily: 'Inter_18pt-regular' }}>
                                    Enquire Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Works - Our Process Section */}
                <div>
                    <WorksProcessSection />
                </div>

            </div>
        </div>
    )
}

export default PrivateLabels;