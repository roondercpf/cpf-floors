import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financing",
  description: "CPF Floors - Financing",
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
