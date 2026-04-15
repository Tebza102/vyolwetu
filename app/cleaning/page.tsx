import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Professional Cleaning Services | Vyolwetu',
  description: 'Commercial and industrial cleaning services including sanitization, deep cleaning, and window cleaning across South Africa.',
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
      {/* Hero Section */}
      <section className="relative bg-[#020213] text-white py-20 lg:py-32">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80" 
            alt="Professional Cleaning" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Cleaning
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Comprehensive cleaning and hygiene solutions that create safe, healthy, 
              and welcoming environments for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+27797515707">
                <Button className="bg-[#A70404] hover:bg-[#8E0303] text-white text-lg px-8 py-6">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </a>
              <Link href="/contact">
                <Button className="bg-white text-[#334A4F] hover:bg-gray-100 text-lg px-8 py-6">
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
                Vyolwetu delivers high-performance cleaning services tailored to meet the most 
                rigorous standards. Our comprehensive offering includes day-to-day cleaning, 
                scheduled services, and specialized cleaning solutions.
              </p>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center gap-3 text-[#526669]">
                    <CheckCircle className="w-5 h-5 text-[#334A4F] flex-shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80" 
                alt="Cleaning" 
                className="h-40 rounded-lg object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&q=80" 
                alt="Sanitization" 
                className="h-40 rounded-lg object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1529619768328-e37af76c6fe5?w=400&q=80" 
                alt="Windows" 
                className="h-40 rounded-lg object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80" 
                alt="Office" 
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
              Professional cleaning solutions for diverse sectors.
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

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#020213] mb-4">
              Why Choose Vyolwetu?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-[#D7DADB]">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-[#A70404] flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">✓</span>
                </div>
                <h3 className="font-bold text-[#020213] mb-2">Quality Assured</h3>
                <p className="text-[#526669] text-sm">
                  Rigorous quality checks to ensure every cleaning meets our high standards.
                </p>
              </CardContent>
            </Card>
            <Card className="border-[#D7DADB]">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-[#334A4F] flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🛡️</span>
                </div>
                <h3 className="font-bold text-[#020213] mb-2">Safe & Secure</h3>
                <p className="text-[#526669] text-sm">
                  Trained staff with proper security clearances for your peace of mind.
                </p>
              </CardContent>
            </Card>
            <Card className="border-[#D7DADB]">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-[#2F6F5E] flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🌿</span>
                </div>
                <h3 className="font-bold text-[#020213] mb-2">Eco-Friendly</h3>
                <p className="text-[#526669] text-sm">
                  Environmentally responsible cleaning products and methods.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-[#F7F8F8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#020213] mb-4">
              Our Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#334A4F] text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="font-bold text-[#020213] mb-2">{step.title}</h3>
                <p className="text-[#526669] text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#020213] mb-4">
              Our Work
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Cleaning/MD%20and%20the%20cleaning%20team.PNG" 
                alt="Cleaning Team" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-[#020213] mb-2">Professional Cleaning Team</h3>
                <p className="text-[#526669] text-sm">Vyolwetu Team</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Cleaning/Office%20Cleaning.png" 
                alt="Office Cleaning" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-[#020213] mb-2">Office Cleaning</h3>
                <p className="text-[#526669] text-sm">Johannesburg CBD</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Cleaning/Office%20Cleaning.png" 
                alt="Commercial Cleaning" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-[#020213] mb-2">Commercial Cleaning</h3>
                <p className="text-[#526669] text-sm">Corporate Buildings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-[#334A4F]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Professional Cleaning?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a customized cleaning solution that meets your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+27797515707">
              <Button className="bg-[#A70404] hover:bg-[#8E0303] text-white text-lg px-8 py-6">
                <Phone className="w-5 h-5 mr-2" />
                Call Nqobile
              </Button>
            </a>
            <Link href="/contact">
              <Button className="bg-white text-[#334A4F] hover:bg-gray-100 text-lg px-8 py-6">
                Get a Quote <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}