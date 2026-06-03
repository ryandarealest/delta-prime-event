import type { Metadata } from "next";
import { Outfit, Anton } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Delta Prime",
  description: "Delta Prime Event",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${anton.variable}`}>
      <body>{children}</body>
    </html>
  );
}