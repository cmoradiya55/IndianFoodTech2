"use client";
import React from 'react'
import ContactUsComponent from '../../../Component/ContactUs/ContactUs';
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <div className='bg-[#e9e8ed] py-4 sm:py-12 mt-12 sm:mt-6'>
      <div className='min-h-screen'>
        {/* Smooth spring fade-up viewport entrance reveal */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 18 }}
          className='max-w-7xl mx-auto container-custom'
          style={{ fontFamily: 'NotoSerif-semibold' }}
        >
          <ContactUsComponent />
        </motion.div>
      </div>
    </div>
  )
}
export default ContactUs;