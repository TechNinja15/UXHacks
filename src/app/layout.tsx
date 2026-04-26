import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UXHacks | Modern Neon Edition",
  description: "The world's most active community of UX designers and product leaders.",
  icons: {
    icon: "/logo.png",
  }
};

import ConditionalLayout from "@/components/ConditionalLayout";
import AuthContext from "@/components/AuthContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        <AuthContext>
          <ConditionalLayout>
            {children}
          </ConditionalLayout>
        </AuthContext>
      </body>
    </html>
  );
}
