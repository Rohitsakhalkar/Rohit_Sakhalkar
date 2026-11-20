import type { Metadata } from "next";
import { Geist, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { Navigation } from "../components/layout/navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rohit Sakhalkar — Developer",
  description: "Portfolio of Rohit Sakhalkar, a developer focused on Python, automation, backend engineering, and practical software.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
  openGraph: {
    title: "Rohit Sakhalkar — Developer",
    description: "Portfolio of Rohit Sakhalkar, a developer focused on Python, automation, backend engineering, and practical software.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Rohit Sakhalkar — Developer",
    description: "Portfolio of Rohit Sakhalkar, a developer focused on Python, automation, backend engineering, and practical software.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${geistSans.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body>
        <Navigation />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <div className="site-content" id="main-content">
          {children}
        </div>
      </body>
    </html>
  );
}
