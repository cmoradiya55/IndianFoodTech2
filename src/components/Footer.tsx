import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-[#1D2C00] relative text-white" style={{ fontFamily: 'NotoSerif-semibold' }}>

            {/* Main Footer Content */}
            <div className='container-custom mb-6 sm:mb-8 lg:mb-10 px-4 sm:px-6 lg:px-8'>
                
                {/* Logo and Social Media Section */}
                <div className='py-8 sm:py-10 lg:py-12 flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6 sm:gap-4'>
                    <div className="flex-shrink-0">
                        <Image
                            src="/logoWhite.png"
                            alt="Indian Food Tech"
                            width={270}
                            height={55}
                            className='object-contain w-48 sm:w-56 md:w-64 lg:w-[270px] h-auto'
                        />
                    </div>
                    <div className='flex space-x-3 sm:space-x-4'>
                        <Link 
                            href="https://in.linkedin.com/in/indian-foodtech-b5633829a" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform duration-200"
                        >
                            {/* LinkedIn */}
                            <svg width="32" height="32" className="sm:w-9 sm:h-9" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M30 0.5C31.5913 0.5 33.1174 1.13214 34.2426 2.25736C35.3679 3.38258 36 4.9087 36 6.5V30.5C36 32.0913 35.3679 33.6174 34.2426 34.7426C33.1174 35.8679 31.5913 36.5 30 36.5H6C4.4087 36.5 2.88258 35.8679 1.75736 34.7426C0.632141 33.6174 0 32.0913 0 30.5V6.5C0 4.9087 0.632141 3.38258 1.75736 2.25736C2.88258 1.13214 4.4087 0.5 6 0.5H30ZM10 14.5C9.46957 14.5 8.96086 14.7107 8.58579 15.0858C8.21071 15.4609 8 15.9696 8 16.5V26.5C8 27.0304 8.21071 27.5391 8.58579 27.9142C8.96086 28.2893 9.46957 28.5 10 28.5C10.5304 28.5 11.0391 28.2893 11.4142 27.9142C11.7893 27.5391 12 27.0304 12 26.5V16.5C12 15.9696 11.7893 15.4609 11.4142 15.0858C11.0391 14.7107 10.5304 14.5 10 14.5ZM16 12.5C15.4696 12.5 14.9609 12.7107 14.5858 13.0858C14.2107 13.4609 14 13.9696 14 14.5V26.5C14 27.0304 14.2107 27.5391 14.5858 27.9142C14.9609 28.2893 15.4696 28.5 16 28.5C16.5304 28.5 17.0391 28.2893 17.4142 27.9142C17.7893 27.5391 18 27.0304 18 26.5V19.18C18.61 18.492 19.64 17.684 20.786 17.194C21.452 16.91 22.454 16.794 23.15 17.014C23.3809 17.0726 23.5865 17.2045 23.736 17.39C23.84 17.53 24 17.842 24 18.5V26.5C24 27.0304 24.2107 27.5391 24.5858 27.9142C24.9609 28.2893 25.4696 28.5 26 28.5C26.5304 28.5 27.0391 28.2893 27.4142 27.9142C27.7893 27.5391 28 27.0304 28 26.5V18.5C28 17.16 27.66 15.968 26.952 15.012C26.3005 14.1451 25.3887 13.5094 24.35 13.198C22.546 12.632 20.548 12.946 19.214 13.518C18.7866 13.7009 18.3705 13.9093 17.968 14.142C17.8842 13.6812 17.6412 13.2644 17.2816 12.9643C16.9219 12.6643 16.4684 12.4999 16 12.5ZM10 8.5C9.46957 8.5 8.96086 8.71071 8.58579 9.08579C8.21071 9.46086 8 9.96957 8 10.5C8 11.0304 8.21071 11.5391 8.58579 11.9142C8.96086 12.2893 9.46957 12.5 10 12.5C10.5304 12.5 11.0391 12.2893 11.4142 11.9142C11.7893 11.5391 12 11.0304 12 10.5C12 9.96957 11.7893 9.46086 11.4142 9.08579C11.0391 8.71071 10.5304 8.5 10 8.5Z" fill="#6F9E12" />
                            </svg>
                        </Link>
                        <Link 
                            href="https://www.facebook.com/p/Indian-foodtech-100083285323445/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform duration-200"
                        >
                            {/* Facebook */}
                            <svg width="32" height="32" className="sm:w-9 sm:h-9" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23 40.276C32.622 38.828 40 30.526 40 20.5C40 9.454 31.046 0.5 20 0.5C8.954 0.5 0 9.454 0 20.5C0 30.526 7.378 38.83 17 40.276V26.5H14C13.2044 26.5 12.4413 26.1839 11.8787 25.6213C11.3161 25.0587 11 24.2956 11 23.5C11 22.7044 11.3161 21.9413 11.8787 21.3787C12.4413 20.8161 13.2044 20.5 14 20.5H17V16.5C17 14.6435 17.7375 12.863 19.0503 11.5503C20.363 10.2375 22.1435 9.5 24 9.5H25C25.7956 9.5 26.5587 9.81607 27.1213 10.3787C27.6839 10.9413 28 11.7044 28 12.5C28 13.2956 27.6839 14.0587 27.1213 14.6213C26.5587 15.1839 25.7956 15.5 25 15.5H24C23.7348 15.5 23.4804 15.6054 23.2929 15.7929C23.1054 15.9804 23 16.2348 23 16.5V20.5H26C26.7956 20.5 27.5587 20.8161 28.1213 21.3787C28.6839 21.9413 29 22.7044 29 23.5C29 24.2956 28.6839 25.0587 28.1213 25.6213C27.5587 26.1839 26.7956 26.5 26 26.5H23V40.276Z" fill="#6F9E12" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Main Content Section */}
                <div className='flex flex-col lg:flex-row gap-8 lg:gap-0'>
                    
                    {/* Company Description */}
                    <div className='w-full lg:w-1/3 lg:pr-8'>
                        <p className='text-gray-400 text-sm sm:text-base leading-relaxed'>
                            Supplying premium quality peanut butter to families and brands worldwide, since 2019.
                        </p>
                    </div>

                    {/* Links and Contact Section */}
                    <div className='w-full lg:w-2/3 flex flex-col md:flex-row gap-8 md:gap-6 lg:pl-16 xl:pl-24'>
                        
                        {/* Quick Links */}
                        <div className='w-full md:w-1/2 lg:w-1/3'>
                            <h4 className='text-primary-500 text-lg sm:text-xl font-semibold mb-4 sm:mb-6'>Quick Links</h4>
                            <ul className="space-y-3 sm:space-y-4" style={{ fontFamily: 'Inter_18pt-regular' }}>
                                <li>
                                    <Link href="/aboutUs" className="text-white hover:text-primary-500 hover:underline transition-colors text-sm sm:text-base">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contactUs" className="text-white hover:text-primary-500 hover:underline transition-colors text-sm sm:text-base">
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/privateLabels" className="text-white hover:text-primary-500 hover:underline transition-colors text-sm sm:text-base">
                                        Private Labels
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/products" className="text-white hover:text-primary-500 hover:underline transition-colors text-sm sm:text-base">
                                        Products
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        
                        {/* Contact Information */}
                        <div className='w-full md:w-1/2 lg:w-2/3'>
                            <h4 className='text-primary-500 text-lg sm:text-xl font-semibold mb-4 sm:mb-6'>Contact Us</h4>
                            
                            {/* Address */}
                            <div className='mb-4 sm:mb-6'>
                                <p className='text-white text-sm sm:text-base font-medium leading-relaxed' style={{ fontFamily: 'Inter_18pt-regular' }}>
                                    <span className='text-primary-500'>Address:</span><br />
                                    Ground Floor, Plot No. 198, 197, 198<br />
                                    Om Industries Estate, Vibhag 1, Village : Mankana<br />
                                    Kamrej, Surat - 394190, Gujarat, India
                                </p>
                            </div>
                            
                            {/* Contact Details */}
                            <div className='space-y-2 sm:space-y-3'>
                                <p className='text-white text-sm sm:text-base font-medium' style={{ fontFamily: 'Inter_18pt-regular' }}>
                                    <span className='text-primary-500'>Email:</span>
                                    <Link href="mailto:office@indianfoodtech.in" className="ml-2 hover:text-primary-500 transition-colors hover:underline">
                                        office@indianfoodtech.in
                                    </Link>
                                </p>
                                <p className='text-white text-sm sm:text-base font-medium' style={{ fontFamily: 'Inter_18pt-regular' }}>
                                    <span className='text-primary-500'>Phone:</span>
                                    <Link href="tel:+919714899711" className="ml-2 hover:text-primary-500 transition-colors hover:underline">
                                        +91 97148 99711
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar (Green) */}
            <div className="bg-primary-500">
                <div className="container-custom py-4 sm:py-5 px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-center text-white text-center gap-2 sm:gap-3">
                        <p className="text-white text-sm sm:text-base font-semibold">
                            ©2025 Indian Foodtech. All Rights Reserved
                            <span className="opacity-75 hidden sm:inline"> (</span>
                            <Link href="/terms" className="underline hover:opacity-100 ml-1 sm:ml-0">
                                Terms of use
                            </Link>
                            <span className="opacity-75 hidden sm:inline">)</span>
                        </p>
                        <p className="opacity-80 text-xs sm:text-sm leading-relaxed" style={{ fontFamily: 'Inter_18pt-regular' }}>
                            Design by <span className="font-semibold">Rushita Kumbhani</span>
                            <span className="hidden sm:inline"> & </span>
                            <br className="sm:hidden" />
                            <span className="sm:hidden">& </span>Developed and managed by <span className="font-semibold">Infinius Tech</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Floating WhatsApp Button */}
            <Link
                href="https://wa.me/919714899711"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-10 text-white w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full shadow-2xl flex items-center justify-center z-50 hover:scale-110 active:scale-95 transition-transform duration-200"
            >
                {/* WhatsApp Icon */}
                <svg viewBox="0 0 32 32" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M16 31C23.732 31 30 24.732 30 17C30 9.26801 23.732 3 16 3C8.26801 3 2 9.26801 2 17C2 19.5109 2.661 21.8674 3.81847 23.905L2 31L9.31486 29.3038C11.3014 30.3854 13.5789 31 16 31ZM16 28.8462C22.5425 28.8462 27.8462 23.5425 27.8462 17C27.8462 10.4576 22.5425 5.15385 16 5.15385C9.45755 5.15385 4.15385 10.4576 4.15385 17C4.15385 19.5261 4.9445 21.8675 6.29184 23.7902L5.23077 27.7692L9.27993 26.7569C11.1894 28.0746 13.5046 28.8462 16 28.8462Z" fill="#BFC8D0" />
                    <path d="M28 16C28 22.6274 22.6274 28 16 28C13.4722 28 11.1269 27.2184 9.19266 25.8837L5.09091 26.9091L6.16576 22.8784C4.80092 20.9307 4 18.5589 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z" fill="url(#paint0_linear_87_7264)" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 18.5109 2.661 20.8674 3.81847 22.905L2 30L9.31486 28.3038C11.3014 29.3854 13.5789 30 16 30ZM16 27.8462C22.5425 27.8462 27.8462 22.5425 27.8462 16C27.8462 9.45755 22.5425 4.15385 16 4.15385C9.45755 4.15385 4.15385 9.45755 4.15385 16C4.15385 18.5261 4.9445 20.8675 6.29184 22.7902L5.23077 26.7692L9.27993 25.7569C11.1894 27.0746 13.5046 27.8462 16 27.8462Z" fill="white" />
                    <path d="M12.5 9.49989C12.1672 8.83131 11.6565 8.8905 11.1407 8.8905C10.2188 8.8905 8.78125 9.99478 8.78125 12.05C8.78125 13.7343 9.52345 15.578 12.0244 18.3361C14.438 20.9979 17.6094 22.3748 20.2422 22.3279C22.875 22.2811 23.4167 20.0154 23.4167 19.2503C23.4167 18.9112 23.2062 18.742 23.0613 18.696C22.1641 18.2654 20.5093 17.4631 20.1328 17.3124C19.7563 17.1617 19.5597 17.3656 19.4375 17.4765C19.0961 17.8018 18.4193 18.7608 18.1875 18.9765C17.9558 19.1922 17.6103 19.083 17.4665 19.0015C16.9374 18.7892 15.5029 18.1511 14.3595 17.0426C12.9453 15.6718 12.8623 15.2001 12.5959 14.7803C12.3828 14.4444 12.5392 14.2384 12.6172 14.1483C12.9219 13.7968 13.3426 13.254 13.5313 12.9843C13.7199 12.7145 13.5702 12.305 13.4803 12.05C13.0938 10.953 12.7663 10.0347 12.5 9.49989Z" fill="white" />
                    <defs>
                        <linearGradient id="paint0_linear_87_7264" x1="26.5" y1="7" x2="4" y2="28" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#5BD066" />
                            <stop offset="1" stopColor="#27B43E" />
                        </linearGradient>
                    </defs>
                </svg>
            </Link>

        </footer>
    );
};

export default Footer;