import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "CPF Floors - Contact Us",
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