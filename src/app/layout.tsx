import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DELTA PRIME EVENT",
  description: "Layered 3D hero page inspired by the reference image",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
