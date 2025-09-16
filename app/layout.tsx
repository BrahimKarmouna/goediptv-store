import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
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
  metadataBase: new URL('https://www.iptvkopen.nl'),
  alternates: {
    canonical: 'https://www.iptvkopen.nl',
    languages: {
      'nl-NL': 'https://www.iptvkopen.nl/nl-NL',
    },
  },
  title: {
    default: "Goed IPTV | Beste Nederlandse IPTV Abonnementen 2024",
    template: "%s | Goed IPTV Nederland"
  },
  description: "✅ Goed IPTV in Nederland! Vergelijk en kies het beste IPTV abonnement (Nederlandse zenders, sport, films en series). ✅ 24/7 support en eenvoudige installatie.",
  keywords: [
    "goed iptv", "iptv kopen", "iptv netherlands", "dutch iptv",
    "nederlandse iptv", "goedkope iptv", "beste iptv nederland", 
    "iptv abonnement", "nederlandse zenders kijken", "iptv met nederlandse zenders",
    "goedkope iptv nederland", "iptv aanbieders", "iptv nederland betrouwbaar"
  ],
  applicationName: "Goed IPTV Nederland",
  authors: [{ name: "Goed IPTV" }],
  generator: "Next.js",
  openGraph: {
    title: 'Beste IPTV Abonnementen van Nederland | Goed IPTV',
    description: 'Vergelijk en kies het beste IPTV abonnement met Nederlandse zenders, sport, films en series. Goed IPTV, eenvoudige installatie en 24/7 support.',
    url: 'https://www.iptvkopen.nl',
    siteName: 'Goed IPTV',
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beste IPTV Abonnementen van Nederland | Goed IPTV',
    description: 'Vergelijk en kies het beste IPTV abonnement met Nederlandse zenders, sport, films en series. Goed IPTV in Nederland.',
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
      <body className="font-sans antialiased bg-background text-foreground">
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GYK0Q72GPD"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GYK0Q72GPD', { page_path: window.location.pathname });
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}
