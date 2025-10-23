"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ContactForm from "../../Component/ContactComponent/ContactForm";

export default function ContactModal({ firstOpenDelay = 20000, reopenDelay = 80000}) {
    const [showContact, setShowContact] = useState(false);
    const [openCount, setOpenCount] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // First open after "firstOpenDelay"
        const timer = setTimeout(() => {
            setShowContact(true);
            setOpenCount(1);
        }, firstOpenDelay);

        return () => clearTimeout(timer);
    }, [firstOpenDelay]);

    const handleClose = () => {
        setShowContact(false);

        // If first close, schedule second open after "reopenDelay"
        if (openCount === 1) {
            const timer = setTimeout(() => {
                setShowContact(true);
                setOpenCount(2); // second and final open
            }, reopenDelay);

            return () => clearTimeout(timer);
        }
    };

    const images = [
        {
            url: "/privateLabel/certified peanut butter.webp",
            alt: "certified peanut butter"
        },
        {
            url: "/privateLabel/chocolate peanut butter.webp",
            alt: "chocolate peanut butter"
        },
        {
            url: "/privateLabel/crunchy beanut butter.webp",
            alt: "crunchy peanut butter"
        },
        {
            url: "/privateLabel/export peanut butter.webp",
            alt: "export peanut butter"
        },
        {
            url: "/privateLabel/healthy peanut butter.webp",
            alt: "healthy peanut butter"
        },
        {
            url: "/privateLabel/manufacturer peanut butter.webp",
            alt: "manufacturer peanut butter"
        },
        {
            url: "/privateLabel/premium peanut butter.webp",
            alt: "premium peanut butter"
        },
        {
            url: "/privateLabel/private label peanut butter.webp",
            alt: "private label peanut butter"
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 8000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <>
            {showContact && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[9998]">
                    <div className="p-5 w-full md:max-w-[900px] max-w-full relative">
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-[30px] right-[40px] text-gray-400 hover:text-gray-600"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 bg-white p-6 rounded-lg shadow-lg ">
                            <div className="hidden md:block  h-full">
                                <Image
                                    src={images[currentIndex].url}
                                    alt={images[currentIndex].alt}
                                    width={800}
                                    height={600}
                                    className="w-full h-full  object-cover text-amber-700"
                                    priority
                                />
                            </div>
                            {/* Contact Form with compact inputs */}
                            <div className="space-y-3">
                                <ContactForm isShadow={false} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
