import { Metadata } from "next";
import FAQPage from "./FAQPage";
import Schema from "@/components/Schema";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.indianfoodtech.com";

export const metadata: Metadata = {
  title: "FAQ | Indian Foodtech - Peanut Butter Manufacturer",
  description:
    "Find answers to common questions about Indian Foodtech's peanut butter products, bulk export orders, private label services, certifications, and shipping.",
  keywords: [
    "peanut butter faq",
    "bulk peanut butter questions",
    "private label peanut butter faq",
    "indian foodtech faq",
    "peanut butter export questions",
    "peanut butter manufacturer india faq",
  ],
  alternates: {
    canonical: "/faq",
    languages: {
      "en-US": "/faq",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "FAQ | Indian Foodtech - Peanut Butter Manufacturer",
    description:
      "Find answers to common questions about Indian Foodtech's peanut butter products, bulk export orders, private label services, certifications, and shipping.",
    url: "/faq",
    siteName: "Indian Foodtech",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logoBlack.webp",
        width: 800,
        height: 800,
        alt: "Indian Foodtech FAQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Indian Foodtech - Peanut Butter Manufacturer",
    description:
      "Find answers to common questions about Indian Foodtech's peanut butter products, bulk export orders, private label services, certifications, and shipping.",
    images: ["/logoBlack.webp"],
  },
};

export default function FAQRoutePage() {
  return (
    <>
      <Schema
        type="BreadcrumbList"
        data={{
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
            { "@type": "ListItem", position: 2, name: "FAQ", item: `${BASE_URL}/faq` },
          ],
        }}
      />
      <Schema
        type="WebPage"
        data={{
          "@id": `${BASE_URL}/faq#webpage`,
          name: "FAQ | Indian Foodtech - Peanut Butter Manufacturer",
          description:
            "Find answers to common questions about Indian Foodtech's peanut butter products, bulk export orders, private label services, certifications, and shipping.",
          url: `${BASE_URL}/faq`,
          inLanguage: "en",
          isPartOf: { "@id": `${BASE_URL}/#website` },
          about: { "@id": `${BASE_URL}/#organization` },
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: [".aeo-speakable-summary"],
          },
        }}
      />
      <FAQPage />
    </>
  );
}
