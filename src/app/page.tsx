import CreateYourBrand from "../../Component/CreateYourBrand/CreateYourBrand";
import DiscoverProduct from "../../Component/DiscoverProduct/DiscoverProduct";
import ProductQuality from "../../Component/ProductQuality/ProductQuality";
import Hero from "../../Component/Hero/Hero";
import Statistics from "../../Component/Statistics/Statistics";
import StoryAboutUs from "../../Component/StoryAboutUs/StoryAboutUs";
import OurCertification from "../../Component/OurCertification/OurCertification";
import ContactUsComponent from "../../Component/ContactUs/ContactUs";
import Schema from "@/components/Schema";
import { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.indianfoodtech.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Indian Foodtech | Premium Peanut Butter Manufacturer",
  description:
    "Manufacturer of Peanut Butter, Nut butter & Peanut Butter Sachet offered by Indian Foodtech from Surat, Gujarat, India",
  keywords: [
    "peanut butter",
    "peanut butter manufacturer",
    "peanut butter manufacturer in india",
    "nut butter",
    "private label peanut butter",
    "bulk peanut butter",
    "creamy peanut butter",
    "crunchy peanut butter",
    "food manufacturing",
    "tahini paste",
    "peanut butter supplier",
    "private label peanut butter",
    "bulk peanut butter",
    "wholesale peanut butter",
    "peanut butter exporter",
    "peanut butter export company",
    "OEM peanut butter",
    "ODM peanut butter",
    "private label food manufacturer",
    "peanut butter factory",
    "peanut butter producer",
    "natural peanut butter",
    "organic peanut butter",
    "creamy peanut butter",
    "crunchy peanut butter",
    "high protein peanut butter",
    "vegan peanut butter",
    "sugar free peanut butter",
    "healthy peanut butter",
    "premium peanut butter",
    "nut butter manufacturer",
    "food exporter",
    "food manufacturer",
    "food supplier",
    "bulk food supplier",
    "private label food products",
    "contract manufacturing peanut butter",
    "white label peanut butter",
    "global peanut butter supplier",
    "peanut butter exporter India",
    "peanut butter manufacturer India",
    "peanut butter supplier India",
    "global peanut butter exporter",
    "international peanut butter supplier",
    "worldwide peanut butter manufacturer",
    "peanut butter export from India",
    "Indian peanut butter manufacturer",
    "private label peanut butter India",
    "bulk peanut butter exporter India"
  ],
  authors: [{ name: "Indian Foodtech" }],
  creator: "Indian Foodtech",
  publisher: "Indian Foodtech",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logoBlack.webp",
  },
  openGraph: {
    title: "Indian Foodtech | Premium Peanut Butter Manufacturer",
    description:
      "Manufacturer of Peanut Butter, Nut butter & Peanut Butter Sachet offered by Indian Foodtech from Surat, Gujarat, India",
    url: "/",
    siteName: "Indian Foodtech",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logoBlack.webp",
        width: 800,
        height: 800,
        alt: "Indian Foodtech Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indian Foodtech | Premium Peanut Butter Manufacturer",
    description:
      "Manufacturer of Peanut Butter, Nut butter & Peanut Butter Sachet offered by Indian Foodtech from Surat, Gujarat, India",
    creator: "@indianfoodtech",
    images: ["/logoBlack.webp"],
  },
};

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Schema
        type="WebPage"
        data={{
          "@id": `${BASE_URL}/#webpage`,
          name: "Indian Foodtech | Premium Peanut Butter Manufacturer",
          description:
            "B2B peanut butter manufacturer and exporter from Surat, Gujarat, India. 5 MT daily capacity, exporting to 75+ countries with FSSAI, Halal, and ISO certifications.",
          url: BASE_URL,
          inLanguage: "en",
          isPartOf: { "@id": `${BASE_URL}/#website` },
          about: { "@id": `${BASE_URL}/#organization` },
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: [".aeo-speakable-summary"],
          },
        }}
      />
      <main className="w-full">
        {/* Hero Section */}
        <section className="bg-[#e9e8ed] h-auto sm:h-[calc(100vh-var(--header-height,82px))] sm:h-[calc(100vh-var(--header-height,86px))] lg:h-[calc(100vh-var(--header-height,94px))] overflow-hidden">
          <div
            className="mx-auto overflow-hidden scrollbar-hide"
            style={{ fontFamily: "NotoSerif-semibold" }}
          >
            <Hero />
          </div>
        </section>

        {/* Statistics Section */}
        <section className="bg-[#d4dbc4] py-6 sm:py-8 md:py-12 lg:py-16 xl:py-16 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-8">
          <div
            className="container-custom"
            style={{ fontFamily: "NotoSerif-semibold" }}
          >
            <Statistics />
          </div>
        </section>

        {/* Discover Product Section */}
        <section className="bg-[#e9e8ed] py-6 sm:py-8 md:py-12 lg:py-16 xl:py-16 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-8">
          <div
            className="container-custom"
            style={{ fontFamily: "NotoSerif-semibold" }}
          >
            <DiscoverProduct />
          </div>
        </section>

        {/* Create Your Brand Section */}
        <section className="bg-white py-6 sm:py-8 md:py-12 lg:py-16 xl:py-16 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-8">
          <div
            className="container-custom"
            style={{ fontFamily: "NotoSerif-semibold" }}
          >
            <CreateYourBrand />
          </div>
        </section>

        {/* Story About Us Section */}
        <section className="bg-[#e9e8ed] py-6 sm:py-8 md:py-12 lg:py-16 xl:py-16 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-8">
          <div
            className="container-custom"
            style={{ fontFamily: "NotoSerif-semibold" }}
          >
            <StoryAboutUs isPageHeader={false} />
          </div>
        </section>

        {/* Quality Section */}
        <section className="bg-[#e9e8ed] py-6 sm:py-8 md:py-12 lg:py-16 xl:py-16 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-8">
          <div
            className="container-custom"
            style={{ fontFamily: "NotoSerif-semibold" }}
          >
            <ProductQuality />
          </div>
        </section>

        {/* Certification Section */}
        <section className="bg-white py-6 sm:py-8 md:py-12 lg:py-16 xl:py-16 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-8">
          <div
            className="container-custom"
            style={{ fontFamily: "NotoSerif-semibold" }}
          >
            <OurCertification />
          </div>
        </section>


        {/* Contact Us Section */}
        <section className="bg-[#e9e8ed] py-6 sm:py-8 md:py-12 lg:py-16 xl:py-16 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-8">
          <div
            className="container-custom"
            style={{ fontFamily: "NotoSerif-semibold" }}
          >
            <ContactUsComponent isPageHeader={false} />
          </div>
        </section>
      </main>
    </div>
  );
}
