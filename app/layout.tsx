import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SocialHeader from "./sections/SocialHeader";
import Footer from "./sections/Footer";

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
      <body className="bg-windows-neutral w-full ">
        <SocialHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
