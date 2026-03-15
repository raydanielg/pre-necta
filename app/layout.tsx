import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PRE NECTA Mwanza FORM SIX EXAMINATION RESULTS 2026 | Student Academic Results System",
  description:
    "PRE NECTA Mwanza Form Six Examination Results 2026. View and search results by school name or alphabet. NECTA-style results portal.",
  keywords:
    "PRE NECTA, Mwanza, Form Six, Examination Results, 2026, NECTA, Secondary School Results, Student Results",
  authors: [{ name: "PRE NECTA Mwanza" }],
  openGraph: {
    type: "website",
    title: "PRE NECTA Mwanza FORM SIX EXAMINATION RESULTS 2026",
    description:
      "Browse PRE NECTA Mwanza Form Six Examination Results 2026. Search by school name or alphabet.",
    images: [
      {
        url: "https://portal.sars.ac.tz/logo/shallow-focus-shot-people-wearing-same-uniform-standing-line.jpg",
      },
    ],
    url: "https://portal.sars.ac.tz/",
    siteName: "PRE NECTA Mwanza Results",
  },
  twitter: {
    card: "summary_large_image",
    title: "PRE NECTA Mwanza FORM SIX EXAMINATION RESULTS 2026",
    description:
      "View PRE NECTA Mwanza Form Six Examination Results 2026. Search schools by name or alphabet.",
    images: [
      "https://portal.sars.ac.tz/logo/shallow-focus-shot-people-wearing-same-uniform-standing-line.jpg",
    ],
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
      </body>
    </html>
  );
}
