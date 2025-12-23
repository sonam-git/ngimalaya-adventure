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
import AnnouncementModal from '@/components/AnnouncementModal'

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://ngimalayaadventure.com'),
  title: {
    default: "Ngimalaya Adventure | Expert Trekking & Expedition Company in Nepal",
    template: "%s | Ngimalaya Adventure"
  },
  description: "Experience the Himalayas with Ngimalaya Adventure - a Sherpa-owned trekking company offering authentic Nepal treks, peak expeditions, wildlife safaris, and custom adventure tours. Expert guides, 20+ years experience.",
  keywords: [
    "Ngimalaya Adventure",
    "best guide company in Nepal",
    "best prices trekking Nepal",
    "best trekking packages Nepal",
    "best trekking company in Nepal",
    "Nepal trekking agency",
    "Himalayan treks",
    "Sherpa guides Nepal",
    "Everest Base Camp",
    "Annapurna trekking",
    "custom Nepal tours",
    "wildlife safari Nepal",
    "mountain climbing Nepal",
    "adventure travel Nepal",
    "guided treks Himalayas",
    "Nepal tour packages",  
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
    locale: 'nepal-NP',
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
        {/* Preload critical fonts FIRST - before any other resources */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Jaini+Purva&family=Lato:wght@300;400;700;900&family=Satisfy&family=Lugrasimo&display=swap"
          as="style"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jaini+Purva&family=Lato:wght@300;400;700;900&family=Satisfy&family=Lugrasimo&display=swap"
          rel="stylesheet"
        />
        
        {/* Critical inline CSS - Force fonts immediately, no FOUC */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Load fonts synchronously */
            @import url('https://fonts.googleapis.com/css2?family=Jaini+Purva&family=Lato:wght@300;400;700;900&family=Satisfy&family=Lugrasimo&display=block');
            
            /* CRITICAL: Apply fonts immediately on page load */
            * {
              font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
            }
            
            /* Force Jaini Purva for headings and special classes - MAXIMUM SPECIFICITY */
            html body h1,
            html body h1 *,
            html body h2,
            html body h2 *,
            html body h3,
            html body h3 *,
            html body h4,
            html body h4 *,
            html body h5,
            html body h5 *,
            html body h6,
            html body h6 *,
            html body .jaini-purva-regular,
            html body .jaini-purva-regular *,
            html body .font-heading,
            html body .font-heading *,
            html body .font-display,
            html body .font-display *,
            html body [class*="jaini-purva"],
            html body [class*="jaini-purva"] * {
              font-family: 'Jaini Purva', system-ui, sans-serif !important;
              font-weight: 400 !important;
            }
            
            /* Prevent font flash */
            body {
              font-family: 'Lato', sans-serif !important;
              visibility: visible;
            }
            
            /* Override any Google Translate font modifications */
            font {
              font-family: inherit !important;
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
                <main className="mt-32 md:mt-30 relative z-0">
                  {children}
                </main>
                <Footer />
                {/* <ScrollToTop /> */}
                <LayoutClientWrapper />
                <AnnouncementModal />
              </SafariTabProvider>
            </PeakTabProvider>
          </TrekTabProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
