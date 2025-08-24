import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Veronika Karpiuk - Personal Stylist",
  description: "Helping women build confident, effortless style. Certified stylist in Vancouver & Online.",
  keywords: ["personal stylist", "Vancouver", "fashion", "wardrobe", "style consultant"],
  authors: [{ name: "Veronika Karpiuk" }],
  openGraph: {
    title: "Veronika Karpiuk - Personal Stylist",
    description: "Helping women build confident, effortless style. Certified stylist in Vancouver & Online.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} overflow-x-hidden`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}