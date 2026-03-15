import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "MOCK EXAMINATION MWANZA - MATOKEO YA KIDATO CHA SITA 2026",
  description:
    "Angalia Matokeo ya MOCK EXAMINATION Mwanza 2026 (Form Six). Mfumo rahisi wa kutafuta matokeo kwa jina la shule, takwimu za ufaulu, na uchambuzi wa masomo.",
  keywords:
    "MOCK EXAMINATION Mwanza, Matokeo ya Kidato cha Sita 2026, Form Six Results Mwanza, MOCK 2026, Mwanza Region Results, Matokeo ya Shule Mwanza",
  authors: [{ name: "MOCK EXAMINATION Mwanza" }],
  icons: {
    icon: "/paper_16367484.png",
    apple: "/paper_16367484.png",
  },
  openGraph: {
    type: "website",
    title: "MOCK EXAMINATION MWANZA - MATOKEO YA KIDATO CHA SITA 2026",
    description:
      "Pata matokeo yote ya MOCK EXAMINATION Mwanza 2026 kwa urahisi. Uchambuzi wa ufaulu wa shule, masomo, na wanafunzi bora.",
    images: [
      {
        url: "/seo-image.png",
        width: 1200,
        height: 630,
        alt: "MOCK EXAMINATION MWANZA 2026 SEO Preview",
      },
    ],
    url: "https://pre-necta-mwanza.vercel.app",
    siteName: "MOCK EXAMINATION Mwanza",
  },
  twitter: {
    card: "summary_large_image",
    title: "MOCK EXAMINATION MWANZA - MATOKEO YA KIDATO CHA SITA 2026",
    description:
      "Mfumo wa Matokeo ya MOCK EXAMINATION Mwanza 2026. Rahisi, Haraka na Uhakika.",
    images: ["/seo-image.png"],
  },
};

import SiteFooter from "@/components/SiteFooter";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <div style={{ flex: 1 }}>{children}</div>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
