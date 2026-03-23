import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: {
    default: "Indian Food Tech - Fresh & Authentic Indian Cuisine",
    template: "%s | Indian Food Tech",
  },
  description:
    "Indian Food Tech is a premium manufacturer of high-quality peanut butter, nut butters, and spreads. We specialize in private labeling, flexible packaging, and large-scale bulk production for brands worldwide.",
  keywords: [
    "peanut butter manufacturer",
    "nut butter",
    "private label peanut butter",
    "bulk peanut butter",
    "creamy peanut butter",
    "crunchy peanut butter",
    "food manufacturing",
  ],
  authors: [{ name: "Indian Food Tech" }],
  creator: "Indian Food Tech",
  publisher: "Indian Food Tech",
  openGraph: {
    title: "Indian Food Tech - Premium Peanut Butter Manufacturer",
    description:
      "High-quality peanut butter, nut butters, and spreads. Specializing in private labeling and large-scale supply.",
    url: "/",
    siteName: "Indian Food Tech",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indian Food Tech",
    description: "Premium manufacturer of peanut butter and nut butters.",
    creator: "@indianfoodtech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
