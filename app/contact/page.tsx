'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    location: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      if (response.ok) {
        alert('Quote request submitted successfully! We will contact you soon.')
        setFormData({ name: '', email: '', phone: '', service: '', location: '', message: '' })
      }
    } catch {
      alert('Something went wrong. Please try again.')
    }
  }

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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

            <Card className="border-[#E8E8E8]">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-[#111111] mb-6">Request a Quote</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#111111] text-sm mb-2 font-medium">Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F7F7] text-[#111111] border border-[#E8E8E8] focus:outline-none focus:border-[#A80000] transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-[#111111] text-sm mb-2 font-medium">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F7F7] text-[#111111] border border-[#E8E8E8] focus:outline-none focus:border-[#A80000] transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#111111] text-sm mb-2 font-medium">Phone *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F7F7] text-[#111111] border border-[#E8E8E8] focus:outline-none focus:border-[#A80000] transition-colors"
                        placeholder="+27 XX XXX XXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-[#111111] text-sm mb-2 font-medium">Service Required *</label>
                      <select
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F7F7] text-[#111111] border border-[#E8E8E8] focus:outline-none focus:border-[#A80000] transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option value="waste_management">Waste Management</option>
                        <option value="cleaning">Professional Cleaning</option>
                        <option value="construction">Construction Support</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#111111] text-sm mb-2 font-medium">Location</label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F7F7] text-[#111111] border border-[#E8E8E8] focus:outline-none focus:border-[#A80000] transition-colors"
                      placeholder="City / Area"
                    />
                  </div>
                  <div>
                    <label className="block text-[#111111] text-sm mb-2 font-medium">Message</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F7F7] text-[#111111] border border-[#E8E8E8] focus:outline-none focus:border-[#A80000] transition-colors resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>
                  <Button type="submit" className="w-full bg-[#A80000] hover:bg-[#850000] text-white text-base py-5 rounded-full mt-2">
                    Submit Quote Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}