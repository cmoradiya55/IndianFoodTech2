import React from 'react'
import ContactUsComponent from '../../../Component/ContactUsComponent/ContactUsComponent';

const ContactUs = () => {
    return (
        <div className='bg-[#e9e8ed] py-10 px-4 sm:px-8 lg:px-16'>
            <div className='min-h-screen'>
                <div className='max-w-7xl mx-auto container-custom' style={{ fontFamily: 'NotoSerif-semibold' }}>
                    <ContactUsComponent />
                </div>
            </div>
        </div>
    )
}
export default ContactUs;