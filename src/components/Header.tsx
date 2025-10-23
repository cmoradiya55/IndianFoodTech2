'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import SampleRequestComponent from '../../Component/SampleRequestComponent/SampleRequestComponent';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);
    const pathname = usePathname();

    const isRouteActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname === href || pathname.startsWith(href + '/');
    };

    const navLinkClass = (active: boolean) =>
        active
            ? 'bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium'
            : 'text-gray-800 px-4 py-2 text-sm font-medium hover:text-primary-500 transition-colors';

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
            <div className="bg-primary-500 text-white py-2 sm:py-3" style={{ fontFamily: 'Inter_18pt-regular' }}>
                <div className="container-custom px-4">
                    <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-2 sm:gap-0">
                        {/* Phone */}
                        <div className="flex items-center space-x-2 order-1 sm:order-1">
                            {/* Phone Icon */}
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span className="text-xs sm:text-sm">+91 9714899711</span>
                        </div>

                        {/* Social Media */}
                        <div className="flex items-center space-x-2 order-3 sm:order-2">
                            <span className="hidden sm:inline text-xs sm:text-sm">We are here also:</span>
                            <span className="sm:hidden text-xs">Follow us:</span>
                            <Link href="" className="text-white hover:text-primary-200 transition-colors">
                                <svg width="16" height="16" className="sm:w-5 sm:h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path fill="currentColor" fillRule="evenodd" d="M5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4zm-.334 3.5a.75.75 0 0 0-.338 1.154l5.614 7.45l-5.915 6.345l-.044.051H6.03l4.83-5.179l3.712 4.928a.75.75 0 0 0 .337.251h4.422a.75.75 0 0 0 .336-1.154l-5.614-7.45L20.017 4.5h-2.05l-4.83 5.18l-3.714-4.928a.75.75 0 0 0-.337-.252zm10.88 13.548L6.431 5.952H8.45l9.114 12.095z" clipRule="evenodd" />
                                </svg>
                            </Link>
                            <Link href="https://in.linkedin.com/in/indian-foodtech-b5633829a" className="text-white hover:text-primary-200 transition-colors">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </Link>
                        </div>

                        {/* Email */}
                        <div className="flex items-center space-x-2 order-2 sm:order-3">
                            <Link href="mailto:office@indianfoodtech.in" className="text-white hover:text-primary-200 flex space-x-2 transition-colors">
                                {/* Email Icon */}
                                <div className="flex-shrink-0">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="hover:underline text-xs sm:text-sm truncate max-w-[150px] sm:max-w-none">
                                    office@indianfoodtech.in
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="bg-[#F6F6F6] py-3 sm:py-5 shadow-lg" style={{ fontFamily: 'NotoSerif-semibold' }}>
                <div className="container-custom px-4">

                    <div className="flex justify-between items-center">

                        {/* Logo */}
                        <div className="flex items-center">
                            <div className="w-40 h-10 sm:w-48 md:w-60 sm:h-10 md:h-12 relative">
                                <Image
                                    src="/logoBlack.png"
                                    alt="Indian Food Tech"
                                    width={240}
                                    height={60}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>

                        {/* Navigation - Desktop */}
                        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
                            <Link href="/" className={navLinkClass(isRouteActive('/'))}>
                                Home
                            </Link>
                            <Link href="/aboutUs" className={navLinkClass(isRouteActive('/aboutUs'))}>
                                About Us
                            </Link>
                            <div className="relative"
                                onMouseEnter={() => setIsProductsOpen(true)}
                                onMouseLeave={() => setIsProductsOpen(false)}
                            >
                                <Link
                                    href="/products"
                                    className={navLinkClass(isRouteActive('/products')) + ' flex items-center space-x-1'}
                                >
                                    <span>Products</span>
                                    <svg className={`w-4 h-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </Link>
                                {isProductsOpen && (
                                    <div className="absolute top-8 left-0 w-58 bg-white rounded-lg shadow-xl shadow-black/10 border border-gray-200 py-4 z-50">
                                        <Link href="/products?category=peanut-butter" className="block px-6 py-4 text-sm text-gray-700 hover:bg-gray-50">
                                            Peanut Butter
                                        </Link>
                                        <Link href="/products?category=nut-butters" className="block px-6 py-4 text-sm text-gray-700 hover:bg-gray-50">
                                            Nut Butters
                                        </Link>
                                        <Link href="/products?category=roasted-butter" className="block px-6 py-4 text-sm text-gray-700 hover:bg-gray-50">
                                            Roasted Butter
                                        </Link>
                                        <Link href="/products?category=spread" className="block px-6 py-4 text-sm text-gray-700 hover:bg-gray-50">
                                            Spread
                                        </Link>
                                    </div>
                                )}
                            </div>
                            <Link href="/privateLabels" className={navLinkClass(isRouteActive('/privateLabels'))}>
                                Private Labels
                            </Link>
                            <Link href="/contactUs" className={navLinkClass(isRouteActive('/contactUs'))}>
                                Contact Us
                            </Link>
                        </nav>

                        {/* Sample Request Button - Desktop & Tablet */}
                        <button
                            className="hidden sm:block bg-black text-white px-3 sm:px-4 lg:px-6 py-2 lg:py-3 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-800 transition-colors"
                            onClick={openSampleModal}
                        >
                            <span className="hidden md:inline">Sample Request</span>
                            {/* <span className="md:hidden">Sample</span> */}
                        </button>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden flex items-center space-x-2">
                            {/* Sample Request Button - Mobile */}
                            {/* <button
                                className="sm:hidden bg-black text-white px-3 py-2 rounded-full text-xs font-medium hover:bg-gray-800 transition-colors"
                                onClick={openSampleModal}
                            >
                                Sample
                            </button> */}

                            <button
                                className="text-gray-700 hover:text-primary-500 transition-colors p-1"
                                onClick={toggleMenu}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                                </svg>
                            </button>
                        </div>

                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
                            <nav className="flex flex-col space-y-3 pt-4">
                                <Link
                                    href="/"
                                    className={isRouteActive('/') ? 'bg-primary-500 text-white px-4 py-3 rounded-full font-medium text-center' : 'text-gray-700 hover:text-primary-500 font-medium transition-colors px-4 py-3 text-center'}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/aboutUs"
                                    className={isRouteActive('/aboutUs') ? 'bg-primary-500 text-white px-4 py-3 rounded-full font-medium text-center' : 'text-gray-700 hover:text-primary-500 font-medium transition-colors px-4 py-3 text-center'}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    About Us
                                </Link>
                                <div className="space-y-2">
                                    <button
                                        onClick={toggleProducts}
                                        className={(isRouteActive('/products') ? 'bg-primary-500 text-white px-4 py-3 rounded-full font-medium' : 'text-gray-700 hover:text-primary-500 font-medium transition-colors px-4 py-3') + ' flex items-center justify-center space-x-1 w-full'}
                                    >
                                        <span>Products</span>
                                        <svg className={`w-4 h-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {isProductsOpen && (
                                        <div className="pl-4 space-y-2 bg-gray-50 rounded-lg py-2">
                                            <Link
                                                href="/products?category=peanut-butter"
                                                className="block text-gray-600 hover:text-primary-500 transition-colors py-2 px-4"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                Peanut Butter
                                            </Link>
                                            <Link
                                                href="/products?category=nut-butters"
                                                className="block text-gray-600 hover:text-primary-500 transition-colors py-2 px-4"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                Nut Butter
                                            </Link>
                                            <Link
                                                href="/products?category=roasted-butter"
                                                className="block text-gray-600 hover:text-primary-500 transition-colors py-2 px-4"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                Roasted Butter
                                            </Link>
                                            <Link
                                                href="/products?category=spread"
                                                className="block text-gray-600 hover:text-primary-500 transition-colors py-2 px-4"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                Spread
                                            </Link>
                                        </div>
                                    )}
                                </div>
                                <Link
                                    href="/privateLabels"
                                    className={isRouteActive('/privateLabels') ? 'bg-primary-500 text-white px-4 py-3 rounded-full font-medium text-center' : 'text-gray-700 hover:text-primary-500 font-medium transition-colors px-4 py-3 text-center'}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Private Labels
                                </Link>
                                <Link
                                    href="/contactUs"
                                    className={isRouteActive('/contactUs') ? 'bg-primary-500 text-white px-4 py-3 rounded-full font-medium text-center' : 'text-gray-700 hover:text-primary-500 font-medium transition-colors px-4 py-3 text-center'}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Contact Us
                                </Link>
                                <button
                                    className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors w-full sm:hidden"
                                    onClick={() => {
                                        openSampleModal();
                                        setIsMenuOpen(false);
                                    }}
                                >
                                    Sample Request
                                </button>
                            </nav>
                        </div>
                    )}

                </div>
            </div>

            {/* Sample Request Modal */}
            {isSampleModalOpen && (
                <div
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999] p-8 sm:p-4"
                    onClick={closeSampleModal}
                >
                    <div
                        className="bg-[#E9E8ED] rounded-[20px] sm:rounded-[40px] shadow-xl max-w-[95vw] sm:max-w-[1200px] w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto mt-4 sm:mt-40 mb-4 sm:mb-40 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeSampleModal}
                            className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-white hover:bg-gray-100 text-gray-600 hover:text-gray-800 rounded-full p-1.5 sm:p-2 shadow-md transition-colors"
                            aria-label="Close modal"
                        >
                            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <SampleRequestComponent />
                    </div>
                </div>
            )}

        </header>
    );
};

export default Header;
