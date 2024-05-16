import type { Metadata } from "next";
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
      <body>{children}</body>
    </html>
  );
}
