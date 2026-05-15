'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, ArrowRight, CheckCircle, Leaf, Users, Award, MessageCircle } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    title: 'Waste Management',
    description: 'Responsible waste collection, recycling support, site clearing, and disposal coordination for cleaner, better-managed environments.',
    href: '/waste-management',
    image: 'https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Cleaning/MD%20and%20the%20cleaning%20team.PNG'
  },
  {
    title: 'Professional Cleaning',
    description: 'Commercial and industrial cleaning services that support hygiene, safety, presentation, and facility readiness.',
    href: '/cleaning',
    image: 'https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Cleaning/Site%20Cleaning.png'
  },
  {
    title: 'Construction Support & Site Services',
    description: 'Site clearing, post-construction cleaning, rubble removal coordination, and practical support for active project environments.',
    href: '/construction',
    image: 'https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Construction/WhatsApp%20Image%202026-04-02%20at%2010.32.41%20AM%20(1).jpeg'
  }
]

const trustPoints = [
  'Eco-conscious delivery',
  '18+ years combined experience',
  'Trusted by leading companies'
]

const processSteps = [
  { number: '01', title: 'Request', description: 'Submit your quote request online or call us directly.' },
  { number: '02', title: 'Assessment', description: 'We visit your site to understand your requirements.' },
  { number: '03', title: 'Quote', description: 'Receive a detailed, competitive quote within 24 hours.' },
  { number: '04', title: 'Delivery', description: 'Professional service delivery with quality assurance.' },
  { number: '05', title: 'Follow-up', description: 'We ensure your satisfaction and gather feedback.' }
]

const testimonials = [
  {
    quote: "Vyolwetu has been instrumental in keeping our facility clean and safe. Their professionalism is outstanding.",
    name: 'Facilities Manager',
    company: 'Commercial Building, Johannesburg'
  },
  {
    quote: "Reliable, efficient, and truly committed to sustainable waste management. Highly recommended.",
    name: 'Operations Director',
    company: 'Industrial Client'
  }
]

const csiPillars = [
  {
    title: 'Environment',
    description: 'Promoting sustainable practices and environmental stewardship',
    icon: Leaf
  },
  {
    title: 'Community',
    description: 'Supporting local communities through upliftment programs',
    icon: Users
  },
  {
    title: 'Skills',
    description: 'Creating employment and skills development opportunities',
    icon: Award
  }
]

