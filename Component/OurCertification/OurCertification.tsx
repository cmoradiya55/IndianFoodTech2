"use client"
import Image from 'next/image';
import React, { useState } from 'react'

const OurCertification = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedTitle, setSelectedTitle] = useState<string>('');
    const [zoomLevel, setZoomLevel] = useState<number>(1);
    const [panPosition, setPanPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

    const certificates = [
        {
            id: 1,
            image: '/certificate/FssaiCertificate.webp',
            title: 'FSSAI Certificate',
            alt: 'FSSAI Food Safety Certificate'
        },
        {
            id: 2,
            image: '/certificate/HalalCertificate.webp',
            title: 'Halal Registration',
            alt: 'Halal Registration Certificate'
        },
        {
            id: 3,
            image: '/certificate/ImportExportCertificate.webp',
            title: 'Import Export Certificate',
            alt: 'Import Export Certificate'
        },
        {
            id: 4,
            image: '/certificate/ISOCertificate.webp',
            title: 'ISO 9001:2015',
            alt: 'ISO 9001:2015 Quality Management Certificate'
        }
    ];

    const openModal = (image: string, title: string) => {
        setSelectedImage(image);
        setSelectedTitle(title);
        setZoomLevel(1);
        setPanPosition({ x: 0, y: 0 });
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedImage(null);
        setSelectedTitle('');
        setZoomLevel(1);
        setPanPosition({ x: 0, y: 0 });
        document.body.style.overflow = 'unset';
    };

    const handleZoomIn = () => {
        setZoomLevel(prev => Math.min(prev + 0.5, 5));
    };

    const handleZoomOut = () => {
        setZoomLevel(prev => {
            const newZoom = Math.max(prev - 0.5, 1);
            if (newZoom === 1) {
                setPanPosition({ x: 0, y: 0 });
            }
            return newZoom;
        });
    };

    const handleResetZoom = () => {
        setZoomLevel(1);
        setPanPosition({ x: 0, y: 0 });
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if (zoomLevel > 1) {
            setIsDragging(true);
            setDragStart({
                x: e.clientX - panPosition.x,
                y: e.clientY - panPosition.y
            });
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging && zoomLevel > 1) {
            setPanPosition({
                x: e.clientX - dragStart.x,
                y: e.clientY - dragStart.y
            });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleWheel = (e: React.WheelEvent) => {
        e.preventDefault();
        if (e.deltaY < 0) {
            handleZoomIn();
        } else {
            handleZoomOut();
        }
    };

    return (
        <div className="py-4 sm:py-6 px-3 sm:px-4 md:px-8 max-w-7xl mx-auto">

            {/* Header Section */}
            <div className="mb-8 sm:mb-10 md:mb-12 flex gap-3 sm:gap-4">
                <div className="bg-primary-500 h-40 sm:h-28 md:h-35 w-1.5 sm:w-2 rounded-2xl flex-shrink-0"></div>
                <div className="mt-1 sm:mt-2">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
                        Our Certification
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-primary-500 font-medium leading-relaxed" style={{ fontFamily: 'Inter_18pt-medium' }}>
                        We are proud to hold certifications that reflect our commitment to quality, safety,
                        <br className="hidden md:block" />
                        and excellence.
                    </p>
                </div>
            </div>

            {/* Certificates Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                {certificates.map(cert => (
                    <div
                        key={cert.id}
                        className="group cursor-pointer transform transition-transform duration-300 hover:scale-105"
                        onClick={() => openModal(cert.image, cert.title)}
                    >
                        <div className="relative h-[300px] sm:h-[350px] md:h-[400px] rounded-lg sm:rounded-xl overflow-hidden shadow-lg border-4 sm:border-6 md:border-8 border-primary-500 bg-primary-50 p-1 sm:p-1.5 md:p-2">
                            {/* Decorative corner elements */}
                            <div className="absolute top-0 left-0 w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 border-t-2 sm:border-t-3 md:border-t-4 border-l-2 sm:border-l-3 md:border-l-4 border-primary-800 z-10"></div>
                            <div className="absolute top-0 right-0 w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 border-t-2 sm:border-t-3 md:border-t-4 border-r-2 sm:border-r-3 md:border-r-4 border-primary-800 z-10"></div>
                            <div className="absolute bottom-0 left-0 w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 border-b-2 sm:border-b-3 md:border-b-4 border-l-2 sm:border-l-3 md:border-l-4 border-primary-800 z-10"></div>
                            <div className="absolute bottom-0 right-0 w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 border-b-2 sm:border-b-3 md:border-b-4 border-r-2 sm:border-r-3 md:border-r-4 border-primary-800 z-10"></div>

                            <div className="relative h-full w-full transition-colors duration-300">
                                <Image
                                    src={cert.image}
                                    alt={cert.alt}
                                    fill
                                    className="object-contain transition-opacity duration-300 group-hover:opacity-90"
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 50vw, 25vw"
                                />
                            </div>

                            {/* Overlay caption */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-900/90 to-primary-500/10 p-2 sm:p-3 md:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white font-semibold text-center text-sm sm:text-base">{cert.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal with Zoom Functionality */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-2 sm:p-4"
                    onClick={closeModal}
                >
                    <div className="w-full max-h-[90vh] sm:max-h-[90vh] rounded-lg sm:rounded-xl overflow-hidden shadow-2xl relative">
                        {/* Zoom Controls */}
                        <div className="absolute top-3 sm:top-5 left-3 sm:left-5 z-20 flex flex-col gap-1 sm:gap-2">
                            <button
                                className="bg-white/90 hover:bg-white text-black rounded-full w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center shadow-md transition-all duration-200 hover:shadow-xl text-xs sm:text-base"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleZoomIn();
                                }}
                                title="Zoom In"
                            >
                                <svg className="w-3 sm:w-5 h-3 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </button>
                            <button
                                className="bg-white/90 hover:bg-white text-black rounded-full w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center shadow-lg transition-all duration-200 hover:shadow-xl text-xs sm:text-base"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleZoomOut();
                                }}
                                title="Zoom Out"
                            >
                                <svg className="w-3 sm:w-5 h-3 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                                </svg>
                            </button>
                            <button
                                className="bg-white/90 text-[10px] sm:text-[14px] hover:bg-white text-black rounded-full w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center shadow-lg transition-all duration-200 hover:shadow-xl"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleResetZoom();
                                }}
                                title="Reset Zoom"
                            >
                                1:1
                            </button>
                        </div>

                        {/* Close Button */}
                        <button
                            className="absolute top-1 sm:top-1 right-3 sm:right-5 z-20 bg-white/90 hover:bg-white text-black rounded-full w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center shadow-lg transition-all duration-200 hover:shadow-xl"
                            onClick={closeModal}
                            title="Close"
                        >
                            <svg
                                className="w-3 sm:w-5 h-3 sm:h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth={3}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Zoom Level Indicator */}
                        <div className="absolute bottom-3 sm:bottom-5 left-3 sm:left-5 z-20 bg-white/90 text-black px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-lg">
                            {Math.round(zoomLevel * 100)}%
                        </div>

                        {/* Image Container */}
                        <div
                            className="h-[90vh] w-full relative overflow-hidden cursor-grab active:cursor-grabbing"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseUp}
                            onWheel={handleWheel}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div
                                className="w-full h-full transition-transform duration-200 ease-out"
                                style={{
                                    transform: `scale(${zoomLevel}) translate(${panPosition.x / zoomLevel}px, ${panPosition.y / zoomLevel}px)`,
                                    cursor: zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
                                }}
                            >
                                <Image
                                    src={selectedImage}
                                    alt={selectedTitle}
                                    fill
                                    className="object-contain select-none"
                                    draggable={false}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            )}

        </div>
    )
}

export default OurCertification