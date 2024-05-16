import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "CPF Floors - Products",
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