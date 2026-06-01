"use client";
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
import AllIconComponent from "../../../../public/AllIconComponent";
import React from "react";
import { motion, Variants } from "framer-motion";

const PeanutButterImportGermany = () => {
  // Staggered variants for list and grid containers
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const slideLeftVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
      {/* Hero Section - Compact & Elegant */}
      <section className="relative bg-[#e9e8ed] py-10 sm:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-72 h-72 bg-primary-50 rounded-full blur-3xl opacity-30"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col lg:flex-row gap-8 items-center text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 16 }}
              className="flex-1 space-y-5"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-800 text-xs font-semibold tracking-wide uppercase" style={{ fontFamily: "Poppins-medium" }}>
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
              <p className="text-base sm:text-base text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium" style={{ fontFamily: "Poppins-medium" }}>
                Indian Foodtech is your manufacturing partner supplying premium
                peanut butter directly from India to distributors and brands
                across Germany.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="https://wa.me/919714899711"
                    className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md shadow-primary-200 transition-all"
                    style={{ fontFamily: "Poppins-medium" }}
                  >
                    <MessageSquare className="w-4.5 h-4.5" />
                    Get a Quote
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-primary-50 text-gray-700 px-6 py-3 rounded-full text-sm font-semibold transition-all"
                    style={{ fontFamily: "Poppins-medium" }}
                  >
                    Products
                    <ArrowRight className="w-4 h-4 hover:translate-x-1 transition-all" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.15 }}
              className="flex-1 w-full max-w-md lg:max-w-none"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-primary-500 rounded-[2rem] rotate-2 group-hover:rotate-1 transition-transform opacity-10"></div>
                <div className="relative bg-white rounded-[2rem] shadow-strong p-2 overflow-hidden border border-gray-100">
                  <div className="relative aspect-[16/10] bg-primary-50 rounded-[1.8rem] flex items-center justify-center overflow-hidden">
                    <Image
                      src="/country/import-germany.webp"
                      alt="undefined"
                      fill
                      className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Engagement Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="w-1.5 h-10 bg-primary-500 rounded-full"></div>
                Exporting Peanut Butter to Germany
              </h2>
              <p className="text-sm sm:text-sm text-gray-600 leading-relaxed mb-6 font-medium" style={{ fontFamily: "Poppins-medium" }}>
                We have extensive experience in the European markets,
                specifically understanding the detailed requirements of
                importers in Germany. Our operations are streamlined to ensure
                your orders arrive fresh and on time.
              </p>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2"
              >
                {[
                  "Bulk peanut butter supply",
                  "Private label & OEM services",
                  "Flexible packaging options",
                  "Competitive export pricing",
                  "Fast and secure shipping",
                ].map((item, idx) => (
                  <motion.div
                    variants={slideLeftVariants}
                    key={idx}
                    className="flex items-center gap-3"
                    style={{ fontFamily: "Poppins-medium" }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              whileHover={{ y: -4 }}
              className="md:w-1/3 bg-primary-600 rounded-3xl p-8 sm:px-10 sm:py-8 text-white shadow-xl cursor-default"
            >
              <h3 className="text-xl font-semibold mb-4">Germany Quick-Ship</h3>
              <ul className="space-y-3 font-medium opacity-90">
                <li className="flex items-center gap-3 text-sm" style={{ fontFamily: "Poppins-medium" }}>
                  <span className="font-medium text-base text-primary-200">01</span>
                  Direct Indian Port Access
                </li>
                <li className="flex items-center gap-3 text-sm" style={{ fontFamily: "Poppins-medium" }}>
                  <span className="font-medium text-base text-primary-200">02</span>
                  Optimized Transit Paths
                </li>
                <li className="flex items-center gap-3 text-sm" style={{ fontFamily: "Poppins-medium" }}>
                  <span className="font-medium text-base text-primary-200">03</span>
                  Complete Customs Support
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Specs */}
      <section className="py-12 sm:py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 flex gap-4">
            <div className="h-18 w-1.5 bg-primary-500 rounded-full"></div>
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-black mt-2 text-gray-900">
                Product Specifications
              </h2>
              <p className="max-w-2xl text-gray-600 font-medium tracking-wider text-sm" style={{ fontFamily: "Poppins-medium" }}>
                Engineered for Global Consumption
              </p>
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
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
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -6, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.08)" }}
                className="group relative bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-soft transition-all duration-500 overflow-hidden cursor-default"
              >
                <span className="absolute -top-4 -right-2 text-8xl font-black text-primary-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  {spec.num}
                </span>

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-4 group-hover:bg-primary-600 group-hover:text-white group-hover:rotate-6 transition-all duration-500 shadow-inner">
                    {spec.icon}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-primary-500/60 text-xs font-bold uppercase tracking-[0.15em]" style={{ fontFamily: "Poppins-medium" }}>
                      {spec.label}
                    </h4>
                    <div className="text-xl font-black text-gray-900 leading-tight tracking-tight">
                      {spec.value}
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-primary-500 group-hover:w-full transition-all duration-700"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 lg:items-center gap-4">
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 leading-tight">
                Why Choose Indian Foodtech?
              </h2>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-5"
              >
                {[
                  {
                    title: "Direct Manufacturer",
                    desc: "We eliminate middlemen, ensuring you get the freshest produce at factory prices.",
                  },
                  {
                    title: "Export Quality Standards",
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
                  <motion.div
                    variants={itemVariants}
                    key={idx}
                    className="flex items-center gap-5 group"
                  >
                    <div className="w-8 h-8 bg-primary-50 rounded-full flex-shrink-0 flex items-center justify-center text-primary-600 font-black group-hover:bg-primary-600 group-hover:text-white transition-colors border border-primary-100">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">
                        {item.title}
                      </h4>
                      <p className="text-gray-500 text-sm font-medium leading-relaxed" style={{ fontFamily: "Poppins-medium" }}>
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 90, damping: 15 }}
              className="order-1 lg:order-2"
            >
              <div className="bg-[#1D2C00] rounded-[2.5rem] p-12 text-white relative overflow-hidden">
                <div className="relative z-10 space-y-4">
                  <h3 className="text-xl font-black tracking-tight underline decoration-primary-500 underline-offset-8">
                    Direct Access
                  </h3>
                  <p className="text-base opacity-80 font-medium" style={{ fontFamily: "Poppins-medium" }}>
                    As a primary manufacturer, we control every step of the
                    process—from sourcing the finest peanuts to the final
                    airtight seal.
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-6 z-10 relative">
                  <div className="h-px bg-white/20 flex-1"></div>
                  <AllIconComponent
                    icon="excellentQualityIcon"
                    width={50}
                    height={50}
                    className="text-primary-400"
                  />
                  <div className="h-px bg-white/20 flex-1"></div>
                </div>
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Private Label Section */}
      <section className="py-12 sm:py-16 bg-[#1D2C00] text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 space-y-6 text-center lg:text-left"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl pr-34 font-black leading-[1.1]">
                Product Specifications
              </h2>
              <p className="text-sm pr-24 opacity-80 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0" style={{ fontFamily: "Poppins-medium" }}>
                Engineered for Global Consumption
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
                    className="bg-white/10 border border-white/20 px-6 py-2 rounded-full text-sm font-medium tracking-widest uppercase"
                    style={{ fontFamily: "Poppins-medium" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <div className="lg:w-1/2 w-full">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
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
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.04, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                    className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm text-center hover:bg-white/10 transition-colors cursor-default"
                  >
                    <div className="text-primary-400 mb-4 inline-block">
                      {card.icon}
                    </div>
                    <div className="text-sm font-bold tracking-widest uppercase whitespace-nowrap" style={{ fontFamily: "Poppins-medium" }}>
                      {card.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Export Process */}
      <section className="py-12 sm:py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 space-y-2">
            <h2 className="text-xl sm:text-3xl font-black text-gray-900">
              Why Choose Indian Foodtech?
            </h2>
            <p className="text-gray-500 sm:text-base font-medium" style={{ fontFamily: "Poppins-medium" }}>

            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
          >
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
              <motion.div
                variants={itemVariants}
                key={idx}
                className="text-center space-y-6 group cursor-default"
              >
                <div className="w-16 h-16 bg-primary-500 text-white rounded-full mx-auto flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-primary-600 transition-transform">
                  {step.icon}
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-black text-gray-900 tracking-tight">
                    {step.title}
                  </h4>
                  <p className="text-gray-500 font-medium text-sm leading-relaxed px-4" style={{ fontFamily: "Poppins-medium" }}>
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA / WhatsApp */}
      <section className="py-10 bg-primary-50 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="max-w-4xl mx-auto bg-white rounded-[3rem] p-12 sm:p-16 text-center shadow-strong border border-primary-100 relative overflow-hidden mb-10"
        >
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary-100 rounded-full blur-3xl opacity-30"></div>

          <div className="relative z-10 flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white shadow-xl animate-bounce-gentle">
              <Phone className="w-8 h-8" />
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 leading-tight">
              Private Label Peanut Butter{" "}
              <span className="text-primary-400">in Germany</span>
            </h2>
            <p className="text-base max-w-2xl text-gray-500 font-medium" style={{ fontFamily: "Poppins-medium" }}>
              Launch your own premium peanut butter brand in Germany with our
              end-to-end OEM services. We provide the quality; you provide the
              vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="https://wa.me/919714899711"
                  className="inline-flex items-center justify-center gap-3 bg-primary-500 hover:bg-primary-600 text-white px-10 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg"
                  style={{ fontFamily: "Poppins-medium" }}
                >
                  <div className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-3.5 h-3.5 fill-white" />
                  </div>
                  WhatsApp Now
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center border-2 border-primary-500 hover:bg-primary-50 text-primary-600 text-sm px-10 py-3 rounded-full font-semibold transition-all"
                  style={{ fontFamily: "Poppins-medium" }}
                >
                  Send Inquiry
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default PeanutButterImportGermany;
