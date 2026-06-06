import { Metadata } from 'next'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, ArrowRight, CheckCircle, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { DivisionBadge } from '@/components/division-badge'

export const metadata: Metadata = {
  title: 'Waste Management Services | Vyolwetu',
  description: 'Vyolwetu provides responsible waste collection, recycling support, site clearing, and disposal coordination for cleaner, better-managed environments.',
}

const services = [
  'Commercial waste collection',
  'Industrial waste management',
  'Recycling support',
  'Construction site waste clearance',
  'Responsible disposal coordination',
  'Waste audit and consultation'
]

const industries = [
  'Commercial buildings',
  'Industrial facilities',
  'Construction sites',
  'Manufacturing plants',
  'Municipalities',
  'Retail and hospitality'
]

const processSteps = [
  { title: 'Site Assessment', description: 'We evaluate your waste management needs.' },
  { title: 'Custom Solution', description: 'Tailored waste management plan designed for you.' },
  { title: 'Implementation', description: 'Scheduled collection and responsible disposal.' },
  { title: 'Reporting', description: 'Detailed reports on waste handled and recycled.' }
]

export default function WasteManagementPage() {
  return (
    <div>
      <section className="relative bg-white overflow-hidden brand-curve-top-left">
        <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="brand-accent-line" />
            <span className="text-xs font-bold text-[#A80000] uppercase tracking-widest">Our Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#111111] mb-4 leading-tight">
            Waste Management
          </h1>
          <p className="text-lg text-[#526669] mb-8 max-w-xl">
            Responsible waste collection, recycling support, site clearing, and disposal coordination for cleaner, better-managed environments.
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="brand-accent-line" />
                <span className="text-xs font-bold text-[#A80000] uppercase tracking-widest">What We Do</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6">
                Waste Solutions That Work
              </h2>
              <p className="text-[#526669] mb-6 leading-relaxed">
                Vyolwetu provides comprehensive waste management solutions tailored to meet 
                the unique needs of each client. Our eco-conscious approach ensures responsible 
                handling while maintaining the highest standards of service delivery.
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
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Waste%20Management/Vyolwetu%20team.png" 
                  alt="Waste Management Team" 
                  fill
                  className="object-cover"
                />
                <DivisionBadge divisionId="waste" />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Waste%20Management/Vyolwetu%20team2.png" 
                  alt="Waste Collection" 
                  fill
                  className="object-cover"
                />
                <DivisionBadge divisionId="waste" />
              </div>
              <div className="rounded-lg border border-[#E8E8E8] bg-white p-4">
                <p className="text-xs font-bold text-[#2F6F5E] uppercase tracking-wide mb-2">Compliance</p>
                <h3 className="text-[#111111] font-semibold mb-2">Responsible Handling</h3>
                <p className="text-[#526669] text-sm">Collection and disposal coordination aligned to safe, documented site practices.</p>
              </div>
              <div className="rounded-lg border border-[#E8E8E8] bg-white p-4">
                <p className="text-xs font-bold text-[#0B2F33] uppercase tracking-wide mb-2">Impact</p>
                <h3 className="text-[#111111] font-semibold mb-2">Cleaner Operational Sites</h3>
                <p className="text-[#526669] text-sm">Reliable scheduling and sorting support reduce clutter and improve day-to-day site readiness.</p>
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
              Tailored waste management solutions for diverse sectors.
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

      <section className="section-padding bg-[#F7F7F7]">
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
          <div className="grid grid-cols-3 gap-6">
            <div className="card-brand overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Waste%20Management/Vyolwetu%20team.png" 
                  alt="Waste Management Team" 
                  fill
                  className="object-cover"
                />
                <DivisionBadge divisionId="waste" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#111111] mb-1">Professional Team</h3>
                <p className="text-[#526669] text-sm">Vyolwetu Waste Team</p>
              </div>
            </div>
            <div className="card-brand overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Waste%20Management/Vyolwetu%20team2.png" 
                  alt="Commercial Collection" 
                  fill
                  className="object-cover"
                />
                <DivisionBadge divisionId="waste" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#111111] mb-1">Commercial Collection</h3>
                <p className="text-[#526669] text-sm">Johannesburg</p>
              </div>
            </div>
            <div className="card-brand overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Waste%20Management/Vyolwetu%20team.png" 
                  alt="Recycling Services" 
                  fill
                  className="object-cover"
                />
                <DivisionBadge divisionId="waste" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#111111] mb-1">Recycling Services</h3>
                <p className="text-[#526669] text-sm">Gauteng</p>
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
            Need Waste Management Services?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Contact us today for a customized waste management solution that meets your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+27797517507">
              <Button className="bg-[#A80000] hover:bg-[#850000] text-white text-base px-8 py-5 rounded-full">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </a>
            <a href="https://wa.me/27797517507?text=Hi%20Vyolwetu,%20I%27d%20like%20to%20inquire%20about%20waste%20management%20services" target="_blank" rel="noopener noreferrer">
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
