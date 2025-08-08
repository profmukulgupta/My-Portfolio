import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/ui/navbar"
import Footer from "@/components/ui/footer"
import { Toaster } from "@/components/ui/toaster"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap", // Optimize font loading
  preload: true,
})

export const metadata: Metadata = {
  title: "Mukul Gupta | Software Engineer & Creative Technologist",
  description:
    "Portfolio of Mukul Gupta - Software Engineer, Tech Instructor, AI Enthusiast, and Creative Entrepreneur based in Kanpur, India.",
  keywords: [
    "Mukul Gupta",
    "Software Engineer",
    "Tech Instructor",
    "AI Enthusiast",
    "Kanpur",
    "India",
    "LinkedIn ConnectEz",
    "Beatboxer",
    "Bodybuilder",
    "Novelist",
  ],
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/grid.svg" as="image" />
        <link rel="preload" href="/sounds/click.mp3" as="audio" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Critical CSS for hero section */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            .hero-loading {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460);
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 9999;
            }
            .hero-loading-text {
              color: white;
              font-size: 1.5rem;
              font-weight: bold;
              background: linear-gradient(90deg, #8b5cf6, #06b6d4, #8b5cf6);
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              animation: pulse 2s ease-in-out infinite;
            }
            @keyframes pulse {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.5; }
            }
          `,
          }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="relative min-h-screen bg-gradient-to-b from-background to-background/90">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            <Navbar />
            <div className="relative">{children}</div>
            <Footer />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
