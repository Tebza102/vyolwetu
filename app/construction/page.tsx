import { Metadata } from 'next'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, ArrowRight, CheckCircle, MessageCircle, Shield, Wrench, Users, Leaf, HardHat, ClipboardList, Droplets, Road, Home, Paintbrush, Truck, Sparkles } from 'lucide-react'
import Link from 'next/link'


export const metadata: Metadata = {
  title: 'Vyolwetu Construction | Construction Management, Plumbing, Paving & Site Support',
  description: 'Vyolwetu Construction provides construction management, project planning, meter installations, plumbing, road paving, housing development support, finishing work, site preparation, and post-construction readiness services in Gauteng.',
}

const constructionServices = [
  {
    title: 'Construction Management',
    description: 'Coordinated support for construction activities, timelines, site needs, and delivery requirements.',
    icon: ClipboardList
  },
  {
    title: 'Project Planning',
    description: 'Practical planning support to help clients define scope, sequence work, and prepare for efficient execution.',
    icon: HardHat
  },
  {
    title: 'Meter Installations',
    description: 'Installation support for metering-related project requirements where applicable.',
    icon: Wrench
  },
  {
    title: 'Plumbing Services',
    description: 'Practical plumbing support for developments, maintenance needs, and facility improvements.',
    icon: Droplets
  },
  {
    title: 'Road Paving',
    description: 'Paving support for access roads, property improvements, infrastructure areas, and managed project environments.',
    icon: Road
  },
  {
    title: 'Housing Development Support',
    description: 'Support for housing-related projects, community developments, finishing work, and site readiness.',
    icon: Home
  },
  {
    title: 'Finishing Work',
    description: 'Practical finishing services that help prepare spaces for use, handover, or occupation.',
    icon: Paintbrush
  },
  {
    title: 'Site Clearing & Preparation',
    description: 'Clearing and preparation support to help sites become safer, cleaner, and ready for work.',
    icon: Truck
  },
  {
    title: 'Rubble Removal Coordination',
    description: 'Coordination of rubble and construction waste removal through the wider Vyolwetu waste management capability.',
    icon: Sparkles
  },
  {
    title: 'Post-Construction Readiness',
    description: 'Cleaning and site handover support through the wider Vyolwetu cleaning services division.',
    icon: CheckCircle
  }
]

const industries = [
  'Residential developments',
  'Commercial properties',
  'Industrial sites',
  'Municipal infrastructure',
  'Property developers',
  'Construction contractors',
  'Schools and institutions',
  'Community facilities',
  'Property maintenance clients'
]

const processSteps = [
  { 
    number: '01', 
    title: 'Consultation', 
    description: 'We understand your construction, infrastructure, maintenance, or site-support requirement.' 
  },
  { 
    number: '02', 
    title: 'Site Assessment', 
    description: 'We assess the site, scope, access needs, risks, timing, and related support requirements.' 
  },
  { 
    number: '03', 
    title: 'Planning & Quotation', 
    description: 'We define the work approach, timeline, responsibilities, and quote.' 
  },
  { 
    number: '04', 
    title: 'Execution', 
    description: 'We deliver the agreed construction or support service with practical site coordination.' 
  },
  { 
    number: '05', 
    title: 'Site Readiness & Handover', 
    description: 'Where needed, we coordinate cleaning, rubble removal, and final readiness through the Vyolwetu ecosystem.' 
  }
]

const whyChooseUs = [
  {
    title: 'Safety-Minded Delivery',
    description: 'We approach each site with respect for people, property, and safe working conditions.',
    icon: Shield,
    color: '#A86A00'
  },
  {
    title: 'Practical Workmanship',
    description: 'We focus on construction services that solve real site, facility, and infrastructure needs.',
    icon: Wrench,
    color: '#334A4F'
  },
  {
    title: 'Accountable Communication',
    description: 'We value clear communication, realistic planning, and responsible project handling.',
    icon: ClipboardList,
    color: '#2F6F5E'
  },
  {
    title: 'Ecosystem Support',
    description: 'Through Vyolwetu Cleaning Services and Vyolwetu Waste Management, we can support site readiness before, during, and after construction activity.',
    icon: Leaf,
    color: '#A86A00'
  },
  {
    title: 'Community-Focused',
    description: 'We are locally rooted and committed to work that contributes to cleaner, safer, and stronger environments.',
    icon: Users,
    color: '#334A4F'
  }
]

