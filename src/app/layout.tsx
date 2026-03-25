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
  title:
    "Indian Foodtech, Surat - Manufacturer of Peanut Butter and Tahini Paste",
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
    canonical: "https://www.indianfoodtech.in/",
  },
  openGraph: {
    title:
      "Indian Foodtech, Surat - Manufacturer of Peanut Butter and Tahini Paste",
    description:
      "Manufacturer of Peanut Butter, Tahini Paste & Peanut Butter Sachet offered by Indian Foodtech from Surat, Gujarat, India",
    url: "https://www.indianfoodtech.in/",
    siteName: "indianfoodtech.in",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://5.imimg.com/data5/SELLER/Logo/2022/3/II/GP/LH/149763079/2-120x120.png",
        width: 120,
        height: 120,
      },
    ],
  },
  twitter: {
    card: "summary",
    title:
      "Indian Foodtech, Surat - Manufacturer of Peanut Butter and Tahini Paste",
    description:
      "Manufacturer of Peanut Butter, Tahini Paste & Peanut Butter Sachet offered by Indian Foodtech from Surat, Gujarat, India",
    creator: "@indianfoodtech",
    images: [
      "https://5.imimg.com/data5/SELLER/Logo/2022/3/II/GP/LH/149763079/2-120x120.png",
    ],
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
          <main className="grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
