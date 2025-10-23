import React from 'react'
import StoryAboutUs from '../../../Component/StoryAboutUs/StoryAboutUs';

const AboutUs = () => {
    const benefits = [
        "Complete focus on Private Label & Contract Manufacturing, from start to finish.",
        "Reliable global supply chain to guarantee on-time delivery anywhere in the world.",
        "Customizable solutions with a variety of pack sizes, flavors, and packaging choices.",
        "Customizable solutions with a variety of pack sizes, flavors, and packaging choices.",
        "International-standard production with rigorous quality control at every stage.",
        "Expertise in premium spreads including Peanut Butter, Almond Butter, Cashew Butter, Tahini, and many more nut-based varieties."
    ];

    return (
        <div className="bg-[#e9e8ed]">
            <div className="bg-[#e9e8ed] py-6 sm:py-8 md:py-10 px-3 sm:px-4 md:px-8 lg:px-16">
                <div className="max-w-7xl mx-auto container-custom" style={{ fontFamily: 'NotoSerif-semibold' }}>

                    {/* Story About Us Section */}
                    <StoryAboutUs />

                    {/* Why Partner with Us Section */}
                    <div className="mt-8 sm:mt-12 md:mt-16">
                        {/* Header */}
                        <div className="flex justify-center mb-6 sm:mb-8 md:mb-12">
                            <div className="bg-[#1D2C00] text-white mt-6 sm:mt-8 md:mt-12 px-6 sm:px-12 md:px-24 py-3 sm:py-4 md:py-6 rounded-full text-base sm:text-xl md:text-[28px] font-normal text-center" style={{ fontFamily: 'Inter_18pt-regular' }}>
                                Why Partner with Indian Foodtech?
                            </div>
                        </div>

                        {/* Benefits List */}
                        <div className="space-y-3 sm:space-y-4">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-sm flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6 md:mb-8"
                                >
                                    {/* Benefit Text */}
                                    <p className="text-gray-800 text-sm sm:text-lg md:text-2xl leading-relaxed font-medium">
                                        <span className="text-primary-500 text-base sm:text-xl md:text-3xl mr-2 sm:mr-3">⦿</span>
                                        {benefit}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <div className="bg-[#00280C] py-2 px-3 sm:px-4 md:px-8 lg:px-16" style={{ fontFamily: 'NotoSerif-semibold' }}>
                <div className='max-w-7xl mx-auto container-custom'>
                    <div className='flex flex-col items-center text-center gap-3 sm:gap-4 md:gap-6 py-6 sm:py-8 md:py-10'>
                        <h4 className='text-[#D4DBC4] text-lg sm:text-xl md:text-2xl font-semibold'>
                            At Indian Foodtech, we don&#39;t sell under our own label
                        </h4>
                        <h2 className='text-primary-500 text-2xl sm:text-3xl md:text-[57px] font-semibold'>
                            your brand is our priority
                        </h2>
                        <p className='text-[#D4DBC4] text-sm sm:text-lg md:text-2xl font-normal px-4 sm:px-0' style={{ fontFamily: 'Inter_18pt-regular' }}>
                            Our mission is simple: to help businesses grow with high-quality, cost-effective,
                            <br className="hidden md:block" />
                            and tailor-made food products.
                        </p>
                    </div>
                </div>
            </div>

            <div className='py-4'>
                <div className='bg-[#D4DBC4] py-2 px-3 sm:px-4 md:px-8 lg:px-16' style={{ fontFamily: 'Inter_18pt-regular' }}>
                    <div className='max-w-7xl mx-auto container-custom'>
                        <p className='text-black text-sm sm:text-lg md:text-2xl font-normal text-center py-6 sm:py-8 md:py-10 px-4 sm:px-0'>
                            Looking for a dependable private label food manufacturer in India? Indian
                            <br className="hidden md:block" />
                            Foodtech is the partner you can trust.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutUs;