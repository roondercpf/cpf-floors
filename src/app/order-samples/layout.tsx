import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Samples",
  description: "CPF Floors - Order Samples",
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