"use client";

import Image from "next/image";
import React, { useState } from "react";
import ImagePreviewModal from "@/components/ImagePreviewModal";

const OurCertification = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>("");

  const certificates = [
    {
      id: 1,
      image: "/certificate/FssaiCertificate.webp",
      title: "FSSAI Certificate",
      alt: "FSSAI Food Safety Certificate",
    },
    {
      id: 2,
      image: "/certificate/HalalCertificate1.webp",
      title: "Halal Registration Certificate 1",
      alt: "Halal Registration Certificate 1",
    },
    {
      id: 3,
      image: "/certificate/HalalCertificate2.webp",
      title: "Halal Registration Certificate 2",
      alt: "Halal Registration Certificate 2",
    },
    {
      id: 4,
      image: "/certificate/ImportExportCertificate.webp",
      title: "Import Export Certificate",
      alt: "Import Export Certificate",
    },
    {
      id: 5,
      image: "/certificate/ISOCertificate.webp",
      title: "ISO 9001:2015",
      alt: "ISO 9001:2015 Quality Management Certificate",
    },
  ];

  const openModal = (image: string, title: string) => {
    setSelectedImage(image);
    setSelectedTitle(title);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedTitle("");
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="mb-8 sm:mb-10 md:mb-12 flex gap-3 sm:gap-4">
        <div className="bg-primary-500 h-22 sm:h-28 md:h-35 lg:h-26 w-1 sm:w-1.5 lg:w-1.5 rounded-2xl flex-shrink-0"></div>
        <div className="mt-1 sm:mt-2">
          <h1 className="text-base sm:text-base md:text-lg lg:text-2xl font-bold text-gray-900 mb-1 sm:mb-1.5">
            Our Certification
          </h1>
          <p
            className="text-sm sm:text-sm md:text-sm lg:text-base text-primary-500 font-medium leading-relaxed"
            style={{ fontFamily: "Poppins-medium" }}
          >
            We are proud to hold certifications that reflect our commitment to
            quality, safety,
            <br className="hidden md:block" />
            and excellence.
          </p>
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6 md:gap-6 px-1 sm:px-0">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="group cursor-pointer transform transition-transform duration-300 hover:scale-[1.02] sm:hover:scale-105"
            onClick={() => openModal(cert.image, cert.title)}
          >
            <div className="relative h-[200px] min-[400px]:h-[240px] sm:h-[300px] md:h-[280px] rounded-lg sm:rounded-xl overflow-hidden shadow-md sm:shadow-lg border-[1px] sm:border-2 md:border-4 border-primary-500 bg-primary-50 p-1.5 sm:p-1.5 md:p-2.5">
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

      {/* Dynamic zoom-and-pan modal component */}
      <ImagePreviewModal
        image={selectedImage}
        title={selectedTitle}
        onClose={closeModal}
      />
    </div>
  );
};

export default OurCertification;
