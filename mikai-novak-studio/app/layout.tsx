import type { Metadata } from "next";
import { Header, Footer } from "@/app/components/layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mikai Novak Studio | Photography & Video Production",
  description:
    "Professional photography and video production services in Belgrade. Weddings, events, portraits, commercials, and more.",
  keywords: [
    "photography",
    "video production",
    "Belgrade",
    "wedding photography",
    "commercial video",
    "Serbia",
  ],
  authors: [{ name: "Mikai Novak Studio" }],
  openGraph: {
    title: "Mikai Novak Studio | Photography & Video Production",
    description:
      "Professional photography and video production services in Belgrade.",
    url: "https://mikainovak.com",
    siteName: "Mikai Novak Studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mikai Novak Studio",
    description:
      "Professional photography and video production services in Belgrade.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