export default function Home() {
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
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden brand-curve-top-left brand-curve-bottom-right">
        <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
          <div className="max-w-3xl">
            <div className="mb-4">
              <span className="brand-accent-line" />
              <span className="text-sm font-semibold text-[#0B2F33] ml-3 tracking-wide uppercase">Passion to Serve</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] mb-6 leading-tight">
              Cleaner Sites.<br />Safer Spaces.<br />Reliable Service.
            </h1>
            <p className="text-lg md:text-xl text-[#526669] mb-10 max-w-xl leading-relaxed">
              Integrated waste management, professional cleaning, and construction support services delivered with discipline, care, and a passion to serve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="bg-[#A80000] hover:bg-[#850000] text-white text-base px-8 py-5 rounded-full w-full sm:w-auto">
                  Request a Quote
                </Button>
              </Link>
              <Link href="/waste-management">
                <Button variant="outline" className="border-2 border-[#A80000] text-[#A80000] hover:bg-[#F8EAEA] text-base px-8 py-5 rounded-full w-full sm:w-auto">
                  View Services
                </Button>
              </Link>
              <a href="https://wa.me/27797517507?text=Hi%20Vyolwetu,%20I%27d%20like%20to%20inquire%20about%20your%20services" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#25D366] hover:bg-[#20BD5A] text-white text-base px-8 py-5 rounded-full w-full sm:w-auto">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="brand-dots absolute top-12 right-12 w-48 h-48 opacity-40 pointer-events-none hidden lg:block" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F8EAEA] rounded-full -mb-32 -ml-16 opacity-60 pointer-events-none hidden lg:block" />
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#F8EAEA] rounded-full -mt-12 -mr-12 opacity-60 pointer-events-none hidden lg:block" />
      </section>

      {/* Trust Strip */}
      <section className="bg-white border-y border-[#E8E8E8] py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm">
            {trustPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-2 text-[#526669] font-medium">
                <CheckCircle className="w-4 h-4 text-[#A80000] flex-shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="brand-accent-line" />
              <span className="text-xs font-bold text-[#A80000] uppercase tracking-widest">Our Services</span>
              <span className="brand-accent-line" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              What We Do
            </h2>
            <p className="text-[#526669] max-w-2xl mx-auto">
              Three focused divisions working together under one brand promise — cleaner, safer, and better-managed environments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link key={service.title} href={service.href}>
                <Card className="h-full card-brand group cursor-pointer overflow-hidden">
                  <div className="relative h-52 overflow-hidden">
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="w-10 h-10 rounded-lg bg-[#A80000] flex items-center justify-center shadow-md">
                        <span className="text-white font-bold text-lg">
                          {service.title.charAt(0)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-[#111111] mb-3 group-hover:text-[#A80000] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[#526669] text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-[#A80000] font-semibold text-sm">
                      View Services <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Vyolwetu / Trust Block */}
      <section className="section-padding bg-[#F7F7F7]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="brand-accent-line" />
                <span className="text-xs font-bold text-[#A80000] uppercase tracking-widest">Our Advantage</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-8">
                What Sets Us Apart
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#A80000] flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#111111] mb-1">Client-Centric Approach</h3>
                    <p className="text-[#526669] text-sm leading-relaxed">
                      We listen to your goals and challenges, collaborating to deliver tailored solutions that deliver measurable value.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#334A4F] flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#111111] mb-1">B-BBEE Compliant</h3>
                    <p className="text-[#526669] text-sm leading-relaxed">
                      Proud Level 1 B-BBEE contributor, driving meaningful transformation and fostering inclusive empowerment.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#2F6F5E] flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#111111] mb-1">Eco-Conscious Services</h3>
                    <p className="text-[#526669] text-sm leading-relaxed">
                      Committed to sustainable practices that protect the environment while delivering exceptional service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card className="bg-white border-[#E8E8E8]">
                <CardContent className="p-8">
                  <h3 className="text-lg font-bold text-[#111111] mb-6">What Our Clients Say</h3>
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className={index === 0 ? 'mb-6 pb-6 border-b border-[#E8E8E8]' : ''}>
                      <p className="text-[#526669] italic leading-relaxed mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                      <p className="text-sm font-semibold text-[#111111]">{testimonial.name}</p>
                      <p className="text-xs text-[#526669] mt-0.5">{testimonial.company}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="brand-accent-line" />
              <span className="text-xs font-bold text-[#A80000] uppercase tracking-widest">Simple Process</span>
              <span className="brand-accent-line" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              How It Works
            </h2>
            <p className="text-[#526669] max-w-2xl mx-auto">
              Simple, transparent process from request to delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#A80000] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="font-bold text-[#111111] mb-2">{step.title}</h3>
                <p className="text-[#526669] text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="section-padding bg-[#F7F7F7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="brand-accent-line" />
              <span className="text-xs font-bold text-[#A80000] uppercase tracking-widest">Our Work</span>
              <span className="brand-accent-line" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              Recent Projects
            </h2>
            <p className="text-[#526669] max-w-2xl mx-auto">
              Real results from real projects across all our service divisions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="card-brand overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Cleaning/Office%20Cleaning.png" 
                  alt="Commercial Building Cleaning" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#111111] mb-1">Commercial Building Cleaning</h3>
                <p className="text-[#526669] text-sm">Johannesburg CBD</p>
              </div>
            </div>
            <div className="card-brand overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Waste%20Management/Vyolwetu%20team.png" 
                  alt="Industrial Waste Management" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#111111] mb-1">Industrial Waste Management</h3>
                <p className="text-[#526669] text-sm">Mpumalanga</p>
              </div>
            </div>
            <div className="card-brand overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Construction/WhatsApp%20Image%202026-02-06%20at%206.02.33%20PM.jpeg" 
                  alt="Site Clearing & Development" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#111111] mb-1">Site Clearing & Development</h3>
                <p className="text-[#526669] text-sm">Gauteng</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link href="/projects">
              <Button variant="outline" className="border-2 border-[#A80000] text-[#A80000] hover:bg-[#F8EAEA] rounded-full px-8">
                View All Projects <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CSI Module */}
      <section className="section-padding bg-white brand-curve-top-left">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="brand-accent-line" />
                <span className="text-xs font-bold text-[#A80000] uppercase tracking-widest">CSI & Community</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
                Making a Real Difference
              </h2>
              <p className="text-[#526669] mb-6 leading-relaxed">
                At Vyolwetu, we believe in making a meaningful difference. 
                Our flagship CSI initiative: <strong className="text-[#A80000]">1000 School Bags Campaign</strong> — 
                providing school bags to learners in need across South Africa.
              </p>
              <Link href="/csi">
                <Button className="bg-[#0B2F33] hover:bg-[#0a252c] text-white rounded-full px-8">
                  Learn About Our Campaign <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative aspect-[3/2] rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/CSI/WhatsApp%20Image%202026-03-02%20at%2012.37.08%20PM.jpeg" 
                  alt="1000 School Bags Campaign" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/2] rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/CSI/WhatsApp%20Image%202026-03-02%20at%2012.27.40%20PM.jpeg" 
                  alt="Community" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/2] rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/CSI/WhatsApp%20Image%202026-03-02%20at%2012.27.38%20PM.jpeg" 
                  alt="Education" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="section-padding bg-[#111111]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="brand-accent-line" />
                <span className="text-xs font-bold text-[#A80000] uppercase tracking-widest">Get Started</span>
                <span className="brand-accent-line" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Request a Quote
              </h2>
              <p className="text-gray-400">
                Fill in your details and we will get back to you within 24 hours.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm mb-2 font-medium">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#1a1a1a] text-white border border-[#333] focus:outline-none focus:border-[#A80000] transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm mb-2 font-medium">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#1a1a1a] text-white border border-[#333] focus:outline-none focus:border-[#A80000] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm mb-2 font-medium">Phone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#1a1a1a] text-white border border-[#333] focus:outline-none focus:border-[#A80000] transition-colors"
                    placeholder="+27 XX XXX XXXX"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm mb-2 font-medium">Service Required *</label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#1a1a1a] text-white border border-[#333] focus:outline-none focus:border-[#A80000] transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="waste_management">Waste Management</option>
                    <option value="cleaning">Professional Cleaning</option>
                    <option value="construction">Construction Support</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-white text-sm mb-2 font-medium">Location</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#1a1a1a] text-white border border-[#333] focus:outline-none focus:border-[#A80000] transition-colors"
                  placeholder="City / Area"
                />
              </div>
              <div>
                <label className="block text-white text-sm mb-2 font-medium">Message</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#1a1a1a] text-white border border-[#333] focus:outline-none focus:border-[#A80000] transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>
              <Button type="submit" className="w-full bg-[#A80000] hover:bg-[#850000] text-white text-base py-5 rounded-full mt-2">
                Submit Quote Request
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}