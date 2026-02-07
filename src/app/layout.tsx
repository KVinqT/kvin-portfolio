import type { Metadata } from "next";
import "./globals.css";
import { DynaPuff, Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dynaPuff = DynaPuff({
  subsets: ["latin"],
  variable: "--font-dyna-puff",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "KVin Portfolio - 2026 Edition",
  description: "My very very very first time portfolio in 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${dynaPuff.variable}`}>
        {children}
      </body>
    </html>
  );
}
