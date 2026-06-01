"use client";
import Image from "next/image";
import React from "react";
import WorksProcessSection from "../../../Component/WorksProcessSection/WorksProcessSection";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";

const PrivateLabels = () => {
  return (
    <div className="bg-[#e9e8ed] py-6 sm:py-8 md:py-12 px-3 sm:px-4 md:px-8 lg:px-8">
      <div
        className="mx-auto container-custom"
        style={{ fontFamily: "NotoSerif-semibold" }}
      >
        {/* Header Section with smooth slide-up reveal */}
        <PageHeader
          title="Private Label, Your Brand Our Expertise"
          description="Bring your ideas to life with custom-made food products crafted to match your taste, style, and vision."
          className="mb-6 md:mb-6"
          titleClassName="text-2xl font-bold mb-1 sm:mb-2"
          descriptionClassName="max-w-[500px] text-[15px]"
        />

        {/* About Private Labels Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white p-4 sm:p-6 md:p-8 lg:p-0 lg:px-8 mt-6 lg:mb-10 rounded-2xl sm:rounded-3xl lg:rounded-3xl shadow-lg lg:shadow-xl flex flex-col lg:flex-row lg:items-center lg:h-[396px] lg:relative"
          >
            {/* Image Section with clean spring scale entrance */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 90, damping: 16 }}
              className="flex justify-center mb-4 sm:mb-8 lg:block lg:absolute lg:left-[40px] lg:mb-0 lg:justify-start"
            >
              <div className="relative w-[300px] h-[170px] sm:w-[440px] sm:h-[250px] md:w-[610px] md:h-[350px] rounded-2xl border-2 border-black overflow-hidden z-10 bg-slate-50">
                <Image
                  src="/private_lable.webp"
                  alt="Peanut butter being poured"
                  className="w-full h-full object-cover"
                  fill
                />
              </div>

              {/* Decoration circles - perfectly preserved design */}
              <div className="hidden lg:block absolute bottom-1/2 right-55 w-[74px] h-[74px] bg-[#d4dbc4] rounded-full"></div>
              <div className="hidden lg:block absolute -bottom-7 left-70 w-[32px] h-[32px] bg-[#d4dbc4] rounded-full"></div>
              <div className="hidden lg:block absolute -bottom-3 -left-10 w-[116px] h-[116px] bg-[#d4dbc4] rounded-full"></div>
              <div className="hidden lg:block absolute -top-10 left-80 w-[52px] h-[52px] bg-[#d4dbc4] rounded-full"></div>
              <div className="hidden lg:block absolute -top-7 left-10 w-[33px] h-[33px] bg-[#d4dbc4] rounded-full"></div>
            </motion.div>

            {/* Content Section with slide-in from right */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 90, damping: 16 }}
              className="flex flex-col text-center lg:text-left lg:w-[40%] lg:ml-168"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-xl font-medium text-black mb-2.5 sm:mb-3 lg:mb-3">
                About Private Label
              </h2>
              <p
                className="text-gray-600 text-[15px] sm:text-sm lg:text-base leading-relaxed lg:leading-normal mb-4 sm:mb-6 lg:mb-4"
                style={{ fontFamily: "Poppins-regular" }}
              >
                At Indian Foodtech, we make it simple for you to launch your
                own brand of delicious nut-based spreads. From peanut butter
                to almond butter and beyond, we create high-quality products
                that can proudly carry your label. Our team works side by side
                with you to ensure every detail taste, quality, and packaging
                meets your exact expectations. With us, your brand doesn&#39;t
                just grow, it shines brighter than ever.
              </p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-primary-500 hover:bg-primary-600 shadow-md sm:shadow-xl lg:shadow-xl shadow-primary-500/50 text-white font-medium text-lg py-2 min-[400px]:py-2 sm:py-3 lg:py-2 px-4 sm:px-6 lg:px-6 rounded-full transition-colors duration-200 hover:shadow-lg w-full lg:w-auto cursor-pointer"
                style={{ fontFamily: "Poppins-regular" }}
              >
                Enquire Now
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Works - Our Process Section */}
        <div>
          <WorksProcessSection />
        </div>
      </div>
    </div>
  );
};

export default PrivateLabels;
