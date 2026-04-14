import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#020213] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/VyolwetuLogo.png" alt="Vyolwetu" className="h-10 w-auto" />
            </div>
            <p className="text-gray-300 text-sm mb-2">Passion to Serve</p>
            <p className="text-gray-300 text-sm mb-4">
              Clean. Safe. Reliable. Eco-conscious service delivery with real community impact.
            </p>
            <div className="flex gap-4">
              <span className="text-gray-300 hover:text-[#A70404] transition-colors cursor-pointer">FB</span>
              <span className="text-gray-300 hover:text-[#A70404] transition-colors cursor-pointer">LI</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/waste-management" className="text-gray-300 hover:text-[#A70404] transition-colors text-sm">
                  Waste Management
                </Link>
              </li>
              <li>
                <Link href="/cleaning" className="text-gray-300 hover:text-[#A70404] transition-colors text-sm">
                  Professional Cleaning
                </Link>
              </li>
              <li>
                <Link href="/construction" className="text-gray-300 hover:text-[#A70404] transition-colors text-sm">
                  Construction Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-[#A70404] transition-colors text-sm">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="/csi" className="text-gray-300 hover:text-[#A70404] transition-colors text-sm">
                  CSI & Community
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#A70404] transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#A70404] transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#A70404] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  South Africa
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#A70404] flex-shrink-0" />
                <a href="tel:+27797515707" className="text-gray-300 hover:text-[#A70404] transition-colors text-sm">
                  079 751 5707
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#A70404] flex-shrink-0" />
                <a href="mailto:info@vyolwetu.co.za" className="text-gray-300 hover:text-[#A70404] transition-colors text-sm">
                  info@vyolwetu.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Vyolwetu. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm items-center">
            <a href="#" className="text-gray-400 hover:text-[#A70404] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-[#A70404] transition-colors">
              Terms of Service
            </a>
            <a 
              href="https://www.apprigate.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#A70404] transition-colors text-xs"
            >
              Designed by Apprigate
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}