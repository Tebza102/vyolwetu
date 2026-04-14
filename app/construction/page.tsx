import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Construction Services | Vyolwetu',
  description: 'Construction services, site cleaning, and infrastructure development with safety focus across South Africa.',
}

const services = [
  'Construction services',
  'Site clearing & preparation',
  'Infrastructure development',
  'Post-construction cleaning',
  'Site hygiene management',
  'Housing development',
  'Civil construction',
  'Project management'
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
  { title: 'Execution', description: 'Professional construction services.' },
  { title: 'Completion', description: 'Quality assurance and handover.' }
]

export default function ConstructionPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#020213] text-white py-20 lg:py-32">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80" 
            alt="Construction Services" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Construction Services
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Professional construction services with a focus on safety, quality, 
              and reliable delivery for projects across South Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+27797515707">
                <Button className="bg-[#A70404] hover:bg-[#8E0303] text-white text-lg px-8 py-6">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#2F6F5E] text-lg px-8 py-6">
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
                Vyolwetu delivers professional construction services with a strong emphasis on 
                safety, quality, and timely delivery. From site clearing to housing development, 
                we bring expertise and reliability to every project.
              </p>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center gap-3 text-[#526669]">
                    <CheckCircle className="w-5 h-5 text-[#2F6F5E] flex-shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80" 
                alt="Construction" 
                className="h-40 rounded-lg object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" 
                alt="Housing" 
                className="h-40 rounded-lg object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80" 
                alt="Infrastructure" 
                className="h-40 rounded-lg object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1541976590-713941681591?w=400&q=80" 
                alt="Project" 
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
              Construction solutions for diverse sectors and project types.
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
                <div className="w-12 h-12 rounded-full bg-[#2F6F5E] flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🛡️</span>
                </div>
                <h3 className="font-bold text-[#020213] mb-2">Safety First</h3>
                <p className="text-[#526669] text-sm">
                  Strict safety protocols to protect workers and your project.
                </p>
              </CardContent>
            </Card>
            <Card className="border-[#D7DADB]">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-[#A70404] flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">✓</span>
                </div>
                <h3 className="font-bold text-[#020213] mb-2">Quality Assured</h3>
                <p className="text-[#526669] text-sm">
                  Skilled workforce delivering quality on every project.
                </p>
              </CardContent>
            </Card>
            <Card className="border-[#D7DADB]">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-[#334A4F] flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⏱️</span>
                </div>
                <h3 className="font-bold text-[#020213] mb-2">Timely Delivery</h3>
                <p className="text-[#526669] text-sm">
                  Committed to completing projects on schedule, every time.
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
                <div className="w-12 h-12 rounded-full bg-[#2F6F5E] text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
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
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80" 
                alt="Site Development" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-[#020213] mb-2">Site Development</h3>
                <p className="text-[#526669] text-sm">Gauteng</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" 
                alt="Housing Project" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-[#020213] mb-2">Housing Project</h3>
                <p className="text-[#526669] text-sm">Residential Development</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80" 
                alt="Infrastructure" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-[#020213] mb-2">Infrastructure</h3>
                <p className="text-[#526669] text-sm">Municipal Project</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-[#2F6F5E]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Construction Services?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a customized construction solution that meets your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+27797515707">
              <Button className="bg-[#A70404] hover:bg-[#8E0303] text-white text-lg px-8 py-6">
                <Phone className="w-5 h-5 mr-2" />
                Call Nqobile
              </Button>
            </a>
            <Link href="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#2F6F5E] text-lg px-8 py-6">
                Get a Quote <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}