"use client";

import { useParams, useRouter } from "next/navigation";
import { AllProductsList } from "@/utils/ProductList";
import Image from "next/image";
import React from "react";
import { packagingData } from "@/utils/ContainerPackageData";
import AllIconComponent from "../../../../public/AllIconComponent";
import { Copy, Share2 } from "lucide-react";
import Link from "next/link";

const ProductDetails = () => {
  const params = useParams();
  const router = useRouter();
  const productId = params.product as string;
  const [showShareMenu, setShowShareMenu] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Find the product by ID across all categories
  const product = AllProductsList.flatMap((category) => category.products).find(
    (product) => product.id === productId,
  );

  if (!product) {
    return (
      <div className="min-h-screen bg-[#e9e8ed] flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
            Product not found
          </h1>
          <button
            onClick={() => router.push("/products")}
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
      title: "Packaging Specifications",
      description:
        "We design our packaging to keep your product safe during transport while maximizing space efficiency.",
      icon: <AllIconComponent icon="packagingSpecIcon" />,
    },
    {
      title: "Container Loading",
      description:
        "Our loading patterns are optimized to give maximum efficiency for both 20 ft and 40 ft containers.",
      icon: <AllIconComponent icon="containerLoadingIcon" />,
    },
    {
      title: "Weight Considerations",
      description:
        "Gross weight includes packaging materials. Net weight is the actual peanut butter inside.",
      icon: <AllIconComponent icon="weightConsiderationIcon" />,
    },
  ];

  const handleExploreDetails = () => {
    router.push("/products");
  };

  return (
    <div className="bg-[#e9e8ed] min-h-screen px-3 sm:px-4 md:px-28 py-8 md:py-8 lg:py-5">
      <div
        className="max-w-7xl mx-auto px-1 relative"
        style={{ fontFamily: "NotoSerif-semibold" }}
      >
        {/* Full Image and Details Container */}
        <div className="relative mb-4 sm:mb-6 lg:min-h-[480px] xl:min-h-[580px]">
          {/* Mobile/Tablet Layout - Stacked */}
          <div className="block lg:hidden">
            {/* Product Image */}
            <div className="flex justify-center mb-8 sm:mb-12">
              <div className="relative w-[220px] h-[300px] sm:w-[260px] sm:h-[350px] md:w-[300px] md:h-[400px] rounded-3xl sm:rounded-[40px] overflow-hidden">
                <Image
                  src={product.cardImage}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  fill
                />
              </div>
            </div>
          </div>

          {/* Desktop Layout - Side by Side (lg+) - UNCHANGED */}
          <div className="hidden lg:block">
            {/* Left Side - Image (Absolute positioned) */}
            <div className="absolute left-[30px] top-10 z-10 w-full">
              <div className="relative producPageMainImage rounded-l-[40px] overflow-hidden">
                <Image
                  src={product.cardImage}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  fill
                />
              </div>
            </div>
          </div>

          {/* Right Side - Product Info */}
          <div className="relative ml-auto producPageRightSection bg-white rounded-[40px] shadow-lg z-30 flex flex-col lg:min-h-[400px] xl:min-h-[500px]">
            {/* Product Name */}
            <h1 className="text-sm md:text-lg lg:text-xl font-bold text-primary-500 mb-4">
              {product.name}
            </h1>

            {/* Ingredients */}
            {product.ingredients && (
              <div className="mb-3 flex flex-col sm:flex-row items-start sm:items-center bg-[#EDEDED] border border-[#D2D1D6] rounded-lg p-2 lg:p-3 gap-3">
                <h2 className="text-sm font-semibold text-[#00280C] bg-[#D4DBC4] rounded-lg px-3 py-1 flex-shrink-0">
                  Ingredients:
                </h2>
                <p
                  className="text-black font-semibold text-sm sm:text-sm md:text-sm"
                  style={{ fontFamily: "Poppins-medium" }}
                >
                  {product.ingredients}
                </p>
              </div>
            )}

            {/* Nutrition */}
            {product.nutrition && (
              <div className="mb-3">
                <div className="bg-[#EDEDED] border border-[#D2D1D6] rounded-lg p-3">
                  {/* Nutrition Header */}
                  <div className="flex items-center mb-3">
                    <h2 className="text-sm sm:text-sm md:text-sm font-semibold text-[#00280C] bg-[#D4DBC4] rounded-lg px-3 py-1">
                      Nutrition (per 2 tbsp – 32 g):
                    </h2>
                  </div>

                  {/* Nutrition Values */}
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="grid grid-cols-2 gap-3">
                      {product.nutrition.includes("Calories") && (
                        <div className="text-center">
                          <div className="text-sm md:text-sm font-bold text-primary-500">
                            {product.nutrition.match(/Calories (\d+)/)?.[1] ||
                              "N/A"}
                          </div>
                          <div className="text-xs md:text-xs text-gray-600">
                            Calories
                          </div>
                        </div>
                      )}

                      {product.nutrition.includes("Fat") && (
                        <div className="text-center">
                          <div className="text-xs md:text-sm font-bold text-primary-500">
                            {product.nutrition.match(/Fat (\d+g)/)?.[1] ||
                              "N/A"}
                          </div>
                          <div className="text-xs md:text-xs text-gray-600">
                            Fat
                          </div>
                        </div>
                      )}

                      {product.nutrition.includes("Carbs") && (
                        <div className="text-center">
                          <div className="text-xs md:text-sm font-bold text-primary-500">
                            {product.nutrition.match(/Carbs (\d+g)/)?.[1] ||
                              "N/A"}
                          </div>
                          <div className="text-xs md:text-xs text-gray-600">
                            Carbs
                          </div>
                        </div>
                      )}

                      {product.nutrition.includes("Protein") && (
                        <div className="text-center">
                          <div className="text-xs md:text-sm font-bold text-primary-500">
                            {product.nutrition.match(/Protein (\d+g)/)?.[1] ||
                              "N/A"}
                          </div>
                          <div className="text-xs md:text-xs text-gray-600">
                            Protein
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Full nutrition text */}
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <p
                        className="text-black font-medium text-center text-xs md:text-xs"
                        style={{ fontFamily: "Poppins-medium" }}
                      >
                        {product.nutrition}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Available Sizes */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-3">
                <div className="bg-[#EDEDED] border border-[#D2D1D6] rounded-lg p-3">
                  <div className="flex flex-col sm:flex-row items-start gap-3">
                    <div className="bg-[#D4DBC4] rounded-lg px-3 py-1 flex-shrink-0">
                      <h2 className="text-xs md:text-sm font-semibold text-[#00280C]">
                        Available Sizes
                      </h2>
                    </div>
                    <div className="flex-1">
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
                        {product.sizes.map((size, index) => (
                          <div
                            key={index}
                            className="text-black font-semibold text-xs md:text-xs"
                            style={{ fontFamily: "Poppins-medium" }}
                          >
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
                    <div className="bg-[#D4DBC4] rounded-lg px-3 py-1 flex-shrink-0">
                      <h2 className="text-xs md:text-sm font-semibold text-[#00280C]">
                        Certifications
                      </h2>
                    </div>
                    <div className="flex-1">
                      <div className="space-y-1">
                        {product.certifications.map((cert, index) => (
                          <div
                            key={index}
                            className="text-primary-500 font-semibold text-xs md:text-xs"
                            style={{ fontFamily: "Poppins-medium" }}
                          >
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
            <div className="mt-5 lg:mt-auto space-y-3">
              <button
                className="w-full bg-[#7FB432] hover:bg-[#6fa028] text-white font-normal py-2 md:py-2.5 px-4 rounded-full transition-colors duration-300 text-xs md:text-sm"
                style={{
                  boxShadow: "0 4px 12px rgba(127, 180, 50, 0.3)",
                  fontFamily: "Poppins-medium",
                }}
              >
                Request Sample
              </button>

              <button
                className="w-full bg-black text-white font-normal py-2 md:py-2.5 px-4 rounded-full transition-colors duration-300 text-xs md:text-sm mb-2"
                style={{
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                  fontFamily: "Poppins-medium",
                }}
              >
                Get a Quote
              </button>

              {/* Premium Social Sharing Section */}
              <div className="pt-2 border-t border-gray-100 flex flex-col items-center">
                <div className="flex items-center justify-between w-full">
                  <span className="text-xs text-gray-500 font-semibold" style={{ fontFamily: "Poppins-semibold" }}>
                    Share Product
                  </span>
                  <div className="flex items-center gap-1.5">
                    <div className={`flex items-center gap-1 transition-all duration-500 origin-right ${showShareMenu ? "opacity-100 max-w-[240px] translate-x-0" : "opacity-0 max-w-0 translate-x-4 overflow-hidden pointer-events-none"}`}>
                      <button
                        onClick={handleCopyLink}
                        className="px-2 py-1 rounded-full border border-gray-100 bg-gray-50 text-gray-600 hover:bg-primary-50 hover:text-primary-600 hover:border-primary-200 transition-all duration-200 text-[10px] font-bold"
                      >
                        <Copy width={14} height={14} />
                      </button>
                      <Link
                        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(product.name + " - " + (typeof window !== "undefined" ? window.location.href : ""))}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-full border border-gray-100 bg-gray-50 text-emerald-600 hover:bg-emerald-50 hover:border-emerald-200 transition-all duration-200"
                        title="Share on WhatsApp"
                      >
                        <AllIconComponent icon="whatsAppIcon" width={14} height={14} className="fill-current" />
                      </Link>
                      <Link
                        href={`viber://forward?text=${encodeURIComponent(product.name + " - " + (typeof window !== "undefined" ? window.location.href : ""))}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-full border border-gray-100 bg-gray-50 text-violet-600 hover:bg-violet-50 hover:border-violet-200 transition-all duration-200"
                        title="Share on Viber"
                      >
                        <AllIconComponent icon="viberIcon" width={14} height={14} className="fill-current" />
                      </Link>
                      <Link
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-full border border-gray-100 bg-gray-50 text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition-all duration-200"
                        title="Share on Facebook"
                      >
                        <AllIconComponent icon="facebookIcon" width={14} height={14} className="fill-current" />
                      </Link>
                      <Link
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(product.name)}&url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-full border border-gray-100 bg-gray-50 text-sky-500 hover:bg-sky-50 hover:border-sky-200 transition-all duration-200"
                        title="Share on X"
                      >
                        <AllIconComponent icon="xIcon" width={14} height={14} className="fill-current" />
                      </Link>
                      <Link
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-full border border-gray-100 bg-gray-50 text-blue-700 hover:bg-blue-50 hover:border-blue-200 transition-all duration-200"
                        title="Share on LinkedIn"
                      >
                        <AllIconComponent icon="linkedinIcon" width={14} height={14} className="fill-current" />
                      </Link>

                    </div>
                    <button
                      onClick={() => setShowShareMenu(!showShareMenu)}
                      className={`p-1.5 rounded-full border transition-all duration-300 ${showShareMenu ? "bg-primary-500 border-primary-500 text-white rotate-90" : "border-gray-200 bg-white text-gray-400 hover:text-primary-500 hover:border-primary-300 animate-pulse"}`}
                    >
                      <Share2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="p-2 sm:p-4 bg-white mb-8 sm:mb-12 md:mb-16 lg:mb-14 xl:mb-14 rounded-2xl">
          <h2 className="text-xl text-black text-center mb-2">
            Product Discription
          </h2>
          <p
            className="text-gray-700 text-xs md:text-sm px-4 pb-4"
            style={{ fontFamily: "Poppins-medium" }}
          >
            {product.detailedDescription}
          </p>
        </div>

        {/* Packaging Details Section */}
        <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-10 flex gap-3 sm:gap-4">
          <div className="bg-primary-500 h-24 sm:h-22 md:h-28 w-1.5 rounded-2xl flex-shrink-0"></div>
          <div className="mt-1 sm:mt-2">
            <h1 className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold text-gray-900 mb-2">
              Packaging Details
            </h1>
            <p
              className="text-xs sm:text-sm md:text-base text-primary-500 font-medium leading-relaxed"
              style={{ fontFamily: "Poppins-medium" }}
            >
              Here are the complete specifications for our carton and tray
              packaging. The details
              <br className="hidden md:block" />
              include dimensions, weight, and how many boxes or trays can fit
              into containers.
            </p>
          </div>
        </div>

        {/* Container Table */}
        <div className="overflow-x-auto rounded-lg sm:rounded-2xl mb-4 sm:mb-6 md:mb-8 lg:mb-10">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="bg-primary-500 text-white text-[10px] sm:text-[11px] md:text-xs">
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
                  Net Weight <br className="hidden sm:block" />
                  (Kgs)
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
                  className="bg-[#D4DBC4] text-[10px] sm:text-[11px] md:text-xs"
                  style={{
                    fontFamily: "Poppins-medium",
                    letterSpacing: "0.25px",
                  }}
                >
                  <td className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 font-medium text-gray-900 text-center">
                    {item.packSize}
                  </td>
                  <td className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 text-gray-700 text-center">
                    {item.dimension}
                  </td>
                  <td className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 text-gray-700 text-center">
                    {item.grossWeight}
                  </td>
                  <td className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 text-gray-700 text-center">
                    {item.netWeight}
                  </td>
                  <td className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 text-gray-700 text-center">
                    {item.boxes20ft}
                  </td>
                  <td className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 text-gray-700 text-center">
                    {item.trays20ft}
                  </td>
                  <td className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 text-gray-700 text-center">
                    {item.boxes40ft}
                  </td>
                  <td className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 text-gray-700 text-center">
                    {item.trays40ft}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr
                className="bg-primary-500 text-white text-[10px] sm:text-[11px] md:text-xs"
                style={{
                  fontFamily: "Poppins-medium",
                  letterSpacing: "0.25px",
                }}
              >
                <td
                  className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 font-medium text-center"
                  colSpan={8}
                >
                  All sizes and weights are approximate and may vary slightly
                  based on production.
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6 px-0 sm:px-4 md:px-8 lg:px-8 mt-4 sm:mt-6 md:mt-8 lg:mt-10 mb-6 sm:mb-8 md:mb-16 lg:mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#F6F6F6] border-[#D2D1D6] border rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg py-3 sm:py-4 md:py-6 px-3 min-[400px]:px-4 sm:px-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="gap-3 sm:gap-4 flex flex-row sm:flex-col items-center justify-start sm:justify-center">
                {/* Green Circle Icon */}
                <div className="w-12 sm:w-16 md:w-[72px] h-12 sm:h-16 md:h-[72px] bg-gradient-to-b from-primary-400 to-primary-600 rounded-xl sm:rounded-2xl flex-shrink-0 shadow-md flex items-center justify-center">
                  <div className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10">
                    {React.isValidElement(stat.icon)
                      ? React.cloneElement(
                        stat.icon as React.ReactElement<
                          React.SVGProps<SVGSVGElement>
                        >,
                        {
                          width: "100%",
                          height: "100%",
                        },
                      )
                      : stat.icon}
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1 text-left sm:text-center mt-0 sm:mt-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-0.5 sm:mb-2">
                    {stat.title}
                  </h3>
                  <div
                    className="text-gray-800 text-sm sm:text-sm font-medium leading-relaxed"
                    style={{ fontFamily: "Poppins-medium" }}
                  >
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
          <div className="flex items-center justify-center mb-4 sm:mb-6 md:mb-8">
            <div
              className="bg-[#1D2C00] text-white mt-6 sm:mt-8 md:mt-2 px-6 sm:px-12 md:px-12 lg:px-25 py-2 sm:py-3 md:py-3 lg:py-2 rounded-full text-xs sm:text-base md:text-base lg:text-lg font-normal text-center"
              style={{ fontFamily: "Poppins-regular" }}
            >
              Recommended Products
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-6">
            {(() => {
              // Find the current product's category
              const currentCategory = AllProductsList.find((category) =>
                category.products.some((p) => p.id === productId),
              );

              if (!currentCategory) return null;

              // Get other products from the same category (excluding current product)
              const similarProducts = currentCategory.products
                .filter((p) => p.id !== productId)
                .slice(0, 3); // Take only first 3 products

              return similarProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl sm:rounded-3xl shadow-md sm:shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border-[1px] border-[#D2D1D6] flex flex-row sm:flex-col items-center sm:items-stretch h-auto sm:h-full p-2 sm:p-0"
                >
                  {/* Product Image */}
                  <div className="relative shrink-0 overflow-hidden w-28 h-28 min-[400px]:w-32 min-[400px]:h-32 sm:w-[200px] md:w-[216px] sm:h-[180px] md:h-[180px] rounded-xl sm:rounded-2xl ml-2 sm:mx-auto mt-0 sm:mt-6 md:mt-8 border border-gray-100 sm:border-none">
                    <Image
                      src={product.cardImage}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Product Content */}
                  <div className="px-3 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 flex flex-col grow h-full justify-center sm:justify-start">
                    {/* Header with fixed min-height for 2 lines */}
                    <div className="min-h-0 sm:min-h-14 md:min-h-18 flex items-center justify-start sm:justify-center mb-1 sm:mb-1.5">
                      <h3 className="text-sm min-[400px]:text-base sm:text-xl font-bold text-gray-900 text-left sm:text-center leading-tight line-clamp-2 sm:line-clamp-none">
                        {product.name}
                      </h3>
                    </div>

                    <p
                      className="text-[#5D6079] text-[10px] min-[400px]:text-[11px] sm:text-sm leading-relaxed mb-2.5 sm:mb-5 md:mb-6 text-left sm:text-center grow line-clamp-2 sm:line-clamp-none"
                      style={{ fontFamily: "Poppins-medium" }}
                    >
                      {product.description}
                    </p>

                    {/* Explore Button */}
                    <button
                      onClick={() => router.push(`/products/${product.id}`)}
                      className="w-[120px] min-[400px]:w-[130px] sm:w-full bg-[#7FB432] hover:bg-[#6fa028] shadow-md sm:shadow-lg text-white font-normal py-1.5 sm:py-2 px-3 sm:px-6 rounded-full transition-colors duration-300 mt-auto text-[10px] min-[400px]:text-[11px] sm:text-base self-start sm:self-auto"
                      style={{
                        boxShadow: "0 4px 12px rgba(127, 180, 50, 0.3)",
                        fontFamily: "Poppins-medium",
                      }}
                    >
                      Explore Details
                    </button>
                  </div>
                </div>
              ));
            })()}
          </div>

          {/* View All Products Button */}
          <div className="flex justify-center mt-4 sm:mt-6 md:mt-8">
            <button
              onClick={() => handleExploreDetails()}
              className="bg-[#7FB432] hover:bg-[#6fa028] text-white font-normal py-2 sm:py-2 px-10 sm:px-22 rounded-full transition-colors duration-300 mt-auto text-[12px] sm:text-[14px]"
              style={{
                boxShadow: "0 4px 12px rgba(127, 180, 50, 0.3)",
                fontFamily: "Poppins-medium",
              }}
            >
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
