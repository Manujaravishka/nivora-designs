import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NIVORA DESIGNS — Creative Graphic Design Studio",
    template: "%s | NIVORA DESIGNS",
  },
  description:
    "NIVORA DESIGNS is a premium graphic design studio specializing in logo design, branding, social media design, and UI/UX design.",
  keywords: [
    "graphic design",
    "logo design",
    "branding",
    "UI UX design",
    "social media design",
    "Nivora Designs",
  ],
  openGraph: {
    title: "NIVORA DESIGNS — Creative Graphic Design Studio",
    description:
      "Premium graphic design studio specializing in branding, logo, social media & UI/UX design.",
    siteName: "NIVORA DESIGNS",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-black text-white antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppWidget />
        <ScrollProgress />
      </body>
    </html>
  );
}
