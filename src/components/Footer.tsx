import Image from "next/image";
import Link from "next/link";
import AllIconComponent from "../../public/AllIconComponent";

const QUICK_LINKS = [
  { href: "/aboutUs", label: "About Us" },
  { href: "/contactUs", label: "Contact Us" },
  { href: "/privateLabels", label: "Private Labels" },
  { href: "/products", label: "Products" },
  { href: "/international", label: "International Hub" },
];

const Footer = () => {
  return (
    <footer
      className="bg-[#1D2C00] relative text-white"
      style={{ fontFamily: "NotoSerif-semibold" }}
    >
      {/* Main Footer Content */}
      <div className="container-custom mb-6 sm:mb-8 lg:mb-10 px-4 sm:px-6 lg:px-8">
        {/* Logo and Social Media Section */}
        <div className="py-8 sm:py-5 lg:py-6 flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6 sm:gap-4">
          <div className="shrink-0">
            <Image
              src="/logoWhite.png"
              alt="Indian Food Tech"
              width={270}
              height={55}
              className="object-contain w-48 sm:w-56 md:w-64 lg:w-[270px] h-auto"
            />
          </div>
          <div className="flex space-x-3 sm:space-x-4">
            <Link
              href="https://in.linkedin.com/in/indian-foodtech-b5633829a"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
            >
              {/* LinkedIn */}
              <AllIconComponent
                icon="linkedinIcon"
                className="sm:w-7 sm:h-7"
                width="28"
                height="28"
              />
            </Link>
            <Link
              href="https://www.facebook.com/p/Indian-foodtech-100083285323445/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
            >
              {/* Facebook */}
              <AllIconComponent
                icon="facebookIcon"
                className="sm:w-7 sm:h-7"
                width="28"
                height="28"
              />
            </Link>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-0">
          {/* Company Description */}
          <div className="w-full lg:w-1/3 lg:pr-8">
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Supplying premium quality peanut butter to families and brands
              worldwide, since 2019.
            </p>
          </div>

          {/* Links and Contact Section */}
          <div className="w-full lg:w-2/3 flex flex-col md:flex-row gap-4 md:gap-6 lg:pl-16 xl:pl-24">
            {/* Quick Links */}
            <div className="w-full md:w-1/2 lg:w-1/3">
              <h4 className="text-primary-500 text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
                Quick Links
              </h4>
              <ul
                className="space-y-3 sm:space-y-4"
                style={{ fontFamily: "Inter_18pt-regular" }}
              >
                {QUICK_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white hover:text-primary-500 hover:underline transition-colors text-sm sm:text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div className="w-full md:w-1/2 lg:w-2/3">
              <h4 className="text-primary-500 text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
                Contact Us
              </h4>

              {/* Address */}
              <div className="mb-4 sm:mb-6">
                <p
                  className="text-white text-sm sm:text-base font-medium leading-relaxed"
                  style={{ fontFamily: "Inter_18pt-regular" }}
                >
                  <span className="text-primary-500">Address:</span>
                  <br />
                  Ground Floor, Plot No. 198, 197, 198
                  <br />
                  Om Industries Estate, Vibhag 1, Village : Mankana
                  <br />
                  Kamrej, Surat - 394190, Gujarat, India
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-2 sm:space-y-3">
                <p
                  className="text-white text-sm sm:text-base font-medium"
                  style={{ fontFamily: "Inter_18pt-regular" }}
                >
                  <span className="text-primary-500">Email:</span>
                  <Link
                    href="mailto:office@indianfoodtech.in"
                    className="ml-2 hover:text-primary-500 transition-colors hover:underline"
                  >
                    office@indianfoodtech.in
                  </Link>
                </p>
                <p
                  className="text-white text-sm sm:text-base font-medium"
                  style={{ fontFamily: "Inter_18pt-regular" }}
                >
                  <span className="text-primary-500">Phone:</span>
                  <Link
                    href="tel:+919714899711"
                    className="ml-2 hover:text-primary-500 transition-colors hover:underline"
                  >
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
              <Link
                href="/terms"
                className="underline hover:opacity-100 ml-1 sm:ml-0"
              >
                Terms of use
              </Link>
              <span className="opacity-75 hidden sm:inline">)</span>
            </p>
            <p
              className="opacity-80 text-xs sm:text-sm leading-relaxed"
              style={{ fontFamily: "Inter_18pt-regular" }}
            >
              <span className="sm:hidden">& </span>Developed and managed by{" "}
              <span className="font-semibold">Infinius Tech</span>
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
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-10 text-white shadow-2xl z-50 hover:scale-110 active:scale-95 transition-transform duration-200"
      >
        {/* WhatsApp Icon */}
        <AllIconComponent
          icon="whatsAppIcon"
          className="w-10 h-10 sm:w-12 sm:h-12 lg:w-10 lg:h-10"
        />
      </Link>
    </footer>
  );
};

export default Footer;
