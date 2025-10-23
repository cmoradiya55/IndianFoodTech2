"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const Slider = () => {
    const router = useRouter();
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            image: '/slider1.png',
            title: 'Pure. Healthy. Delicious.',
            description: 'Crafted from the finest peanuts, our butters are rich in taste, natural in goodness, and made to keep you healthy every day.',
            buttonText: 'Explore Products'
        },
        {
            id: 2,
            image: '/slider2.png',
            title: 'A Healthy Spread of Happiness',
            description: 'Smooth and flavorful peanut butter crafted to keep your heart healthy and your taste buds satisfied, every single bite.',
            buttonText: 'Explore Products'
        },
        {
            id: 3,
            image: '/slider2.png',
            title: "Nature's Nutty Treasure",
            description: 'Packed with protein, free from preservatives, and made with 100% organic peanuts to give you pure nourishment with every spoonful.',
            buttonText: 'Explore Products'
        },
    ];

    const nextSlide = React.useCallback(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, [slides.length]);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 2000);

        return () => clearInterval(interval);
    }, [currentSlide, nextSlide]);

    const handleSubmit = () => {
        router.push('/products');
    };

    return (
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[638px] xl:h-[700px] overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl">

            {/* Slides Container */}
            <div
                className="flex transition-transform h-full duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className="w-full h-full flex-shrink-0 relative"
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <Image
                                src={slide.image}
                                alt={`Slide ${index + 1}`}
                                fill
                                className="object-cover object-center"
                                priority={index === 0}
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
                            />
                        </div>

                        {/* Overlay for better text readability */}
                        {/* <div className="absolute inset-0 bg-black/20 rounded-2xl sm:rounded-2xl lg:rounded-5xl"></div> */}

                        {/* Content - Responsive positioning */}
                        <div className="absolute inset-0 flex items-center justify-center z-10 px-4 sm:px-6 md:px-8 lg:px-12">
                            <div className="bg-black/70 sm:bg-black/62 backdrop-blur-sm rounded-2xl sm:rounded-3xl px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12 lg:py-14 text-center shadow-2xl max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl w-full">
                                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] xl:text-4xl font-bold text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight px-2">
                                    {slide.title}
                                </h1>
                                <p className="text-xs sm:text-sm md:text-base lg:text-[16px] xl:text-lg text-[#d4dbc4] mb-4 sm:mb-5 md:mb-6 lg:mb-8 leading-relaxed px-1 sm:px-2 md:px-4">
                                    {slide.description}
                                </p>
                                <button
                                    onClick={handleSubmit}
                                    className="bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-3.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 text-xs sm:text-sm md:text-base lg:text-lg"
                                    style={{ fontFamily: 'Inter_18pt-regular' }}>
                                    <span className="hidden sm:inline">{slide.buttonText}</span>
                                    <span className="sm:hidden">Explore</span>
                                </button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 bg-white/60 hover:bg-white text-gray-700 w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-10 lg:h-10 rounded-full transition-all duration-300 z-20 flex items-center justify-center shadow-lg hover:shadow-xl touch-manipulation"
                aria-label="Previous slide"
            >
                <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 bg-white/60 hover:bg-white text-gray-700 w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-10 lg:h-10 rounded-full transition-all duration-300 z-20 flex items-center justify-center shadow-lg hover:shadow-xl touch-manipulation"
                aria-label="Next slide"
            >
                <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2 z-20 bg-black/75 rounded-2xl sm:rounded-3xl px-3 sm:px-4 py-2 sm:py-2.5">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 touch-manipulation ${index === currentSlide
                                ? 'bg-primary-500 scale-125 sm:scale-150'
                                : 'bg-white/70 hover:bg-white/90'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

        </div>
    );
};

export default Slider;