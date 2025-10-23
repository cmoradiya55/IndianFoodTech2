/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import TextInput from '../FormComponents/TextInput';
import MobileInput from '../FormComponents/MobileInput';
import { AllProductsList } from '@/utils/ProductList';

const SampleRequestComponent = () => {

    const [productSelectionError, setProductSelectionError] = useState('');
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
        name: '',
        businessName: '',
        email: '',
        mobile: '',
        website: '',
        address: '',
        message: '',
        selectedProducts: {},
    });

    // Validation errors state
    const [errors, setErrors] = useState({
        name: '',
        businessName: '',
        email: '',
        mobile: '',
        website: '',
        address: ''
    });

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (Object.keys(formData.selectedProducts).length === 0) {
            setProductSelectionError('Please select at least one product');
            return;
        }

        const selectedProductIds = Object.keys(formData.selectedProducts);
        const selectedItems: any = [];

        AllProductsList.forEach(category => {
            category.products.forEach(product => {
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
            formType: 'sampleRequest'
        };

        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(submissionData),
            });

            const responseData = await response.json();

            if (!response.ok) {
                throw new Error(responseData.error || 'Failed to submit form');
            }

            // First show success alert (before any state updates)
            alert("Your sample request has been submitted successfully ✅");

            // Reset form data and errors
            setFormData({
                name: '',
                businessName: '',
                email: '',
                mobile: '',
                website: '',
                address: '',
                message: '',
                selectedProducts: {},
            });

            setErrors({
                name: '',
                businessName: '',
                email: '',
                mobile: '',
                website: '',
                address: ''
            });

            setProductSelectionError('');

            document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
                (checkbox as HTMLInputElement).checked = false;
            });

            setTimeout(() => {
                // closeModal();
            }, 1500);

        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error submitting form: ' + (error instanceof Error ? error.message : String(error)));
            return;
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when field is edited and valid
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    interface ProductSelection {
        [productId: string]: boolean;
    }

    const handleProductSelection = (
        productId: string,
        checked: boolean
    ): void => {
        setFormData(prev => {
            const updatedProducts: ProductSelection = { ...prev.selectedProducts };

            if (checked) {
                updatedProducts[productId] = true;
                // Clear product selection error if at least one product is selected
                setProductSelectionError('');
            } else {
                delete updatedProducts[productId];
                // Check if there are no products selected after deletion
                if (Object.keys(updatedProducts).length === 0) {
                    setProductSelectionError('Please select at least one product');
                }
            }

            return {
                ...prev,
                selectedProducts: updatedProducts
            };
        });
    };

    return (
        <div className='p-4 sm:p-6 md:p-8 lg:p-[50px]' style={{ fontFamily: 'NotoSerif-semibold' }}>

            {/* Header Section */}
            <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-10 flex gap-3 sm:gap-4">
                <div className="bg-primary-500 h-30 sm:h-24 md:h-28 lg:h-30 w-1.5 sm:w-2 rounded-2xl shrink-0"></div>
                <div className='mt-1 sm:mt-2 md:mt-3 lg:mt-4'>
                    <h1 className="text-2xl sm:text-3xl md:text-[36px] lg:text-[36px] font-bold text-gray-900 mb-1 sm:mb-2">
                        Request a Sample
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-[24px] text-primary-500 font-medium leading-relaxed" style={{ fontFamily: 'Inter_18pt-medium' }}>
                        Choose the products you would like to receive as samples.
                    </p>
                </div>
            </div>

            <div className="rounded-2xl sm:rounded-3xl border border-primary-600 shadow-lg">

                {/* Title Bar */}
                <div className="bg-primary-500 py-3 sm:py-4 md:py-4 lg:py-4 px-3 sm:px-4 md:px-6 lg:px-6 rounded-t-2xl sm:rounded-t-3xl">
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold text-white">Product Sample Request</h1>
                    <p className="text-xs sm:text-sm md:text-base lg:text-base text-primary-50">Select products from our categories to request samples</p>
                </div>

                {/* Form Section */}
                <form onSubmit={handleSubmit} className="p-3 sm:p-4 md:p-6 lg:p-6">
                    {/* Contact Information */}
                    <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-8">
                        <h3 className="text-base sm:text-lg md:text-xl lg:text-xl font-semibold text-primary-800 mb-3 sm:mb-4 md:mb-4 lg:mb-4 border-b pb-2">Company Information</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-6">
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
                                validateRegex={/^.+$/} // At least one character
                            />

                            <TextInput
                                label="Email Address"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="your@email.com"
                                type="email"
                                error={errors.email}
                                validateRegex={/^[^\s@]+@[^\s@]+\.[^\s@]+$/} // Email pattern
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
                                validateRegex={/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/} // URL pattern
                            />

                            <TextInput
                                label="Address"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                placeholder="123 Main St, City, Country"
                                type="text"
                                error={errors.address}
                                validateRegex={/^.+$/} // At least one character
                            />
                        </div>
                    </div>

                    {/* Product Selection */}
                    <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-8">

                        {/* Title */}
                        <div className="flex items-center justify-center mb-4 sm:mb-5 lg:mb-5">
                            <div
                                className="bg-[#1D2C00] text-white mt-6 sm:mt-8 md:mt-10 lg:mt-10 px-6 sm:px-12 md:px-24 lg:px-50 py-3 sm:py-4 md:py-5 lg:py-6 rounded-full text-base sm:text-xl md:text-2xl lg:text-[28px] font-normal text-center"
                                style={{ fontFamily: 'Inter_18pt-regular' }}
                            >
                                Select Products for Sample
                            </div>
                        </div>
                        
                        {/* Instructions */}
                        <p className="text-xs sm:text-sm md:text-sm lg:text-sm text-gray-600 mb-3 sm:mb-4 md:mb-6 lg:mb-6 text-center" style={{ fontFamily: 'Inter_18pt-regular' }}>Choose products you&apos;re interested in sampling:</p>
                        {productSelectionError && <p className="text-red-600 text-xs sm:text-sm md:text-sm lg:text-sm mb-2">{productSelectionError}</p>}

                        <div className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-6">
                            {AllProductsList.map(category => (
                                <div key={category.id} className="border border-primary-500 rounded-lg p-2 sm:p-3 md:p-5 lg:p-5 bg-[#d4dbc4]">
                                    <h4 className="font-medium text-sm sm:text-base md:text-lg lg:text-lg text-primary-600 mb-2 sm:mb-3 md:mb-4 lg:mb-4 flex items-center">
                                        <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                                        </svg>
                                        {category.categoryName}
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-2 md:gap-3 lg:gap-3">
                                        {category.products.map(product => (
                                            <div key={product.id} className="flex items-center bg-white p-2 sm:p-2 md:p-3 lg:p-3 rounded border border-primary-100">
                                                <input
                                                    id={`product-${product.id}`}
                                                    type="checkbox"
                                                    onChange={(e) => handleProductSelection(product.id, e.target.checked)}
                                                    className="h-3 w-3 sm:h-4 sm:w-4 md:w-4 md:h-4 lg:h-4 lg:w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                                                />
                                                <label htmlFor={`product-${product.id}`} className="ml-2 sm:ml-2 md:ml-3 lg:ml-3 text-xs sm:text-sm md:text-base lg:text-base text-gray-700" style={{ fontFamily: 'Inter_18pt-regular' }}>
                                                    {product.name}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Message */}
                    <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-8">
                        <label className="block text-gray-700 text-xs sm:text-sm md:text-sm lg:text-sm font-bold mb-2" htmlFor="message">
                            Additional Information
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleInputChange}
                            style={{ fontFamily: 'Inter_18pt-regular' }}
                            className="shadow appearance-none border rounded w-full py-2 sm:py-2 md:py-3 lg:py-3 px-3 sm:px-3 md:px-4 lg:px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary-500 text-xs sm:text-sm md:text-base lg:text-base"
                            placeholder="Tell us about your specific needs, target market, or any questions you have about our products..."
                        ></textarea>
                        <p className="text-xs sm:text-xs md:text-sm lg:text-sm text-gray-500 mt-1" style={{ fontFamily: 'Inter_18pt-regular' }}>Please provide any specific requirements or questions you may have.</p>
                    </div>

                    {/* Submit Button */}
                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            style={{ fontFamily: 'Inter_18pt-regular' }}
                            className="bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 sm:py-3 md:py-3 lg:py-3 px-6 sm:px-6 md:px-8 lg:px-8 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition duration-150 ease-in-out flex items-center text-sm sm:text-sm md:text-base lg:text-base shadow-lg shadow-primary-500/50"
                        >
                            <svg className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Submit
                        </button>
                    </div>
                </form>

                <div className='flex flex-col justify-center items-center gap-1 sm:gap-2 lg:gap-2 mb-2 sm:mb-3 lg:mb-3 px-2 sm:px-4' style={{ fontFamily: 'Inter_18pt-regular' }}>
                    <p className='text-xs sm:text-xs md:text-sm lg:text-[12px] font-medium text-gray-600 text-center'>
                        We will get back to you within 24 hours to confirm your sample request.
                    </p>
                    <p className='text-xs sm:text-sm md:text-sm lg:text-[14px] font-semibold text-black text-center'>
                        If you need urgent assistance, please call us at +91 9714890711
                    </p>
                </div>

            </div>

        </div>
    )
}

export default SampleRequestComponent