import {
  ArrowRight,
  Castle,
  CheckCircle2,
  MessageSquare,
  Package,
  Phone,
  Settings2,
  ShieldCheck,
  Star,
  Truck,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import AllIconComponent from "../../../public/AllIconComponent";
import React from "react";

const PeanutButterImportGermany = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
      {/* Hero Section - Compact & Elegant */}
      <section className="relative bg-[#f8fcf0] py-10 sm:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-72 h-72 bg-primary-50 rounded-full blur-3xl opacity-30"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col lg:flex-row gap-8 items-center text-center lg:text-left">
            <div className="flex-1 space-y-5 animate-slide-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-800 text-xs font-bold tracking-wide uppercase">
                <Castle className="w-3.5 h-3.5" />
                Germany Supply Specialist
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 leading-[1.1] tracking-tighter">
                Peanut Butter Importer in Germany
                <br />
                <span className="text-primary-700 font-black">
                  Erdnussbutter-Importeur in Deutschland
                </span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Indian Foodtech is your manufacturing partner supplying premium
                peanut butter directly from India to distributors and brands
                across Germany.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Link
                  href="https://wa.me/919714899711"
                  className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full text-base font-bold shadow-md shadow-primary-200 transition-all transform hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4.5 h-4.5" />
                  Get a Quote
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-primary-500 text-gray-700 px-6 py-3 rounded-full text-base font-bold transition-all"
                >
                  Products
                  <ArrowRight className="w-4 h-4 hover:translate-x-1 transition-all" />
                </Link>
              </div>
            </div>

            <div className="flex-1 w-full max-w-md lg:max-w-none animate-fade-in">
              <div className="relative group">
                <div className="absolute inset-0 bg-primary-500 rounded-[2rem] rotate-2 group-hover:rotate-1 transition-transform opacity-10"></div>
                <div className="relative bg-white rounded-[2rem] shadow-strong p-2 overflow-hidden border border-gray-100">
                  <div className="relative aspect-[16/10] bg-primary-50 rounded-[1.8rem] flex items-center justify-center overflow-hidden">
                    <Image
                      src="/country/import-germany.webp"
                      alt="Peanut butter exporter from India to Germany bulk supply Berlin"
                      fill
                      className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <h2 className="text-lg sm:text-2xl font-black text-gray-900 mb-4 flex items-center gap-3">
                <div className="w-1.5 h-10 bg-primary-500 rounded-full"></div>
                Exporting Peanut Butter to Germany
              </h2>
              <p className="text-base text-gray-600 leading-relaxed mb-6 font-medium">
                We have extensive experience in the European markets,
                specifically understanding the detailed requirements of
                importers in Germany. Our operations are streamlined to ensure
                your orders arrive fresh and on time.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                {[
                  "Bulk peanut butter supply",
                  "Private label & OEM services",
                  "Flexible packaging options",
                  "Competitive export pricing",
                  "Fast and secure shipping",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <span className="text-gray-700 text-base font-semibold">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/3 bg-primary-600 rounded-3xl p-8 sm:px-10 sm:py-8 text-white shadow-xl">
              <h3 className="text-xl font-black mb-4">Germany Quick-Ship</h3>
              <ul className="space-y-3 font-medium opacity-90">
                <li className="flex gap-3">
                  <span className="font-black text-primary-200">01</span>
                  Direct Indian Port Access
                </li>
                <li className="flex gap-3">
                  <span className="font-black text-primary-200">02</span>
                  Optimized Transit Paths
                </li>
                <li className="flex gap-3">
                  <span className="font-black text-primary-200">03</span>
                  Complete Customs Support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product Specs */}
      <section className="py-8 sm:py-8 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 flex gap-4">
            <div className="h-20 w-1.5 bg-primary-500 rounded-full"></div>
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-black mt-2 text-gray-900">
                Product Specifications
              </h2>
              <p className="max-w-2xl text-gray-600 font-medium italic uppercase tracking-wider text-sm">
                Engineered for Global Consumption
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                label: "Variety",
                value: "Creamy & Crunchy",
                icon: <Star className="w-7 h-7" />,
                num: "01",
              },
              {
                label: "Flavors",
                value: "Custom Profiles",
                icon: <Settings2 className="w-7 h-7" />,
                num: "02",
              },
              {
                label: "Packaging",
                value: "200g to 25kg",
                icon: <Package className="w-7 h-7" />,
                num: "03",
              },
              {
                label: "Shelf Life",
                value: "12–24 Months",
                icon: <ShieldCheck className="w-7 h-7" />,
                num: "04",
              },
            ].map((spec, idx) => (
              <div
                key={idx}
                className="group relative bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-soft hover:shadow-2xl hover:shadow-primary-100/40 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Background Decor */}
                <span className="absolute -top-4 -right-2 text-8xl font-black text-primary-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  {spec.num}
                </span>

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-4 group-hover:bg-primary-600 group-hover:text-white group-hover:rotate-6 transition-all duration-500 shadow-inner">
                    {spec.icon}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-primary-500/60 text-xs font-bold uppercase tracking-[0.25em]">
                      {spec.label}
                    </h4>
                    <div className="text-xl font-black text-gray-900 leading-tight tracking-tight">
                      {spec.value}
                    </div>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-primary-500 group-hover:w-full transition-all duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-8 sm:py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 lg:items-center gap-4">
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 leading-tight">
                Why Choose Indian Foodtech?
              </h2>

              <div className="space-y-5">
                {[
                  {
                    title: "Direct Manufacturer",
                    desc: "We eliminate middlemen, ensuring you get the freshest produce at factory prices.",
                  },
                  {
                    title: "Export Quality Standrads",
                    desc: "Rigorous quality control adhering to international safety certifications.",
                  },
                  {
                    title: "Custom Branding",
                    desc: "End-to-end design and manufacturing support for your private label.",
                  },
                  {
                    title: "Dedicated Export Team",
                    desc: "Logistics experts to handle Germany import documentation and shipping.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-5 group">
                    <div className="w-10 h-10 bg-primary-50 rounded-full flex-shrink-0 flex items-center justify-center text-primary-600 font-black group-hover:bg-primary-600 group-hover:text-white transition-colors border border-primary-100">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-base font-medium leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="bg-[#1D2C00] rounded-[2.5rem] p-12 text-white relative overflow-hidden">
                <div className="relative z-10 space-y-4">
                  <h3 className="text-lg font-black tracking-tight underline decoration-primary-500 underline-offset-8">
                    Direct Access
                  </h3>
                  <p className="text-lg opacity-80 font-medium">
                    As a primary manufacturer, we control every step of the
                    process—from sourcing the finest peanuts to the final
                    airtight seal.
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-6 z-10 relative">
                  <div className="h-px bg-white/20 flex-1"></div>
                  <AllIconComponent
                    icon="excellentQualityIcon"
                    width={64}
                    height={64}
                    className="text-primary-400"
                  />
                  <div className="h-px bg-white/20 flex-1"></div>
                </div>
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 100 100"
                    fill="none"
                  >
                    <circle
                      cx="90"
                      cy="10"
                      r="40"
                      stroke="white"
                      strokeWidth="1"
                    />
                    <circle
                      cx="10"
                      cy="90"
                      r="40"
                      stroke="white"
                      strokeWidth="1"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Private Label Section */}
      <section className="py-8 sm:py-8 bg-[#1D2C00] text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl lg:text-3xl pr-34 font-black leading-[1.1]">
                Private Label Peanut Butter{" "}
                <span className="text-primary-400">in Germany</span>
              </h2>
              <p className="text-base pr-24 opacity-80 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Launch your own premium peanut butter brand in Germany with our
                end-to-end OEM services. We provide the quality; you provide the
                vision.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
                {[
                  "Custom Packaging",
                  "Logo Design",
                  "Bulk Supply",
                  "Market Ready",
                ].map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-white/10 border border-white/20 px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: <Star className="w-8 h-8" />,
                    label: "Premium Recipe",
                  },
                  {
                    icon: <Settings2 className="w-8 h-8" />,
                    label: "Custom Textures",
                  },
                  {
                    icon: <ShieldCheck className="w-8 h-8" />,
                    label: "Safety First",
                  },
                  {
                    icon: <Package className="w-8 h-8" />,
                    label: "Durable Jars",
                  },
                ].map((card, idx) => (
                  <div
                    key={idx}
                    className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm text-center hover:bg-white/10 transition-colors"
                  >
                    <div className="text-primary-400 mb-4 inline-block">
                      {card.icon}
                    </div>
                    <div className="text-sm font-black tracking-widest uppercase whitespace-nowrap">
                      {card.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Export Process */}
      <section className="py-8 sm:py-12 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900">
              Shipping & Export Process
            </h2>
            <p className="text-gray-600 font-medium">
              Streamlined logistics for Germany importers
            </p>
          </div>

          <div>
            {/* Connection Line */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {[
                {
                  title: "Documentation",
                  desc: "Precise execution of Invoice, Packing List, and COO.",
                  icon: <Star className="w-7 h-7" />,
                },
                {
                  title: "Secure Packing",
                  desc: "Export-grade packaging to withstand oceanic transit.",
                  icon: <Package className="w-7 h-7" />,
                },
                {
                  title: "Shipping Options",
                  desc: "Selection of best sea and air routes for Germany.",
                  icon: <Truck className="w-7 h-7" />,
                },
                {
                  title: "Local Support",
                  desc: "Advisory support for the import clearance process.",
                  icon: <ShieldCheck className="w-7 h-7" />,
                },
              ].map((step, idx) => (
                <div key={idx} className="text-center space-y-6 group">
                  <div className="w-16 h-16 bg-primary-500 text-white rounded-full mx-auto flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-transform">
                    {step.icon}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-black text-gray-900 uppercase tracking-tight">
                      {step.title}
                    </h4>
                    <p className="text-gray-500 font-medium text-sm leading-relaxed px-4">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA / WhatsApp */}
      <section className="py-10 bg-primary-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-12 sm:p-16 text-center shadow-strong border border-primary-100 relative overflow-hidden mb-10">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary-100 rounded-full blur-3xl opacity-30"></div>

          <div className="relative z-10 flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white shadow-xl animate-bounce-gentle">
              <Phone className="w-8 h-8" />
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 leading-tight px-12">
              Ready to Import Peanut Butter in Germany?
            </h2>
            <p className="text-lg text-gray-600 font-medium leading-relaxed">
              Launch your brand or replenish your stock today. Contact us for
              real-time pricing and sample requests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <Link href="https://wa.me/919714899711" className="inline-flex items-center justify-center gap-3 bg-primary-500 hover:bg-primary-600 text-white px-10 py-2 rounded-full text-base font-semibold transition-all shadow-lg hover:-translate-y-1">
                <div className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-3.5 h-3.5 fill-white" />
                </div>
                WhatsApp Now
              </Link>
              <Link
                href="/contactUs"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary-500 hover:bg-primary-50 text-primary-700 px-10 py-2 rounded-full text-base font-semibold transition-all"
              >
                Send Inquiry
              </Link>
            </div>
            <div className="pt-4 border-t border-gray-200 w-full flex flex-col items-center gap-2">
              <span className="text-gray-400 font-bold uppercase tracking-[0.2em] text-xs">
                Official Partner
              </span>
              <div className="text-lg font-black text-gray-900 tracking-tight">
                INDIAN <span className="text-primary-600">FOODTECH</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA (Mobile) - Could be a component but for now here */}
      <div className="fixed bottom-6 right-6 z-50 sm:hidden">
        <Link
          href="https://wa.me/919714899711"
          className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl animate-pulse"
        >
          <MessageSquare className="w-8 h-8 fill-current" />
        </Link>
      </div>
    </div>
  );
};

export default PeanutButterImportGermany;
