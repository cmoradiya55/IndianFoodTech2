import { Metadata } from "next";
import React, { Suspense } from 'react'
import Products from "./Products";
import Schema from "@/components/Schema";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.indianfoodtech.com";

export const metadata: Metadata = {
  title: "Our Products | Indian Foodtech - Nut Spreads",
  description:
    "Explore Indian Food Tech's range of creamy, crunchy, natural, and flavored peanut butters and nut spreads available in jars, pouches, and bulk packs.",
  keywords: [
    "peanut butter products",
    "nut spreads",
    "tahini paste",
    "peanut butter sachet",
    "bulk peanut butter",
    "creamy peanut butter",
    "crunchy peanut butter",
  ],
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Our Products | Indian Foodtech - Nut Spreads",
    description:
      "Explore Indian Food Tech's range of creamy, crunchy, natural, and flavored peanut butters and nut spreads available in jars, pouches, and bulk packs.",
    url: "/products",
    siteName: "Indian Foodtech",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logoBlack.webp",
        width: 800,
        height: 800,
        alt: "Indian Foodtech Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Products | Indian Foodtech - Nut Spreads",
    description:
      "Explore Indian Food Tech's range of creamy, crunchy, natural, and flavored peanut butters and nut spreads available in jars, pouches, and bulk packs.",
    images: ["/logoBlack.webp"],
  },
};

// Loading component for the suspense boundary
function ProductsLoading() {
  return (
    <div className='bg-[#e9e8ed] py-8 sm:py-6 md:py-8 lg:py-5 px-3 sm:px-4 md:px-8 lg:px-8 min-h-screen flex items-center justify-center'>
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading products...</p>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <>
      <Schema
        type="BreadcrumbList"
        data={{
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
            { "@type": "ListItem", position: 2, name: "Products", item: `${BASE_URL}/products` },
          ],
        }}
      />
      <Schema
        type="WebPage"
        data={{
          "@id": `${BASE_URL}/products#webpage`,
          name: "Our Products | Indian Foodtech - Nut Spreads",
          description:
            "Explore Indian Food Tech's range of creamy, crunchy, natural, and flavored peanut butters and nut spreads available in jars, pouches, and bulk packs.",
          url: `${BASE_URL}/products`,
          inLanguage: "en",
          isPartOf: { "@id": `${BASE_URL}/#website` },
          about: { "@id": `${BASE_URL}/#organization` },
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: [".aeo-speakable-summary"],
          },
        }}
      />
      <Suspense fallback={<ProductsLoading />}>
        <Products />
      </Suspense>
    </>
  );
}
