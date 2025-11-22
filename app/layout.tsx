import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingDock from "@/components/FloatingDock";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TheAbhiPatel | Full Stack & DevOps Engineer",
    template: "%s | TheAbhiPatel",
  },
  description:
    "Namaste, I'm Abhishek Patel. A Full Stack and DevOps Engineer focused on building scalable web applications and automating cloud infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}>
        {children}
        <FloatingDock />
      </body>
    </html>
  );
}
