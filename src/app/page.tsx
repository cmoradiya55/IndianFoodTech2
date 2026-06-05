import CreateYourBrand from "../../Component/CreateYourBrand/CreateYourBrand";
import DiscoverProduct from "../../Component/DiscoverProduct/DiscoverProduct";
import ProductQuality from "../../Component/ProductQuality/ProductQuality";
import Hero from "../../Component/Hero/Hero";
import Statistics from "../../Component/Statistics/Statistics";
import StoryAboutUs from "../../Component/StoryAboutUs/StoryAboutUs";
import OurCertification from "../../Component/OurCertification/OurCertification";
import ContactUsComponent from "../../Component/ContactUs/ContactUs";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
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
