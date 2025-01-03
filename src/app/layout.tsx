'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '@/app/globals.css'

const metadata = {
  title: 'OlenkaAI',
  description: 'Empowering Rural Communities Through AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
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
