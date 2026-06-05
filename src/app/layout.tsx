import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Schema from "@/components/Schema";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.indianfoodtech.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Indian Foodtech | Premium Peanut Butter Manufacturer",
  description:
    "Manufacturer of Peanut Butter, Tahini Paste & Peanut Butter Sachet offered by Indian Foodtech from Surat, Gujarat, India",
  keywords: [
    "peanut butter manufacturer",
    "nut butter",
    "private label peanut butter",
    "bulk peanut butter",
    "creamy peanut butter",
    "crunchy peanut butter",
    "food manufacturing",
    "tahini paste",
  ],
  authors: [{ name: "Indian Foodtech" }],
  creator: "Indian Foodtech",
  publisher: "Indian Foodtech",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logoBlack.webp",
  },
  openGraph: {
    title: "Indian Foodtech | Premium Peanut Butter Manufacturer",
    description:
      "Manufacturer of Peanut Butter, Tahini Paste & Peanut Butter Sachet offered by Indian Foodtech from Surat, Gujarat, India",
    url: "/",
    siteName: "Indian Foodtech",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logoBlack.webp",
        width: 800,
        height: 800,
        alt: "Indian Foodtech Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indian Foodtech | Premium Peanut Butter Manufacturer",
    description:
      "Manufacturer of Peanut Butter, Tahini Paste & Peanut Butter Sachet offered by Indian Foodtech from Surat, Gujarat, India",
    creator: "@indianfoodtech",
    images: ["/logoBlack.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased`}
        suppressHydrationWarning
      >
        <div className="min-h-screen flex flex-col">
          <Schema
            type="LocalBusiness"
            data={{
              "@type": ["Organization", "LocalBusiness"],
              name: "Indian Foodtech",
              url: BASE_URL,
              logo: `${BASE_URL}/logoBlack.webp`,
              image: `${BASE_URL}/logoBlack.webp`,
              description:
                "B2B peanut butter manufacturer and exporter from Surat, Gujarat, India. 3,000 kg daily capacity, exporting to 47 countries with FSSAI, Halal, and ISO certifications.",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Ground Floor, Plot No. 198, 197, 198, Om Industries Estate, Vibhag 1, Village: Mankana, Kamrej",
                addressLocality: "Surat",
                addressRegion: "Gujarat",
                postalCode: "394190",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 21.1702,
                longitude: 72.8311,
              },
              telephone: "+91-97148-99711",
              email: "office@indianfoodtech.in",
              currenciesAccepted: "USD, EUR, INR",
              paymentAccepted: "Bank Transfer, Letter of Credit",
              areaServed: { "@type": "Place", name: "Worldwide" },
              knowsAbout: [
                "peanut butter manufacturing",
                "nut butter export",
                "private label food manufacturing",
                "bulk peanut butter supply",
                "halal food production",
              ],
              hasCredential: [
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "FSSAI License",
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "Halal Certification",
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "ISO Certification",
                },
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-97148-99711",
                contactType: "customer service",
                email: "office@indianfoodtech.in",
                areaServed: "Worldwide",
                availableLanguage: ["en", "hi", "gu"],
              },
              sameAs: [
                "https://www.facebook.com/p/Indian-foodtech-100083285323445/",
                "https://in.linkedin.com/company/indian-foodtech",
              ],
            }}
          />
          <Schema
            type="WebSite"
            data={{
              name: "Indian Foodtech",
              url: BASE_URL,
              potentialAction: {
                "@type": "SearchAction",
                target:
                  `${BASE_URL}/products?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }}
          />
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
