import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jenny's Cake — Custom Cakes & Chops",
  description:
    "Small-batch, made-to-order cakes and pastries. Book via WhatsApp, email, or TikTok.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${inter.variable} font-body bg-ivory text-espresso`}
      >
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
