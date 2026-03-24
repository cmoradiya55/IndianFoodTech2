"use client";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const OurCertification = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>("");
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [panPosition, setPanPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const certificates = [
    {
      id: 1,
      image: "/certificate/FssaiCertificate.webp",
      title: "FSSAI Certificate",
      alt: "FSSAI Food Safety Certificate",
    },
    {
      id: 2,
      image: "/certificate/HalalCertificate.webp",
      title: "Halal Registration",
      alt: "Halal Registration Certificate",
    },
    {
      id: 3,
      image: "/certificate/ImportExportCertificate.webp",
      title: "Import Export Certificate",
      alt: "Import Export Certificate",
    },
    {
      id: 4,
      image: "/certificate/ISOCertificate.webp",
      title: "ISO 9001:2015",
      alt: "ISO 9001:2015 Quality Management Certificate",
    },
  ];

  const openModal = (image: string, title: string) => {
    setSelectedImage(image);
    setSelectedTitle(title);
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedTitle("");
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
    document.body.style.overflow = "unset";
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 5));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => {
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
        y: e.clientY - panPosition.y,
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoomLevel > 1) {
      setPanPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
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
    <div className="max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="mb-8 sm:mb-10 md:mb-6 flex gap-3 sm:gap-4">
        <div className="bg-primary-500 h-22 sm:h-28 md:h-35 lg:h-25 w-1 sm:w-1.5 lg:w-1.5 rounded-2xl flex-shrink-0"></div>
        <div className="mt-1 sm:mt-2">
          <h1 className="text-base sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1 sm:mb-1.5">
            Our Certification
          </h1>
          <p
            className="text-sm sm:text-sm md:text-sm lg:text-base text-primary-500 font-medium leading-relaxed"
            style={{ fontFamily: "Inter_18pt-medium" }}
          >
            We are proud to hold certifications that reflect our commitment to
            quality, safety,
            <br className="hidden md:block" />
            and excellence.
          </p>
        </div>
      </div>

      {/* Certificates Section */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-10 px-1 sm:px-0">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="group cursor-pointer transform transition-transform duration-300 hover:scale-[1.02] sm:hover:scale-105"
            onClick={() => openModal(cert.image, cert.title)}
          >
            <div className="relative h-[200px] min-[400px]:h-[240px] sm:h-[280px] md:h-[300px] rounded-lg sm:rounded-xl overflow-hidden shadow-md sm:shadow-lg border-[1px] sm:border-2 md:border-4 border-primary-500 bg-primary-50 p-1.5 sm:p-2 md:p-3">
              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-3 sm:w-4 md:w-6 h-3 sm:h-4 md:h-6 border-t-2 sm:border-t-3 md:border-t-4 border-l-2 sm:border-l-3 md:border-l-4 border-primary-800 z-10"></div>
              <div className="absolute top-0 right-0 w-3 sm:w-4 md:w-6 h-3 sm:h-4 md:h-6 border-t-2 sm:border-t-3 md:border-t-4 border-r-2 sm:border-r-3 md:border-r-4 border-primary-800 z-10"></div>
              <div className="absolute bottom-0 left-0 w-3 sm:w-4 md:w-6 h-3 sm:h-4 md:h-6 border-b-2 sm:border-b-3 md:border-b-4 border-l-2 sm:border-l-3 md:border-l-4 border-primary-800 z-10"></div>
              <div className="absolute bottom-0 right-0 w-3 sm:w-4 md:w-6 h-3 sm:h-4 md:h-6 border-b-2 sm:border-b-3 md:border-b-4 border-r-2 sm:border-r-3 md:border-r-4 border-primary-800 z-10"></div>

              <div className="relative h-full w-full transition-colors duration-300 flex items-center justify-center">
                <Image
                  src={cert.image}
                  alt={cert.alt}
                  fill
                  className="object-contain transition-opacity duration-300 group-hover:opacity-90"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1200px) 25vw, 25vw"
                />
              </div>

              {/* Overlay caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-900/90 to-primary-500/10 p-1.5 sm:p-2 md:p-3 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-semibold text-center text-[10px] min-[400px]:text-xs sm:text-sm leading-tight">
                  {cert.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal with Zoom Functionality */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 sm:bg-black/80 z-50 flex items-center justify-center p-0 sm:p-4"
          onClick={closeModal}
        >
          <div className="w-full h-full sm:h-auto sm:max-h-[90vh] rounded-none sm:rounded-xl overflow-hidden shadow-2xl relative flex items-center justify-center">
            {/* Zoom Controls */}
            <div className="absolute top-4 sm:top-5 left-4 sm:left-5 z-20 flex flex-col gap-2 sm:gap-2">
              <button
                className="bg-white/90 hover:bg-white text-black rounded-full w-8 h-8 sm:w-8 sm:h-8 flex items-center justify-center shadow-lg transition-all duration-200 hover:shadow-xl pointer-events-auto"
                onClick={(e) => {
                  e.stopPropagation();
                  handleZoomIn();
                }}
                title="Zoom In"
              >
                <Plus className="w-4 sm:w-5 h-4 sm:h-5" />
              </button>
              <button
                className="bg-white/90 hover:bg-white text-black rounded-full w-8 h-8 sm:w-8 sm:h-8 flex items-center justify-center shadow-lg transition-all duration-200 hover:shadow-xl pointer-events-auto"
                onClick={(e) => {
                  e.stopPropagation();
                  handleZoomOut();
                }}
                title="Zoom Out"
              >
                <Minus className="w-4 sm:w-5 h-4 sm:h-5" />
              </button>
              <button
                className="bg-white/90 text-[11px] sm:text-[13px] font-bold hover:bg-white text-black rounded-full w-8 h-8 sm:w-8 sm:h-8 flex items-center justify-center shadow-lg transition-all duration-200 hover:shadow-xl pointer-events-auto"
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
              className="absolute top-4 sm:top-5 right-4 sm:right-5 z-20 bg-white/90 hover:bg-white text-black rounded-full w-8 h-8 sm:w-8 sm:h-8 flex items-center justify-center shadow-lg transition-all duration-200 hover:shadow-xl pointer-events-auto"
              onClick={closeModal}
              title="Close"
            >
              <X className="w-4 sm:w-5 h-4 sm:h-5" />
            </button>

            {/* Zoom Level Indicator */}
            <div className="absolute bottom-6 sm:bottom-5 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-5 z-20 bg-black/60 sm:bg-white/90 text-white sm:text-black px-4 sm:px-3 py-1.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium shadow-lg pointer-events-none backdrop-blur-sm sm:backdrop-blur-none">
              {Math.round(zoomLevel * 100)}%
            </div>

            {/* Image Container */}
            <div
              className="h-full sm:h-[90vh] w-full relative overflow-hidden cursor-grab active:cursor-grabbing touch-none flex items-center justify-center"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onWheel={handleWheel}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="w-full h-full sm:h-full transition-transform duration-200 ease-out flex items-center justify-center"
                style={{
                  transform: `scale(${zoomLevel}) translate(${panPosition.x / zoomLevel}px, ${panPosition.y / zoomLevel}px)`,
                  cursor:
                    zoomLevel > 1
                      ? isDragging
                        ? "grabbing"
                        : "grab"
                      : "default",
                }}
              >
                <div className="relative w-full h-[80vh] sm:h-full">
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
        </div>
      )}
    </div>
  );
};

export default OurCertification;
