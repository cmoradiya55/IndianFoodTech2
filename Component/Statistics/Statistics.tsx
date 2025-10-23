import React from 'react';

const Statistics = () => {
    
    const stats = [
        {
            title: '30+ Exported',
            subtitle: 'Around the World',
            icon: (
                <svg width="32" height="32" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-8 lg:h-8" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.4302 13.335C18.7401 15.2844 17.4628 16.9721 15.774 18.1657C14.0853 19.3592 12.0681 20.0001 10.0002 20C5.64717 20 1.94317 17.218 0.570168 13.335C3.40476 15.0824 6.67025 16.0053 10.0002 16C13.4582 16 16.6882 15.025 19.4302 13.335ZM19.1262 5.905C19.774 7.34694 20.0695 8.92232 19.9882 10.501C17.1548 12.7713 13.6309 14.0058 10.0002 14C6.22217 14 2.75017 12.69 0.0121684 10.5C-0.0689822 8.92165 0.226484 7.34663 0.874168 5.905C3.49063 7.91669 6.69976 9.00503 10.0002 9C13.4342 9 16.5982 7.846 19.1262 5.905ZM10.0002 3.20571e-06C11.5857 -0.00102277 13.1487 0.37536 14.56 1.09803C15.9713 1.82071 17.1902 2.86892 18.1162 4.156C15.814 6.00119 12.9506 7.00459 10.0002 7C6.93017 7 4.10817 5.936 1.88417 4.156C2.80992 2.86874 4.02887 1.8204 5.44018 1.0977C6.85149 0.375009 8.41459 -0.00126709 10.0002 3.20571e-06Z" fill="white" />
                </svg>
            )
        },
        {
            title: '40+ Wide Range',
            subtitle: 'Flavors for Everyone',
            icon: (
                <svg width="35" height="35" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-8 lg:h-8" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.916 0.244002C11.3203 0.0529841 10.6797 0.0529841 10.084 0.244002L3.55001 2.34C3.31544 2.41615 3.11738 2.57646 2.99401 2.79L0.757009 6.654C0.682208 6.78328 0.637315 6.92767 0.625626 7.07656C0.613937 7.22546 0.63575 7.37509 0.689462 7.51445C0.743174 7.65381 0.827421 7.77938 0.936016 7.88192C1.04461 7.98445 1.1748 8.06137 1.31701 8.107L8.45701 10.399C8.67436 10.4688 8.90903 10.4621 9.12205 10.38C9.33507 10.298 9.51361 10.1455 9.62801 9.948L10 9.306V11.623C10 11.7805 9.96278 11.9359 9.89137 12.0763C9.81995 12.2167 9.71637 12.3383 9.58906 12.4311C9.46176 12.5239 9.31433 12.5853 9.15878 12.6103C9.00324 12.6353 8.84399 12.6232 8.69401 12.575L2.85601 10.702V13.98C2.85581 14.4036 2.99012 14.8163 3.23957 15.1587C3.48902 15.5011 3.84073 15.7554 4.24401 15.885L10.084 17.757C10.6797 17.948 11.3203 17.948 11.916 17.757L17.756 15.885C18.1595 15.7556 18.5114 15.5013 18.761 15.1589C19.0107 14.8165 19.1451 14.4037 19.145 13.98L19.143 10.702L13.306 12.575C13.1559 12.6232 12.9966 12.6353 12.841 12.6102C12.6854 12.5852 12.5379 12.5237 12.4106 12.4308C12.2832 12.3379 12.1797 12.2162 12.1083 12.0756C12.037 11.9351 11.9999 11.7796 12 11.622V9.305L12.371 9.947C12.4856 10.1444 12.6642 10.2966 12.8772 10.3785C13.0902 10.4603 13.3248 10.4669 13.542 10.397L20.683 8.107C20.8254 8.0614 20.9557 7.98447 21.0644 7.88186C21.1731 7.77925 21.2574 7.65357 21.3111 7.51408C21.3649 7.37459 21.3866 7.22482 21.3748 7.07581C21.363 6.92679 21.318 6.78231 21.243 6.653L19.006 2.79C18.8826 2.57646 18.6846 2.41615 18.45 2.34L11.916 0.244002ZM14.869 3.292L11 4.533L7.13001 3.292L10.694 2.148C10.8927 2.08426 11.1063 2.08426 11.305 2.148L14.869 3.292Z" fill="white" />
                </svg>
            )
        },
        {
            title: '5 MT/Day',
            subtitle: 'Steady Daily Output',
            icon: (
                <svg width="35" height="35" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-8 lg:h-8" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.0001 0.5C15.6023 0.5 15.2208 0.658035 14.9395 0.93934C14.6582 1.22064 14.5001 1.60218 14.5001 2C14.5001 2.39782 14.6582 2.77936 14.9395 3.06066C15.2208 3.34196 15.6023 3.5 16.0001 3.5H16.3791L13.0001 6.879L9.56012 3.439C9.27887 3.1581 8.89762 3.00032 8.50012 3.00032C8.10262 3.00032 7.72137 3.1581 7.44012 3.439L0.940121 9.939C0.666747 10.2218 0.515374 10.6006 0.518605 10.9939C0.521836 11.3872 0.679412 11.7635 0.957395 12.0417C1.23538 12.32 1.61152 12.4779 2.00482 12.4815C2.39811 12.4851 2.77709 12.3341 3.06012 12.061L8.50012 6.621L11.9401 10.061C12.2214 10.3419 12.6026 10.4997 13.0001 10.4997C13.3976 10.4997 13.7789 10.3419 14.0601 10.061L18.5001 5.621V6C18.5001 6.39782 18.6582 6.77936 18.9395 7.06066C19.2208 7.34196 19.6023 7.5 20.0001 7.5C20.3979 7.5 20.7795 7.34196 21.0608 7.06066C21.3421 6.77936 21.5001 6.39782 21.5001 6V2C21.5001 1.60218 21.3421 1.22064 21.0608 0.93934C20.7795 0.658035 20.3979 0.5 20.0001 0.5H16.0001Z" fill="white" />
                </svg>
            )
        }
    ];

    return (
        <div className="py-6">

            {/* Header Section */}
            <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 flex gap-3 sm:gap-4 lg:gap-5">
                <div className="bg-primary-500 h-40 sm:h-28 md:h-35 lg:h-32 w-1.5 sm:w-2 lg:w-2 rounded-2xl flex-shrink-0"></div>
                <div className='mt-1 sm:mt-1 lg:mt-2'>
                    <h1 className="text-2xl sm:text-3xl md:text-[36px] lg:text-4xl font-bold text-gray-900 mb-2 leading-tight">
                        Spreading Health and Happiness
                        <br />
                        Since 2019
                    </h1>
                    <p className="text-lg sm:text-xl md:text-[24px] lg:text-2xl text-primary-500 font-medium leading-relaxed" style={{ fontFamily: 'Inter_18pt-medium' }}>
                        Delivering trusted value since 2019
                    </p>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7 px-4 sm:px-6 md:px-16 lg:px-12">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl sm:rounded-2xl lg:rounded-2xl shadow-lg p-4 sm:p-5 md:p-6 lg:p-7 hover:shadow-2xl transition-shadow duration-300"
                    >
                        <div className="flex items-start gap-3 sm:gap-4 lg:gap-5">
                            {/* Green Circle Icon */}
                            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-[72px] md:h-[72px] lg:w-[70px] lg:h-[70px] bg-gradient-to-b from-primary-400 to-primary-600 rounded-xl sm:rounded-2xl lg:rounded-2xl flex-shrink-0 shadow-md flex items-center justify-center">
                                {stat.icon}
                            </div>

                            {/* Text Content */}
                            <div className="flex-1 mt-1 sm:mt-2 lg:mt-2">
                                <div className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold text-gray-900 mb-1">
                                    {stat.title}
                                </div>
                                <div className="text-gray-800 text-sm sm:text-base md:text-[16px] lg:text-lg font-medium">
                                    {stat.subtitle}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Statistics;