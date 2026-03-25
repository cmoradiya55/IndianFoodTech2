/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import TextInput from "../FormComponents/TextInput";
import MobileInput from "../FormComponents/MobileInput";
import { AllProductsList } from "@/utils/ProductList";
import { Mail } from "lucide-react";

const SampleRequestComponent = () => {
  const [productSelectionError, setProductSelectionError] = useState("");
  const [formData, setFormData] = useState<{
    name: string;
    businessName: string;
    email: string;
    mobile: string;
    website: string;
    address: string;
    message: string;
    selectedProducts: { [productId: string]: boolean };
  }>({
    name: "",
    businessName: "",
    email: "",
    mobile: "",
    website: "",
    address: "",
    message: "",
    selectedProducts: {},
  });

  // Validation errors state
  const [errors, setErrors] = useState({
    name: "",
    businessName: "",
    email: "",
    mobile: "",
    website: "",
    address: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (Object.keys(formData.selectedProducts).length === 0) {
      setProductSelectionError("Please select at least one product");
      return;
    }

    const selectedProductIds = Object.keys(formData.selectedProducts);
    const selectedItems: any = [];

    AllProductsList.forEach((category) => {
      category.products.forEach((product) => {
        if (selectedProductIds.includes(product.id)) {
          selectedItems.push(`${product.name} (${category.categoryName})`);
        }
      });
    });

    const submissionData = {
      name: formData.name,
      businessName: formData.businessName,
      email: formData.email,
      mobile: formData.mobile,
      website: formData.website,
      address: formData.address,
      message: formData.message,
      selectedProducts: selectedItems,
      formType: "sampleRequest",
    };

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

      // First show success alert (before any state updates)
      alert("Your sample request has been submitted successfully ✅");

      // Reset form data and errors
      setFormData({
        name: "",
        businessName: "",
        email: "",
        mobile: "",
        website: "",
        address: "",
        message: "",
        selectedProducts: {},
      });

      setErrors({
        name: "",
        businessName: "",
        email: "",
        mobile: "",
        website: "",
        address: "",
      });

      setProductSelectionError("");

      document
        .querySelectorAll('input[type="checkbox"]')
        .forEach((checkbox) => {
          (checkbox as HTMLInputElement).checked = false;
        });

      setTimeout(() => {
        // closeModal();
      }, 1500);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "Error submitting form: " +
          (error instanceof Error ? error.message : String(error)),
      );
      return;
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when field is edited and valid
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  interface ProductSelection {
    [productId: string]: boolean;
  }

  const handleProductSelection = (
    productId: string,
    checked: boolean,
  ): void => {
    setFormData((prev) => {
      const updatedProducts: ProductSelection = { ...prev.selectedProducts };

      if (checked) {
        updatedProducts[productId] = true;
        // Clear product selection error if at least one product is selected
        setProductSelectionError("");
      } else {
        delete updatedProducts[productId];
        // Check if there are no products selected after deletion
        if (Object.keys(updatedProducts).length === 0) {
          setProductSelectionError("Please select at least one product");
        }
      }

      return {
        ...prev,
        selectedProducts: updatedProducts,
      };
    });
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-6 mx-auto max-w-[900px] w-full font-sans">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center mb-8 md:mb-5">
        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
          <svg
            className="w-8 h-8 text-primary-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            />
          </svg>
        </div>
        <h1
          className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2"
          style={{ fontFamily: "NotoSerif-semibold" }}
        >
          Request a Sample
        </h1>
        <p
          className="text-sm sm:text-base text-gray-500 max-w-lg"
          style={{ fontFamily: "Inter_18pt-regular" }}
        >
          Discover the authentic taste of our premium exports. Tell us your
          requirements and we&apos;ll prepare a curated sample package.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 md:space-y-6">
        {/* Section 1: Company Details */}
        <div className="bg-white rounded-3xl p-5 md:p-5 shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-primary-500 rounded-l-3xl"></div>

          <h3
            className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3 ml-2 md:ml-4"
            style={{ fontFamily: "NotoSerif-semibold" }}
          >
            <span className="bg-primary-100 text-primary-700 w-8 h-8 rounded-full flex items-center justify-center text-sm">
              1
            </span>
            Company Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 ml-2 md:ml-12">
            <TextInput
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="John Doe"
              type="text"
              error={errors.name}
              validateRegex={/^[a-zA-Z\s]+$/}
            />

            <TextInput
              label="Business Name"
              name="businessName"
              value={formData.businessName}
              onChange={handleInputChange}
              placeholder="Your Business Name"
              type="text"
              error={errors.businessName}
              validateRegex={/^.+$/}
            />

            <TextInput
              label="Email Address"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your@email.com"
              type="email"
              error={errors.email}
              validateRegex={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
            />

            <MobileInput
              label="WhatsApp Number"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              placeholder="123-456-7890"
              error={errors.mobile}
            />

            <TextInput
              label="Website"
              name="website"
              value={formData.website}
              onChange={handleInputChange}
              placeholder="www.yourwebsite.com"
              type="text"
              error={errors.website}
              validateRegex={
                /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
              }
            />

            <TextInput
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="123 Main St, City, Country"
              type="text"
              error={errors.address}
              validateRegex={/^.+$/}
            />
          </div>
        </div>

        {/* Section 2: Product Selection */}
        <div className="bg-white rounded-3xl p-5 md:p-5 shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-primary-500 rounded-l-3xl"></div>

          <h3
            className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-3 ml-2 md:ml-4"
            style={{ fontFamily: "NotoSerif-semibold" }}
          >
            <span className="bg-primary-100 text-primary-700 w-8 h-8 rounded-full flex items-center justify-center text-sm">
              2
            </span>
            Select Products
          </h3>
          <p
            className="text-sm text-gray-500 mb-6 ml-2 md:ml-15"
            style={{ fontFamily: "Inter_18pt-regular" }}
          >
            Choose the products you are interested in sampling.
          </p>

          {productSelectionError && (
            <p className="text-red-500 text-sm mb-4 ml-2 md:ml-15 font-medium">
              {productSelectionError}
            </p>
          )}

          <div className="ml-2 md:ml-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {AllProductsList.map((category) => (
              <div
                key={category.id}
                className="bg-[#fcfdfa] border border-[#e5eadb] p-4 rounded-2xl hover:border-primary-300 transition-colors shadow-sm"
              >
                <h4 className="font-semibold text-primary-800 mb-3 text-sm md:text-base border-b border-[#e5eadb] pb-2 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                  {category.categoryName}
                </h4>
                <div className="flex flex-col gap-3">
                  {category.products.map((product) => (
                    <label
                      key={product.id}
                      className="flex items-start gap-3 cursor-pointer group"
                    >
                      <div className="pt-0.5 relative flex items-center justify-center">
                        <input
                          id={`product-${product.id}`}
                          type="checkbox"
                          onChange={(e) =>
                            handleProductSelection(product.id, e.target.checked)
                          }
                          className="w-4 h-4 md:w-5 md:h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500 cursor-pointer transition-all"
                        />
                      </div>
                      <span
                        className="text-sm text-gray-700 group-hover:text-primary-700 transition-colors select-none leading-tight"
                        style={{ fontFamily: "Inter_18pt-regular" }}
                      >
                        {product.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Messages & Submit */}
        <div className="bg-white rounded-3xl p-5 md:p-4 shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-primary-500 rounded-l-3xl"></div>

          <h3
            className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3 ml-2 md:ml-4"
            style={{ fontFamily: "NotoSerif-semibold" }}
          >
            <span className="bg-primary-100 text-primary-700 w-8 h-8 rounded-full flex items-center justify-center text-sm">
              3
            </span>
            Additional Notes
          </h3>

          <div className="ml-2 md:ml-15 mb-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 focus-within:text-primary-600 transition-colors"
              htmlFor="message"
            >
              Tell us more about your needs
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full border border-gray-200 rounded-2xl p-4 focus:ring-2 focus:ring-primary-500 outline-none text-sm md:text-base transition-all resize-none shadow-sm focus:border-primary-500 text-gray-700"
              placeholder="Specific requirements, target market, export destination..."
              style={{ fontFamily: "Inter_18pt-regular" }}
            ></textarea>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col items-center">
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-2.5 md:px-8 md:py-2 rounded-full font-semibold text-sm md:text-base shadow-[0_8px_20px_rgb(29,44,0,0.2)] transition-all transform hover:-translate-y-1 w-full sm:w-auto flex items-center justify-center gap-2"
              style={{ fontFamily: "Inter_18pt-regular" }}
            >
              <Mail className="w-5 h-5 mr-1" />
              Submit Request
            </button>
            <div className="text-center mt-4 text-gray-500">
              <p className="text-xs md:text-sm font-medium">
                We will review your request and contact you within 24 hours.
              </p>
              <p className="text-xs md:text-sm mt-1">
                Need urgent assistance? Call us at{" "}
                <span className="font-semibold text-gray-700">
                  +91 9714890711
                </span>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SampleRequestComponent;
