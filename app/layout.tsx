import type React from "react"
import type { Metadata } from "next"
import { Fredoka } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieConsent from "@/components/cookie-consent"
import AnimatedBackground from "@/components/animated-background"

const inter = Fredoka({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LuminaryAdsPubl - Agencia de Marketing Offline",
  description:
    "Especialistas en marketing offline en España. Sampling, BTL, merchandising y más servicios para aumentar la visibilidad de tu marca.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AnimatedBackground />
          <Header />
          <main className="min-h-screen relative z-0">{children}</main>
          <Footer />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}
