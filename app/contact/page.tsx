import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react'
import { DivisionQuoteForm } from '@/components/division-quote-form'

export default function ContactPage() {
  return (
    <div>
      <section className="bg-[#111111] text-white py-16 lg:py-24 brand-curve-top-left">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="brand-accent-line" />
            <span className="text-xs font-bold text-[#A80000] uppercase tracking-widest">Get in Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-gray-400 text-lg max-w-xl">
            Ready to work with us? Reach out for waste management, cleaning, or construction support. We respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#111111] mb-6">
                Let&apos;s Talk
              </h2>
              <p className="text-[#526669] mb-8 leading-relaxed">
                Whether you need a quote, have a question, or want to explore how we can help — we&apos;re here for you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#F8EAEA] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#A80000]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#111111] mb-1">Phone</h3>
                    <a href="tel:+27797517507" className="text-[#526669] hover:text-[#A80000] transition-colors">
                      +27 79 751 7507
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#F8EAEA] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#A80000]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#111111] mb-1">Email</h3>
                    <a href="mailto:info@vyolwetu.co.za" className="text-[#526669] hover:text-[#A80000] block transition-colors">
                      info@vyolwetu.co.za
                    </a>
                    <a href="mailto:nqobile@vyolwetu.co.za" className="text-[#526669] hover:text-[#A80000] text-sm transition-colors">
                      nqobile@vyolwetu.co.za
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#F8EAEA] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#A80000]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#111111] mb-1">Location</h3>
                    <p className="text-[#526669]">55 Maseko Street, Duduza, 1496</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#F8EAEA] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#A80000]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#111111] mb-1">Business Hours</h3>
                    <p className="text-[#526669] text-sm">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-[#526669] text-sm">Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a 
                  href="https://wa.me/27797517507?text=Hi%20Vyolwetu,%20I%27d%20like%20to%20inquire%20about%20your%20services" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full hover:bg-[#20BD5A] transition-colors font-medium"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            <DivisionQuoteForm sourcePage="/contact" />
          </div>
        </div>
      </section>
    </div>
  )
}