import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '@/app/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'OlenkaAI',
  description: 'Empowering Rural Communities Through AI',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
