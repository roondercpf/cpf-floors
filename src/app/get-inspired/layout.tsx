import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Inspired",
  description: "CPF Floors - Get Inspired",
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