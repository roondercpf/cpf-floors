import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs",
  description: "CPF Floors - Programs",
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