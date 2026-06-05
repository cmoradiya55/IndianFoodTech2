"use client";
import React from 'react'
import ContactUsComponent from '../../../Component/ContactUs/ContactUs';
import { motion } from "framer-motion";

const ContactUs = ({ isPageHeader }: { isPageHeader?: boolean }) => {
  return (
    <div className='bg-[#e9e8ed]'>
      <div className='mx-auto container-custom py-6 sm:py-8 md:py-12 mt-12 sm:mt-6'>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 18 }}
          className='max-w-7xl mx-auto container-custom'
          style={{ fontFamily: 'NotoSerif-semibold' }}
        >
          <ContactUsComponent isPageHeader={isPageHeader} />
        </motion.div>
      </div>
    </div>
  )
}
export default ContactUs;