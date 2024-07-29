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
      <link
        rel="stylesheet"
        href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.2/mapbox-gl-geocoder.css"
        type="text/css"
      />
      {children}
    </>
  );
}
