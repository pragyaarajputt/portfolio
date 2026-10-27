import type { Metadata, Viewport } from "next";
import { Caveat, Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const geist = Geist({ variable: "--font-geist", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });
const caveat = Caveat({ variable: "--font-caveat", subsets: ["latin"], display: "swap" });

const description =
  "Pragya Rajput is a full-stack developer in New Delhi building React, Next.js, Node.js and FastAPI products, with LLM features in production.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: "Pragya Rajput, full-stack developer",
  description,
  authors: [{ name: profile.name, url: profile.github }],
  openGraph: {
    type: "website",
    title: "Pragya Rajput, full-stack developer",
    description,
    siteName: profile.name,
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title: "Pragya Rajput, full-stack developer", description },
};

export const viewport: Viewport = {
  themeColor: "#06020b",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${instrument.variable} ${geist.variable} ${geistMono.variable} ${caveat.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
