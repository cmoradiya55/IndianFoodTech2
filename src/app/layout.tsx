import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Schema from "@/components/Schema";
import { SpeedInsights } from '@vercel/speed-insights/next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.indianfoodtech.com";


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
              "@id": `${BASE_URL}/#organization`,
              name: "Indian Foodtech",
              url: BASE_URL,
              logo: `${BASE_URL}/logoBlack.webp`,
              image: `${BASE_URL}/logoBlack.webp`,
              description:
                "B2B peanut butter manufacturer and exporter from Surat, Gujarat, India. 5 MT daily capacity, exporting to 75+ countries with FSSAI, Halal, and ISO certifications.",
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
              "@id": `${BASE_URL}/#website`,
              name: "Indian Foodtech",
              url: BASE_URL,
              description:
                "Official site of Indian Foodtech, a B2B peanut butter and nut butter manufacturer and exporter based in Surat, Gujarat, India exporting to 75+ countries.",
              inLanguage: "en-US",
              about: { "@id": `${BASE_URL}/#organization` },
              publisher: { "@id": `${BASE_URL}/#organization` },
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
          <SpeedInsights />
          <Footer />
        </div>
      </body>
    </html>
  );
}
