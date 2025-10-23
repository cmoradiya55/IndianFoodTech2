import { countries } from '@/utils/CountryList';
import React, { useEffect, useRef, useState } from 'react';    


export default function MobileInput({
  label,
  name,
  value,
  onChange,
  error,
  placeholder = "Enter mobile number",
  defaultCountryCode = '91'
}) {
  const [selectedCountryCode, setSelectedCountryCode] = useState(defaultCountryCode);
  const [mobileNumber, setMobileNumber] = useState(value || '');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef();

  // Handle clicks outside dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const onMobileNumberChange = (e) => {
    const { value } = e.target;
    if (/^\d{0,15}$/.test(value)) {
      setMobileNumber(value);
      onChange({ target: { name, value: selectedCountryCode + '-' + value } });
    }
  };

  const handleCountryCodeChange = (countryCode) => {
    setSelectedCountryCode(countryCode);
    setIsDropdownOpen(false);
    setSearchTerm('');
    onChange({ target: { name, value: countryCode + '-' + mobileNumber } });
  };

  // const selectedCountry = countries.find(c => c.code === selectedCountryCode);

  // Filter countries by search term
  const filteredCountries = countries.filter(
    c => c.name.toLowerCase().includes(searchTerm.toLowerCase()) || c.code.includes(searchTerm)
  );

  return (
    <div className="relative">
      <label className="block text-sm sm:text-md text-primary-600 mb-2 font-medium" htmlFor={name}>
        {label}
      </label>

      <div className='flex '>
        {/* Country Picker */}
        <div ref={dropdownRef} className="relative">
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="h-full px-3 py-3 border border-r-0 border-primary-500 rounded-l-xl focus:outline-none flex items-center "
          >
            <span className="text-sm font-medium text-primary-500">
              +{selectedCountryCode}
              {/* {selectedCountry?.flag} */}
            </span>
            <svg
              className={`w-4 h-4 ml-1 text-primary-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-1 w-64 max-h-60 bg-white border rounded-lg shadow-lg z-10">
              <div className="p-2 border-b border-gray-200 text-black">
                <input
                  type="text"
                  placeholder="Search countries..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                  style={{ fontFamily: 'Inter_18pt-regular' }}
                />
              </div>
              <div className="py-1 max-h-48 overflow-y-auto">
                {filteredCountries.map(country => (
                  <button
                    key={country.phonecode}
                    type="button"
                    className={`w-full text-left px-4 py-2 hover:bg-amber-50 focus:bg-amber-50 focus:outline-none text-sm ${selectedCountryCode === country.code ? 'bg-amber-100 text-primary-500' : 'text-gray-900'}`}
                    onClick={() => handleCountryCodeChange(country.code)}
                  >
                    {/* <span className="mr-2">{country.flag}</span> */}
                    <span className="font-medium">+{country.code}</span>
                    <span className="text-gray-600 ml-2">{country.name}</span>
                  </button>
                ))}
                {filteredCountries.length === 0 && (
                  <p className="text-gray-500 text-sm px-4 py-2">No countries found</p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Mobile Number Input */}
        <input
          id={name}
          name={name}
          type="text"
          value={mobileNumber}
          onChange={onMobileNumberChange}
          placeholder={placeholder}
          style={{ fontFamily: 'Inter_18pt-regular' }}
          className="shadow appearance-none text-sm sm:text-md border rounded-r-xl w-full py-3 px-4 text-primary-500 leading-tight focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
