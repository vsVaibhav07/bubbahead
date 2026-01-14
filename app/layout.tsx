import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atlanta DUI & Criminal Defense Attorney | Bubba Head Law",
  description:
    "Trusted Atlanta DUI & criminal defense attorney with over 47 years of experience defending clients across Georgia. Free consultation available.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
