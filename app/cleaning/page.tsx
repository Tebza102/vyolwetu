import { Metadata } from 'next'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, ArrowRight, CheckCircle, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Professional Cleaning Services | Vyolwetu',
  description: 'Vyolwetu delivers commercial and industrial cleaning services that support hygiene, safety, presentation, and facility readiness.',
}

const services = [
  'Office cleaning',
  'Industrial deep cleaning',
  'Sanitization services',
  'Window cleaning',
  'Post-construction cleaning',
  'Site hygiene services',
  'Carpet and floor care',
  'High-level cleaning'
]

const industries = [
  'Offices & commercial buildings',
  'Industrial facilities',
  'Healthcare',
  'Retail',
  'Hospitality',
  'Construction sites'
]

const processSteps = [
  { title: 'Assessment', description: 'Site visit to understand cleaning requirements.' },
  { title: 'Plan', description: 'Customized cleaning plan developed for your needs.' },
  { title: 'Execution', description: 'Professional cleaning with quality assurance.' },
  { title: 'Quality Check', description: 'Final inspection to ensure satisfaction.' }
]

export default function CleaningPage() {
  return (
    <div>
      <section className="relative bg-white overflow-hidden brand-curve-top-left">
        <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="brand-accent-line" />
            <span className="text-xs font-bold text-[#A80000] uppercase tracking-widest">Our Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#111111] mb-4 leading-tight">
            Professional Cleaning
          </h1>
          <p className="text-lg text-[#526669] mb-8 max-w-xl">
            Commercial and industrial cleaning services that support hygiene, safety, presentation, and facility readiness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+27797517507">
              <Button className="bg-[#A80000] hover:bg-[#850000] text-white text-base px-8 py-5 rounded-full">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </a>
            <Link href="/contact">
              <Button variant="outline" className="border-2 border-[#A80000] text-[#A80000] hover:bg-[#F8EAEA] text-base px-8 py-5 rounded-full">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
        <div className="brand-dots absolute top-8 right-8 w-40 h-40 opacity-30 pointer-events-none hidden lg:block" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#F8EAEA] rounded-full -mb-24 -mr-16 opacity-50 pointer-events-none hidden lg:block" />
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="brand-accent-line" />
                <span className="text-xs font-bold text-[#A80000] uppercase tracking-widest">What We Do</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6">
                Cleaning You Can Count On
              </h2>
              <p className="text-[#526669] mb-6 leading-relaxed">
                Vyolwetu delivers high-performance cleaning services tailored to meet the most 
                rigorous standards. Our comprehensive offering includes day-to-day cleaning, 
                scheduled services, and specialized cleaning solutions.
              </p>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center gap-3 text-[#526669]">
                    <CheckCircle className="w-5 h-5 text-[#A80000] flex-shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Cleaning/MD%20and%20the%20cleaning%20team.PNG" 
                  alt="Professional Cleaning Team" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Cleaning/Office%20Cleaning.png" 
                  alt="Office Cleaning" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Cleaning/Office%20Cleaning.png" 
                  alt="Deep Cleaning" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Cleaning/Site%20Cleaning.png" 
                  alt="Site Cleaning" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F7F7F7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="brand-accent-line" />
              <span className="text-xs font-bold text-[#A80000] uppercase tracking-widest">Industries</span>
              <span className="brand-accent-line" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              Industries We Serve
            </h2>
            <p className="text-[#526669] max-w-2xl mx-auto">
              Professional cleaning solutions for diverse sectors.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center p-4 border-[#E8E8E8]">
                <CardContent className="p-0">
                  <p className="font-medium text-[#111111] text-sm">{industry}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="brand-accent-line" />
              <span className="text-xs font-bold text-[#A80000] uppercase tracking-widest">Why Vyolwetu</span>
              <span className="brand-accent-line" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              Why Choose Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-[#E8E8E8] text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#A80000] flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">✓</span>
                </div>
                <h3 className="font-bold text-[#111111] mb-2">Quality Assured</h3>
                <p className="text-[#526669] text-sm">
                  Rigorous quality checks to ensure every cleaning meets our high standards.
                </p>
              </CardContent>
            </Card>
            <Card className="border-[#E8E8E8] text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#334A4F] flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">✓</span>
                </div>
                <h3 className="font-bold text-[#111111] mb-2">Safe & Secure</h3>
                <p className="text-[#526669] text-sm">
                  Trained staff with proper security clearances for your peace of mind.
                </p>
              </CardContent>
            </Card>
            <Card className="border-[#E8E8E8] text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#2F6F5E] flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">✓</span>
                </div>
                <h3 className="font-bold text-[#111111] mb-2">Eco-Friendly</h3>
                <p className="text-[#526669] text-sm">
                  Environmentally responsible cleaning products and methods.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F7F7F7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="brand-accent-line" />
              <span className="text-xs font-bold text-[#A80000] uppercase tracking-widest">Our Process</span>
              <span className="brand-accent-line" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              How It Works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#A80000] text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="font-bold text-[#111111] mb-2">{step.title}</h3>
                <p className="text-[#526669] text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="brand-accent-line" />
              <span className="text-xs font-bold text-[#A80000] uppercase tracking-widest">Gallery</span>
              <span className="brand-accent-line" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              Our Work
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-brand overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Cleaning/MD%20and%20the%20cleaning%20team.PNG" 
                  alt="Cleaning Team" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#111111] mb-1">Professional Cleaning Team</h3>
                <p className="text-[#526669] text-sm">Vyolwetu Team</p>
              </div>
            </div>
            <div className="card-brand overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Cleaning/Office%20Cleaning.png" 
                  alt="Office Cleaning" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#111111] mb-1">Office Cleaning</h3>
                <p className="text-[#526669] text-sm">Johannesburg CBD</p>
              </div>
            </div>
            <div className="card-brand overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Cleaning/Site%20Cleaning.png" 
                  alt="Commercial Cleaning" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#111111] mb-1">Commercial Cleaning</h3>
                <p className="text-[#526669] text-sm">Corporate Buildings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#111111]">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="brand-accent-line" />
            <span className="text-xs font-bold text-[#A80000] uppercase tracking-widest">Ready to Start</span>
            <span className="brand-accent-line" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Professional Cleaning?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Contact us today for a customized cleaning solution that meets your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+27797517507">
              <Button className="bg-[#A80000] hover:bg-[#850000] text-white text-base px-8 py-5 rounded-full">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </a>
            <a href="https://wa.me/27797517507?text=Hi%20Vyolwetu,%20I%27d%20like%20to%20inquire%20about%20cleaning%20services" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#25D366] hover:bg-[#20BD5A] text-white text-base px-8 py-5 rounded-full">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}