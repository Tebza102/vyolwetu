import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vyolwetu | Waste Management, Cleaning & Construction",
  description: "Eco-conscious service delivery with real community impact. Professional waste management, cleaning, and construction services across South Africa.",
  keywords: "waste management, cleaning services, construction, CSI, South Africa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/VyulwetuFavcon.png" type="image/png" />
      </head>
      <body className="min-h-full flex flex-col bg-[#F7F8F8]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}