import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import TerminalDock from "@/components/TerminalDock";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: "Rohit Sakhalkar | Python Developer & Backend Engineer",
    template: "%s",
  },
  description:
    "Portfolio of Rohit Sakhalkar, a Python developer focused on backend engineering, APIs, automation, and software development.",
  openGraph: {
    title: "Rohit Sakhalkar | Python Developer & Backend Engineer",
    description:
      "Python development, backend engineering, APIs, and automation.",
    type: "website",
    ...(siteUrl ? { images: ["/api/og"] } : {}),
  },
  twitter: {
    card: siteUrl ? "summary_large_image" : "summary",
    title: "Rohit Sakhalkar | Python Developer & Backend Engineer",
    description:
      "Python development, backend engineering, APIs, and automation.",
    ...(siteUrl ? { images: ["/api/og"] } : {}),
  },
  icons: {
    icon: "/rohit-mark.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col bg-[#080b10] text-zinc-100 antialiased`}>
        <Navbar />
        <main id="main-content" className="flex-1 pb-20 pt-16 lg:pb-0">
          {children}
        </main>
        <SiteFooter />
        <TerminalDock />
      </body>
    </html>
  );
}
