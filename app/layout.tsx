import type { Viewport, Metadata } from 'next'
import './globals.css'
import './force-fonts.css'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { TrekTabProvider } from '@/contexts/TrekTabContext'
import { PeakTabProvider } from '@/contexts/PeakTabContext'
import { SafariTabProvider } from '@/contexts/SafariTabContext'
// import ScrollToTop from '@/components/ScrollToTop'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BackgroundImage from '@/components/BackgroundImage'
import LayoutClientWrapper from '@/components/LayoutClientWrapper'
import StructuredData from '@/components/StructuredData'

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://ngimalayaadventure.com'),
  title: {
    default: "Ngimalaya Adventure | Expert Trekking & Expedition Company in Nepal",
    template: "%s | Ngimalaya Adventure"
  },
  description: "Experience the Himalayas with Ngimalaya Adventure - a Sherpa-owned trekking company offering authentic Nepal treks, peak expeditions, wildlife safaris, and custom adventure tours. Expert guides, 20+ years experience.",
  keywords: [
    "Nepal trekking",
    "Everest Base Camp trek",
    "Annapurna Circuit",
    "Sherpa trekking guide",
    "Nepal expedition",
    "Himalaya adventure",
    "peak climbing Nepal",
    "Nepal safari",
    "trekking company Nepal",
    "Kathmandu trekking",
    "Nepal tour operator",
    "mountain expedition",
    "Langtang trek",
    "Manaslu Circuit",
    "Nepal travel agency"
  ],
  authors: [{ name: "Ngimalaya Adventure", url: "https://ngimalayaadventure.com" }],
  creator: "Ngimalaya Adventure",
  publisher: "Ngimalaya Adventure",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Ngimalaya Adventure | Expert Nepal Trekking & Himalayan Expeditions",
    description: "Authentic Sherpa-led treks and expeditions in Nepal. Everest Base Camp, Annapurna, peak climbing, wildlife safaris. Expert local guides with 20+ years experience.",
    url: 'https://ngimalayaadventure.com',
    siteName: 'Ngimalaya Adventure',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ngimalaya Adventure - Expert Trekking Company in Nepal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ngimalaya Adventure | Expert Nepal Trekking & Expeditions',
    description: 'Authentic Sherpa-led treks and expeditions in Nepal. Everest Base Camp, Annapurna, peak climbing, wildlife safaris.',
    images: ['/og-image.png'],
    creator: '@ngimalaya',
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
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '500x500', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://ngimalayaadventure.com',
  },
  category: 'travel',
  verification: {
    // google: 'your-google-search-console-code',
    // other: {
    //   'facebook-domain-verification': 'your-facebook-code',
    // },
  },
}

// Viewport configuration for optimal mobile experience, especially iOS
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#10b981' },
    { media: '(prefers-color-scheme: dark)', color: '#064e3b' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to Google Fonts for faster loading */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        
        {/* Load all fonts FIRST - before any preload */}
        <link
          href="https://fonts.googleapis.com/css2?family=Jaini+Purva&family=Lato:wght@300;400;700;900&family=Satisfy&family=Lugrasimo&display=swap"
          rel="stylesheet"
        />
        
        {/* Critical inline CSS to apply fonts IMMEDIATELY */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* CRITICAL: Apply fonts before page renders */
            
            /* Special fonts - HIGHEST priority - Must be applied FIRST */
            .satisfy,
            .satisfy-regular,
            p.satisfy,
            p.satisfy-regular,
            span.satisfy,
            span.satisfy-regular {
              font-family: 'Satisfy', cursive !important;
              font-weight: 400 !important;
              font-style: normal !important;
              font-display: swap !important;
            }
            
            .lugrasimo,
            .lugrasimo-regular,
            p.lugrasimo,
            p.lugrasimo-regular {
              font-family: 'Lugrasimo', cursive !important;
              font-weight: 400 !important;
              font-style: normal !important;
              font-display: swap !important;
            }
            
            .times,
            .times-new-roman {
              font-family: 'Times New Roman', Times, serif !important;
            }
            
            /* Headings - Jaini Purva */
            h1, h1 *,
            h2, h2 *,
            h3, h3 *,
            h4, h4 *,
            h5, h5 *,
            h6, h6 *,
            .jaini-purva-regular,
            .jaini-purva,
            .font-heading,
            .font-display {
              font-family: 'Jaini Purva', system-ui, sans-serif !important;
              font-weight: 400 !important;
            }
            
            /* Body text - Lato (but NOT special font classes) */
            body {
              font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
            }
            
            p:not(.satisfy):not(.satisfy-regular):not(.lugrasimo):not(.lugrasimo-regular):not(.times),
            span:not(.satisfy):not(.satisfy-regular):not(.lugrasimo):not(.lugrasimo-regular),
            div:not(.satisfy):not(.satisfy-regular):not(.lugrasimo):not(.lugrasimo-regular) {
              font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            }
          `
        }} />
        {/* PWA Meta Tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Ngimalaya" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Structured Data for SEO */}
        <StructuredData />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <TrekTabProvider>
            <PeakTabProvider>
              <SafariTabProvider>
                <BackgroundImage />
                <Header />
                <main className="mt-20 md:mt-30 relative z-0">
                  {children}
                </main>
                <Footer />
                {/* <ScrollToTop /> */}
                <LayoutClientWrapper />
              </SafariTabProvider>
            </PeakTabProvider>
          </TrekTabProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
