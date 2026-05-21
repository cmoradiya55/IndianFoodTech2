"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import AllIconComponent from "../../public/AllIconComponent";
import { MessageCircle, X } from "lucide-react";

export default function FloatingChatMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 250); // 250ms grace period allows the user to cross the gap smoothly
  };

  return (
    <div
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-10 z-50 w-14 h-14"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Viber - Pops out to the LEFT */}
      <div
        className={`absolute inset-0 transition-all duration-300 ease-out z-10 ${isOpen
          ? "-translate-x-16 sm:-translate-x-18 opacity-100 scale-100"
          : "translate-x-0 opacity-0 scale-50 pointer-events-none"
          }`}
      >
        <Link
          href="viber://chat?number=%2B919714899711"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on Viber"
          className="absolute top-1 left-1 w-12 h-12 bg-[#6f3faa] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(115,96,242,0.5)] hover:shadow-[0_0_25px_rgba(115,96,242,0.8)] hover:scale-110 active:scale-95 transition-all duration-200"
          onClick={() => setIsOpen(false)}
        >
          <AllIconComponent icon="viberIcon" className="w-7 h-7 text-white" />
        </Link>
      </div>

      {/* WhatsApp - Pops out to the TOP */}
      <div
        className={`absolute inset-0 transition-all duration-300 ease-out z-10 ${isOpen
          ? "-translate-y-16 sm:-translate-y-18 opacity-100 scale-100"
          : "translate-y-0 opacity-0 scale-50 pointer-events-none"
          }`}
      >
        <Link
          href="https://wa.me/919714899711"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="absolute top-1 left-1 rounded-full shadow-[0_0_15px_rgba(37,211,102,0.4)] hover:shadow-[0_0_25px_rgba(37,211,102,0.7)] hover:scale-110 active:scale-95 transition-all duration-200"
          onClick={() => setIsOpen(false)}
        >
          <AllIconComponent icon="whatsAppIcon" className="w-12 h-12" />
        </Link>
      </div>

      {/* Main Chat Icon */}
      <button
        aria-label="Contact Options"
        onClick={() => setIsOpen(!isOpen)}
        className="absolute inset-0 w-14 h-14 bg-primary-600 border-2 border-white text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(139,195,74,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 z-20"
      >
        <div
          className={`transition-transform duration-300 absolute ${isOpen ? "rotate-90 opacity-0 scale-0" : "rotate-0 opacity-100 scale-100"
            }`}
        >
          <MessageCircle className="w-6 h-6" />
        </div>
        <div
          className={`transition-transform duration-300 absolute ${isOpen ? "rotate-0 opacity-100 scale-100" : "-rotate-90 opacity-0 scale-0"
            }`}
        >
          <X className="w-6 h-6" />
        </div>
      </button>
    </div>
  );
}
