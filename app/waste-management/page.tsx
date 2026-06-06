import { Metadata } from 'next'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, ArrowRight, CheckCircle, MessageCircle, Leaf, Truck, Recycle, Building2, Factory, HardHat, MapPin, ClipboardCheck, BarChart3, Shield, Users, Globe, Clock } from 'lucide-react'
import Link from 'next/link'


export const metadata: Metadata = {
  title: 'Vyolwetu Waste Management | Waste Collection, Recycling & Site Clearance',
  description: 'Vyolwetu Waste Management provides responsible waste collection, recycling support, construction site waste clearance, rubble removal coordination, site clearing, waste audit support, and disposal coordination in Gauteng.',
}

const wasteServices = [
  {
    title: 'Responsible Waste Collection',
    description: 'Scheduled or once-off waste collection support for cleaner, better-managed environments.',
    icon: Truck
  },
  {
    title: 'Commercial Waste Collection',
    description: 'Waste management support for offices, retail spaces, hospitality environments, business parks, and commercial facilities.',
    icon: Building2
  },
  {
    title: 'Industrial Waste Management',
    description: 'Site-focused waste handling support for industrial facilities, manufacturing environments, and operational sites.',
    icon: Factory
  },
  {
    title: 'Recycling Support',
    description: 'Support with waste sorting, recyclable material separation, and recycling-focused collection coordination.',
    icon: Recycle
  },
  {
    title: 'Construction Site Waste Clearance',
    description: 'Construction site waste and rubble clearance coordination to help sites remain safer, cleaner, and easier to manage.',
    icon: HardHat
  },
  {
    title: 'Rubble Removal Coordination',
    description: 'Practical coordination of rubble removal for construction, renovation, maintenance, and site-clearing projects.',
    icon: MapPin
  },
  {
    title: 'Site Clearing Support',
    description: 'Clearing support to help prepare sites before work starts or restore order after project activity.',
    icon: Shield
  },
  {
    title: 'Responsible Disposal Coordination',
    description: 'Waste disposal coordination aligned to safe, documented, and responsible site practices.',
    icon: CheckCircle
  },
  {
    title: 'Waste Audit & Consultation',
    description: 'Assessment of site waste needs to recommend practical collection, sorting, recycling, and disposal support.',
    icon: ClipboardCheck
  },
  {
    title: 'Waste Reporting',
    description: 'Where required, reporting support on waste handled, collected, sorted, or recycled.',
    icon: BarChart3
  }
]

const industries = [
  'Commercial buildings',
  'Industrial facilities',
  'Construction sites',
  'Manufacturing plants',
  'Municipalities',
  'Retail and hospitality',
  'Schools and institutions',
  'Property developers',
  'Residential developments',
  'Community facilities',
  'Maintenance and renovation projects'
]

const processSteps = [
  {
    number: '01',
    title: 'Site Assessment',
    description: 'We evaluate your site, waste type, estimated volume, access points, collection needs, and safety considerations.'
  },
  {
    number: '02',
    title: 'Custom Waste Plan',
    description: 'We recommend a practical waste collection, sorting, recycling, site clearing, or disposal coordination approach.'
  },
  {
    number: '03',
    title: 'Scheduling & Implementation',
    description: 'We arrange the agreed waste management support, collection schedule, and site coordination process.'
  },
  {
    number: '04',
    title: 'Responsible Handling',
    description: 'Waste is handled and coordinated according to practical, safe, and responsible site practices.'
  },
  {
    number: '05',
    title: 'Reporting & Follow-Up',
    description: 'Where required, we provide feedback or reporting on waste handled, sorted, recycled, or removed.'
  }
]

const whyChooseUs = [
  {
    title: 'Eco-Conscious Approach',
    description: 'We support practical waste solutions that encourage responsible handling, sorting, and recycling where possible.',
    icon: Leaf,
    color: '#1E8C4A'
  },
  {
    title: 'Site-Focused Service',
    description: 'We understand that every site has different waste volumes, access needs, timing requirements, and operational pressures.',
    icon: MapPin,
    color: '#334A4F'
  },
  {
    title: 'Cleaner, Safer Environments',
    description: 'Our services help reduce clutter, improve site presentation, and support safer movement across facilities and project sites.',
    icon: Shield,
    color: '#2F6F5E'
  },
  {
    title: 'Accountable Coordination',
    description: 'We value clear communication, practical scheduling, and responsible service delivery.',
    icon: Clock,
    color: '#1E8C4A'
  },
  {
    title: 'Ecosystem Support',
    description: 'Through Vyolwetu Cleaning Services and Vyolwetu Construction, clients can access related site readiness, post-construction cleaning, and project support services.',
    icon: Globe,
    color: '#334A4F'
  },
  {
    title: 'Locally Rooted',
    description: 'We are community-aware and committed to service that contributes to cleaner, better-managed environments.',
    icon: Users,
    color: '#2F6F5E'
  }
]

