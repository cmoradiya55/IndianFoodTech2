"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import SampleRequestComponent from "../../Component/SampleRequestComponent/SampleRequestComponent";
import { ChevronDown, Mail, Menu, Package, Phone, X } from "lucide-react";
import AllIconComponent from "../../public/AllIconComponent";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);
  const pathname = usePathname();

  const isRouteActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  const navLinkClass = (active: boolean) =>
    active
      ? "bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium"
      : "text-gray-800 px-4 py-2 text-sm font-medium hover:text-primary-500 transition-colors";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  const openSampleModal = () => {
    setIsSampleModalOpen(true);
  };

  const closeSampleModal = () => {
    setIsSampleModalOpen(false);
  };

  return (
    <header className="bg-white sticky top-0 z-50">
      {/* Top Bar */}
      <div
        className="bg-primary-500 text-white py-[5px]"
        style={{ fontFamily: "Poppins-regular" }}
      >
        <div className="container-custom px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-2 sm:gap-0">
            {/* Phone */}
            <div className="flex items-center space-x-2 order-1 sm:order-1">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm">+91 9714899711</span>
            </div>

            {/* Social Media */}
            <div className="flex items-center space-x-2 order-3 sm:order-2">
              <span className="hidden sm:inline text-xs sm:text-sm">
                We are here also:
              </span>
              <span className="sm:hidden text-xs">Follow us:</span>
              <Link
                href="https://www.facebook.com/p/Indian-foodtech-100083285323445/"
                target="_blank"
                className="text-white hover:text-primary-200 transition-colors"
              >
                <AllIconComponent
                  icon="facebookIcon"
                  width="16"
                  height="16"
                  className="sm:w-5 sm:h-5"
                  color="white"
                />
              </Link>
              <Link
                href="https://in.linkedin.com/in/indian-foodtech-b5633829a"
                target="_blank"
                className="text-white hover:text-primary-200 transition-colors"
              >
                <AllIconComponent
                  icon="simpleLinkedinIcon"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
              </Link>
            </div>

            {/* Email */}
            {/* <div className="flex items-center space-x-2 order-2 sm:order-3">
              <Link
                href="mailto:office@indianfoodtech.in"
                className="text-white hover:text-primary-200 flex space-x-2 transition-colors"
              >
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5" />
                <div className="hover:underline text-xs sm:text-sm truncate max-w-[150px] sm:max-w-none">
                  office@indianfoodtech.in
                </div>
              </Link>
            </div> */}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div
        className="bg-[#F6F6F6] py-2 shadow-lg"
        style={{ fontFamily: "NotoSerif-semibold" }}
      >
        <div className="container-custom px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-40 h-10 sm:w-48 md:w-60 sm:h-10 md:h-12 relative">
                <Image
                  src="/logoBlack.webp"
                  alt="Indian Food Tech"
                  width={240}
                  height={60}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Navigation - Desktop */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              <Link href="/" className={navLinkClass(isRouteActive("/"))}>
                Home
              </Link>
              <Link
                href="/about-us"
                className={navLinkClass(isRouteActive("/about-us"))}
              >
                About Us
              </Link>
              <div
                className="relative"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <Link
                  href="/products"
                  className={
                    navLinkClass(isRouteActive("/products")) +
                    " flex items-center space-x-1"
                  }
                >
                  <span>Products</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${isProductsOpen ? "rotate-180" : ""}`}
                  />
                </Link>
                {isProductsOpen && (
                  <div className="absolute top-8 left-0 w-58 bg-white rounded-lg shadow-xl shadow-black/10 border border-gray-200 py-4 z-50">
                    <Link
                      href="/products?category=peanut-butter"
                      scroll={false}
                      className="block px-6 py-4 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Peanut Butter
                    </Link>
                    <Link
                      href="/products?category=nut-butters"
                      scroll={false}
                      className="block px-6 py-4 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Nut Butters
                    </Link>
                    <Link
                      href="/products?category=roasted-peanuts"
                      scroll={false}
                      className="block px-6 py-4 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Roasted Peanuts
                    </Link>
                    <Link
                      href="/products?category=spread"
                      scroll={false}
                      className="block px-6 py-4 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Spread
                    </Link>
                  </div>
                )}
              </div>
              <Link
                href="/private-labels"
                className={navLinkClass(isRouteActive("/private-labels"))}
              >
                Private Labels
              </Link>
              <Link
                href="/blog"
                className={navLinkClass(isRouteActive("/blog"))}
              >
                Blog
              </Link>
              <Link
                href="/contact-us"
                className={navLinkClass(isRouteActive("/contact-us"))}
              >
                Contact Us
              </Link>
            </nav>

            {/* Sample Request Button - Desktop & Tablet */}
            <button
              className="hidden sm:flex items-center gap-1.5 relative overflow-hidden bg-black text-white px-4 lg:px-6 py-2 lg:py-2.5 rounded-full text-xs sm:text-sm font-bold
                shadow-[0_5px_0_0_#374151]
                hover:shadow-[0_2px_0_0_#374151] hover:translate-y-[3px]
                active:shadow-none active:translate-y-[5px]
                transition-all duration-100 cursor-pointer"
              onClick={openSampleModal}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 w-2/5 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
                style={{ animation: "btnShine 3s ease-in-out infinite" }}
              />
              <Package className="w-3.5 h-3.5 shrink-0 relative z-10" />
              <span className="hidden md:inline relative z-10">Sample Request</span>
            </button>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                className="text-gray-700 hover:text-primary-500 transition-colors p-1"
                onClick={toggleMenu}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-2 pt-4">
                <Link
                  href="/"
                  className={
                    isRouteActive("/")
                      ? "bg-primary-500 text-white px-4 py-2 rounded-full font-medium text-center"
                      : "text-gray-700 hover:text-primary-500 font-medium transition-colors px-4 py-2 text-center"
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about-us"
                  className={
                    isRouteActive("/about-us")
                      ? "bg-primary-500 text-white px-4 py-3 rounded-full font-medium text-center"
                      : "text-gray-700 hover:text-primary-500 font-medium transition-colors px-4 py-3 text-center"
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <div className="space-y-2">
                  <button
                    onClick={toggleProducts}
                    className={
                      (isRouteActive("/products")
                        ? "bg-primary-500 text-white px-4 py-3 rounded-full font-medium"
                        : "text-gray-700 hover:text-primary-500 font-medium transition-colors px-4 py-3") +
                      " flex items-center justify-center space-x-1 w-full"
                    }
                  >
                    <span>Products</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${isProductsOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isProductsOpen && (
                    <div className="pl-4 space-y-2 bg-gray-50 rounded-lg py-2">
                      <Link
                        href="/products?category=peanut-butter"
                        scroll={false}
                        className="block text-gray-600 hover:text-primary-500 transition-colors py-2 px-4"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Peanut Butter
                      </Link>
                      <Link
                        href="/products?category=nut-butters"
                        scroll={false}
                        className="block text-gray-600 hover:text-primary-500 transition-colors py-2 px-4"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Nut Butter
                      </Link>
                      <Link
                        href="/products?category=roasted-peanuts"
                        scroll={false}
                        className="block text-gray-600 hover:text-primary-500 transition-colors py-2 px-4"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Roasted Peanuts
                      </Link>
                      <Link
                        href="/products?category=spread"
                        scroll={false}
                        className="block text-gray-600 hover:text-primary-500 transition-colors py-2 px-4"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Spread
                      </Link>
                    </div>
                  )}
                </div>
                <Link
                  href="/private-labels"
                  className={
                    isRouteActive("/private-labels")
                      ? "bg-primary-500 text-white px-4 py-3 rounded-full font-medium text-center"
                      : "text-gray-700 hover:text-primary-500 font-medium transition-colors px-4 py-3 text-center"
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Private Labels
                </Link>
                <Link
                  href="/blog"
                  className={
                    isRouteActive("/blog")
                      ? "bg-primary-500 text-white px-4 py-3 rounded-full font-medium text-center"
                      : "text-gray-700 hover:text-primary-500 font-medium transition-colors px-4 py-3 text-center"
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/contact-us"
                  className={
                    isRouteActive("/contact-us")
                      ? "bg-primary-500 text-white px-4 py-3 rounded-full font-medium text-center"
                      : "text-gray-700 hover:text-primary-500 font-medium transition-colors px-4 py-3 text-center"
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
                <button
                  className="flex items-center justify-center gap-2 relative overflow-hidden bg-black text-white px-6 py-3 rounded-full text-sm font-bold w-full sm:hidden
                    shadow-[0_5px_0_0_#374151]
                    hover:shadow-[0_2px_0_0_#374151] hover:translate-y-[3px]
                    active:shadow-none active:translate-y-[5px]
                    transition-all duration-100"
                  onClick={() => {
                    openSampleModal();
                    setIsMenuOpen(false);
                  }}
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 w-2/5 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
                    style={{ animation: "btnShine 3s ease-in-out infinite" }}
                  />
                  <Package className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">Sample Request</span>
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>

      {/* Sample Request Modal */}
      {isSampleModalOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-9999 p-8 sm:p-4"
          onClick={closeSampleModal}
        >
          <div
            className="bg-white rounded-[20px] sm:rounded-[40px] shadow-xl max-w-[95vw] sm:max-w-[900px] w-full max-h-[95vh] sm:max-h-[95vh] overflow-y-auto mt-4 sm:mt-40 mb-4 sm:mb-40 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeSampleModal}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-white hover:bg-gray-100 text-gray-600 hover:text-gray-800 rounded-full p-1.5 sm:p-1.5 shadow-md transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" />
            </button>
            <SampleRequestComponent />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
