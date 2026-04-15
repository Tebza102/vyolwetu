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
  { href: '/projects', label: 'Projects' },
  { href: '/csi', label: 'CSI' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[#D7DADB]">
      {/* Top Bar */}
      <div className="hidden lg:block bg-[#020213] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+27797515707" className="flex items-center gap-2 hover:text-[#A70404] transition-colors">
              <Phone className="w-4 h-4" />
              <span>079 751 5707</span>
            </a>
            <a href="mailto:info@vyolwetu.co.za" className="flex items-center gap-2 hover:text-[#A70404] transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@vyolwetu.co.za</span>
            </a>
            <a href="https://wa.me/+27797515707" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#A70404] transition-colors">
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
          <Link href="/contact">
            <Button className="bg-[#A70404] hover:bg-[#8E0303] text-white text-sm py-1 px-4">
              Get a Quote
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src="/VyolwetuLogo.png" alt="Vyolwetu" className="h-12 w-auto" />
            <div className="hidden md:block">
              <span className="text-[#243C42] font-bold text-lg">Passion to Serve</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#526669] hover:text-[#A70404] font-medium transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <Button className="bg-[#A70404] hover:bg-[#8E0303] text-white">
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#243C42]" />
            ) : (
              <Menu className="w-6 h-6 text-[#243C42]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#D7DADB]">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#526669] hover:text-[#A70404] font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-[#D7DADB]">
              <a href="tel:+27797515707" className="flex items-center gap-2 text-[#526669]">
                <Phone className="w-4 h-4" />
                <span>079 751 5707</span>
              </a>
              <a href="mailto:info@vyolwetu.co.za" className="flex items-center gap-2 text-[#526669]">
                <Mail className="w-4 h-4" />
                <span>info@vyolwetu.co.za</span>
              </a>
              <Link href="/contact">
                <Button className="bg-[#A70404] hover:bg-[#8E0303] text-white w-full">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}