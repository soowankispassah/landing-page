'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function LayoutWrapper({
  children
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname === '/') {
      const hash = window.location.hash
      if (hash) {
        const element = document.getElementById(hash.replace('#', ''))
        setTimeout(() => {
          element?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [pathname])

  return (
    <div className="flex flex-col min-h-screen">
      {children}
    </div>
  )
}
