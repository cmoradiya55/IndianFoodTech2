import Image from 'next/image'
import React from 'react'

const CreateYourBrand = () => {
    return (
        <div className="py-6">

            {/* Header Section */}
            <div className="mb-10 sm:mb-16 md:mb-20 flex gap-3 sm:gap-4">
                <div className="bg-primary-500 h-50 sm:h-28 md:h-35 w-1.5 sm:w-2 rounded-2xl flex-shrink-0"></div>
                <div className='mt-1 sm:mt-2'>
                    <h1 className="text-2xl sm:text-3xl md:text-[36px] font-bold text-gray-900 mb-2 leading-tight">
                        Create Your Own Peanut Butter Brand
                    </h1>
                    <p className="text-lg sm:text-xl md:text-[24px] text-primary-500 font-medium leading-relaxed" style={{ fontFamily: 'Inter_18pt-medium' }}>
                        We specialize in making top-quality peanut butter in India using
                        <br className="hidden sm:block" />
                        <span className="sm:hidden"> </span>
                        carefully selected peanuts for great taste and nutrition.
                    </p>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="flex flex-col md:grid lg:grid-cols-2 gap-6 sm:gap-8 items-start mb-8 sm:mb-10 md:mb-12">

                {/* Left Side - Info Cards */}
                <div className="flex flex-col items-center w-full">
                    {/* Get In Touch Button */}
                    <button className="w-full max-w-[640px] bg-[#1D2C00] hover:bg-primary-900 text-white text-lg sm:text-xl font-semibold py-4 sm:py-6 px-6 sm:px-8 rounded-full transition-colors" style={{ fontFamily: 'Inter_18pt-medium' }}>
                        Get In Touch
                    </button>

                    {/* Info Cards Container */}
                    <div className="bg-[#d4dbc4] w-full max-w-[530px] sm:rounded-t-3xl rounded-b-3xl p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
                        {/* Packaging Options */}
                        <div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                                Packaging Options
                            </h3>
                            <p className="text-gray-700 text-sm sm:text-base md:text-[16px] leading-relaxed" style={{ fontFamily: 'Inter_18pt-medium' }}>
                                Choose from a variety of jar sizes made from durable PET material.
                            </p>
                        </div>

                        {/* Long Shelf Life */}
                        <div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                                Long Shelf Life
                            </h3>
                            <p className="text-gray-700 text-sm sm:text-base md:text-[16px] leading-relaxed" style={{ fontFamily: 'Inter_18pt-medium' }}>
                                Our peanut butter stays fresh for up to two years from the production date.
                            </p>
                        </div>

                        {/* Own Production Facility */}
                        <div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                                Own Production Facility
                            </h3>
                            <p className="text-gray-700 text-sm sm:text-base md:text-[16px] leading-relaxed" style={{ fontFamily: 'Inter_18pt-medium' }}>
                                We manufacture the jars ourselves, so we can ship to customers all over the world.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side - Circular Badge */}
                <div className="flex justify-center items-center mt-6 sm:mt-8 md:mt-10 w-full">
                    <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[435px] md:h-[435px]">
                        <div className="absolute inset-0 rounded-full flex items-center justify-center bg-[#d4dbc4]">
                            {/* Central Image */}
                            <div className="relative w-[196px] h-[196px] sm:w-[245px] sm:h-[245px] md:w-[305px] md:h-[305px] rounded-full border-8 sm:border-10 md:border-14 border-primary-500 shadow-xl shadow-primary-300 overflow-hidden z-10">
                                <Image
                                    src="/privateLabel/ChocolatePeanutButter.png"
                                    alt="Chocolate Peanut Butter"
                                    className="w-full h-full object-cover"
                                    fill
                                    sizes="(max-width: 640px) 196px, (max-width: 768px) 245px, 305px"
                                />
                            </div>
                        </div>
                        {/* Circular Text */}
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 485 485">
                            <defs>
                                <path
                                    id="circlePath"
                                    d="M 242, 242 m -200, 0 a 200,200 0 1,1 400,0 a 200,200 0 1,1 -400,0"
                                    fill="none"
                                />
                            </defs>
                            <text className="text-lg text-[32.5px] font-bold fill-gray-800">
                                <textPath href="#circlePath" startOffset="0%">
                                    Your brand name, our trusted quality. • our brand name, our trusted quality •
                                </textPath>
                            </text>
                        </svg>
                    </div>
                </div>

            </div>

            {/* Bottom Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 px-4 sm:px-0">
                {/* Excellent Quality */}
                <div className="bg-gray-100 rounded-2xl p-4 sm:p-5 md:p-6 text-center">
                    <div className="flex justify-center mb-3 sm:mb-4">
                        <div className="bg-[#FF4B8D] h-12 w-12 sm:h-16 sm:w-16 md:h-[72px] md:w-[72px] rounded-2xl p-2 sm:p-3 md:p-4 flex items-center justify-center">
                            {/* Check Icon */}
                            <svg width="24" height="24" className="sm:w-8 sm:h-8 md:w-10 md:h-10" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0 3C0 2.20435 0.316071 1.44129 0.87868 0.87868C1.44129 0.316071 2.20435 0 3 0H12C13.737 0 15.301 0.738 16.397 1.917C16.7164 1.7056 17.0408 1.50187 17.37 1.306C17.6007 1.17512 17.874 1.14125 18.1297 1.21186C18.3854 1.28247 18.6026 1.45176 18.7335 1.6825C18.8644 1.91324 18.8982 2.18652 18.8276 2.44223C18.757 2.69793 18.5877 2.91512 18.357 3.046C18.252 3.106 17.481 3.599 17.496 3.589C17.8295 4.34899 18.0011 5.17007 18 6V15C18 15.7956 17.6839 16.5587 17.1213 17.1213C16.5587 17.6839 15.7956 18 15 18H3C2.20435 18 1.44129 17.6839 0.87868 17.1213C0.316071 16.5587 0 15.7956 0 15V3ZM16.656 4.174C16.4096 3.54629 16.0388 2.97485 15.566 2.494C14.9878 2.91108 14.4241 3.348 13.876 3.804C12.234 5.17 10.262 7.094 8.637 9.522C8.13301 8.8554 7.54631 8.25559 6.891 7.737C6.5878 7.49823 6.26499 7.28547 5.926 7.101C5.78097 7.02012 5.63024 6.94994 5.475 6.891C5.22596 6.79963 4.95083 6.81094 4.71012 6.92243C4.46942 7.03392 4.28287 7.23646 4.1915 7.4855C4.10013 7.73454 4.11144 8.00967 4.22293 8.25037C4.33442 8.49108 4.53696 8.67763 4.786 8.769C4.811 8.779 5.156 8.921 5.662 9.315C6.24 9.765 7.038 10.554 7.808 11.872C7.89658 12.0237 8.02357 12.1495 8.1762 12.2365C8.32882 12.3236 8.50169 12.3689 8.67739 12.3678C8.85309 12.3668 9.02542 12.3195 9.17703 12.2307C9.32864 12.1419 9.45418 12.0148 9.541 11.862C11.125 9.07 13.328 6.862 15.155 5.342C15.6424 4.93636 16.143 4.54682 16.656 4.174Z" fill="#ffffff" />
                            </svg>
                        </div>
                    </div>
                    <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2">
                        Excellent Quality
                    </h4>
                    <p className="text-gray-700 text-sm sm:text-base md:text-[16px]" style={{ fontFamily: 'Inter_18pt-medium' }}>
                        Smooth and flavorful peanut butter.
                    </p>
                </div>

                {/* Global Shipping */}
                <div className="bg-gray-100 rounded-2xl p-4 sm:p-5 md:p-6 text-center">
                    <div className="flex justify-center mb-3 sm:mb-4">
                        <div className="bg-[#8B65FF] h-12 w-12 sm:h-16 sm:w-16 md:h-[72px] md:w-[72px] rounded-2xl p-2 sm:p-3 md:p-4 flex items-center justify-center">
                            {/* Global Shipping Icon */}
                            <svg width="24" height="24" className="sm:w-8 sm:h-8 md:w-10 md:h-10" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.4302 13.335C18.7401 15.2844 17.4628 16.9721 15.774 18.1657C14.0853 19.3592 12.0681 20.0001 10.0002 20C5.64717 20 1.94317 17.218 0.570168 13.335C3.40476 15.0824 6.67025 16.0053 10.0002 16C13.4582 16 16.6882 15.025 19.4302 13.335ZM19.1262 5.905C19.774 7.34694 20.0695 8.92232 19.9882 10.501C17.1548 12.7713 13.6309 14.0058 10.0002 14C6.22217 14 2.75017 12.69 0.0121684 10.5C-0.0689822 8.92165 0.226484 7.34663 0.874168 5.905C3.49063 7.91669 6.69976 9.00503 10.0002 9C13.4342 9 16.5982 7.846 19.1262 5.905ZM10.0002 3.20571e-06C11.5857 -0.00102277 13.1487 0.37536 14.56 1.09803C15.9713 1.82071 17.1902 2.86892 18.1162 4.156C15.814 6.00119 12.9506 7.00459 10.0002 7C6.93017 7 4.10817 5.936 1.88417 4.156C2.80992 2.86874 4.02887 1.8204 5.44018 1.0977C6.85149 0.375009 8.41459 -0.00126709 10.0002 3.20571e-06Z" fill="#ffffff" />
                            </svg>
                        </div>
                    </div>
                    <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2">
                        Global Shipping
                    </h4>
                    <p className="text-gray-700 text-sm sm:text-base md:text-[16px]" style={{ fontFamily: 'Inter_18pt-medium' }}>
                        We export to countries worldwide.
                    </p>
                </div>

                {/* In-House Production */}
                <div className="bg-gray-100 rounded-2xl p-4 sm:p-5 md:p-6 text-center">
                    <div className="flex justify-center mb-3 sm:mb-4">
                        <div className="bg-[#3895FF] h-12 w-12 sm:h-16 sm:w-16 md:h-[72px] md:w-[72px] rounded-2xl p-2 sm:p-3 md:p-4 flex items-center justify-center">
                            {/* Factory Icon */}
                            <svg width="24" height="24" className="sm:w-8 sm:h-8 md:w-10 md:h-10" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13 0C13.2652 0 13.5196 0.105357 13.7071 0.292893C13.8946 0.48043 14 0.734784 14 1V2H16C16.5304 2 17.0391 2.21071 17.4142 2.58579C17.7893 2.96086 18 3.46957 18 4V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18H2C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 0 16.5304 0 16V4C0 3.46957 0.210714 2.96086 0.585786 2.58579C0.960859 2.21071 1.46957 2 2 2H4V1C4 0.734784 4.10536 0.48043 4.29289 0.292893C4.48043 0.105357 4.73478 0 5 0C5.26522 0 5.51957 0.105357 5.70711 0.292893C5.89464 0.48043 6 0.734784 6 1V2H12V1C12 0.734784 12.1054 0.48043 12.2929 0.292893C12.4804 0.105357 12.7348 0 13 0ZM5.01 13H5C4.74512 13.0003 4.49997 13.0979 4.31463 13.2728C4.1293 13.4478 4.01777 13.687 4.00283 13.9414C3.98789 14.1958 4.07067 14.4464 4.23426 14.6418C4.39786 14.8373 4.6299 14.9629 4.883 14.993L5.01 15C5.27522 15 5.52957 14.8946 5.71711 14.7071C5.90464 14.5196 6.01 14.2652 6.01 14C6.01 13.7348 5.90464 13.4804 5.71711 13.2929C5.52957 13.1054 5.27522 13 5.01 13ZM9.01 13H9C8.74512 13.0003 8.49997 13.0979 8.31463 13.2728C8.1293 13.4478 8.01777 13.687 8.00283 13.9414C7.98789 14.1958 8.07067 14.4464 8.23426 14.6418C8.39785 14.8373 8.6299 14.9629 8.883 14.993L9.01 15C9.27522 15 9.52957 14.8946 9.71711 14.7071C9.90464 14.5196 10.01 14.2652 10.01 14C10.01 13.7348 9.90464 13.4804 9.71711 13.2929C9.52957 13.1054 9.27522 13 9.01 13ZM13.01 13H13C12.7451 13.0003 12.5 13.0979 12.3146 13.2728C12.1293 13.4478 12.0178 13.687 12.0028 13.9414C11.9879 14.1958 12.0707 14.4464 12.2343 14.6418C12.3979 14.8373 12.6299 14.9629 12.883 14.993L13.01 15C13.2752 15 13.5296 14.8946 13.7171 14.7071C13.9046 14.5196 14.01 14.2652 14.01 14C14.01 13.7348 13.9046 13.4804 13.7171 13.2929C13.5296 13.1054 13.2752 13 13.01 13ZM5.01 9H5C4.74512 9.00028 4.49997 9.09788 4.31463 9.27285C4.1293 9.44782 4.01777 9.68695 4.00283 9.94139C3.98789 10.1958 4.07067 10.4464 4.23426 10.6418C4.39786 10.8373 4.6299 10.9629 4.883 10.993L5.01 11C5.27522 11 5.52957 10.8946 5.71711 10.7071C5.90464 10.5196 6.01 10.2652 6.01 10C6.01 9.73478 5.90464 9.48043 5.71711 9.29289C5.52957 9.10536 5.27522 9 5.01 9ZM9.01 9H9C8.74512 9.00028 8.49997 9.09788 8.31463 9.27285C8.1293 9.44782 8.01777 9.68695 8.00283 9.94139C7.98789 10.1958 8.07067 10.4464 8.23426 10.6418C8.39785 10.8373 8.6299 10.9629 8.883 10.993L9.01 11C9.27522 11 9.52957 10.8946 9.71711 10.7071C9.90464 10.5196 10.01 10.2652 10.01 10C10.01 9.73478 9.90464 9.48043 9.71711 9.29289C9.52957 9.10536 9.27522 9 9.01 9ZM13.01 9H13C12.7451 9.00028 12.5 9.09788 12.3146 9.27285C12.1293 9.44782 12.0178 9.68695 12.0028 9.94139C11.9879 10.1958 12.0707 10.4464 12.2343 10.6418C12.3979 10.8373 12.6299 10.9629 12.883 10.993L13.01 11C13.2752 11 13.5296 10.8946 13.7171 10.7071C13.9046 10.5196 14.01 10.2652 14.01 10C14.01 9.73478 13.9046 9.48043 13.7171 9.29289C13.5296 9.10536 13.2752 9 13.01 9ZM16 4H2V6H16V4Z" fill="#ffffff" />
                            </svg>
                        </div>
                    </div>
                    <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2">
                        In-House Production
                    </h4>
                    <p className="text-gray-700 text-sm sm:text-base md:text-[16px]" style={{ fontFamily: 'Inter_18pt-medium' }}>
                        Everything made under one roof.
                    </p>
                </div>

                {/* Two-Year Freshness */}
                <div className="bg-gray-100 rounded-2xl p-4 sm:p-5 md:p-6 text-center">
                    <div className="flex justify-center mb-3 sm:mb-4">
                        <div className="bg-[#FFB428] h-12 w-12 sm:h-16 sm:w-16 md:h-[72px] md:w-[72px] rounded-2xl p-2 sm:p-3 md:p-4 flex items-center justify-center">
                            {/* Calendar Icon */}
                            <svg width="24" height="24" className="sm:w-8 sm:h-8 md:w-10 md:h-10" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13 0C13.2652 0 13.5196 0.105357 13.7071 0.292893C13.8946 0.48043 14 0.734784 14 1V2H16C16.5304 2 17.0391 2.21071 17.4142 2.58579C17.7893 2.96086 18 3.46957 18 4V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18H2C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 0 16.5304 0 16V4C0 3.46957 0.210714 2.96086 0.585786 2.58579C0.960859 2.21071 1.46957 2 2 2H4V1C4 0.734784 4.10536 0.48043 4.29289 0.292893C4.48043 0.105357 4.73478 0 5 0C5.26522 0 5.51957 0.105357 5.70711 0.292893C5.89464 0.48043 6 0.734784 6 1V2H12V1C12 0.734784 12.1054 0.48043 12.2929 0.292893C12.4804 0.105357 12.7348 0 13 0ZM5.01 13H5C4.74512 13.0003 4.49997 13.0979 4.31463 13.2728C4.1293 13.4478 4.01777 13.687 4.00283 13.9414C3.98789 14.1958 4.07067 14.4464 4.23426 14.6418C4.39786 14.8373 4.6299 14.9629 4.883 14.993L5.01 15C5.27522 15 5.52957 14.8946 5.71711 14.7071C5.90464 14.5196 6.01 14.2652 6.01 14C6.01 13.7348 5.90464 13.4804 5.71711 13.2929C5.52957 13.1054 5.27522 13 5.01 13ZM9.01 13H9C8.74512 13.0003 8.49997 13.0979 8.31463 13.2728C8.1293 13.4478 8.01777 13.687 8.00283 13.9414C7.98789 14.1958 8.07067 14.4464 8.23426 14.6418C8.39785 14.8373 8.6299 14.9629 8.883 14.993L9.01 15C9.27522 15 9.52957 14.8946 9.71711 14.7071C9.90464 14.5196 10.01 14.2652 10.01 14C10.01 13.7348 9.90464 13.4804 9.71711 13.2929C9.52957 13.1054 9.27522 13 9.01 13ZM13.01 13H13C12.7451 13.0003 12.5 13.0979 12.3146 13.2728C12.1293 13.4478 12.0178 13.687 12.0028 13.9414C11.9879 14.1958 12.0707 14.4464 12.2343 14.6418C12.3979 14.8373 12.6299 14.9629 12.883 14.993L13.01 15C13.2752 15 13.5296 14.8946 13.7171 14.7071C13.9046 14.5196 14.01 14.2652 14.01 14C14.01 13.7348 13.9046 13.4804 13.7171 13.2929C13.5296 13.1054 13.2752 13 13.01 13ZM5.01 9H5C4.74512 9.00028 4.49997 9.09788 4.31463 9.27285C4.1293 9.44782 4.01777 9.68695 4.00283 9.94139C3.98789 10.1958 4.07067 10.4464 4.23426 10.6418C4.39786 10.8373 4.6299 10.9629 4.883 10.993L5.01 11C5.27522 11 5.52957 10.8946 5.71711 10.7071C5.90464 10.5196 6.01 10.2652 6.01 10C6.01 9.73478 5.90464 9.48043 5.71711 9.29289C5.52957 9.10536 5.27522 9 5.01 9ZM9.01 9H9C8.74512 9.00028 8.49997 9.09788 8.31463 9.27285C8.1293 9.44782 8.01777 9.68695 8.00283 9.94139C7.98789 10.1958 8.07067 10.4464 8.23426 10.6418C8.39785 10.8373 8.6299 10.9629 8.883 10.993L9.01 11C9.27522 11 9.52957 10.8946 9.71711 10.7071C9.90464 10.5196 10.01 10.2652 10.01 10C10.01 9.73478 9.90464 9.48043 9.71711 9.29289C9.52957 9.10536 9.27522 9 9.01 9ZM13.01 9H13C12.7451 9.00028 12.5 9.09788 12.3146 9.27285C12.1293 9.44782 12.0178 9.68695 12.0028 9.94139C11.9879 10.1958 12.0707 10.4464 12.2343 10.6418C12.3979 10.8373 12.6299 10.9629 12.883 10.993L13.01 11C13.2752 11 13.5296 10.8946 13.7171 10.7071C13.9046 10.5196 14.01 10.2652 14.01 10C14.01 9.73478 13.9046 9.48043 13.7171 9.29289C13.5296 9.10536 13.2752 9 13.01 9ZM16 4H2V6H16V4Z" fill="#ffffff" />
                            </svg>
                        </div>
                    </div>
                    <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2">
                        Two-Year Freshness
                    </h4>
                    <p className="text-gray-700 text-sm sm:text-base md:text-[16px]" style={{ fontFamily: 'Inter_18pt-medium' }}>
                        Guaranteed long shelf life.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default CreateYourBrand