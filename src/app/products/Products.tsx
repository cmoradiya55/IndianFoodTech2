"use client";
import Image from 'next/image';
import React, { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import { AllProductsList } from '@/utils/ProductList';

const Products = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const category = searchParams.get('category');

    const handleExploreDetails = (categoryId: string) => {
        router.push(`/products/${categoryId}`);
    };

    useEffect(() => {
        if (category) {
            const categoryMap: { [key: string]: string } = {
                'peanut-butter': 'Peanut Butter',
                'nut-butters': 'Nut Butters',
                'roasted-butter': 'Rosted Peanuts',
                'spread': 'Spread'
            };
            
            const categoryName = categoryMap[category];
            if (categoryName) {
                setTimeout(() => {
                    const element = document.getElementById(`category-${category}`);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 100);
            }
        }
    }, [category]);

    return (
        <div className='bg-[#e9e8ed] py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-8 lg:px-16'>
            <div className='max-w-7xl mx-auto container-custom' style={{ fontFamily: 'NotoSerif-semibold' }}>

                {/* Header Section */}
                <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-12 flex gap-3 sm:gap-4">
                    <div className="bg-primary-500 h-20 sm:h-24 md:h-28 w-2 rounded-2xl flex-shrink-0"></div>
                    <div className='mt-1 sm:mt-2'>
                        <h1 className="text-2xl sm:text-3xl md:text-[36px] lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                            Discover Our Product
                        </h1>
                        <p className="text-base sm:text-lg md:text-[24px] text-primary-500 font-medium leading-relaxed" style={{ fontFamily: 'Inter_18pt-medium' }}>
                            Explore how our product brings ideas to life and adds real value.
                        </p>
                    </div>
                </div>

                {/* Dynamic Product Categories */}
                {AllProductsList.map((categoryItem, index) => {
                    const categorySlug = categoryItem.categoryName.toLowerCase().replace(/\s+/g, '-').replace('rosted-peanuts', 'roasted-butter');
                    
                    return (
                        <div key={categoryItem.id} id={`category-${categorySlug}`}>

                            {/* Category Title */}
                            <div className="flex items-center justify-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
                                <div
                                    className="bg-[#1D2C00] text-white mt-4 sm:mt-6 md:mt-8 lg:mt-10 px-6 sm:px-12 md:px-24 lg:px-50 py-3 sm:py-4 md:py-5 lg:py-6 rounded-full text-base sm:text-xl md:text-2xl lg:text-[28px] font-normal text-center"
                                    style={{ fontFamily: 'Inter_18pt-regular' }}
                                >
                                    {categoryItem.categoryName}
                                </div>
                            </div>

                            {/* Products Grid */}
                            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 ${index < AllProductsList.length - 1 ? 'mb-8 sm:mb-12 md:mb-16' : ''}`}>
                                {categoryItem.products.map((product) => (
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
                                                onClick={() => handleExploreDetails(product.id)}
                                                className="w-full bg-primary-500 hover:bg-primary-600 shadow-lg shadow-primary-500 text-white font-normal py-2.5 sm:py-3 px-4 sm:px-6 rounded-full transition-colors duration-300 mt-auto text-sm sm:text-base"
                                                style={{ boxShadow: '0 4px 12px rgba(127, 180, 50, 0.3)', fontFamily: 'Inter_18pt-medium' }}>
                                                Explore Details
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                        </div>
                    );
                })}

            </div>
        </div>
    )
}

export default Products;