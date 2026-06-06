import Link from 'next/link'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="h-0.5 w-full bg-[#A80000]" />
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img 
              src="/VyolwetuLogo.png" 
              alt="Vyolwetu - Passion to Serve" 
              className="h-10 w-auto object-contain mb-4" 
            />
            <p className="text-[#A80000] font-semibold text-sm mb-3 tracking-wide">Passion to Serve</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-xs">
              Integrated waste management, professional cleaning, and construction support services. Cleaner sites. Safer spaces. Reliable delivery.
            </p>
            <div className="flex gap-4">
              <span className="text-gray-500 hover:text-[#A80000] transition-colors cursor-pointer text-sm font-medium">FB</span>
              <span className="text-gray-500 hover:text-[#A80000] transition-colors cursor-pointer text-sm font-medium">LI</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-300 mb-5">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/waste-management" className="text-gray-400 hover:text-[#A80000] transition-colors text-sm inline-block">
                  Waste Management
                </Link>
              </li>
              <li>
                <Link href="/cleaning" className="text-gray-400 hover:text-[#A80000] transition-colors text-sm inline-block">
                  Professional Cleaning
                </Link>
              </li>
              <li>
                <Link href="/construction" className="text-gray-400 hover:text-[#A80000] transition-colors text-sm inline-block">
                  Construction Support & Site Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-300 mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/csi" className="text-gray-400 hover:text-[#A80000] transition-colors text-sm inline-block">
                  CSI & Community
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#A80000] transition-colors text-sm inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#A80000] transition-colors text-sm inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-300 mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#A80000] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  55 Maseko Street, Duduza, 1496
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#A80000] flex-shrink-0" />
                <a href="tel:+27797517507" className="text-gray-400 hover:text-[#A80000] transition-colors text-sm">
                  +27 79 751 7507
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#A80000] flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:info@vyolwetu.co.za" className="text-gray-400 hover:text-[#A80000] transition-colors text-sm">
                    info@vyolwetu.co.za
                  </a>
                  <a href="mailto:nqobile@vyolwetu.co.za" className="text-gray-500 hover:text-[#A80000] transition-colors text-xs">
                    nqobile@vyolwetu.co.za
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              Ready to get started?
            </h3>
            <p className="text-gray-400 mb-6">
              Contact Vyolwetu for waste management, cleaning, or construction support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-[#A80000] hover:bg-[#850000] text-white text-base px-8 py-3 rounded-full font-medium transition-colors inline-flex items-center gap-2">
                  <ArrowRight className="w-5 h-5" />
                  Request a Quote
                </button>
              </Link>
              <a href="tel:+27797517507">
                <button className="border border-gray-600 hover:border-[#A80000] text-gray-300 hover:text-white text-base px-8 py-3 rounded-full font-medium transition-colors inline-flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Vyolwetu. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm items-center">
            <a href="#" className="text-gray-500 hover:text-[#A80000] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-[#A80000] transition-colors">
              Terms of Service
            </a>
            <a 
              href="https://www.apprigate.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#A80000] transition-colors text-xs"
            >
              Designed by Apprigate
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}