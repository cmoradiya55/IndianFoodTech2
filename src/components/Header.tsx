"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import SampleRequestComponent from "../../Component/SampleRequestComponent/SampleRequestComponent";
import { ChevronDown, ChevronRight, Menu, Package, Phone, X } from "lucide-react";
import AllIconComponent from "../../public/AllIconComponent";
import { motion, AnimatePresence, Variants } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  // Track window scroll to enable shrinking glassmorphic states
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update dynamic --header-height CSS property for main layout offsets
  useEffect(() => {
    if (typeof window === "undefined" || !headerRef.current) return;

    const updateHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty("--header-height", `${height}px`);
      }
    };

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(headerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Prevent background scrolling when Sample Request Modal is open
  useEffect(() => {
    if (isSampleModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSampleModalOpen]);

  const isRouteActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  const navLinkClass = (active: boolean) =>
    active
      ? "bg-primary-50/80 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300"
      : "text-gray-800 hover:text-primary-500 hover:bg-gray-100/50 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300";

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

  // Unified link config
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    {
      name: "Products",
      href: "/products",
      dropdown: [
        { name: "Peanut Butter", href: "/products?category=peanut-butter" },
        { name: "Nut Butters", href: "/products?category=nut-butters" },
        { name: "Roasted Peanuts", href: "/products?category=roasted-peanuts" },
        { name: "Spread", href: "/products?category=spread" },
      ],
    },
    { name: "Private Labels", href: "/private-labels" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  // Framer Motion spring and stagger variants for mobile drawer items
  const menuContainerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const menuItemVariants: Variants = {
    hidden: { opacity: 0, x: 25 },
    show: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 220, damping: 22 },
    },
  };

  return (
    <>
      {/* Frosted Glass Background Bar (fades in on scroll to blur content behind the floating header) */}
      <div
        className={`fixed top-0 left-0 right-0 w-full h-[72px] sm:h-[80px] md:h-[88px] transition-all duration-500 ease-in-out z-40 border-b pointer-events-none ${isScrolled
          ? "bg-transparent border-gray-200/10 opacity-100"
          : "bg-transparent border-transparent opacity-0"
          }`}
      />

      <header
        ref={headerRef}
        className="sticky top-0 z-50 w-full bg-transparent h-[72px] sm:h-[80px] md:h-[88px] pointer-events-none flex items-center select-none"
      >
        {/* Floating Capsule Card (translates slightly on scroll for premium kinetic feedback) */}
        <motion.div
          animate={{
            y: isScrolled ? 4 : 10,
            width: isScrolled ? "calc(100% - 48px)" : "calc(100% - 38px)",
            maxWidth: isScrolled ? "1152px" : "1280px", // max-w-6xl (1152px) vs max-w-7xl (1280px)
          }}
          transition={{
            type: "spring",
            stiffness: 140,
            damping: 20,
          }}
          className={`pointer-events-auto mx-auto rounded-full flex items-center justify-between px-5 sm:px-8 h-[56px] sm:h-[62px] md:h-[68px] border backdrop-blur-lg transition-colors duration-300 w-[calc(100%-38px)] max-w-7xl translate-y-[10px] shadow-lg ${isScrolled
            ? "bg-white/95 border-gray-200/15"
            : "bg-white/90 border-white/30"
            }`}
          style={{ fontFamily: "NotoSerif-semibold" }}
        >
          {/* Left: Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <motion.div
              animate={{
                scale: isScrolled ? 0.92 : 1.0,
              }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 24,
              }}
              className="relative w-32 h-7 sm:w-36 sm:h-8 md:w-44 md:h-9 scale-100"
              style={{ transformOrigin: "left center" }}
            >
              <Image
                src="/logoBlack.webp"
                alt="Indian Food Tech"
                width={200}
                height={50}
                className="w-full h-full object-contain"
                priority
              />
            </motion.div>
          </Link>

          {/* Center: Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const active = isRouteActive(link.href);
              if (link.dropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`${navLinkClass(active)} flex items-center space-x-1.5`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${isProductsOpen ? "rotate-180 text-primary-500" : ""
                          }`}
                      />
                    </Link>

                    <AnimatePresence>
                      {isProductsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 12, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 12, scale: 0.96 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-10 left-1/2 -translate-x-1/2 w-64 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100/80 p-2 z-50"
                        >
                          {link.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              scroll={false}
                              className="group flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-primary-50/50 hover:text-primary-600 rounded-xl transition-all duration-200"
                            >
                              <span className="font-medium">{subItem.name}</span>
                              <ChevronRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-primary-500" />
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={navLinkClass(active)}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center space-x-3 shrink-0">
            {/* Sample Request Button (Premium Dark Capsule matching screenshot) */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="hidden sm:flex items-center gap-2 bg-[#1A1A1A] hover:bg-primary-500 text-white px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold shadow-md cursor-pointer transition-all duration-300"
              onClick={openSampleModal}
            >
              <Package className="w-4 h-4 shrink-0" />
              <span>Sample Request</span>
            </motion.button>

            {/* Mobile menu trigger */}
            <button
              className="lg:hidden text-gray-800 hover:text-primary-500 transition-colors p-2 rounded-full hover:bg-gray-100"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Drawer Menu (Outside header to bypass pointer event containment) */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Deep Glassmorphic Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9999] pointer-events-auto"
            />

            {/* Slide-out Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed right-0 top-0 bottom-0 w-[300px] max-w-[85vw] bg-white/95 backdrop-blur-md shadow-2xl z-[9999] p-6 flex flex-col justify-between border-l border-gray-100 pointer-events-auto"
            >
              <div>
                {/* Drawer Header */}
                <div className="flex justify-between items-center pb-6 border-b border-gray-100">
                  <div className="w-32 h-8 relative">
                    <Image
                      src="/logoBlack.webp"
                      alt="Indian Food Tech"
                      width={180}
                      height={45}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <motion.button
                    whileHover={{ rotate: 90, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-800 transition-colors"
                    aria-label="Close Menu"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Drawer Navigation Links */}
                <motion.nav
                  variants={menuContainerVariants}
                  initial="hidden"
                  animate="show"
                  className="py-6 space-y-2 overflow-y-auto max-h-[calc(100vh-220px)] [&::-webkit-scrollbar]:hidden"
                >
                  {navLinks.map((link) => {
                    const active = isRouteActive(link.href);
                    if (link.dropdown) {
                      return (
                        <motion.div key={link.name} variants={menuItemVariants} className="space-y-1">
                          <button
                            onClick={toggleProducts}
                            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${active
                              ? "bg-primary-50 text-primary-600"
                              : "text-gray-700 hover:bg-gray-50 hover:text-primary-500"
                              }`}
                          >
                            <span>{link.name}</span>
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-300 ${isProductsOpen ? "rotate-180 text-primary-500" : ""
                                }`}
                            />
                          </button>

                          <AnimatePresence initial={false}>
                            {isProductsOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25, ease: "easeInOut" }}
                                className="overflow-hidden bg-gray-50/80 rounded-xl px-2 py-1.5 space-y-1 ml-2 border-l-2 border-primary-100"
                              >
                                {link.dropdown.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    scroll={false}
                                    className="block text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors py-2 px-3 rounded-lg hover:bg-white"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    }

                    return (
                      <motion.div key={link.name} variants={menuItemVariants}>
                        <Link
                          href={link.href}
                          className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${active
                            ? "bg-primary-50 text-primary-600"
                            : "text-gray-700 hover:bg-gray-50 hover:text-primary-500"
                            }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    );
                  })}
                </motion.nav>
              </div>

              {/* Drawer Footer Contact and Action Area */}
              <div className="pt-6 border-t border-gray-100 space-y-5">
                {/* Phone Link */}
                <div className="flex items-center space-x-3 text-gray-600 px-2">
                  <Phone className="w-4 h-4 text-primary-500" />
                  <span className="text-sm font-semibold">+91 9714899711</span>
                </div>

                {/* Social icons */}
                <div className="flex items-center space-x-4 px-2">
                  <span className="text-xs text-gray-400">Follow us:</span>
                  <Link
                    href="https://www.facebook.com/p/Indian-foodtech-100083285323445/"
                    target="_blank"
                    className="text-gray-500 hover:text-primary-500 transition-colors"
                    aria-label="Facebook"
                  >
                    <AllIconComponent
                      icon="facebookIcon"
                      width="18"
                      height="18"
                      color="currentColor"
                    />
                  </Link>
                  <Link
                    href="https://in.linkedin.com/in/indian-foodtech-b5633829a"
                    target="_blank"
                    className="text-gray-500 hover:text-primary-500 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <AllIconComponent icon="simpleLinkedinIcon" className="w-4 h-4" />
                  </Link>
                </div>

                {/* Sample Request Button Mobile */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 relative overflow-hidden bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full text-sm font-bold w-full shadow-[0_4px_15px_-4px_rgba(111,158,18,0.4)] cursor-pointer transition-colors duration-200"
                  onClick={() => {
                    openSampleModal();
                    setIsMenuOpen(false);
                  }}
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 w-2/5 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                    style={{ animation: "btnShine 3s ease-in-out infinite" }}
                  />
                  <Package className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">Sample Request</span>
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Premium Sample Request Modal (Outside header to bypass pointer event containment) */}
      <AnimatePresence>
        {isSampleModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999] p-4 sm:p-6 pointer-events-auto"
            onClick={closeSampleModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 25 }}
              transition={{ type: "spring", damping: 30, stiffness: 280 }}
              className="bg-white rounded-[24px] sm:rounded-[32px] shadow-2xl max-w-[95vw] sm:max-w-[900px] w-full max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeSampleModal}
                className="absolute top-3 right-3 sm:top-5 sm:right-5 z-10 bg-white hover:bg-gray-100 text-gray-600 hover:text-gray-800 rounded-full p-2 shadow-md transition-all duration-200 hover:scale-110 active:scale-95 pointer-events-auto"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" />
              </button>
              <SampleRequestComponent />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
