'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, ArrowRight, CheckCircle, Leaf, Users, Award } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    title: 'Waste Management',
    description: 'Responsible waste collection, recycling, and disposal solutions for businesses and communities.',
    icon: '♻️',
    href: '/waste-management',
    color: '#A70404',
    image: 'https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Cleaning/MD%20and%20the%20cleaning%20team.PNG'
  },
  {
    title: 'Professional Cleaning',
    description: 'Commercial and industrial cleaning services including sanitization, deep cleaning, and window cleaning.',
    icon: '🧹',
    href: '/cleaning',
    color: '#334A4F',
    image: 'https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Cleaning/Site%20Cleaning.png'
  },
  {
    title: 'Construction',
    description: 'Construction services, site cleaning, and infrastructure development with safety focus.',
    icon: '🏗️',
    href: '/construction',
    color: '#2F6F5E',
    image: 'https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Construction/WhatsApp%20Image%202026-04-02%20at%2010.32.41%20AM%20(1).jpeg'
  }
]

const trustPoints = [
  'Eco-conscious practices',
  '18+ years combined experience',
  'Trusted by leading companies'
]

const processSteps = [
  { number: '01', title: 'Request', description: 'Submit your quote request online or call us directly.' },
  { number: '02', title: 'Assessment', description: 'We visit your site to understand requirements.' },
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
    } catch (error) {
      alert('Something went wrong. Please try again.')
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#020213] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Waste%20Management/Vyolwetu%20team2.png" 
            alt="Vyolwetu Team" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 py-20 lg:py-32 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Vyolwetu – Leading in creating a better environment
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Sustainable Waste Management, Cleaning, and Construction Services
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+27797515707">
                <Button className="bg-[#A70404] hover:bg-[#8E0303] text-white text-lg px-8 py-6">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Nqobile
                </Button>
              </a>
              <Link href="/contact">
                <Button className="bg-white text-[#020213] hover:bg-gray-100 text-lg px-8 py-6">
                  Get a Quote
                </Button>
              </Link>
              <a href="https://wa.me/27797515707" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#25D366] text-white hover:bg-[#20BD5A] text-lg px-8 py-6">
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-[#E6E8E8] py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            {trustPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-2 text-[#526669]">
                <CheckCircle className="w-4 h-4 text-[#A70404]" />
                <span className="font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#020213] mb-4">
              Our Services
            </h2>
            <p className="text-[#526669] max-w-2xl mx-auto">
              Comprehensive solutions across three divisions to meet all your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link key={service.title} href={service.href}>
                <Card className="h-full hover:shadow-lg transition-shadow border-[#D7DADB] group cursor-pointer overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-4"
                      style={{ backgroundColor: service.color + '15' }}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#020213] mb-3 group-hover:text-[#A70404] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[#526669] text-sm mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-[#A70404] font-medium text-sm">
                      View Services <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Vyolwetu / Trust Block */}
      <section className="py-16 lg:py-24 bg-[#F7F8F8]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#020213] mb-6">
                Our Distinct Advantage
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#A70404] flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#020213] mb-2">Client-Centric Approach</h3>
                    <p className="text-[#526669] text-sm">
                      We listen to your goals and challenges, collaborating to deliver tailored solutions that deliver measurable value.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#334A4F] flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#020213] mb-2">B-BBEE Compliant</h3>
                    <p className="text-[#526669] text-sm">
                      Proud Level 1 B-BBEE contributor, driving meaningful transformation and fostering inclusive empowerment.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#2F6F5E] flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#020213] mb-2">Eco-Conscious Services</h3>
                    <p className="text-[#526669] text-sm">
                      Committed to sustainable practices that protect the environment while delivering exceptional service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card className="bg-white border-[#D7DADB]">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-[#020213] mb-6">What Our Clients Say</h3>
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className={index === 0 ? 'mb-6 pb-6 border-b border-[#D7DADB]' : ''}>
                      <p className="text-[#526669] italic mb-4">"{testimonial.quote}"</p>
                      <p className="text-sm font-medium text-[#020213]">{testimonial.name}</p>
                      <p className="text-xs text-[#526669]">{testimonial.company}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#020213] mb-4">
              How It Works
            </h2>
            <p className="text-[#526669] max-w-2xl mx-auto">
              Simple, transparent process from request to delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#A70404] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="font-bold text-[#020213] mb-2">{step.title}</h3>
                <p className="text-[#526669] text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-16 lg:py-24 bg-[#F7F8F8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#020213] mb-4">
              Our Projects
            </h2>
            <p className="text-[#526669] max-w-2xl mx-auto">
              Real results from real projects across all our service divisions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Cleaning/Office%20Cleaning.png" 
                alt="Commercial Building Cleaning" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-[#020213] mb-2">Commercial Building Cleaning</h3>
                <p className="text-[#526669] text-sm">Johannesburg CBD</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Waste%20Management/Vyolwetu%20team.png" 
                alt="Industrial Waste Management" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-[#020213] mb-2">Industrial Waste Management</h3>
                <p className="text-[#526669] text-sm">Mpumalanga</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Construction/WhatsApp%20Image%202026-02-06%20at%206.02.33%20PM.jpeg" 
                alt="Site Clearing & Development" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-[#020213] mb-2">Site Clearing & Development</h3>
                <p className="text-[#526669] text-sm">Gauteng</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link href="/projects">
              <Button variant="outline" className="border-[#A70404] text-[#A70404] hover:bg-[#A70404] hover:text-white">
                View All Projects <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CSI Module */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#020213] mb-4">
                CSI & Community Impact
              </h2>
              <p className="text-[#526669] mb-6">
                At Vyolwetu, we believe in making a meaningful difference. 
                Our flagship CSI initiative: <strong>1000 School Bags Campaign</strong> - 
                providing school bags to learners in need across South Africa.
              </p>
              <Link href="/csi">
                <Button className="bg-[#2F6F5E] hover:bg-[#265A4D] text-white">
                  Learn About Our Campaign <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <img 
                src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/CSI/WhatsApp%20Image%202026-03-02%20at%2012.27.39%20PM.jpeg" 
                alt="School Bags Campaign" 
                className="h-48 rounded-lg object-cover w-full"
              />
              <img 
                src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/CSI/WhatsApp%20Image%202026-03-02%20at%2012.27.40%20PM.jpeg" 
                alt="Community" 
                className="h-48 rounded-lg object-cover w-full"
              />
              <img 
                src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/CSI/WhatsApp%20Image%202026-03-02%20at%2012.27.38%20PM.jpeg" 
                alt="Education" 
                className="h-48 rounded-lg object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 lg:py-24 bg-[#020213]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Get a Quote
              </h2>
              <p className="text-gray-300">
                Fill in your details and we will get back to you within 24 hours.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white text-[#020213] border border-[#D7DADB] focus:outline-none focus:border-[#A70404]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white text-[#020213] border border-[#D7DADB] focus:outline-none focus:border-[#A70404]"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm mb-2">Phone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white text-[#020213] border border-[#D7DADB] focus:outline-none focus:border-[#A70404]"
                    placeholder="071 234 5678"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm mb-2">Service Required *</label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white text-[#020213] border border-[#D7DADB] focus:outline-none focus:border-[#A70404]"
                  >
                    <option value="">Select a service</option>
                    <option value="waste_management">Waste Management</option>
                    <option value="cleaning">Professional Cleaning</option>
                    <option value="construction">Construction</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-white text-sm mb-2">Location</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white text-[#020213] border border-[#D7DADB] focus:outline-none focus:border-[#A70404]"
                  placeholder="City/Area"
                />
              </div>
              <div>
                <label className="block text-white text-sm mb-2">Message</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white text-[#020213] border border-[#D7DADB] focus:outline-none focus:border-[#A70404]"
                  placeholder="Tell us about your requirements..."
                />
              </div>
              <Button type="submit" className="w-full bg-[#A70404] hover:bg-[#8E0303] text-white text-lg py-4">
                Submit Quote Request
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}