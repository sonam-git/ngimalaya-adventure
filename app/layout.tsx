import { Oswald, Lato } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'
import ScrollToTop from '@/components/ScrollToTop'
import MobileBottomBarWrapper from '@/components/MobileBottomBarWrapper'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoogleTranslateClient from '@/components/GoogleTranslateClient';

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
          <Header />
          {/* Theme toggle and language dropdown in one column, top right below prayer flag border */}
          <div className="fixed right-6 top-[calc(6rem+0.5rem)] md:top-[calc(7rem+0.5rem)] z-50 flex flex-col items-end gap-2">
            <div>
              {/* Theme Toggle (imported in Header, so use Header's ThemeToggle if needed) */}
              {/* If you want to move ThemeToggle here, import and use it directly. Otherwise, keep as is. */}
            </div>
            <GoogleTranslateClient />
          </div>
          <main className="mt-20 md:mt-30">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
          <MobileBottomBarWrapper />
        </ThemeProvider>
      </body>
    </html>
  )
}
