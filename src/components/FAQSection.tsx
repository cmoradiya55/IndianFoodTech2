"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Schema from "./Schema";
import FAQData from "@/data/FAQData.json";

type FAQCategory = "general" | "products" | "export" | "private-label";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  category: FAQCategory | FAQCategory[];
  title?: string;
  showSchema?: boolean;
  maxItems?: number;
  className?: string;
}

function getFAQItems(
  category: FAQCategory | FAQCategory[],
  maxItems?: number
): FAQItem[] {
  const categories = Array.isArray(category) ? category : [category];
  const items = categories.flatMap((cat) => FAQData[cat] ?? []);
  return maxItems ? items.slice(0, maxItems) : items;
}

function buildFAQSchema(items: FAQItem[]) {
  return {
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export default function FAQSection({
  category,
  showSchema = true,
  maxItems,
  className = "",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const items = getFAQItems(category, maxItems);

  if (items.length === 0) return null;

  // Stagger variants for accordion items reveal
  const listVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section
      className={`py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-white ${className}`}
    >
      {showSchema && (
        <Schema type="FAQPage" data={buildFAQSchema(items)} />
      )}

      <div className="max-w-4xl mx-auto container-custom">
        {/* Accordion List with staggered reveals */}
        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="space-y-3"
        >
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.005, translateY: -1 }}
                className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-sm sm:text-base font-semibold text-gray-900"
                    style={{ fontFamily: "NotoSerif-semibold" }}
                  >
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-primary-500 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p
                        className="px-5 pb-5 pt-1 text-sm sm:text-sm text-gray-600 leading-relaxed"
                        style={{ fontFamily: "Poppins-regular" }}
                      >
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
