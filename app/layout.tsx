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
  title: "Vyolwetu | Waste Management, Cleaning & Construction Support",
  description: "Vyolwetu provides integrated waste management, professional cleaning, and construction support services for cleaner, safer, and better-managed environments.",
  keywords: "waste management, cleaning services, construction support, CSI, South Africa",
  icons: {
    icon: "/VyolwetuFavcon.png",
    apple: "/VyolwetuFavcon.png",
  },
  openGraph: {
    title: "Vyolwetu | Waste Management, Cleaning & Construction Support",
    description: "Vyolwetu provides integrated waste management, professional cleaning, and construction support services for cleaner, safer, and better-managed environments.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-full flex flex-col bg-[#F7F7F7]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}