import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become a Dealer",
  description: "CPF Floors - Become a Dealer",
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
