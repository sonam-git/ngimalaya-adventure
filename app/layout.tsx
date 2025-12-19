import { Oswald, Lato } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { TrekTabProvider } from '@/contexts/TrekTabContext'
import { PeakTabProvider } from '@/contexts/PeakTabContext'
import { SafariTabProvider } from '@/contexts/SafariTabContext'
// import ScrollToTop from '@/components/ScrollToTop'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BackgroundImage from '@/components/BackgroundImage'
import LayoutClientWrapper from '@/components/LayoutClientWrapper'


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


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${lato.variable}`} suppressHydrationWarning>
      <body className="font-body antialiased">
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
