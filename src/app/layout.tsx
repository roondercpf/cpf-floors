

import type { Metadata } from "next";


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
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
