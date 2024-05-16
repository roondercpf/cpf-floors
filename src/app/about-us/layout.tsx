import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "CPF Floors - About Us",
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
