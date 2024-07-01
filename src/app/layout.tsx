

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat();


import Header from "@/components/Header";
import Footer from "@/components/footer";

import "./globals.css";

export const metadata: Metadata = {
  title: "CPF Floors LLC.",
  description: "CPF Floors official website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="./favicon.svg" type="image/x-icon" />
      <body className={`${montserrat.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