export default function ConstructionPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#FFF7ED] overflow-hidden brand-curve-top-left">
        <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-10 h-1 bg-[#A86A00] rounded-full" />
              <span className="text-xs font-bold text-[#A86A00] uppercase tracking-widest">Vyolwetu Construction</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] mb-6 leading-tight">
              Building Better Spaces.<br />Serving With Purpose.
            </h1>
            <p className="text-lg text-[#526669] mb-4 max-w-xl leading-relaxed">
              Vyolwetu Construction delivers practical construction management, project planning, infrastructure support, plumbing, road paving, meter installations, finishing work, and site-support services as part of the wider Vyolwetu ecosystem.
            </p>
            <p className="text-base text-[#526669] mb-8 max-w-xl">
              From planning to site readiness, we help clients create safer, cleaner, and more functional environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="bg-[#A80000] hover:bg-[#850000] text-white text-base px-8 py-5 rounded-full">
                  Request a Quote
                </Button>
              </Link>
              <a href="https://wa.me/27797517507?text=Hi%20Vyolwetu,%20I%27d%20like%20to%20inquire%20about%20construction%20services" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#25D366] hover:bg-[#20BD5A] text-white text-base px-8 py-5 rounded-full">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </Button>
              </a>
              <Link href="#services">
                <Button variant="outline" className="border-2 border-[#A86A00] text-[#A86A00] hover:bg-[#FFF7ED] text-base px-8 py-5 rounded-full">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="brand-dots absolute top-8 right-8 w-40 h-40 opacity-20 pointer-events-none hidden lg:block" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#A86A00]/10 rounded-full -mb-32 -mr-20 pointer-events-none hidden lg:block" />
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#A86A00]/5 rounded-full -mt-12 -mr-12 pointer-events-none hidden lg:block" />
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-block w-10 h-1 bg-[#A86A00] rounded-full" />
              <span className="text-xs font-bold text-[#A86A00] uppercase tracking-widest">Our Approach</span>
              <span className="inline-block w-10 h-1 bg-[#A86A00] rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6">
              Construction With a Passion to Serve
            </h2>
            <p className="text-[#526669] text-lg leading-relaxed mb-6">
              Vyolwetu Construction is the construction division of the Vyolwetu brand, built to support clients with practical building, infrastructure, maintenance, and site-support solutions. Our work is grounded in quality workmanship, responsible project handling, and a service-first approach.
            </p>
            <p className="text-[#526669] leading-relaxed">
              As part of the wider Vyolwetu ecosystem, our construction services connect naturally with waste management and cleaning support. This means clients can move from construction activity to site clearing, rubble removal, post-construction cleaning, and ongoing facility readiness through one coordinated service partner.
            </p>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="section-padding bg-[#F7F7F7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-block w-10 h-1 bg-[#A86A00] rounded-full" />
              <span className="text-xs font-bold text-[#A86A00] uppercase tracking-widest">Integrated Services</span>
              <span className="inline-block w-10 h-1 bg-[#A86A00] rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              One Brand. Three Connected Services.
            </h2>
            <p className="text-[#526669] max-w-2xl mx-auto">
              Construction builds the space. Cleaning prepares and maintains the space. Waste management clears and protects the space. Together, Vyolwetu delivers cleaner, safer, and better-managed environments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-[#E8E8E8] text-center overflow-hidden">
              <div className="h-1 bg-[#A86A00]" />
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-full bg-[#A86A00]/10 flex items-center justify-center mx-auto mb-4">
                  <HardHat className="w-7 h-7 text-[#A86A00]" />
                </div>
                <h3 className="text-lg font-bold text-[#111111] mb-2">Vyolwetu Construction</h3>
                <p className="text-[#526669] text-sm leading-relaxed">
                  Building, infrastructure, finishing, maintenance, project planning, and site-support services.
                </p>
              </CardContent>
            </Card>
            <Card className="border-[#E8E8E8] text-center overflow-hidden">
              <div className="h-1 bg-[#0C8CB5]" />
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-full bg-[#0C8CB5]/10 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-7 h-7 text-[#0C8CB5]" />
                </div>
                <h3 className="text-lg font-bold text-[#111111] mb-2">Vyolwetu Cleaning Services</h3>
                <p className="text-[#526669] text-sm leading-relaxed">
                  Post-construction cleaning, facility hygiene, deep cleaning, sanitisation, and workplace readiness.
                </p>
              </CardContent>
            </Card>
            <Card className="border-[#E8E8E8] text-center overflow-hidden">
              <div className="h-1 bg-[#1E8C4A]" />
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-full bg-[#1E8C4A]/10 flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-7 h-7 text-[#1E8C4A]" />
                </div>
                <h3 className="text-lg font-bold text-[#111111] mb-2">Vyolwetu Waste Management</h3>
                <p className="text-[#526669] text-sm leading-relaxed">
                  Waste collection, rubble removal coordination, recycling support, sorting, and responsible disposal.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-block w-10 h-1 bg-[#A86A00] rounded-full" />
              <span className="text-xs font-bold text-[#A86A00] uppercase tracking-widest">What We Offer</span>
              <span className="inline-block w-10 h-1 bg-[#A86A00] rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              Our Construction Services
            </h2>
            <p className="text-[#526669] max-w-2xl mx-auto">
              Vyolwetu Construction supports projects from planning to handover with practical, site-focused services.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {constructionServices.map((service, index) => (
              <Card key={index} className="border-[#E8E8E8] h-full card-brand">
                <CardContent className="p-5">
                  <div className="w-10 h-10 rounded-lg bg-[#A86A00]/10 flex items-center justify-center mb-3">
                    <service.icon className="w-5 h-5 text-[#A86A00]" />
                  </div>
                  <h3 className="font-bold text-[#111111] mb-2 text-sm">{service.title}</h3>
                  <p className="text-[#526669] text-xs leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="section-padding bg-[#FFF7ED]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block w-10 h-1 bg-[#A86A00] rounded-full" />
                <span className="text-xs font-bold text-[#A86A00] uppercase tracking-widest">Our Purpose</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6">
                Building Stronger Communities
              </h2>
              <p className="text-[#526669] text-lg leading-relaxed mb-4">
                At Vyolwetu Construction, building strong communities is at the heart of what we do. From housing development support to essential infrastructure, finishing work, plumbing, paving, and site services, we aim to create durable, functional spaces that support growth, dignity, and a better future for the communities we serve.
              </p>
              <p className="text-[#526669] leading-relaxed">
                We bring discipline, care, and a deep passion to serve into every project — whether it is a small maintenance job or a larger development support engagement.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative min-h-[200px] aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Construction/WhatsApp%20Image%202026-02-06%20at%206.02.33%20PM.jpeg" 
                  alt="Construction site work" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative min-h-[200px] aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Construction/WhatsApp%20Image%202026-04-02%20at%2010.32.41%20AM%20(1).jpeg" 
                  alt="Infrastructure project" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-block w-10 h-1 bg-[#A86A00] rounded-full" />
              <span className="text-xs font-bold text-[#A86A00] uppercase tracking-widest">Why Vyolwetu</span>
              <span className="inline-block w-10 h-1 bg-[#A86A00] rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              Why Choose Vyolwetu Construction
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChooseUs.slice(0, 3).map((item, index) => (
              <Card key={index} className="border-[#E8E8E8] h-full card-brand">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: item.color + '15' }}>
                    <item.icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <h3 className="font-bold text-[#111111] mb-2">{item.title}</h3>
                  <p className="text-[#526669] text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 max-w-2xl mx-auto">
            {whyChooseUs.slice(3).map((item, index) => (
              <Card key={index + 3} className="border-[#E8E8E8] h-full card-brand">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: item.color + '15' }}>
                    <item.icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <h3 className="font-bold text-[#111111] mb-2">{item.title}</h3>
                  <p className="text-[#526669] text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-[#F7F7F7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-block w-10 h-1 bg-[#A86A00] rounded-full" />
              <span className="text-xs font-bold text-[#A86A00] uppercase tracking-widest">How We Work</span>
              <span className="inline-block w-10 h-1 bg-[#A86A00] rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              Our Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#A86A00] text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="font-bold text-[#111111] mb-2">{step.title}</h3>
                <p className="text-[#526669] text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-block w-10 h-1 bg-[#A86A00] rounded-full" />
              <span className="text-xs font-bold text-[#A86A00] uppercase tracking-widest">Who We Serve</span>
              <span className="inline-block w-10 h-1 bg-[#A86A00] rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              Industries We Serve
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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

      {/* Gallery Section */}
      <section className="section-padding bg-[#F7F7F7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-block w-10 h-1 bg-[#A86A00] rounded-full" />
              <span className="text-xs font-bold text-[#A86A00] uppercase tracking-widest">Our Work</span>
              <span className="inline-block w-10 h-1 bg-[#A86A00] rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              Project Gallery
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-brand overflow-hidden">
              <div className="relative min-h-[200px] aspect-[4/3]">
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
              <div className="relative min-h-[200px] aspect-[4/3]">
                <Image 
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Construction/WhatsApp%20Image%202026-04-02%20at%2010.32.41%20AM%20(1).jpeg" 
                  alt="Construction Support" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#111111] mb-1">Infrastructure Support</h3>
                <p className="text-[#526669] text-sm">Active Project Site</p>
              </div>
            </div>
            <div className="card-brand overflow-hidden">
              <div className="relative min-h-[200px] aspect-[4/3]">
                <Image 
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Construction/WhatsApp%20Image%202026-02-06%20at%206.02.33%20PM.jpeg" 
                  alt="Site Preparation" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#111111] mb-1">Site Preparation</h3>
                <p className="text-[#526669] text-sm">Municipal Project</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-[#111111]">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="inline-block w-10 h-1 bg-[#A86A00] rounded-full" />
            <span className="text-xs font-bold text-[#A86A00] uppercase tracking-widest">Get Started</span>
            <span className="inline-block w-10 h-1 bg-[#A86A00] rounded-full" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Reliable Construction or Site Support?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Speak to Vyolwetu Construction about your project planning, infrastructure support, plumbing, paving, finishing work, site preparation, or post-construction readiness needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-[#A80000] hover:bg-[#850000] text-white text-base px-8 py-5 rounded-full">
                <ArrowRight className="w-5 h-5 mr-2" />
                Request a Quote
              </Button>
            </Link>
            <a href="https://wa.me/27797517507?text=Hi%20Vyolwetu,%20I%27d%20like%20to%20inquire%20about%20construction%20services" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#25D366] hover:bg-[#20BD5A] text-white text-base px-8 py-5 rounded-full">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </Button>
            </a>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
            <a href="tel:+27797517507" className="flex items-center gap-2 hover:text-[#A86A00] transition-colors">
              <Phone className="w-4 h-4" />
              <span>+27 79 751 7507</span>
            </a>
            <span className="hidden sm:inline text-gray-700">|</span>
            <span>55 Maseko Street, Duduza, 1496</span>
            <span className="hidden sm:inline text-gray-700">|</span>
            <a href="mailto:nqobile@vyolwetu.co.za" className="hover:text-[#A86A00] transition-colors">
              nqobile@vyolwetu.co.za
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
