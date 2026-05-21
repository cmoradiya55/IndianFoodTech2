/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { countries } from "@/utils/CountryList";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

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

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="mb-8 sm:mb-10 md:mb-12 flex gap-3 sm:gap-4">
        <div className="bg-primary-500 h-30 sm:h-28 md:h-35 lg:h-28 w-1 sm:w-1.5 lg:w-1.5 rounded-2xl shrink-0"></div>
        <div className="mt-1 sm:mt-2">
          <h2 className="text-base sm:text-base md:text-lg lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-2">
            Contact Us
          </h2>
          <p
            className="text-sm sm:text-sm md:text-sm lg:text-base text-primary-500 font-medium leading-relaxed"
            style={{ fontFamily: "Poppins-medium" }}
          >
            Have questions or want to know more? We&apos;re here to help! Reach
            out to us
            <br className="hidden md:block" />
            anytime, and we&apos;ll make sure you get a quick and friendly
            response.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Left Card - Contact Information */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-3 sm:p-4 md:p-6">
          <div
            className="space-y-4 sm:space-y-4"
            style={{ fontFamily: "Poppins-regular" }}
          >
            {contactDetails.map((detail, index) => {
              const IconComponent = detail.Icon;
              return (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  <div className="mt-0.5">
                    <IconComponent className="w-4 h-4 text-primary-500" />
                  </div>
                  <div>
                    <p
                      className={`text-black font-medium text-xs sm:text-sm ${detail.isAddress ? "leading-relaxed" : ""
                        }`}
                    >
                      {detail.content}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Map */}
            <div className="mt-4 sm:mt-10 rounded-xl sm:rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=21.20460098512739, 72.990028915698&hl=es;z=14&output=embed"
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
            <button
              onClick={() =>
                window.open("https://wa.me/919714899711", "_blank")
              }
              className="w-full bg-primary-500 hover:bg-primary-600 text-white shadow-xl shadow-primary-500/50 font-semibold py-2 sm:py-3 rounded-full transition-colors duration-200 text-xs sm:text-sm mt-1 sm:mt-4"
            >
              Send a WhatsApp Message
            </button>
          </div>
        </div>

        {/* Right Card - Contact Form */}
        <form action="" onSubmit={handleSubmit}>
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-3 sm:p-4 md:p-6">
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
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 text-[10px] sm:text-xs lg:text-sm text-[#5D6079] focus:ring-primary-500 focus:border-transparent"
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
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 text-[10px] sm:text-xs lg:text-sm text-[#5D6079] focus:ring-primary-500 focus:border-transparent"
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
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 text-[10px] sm:text-xs lg:text-sm text-[#5D6079] focus:ring-primary-500 focus:border-transparent"
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
                    className="w-20 sm:w-[90px] md:w-[100px] px-1 sm:px-2 py-2 sm:py-2.5 bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 text-[10px] sm:text-xs lg:text-sm text-[#5D6079] focus:ring-primary-500 focus:border-transparent"
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
                    className="flex-1 px-2 sm:px-4 py-2 sm:py-2.5 bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 text-[10px] sm:text-xs lg:text-sm text-[#5D6079] focus:ring-primary-500 focus:border-transparent"
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
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 text-[10px] sm:text-xs lg:text-sm text-[#5D6079] focus:ring-primary-500 focus:border-transparent resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                className="w-full bg-primary-500 hover:bg-primary-600 shadow-xl shadow-primary-500/50 text-white font-semibold py-2 sm:py-3 rounded-full transition-colors duration-200 text-xs sm:text-sm"
                style={{ fontFamily: "Poppins-regular" }}
              >
                Send a Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsComponent;
