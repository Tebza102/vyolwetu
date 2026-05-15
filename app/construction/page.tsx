import { Metadata } from 'next'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, ArrowRight, CheckCircle, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Construction Support & Site Services | Vyolwetu',
  description: 'Vyolwetu provides site clearing, post-construction cleaning, rubble removal coordination, and practical support for active project environments.',
}

const services = [
  'Site clearing & preparation',
  'Post-construction cleaning',
  'Rubble removal coordination',
  'Site hygiene management',
  'Project support services',
  'Practical site assistance'
]

const industries = [
  'Commercial developers',
  'Industrial construction',
  'Residential projects',
  'Municipal infrastructure',
  'Property developers',
  'Construction contractors'
]

const processSteps = [
  { title: 'Consultation', description: 'Understanding your project requirements.' },
  { title: 'Planning', description: 'Detailed project plan and timeline.' },
  { title: 'Execution', description: 'Professional site support services.' },
  { title: 'Completion', description: 'Quality assurance and handover.' }
]

export default function ConstructionPage() {
  return (
    <div>
      <section className="relative bg-white overflow-hidden brand-curve-top-left">
        <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="brand-accent-line" />
            <span className="text-xs font-bold text-[#A80000] uppercase tracking-widest">Our Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#111111] mb-4 leading-tight">
            Construction Support<br />& Site Services
          </h1>
          <p className="text-lg text-[#526669] mb-8 max-w-xl">
            Site clearing, post-construction cleaning, rubble removal coordination, and practical support for active project environments.
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
                Support for Every Stage
              </h2>
              <p className="text-[#526669] mb-6 leading-relaxed">
                Vyolwetu delivers practical construction support services with a strong emphasis on 
                safety, quality, and reliable delivery. From site clearing to project completion, 
                we bring expertise and reliability to every project environment.
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
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Construction/WhatsApp%20Image%202026-02-06%20at%206.02.33%20PM.jpeg" 
                  alt="Construction Support" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Construction/WhatsApp%20Image%202026-04-02%20at%2010.32.41%20AM%20(1).jpeg" 
                  alt="Site Clearing" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Construction/WhatsApp%20Image%202026-02-06%20at%206.02.33%20PM.jpeg" 
                  alt="Project Support" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Construction/WhatsApp%20Image%202026-04-02%20at%2010.32.41%20AM%20(1).jpeg" 
                  alt="Site Services" 
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
              Construction support solutions for diverse sectors and project types.
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
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-[#2F6F5E] flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">✓</span>
                </div>
                <h3 className="font-bold text-[#111111] mb-2">Safety First</h3>
                <p className="text-[#526669] text-sm">
                  Strict safety protocols to protect workers and your project.
                </p>
              </CardContent>
            </Card>
            <Card className="border-[#E8E8E8] text-center">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-[#A80000] flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">✓</span>
                </div>
                <h3 className="font-bold text-[#111111] mb-2">Quality Assured</h3>
                <p className="text-[#526669] text-sm">
                  Skilled workforce delivering quality on every project.
                </p>
              </CardContent>
            </Card>
            <Card className="border-[#E8E8E8] text-center">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-[#334A4F] flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">✓</span>
                </div>
                <h3 className="font-bold text-[#111111] mb-2">Reliable Delivery</h3>
                <p className="text-[#526669] text-sm">
                  Committed to completing projects on schedule, every time.
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
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Construction/WhatsApp%20Image%202026-02-06%20at%206.02.33%20PM.jpeg" 
                  alt="Site Development" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#111111] mb-1">Site Development</h3>
                <p className="text-[#526669] text-sm">Gauteng</p>
              </div>
            </div>
            <div className="card-brand overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Construction/WhatsApp%20Image%202026-04-02%20at%2010.32.41%20AM%20(1).jpeg" 
                  alt="Construction Support" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#111111] mb-1">Site Support</h3>
                <p className="text-[#526669] text-sm">Active Project Site</p>
              </div>
            </div>
            <div className="card-brand overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Construction/WhatsApp%20Image%202026-02-06%20at%206.02.33%20PM.jpeg" 
                  alt="Infrastructure" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#111111] mb-1">Infrastructure Support</h3>
                <p className="text-[#526669] text-sm">Municipal Project</p>
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
            Need Construction Support?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Contact us today for a customized construction support solution that meets your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+27797517507">
              <Button className="bg-[#A80000] hover:bg-[#850000] text-white text-base px-8 py-5 rounded-full">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </a>
            <a href="https://wa.me/27797517507?text=Hi%20Vyolwetu,%20I%27d%20like%20to%20inquire%20about%20construction%20support%20services" target="_blank" rel="noopener noreferrer">
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