/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { countries } from "@/utils/CountryList";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { motion, Variants } from "framer-motion";
import PageHeader from "@/components/PageHeader";

const contactDetails = [
  {
    Icon: Clock,
    content: "Mon - Sat 9:00 AM - 6:00 PM IST",
    isAddress: false,
  },
  {
    Icon: Mail,
    content: "office@indiafoodtech.in",
    isAddress: false,
  },
  {
    Icon: Phone,
    content: "+91 9714899711",
    isAddress: false,
  },
  {
    Icon: MapPin,
    content: (
      <>
        Ground Floor, Plot No. 198, 197, 198
        <br />
        Om Industries Estate, Vibhag 1, Village : Mankana
        <br />
        Kamrej, Surat - 394190, Gujrat, India
      </>
    ),
    isAddress: true,
  },
];

const ContactUsComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    countryCode: "91",
    mobile: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const submissionData = {
      name: formData.name,
      businessName: formData.businessName,
      email: formData.email,
      mobile: formData.mobile,
      message: formData.message,
      formType: "contactUS",
    };

    if (!formData.name || !formData.email || !formData.businessName) {
      alert(
        "Please fill in all required fields: Name, Email, and Business Name.",
      );
      return;
    }

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error || "Failed to submit form");
      }

      // First show success message before any state changes
      alert("Your message has been sent successfully ✅");

      // Then reset form after success
      setFormData({
        name: "",
        businessName: "",
        email: "",
        countryCode: "91",
        mobile: "",
        message: "",
      });

      // Reset any checkboxes if they are added in future
      document
        .querySelectorAll('input[type="checkbox"]')
        .forEach((checkbox) => {
          (checkbox as HTMLInputElement).checked = false;
        });
    } catch (error) {
      console.error("Error submitting form:", error);
      if (error instanceof Error) {
        alert("Error submitting form: " + error.message);
      } else {
        alert("Error submitting form.");
      }
    }
  };

  // Framer Motion Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  const leftSlideVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
        delay: 0.2,
      },
    },
  };

  const rightSlideVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
        delay: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="max-w-7xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <PageHeader
        title="Contact Us"
        description={
          <>
            Have questions or want to know more? We&apos;re here to help! Reach
            out to us
            <br className="hidden md:block" />
            anytime, and we&apos;ll make sure you get a quick and friendly
            response.
          </>
        }
        className="mb-8 sm:mb-10 md:mb-12"
        titleClassName="text-base sm:text-base md:text-lg lg:text-2xl font-bold mb-2 sm:mb-2"
        descriptionClassName="text-sm sm:text-sm md:text-sm lg:text-base"
      />

      {/* Contact Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Left Card - Contact Information */}
        <motion.div
          variants={leftSlideVariants}
          className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-3 sm:p-4 md:p-6"
        >
          <div
            className="space-y-4 sm:space-y-4"
            style={{ fontFamily: "Poppins-regular" }}
          >
            {contactDetails.map((detail, index) => {
              const IconComponent = detail.Icon;
              return (
                <div key={index} className="flex items-start gap-3 sm:gap-4 group/detail cursor-pointer">
                  <div className="mt-0.5 transition-transform duration-300 group-hover/detail:scale-110">
                    <IconComponent className="w-4 h-4 text-primary-500" />
                  </div>
                  <div>
                    <p
                      className={`text-slate-800 group-hover/detail:text-primary-600 font-medium text-xs sm:text-sm transition-colors duration-300 ${detail.isAddress ? "leading-relaxed" : ""
                        }`}
                    >
                      {detail.content}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Map */}
            <div className="mt-4 sm:mt-10 rounded-xl sm:rounded-2xl overflow-hidden shadow-inner border border-slate-100">
              <iframe
                src="https://www.google.com/maps?q=Indian+Foodtech,+Kamrej,+Surat,+Gujarat,+India&hl=en&z=15&output=embed"
                width="100%"
                height="200"
                className="sm:h-[260px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* WhatsApp Button */}
            <motion.button
              onClick={() =>
                window.open("https://wa.me/919714899711", "_blank")
              }
              whileHover={{ scale: 1.01, y: -0.5, boxShadow: "0 20px 40px -10px rgba(111,158,18,0.3)" }}
              whileTap={{ scale: 0.99 }}
              className="w-full bg-primary-500 hover:bg-primary-600 text-white shadow-xl shadow-primary-500/30 font-semibold py-2 sm:py-3 rounded-full transition-all duration-300 text-xs sm:text-sm mt-1 sm:mt-4 cursor-pointer"
            >
              Send a WhatsApp Message
            </motion.button>
          </div>
        </motion.div>

        {/* Right Card - Contact Form */}
        <motion.div variants={rightSlideVariants}>
          <form action="" onSubmit={handleSubmit}>
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-3 sm:p-4 md:p-6 border border-slate-50">
              <div className="space-y-4 sm:space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-gray-700 text-xs lg:text-sm font-medium mb-2 sm:mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name Here"
                    style={{ fontFamily: "Poppins-regular" }}
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 text-[10px] sm:text-xs lg:text-sm text-[#5D6079] focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                {/* Business Name */}
                <div>
                  <label className="block text-gray-700 text-xs lg:text-sm font-medium mb-2 sm:mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="your business name Here"
                    style={{ fontFamily: "Poppins-regular" }}
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 text-[10px] sm:text-xs lg:text-sm text-[#5D6079] focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-gray-700 text-xs lg:text-sm font-medium mb-2 sm:mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="youremail@gmail.com"
                    style={{ fontFamily: "Poppins-regular" }}
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 text-[10px] sm:text-xs lg:text-sm text-[#5D6079] focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-gray-700 text-xs lg:text-sm font-medium mb-2 sm:mb-2">
                    Mobile Number
                  </label>
                  <div className="flex gap-1 sm:gap-2">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="w-20 sm:w-[60px] md:w-[60px] px-1 sm:px-2 py-2 sm:py-2.5 bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 text-[10px] sm:text-xs lg:text-sm text-[#5D6079] focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      style={{ fontFamily: "Poppins-regular" }}
                    >
                      {countries
                        .filter((country) => country.code !== 0) // Filter out countries with code 0
                        .sort((a, b) => a.name.localeCompare(b.name)) // Sort alphabetically by name
                        .map((country) => (
                          <option key={country.id} value={country.code}>
                            +{country.code}
                          </option>
                        ))}
                    </select>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Enter your number"
                      style={{ fontFamily: "Poppins-regular" }}
                      className="flex-1 px-2 sm:px-4 py-2 sm:py-2.5 bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 text-[10px] sm:text-xs lg:text-sm text-[#5D6079] focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                {/* Messages */}
                <div>
                  <label className="block text-gray-700 text-xs lg:text-sm font-medium mb-2 sm:mb-2">
                    Messages
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type here"
                    style={{ fontFamily: "Poppins-regular" }}
                    rows={5}
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 text-[10px] sm:text-xs lg:text-sm text-[#5D6079] focus:ring-primary-500 focus:border-transparent resize-none transition-all duration-300"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01, y: -0.5, boxShadow: "0 20px 40px -10px rgba(111,158,18,0.3)" }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full bg-primary-500 hover:bg-primary-600 shadow-xl shadow-primary-500/30 text-white font-semibold py-2 sm:py-3 rounded-full transition-all duration-300 text-xs sm:text-sm cursor-pointer"
                  style={{ fontFamily: "Poppins-regular" }}
                >
                  Send a Message
                </motion.button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactUsComponent;
