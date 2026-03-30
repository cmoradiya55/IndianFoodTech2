import ContactUsComponent from "../../Component/ContactUsComponent/ContactUsComponent";
import CreateYourBrand from "../../Component/CreateYourBrand/CreateYourBrand";
import DiscoverProduct from "../../Component/DiscoverProduct/DiscoverProduct";
import OurCertification from "../../Component/OurCertification/OurCertification";
import ProductQuality from "../../Component/ProductQuality/ProductQuality";
import Slider from "../../Component/Slider/Slider";
import Statistics from "../../Component/Statistics/Statistics";
import StoryAboutUs from "../../Component/StoryAboutUs/StoryAboutUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Indian Food Tech. We are a trusted manufacturer of premium peanut butter, nut butters, and spreads offering customized private level solutions.",
};

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <main className="w-full">
        {/* Slider Section */}
        <section className="bg-[#e9e8ed]">
          <div className="mx-auto" style={{ fontFamily: "NotoSerif-semibold" }}>
            <Slider />
          </div>
        </section>

        {/* Statistics Section */}
        <section className="bg-[#d4dbc4] py-6 sm:py-8 md:py-5 lg:py-6 xl:py-6 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-8">
          <div
            className="max-w-7xl mx-auto container-custom"
            style={{ fontFamily: "NotoSerif-semibold" }}
          >
            <Statistics />
          </div>
        </section>

        {/* Story About Us Section */}
        <section className="bg-[#e9e8ed] py-6 sm:py-8 md:py-5 lg:py-6 xl:py-6 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-8">
          <div
            className="max-w-7xl mx-auto container-custom"
            style={{ fontFamily: "NotoSerif-semibold" }}
          >
            <StoryAboutUs />
          </div>
        </section>

        {/* Create Your Brand Section */}
        <section className="bg-white py-4 sm:py-6 md:py-8 lg:py-5 xl:py-6 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-8">
          <div
            className="max-w-7xl mx-auto container-custom"
            style={{ fontFamily: "NotoSerif-semibold" }}
          >
            <CreateYourBrand />
          </div>
        </section>

        {/* Discover Product Section */}
        <section className="bg-[#e9e8ed] py-6 sm:py-8 md:py-5 lg:py-6 xl:py-8 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-8">
          <div
            className="max-w-7xl mx-auto container-custom"
            style={{ fontFamily: "NotoSerif-semibold" }}
          >
            <DiscoverProduct />
          </div>
        </section>

        {/* Quality Section */}
        <section className="bg-[#e9e8ed] py-4 sm:py-6 md:py-8 lg:py-5 xl:py-6 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-8">
          <div
            className="max-w-7xl mx-auto container-custom"
            style={{ fontFamily: "NotoSerif-semibold" }}
          >
            <ProductQuality />
          </div>
        </section>

        {/* Certification Section */}
        <section className="bg-[#e9e8ed] py-4 sm:py-6 md:py-8 lg:py-5 xl:py-6 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-8">
          <div
            className="max-w-7xl mx-auto container-custom"
            style={{ fontFamily: "NotoSerif-semibold" }}
          >
            <OurCertification />
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="bg-[#e9e8ed] py-6 sm:py-8 md:py-5 lg:py-5 xl:py-5 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-8">
          <div
            className="max-w-7xl mx-auto container-custom"
            style={{ fontFamily: "NotoSerif-semibold" }}
          >
            <ContactUsComponent />
          </div>
        </section>
      </main>
    </div>
  );
}
