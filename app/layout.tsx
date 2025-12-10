import type { Metadata } from 'next'
import { Oswald, Lato } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'
import ScrollToTop from '@/components/ScrollToTop'
import MobileBottomBarWrapper from '@/components/MobileBottomBarWrapper'

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
})

const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
})

// Note: Fast Refresh warning below is expected and safe to ignore in Next.js App Router layouts
export const metadata: Metadata = {
  title: 'Ngimalaya Adventure Nepal | Trek Higher, Breathe Deeper',
  description: 'Where Culture Meets the Clouds, and Every Trek Tells a Story! Experience the Himalayas with over 20 years of expertise and passion. Expert trekking and mountaineering services in Nepal.',
  keywords: 'Nepal trekking, Everest Base Camp, Annapurna Circuit, Himalayan adventure, mountaineering Nepal, trekking agency Nepal',
  authors: [{ name: 'Ngimalaya Adventure Nepal' }],
  openGraph: {
    title: 'Ngimalaya Adventure Nepal',
    description: 'Experience the Himalayas with over 20 years of expertise',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${lato.variable}`} suppressHydrationWarning>
      <body className="font-body antialiased">
        <ThemeProvider>
          {children}
          <ScrollToTop />
          <MobileBottomBarWrapper />
        </ThemeProvider>
      </body>
    </html>
  )
}
