import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Samples",
  description: "CPF Floors - Order Sample",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        {children}
    </>
  );
}