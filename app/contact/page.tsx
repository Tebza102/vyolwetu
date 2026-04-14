'use client'

import { useState } from 'react'
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
    } catch (error) {
      alert('Something went wrong. Please try again.')
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#020213] text-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Get in touch with us for all your waste management, cleaning, and construction needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#020213] mb-6">
                Get In Touch
              </h2>
              <p className="text-[#526669] mb-8">
                We are here to answer any questions you may have. Reach out to us and we'll respond as soon as we can.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#A70404] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#020213] mb-1">Phone</h3>
                    <a href="tel:+27797515707" className="text-[#526669] hover:text-[#A70404]">
                      079 751 5707
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#334A4F] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#020213] mb-1">Email</h3>
                    <a href="mailto:info@vyolwetu.co.za" className="text-[#526669] hover:text-[#A70404]">
                      info@vyolwetu.co.za
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#2F6F5E] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#020213] mb-1">Location</h3>
                    <p className="text-[#526669]">South Africa</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#526669] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#020213] mb-1">Business Hours</h3>
                    <p className="text-[#526669]">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-[#526669]">Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-8">
                <a 
                  href="https://wa.me/27797515707" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg hover:bg-[#20BD5A] transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Quote Form */}
            <Card className="border-[#D7DADB]">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-[#020213] mb-6">Request a Quote</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#020213] text-sm mb-2">Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-[#F7F8F8] text-[#020213] border border-[#D7DADB] focus:outline-none focus:border-[#A70404]"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-[#020213] text-sm mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-[#F7F8F8] text-[#020213] border border-[#D7DADB] focus:outline-none focus:border-[#A70404]"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#020213] text-sm mb-2">Phone *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-[#F7F8F8] text-[#020213] border border-[#D7DADB] focus:outline-none focus:border-[#A70404]"
                        placeholder="071 234 5678"
                      />
                    </div>
                    <div>
                      <label className="block text-[#020213] text-sm mb-2">Service Required *</label>
                      <select
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-[#F7F8F8] text-[#020213] border border-[#D7DADB] focus:outline-none focus:border-[#A70404]"
                      >
                        <option value="">Select a service</option>
                        <option value="waste_management">Waste Management</option>
                        <option value="cleaning">Professional Cleaning</option>
                        <option value="construction">Construction</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#020213] text-sm mb-2">Location</label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#F7F8F8] text-[#020213] border border-[#D7DADB] focus:outline-none focus:border-[#A70404]"
                      placeholder="City/Area"
                    />
                  </div>
                  <div>
                    <label className="block text-[#020213] text-sm mb-2">Message</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#F7F8F8] text-[#020213] border border-[#D7DADB] focus:outline-none focus:border-[#A70404]"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>
                  <Button type="submit" className="w-full bg-[#A70404] hover:bg-[#8E0303] text-white text-lg py-4">
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