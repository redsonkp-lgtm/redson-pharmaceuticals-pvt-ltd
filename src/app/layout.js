import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import SchemaMarkup from "@/Components/SchemaMarkup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://redsongroup.in"),

  title: {
    default:
      "WHO-GMP Pharmaceutical Manufacturing Company in India | Redson Pharmaceuticals",
    template: "%s | Redson Pharmaceuticals",
  },

  description:
"Redson Pharmaceuticals is a WHO-GMP certified pharmaceutical manufacturing company in India offering third-party manufacturing, contract manufacturing, private label solutions, and pharmaceutical packaging for global healthcare brands.",

  keywords: [
  "third party pharmaceutical manufacturing company in India",
  "WHO GMP pharmaceutical manufacturer",
  "contract pharmaceutical manufacturing",
  "private label pharmaceutical manufacturer",
  "tablet manufacturing company",
  "capsule manufacturing company",
  "pharmaceutical packaging company",
  "pharmaceutical exporters India",
],

  authors: [{ name: "Redson Pharmaceuticals", url: "https://redsongroup.in" }],
  creator: "Redson Pharmaceuticals",
  publisher: "Redson Pharmaceuticals",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://redsongroup.in",
    siteName: "Redson Pharmaceuticals",
    title:
      "WHO-GMP Pharmaceutical Manufacturing Company in India | Redson Pharmaceuticals",
    description:
      "Contract manufacturing, private label, and custom packaging for global pharma brands. Quality-certified, innovation-driven, globally trusted.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Redson Pharmaceutical Manufacturing Facility",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@RedsonPharma",
    creator: "@RedsonPharma",
    title: "Redson | Pharmaceutical Manufacturing Partner",
    description:
      "Built for global healthcare brands. Contract manufacturing, private label & packaging solutions — certified, precise, globally supplied.",
    images: [
      {
        url: "/og-image.jpg",
        alt: "Redson Pharmaceutical Manufacturing",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  manifest: "/site.webmanifest",

  alternates: {
    canonical: "https://redsongroup.in",
  },

  category: "Healthcare, Pharmaceuticals",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SchemaMarkup />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
