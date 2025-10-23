'use client';

import { useParams, useRouter } from 'next/navigation';
import { AllProductsList } from '@/utils/ProductList';
import Image from 'next/image';
import React from 'react';
import { packagingData } from '@/utils/ContainerPackageData';

const ProductDetailPage = () => {
    const params = useParams();
    const router = useRouter();
    const productId = params.product as string;

    // Find the product by ID across all categories
    const product = AllProductsList
        .flatMap(category => category.products)
        .find(product => product.id === productId);

    if (!product) {
        return (
            <div className="min-h-screen bg-[#e9e8ed] flex items-center justify-center">
                <div className="text-center px-4">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Product not found</h1>
                    <button
                        onClick={() => router.push('/products')}
                        className="bg-[#7FB432] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-[#6fa028] transition-colors text-sm sm:text-base"
                    >
                        Back to Products
                    </button>
                </div>
            </div>
        );
    }

    const stats = [
        {
            title: 'Packaging Specifications',
            description: 'We design our packaging to keep your product safe during transport while maximizing space efficiency.',
            icon: (
                <svg width="44" height="38" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.94494 3.22742C9.30045 2.51597 9.84692 1.91748 10.5232 1.49892C11.1995 1.08036 11.9789 0.858244 12.7742 0.857422H31.5542C32.3503 0.857449 33.1306 1.07919 33.8077 1.4978C34.4848 1.9164 35.032 2.51532 35.3878 3.22742L42.9135 18.281C43.3602 19.1723 43.5935 20.1554 43.5949 21.1524V33.0003C43.5949 34.1369 43.1434 35.227 42.3397 36.0307C41.5359 36.8345 40.4459 37.286 39.3092 37.286H5.02351C3.88687 37.286 2.79678 36.8345 1.99305 36.0307C1.18932 35.227 0.737793 34.1369 0.737793 33.0003V21.1546C0.738193 20.157 0.970756 19.1732 1.41708 18.281L8.94494 3.22742ZM31.5542 5.14314H12.7764L5.28065 20.1431H12.5235C13.376 20.1431 14.1936 20.4818 14.7964 21.0846C15.3991 21.6874 15.7378 22.5049 15.7378 23.3574V25.5003C15.7378 25.7844 15.8507 26.057 16.0516 26.2579C16.2525 26.4588 16.5251 26.5717 16.8092 26.5717H27.5235C27.8077 26.5717 28.0802 26.4588 28.2811 26.2579C28.4821 26.057 28.5949 25.7844 28.5949 25.5003V23.3574C28.5949 22.5049 28.9336 21.6874 29.5364 21.0846C30.1392 20.4818 30.9567 20.1431 31.8092 20.1431H39.0521L31.5542 5.14314Z" fill="white" />
                </svg>
            )
        },
        {
            title: 'Container Loading',
            description: 'Our loading patterns are optimized to give maximum efficiency for both 20 ft and 40 ft containers.',
            icon: (
                <svg width="43" height="36" viewBox="0 0 43 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.21426 0.857422C1.86426 0.857643 1.51965 0.94359 1.21054 1.10775C0.901434 1.27191 0.63724 1.50928 0.441055 1.79912C0.244869 2.08896 0.122663 2.42244 0.0851188 2.77042C0.047575 3.11839 0.0958366 3.47026 0.225684 3.79528L4.35711 14.1281V30.8574C4.35711 31.9941 4.80864 33.0842 5.61237 33.8879C6.4161 34.6916 7.50618 35.1431 8.64283 35.1431H36.5C37.6366 35.1431 38.7267 34.6916 39.5304 33.8879C40.3342 33.0842 40.7857 31.9941 40.7857 30.8574V13.9267L42.8857 3.42028C42.9478 3.10952 42.9402 2.78884 42.8635 2.48137C42.7867 2.17389 42.6427 1.88726 42.4419 1.64213C42.241 1.397 41.9883 1.19948 41.7019 1.06379C41.4155 0.928094 41.1026 0.857613 40.7857 0.857422H32.2143C31.7191 0.857721 31.2392 1.02952 30.8564 1.34361C30.4736 1.6577 30.2113 2.09469 30.1143 2.58028L29.3857 6.22528L27.7764 2.20528C27.6174 1.80731 27.3427 1.46615 26.9879 1.22588C26.633 0.985611 26.2142 0.857265 25.7857 0.857422H2.21426ZM21.5 24.4288C20.9316 24.4288 20.3866 24.6546 19.9847 25.0565C19.5829 25.4583 19.3571 26.0034 19.3571 26.5717C19.3571 27.14 19.5829 27.6851 19.9847 28.0869C20.3866 28.4888 20.9316 28.7146 21.5 28.7146H23.6428C24.2111 28.7146 24.7562 28.4888 25.1581 28.0869C25.5599 27.6851 25.7857 27.14 25.7857 26.5717C25.7857 26.0034 25.5599 25.4583 25.1581 25.0565C24.7562 24.6546 24.2111 24.4288 23.6428 24.4288H21.5Z" fill="white" />
                </svg>

            )
        },
        {
            title: 'Weight Considerations',
            description: 'Gross weight includes packaging materials. Net weight is the actual peanut butter inside.',
            icon: (
                <svg width="44" height="40" viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M21.8329 0.714844C22.4012 0.714844 22.9462 0.940608 23.3481 1.34247C23.75 1.74434 23.9757 2.28938 23.9757 2.8577V5.00056H25.6129C26.2779 5.0006 26.9337 5.1554 27.5286 5.4527L30.91 7.14342H38.9757C39.544 7.14342 40.0891 7.36918 40.491 7.77104C40.8928 8.17291 41.1186 8.71795 41.1186 9.28627C41.1186 9.85459 40.8928 10.3996 40.491 10.8015C40.0891 11.2034 39.544 11.4291 38.9757 11.4291H38.1572L43.0343 21.1856C43.1843 21.4834 43.2614 21.8113 43.2614 22.1434C43.2614 24.4167 42.3584 26.5969 40.7509 28.2043C39.1435 29.8118 36.9633 30.7148 34.69 30.7148C32.4167 30.7148 30.2365 29.8118 28.6291 28.2043C27.0216 26.5969 26.1186 24.4167 26.1186 22.1434C26.1186 21.8113 26.1957 21.4834 26.3457 21.1856L31.2229 11.4291H30.91C30.245 11.4291 29.5891 11.2743 28.9943 10.977L25.6129 9.28627H23.9757V35.0006H30.4043C30.9726 35.0006 31.5177 35.2263 31.9195 35.6282C32.3214 36.0301 32.5472 36.5751 32.5472 37.1434C32.5472 37.7117 32.3214 38.2568 31.9195 38.6586C31.5177 39.0605 30.9726 39.2863 30.4043 39.2863H13.2614C12.6931 39.2863 12.1481 39.0605 11.7462 38.6586C11.3443 38.2568 11.1186 37.7117 11.1186 37.1434C11.1186 36.5751 11.3443 36.0301 11.7462 35.6282C12.1481 35.2263 12.6931 35.0006 13.2614 35.0006H19.69V9.28627H18.0529L14.6714 10.977C14.0766 11.2743 13.4207 11.4291 12.7557 11.4291H12.4429L17.32 21.1856C17.469 21.4829 17.5468 21.8108 17.5472 22.1434C17.5472 24.4167 16.6441 26.5969 15.0366 28.2043C13.4292 29.8118 11.249 30.7148 8.97573 30.7148C6.70244 30.7148 4.52226 29.8118 2.91481 28.2043C1.30736 26.5969 0.404297 24.4167 0.404297 22.1434C0.404652 21.8108 0.482418 21.4829 0.63144 21.1856L5.50858 11.4291H4.69001C4.12169 11.4291 3.57665 11.2034 3.17478 10.8015C2.77292 10.3996 2.54715 9.85459 2.54715 9.28627C2.54715 8.71795 2.77292 8.17291 3.17478 7.77104C3.57665 7.36918 4.12169 7.14342 4.69001 7.14342H12.7557L16.1372 5.4527C16.732 5.1554 17.3879 5.0006 18.0529 5.00056H19.69V2.8577C19.69 2.28938 19.9158 1.74434 20.3176 1.34247C20.7195 0.940608 21.2645 0.714844 21.8329 0.714844Z" fill="white" />
                </svg>

            )
        }
    ];

    const handleExploreDetails = () => {
        router.push('/products');
    };

    return (
        <div className='bg-[#e9e8ed] min-h-screen py-6 sm:py-6 px-3 md:py-16 sm:px-4 md:px-8 lg:py-20'>
            <div className='max-w-7xl mx-auto px-3 sm:px-4 md:px-8 lg:px-16 relative' style={{ fontFamily: 'NotoSerif-semibold' }}>

                {/* Full Image and Details Container */}
                <div className='relative mb-8 sm:mb-12 md:mb-16 lg:mb-20'>
                    {/* Mobile/Tablet Layout - Stacked */}
                    <div className="block lg:hidden">
                        {/* Product Image */}
                        <div className="flex justify-center mb-6 sm:mb-8">
                            <div className="relative w-[250px] sm:w-[300px] md:w-[350px] h-[350px] sm:h-[400px] md:h-[450px] rounded-3xl sm:rounded-[40px] border-4 sm:border-6 border-black overflow-hidden">
                                <Image
                                    src={product.cardImage}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                    fill
                                />
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-4 sm:p-6 md:p-8">
                            {/* Product Name */}
                            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-500 mb-3 sm:mb-4 text-center">
                                {product.name}
                            </h1>

                            {/* Detailed Description */}
                            <div className="mb-3 sm:mb-4">
                                <p className="text-gray-700 text-xs sm:text-sm md:text-base text-center leading-relaxed" style={{ fontFamily: 'Inter_18pt-medium' }}>
                                    {product.detailedDescription}
                                </p>
                            </div>

                            {/* Ingredients */}
                            <div className="mb-3 flex flex-col items-start bg-[#EDEDED] border border-[#D2D1D6] rounded-lg p-2 sm:p-3 gap-2 sm:gap-3">
                                <h2 className="text-xs sm:text-sm md:text-base font-semibold text-[#00280C] bg-[#D4DBC4] rounded-lg px-2 sm:px-3 py-1 sm:py-2">
                                    Ingredients:
                                </h2>
                                <p
                                    className="text-black font-semibold text-xs sm:text-sm leading-relaxed"
                                    style={{ fontFamily: 'Inter_18pt-medium' }}
                                >
                                    {product.ingredients}
                                </p>
                            </div>

                            {/* Nutrition */}
                            <div className="mb-3">
                                <div className="bg-[#EDEDED] border border-[#D2D1D6] rounded-lg p-2 sm:p-3">
                                    {/* Nutrition Header */}
                                    <div className="flex items-center mb-2 sm:mb-3">
                                        <h2 className="text-xs sm:text-sm font-semibold text-[#00280C] bg-[#D4DBC4] rounded-lg px-2 sm:px-3 py-1 sm:py-2">
                                            Nutrition (per 2 tbsp – 32 g):
                                        </h2>
                                    </div>

                                    {/* Nutrition Values */}
                                    <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm">
                                        <div className="grid grid-cols-2 gap-2 sm:gap-3">
                                            {product.nutrition.includes('Calories') && (
                                                <div className="text-center">
                                                    <div className="text-sm sm:text-base md:text-lg font-bold text-primary-500">
                                                        {product.nutrition.match(/Calories (\d+)/)?.[1] || 'N/A'}
                                                    </div>
                                                    <div className="text-xs text-gray-600">Calories</div>
                                                </div>
                                            )}

                                            {product.nutrition.includes('Fat') && (
                                                <div className="text-center">
                                                    <div className="text-sm sm:text-base md:text-lg font-bold text-primary-500">
                                                        {product.nutrition.match(/Fat (\d+g)/)?.[1] || 'N/A'}
                                                    </div>
                                                    <div className="text-xs text-gray-600">Fat</div>
                                                </div>
                                            )}

                                            {product.nutrition.includes('Carbs') && (
                                                <div className="text-center">
                                                    <div className="text-sm sm:text-base md:text-lg font-bold text-primary-500">
                                                        {product.nutrition.match(/Carbs (\d+g)/)?.[1] || 'N/A'}
                                                    </div>
                                                    <div className="text-xs text-gray-600">Carbs</div>
                                                </div>
                                            )}

                                            {product.nutrition.includes('Protein') && (
                                                <div className="text-center">
                                                    <div className="text-sm sm:text-base md:text-lg font-bold text-primary-500">
                                                        {product.nutrition.match(/Protein (\d+g)/)?.[1] || 'N/A'}
                                                    </div>
                                                    <div className="text-xs text-gray-600">Protein</div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Full nutrition text */}
                                        <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-gray-200">
                                            <p className="text-black font-medium text-center text-xs sm:text-sm" style={{ fontFamily: 'Inter_18pt-medium' }}>
                                                {product.nutrition}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Available Sizes */}
                            {product.sizes && product.sizes.length > 0 && (
                                <div className="mb-3">
                                    <div className="bg-[#EDEDED] border border-[#D2D1D6] rounded-lg p-2 sm:p-3">
                                        <div className="flex flex-col items-start gap-2 sm:gap-3">
                                            <div className="bg-[#D4DBC4] rounded-lg px-2 sm:px-3 py-1 sm:py-2">
                                                <h2 className="text-xs sm:text-sm font-semibold text-[#00280C]">
                                                    Available Sizes
                                                </h2>
                                            </div>
                                            <div className="w-full">
                                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
                                                    {product.sizes.map((size, index) => (
                                                        <div key={index} className="text-black font-semibold text-xs sm:text-sm" style={{ fontFamily: 'Inter_18pt-medium' }}>
                                                            {size}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Certifications */}
                            {product.certifications && product.certifications.length > 0 && (
                                <div className="mb-3">
                                    <div className="bg-[#EDEDED] border border-[#D2D1D6] rounded-lg p-2 sm:p-3">
                                        <div className="flex flex-col items-start gap-2 sm:gap-3">
                                            <div className="bg-[#D4DBC4] rounded-lg px-2 sm:px-3 py-1 sm:py-2">
                                                <h2 className="text-xs sm:text-sm font-semibold text-[#00280C]">
                                                    Certifications
                                                </h2>
                                            </div>
                                            <div className="w-full">
                                                <div className="space-y-1">
                                                    {product.certifications.map((cert, index) => (
                                                        <div key={index} className="text-primary-500 font-semibold text-xs sm:text-sm" style={{ fontFamily: 'Inter_18pt-medium' }}>
                                                            {cert}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Action Buttons */}
                            <div className="mt-4 sm:mt-5 space-y-2 sm:space-y-3">
                                <button
                                    className="w-full bg-[#7FB432] hover:bg-[#6fa028] text-white font-normal py-2.5 sm:py-3 px-4 rounded-full transition-colors duration-300 text-xs sm:text-sm"
                                    style={{ boxShadow: '0 4px 12px rgba(127, 180, 50, 0.3)', fontFamily: 'Inter_18pt-medium' }}>
                                    Request Sample
                                </button>

                                <button
                                    className="w-full bg-black text-white font-normal py-2.5 sm:py-3 px-4 rounded-full transition-colors duration-300 text-xs sm:text-sm"
                                    style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)', fontFamily: 'Inter_18pt-medium' }}>
                                    Get a Quote
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Layout - Side by Side (lg+) - UNCHANGED */}
                    <div className="hidden lg:block">
                        {/* Left Side - Image (Absolute positioned) */}
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
                            <div className="relative w-[300px] sm:w-[400px] lg:w-[577px] h-[450px] sm:h-[600px] lg:h-[872px] rounded-[56px] border-8 border-black overflow-hidden">
                                <Image
                                    src={product.cardImage}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                    fill
                                />
                            </div>
                        </div>

                        {/* Right Side - Product Info */}
                        <div className="relative ml-auto w-full max-w-[500px] lg:max-w-[686px] bg-white rounded-[56px] shadow-lg p-6 md:p-8 lg:p-12 z-30">

                            {/* Product Name */}
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-500 mb-4">
                                {product.name}
                            </h1>

                            {/* Detailed Description */}
                            <div className="mb-4">
                                <p className="text-gray-700 text-[14px] md:text-[16px]" style={{ fontFamily: 'Inter_18pt-medium' }}>
                                    {product.detailedDescription}
                                </p>
                            </div>

                            {/* Ingredients */}
                            <div className="mb-3 flex flex-col sm:flex-row items-start sm:items-center bg-[#EDEDED] border border-[#D2D1D6] rounded-lg p-3 gap-3">
                                <h2 className="text-[14px] md:text-[16px] font-semibold text-[#00280C] bg-[#D4DBC4] rounded-lg px-3 py-2 flex-shrink-0">
                                    Ingredients:
                                </h2>
                                <p
                                    className="text-black font-semibold text-[12px] sm:text-[14px] md:text-[16px]"
                                    style={{ fontFamily: 'Inter_18pt-medium' }}
                                >
                                    {product.ingredients}
                                </p>
                            </div>

                            {/* Nutrition */}
                            <div className="mb-3">
                                <div className="bg-[#EDEDED] border border-[#D2D1D6] rounded-lg p-3">
                                    {/* Nutrition Header */}
                                    <div className="flex items-center mb-3">
                                        <h2 className="text-[12px] sm:text-[14px] md:text-[16px] font-semibold text-[#00280C] bg-[#D4DBC4] rounded-lg px-3 py-2">
                                            Nutrition (per 2 tbsp – 32 g):
                                        </h2>
                                    </div>

                                    {/* Nutrition Values */}
                                    <div className="bg-white rounded-lg p-3 shadow-sm">
                                        <div className="grid grid-cols-2 gap-3">
                                            {product.nutrition.includes('Calories') && (
                                                <div className="text-center">
                                                    <div className="text-[16px] md:text-[18px] font-bold text-primary-500">
                                                        {product.nutrition.match(/Calories (\d+)/)?.[1] || 'N/A'}
                                                    </div>
                                                    <div className="text-xs md:text-sm text-gray-600">Calories</div>
                                                </div>
                                            )}

                                            {product.nutrition.includes('Fat') && (
                                                <div className="text-center">
                                                    <div className="text-[16px] md:text-[18px] font-bold text-primary-500">
                                                        {product.nutrition.match(/Fat (\d+g)/)?.[1] || 'N/A'}
                                                    </div>
                                                    <div className="text-xs md:text-sm text-gray-600">Fat</div>
                                                </div>
                                            )}

                                            {product.nutrition.includes('Carbs') && (
                                                <div className="text-center">
                                                    <div className="text-[16px] md:text-[18px] font-bold text-primary-500">
                                                        {product.nutrition.match(/Carbs (\d+g)/)?.[1] || 'N/A'}
                                                    </div>
                                                    <div className="text-xs md:text-sm text-gray-600">Carbs</div>
                                                </div>
                                            )}

                                            {product.nutrition.includes('Protein') && (
                                                <div className="text-center">
                                                    <div className="text-[16px] md:text-[18px] font-bold text-primary-500">
                                                        {product.nutrition.match(/Protein (\d+g)/)?.[1] || 'N/A'}
                                                    </div>
                                                    <div className="text-xs md:text-sm text-gray-600">Protein</div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Full nutrition text */}
                                        <div className="mt-3 pt-3 border-t border-gray-200">
                                            <p className="text-black font-medium text-center text-[12px] md:text-[14px]" style={{ fontFamily: 'Inter_18pt-medium' }}>
                                                {product.nutrition}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Available Sizes */}
                            {product.sizes && product.sizes.length > 0 && (
                                <div className="mb-3">
                                    <div className="bg-[#EDEDED] border border-[#D2D1D6] rounded-lg p-3">
                                        <div className="flex flex-col sm:flex-row items-start gap-3">
                                            <div className="bg-[#D4DBC4] rounded-lg px-3 py-2 flex-shrink-0">
                                                <h2 className="text-[14px] md:text-[16px] font-semibold text-[#00280C]">
                                                    Available Sizes
                                                </h2>
                                            </div>
                                            <div className="flex-1">
                                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
                                                    {product.sizes.map((size, index) => (
                                                        <div key={index} className="text-black font-semibold text-[12px] md:text-[14px]" style={{ fontFamily: 'Inter_18pt-medium' }}>
                                                            {size}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Certifications */}
                            {product.certifications && product.certifications.length > 0 && (
                                <div className="mb-3">
                                    <div className="bg-[#EDEDED] border border-[#D2D1D6] rounded-lg p-3">
                                        <div className="flex flex-col sm:flex-row items-start gap-3">
                                            <div className="bg-[#D4DBC4] rounded-lg px-3 py-2 flex-shrink-0">
                                                <h2 className="text-[14px] md:text-[16px] font-semibold text-[#00280C]">
                                                    Certifications
                                                </h2>
                                            </div>
                                            <div className="flex-1">
                                                <div className="space-y-1">
                                                    {product.certifications.map((cert, index) => (
                                                        <div key={index} className="text-primary-500 font-semibold text-[12px] md:text-[14px]" style={{ fontFamily: 'Inter_18pt-medium' }}>
                                                            {cert}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Action Buttons */}
                            <div className="mt-5 space-y-3">
                                <button
                                    className="w-full bg-[#7FB432] hover:bg-[#6fa028] text-white font-normal py-3 md:py-4 px-4 rounded-full transition-colors duration-300 text-sm md:text-base"
                                    style={{ boxShadow: '0 4px 12px rgba(127, 180, 50, 0.3)', fontFamily: 'Inter_18pt-medium' }}>
                                    Request Sample
                                </button>

                                <button
                                    className="w-full bg-black text-white font-normal py-3 md:py-4 px-4 rounded-full transition-colors duration-300 text-sm md:text-base"
                                    style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)', fontFamily: 'Inter_18pt-medium' }}>
                                    Get a Quote
                                </button>
                            </div>

                        </div>
                    </div>

                </div>

                {/* Packaging Details Section */}
                <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 flex gap-3 sm:gap-4">
                    <div className="bg-primary-500 h-20 sm:h-28 md:h-35 w-2 rounded-2xl flex-shrink-0"></div>
                    <div className='mt-1 sm:mt-2'>
                        <h1 className="text-2xl sm:text-3xl md:text-[36px] lg:text-4xl font-bold text-gray-900 mb-2">
                            Packaging Details
                        </h1>
                        <p className="text-base sm:text-lg md:text-[24px] text-primary-500 font-medium leading-relaxed" style={{ fontFamily: 'Inter_18pt-medium' }}>
                            Here are the complete specifications for our carton and tray packaging. The details
                            <br className="hidden md:block" />
                            include dimensions, weight, and how many boxes or trays can fit into containers.
                        </p>
                    </div>
                </div>

                {/* Container Table */}
                <div className="overflow-x-auto rounded-lg sm:rounded-2xl mb-8 sm:mb-12 md:mb-16 lg:mb-20">
                    <table className="w-full min-w-[800px]">
                        <thead>
                            <tr className="bg-primary-500 text-white text-xs sm:text-sm md:text-[14px]">
                                <th className="px-1 sm:px-2 py-2 sm:py-3 md:py-4 font-semibold text-center">
                                    Pack Sizes
                                </th>
                                <th className="px-1 sm:px-2 py-2 sm:py-3 md:py-4 font-semibold text-center">
                                    Dimension <br className="hidden sm:block" /> L×W×H(mm)
                                </th>
                                <th className="px-1 sm:px-2 py-2 sm:py-3 md:py-4 font-semibold text-center">
                                    Gross Weight <br className="hidden sm:block" /> (Kgs)
                                </th>
                                <th className="px-1 sm:px-2 py-2 sm:py-3 md:py-4 font-semibold text-center">
                                    Net Weight <br className="hidden sm:block" />(Kgs)
                                </th>
                                <th className="px-1 sm:px-2 py-2 sm:py-3 md:py-4 font-semibold text-center">
                                    20ft Container <br className="hidden sm:block" /> Boxes
                                </th>
                                <th className="px-1 sm:px-2 py-2 sm:py-3 md:py-4 font-semibold text-center">
                                    20ft Container <br className="hidden sm:block" /> Trays
                                </th>
                                <th className="px-1 sm:px-2 py-2 sm:py-3 md:py-4 font-semibold text-center">
                                    40ft Container <br className="hidden sm:block" /> Boxes
                                </th>
                                <th className="px-1 sm:px-2 py-2 sm:py-3 md:py-4 font-semibold text-center">
                                    40ft Container <br className="hidden sm:block" /> Trays
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {packagingData.map((item, index) => (
                                <tr
                                    key={index}
                                    className="bg-[#D4DBC4] text-xs sm:text-sm md:text-[14px]"
                                    style={{ fontFamily: 'Inter_18pt-medium', letterSpacing: '0.25px' }}
                                >
                                    <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 font-medium text-gray-900 text-center">
                                        {item.packSize}
                                    </td>
                                    <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-gray-700 text-center">
                                        {item.dimension}
                                    </td>
                                    <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-gray-700 text-center">
                                        {item.grossWeight}
                                    </td>
                                    <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-gray-700 text-center">
                                        {item.netWeight}
                                    </td>
                                    <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-gray-700 text-center">
                                        {item.boxes20ft}
                                    </td>
                                    <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-gray-700 text-center">
                                        {item.trays20ft}
                                    </td>
                                    <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-gray-700 text-center">
                                        {item.boxes40ft}
                                    </td>
                                    <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-gray-700 text-center">
                                        {item.trays40ft}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr className="bg-primary-500 text-white text-xs sm:text-sm md:text-[14px]" style={{ fontFamily: 'Inter_18pt-medium', letterSpacing: '0.25px' }}>
                                <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 font-medium text-center" colSpan={8}>
                                    All sizes and weights are approximate and may vary slightly based on production.
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 px-0 sm:px-4 md:px-8 lg:px-16 mt-8 sm:mt-12 md:mt-16 lg:mt-20 mb-6 sm:mb-8 md:mb-10">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-[#F6F6F6] border-[#D2D1D6] border rounded-xl sm:rounded-2xl shadow-lg py-4 sm:py-6 md:py-8 px-4 sm:px-6 hover:shadow-2xl transition-shadow duration-300"
                        >
                            <div className="gap-3 sm:gap-4 flex flex-col items-center justify-center">
                                {/* Green Circle Icon */}
                                <div className="w-12 sm:w-16 md:w-[72px] h-12 sm:h-16 md:h-[72px] bg-gradient-to-b from-primary-400 to-primary-600 rounded-xl sm:rounded-2xl flex-shrink-0 shadow-md flex items-center justify-center">
                                    <div className="w-6 sm:w-8 md:w-11 h-6 sm:h-8 md:h-10">
                                        {React.isValidElement(stat.icon)
                                            ? React.cloneElement(stat.icon as React.ReactElement<React.SVGProps<SVGSVGElement>>, {
                                                width: "100%",
                                                height: "100%"
                                            })
                                            : stat.icon}
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="flex-1 text-center mt-1 sm:mt-2">
                                    <div className="text-sm sm:text-base font-semibold text-black mb-1 sm:mb-2">
                                        {stat.title}
                                    </div>
                                    <div className="text-gray-800 text-xs sm:text-sm font-medium leading-relaxed" style={{ fontFamily: 'Inter_18pt-medium' }}>
                                        {stat.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Recommended Products */}
                <div>
                    
                    {/* Title */}
                    <div className="flex items-center justify-center mb-8 sm:mb-10 md:mb-12">
                        <div
                            className="bg-[#1D2C00] text-white mt-6 sm:mt-8 md:mt-10 px-6 sm:px-12 md:px-24 lg:px-50 py-3 sm:py-4 md:py-5 lg:py-6 rounded-full text-base sm:text-xl md:text-2xl lg:text-[28px] font-normal text-center"
                            style={{ fontFamily: 'Inter_18pt-regular' }}
                        >
                            Recommended Products
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                        {(() => {
                            // Find the current product's category
                            const currentCategory = AllProductsList.find(category =>
                                category.products.some(p => p.id === productId)
                            );

                            if (!currentCategory) return null;

                            // Get other products from the same category (excluding current product)
                            const similarProducts = currentCategory.products
                                .filter(p => p.id !== productId)
                                .slice(0, 3); // Take only first 3 products

                            return similarProducts.map((product) => (
                                <div
                                    key={product.id}
                                    className="bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border-[1px] border-[#D2D1D6] flex flex-col"
                                >
                                    {/* Product Image */}
                                    <div className="relative overflow-hidden w-[180px] sm:w-[200px] md:w-[216px] h-[180px] sm:h-[200px] md:h-[216px] rounded-xl sm:rounded-2xl mx-auto mt-4 sm:mt-6 md:mt-8">
                                        <Image
                                            src={product.cardImage}
                                            alt={product.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Product Content */}
                                    <div className="p-4 sm:p-6 md:p-8 flex flex-col flex-grow">
                                        {/* Header with fixed min-height for 2 lines */}
                                        <div className="min-h-[2.5rem] sm:min-h-[3.5rem] md:min-h-[4.5rem] flex items-center justify-center mb-2 sm:mb-3">
                                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 text-center leading-tight">
                                                {product.name}
                                            </h3>
                                        </div>

                                        <p className="text-[#5D6079] text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 md:mb-6 text-center flex-grow" style={{ fontFamily: 'Inter_18pt-medium' }}>
                                            {product.description}
                                        </p>

                                        {/* Explore Button */}
                                        <button
                                            onClick={() => router.push(`/products/${product.id}`)}
                                            className="w-full bg-[#7FB432] hover:bg-[#6fa028] text-white font-normal py-2.5 sm:py-3 px-4 sm:px-6 rounded-full transition-colors duration-300 mt-auto text-sm sm:text-base"
                                            style={{ boxShadow: '0 4px 12px rgba(127, 180, 50, 0.3)', fontFamily: 'Inter_18pt-medium' }}>
                                            Explore Details
                                        </button>
                                    </div>
                                </div>
                            ));
                        })()}
                    </div>

                    {/* View All Products Button */}
                    <div className="flex justify-center mt-6 sm:mt-8 md:mt-10">
                        <button
                            onClick={() => handleExploreDetails()}
                            className="sm:w-3/5 md:w-2/5 bg-[#7FB432] hover:bg-[#6fa028] text-white font-normal py-3 sm:py-4 px-4 sm:px-6 rounded-full transition-colors duration-300 mt-auto text-sm sm:text-base"
                            style={{ boxShadow: '0 4px 12px rgba(127, 180, 50, 0.3)', fontFamily: 'Inter_18pt-medium' }}>
                            View All
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ProductDetailPage;