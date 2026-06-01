"use client";

import { useState } from "react";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";

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
          {/* Page header with slide-up reveal */}
          <PageHeader
            title="Frequently Asked Questions"
            description="Quick answers about our products, exports, and services"
            className="mb-6 sm:mb-8"
            titleClassName="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight"
            descriptionClassName="text-xs sm:text-sm mt-1"
          />

          {/* Category tabs container with slide-up and micro-hover keys */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
            className="flex gap-2 overflow-x-auto pb-1 scrollbar-none"
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 border cursor-pointer ${isActive
                      ? "bg-primary-500 text-white border-primary-500"
                      : "bg-white text-gray-700 border-gray-200 hover:border-primary-500 hover:text-primary-500"
                    }`}
                  style={{ fontFamily: "Poppins-medium" }}
                >
                  {tab.label}
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* FAQ accordion - maintains native layout */}
      <FAQSection
        category={current.categories}
        title={current.title}
        showSchema={true}
      />

      {/* Still Have Questions CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-[#e9e8ed] py-10 sm:py-14 px-4"
      >
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
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="inline-block"
          >
            <Link
              href="/contact-us"
              className="inline-block bg-primary-500 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary-600 transition-colors duration-200"
              style={{ fontFamily: "Poppins-medium" }}
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
