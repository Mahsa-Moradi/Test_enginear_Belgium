import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Advanced CPS | Engineering & Digital Solutions",
  description:
    "Advanced CPS provides engineering, digital transformation, and technical consulting solutions for modern businesses.",
  metadataBase: new URL("https://advancps.com"),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Advanced CPS | Engineering & Digital Solutions",
    description:
      "Advanced CPS provides engineering, digital transformation, and technical consulting solutions for modern businesses.",
    url: "https://advancps.com",
    siteName: "Advanced CPS",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Advanced CPS | Engineering & Digital Solutions",
    description:
      "Advanced CPS provides engineering, digital transformation, and technical consulting solutions for modern businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
        {children}
      </body>
    </html>
  );
}
