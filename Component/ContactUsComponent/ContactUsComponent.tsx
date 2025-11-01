/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useState } from 'react'
import { countries } from '@/utils/CountryList'

const ContactUsComponent = () => {

    const [formData, setFormData] = useState({
        name: '',
        businessName: '',
        email: '',
        countryCode: '91',
        mobile: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
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
            alert("Please fill in all required fields: Name, Email, and Business Name.");
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
            document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
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
        <div className="py-4 sm:py-6 px-3 sm:px-4 md:px-8 max-w-7xl mx-auto">

            {/* Header Section */}
            <div className="mb-8 sm:mb-10 md:mb-12 flex gap-3 sm:gap-4">
                <div className="bg-primary-500 h-45 sm:h-28 md:h-35 w-1.5 sm:w-2 rounded-2xl shrink-0"></div>
                <div className="mt-1 sm:mt-2">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
                        Contact Us
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-primary-500 font-medium leading-relaxed" style={{ fontFamily: 'Inter_18pt-medium' }}>
                        Have questions or want to know more? We&apos;re here to help! Reach out to us
                        <br className="hidden md:block" />
                        anytime, and we&apos;ll make sure you get a quick and friendly response.
                    </p>
                </div>
            </div>

            {/* Contact Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">

                {/* Left Card - Contact Information */}
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-4 sm:p-6 md:p-8">
                    <div className="space-y-4 sm:space-y-6" style={{ fontFamily: 'Inter_18pt-regular' }}>
                        {/* Hours */}
                        <div className="flex items-start gap-3 sm:gap-4">
                            <div className="mt-0.5">
                                <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0ZM10 4C9.73478 4 9.48043 4.10536 9.29289 4.29289C9.10536 4.48043 9 4.73478 9 5V10C9.00006 10.2652 9.10545 10.5195 9.293 10.707L12.293 13.707C12.4816 13.8892 12.7342 13.99 12.9964 13.9877C13.2586 13.9854 13.5094 13.8802 13.6948 13.6948C13.8802 13.5094 13.9854 13.2586 13.9877 12.9964C13.99 12.7342 13.8892 12.4816 13.707 12.293L11 9.586V5C11 4.73478 10.8946 4.48043 10.7071 4.29289C10.5196 4.10536 10.2652 4 10 4Z" fill="#6F9E12" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-black font-medium text-sm sm:text-base">Mon - Sat 9:00 AM - 6:00 PM IST</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-3 sm:gap-4">
                            <div className="mt-0.5">
                                <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.89 0.537614C9.19414 0.334637 9.54811 0.218924 9.91342 0.203056C10.2787 0.187189 10.6414 0.271773 10.962 0.447614L11.109 0.537614L19.109 5.87061C19.3596 6.03763 19.5693 6.2591 19.7224 6.51848C19.8754 6.77787 19.968 7.06847 19.993 7.36861L20 7.53461V16.9996C20.0002 17.5042 19.8096 17.9902 19.4665 18.3602C19.1234 18.7301 18.6532 18.9568 18.15 18.9946L18 18.9996H2C1.49542 18.9998 1.00943 18.8092 0.639452 18.4661C0.269471 18.123 0.0428433 17.6528 0.00500011 17.1496L0 16.9996V7.53461C5.19133e-06 7.23352 0.0679945 6.9363 0.198897 6.66515C0.329799 6.394 0.520235 6.1559 0.756 5.96861L0.891 5.87061L8.89 0.537614ZM10 2.20161L2.803 6.99961L10 11.7976L17.197 6.99961L10 2.20161Z" fill="#6F9E12" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-black font-medium text-sm sm:text-base">office@indiafoodtech.in</p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-3 sm:gap-4">
                            <div className="mt-0.5">
                                <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M15.552 20.1335C14.112 20.0805 10.031 19.5165 5.757 15.2435C1.484 10.9695 0.921 6.88946 0.867 5.44846C0.787 3.25246 2.469 1.11946 4.412 0.28646C4.64598 0.185427 4.9022 0.14696 5.15553 0.174835C5.40886 0.20271 5.65059 0.295969 5.857 0.44546C7.457 1.61146 8.561 3.37546 9.509 4.76246C9.71758 5.06719 9.80677 5.43801 9.75956 5.80426C9.71235 6.17051 9.53204 6.50659 9.253 6.74846L7.302 8.19746C7.20774 8.26552 7.14139 8.36549 7.11528 8.47878C7.08916 8.59208 7.10505 8.711 7.16 8.81346C7.602 9.61646 8.388 10.8125 9.288 11.7125C10.189 12.6125 11.441 13.4505 12.3 13.9425C12.4077 14.0029 12.5345 14.0198 12.6543 13.9897C12.774 13.9596 12.8777 13.8847 12.944 13.7805L14.214 11.8475C14.4475 11.5373 14.7919 11.3295 15.1752 11.2676C15.5584 11.2058 15.9508 11.2946 16.27 11.5155C17.677 12.4895 19.319 13.5745 20.521 15.1135C20.6826 15.3214 20.7854 15.5689 20.8187 15.8301C20.8519 16.0913 20.8144 16.3567 20.71 16.5985C19.873 18.5515 17.755 20.2145 15.552 20.1335Z" fill="#6F9E12" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-black font-medium text-sm sm:text-base">+91 9714899711</p>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="flex items-start gap-3 sm:gap-4">
                            <div className="mt-0.5">
                                <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M15.552 20.1335C14.112 20.0805 10.031 19.5165 5.757 15.2435C1.484 10.9695 0.921 6.88946 0.867 5.44846C0.787 3.25246 2.469 1.11946 4.412 0.28646C4.64598 0.185427 4.9022 0.14696 5.15553 0.174835C5.40886 0.20271 5.65059 0.295969 5.857 0.44546C7.457 1.61146 8.561 3.37546 9.509 4.76246C9.71758 5.06719 9.80677 5.43801 9.75956 5.80426C9.71235 6.17051 9.53204 6.50659 9.253 6.74846L7.302 8.19746C7.20774 8.26552 7.14139 8.36549 7.11528 8.47878C7.08916 8.59208 7.10505 8.711 7.16 8.81346C7.602 9.61646 8.388 10.8125 9.288 11.7125C10.189 12.6125 11.441 13.4505 12.3 13.9425C12.4077 14.0029 12.5345 14.0198 12.6543 13.9897C12.774 13.9596 12.8777 13.8847 12.944 13.7805L14.214 11.8475C14.4475 11.5373 14.7919 11.3295 15.1752 11.2676C15.5584 11.2058 15.9508 11.2946 16.27 11.5155C17.677 12.4895 19.319 13.5745 20.521 15.1135C20.6826 15.3214 20.7854 15.5689 20.8187 15.8301C20.8519 16.0913 20.8144 16.3567 20.71 16.5985C19.873 18.5515 17.755 20.2145 15.552 20.1335Z" fill="#6F9E12" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-black font-medium leading-relaxed text-sm sm:text-base">
                                    Ground Floor, Plot No. 198, 197, 198<br />
                                    Om Industries Estate, Vibhag 1, Village : Mankana<br />
                                    Kamrej, Surat - 394190, Gujrat, India
                                </p>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="mt-4 sm:mt-6 rounded-xl sm:rounded-2xl overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps?q=21.20460098512739, 72.990028915698&hl=es;z=14&output=embed"
                                width="100%"
                                height="250"
                                className="sm:h-[300px]"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        {/* WhatsApp Button */}
                        <button
                            onClick={() => window.open('https://wa.me/919714899711', '_blank')}
                            className="w-full bg-primary-500 hover:bg-primary-600 text-white shadow-xl shadow-primary-500/50 font-semibold py-3 sm:py-4 rounded-full transition-colors duration-200 text-sm sm:text-base"
                        >
                            Send a WhatsApp Message
                        </button>
                    </div>
                </div>

                {/* Right Card - Contact Form */}
                <form action="" onSubmit={handleSubmit}>
                    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-4 sm:p-6 md:p-8">
                        <div className="space-y-4 sm:space-y-6">

                            {/* Name */}
                            <div>
                                <label className="block text-gray-700 text-sm sm:text-[14px] font-medium mb-2 sm:mb-4">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Name Here"
                                    style={{ fontFamily: 'Inter_18pt-regular' }}
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 text-xs sm:text-[12px] text-[#5D6079] focus:ring-primary-500 focus:border-transparent"
                                    required
                                />
                            </div>

                            {/* Business Name */}
                            <div>
                                <label className="block text-gray-700 text-sm sm:text-[14px] font-medium mb-2 sm:mb-4">
                                    Business Name
                                </label>
                                <input
                                    type="text"
                                    name="businessName"
                                    value={formData.businessName}
                                    onChange={handleChange}
                                    placeholder="your business name Here"
                                    style={{ fontFamily: 'Inter_18pt-regular' }}
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 text-xs sm:text-[12px] text-[#5D6079] focus:ring-primary-500 focus:border-transparent"
                                />
                            </div>

                            {/* Email Address */}
                            <div>
                                <label className="block text-gray-700 text-sm sm:text-[14px] font-medium mb-2 sm:mb-4">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="youremail@gmail.com"
                                    style={{ fontFamily: 'Inter_18pt-regular' }}
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 text-xs sm:text-[12px] text-[#5D6079] focus:ring-primary-500 focus:border-transparent"
                                    required
                                />
                            </div>

                            {/* Mobile Number */}
                            <div>
                                <label className="block text-gray-700 text-sm sm:text-[14px] font-medium mb-2 sm:mb-4">
                                    Mobile Number
                                </label>
                                <div className="flex gap-1 sm:gap-2">
                                    <select
                                        name="countryCode"
                                        value={formData.countryCode}
                                        onChange={handleChange}
                                        className="w-20 sm:w-[90px] md:w-[100px] px-1 sm:px-2 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 text-[10px] sm:text-xs text-[#5D6079] focus:ring-primary-500 focus:border-transparent"
                                        style={{ fontFamily: 'Inter_18pt-regular' }}
                                    >
                                        {countries
                                            .filter(country => country.code !== 0) // Filter out countries with code 0
                                            .sort((a, b) => a.name.localeCompare(b.name)) // Sort alphabetically by name
                                            .map((country) => (
                                                <option key={country.id} value={country.code}>
                                                    +{country.code}
                                                </option>
                                            ))
                                        }
                                    </select>
                                    <input
                                        type="tel"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        placeholder="Enter your number"
                                        style={{ fontFamily: 'Inter_18pt-regular' }}
                                        className="flex-1 px-2 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 text-xs sm:text-[12px] text-[#5D6079] focus:ring-primary-500 focus:border-transparent"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Messages */}
                            <div>
                                <label className="block text-gray-700 text-sm sm:text-[14px] font-medium mb-2 sm:mb-4">
                                    Messages
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Type here"
                                    style={{ fontFamily: 'Inter_18pt-regular' }}
                                    rows={5}
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 text-xs sm:text-[12px] text-[#5D6079] focus:ring-primary-500 focus:border-transparent resize-none"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                className="w-full bg-primary-500 hover:bg-primary-600 shadow-xl shadow-primary-500/50 text-white font-semibold py-3 sm:py-4 rounded-full transition-colors duration-200 text-sm sm:text-base"
                                style={{ fontFamily: 'Inter_18pt-regular' }}
                            >
                                Send a Message
                            </button>

                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default ContactUsComponent