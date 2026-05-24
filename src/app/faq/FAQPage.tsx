"use client";

import { useState } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";

type FAQCategory = "general" | "products" | "export" | "private-label";

interface Tab {
  id: string;
  label: string;
  categories: FAQCategory[];
  title: string;
}

const tabs: Tab[] = [
  {
    id: "all",
    label: "All",
    categories: ["general", "products", "export", "private-label"],
    title: "Frequently Asked Questions",
  },
  {
    id: "general",
    label: "General",
    categories: ["general"],
    title: "General Questions",
  },
  {
    id: "products",
    label: "Products",
    categories: ["products"],
    title: "Product Questions",
  },
  {
    id: "export",
    label: "Export & Shipping",
    categories: ["export"],
    title: "Export & Shipping",
  },
  {
    id: "private-label",
    label: "Private Label",
    categories: ["private-label"],
    title: "Private Label Questions",
  },
];


export default function FAQPage() {
  const [activeTab, setActiveTab] = useState("all");

  const current = tabs.find((t) => t.id === activeTab) ?? tabs[0];

  return (
    <>

      <div className="bg-[#e9e8ed] py-6 sm:py-8 px-3 sm:px-4 md:px-8">
        <div
          className="max-w-7xl mx-auto container-custom"
          style={{ fontFamily: "NotoSerif-semibold" }}
        >
          {/* Page header */}
          <div className="mb-6 sm:mb-8 flex gap-3 sm:gap-4">
            <div className="bg-primary-500 h-14 sm:h-16 w-1 sm:w-1.5 rounded-2xl shrink-0" />
            <div className="mt-1">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                Frequently Asked Questions
              </h1>
              <p
                className="text-xs sm:text-sm text-primary-500 font-medium mt-1"
                style={{ fontFamily: "Poppins-medium" }}
              >
                Quick answers about our products, exports, and services
              </p>
            </div>
          </div>

          {/* Category tabs */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 border ${isActive
                    ? "bg-primary-500 text-white border-primary-500"
                    : "bg-white text-gray-700 border-gray-200 hover:border-primary-500 hover:text-primary-500"
                    }`}
                  style={{ fontFamily: "Poppins-medium" }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* FAQ accordion */}
      <FAQSection
        category={current.categories}
        title={current.title}
        showSchema={true}
      />

      {/* CTA */}
      <div className="bg-[#e9e8ed] py-10 sm:py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-xl sm:text-2xl font-bold text-gray-900 mb-3"
            style={{ fontFamily: "NotoSerif-semibold" }}
          >
            Still have questions?
          </h2>
          <p
            className="text-sm sm:text-base text-gray-600 mb-6"
            style={{ fontFamily: "Poppins-regular" }}
          >
            Our export team responds within 24 hours on business days.
          </p>
          <Link
            href="/contact-us"
            className="inline-block bg-primary-500 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary-600 transition-colors duration-200"
            style={{ fontFamily: "Poppins-medium" }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
