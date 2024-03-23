import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SocialHeader from "./sections/SocialHeader";
import Footer from "./sections/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ashen's Portfolio",
  description:
    "Ashen's developer portfolio, inspired by Windows 98, has a nostalgic aesthetic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full bg-windows-neutral ">
        <SocialHeader />
        {children}
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
