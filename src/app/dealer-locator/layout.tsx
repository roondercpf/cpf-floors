import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dealer Locator",
  description: "CPF Floors - Dealer Locator",
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