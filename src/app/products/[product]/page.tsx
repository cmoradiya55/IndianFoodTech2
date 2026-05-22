import { Metadata } from "next";
import React, { Suspense } from "react";
import ProductDetails from "./ProductDetails";
import { AllProductsList } from "@/utils/ProductList";

type Props = {
  params: Promise<{ product: string }>;
};

// Generate dynamic SEO metadata for each dynamic product page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const productId = resolvedParams.product;

  const product = AllProductsList.flatMap((category) => category.products).find(
    (product) => product.slug === productId,
  );

  if (!product) {
    return {
      title: "Product Not Found | Indian Food Tech",
      description: "The requested product could not be found.",
    };
  }

  const title = `${product.name} - Premium Peanut Butter & Spreads | Indian Food Tech`;
  const description = product.description || `Explore our high-quality ${product.name} at Indian Food Tech. Premium nut products, peanut butters, and spreads.`;
  const canonicalUrl = `https://www.indianfoodtech.in/products/${productId}`;
  const imageUrl = product.cardImage.startsWith("http")
    ? product.cardImage
    : `https://www.indianfoodtech.in${product.cardImage}`;

  const keywords = [
    product.name.toLowerCase(),
    "indian foodtech",
    "peanut butter manufacturer",
    "private label peanut butter",
    "bulk peanut butter",
    "creamy peanut butter",
    "crunchy peanut butter",
    "nut butter supplier",
  ];

  return {
    title,
    description,
    keywords,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Indian Foodtech",
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 800,
          alt: product.name,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: canonicalUrl,
      },
    },
  };
}

// Loading fallback component
function ProductDetailsLoading() {
  return (
    <div className="bg-[#e9e8ed] py-8 sm:py-6 md:py-8 lg:py-5 px-3 sm:px-4 md:px-8 lg:px-8 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading product details...</p>
      </div>
    </div>
  );
}

export default function ProductDetailPage() {
  return (
    <Suspense fallback={<ProductDetailsLoading />}>
      <ProductDetails />
    </Suspense>
  );
}
