'use client'

import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { handleSectionNavigation } from '@/utils/navigation'

export default function Navbar() {
  const router = useRouter()
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    handleSectionNavigation(e, href, pathname, router, () => setIsOpen(false))
  }

  // Add effect to handle initial scroll if there's a section query
  useEffect(() => {
    if (pathname === '/') {
      const params = new URLSearchParams(window.location.search)
      const section = params.get('section')
      if (section) {
        const element = document.getElementById(section)
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' })
          }, 500)
        }
      }
    }
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial scroll position
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-white shadow-md' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className={scrolled || isOpen ? 'text-black' : 'text-white'}>
            OlenkaAI
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#projects" 
               onClick={(e) => handleNavigation(e, '#projects')} 
               className={scrolled || isOpen ? 'text-black' : 'text-white'}>
              Projects
            </a>
            <a href="#about" 
               onClick={(e) => handleNavigation(e, '#about')} 
               className={scrolled || isOpen ? 'text-black' : 'text-white'}>
              About
            </a>
            <a href="#contact" 
               onClick={(e) => handleNavigation(e, '#contact')} 
               className={scrolled || isOpen ? 'text-black' : 'text-white'}>
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button - Combined hamburger and X button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden z-50"
          >
            <svg 
              className={`w-6 h-6 ${scrolled || isOpen ? 'text-black' : 'text-white'}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full">
            <div className="bg-white shadow-lg rounded-lg mt-2 mx-4">
              <div className="px-4 py-3 space-y-3">
                <a href="#projects" 
                   onClick={(e) => handleNavigation(e, '#projects')} 
                   className="block text-black hover:bg-gray-100 rounded px-2 py-1">
                  Projects
                </a>
                <a href="#about" 
                   onClick={(e) => handleNavigation(e, '#about')} 
                   className="block text-black hover:bg-gray-100 rounded px-2 py-1">
                  About
                </a>
                <a href="#contact" 
                   onClick={(e) => handleNavigation(e, '#contact')} 
                   className="block text-black hover:bg-gray-100 rounded px-2 py-1">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}