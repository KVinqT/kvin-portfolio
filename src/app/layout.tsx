import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