export default function WasteManagementPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#ECFDF5] overflow-hidden">
        <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-10 h-1 bg-[#1E8C4A] rounded-full" />
              <span className="text-xs font-bold text-[#1E8C4A] uppercase tracking-widest">Vyolwetu Waste Management</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] mb-6 leading-tight">
              Responsible Waste Solutions for Cleaner, Safer Sites.
            </h1>
            <p className="text-lg text-[#526669] mb-4 max-w-xl leading-relaxed">
              Vyolwetu Waste Management provides responsible waste collection, recycling support, construction site waste clearance, rubble removal coordination, site clearing, and disposal coordination for better-managed environments.
            </p>
            <p className="text-base text-[#526669] mb-8 max-w-xl">
              From commercial facilities to active construction sites, we help clients reduce clutter, improve site readiness, and manage waste with care and accountability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="bg-[#A80000] hover:bg-[#850000] text-white text-base px-8 py-5 rounded-full">
                  Request a Quote
                </Button>
              </Link>
              <a href="https://wa.me/27797517507?text=Hi%20Vyolwetu,%20I%27d%20like%20to%20inquire%20about%20waste%20management%20services" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#25D366] hover:bg-[#20BD5A] text-white text-base px-8 py-5 rounded-full">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </Button>
              </a>
              <Link href="#services">
                <Button variant="outline" className="border-2 border-[#1E8C4A] text-[#1E8C4A] hover:bg-[#ECFDF5] text-base px-8 py-5 rounded-full">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="brand-dots absolute top-8 right-8 w-40 h-40 opacity-20 pointer-events-none hidden lg:block" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#1E8C4A]/10 rounded-full -mb-32 -mr-20 pointer-events-none hidden lg:block" />
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#1E8C4A]/5 rounded-full -mt-12 -mr-12 pointer-events-none hidden lg:block" />
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-block w-10 h-1 bg-[#1E8C4A] rounded-full" />
              <span className="text-xs font-bold text-[#1E8C4A] uppercase tracking-widest">Our Approach</span>
              <span className="inline-block w-10 h-1 bg-[#1E8C4A] rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6">
              Waste Management With a Passion to Serve
            </h2>
            <p className="text-[#526669] text-lg leading-relaxed mb-6">
              Vyolwetu Waste Management is the waste solutions division of the Vyolwetu brand, created to support clients with practical, responsible, and site-focused waste management services. We help organisations keep their environments cleaner, safer, and better organised through waste collection, recycling support, site clearing, and disposal coordination.
            </p>
            <p className="text-[#526669] leading-relaxed">
              As part of the wider Vyolwetu ecosystem, our waste management services connect naturally with construction and cleaning support. This means clients can move from construction activity to rubble removal, post-construction cleaning, facility readiness, and ongoing waste management through one coordinated service partner.
            </p>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="section-padding bg-[#F7F7F7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-block w-10 h-1 bg-[#1E8C4A] rounded-full" />
              <span className="text-xs font-bold text-[#1E8C4A] uppercase tracking-widest">Integrated Services</span>
              <span className="inline-block w-10 h-1 bg-[#1E8C4A] rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              One Brand. Three Connected Services.
            </h2>
            <p className="text-[#526669] max-w-2xl mx-auto">
              Waste management clears, removes, sorts, and protects the space. Cleaning prepares and maintains the space. Construction builds and improves the space. Together, Vyolwetu delivers cleaner, safer, and better-managed environments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-[#E8E8E8] text-center overflow-hidden">
              <div className="h-1 bg-[#1E8C4A]" />
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-full bg-[#1E8C4A]/10 flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-7 h-7 text-[#1E8C4A]" />
                </div>
                <h3 className="text-lg font-bold text-[#111111] mb-2">Vyolwetu Waste Management</h3>
                <p className="text-[#526669] text-sm leading-relaxed">
                  Waste collection, recycling support, site clearing, rubble removal coordination, waste audits, sorting support, and responsible disposal coordination.
                </p>
              </CardContent>
            </Card>
            <Card className="border-[#E8E8E8] text-center overflow-hidden">
              <div className="h-1 bg-[#0C8CB5]" />
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-full bg-[#0C8CB5]/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-7 h-7 text-[#0C8CB5]" />
                </div>
                <h3 className="text-lg font-bold text-[#111111] mb-2">Vyolwetu Cleaning Services</h3>
                <p className="text-[#526669] text-sm leading-relaxed">
                  Deep cleaning, post-construction cleaning, hygiene support, sanitisation, and facility readiness.
                </p>
              </CardContent>
            </Card>
            <Card className="border-[#E8E8E8] text-center overflow-hidden">
              <div className="h-1 bg-[#A86A00]" />
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-full bg-[#A86A00]/10 flex items-center justify-center mx-auto mb-4">
                  <HardHat className="w-7 h-7 text-[#A86A00]" />
                </div>
                <h3 className="text-lg font-bold text-[#111111] mb-2">Vyolwetu Construction</h3>
                <p className="text-[#526669] text-sm leading-relaxed">
                  Construction management, infrastructure support, plumbing, paving, finishing work, and practical site-support services.
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
              <span className="inline-block w-10 h-1 bg-[#1E8C4A] rounded-full" />
              <span className="text-xs font-bold text-[#1E8C4A] uppercase tracking-widest">What We Offer</span>
              <span className="inline-block w-10 h-1 bg-[#1E8C4A] rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              Our Waste Management Services
            </h2>
            <p className="text-[#526669] max-w-2xl mx-auto">
              Vyolwetu Waste Management supports commercial, industrial, municipal, construction, and community environments with practical waste solutions designed around each client&apos;s site needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {wasteServices.map((service, index) => (
              <Card key={index} className="border-[#E8E8E8] h-full card-brand">
                <CardContent className="p-5">
                  <div className="w-10 h-10 rounded-lg bg-[#1E8C4A]/10 flex items-center justify-center mb-3">
                    <service.icon className="w-5 h-5 text-[#1E8C4A]" />
                  </div>
                  <h3 className="font-bold text-[#111111] mb-2 text-sm">{service.title}</h3>
                  <p className="text-[#526669] text-xs leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Responsible Handling Section */}
      <section className="section-padding bg-[#ECFDF5]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-block w-10 h-1 bg-[#1E8C4A] rounded-full" />
              <span className="text-xs font-bold text-[#1E8C4A] uppercase tracking-widest">Our Commitment</span>
              <span className="inline-block w-10 h-1 bg-[#1E8C4A] rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6">
              Responsible Handling. Cleaner Operational Sites.
            </h2>
            <p className="text-[#526669] text-lg leading-relaxed">
              Waste management is not only about removal. It is about reducing risk, improving site flow, supporting hygiene, and helping clients maintain environments that are easier to work in and easier to manage. Vyolwetu Waste Management focuses on responsible handling, clear coordination, and practical waste solutions that support cleaner operational spaces.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Card className="border-[#E8E8E8] overflow-hidden">
              <div className="h-1 bg-[#1E8C4A]" />
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#1E8C4A]/10 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-[#1E8C4A]" />
                </div>
                <h3 className="font-bold text-[#111111] mb-2">Responsible Handling</h3>
                <p className="text-[#526669] text-sm leading-relaxed">
                  Collection and disposal coordination aligned to safe, documented site practices.
                </p>
              </CardContent>
            </Card>
            <Card className="border-[#E8E8E8] overflow-hidden">
              <div className="h-1 bg-[#2F6F5E]" />
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#2F6F5E]/10 flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-[#2F6F5E]" />
                </div>
                <h3 className="font-bold text-[#111111] mb-2">Cleaner Operational Sites</h3>
                <p className="text-[#526669] text-sm leading-relaxed">
                  Reliable scheduling, sorting support, and site-clearing coordination help reduce clutter and improve readiness.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community & Environment Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block w-10 h-1 bg-[#1E8C4A] rounded-full" />
                <span className="text-xs font-bold text-[#1E8C4A] uppercase tracking-widest">Our Impact</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6">
                Supporting Cleaner Communities and Better Environments
              </h2>
              <p className="text-[#526669] text-lg leading-relaxed mb-4">
                Vyolwetu Waste Management is rooted in the belief that cleaner environments support healthier communities, safer workplaces, and more dignified public and private spaces. Through responsible waste collection, recycling support, construction site clearance, and disposal coordination, we help clients contribute to spaces that are better cared for and better prepared for daily use.
              </p>
              <p className="text-[#526669] leading-relaxed">
                Guided by the group promise, &ldquo;Passion to Serve,&rdquo; we focus on practical waste solutions, responsible handling, clear communication, and dependable service delivery.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative min-h-[200px] aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Waste%20Management/Vyolwetu%20team.png" 
                  alt="Waste management team at work" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative min-h-[200px] aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Waste%20Management/Vyolwetu%20team2.png" 
                  alt="Waste collection services" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-[#F7F7F7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-block w-10 h-1 bg-[#1E8C4A] rounded-full" />
              <span className="text-xs font-bold text-[#1E8C4A] uppercase tracking-widest">Why Vyolwetu</span>
              <span className="inline-block w-10 h-1 bg-[#1E8C4A] rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              Why Choose Vyolwetu Waste Management
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChooseUs.map((item, index) => (
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
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-block w-10 h-1 bg-[#1E8C4A] rounded-full" />
              <span className="text-xs font-bold text-[#1E8C4A] uppercase tracking-widest">How We Work</span>
              <span className="inline-block w-10 h-1 bg-[#1E8C4A] rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              Our Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#1E8C4A] text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
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
      <section className="section-padding bg-[#F7F7F7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-block w-10 h-1 bg-[#1E8C4A] rounded-full" />
              <span className="text-xs font-bold text-[#1E8C4A] uppercase tracking-widest">Who We Serve</span>
              <span className="inline-block w-10 h-1 bg-[#1E8C4A] rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              Industries We Serve
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-block w-10 h-1 bg-[#1E8C4A] rounded-full" />
              <span className="text-xs font-bold text-[#1E8C4A] uppercase tracking-widest">Our Work</span>
              <span className="inline-block w-10 h-1 bg-[#1E8C4A] rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              Project Gallery
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-brand overflow-hidden">
              <div className="relative min-h-[200px] aspect-[4/3]">
                <Image 
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Waste%20Management/Vyolwetu%20team.png" 
                  alt="Waste management team" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#111111] mb-1">Waste Collection Team</h3>
                <p className="text-[#526669] text-sm">Gauteng</p>
              </div>
            </div>
            <div className="card-brand overflow-hidden">
              <div className="relative min-h-[200px] aspect-[4/3]">
                <Image 
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Waste%20Management/Vyolwetu%20team2.png" 
                  alt="Commercial waste collection" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#111111] mb-1">Commercial Collection</h3>
                <p className="text-[#526669] text-sm">Johannesburg</p>
              </div>
            </div>
            <div className="card-brand overflow-hidden">
              <div className="relative min-h-[200px] aspect-[4/3]">
                <Image 
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Waste%20Management/Vyolwetu%20team.png" 
                  alt="Site waste management" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#111111] mb-1">Site Waste Management</h3>
                <p className="text-[#526669] text-sm">Active Project Site</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-[#111111]">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="inline-block w-10 h-1 bg-[#1E8C4A] rounded-full" />
            <span className="text-xs font-bold text-[#1E8C4A] uppercase tracking-widest">Get Started</span>
            <span className="inline-block w-10 h-1 bg-[#1E8C4A] rounded-full" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Reliable Waste Management Support?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Speak to Vyolwetu Waste Management about responsible waste collection, recycling support, construction site waste clearance, rubble removal coordination, site clearing, disposal coordination, or waste audit support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-[#A80000] hover:bg-[#850000] text-white text-base px-8 py-5 rounded-full">
                <ArrowRight className="w-5 h-5 mr-2" />
                Request a Quote
              </Button>
            </Link>
            <a href="https://wa.me/27797517507?text=Hi%20Vyolwetu,%20I%27d%20like%20to%20inquire%20about%20waste%20management%20services" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#25D366] hover:bg-[#20BD5A] text-white text-base px-8 py-5 rounded-full">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </Button>
            </a>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
            <a href="tel:+27797517507" className="flex items-center gap-2 hover:text-[#1E8C4A] transition-colors">
              <Phone className="w-4 h-4" />
              <span>+27 79 751 7507</span>
            </a>
            <span className="hidden sm:inline text-gray-700">|</span>
            <span>55 Maseko Street, Duduza, 1496</span>
            <span className="hidden sm:inline text-gray-700">|</span>
            <a href="mailto:nqobile@vyolwetu.co.za" className="hover:text-[#1E8C4A] transition-colors">
              nqobile@vyolwetu.co.za
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
