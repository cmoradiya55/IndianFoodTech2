import { Metadata } from "next";
import Link from "next/link";
import { Globe, ArrowRight, ShieldCheck, Truck, Package, Star } from "lucide-react";
import React from "react";

export const metadata: Metadata = {
  title: "International Peanut Butter Markets | Global Export & Supply",
  description:
    "Explore Indian Foodtech's global footprint. High-quality peanut butter export and supply services across 47 international markets including Europe, Asia, and more.",
  keywords: [
    "international peanut butter export",
    "global peanut butter supplier",
    "peanut butter import europe",
    "indian peanut butter manufacturer",
  ],
  alternates: {
    canonical: "https://www.indianfoodtech.in/international",
  },
};

const importers = [
  { name: "Czech Republic", slug: "peanut-butter-import-czech-republic" },
  { name: "Denmark", slug: "peanut-butter-import-denmark" },
  { name: "Estonia", slug: "peanut-butter-import-estonia" },
  { name: "Finland", slug: "peanut-butter-import-finland" },
  { name: "France", slug: "peanut-butter-import-france" },
  { name: "Germany", slug: "peanut-butter-import-germany" },
  { name: "Greece", slug: "peanut-butter-import-greece" },
  { name: "Hungary", slug: "peanut-butter-import-hungary" },
  { name: "Iceland", slug: "peanut-butter-import-iceland" },
  { name: "Ireland", slug: "peanut-butter-import-ireland" },
  { name: "Italy", slug: "peanut-butter-import-italy" },
  { name: "Kosovo", slug: "peanut-butter-import-kosovo" },
  { name: "Latvia", slug: "peanut-butter-import-latvia" },
  { name: "Liechtenstein", slug: "peanut-butter-import-liechtenstein" },
  { name: "Lithuania", slug: "peanut-butter-import-lithuania" },
  { name: "Luxembourg", slug: "peanut-butter-import-luxembourg" },
  { name: "Malta", slug: "peanut-butter-import-malta" },
  { name: "Montenegro", slug: "peanut-butter-import-montenegro" },
  { name: "Slovenia", slug: "peanut-butter-import-slovenia" },
  { name: "Spain", slug: "peanut-butter-import-spain" },
  { name: "Sweden", slug: "peanut-butter-import-sweden" },
  { name: "Switzerland", slug: "peanut-butter-import-switzerland" },
  { name: "Ukraine", slug: "peanut-butter-import-ukraine" },
  { name: "United Kingdom", slug: "peanut-butter-import-united-kingdom" },
  { name: "Vatican City", slug: "peanut-butter-import-vatican-city" },
];

const suppliers = [
  { name: "Albania", slug: "peanut-butter-supplier-albania" },
  { name: "Andorra", slug: "peanut-butter-supplier-andorra" },
  { name: "Austria", slug: "peanut-butter-supplier-austria" },
  { name: "Belarus", slug: "peanut-butter-supplier-belarus" },
  { name: "Belgium", slug: "peanut-butter-supplier-belgium" },
  { name: "Bosnia Herzegovina", slug: "peanut-butter-supplier-bosnia-herzegovina" },
  { name: "Bulgaria", slug: "peanut-butter-supplier-bulgaria" },
  { name: "Croatia", slug: "peanut-butter-supplier-croatia" },
  { name: "Cyprus", slug: "peanut-butter-supplier-cyprus" },
  { name: "Moldova", slug: "peanut-butter-supplier-moldova" },
  { name: "Monaco", slug: "peanut-butter-supplier-monaco" },
  { name: "Netherlands", slug: "peanut-butter-supplier-netherlands" },
  { name: "North Macedonia", slug: "peanut-butter-supplier-north-macedonia" },
  { name: "Norway", slug: "peanut-butter-supplier-norway" },
  { name: "Philippines", slug: "peanut-butter-supplier-philippines" },
  { name: "Poland", slug: "peanut-butter-supplier-poland" },
  { name: "Portugal", slug: "peanut-butter-supplier-portugal" },
  { name: "Romania", slug: "peanut-butter-supplier-romania" },
  { name: "Russia", slug: "peanut-butter-supplier-russia" },
  { name: "San Marino", slug: "peanut-butter-supplier-san-marino" },
  { name: "Serbia", slug: "peanut-butter-supplier-serbia" },
  { name: "Slovakia", slug: "peanut-butter-supplier-slovakia" },
];

const features = [
  { icon: ShieldCheck, label: "Certified Quality" },
  { icon: Truck, label: "Global Logistics" },
  { icon: Package, label: "Bulk Solutions" },
  { icon: Star, label: "Private Label" },
];

export default function InternationalHub() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-[#f8fcf0] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-30"></div>

        <div className="max-w-7xl mx-auto relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 text-primary-800 text-sm font-bold tracking-wide uppercase mb-6">
            <Globe className="w-4 h-4" />
            Global Footprint
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-gray-950 leading-[1.1] tracking-tighter mb-8">
            Our International <span className="text-primary-700">Markets</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium mb-12">
            Indian Foodtech proudly serves 47 international markets with premium, 
            factory-fresh peanut butter. Discover our localized supply chain solutions 
            and import expertise in your region.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {features.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 p-4 bg-white/50 rounded-2xl border border-white">
                <div className="p-3 bg-primary-100 text-primary-700 rounded-xl">
                  <item.icon className="w-6 h-6" />
                </div>
                <span className="text-sm font-bold text-gray-900">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Markets Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Importers Column */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 border-b-2 border-primary-500 pb-4">
                <div className="h-10 w-2 bg-primary-500 rounded-full"></div>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight">
                  Peanut Butter Importers
                </h2>
              </div>
              <p className="text-gray-600 font-medium leading-relaxed">
                Localized import solutions and distribution networks across these major regions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {importers.map((market) => (
                  <Link 
                    key={market.slug} 
                    href={`/${market.slug}`}
                    className="group flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-primary-600 hover:border-primary-500 transition-all duration-300"
                  >
                    <span className="text-gray-800 font-bold group-hover:text-white transition-colors">
                      {market.name}
                    </span>
                    <ArrowRight className="w-4 h-4 text-primary-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Suppliers Column */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 border-b-2 border-primary-500 pb-4">
                <div className="h-10 w-2 bg-primary-500 rounded-full"></div>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight">
                  Peanut Butter Suppliers
                </h2>
              </div>
              <p className="text-gray-600 font-medium leading-relaxed">
                Premium manufacturing and bulk supply services for international partners.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {suppliers.map((market) => (
                  <Link 
                    key={market.slug} 
                    href={`/${market.slug}`}
                    className="group flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-primary-600 hover:border-primary-500 transition-all duration-300"
                  >
                    <span className="text-gray-800 font-bold group-hover:text-white transition-colors">
                      {market.name}
                    </span>
                    <ArrowRight className="w-4 h-4 text-primary-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1D2C00] text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-5xl font-black leading-tight">
            Ready to Partner with India&apos;s Leading Manufacturer?
          </h2>
          <p className="text-xl opacity-80 font-medium">
            Join our global network of distributors and experience premium quality 
            peanut butter delivered anywhere in the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link 
              href="/contactUs" 
              className="px-10 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-full font-bold text-lg shadow-xl transition-all hover:-translate-y-1"
            >
              Contact Our Export Team
            </Link>
            <Link 
              href="/products" 
              className="px-10 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full font-bold text-lg backdrop-blur-sm transition-all"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
