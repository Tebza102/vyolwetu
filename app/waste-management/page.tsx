import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Waste Management Services | Vyolwetu',
  description: 'Responsible waste collection, recycling, and disposal solutions for businesses and communities across South Africa.',
}

const services = [
  'Commercial waste collection',
  'Industrial waste management',
  'Recycling services',
  'Construction site waste clearance',
  'Responsible disposal solutions',
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
      {/* Hero Section */}
      <section className="relative bg-[#020213] text-white py-20 lg:py-32">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1920&q=80" 
            alt="Waste Management" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Waste Management
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Responsible waste collection, recycling, and disposal solutions 
              for businesses and communities across South Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+27797515707">
                <Button className="bg-[#A70404] hover:bg-[#8E0303] text-white text-lg px-8 py-6">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#020213] text-lg px-8 py-6">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#020213] mb-6">
                What We Do
              </h2>
              <p className="text-[#526669] mb-6">
                Vyolwetu provides comprehensive waste management solutions tailored to meet 
                the unique needs of each client. Our eco-conscious approach ensures responsible 
                handling while maintaining the highest standards of service delivery.
              </p>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center gap-3 text-[#526669]">
                    <CheckCircle className="w-5 h-5 text-[#A70404] flex-shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&q=80" 
                alt="Recycling" 
                className="h-40 rounded-lg object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1616410634325-3c80a010f37e?w=400&q=80" 
                alt="Waste Collection" 
                className="h-40 rounded-lg object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1565019627338-6c1a1c7e2f8d?w=400&q=80" 
                alt="Industrial" 
                className="h-40 rounded-lg object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" 
                alt="Warehousing" 
                className="h-40 rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 lg:py-24 bg-[#F7F8F8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#020213] mb-4">
              Industries We Serve
            </h2>
            <p className="text-[#526669] max-w-2xl mx-auto">
              Tailored waste management solutions for diverse sectors.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center p-4 border-[#D7DADB]">
                <CardContent className="p-0">
                  <p className="font-medium text-[#020213]">{industry}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#020213] mb-4">
              Our Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#A70404] text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="font-bold text-[#020213] mb-2">{step.title}</h3>
                <p className="text-[#526669] text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof / Gallery */}
      <section className="py-16 lg:py-24 bg-[#F7F8F8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#020213] mb-4">
              Our Work
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://hjiihzsrycisbfjvyzjei.supabase.co/storage/v1/object/public/vyolwetu-images/Waste%20Management/Vyolwetu%20team.png" 
                alt="Waste Management Team" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-[#020213] mb-2">Waste Management Team</h3>
                <p className="text-[#526669] text-sm">Professional Team</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://hjiihzsrycisbfjvyzjei.supabase.co/storage/v1/object/public/vyolwetu-images/Waste%20Management/Vyolwetu%20team.png" 
                alt="Commercial Collection" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-[#020213] mb-2">Commercial Collection</h3>
                <p className="text-[#526669] text-sm">Johannesburg</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://hjiihzsrycisbfjvyzjei.supabase.co/storage/v1/object/public/vyolwetu-images/Waste%20Management/Vyolwetu%20team.png" 
                alt="Recycling" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-[#020213] mb-2">Recycling Services</h3>
                <p className="text-[#526669] text-sm">Gauteng</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-[#020213]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Waste Management Services?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a customized waste management solution that meets your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+27797515707">
              <Button className="bg-[#A70404] hover:bg-[#8E0303] text-white text-lg px-8 py-6">
                <Phone className="w-5 h-5 mr-2" />
                Call Nqobile
              </Button>
            </a>
            <Link href="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#020213] text-lg px-8 py-6">
                Get a Quote <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}