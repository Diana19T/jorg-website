import type { Metadata } from "next";
import { Palanquin_Dark, Inter } from "next/font/google";
import "./globals.css";

// Figma logo layer (25:1533) uses font family "Palanquin Dark", style Regular, 24px, tracking 2.16px.
const palanquinDark = Palanquin_Dark({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-palanquin-dark",
  display: "swap",
});

// Figma footer headings (54:2687, 54:2906, 60:3256 etc.) use "Inter" at Regular/SemiBold/Bold weights.
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JORG",
  description: "JORG — handmade luxury jewelry.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${palanquinDark.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
