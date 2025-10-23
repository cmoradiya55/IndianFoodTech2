import React from 'react'

const ProductQuality = () => {

    const qualityFeatures = [
        {
            title: "100% Organic",
            description: "Sourced naturally for the freshest taste and nutrition.",
            icon: (
                <svg width="80" height="80" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.1099 0.00564071C15.2593 0.0220931 15.403 0.0719923 15.5304 0.15163C15.6578 0.231268 15.7657 0.338597 15.8459 0.465641C19.0459 5.53264 18.5629 10.9116 15.8899 14.2996C14.5549 15.9906 12.6799 17.1706 10.4929 17.5196C8.58489 17.8226 6.49989 17.4836 4.39889 16.3836C4.20589 16.9926 4.06889 17.5836 3.98989 18.1406C3.95146 18.4023 3.81095 18.6381 3.5991 18.7964C3.38726 18.9547 3.12133 19.0226 2.85951 18.9853C2.59769 18.948 2.3613 18.8086 2.20207 18.5974C2.04285 18.3863 1.97375 18.1206 2.00989 17.8586C2.14845 16.9306 2.38373 16.0197 2.71189 15.1406C1.17489 13.4506 0.754894 11.3126 0.941894 9.40264C1.14789 7.29564 2.10889 5.27464 3.35989 4.23164C5.03189 2.83864 6.78789 2.26664 8.31189 1.98664C8.97789 1.87118 9.6485 1.7841 10.3219 1.72564C10.8009 1.67764 11.2899 1.64564 11.7579 1.52964C12.4505 1.36168 13.1125 1.08635 13.7199 0.713641C14.1619 0.437641 14.5389 -0.0583593 15.1099 0.00564071ZM5.14989 14.5176C6.26189 12.2506 8.07989 10.0776 10.4469 8.89364C10.5654 8.83557 10.6713 8.75461 10.7583 8.65543C10.8454 8.55625 10.912 8.44082 10.9542 8.31579C10.9965 8.19076 11.0136 8.0586 11.0045 7.92693C10.9954 7.79527 10.9604 7.6667 10.9014 7.54864C10.8424 7.43059 10.7606 7.32537 10.6608 7.23907C10.5609 7.15277 10.445 7.08709 10.3196 7.04582C10.1942 7.00454 10.062 6.98849 9.93037 6.99859C9.79878 7.00868 9.67049 7.04473 9.55289 7.10464C6.94489 8.40864 4.94689 10.6636 3.64789 13.0686C3.90609 13.4894 4.22637 13.8686 4.59789 14.1936C4.78289 14.3096 4.96689 14.4166 5.14989 14.5176Z" fill="#6F9E12" />
                </svg>
            )
        },
        {
            title: "No Preservative",
            description: "Clean ingredients, nothing artificial, only nature's best.",
            icon: (
                <svg width="80" height="80" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0ZM12.829 5.757L5.757 12.828C5.66409 12.9209 5.59039 13.0312 5.54011 13.1526C5.48982 13.274 5.46394 13.4041 5.46394 13.5355C5.46394 13.8009 5.56936 14.0554 5.757 14.243C5.94464 14.4306 6.19914 14.5361 6.4645 14.5361C6.72986 14.5361 6.98436 14.4306 7.172 14.243L14.242 7.172C14.4296 6.98449 14.5351 6.73012 14.5352 6.46485C14.5353 6.19958 14.43 5.94514 14.2425 5.7575C14.055 5.56986 13.8006 5.46439 13.5354 5.4643C13.2701 5.4642 13.0156 5.56949 12.828 5.757H12.829Z" fill="#6F9E12" />
                </svg>
            )
        },
        {
            title: "Heart Healthy",
            description: "Crafted to support your wellbeing with every bite.",
            icon: (
                <svg width="80" height="80" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.93007 7.37594L10.0801 12.3939C10.1469 12.5503 10.2526 12.6869 10.387 12.7911C10.5214 12.8952 10.6801 12.9633 10.8481 12.9891C11.0162 13.0148 11.188 12.9972 11.3474 12.9381C11.5068 12.8789 11.6485 12.7801 11.7591 12.6509L11.8321 12.5549L13.5351 9.99994H19.4421C17.5271 14.7379 11.2771 17.9999 10.0001 17.9999C8.75007 17.9999 2.73007 14.8729 0.684068 10.2939L0.558068 9.99994H6.00007C6.16466 9.99997 6.32671 9.95936 6.47185 9.88174C6.61699 9.80411 6.74072 9.69186 6.83207 9.55494L6.89407 9.44694L7.93007 7.37594ZM10.0001 1.33894C12.0721 -0.347059 14.5341 -0.341059 16.4941 0.800941C18.5891 2.02194 20.0631 4.50094 19.9981 7.39294L19.9841 7.69794L19.9571 7.99994H13.0001C12.8564 7.99987 12.7145 8.03074 12.5839 8.09044C12.4532 8.15015 12.337 8.23729 12.2431 8.34594L12.1681 8.44594L11.1921 9.90894L8.91907 4.60594C8.84823 4.44068 8.73415 4.29757 8.58882 4.19168C8.4435 4.08579 8.27232 4.02105 8.0933 4.00426C7.91428 3.98748 7.73404 4.01927 7.57157 4.09629C7.40909 4.17332 7.27039 4.29272 7.17007 4.44194L7.10607 4.55194L5.38207 7.99994H0.0420677C0.0197484 7.7983 0.00640193 7.59577 0.00206769 7.39294C-0.0629323 4.50094 1.41107 2.02294 3.50607 0.800941C5.46607 -0.340059 7.92807 -0.348059 10.0001 1.33894Z" fill="#6F9E12" />
                </svg>
            )
        },
        {
            title: "Bulk Option",
            description: "Flexible packaging to meet your home or business needs.",
            icon: (
                <svg width="80" height="80" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.555 4.16815L7.109 7.87115C7.38302 8.05373 7.60772 8.30115 7.76315 8.59143C7.91858 8.88171 7.99994 9.20587 8 9.53515V20.0002C8.00003 20.1812 7.95091 20.3588 7.85787 20.5142C7.76484 20.6695 7.6314 20.7966 7.47177 20.882C7.31214 20.9674 7.13231 21.0079 6.95148 20.9991C6.77065 20.9903 6.5956 20.9326 6.445 20.8322L0.891 17.1301C0.616842 16.9475 0.392055 16.6999 0.236615 16.4094C0.0811753 16.119 -0.000104084 15.7946 1.00032e-07 15.4651V5.00015C-2.69949e-05 4.81911 0.0490951 4.64145 0.142126 4.48614C0.235156 4.33083 0.368605 4.20369 0.528235 4.11828C0.687865 4.03287 0.867687 3.99239 1.04852 4.00118C1.22935 4.00996 1.4044 4.06767 1.555 4.16815ZM4.528 2.11815C4.68767 2.03271 4.86754 1.99224 5.04842 2.00104C5.22929 2.00985 5.40439 2.06761 5.555 2.16815L11.109 5.87115C11.383 6.05373 11.6077 6.30115 11.7631 6.59143C11.9186 6.88171 11.9999 7.20587 12 7.53515V18.0002C12 18.1812 11.9509 18.3588 11.8579 18.5142C11.7648 18.6695 11.6314 18.7966 11.4718 18.882C11.3121 18.9674 11.1323 19.0079 10.9515 18.9991C10.7707 18.9903 10.5956 18.9326 10.445 18.8322L9.5 18.2022V9.53515C9.49992 8.95894 9.35758 8.39166 9.08562 7.88367C8.81366 7.37569 8.42048 6.9427 7.941 6.62315L4 3.99515V3.00015C3.99993 2.81911 4.049 2.64145 4.14199 2.48611C4.23498 2.33078 4.36839 2.2036 4.528 2.11815ZM9.555 0.16815L15.109 3.87115C15.383 4.05373 15.6077 4.30115 15.7631 4.59143C15.9186 4.88171 15.9999 5.20587 16 5.53515V16.0002C16 16.1812 15.9509 16.3588 15.8579 16.5142C15.7648 16.6695 15.6314 16.7966 15.4718 16.882C15.3121 16.9674 15.1323 17.0079 14.9515 16.9991C14.7707 16.9903 14.5956 16.9326 14.445 16.8322L13.5 16.2022V7.53515C13.4999 6.95894 13.3576 6.39166 13.0856 5.88367C12.8137 5.37569 12.4205 4.9427 11.941 4.62315L8 1.99515V1.00015C7.99997 0.819107 8.04909 0.641453 8.14213 0.486141C8.23516 0.330829 8.3686 0.203686 8.52823 0.118276C8.68786 0.0328662 8.86769 -0.00760576 9.04852 0.00117784C9.22935 0.00996144 9.4044 0.0676711 9.555 0.16815Z" fill="#6F9E12" />
                </svg>
            )
        }
    ]

    return (
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-8 sm:py-10 md:py-12">

            {/* Header Section */}
            <div className="mb-8 sm:mb-10 md:mb-12 flex gap-3 sm:gap-4">
                <div className="bg-primary-500 h-52 sm:h-28 md:h-35 w-1.5 sm:w-2 rounded-2xl flex-shrink-0"></div>
                <div className="mt-1 sm:mt-2">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
                        Why We Stand Out
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-primary-500 font-medium leading-relaxed" style={{ fontFamily: 'Inter_18pt-medium' }}>
                        We deliver unmatched quality, innovative solutions, and dedicated support to help
                        <br className="hidden md:block" />
                        you achieve your goals effortlessly. Experience excellence every step of the way.
                    </p>
                </div>
            </div>

            {/* Quality Points Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                {qualityFeatures.map((feature, index) => {
                    const IconComponent = feature.icon
                    return (
                        <div
                            key={index}
                            className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border border-[#D2D1D6] hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="flex items-start gap-3 sm:gap-4 md:gap-6">
                                {/* Icon */}
                                <div className="text-primary-500 mt-1 sm:mt-2 flex-shrink-0">
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
                                        {React.cloneElement(IconComponent, {
                                            width: "100%",
                                            height: "100%",
                                            className: "w-full h-full"
                                        })}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 pt-0 sm:pt-1">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed" style={{ fontFamily: 'Inter_18pt-medium', letterSpacing: '0.5px' }}>
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Quality Assurance Section */}
            <div className="mt-8 sm:mt-10 md:mt-12 bg-[#00280C] px-4 sm:px-8 md:px-40 py-8 sm:py-12 md:py-15 rounded-2xl sm:rounded-3xl md:rounded-[40px] flex flex-col gap-4 sm:gap-6 md:gap-10 text-center items-center">
                <h2 className="text-2xl sm:text-3xl md:text-[57px] font-bold text-primary-500">
                    Quality Assurance
                </h2>
                <p className="text-sm sm:text-base md:text-[24px] text-white leading-relaxed" style={{ fontFamily: 'Inter_18pt-medium' }}>
                    Our peanut butter is crafted with the highest standards, ensuring every jar delivers pure taste, safety, and premium quality you can trust
                </p>
            </div>

        </div>
    )
}

export default ProductQuality