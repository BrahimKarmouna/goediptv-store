import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display } from "next/font/google"
import { Inter } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: {
    default: "IPTV Kopen | Beste Nederlandse IPTV Abonnementen 2024",
    template: "%s | IPTV Kopen Nederland"
  },
  description: "✅ Beste IPTV aanbieders van Nederland! Vergelijk en kies het beste IPTV abonnement voor Nederlandse zenders, sport, films en series. ✅ 24/7 support en eenvoudige installatie.",
  keywords: [
    "iptv kopen", "nederlandse iptv", "goedkope iptv", "beste iptv nederland", 
    "iptv abonnement", "nederlandse zenders kijken", "iptv met nederlandse zenders",
    "goedkope iptv nederland", "iptv aanbieders", "iptv nederland betrouwbaar"
  ],
  applicationName: "IPTV Kopen Nederland",
  authors: [{ name: "IPTV Kopen" }],
  generator: "Next.js",
  metadataBase: new URL('https://www.iptvkopen.nl'),
  alternates: {
    canonical: '/',
    languages: {
      'nl-NL': '/nl-NL',
    },
  },
  openGraph: {
    title: 'Beste IPTV Abonnementen van Nederland | IPTV Kopen',
    description: 'Vergelijk en kies het beste IPTV abonnement met Nederlandse zenders, sport, films en series. Eenvoudige installatie en 24/7 support.',
    url: 'https://www.iptvkopen.nl',
    siteName: 'IPTV Kopen',
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beste IPTV Abonnementen van Nederland | IPTV Kopen',
    description: 'Vergelijk en kies het beste IPTV abonnement met Nederlandse zenders, sport, films en series.',
    creator: '@iptvkopen_nl',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_KEY',
    yandex: 'YANDEX_VERIFICATION_KEY',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className={`${playfair.variable} ${inter.variable} dark`} itemScope itemType="http://schema.org/WebPage">
      <body className="font-sans antialiased bg-background text-foreground">{children}</body>
    </html>
  )
}
