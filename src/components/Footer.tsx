import Image from "next/image";
import Link from "next/link";
import AllIconComponent from "../../public/AllIconComponent";
import FloatingChatMenu from "./FloatingChatMenu";

const QUICK_LINKS = [
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/private-labels", label: "Private Labels" },
  { href: "/products", label: "Products" },
  { href: "/faq", label: "FAQ" },
  // { href: "/international", label: "International Hub" },
];

const Footer = () => {
  return (
    <footer
      className="bg-[#1D2C00] relative text-white"
      style={{ fontFamily: "NotoSerif-semibold" }}
    >
      {/* Main Footer Content */}
      <div className="container-custom mb-6 sm:mb-8 lg:mb-10 pt-16 pb-4 px-4 sm:px-6 lg:px-8">
        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-0">
          {/* Company Description */}
          <div className="w-full lg:w-1/3 lg:pr-8">
            <div className="shrink-0 pb-4 lg:mb-3">
              <Image
                src="/logoWhite.webp"
                alt="Indian Food Tech"
                width={270}
                height={55}
                className="object-contain w-48 sm:w-56 md:w-64 lg:w-[270px] h-auto"
              />
            </div>
            <p className="text-gray-400 text-sm sm:text-sm leading-relaxed">
              Supplying premium quality peanut butter to families and brands
              worldwide.
            </p>
            <div className="flex space-x-3 sm:space-x-4 pt-8">
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
              {/* <Link
                href="viber://chat?number=%2B919714899711"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200"
              >
                <AllIconComponent
                  icon="viberIcon"
                  className="sm:w-7 sm:h-7 text-primary-500"
                  width="28"
                  height="28"
                />
              </Link> */}
            </div>
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
                style={{ fontFamily: "Poppins-regular" }}
              >
                {QUICK_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white hover:text-primary-500 hover:underline transition-colors text-sm sm:text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div className="w-full md:w-1/2 lg:w-2/3">
              <h4 className="text-primary-500 text-lg sm:text-xl font-semibold mb-4 sm:mb-2">
                Contact Us
              </h4>

              <table
                className="border-separate border-spacing-y-3 sm:border-spacing-y-4 w-full"
                style={{ fontFamily: "Poppins-regular" }}
              >
                <tbody>
                  <tr>
                    <td className="text-white text-sm sm:text-sm font-medium align-top pr-3 pt-1 w-20">
                      <span className="text-primary-500 text-sm">Address:</span>
                    </td>
                    <td className="text-white text-sm sm:text-sm font-medium align-top">
                      Ground Floor, Plot No. 198, 197, 198
                      <br />
                      Om Industries Estate, Vibhag 1,
                      <br />
                      Village : Mankana, Kamrej,
                      <br />
                      Surat - 394190, Gujarat, India
                    </td>
                  </tr>
                  <tr>
                    <td className="text-white text-sm sm:text-sm font-medium align-top pr-3">
                      <span className="text-primary-500 text-sm">Email:</span>
                    </td>
                    <td className="align-top">
                      <Link
                        href="mailto:office@indianfoodtech.in"
                        className="text-white text-sm sm:text-sm font-medium hover:text-primary-500 transition-colors hover:underline"
                      >
                        office@indianfoodtech.in
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-white text-sm sm:text-sm font-medium align-top pr-3">
                      <span className="text-primary-500 text-sm">Phone:</span>
                    </td>
                    <td className="align-top">
                      <Link
                        href="tel:+919714899711"
                        className="text-white text-sm sm:text-sm font-medium hover:text-primary-500 transition-colors hover:underline"
                      >
                        +91 97148 99711
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar (Green) */}
      <div className="bg-primary-500">
        <div className="container-custom py-1 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-white text-center">
            <p className="text-white text-sm font-semibold">
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
          </div>
        </div>
      </div>

      <FloatingChatMenu />
    </footer>
  );
};

export default Footer;
