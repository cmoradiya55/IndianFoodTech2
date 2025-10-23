import React from 'react';

const WorksProcessSection = () => {
    const processes = [
        {
            icon: (
                <svg width="38" height="48" viewBox="0 0 38 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32.9997 0.666992C34.2374 0.666992 35.4243 1.15866 36.2995 2.03383C37.1747 2.909 37.6663 4.09598 37.6663 5.33366V42.667C37.6663 43.9047 37.1747 45.0917 36.2995 45.9668C35.4243 46.842 34.2374 47.3337 32.9997 47.3337H4.99967C3.762 47.3337 2.57501 46.842 1.69984 45.9668C0.824673 45.0917 0.333008 43.9047 0.333008 42.667V5.33366C0.333008 4.09598 0.824673 2.909 1.69984 2.03383C2.57501 1.15866 3.762 0.666992 4.99967 0.666992H32.9997ZM18.9997 26.3337H11.9997C11.3808 26.3337 10.7873 26.5795 10.3498 27.0171C9.91217 27.4547 9.66634 28.0482 9.66634 28.667C9.66634 29.2858 9.91217 29.8793 10.3498 30.3169C10.7873 30.7545 11.3808 31.0003 11.9997 31.0003H18.9997C19.6185 31.0003 20.212 30.7545 20.6496 30.3169C21.0872 29.8793 21.333 29.2858 21.333 28.667C21.333 28.0482 21.0872 27.4547 20.6496 27.0171C20.212 26.5795 19.6185 26.3337 18.9997 26.3337ZM25.9997 14.667H11.9997C11.405 14.6677 10.8329 14.8954 10.4005 15.3036C9.96803 15.7119 9.70779 16.2699 9.67294 16.8636C9.63809 17.4573 9.83125 18.0419 10.213 18.4979C10.5947 18.954 11.1361 19.2471 11.7267 19.3173L11.9997 19.3337H25.9997C26.5944 19.333 27.1664 19.1053 27.5989 18.697C28.0313 18.2888 28.2916 17.7308 28.3264 17.1371C28.3613 16.5434 28.1681 15.9588 27.7864 15.5027C27.4047 15.0467 26.8632 14.7536 26.2727 14.6833L25.9997 14.667Z" fill="#1D2C00" />
                </svg>
            ),
            title: "Understanding Your Needs",
            description: "We begin by listening. Tell us about your market, your customers, and what you want your product to achieve. Whether it's for retail shelves, export, or wholesale, we help shape the right product concept for your brand."
        },
        {
            icon: (
                <svg width="24" height="48" viewBox="0 0 24 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M21.333 0.666992C21.9518 0.666992 22.5453 0.912825 22.9829 1.35041C23.4205 1.78799 23.6663 2.38149 23.6663 3.00033C23.6663 3.61916 23.4205 4.21266 22.9829 4.65024C22.5453 5.08783 21.9518 5.33366 21.333 5.33366V38.0003C21.333 40.4757 20.3497 42.8496 18.5993 44.6C16.849 46.3503 14.475 47.3337 11.9997 47.3337C9.52432 47.3337 7.15035 46.3503 5.40001 44.6C3.64967 42.8496 2.66634 40.4757 2.66634 38.0003V5.33366C2.0475 5.33366 1.45401 5.08783 1.01643 4.65024C0.578841 4.21266 0.333008 3.61916 0.333008 3.00033C0.333008 2.38149 0.578841 1.78799 1.01643 1.35041C1.45401 0.912825 2.0475 0.666992 2.66634 0.666992H21.333ZM16.6663 31.0003H11.9997C11.3808 31.0003 10.7873 31.2462 10.3498 31.6837C9.91217 32.1213 9.66634 32.7148 9.66634 33.3337C9.66634 33.9525 9.91217 34.546 10.3498 34.9836C10.7873 35.4212 11.3808 35.667 11.9997 35.667H16.6663V31.0003ZM16.6663 21.667H11.9997C11.405 21.6677 10.8329 21.8954 10.4005 22.3036C9.96803 22.7119 9.70779 23.2699 9.67294 23.8636C9.63809 24.4573 9.83125 25.0419 10.213 25.4979C10.5947 25.954 11.1361 26.2471 11.7267 26.3173L11.9997 26.3337H16.6663V21.667ZM16.6663 12.3337H11.9997C11.3808 12.3337 10.7873 12.5795 10.3498 13.0171C9.91217 13.4547 9.66634 14.0482 9.66634 14.667C9.66634 15.2858 9.91217 15.8793 10.3498 16.3169C10.7873 16.7545 11.3808 17.0003 11.9997 17.0003H16.6663V12.3337Z" fill="#1D2C00" />
                </svg>
            ),
            title: "Creating the Perfect Recipe",
            description: "Our food technologists craft a formula that fits your vision—right down to taste, texture, and nutrition. You'll get lab samples to test and review, and we'll refine them until you're fully satisfied with the result."
        },
        {
            icon: (
                <svg width="38" height="48" viewBox="0 0 38 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32.9997 0.666992C34.2374 0.666992 35.4243 1.15866 36.2995 2.03383C37.1747 2.909 37.6663 4.09598 37.6663 5.33366V42.667C37.6663 43.9047 37.1747 45.0917 36.2995 45.9668C35.4243 46.842 34.2374 47.3337 32.9997 47.3337H4.99967C3.762 47.3337 2.57501 46.842 1.69984 45.9668C0.824673 45.0917 0.333008 43.9047 0.333008 42.667V5.33366C0.333008 4.09598 0.824673 2.909 1.69984 2.03383C2.57501 1.15866 3.762 0.666992 4.99967 0.666992H32.9997ZM18.9997 26.3337H11.9997C11.3808 26.3337 10.7873 26.5795 10.3498 27.0171C9.91217 27.4547 9.66634 28.0482 9.66634 28.667C9.66634 29.2858 9.91217 29.8793 10.3498 30.3169C10.7873 30.7545 11.3808 31.0003 11.9997 31.0003H18.9997C19.6185 31.0003 20.212 30.7545 20.6496 30.3169C21.0872 29.8793 21.333 29.2858 21.333 28.667C21.333 28.0482 21.0872 27.4547 20.6496 27.0171C20.212 26.5795 19.6185 26.3337 18.9997 26.3337ZM25.9997 14.667H11.9997C11.405 14.6677 10.8329 14.8954 10.4005 15.3036C9.96803 15.7119 9.70779 16.2699 9.67294 16.8636C9.63809 17.4573 9.83125 18.0419 10.213 18.4979C10.5947 18.954 11.1361 19.2471 11.7267 19.3173L11.9997 19.3337H25.9997C26.5944 19.333 27.1664 19.1053 27.5989 18.697C28.0313 18.2888 28.2916 17.7308 28.3264 17.1371C28.3613 16.5434 28.1681 15.9588 27.7864 15.5027C27.4047 15.0467 26.8632 14.7536 26.2727 14.6833L25.9997 14.667Z" fill="#1D2C00" />
                </svg>
            ),
            title: "Design That Speaks Your Brand",
            description: "Our creative team designs labels and packaging that reflect your brand identity. Once the look is approved, we get everything ready for production—ensuring your product not only tastes great but also looks amazing on the shelf."
        },
        {
            icon: (
                <svg width="38" height="48" viewBox="0 0 38 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32.9997 0.666992C34.2374 0.666992 35.4243 1.15866 36.2995 2.03383C37.1747 2.909 37.6663 4.09598 37.6663 5.33366V42.667C37.6663 43.9047 37.1747 45.0917 36.2995 45.9668C35.4243 46.842 34.2374 47.3337 32.9997 47.3337H4.99967C3.762 47.3337 2.57501 46.842 1.69984 45.9668C0.824673 45.0917 0.333008 43.9047 0.333008 42.667V5.33366C0.333008 4.09598 0.824673 2.909 1.69984 2.03383C2.57501 1.15866 3.762 0.666992 4.99967 0.666992H32.9997ZM18.9997 26.3337H11.9997C11.3808 26.3337 10.7873 26.5795 10.3498 27.0171C9.91217 27.4547 9.66634 28.0482 9.66634 28.667C9.66634 29.2858 9.91217 29.8793 10.3498 30.3169C10.7873 30.7545 11.3808 31.0003 11.9997 31.0003H18.9997C19.6185 31.0003 20.212 30.7545 20.6496 30.3169C21.0872 29.8793 21.333 29.2858 21.333 28.667C21.333 28.0482 21.0872 27.4547 20.6496 27.0171C20.212 26.5795 19.6185 26.3337 18.9997 26.3337ZM25.9997 14.667H11.9997C11.405 14.6677 10.8329 14.8954 10.4005 15.3036C9.96803 15.7119 9.70779 16.2699 9.67294 16.8636C9.63809 17.4573 9.83125 18.0419 10.213 18.4979C10.5947 18.954 11.1361 19.2471 11.7267 19.3173L11.9997 19.3337H25.9997C26.5944 19.333 27.1664 19.1053 27.5989 18.697C28.0313 18.2888 28.2916 17.7308 28.3264 17.1371C28.3613 16.5434 28.1681 15.9588 27.7864 15.5027C27.4047 15.0467 26.8632 14.7536 26.2727 14.6833L25.9997 14.667Z" fill="#1D2C00" />
                </svg>
            ),
            title: "Production & Delivery",
            description: "With advanced facilities and strict quality checks, we bring your product to life. Every jar is produced, packed, and shipped with care, ensuring safe packaging and on-time delivery, every time."
        }
    ];

    return (
        <div className="py-8 sm:py-12 md:py-16 lg:py-16">

            {/* Section Header */}
            <div className="flex justify-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
                <div className="bg-[#1D2C00] text-white mt-6 sm:mt-8 md:mt-10 lg:mt-10 px-6 sm:px-12 md:px-18 lg:px-24 py-3 sm:py-4 md:py-5 lg:py-6 rounded-full text-base sm:text-xl md:text-2xl lg:text-[28px] font-normal text-center" style={{ fontFamily: 'Inter_18pt-regular' }}>
                    How It Works – Our Process
                </div>
            </div>

            {/* Mobile & Tablet Layout */}
            <div className="block lg:hidden">
                <div className="space-y-6 sm:space-y-8 md:space-y-10">
                    {processes.map((process, index) => (
                        <div key={index} className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-4 sm:p-6 md:p-8 mx-2 sm:mx-4">
                            {/* Step Number */}
                            <div className="flex items-center mb-3 sm:mb-4">
                                <div className="bg-primary-500 text-white w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 rounded-full flex items-center justify-center text-sm sm:text-base md:text-lg font-bold mr-3 sm:mr-4">
                                    {index + 1}
                                </div>
                                <div className="flex-1 h-1 bg-primary-500 rounded-full"></div>
                            </div>

                            {/* Icon and Content */}
                            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                                {/* Icon */}
                                <div className="flex-shrink-0 bg-primary-100 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-2xl flex items-center justify-center shadow-md mx-auto sm:mx-0">
                                    <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12">
                                        {React.cloneElement(
                                            process.icon as React.ReactElement<React.SVGProps<SVGSVGElement>>,
                                            { width: "100%", height: "100%" }
                                        )}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 text-center sm:text-left">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-black mb-2 sm:mb-3" style={{ fontFamily: 'NotoSerif-semibold' }}>
                                        {process.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed" style={{ fontFamily: 'Inter_18pt-regular' }}>
                                        {process.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Desktop Layout (lg+) - UNCHANGED */}
            <div className="hidden lg:block">
                <div className="relative mx-auto">
                    {/* Vertical Line and Dots */}
                    <div className="absolute left-[60px] -top-15 -bottom-10 w-2 border-l-4 border-dashed border-primary-500"></div>

                    {/* Start Dot */}
                    <div className="absolute left-[50px] -top-15 w-6 h-6 bg-primary-500 rounded-full"></div>

                    {/* End Dot */}
                    <div className="absolute left-[50px] -bottom-15 w-6 h-6 bg-primary-500 rounded-full"></div>

                    {/* Process Steps */}
                    <div className="space-y-10">
                        {processes.map((process, index) => (
                            <div key={index} className="flex items-start gap-[58px] relative">
                                {/* Icon Circle */}
                                <div className="bg-primary-500 h-[122px] w-[122px] mt-20 flex items-center justify-center rounded-full">
                                    <div className="flex-shrink-0 bg-[#F6F6F6] w-[91px] h-[91px] rounded-full flex items-center justify-center shadow-2xl shadow-black relative z-10">
                                        {process.icon}
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className="flex-1 bg-white rounded-3xl h-[280px] w-[858px] shadow-2xl shadow-[#d4dbc4] p-10 space-y-6">
                                    <h3 className="text-[36px] font-medium text-black" style={{ fontFamily: 'NotoSerif-semibold' }}>
                                        {process.title}
                                    </h3>
                                    <p className="text-[#5D6079] text-[22px] leading-relaxed" style={{ fontFamily: 'Inter_18pt-regular' }}>
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