"use client";

import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface ImagePreviewModalProps {
  image: string | null;
  title: string;
  onClose: () => void;
}

const ImagePreviewModal: React.FC<ImagePreviewModalProps> = ({
  image,
  title,
  onClose,
}) => {
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

  // Reset zoom and pan when image changes
  useEffect(() => {
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
    setIsDragging(false);
  }, [image]);

  // Handle body scroll locking
  useEffect(() => {
    if (image) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [image]);

  if (!image) return null;

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
    <div
      className="fixed inset-0 bg-black/95 sm:bg-black/80 z-50 flex items-center justify-center p-0 sm:p-4"
      onClick={onClose}
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
          onClick={onClose}
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
                zoomLevel > 1 ? (isDragging ? "grabbing" : "grab") : "default",
            }}
          >
            <div className="relative w-full h-[80vh] sm:h-full">
              <Image
                src={image}
                alt={title}
                fill
                className="object-contain select-none"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePreviewModal;
