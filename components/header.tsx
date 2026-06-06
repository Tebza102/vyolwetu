'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Mail, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/waste-management', label: 'Waste Management' },
  { href: '/cleaning', label: 'Cleaning' },
  { href: '/construction', label: 'Construction' },
  { href: '/csi', label: 'CSI' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="h-1 w-full bg-[#A80000]" />
      <div className="bg-[#111111] text-white py-2 hidden lg:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+27797517507" className="flex items-center gap-2 hover:text-[#A80000] transition-colors">
              <Phone className="w-4 h-4" />
              <span>+27 79 751 7507</span>
            </a>
            <a href="mailto:nqobile@vyolwetu.co.za" className="flex items-center gap-2 hover:text-[#A80000] transition-colors">
              <Mail className="w-4 h-4" />
              <span>nqobile@vyolwetu.co.za</span>
            </a>
            <a href="https://wa.me/27797517507" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#A80000] transition-colors">
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
          <Link href="/contact">
            <Button className="bg-[#A80000] hover:bg-[#850000] text-white text-sm py-1 px-4 h-8 rounded-full">
              Get a Quote
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <img 
              src="/VyolwetuLogo.png" 
              alt="Vyolwetu - Passion to Serve" 
              className="h-11 w-auto object-contain" 
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#111111] hover:text-[#A80000] font-medium transition-colors text-sm tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="https://wa.me/27797517507" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full px-5">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Us
              </Button>
            </a>
            <Link href="/contact">
              <Button className="bg-[#A80000] hover:bg-[#850000] text-white rounded-full px-6">
                Get a Quote
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#111111]" />
            ) : (
              <Menu className="w-6 h-6 text-[#111111]" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#E8E8E8]">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#111111] hover:text-[#A80000] font-medium py-3 border-b border-[#F7F7F7] last:border-0 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-5 pb-2">
              <a href="tel:+27797517507" className="flex items-center gap-3 text-[#111111] py-1">
                <Phone className="w-5 h-5 text-[#A80000]" />
                <span>+27 79 751 7507</span>
              </a>
              <a href="mailto:nqobile@vyolwetu.co.za" className="flex items-center gap-3 text-[#111111] py-1">
                <Mail className="w-5 h-5 text-[#A80000]" />
                <span>nqobile@vyolwetu.co.za</span>
              </a>
              <div className="flex flex-col gap-2 pt-2">
                <a href="https://wa.me/27797517507" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#25D366] hover:bg-[#20BD5A] text-white w-full rounded-full">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Us
                  </Button>
                </a>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="bg-[#A80000] hover:bg-[#850000] text-white w-full rounded-full">
                    Get a Quote
                  </Button>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}