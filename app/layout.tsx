import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import AidBot from "@/components/aid-bot"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "KHEGARHA FALAHI TANZEEM - Empowering Communities Through Compassionate Service",
  description:
    "K.F.T provides essential services including food assistance, healthcare support, education programs, and emergency relief to families in remote regions of Swat, Pakistan. Serving 2,000+ families since 2017.",
  keywords:
    "KFT, Khegarha Falahi Tanzeem, Swat welfare, Pakistan NGO, food assistance, healthcare support, education programs, charity, social welfare, Barikot",
  authors: [{ name: "Khegarha Falahi Tanzeem" }],
  creator: "Khegarha Falahi Tanzeem",
  publisher: "Khegarha Falahi Tanzeem",
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/kft-logo-new.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "KHEGARHA FALAHI TANZEEM - Empowering Communities Through Compassionate Service",
    description:
      "K.F.T provides essential services including food assistance, healthcare support, education programs, and emergency relief to families in remote regions of Swat, Pakistan.",
    url: "https://kft.org",
    siteName: "Khegarha Falahi Tanzeem",
    images: [
      {
        url: "/images/kft-logo-new.png", // Updated OpenGraph image to use new logo
        width: 1200,
        height: 630,
        alt: "Khegarha Falahi Tanzeem Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KHEGARHA FALAHI TANZEEM - Empowering Communities",
    description:
      "Serving 2,000+ families in Swat, Pakistan through food assistance, healthcare, and education programs.",
    images: ["/images/kft-logo-new.png"], // Updated Twitter card image to use new logo
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#059669",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/kft-logo-new.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#059669" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <AidBot />
      </body>
    </html>
  )
}
