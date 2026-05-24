import { Metadata } from "next";
import React, { Suspense } from "react";
import ProductDetails from "./ProductDetails";
import { AllProductsList } from "@/utils/ProductList";
import Schema from "@/components/Schema";
import Breadcrumb from "@/components/Breadcrumb";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.indianfoodtech.com";

function parseNutrition(nutrition: string | undefined) {
  if (!nutrition) return undefined;
  const calories = nutrition.match(/Calories\s+(\d+)/)?.[1];
  const fat = nutrition.match(/Fat\s+(\d+)g/)?.[1];
  const carbs = nutrition.match(/Carbs\s+(\d+)g/)?.[1];
  const protein = nutrition.match(/Protein\s+(\d+)g/)?.[1];
  if (!calories) return undefined;
  return {
    "@type": "NutritionInformation",
    servingSize: "32g",
    calories: `${calories} kcal`,
    ...(fat && { fatContent: `${fat} g` }),
    ...(carbs && { carbohydrateContent: `${carbs} g` }),
    ...(protein && { proteinContent: `${protein} g` }),
  };
}

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
  const canonicalUrl = `${BASE_URL}/products/${productId}`;
  const imageUrl = product.cardImage.startsWith("http")
    ? product.cardImage
    : `${BASE_URL}${product.cardImage}`;

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

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const { product: productId } = await params;
  const product = AllProductsList.flatMap((cat) => cat.products).find(
    (p) => p.slug === productId
  );

  const imageUrl = product
    ? product.cardImage.startsWith("http")
      ? product.cardImage
      : `${BASE_URL}${product.cardImage}`
    : undefined;

  const nutrition = product ? parseNutrition(product.nutrition) : undefined;

  return (
    <>
      {product && (
        <Breadcrumb
          items={[
            { name: "Home", url: `${BASE_URL}` },
            { name: "Products", url: `${BASE_URL}/products` },
            { name: product.name, url: `${BASE_URL}/products/${product.slug}` },
          ]}
        />
      )}

      {product && (
        <Schema
          type="Product"
          data={{
            name: product.name,
            description: product.detailedDescription || product.description,
            image: imageUrl,
            brand: { "@type": "Brand", name: "Indian Foodtech" },
            manufacturer: {
              "@type": "Organization",
              name: "Indian Foodtech",
              url: BASE_URL,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Surat",
                addressRegion: "Gujarat",
                addressCountry: "IN",
              },
            },
            ...(nutrition && { nutrition }),
            additionalProperty: [
              ...(product.certifications ?? []).map((cert: string) => ({
                "@type": "PropertyValue",
                name: "Product Certification",
                value: cert,
              })),
              {
                "@type": "PropertyValue",
                name: "Company Certification",
                value: "FSSAI Licensed",
              },
              {
                "@type": "PropertyValue",
                name: "Company Certification",
                value: "Halal Certified",
              },
              {
                "@type": "PropertyValue",
                name: "Company Certification",
                value: "ISO Certified",
              },
            ],
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              offerCount: product.sizes?.length ?? 1,
              seller: {
                "@type": "Organization",
                name: "Indian Foodtech",
              },
            },
            url: `${BASE_URL}/products/${product.slug}`,
          }}
        />
      )}
      <Suspense fallback={<ProductDetailsLoading />}>
        <ProductDetails />
      </Suspense>
    </>
  );
}
