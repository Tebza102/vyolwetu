import { Metadata } from 'next'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, ArrowRight, CheckCircle, MessageCircle, Building2, Factory, Sparkles, Wind, HardHat, Shield, LayoutGrid, ArrowUp, Calendar, ClipboardCheck, Leaf, MapPin, Globe, Users, Clock } from 'lucide-react'
import Link from 'next/link'
import { DivisionBadge } from '@/components/division-badge'
import { DivisionHeroIcon } from '@/components/division-hero-icon'

export const metadata: Metadata = {
  title: 'Vyolwetu Cleaning Services | Office, Industrial & Post-Construction Cleaning',
  description: 'Vyolwetu Cleaning Services provides office cleaning, industrial deep cleaning, sanitisation, window cleaning, post-construction cleaning, site hygiene services, carpet and floor care, high-level cleaning, and facility readiness support in Gauteng.',
}

const cleaningServices = [
  {
    title: 'Office Cleaning',
    description: 'Daily or scheduled cleaning support for offices and commercial workspaces that need consistent hygiene, presentation, and readiness.',
    icon: Building2
  },
  {
    title: 'Industrial Deep Cleaning',
    description: 'Deep cleaning support for industrial facilities, operational sites, and demanding work environments.',
    icon: Factory
  },
  {
    title: 'Sanitisation Services',
    description: 'Sanitisation support to help improve hygiene standards across workplaces, facilities, and shared environments.',
    icon: Sparkles
  },
  {
    title: 'Window Cleaning',
    description: 'Specialised window cleaning support for offices, commercial properties, and facility presentation needs.',
    icon: Wind
  },
  {
    title: 'Post-Construction Cleaning',
    description: 'Cleaning support after construction, renovation, or maintenance activity to help prepare sites for handover or occupation.',
    icon: HardHat
  },
  {
    title: 'Site Hygiene Services',
    description: 'Site-focused hygiene routines that support safer, cleaner, and better-organised working environments.',
    icon: Shield
  },
  {
    title: 'Carpet and Floor Care',
    description: 'Cleaning and care support for carpets, floors, and high-use surfaces that affect presentation and daily comfort.',
    icon: LayoutGrid
  },
  {
    title: 'High-Level Cleaning',
    description: 'Cleaning support for harder-to-reach areas where suitable access and safety arrangements are in place.',
    icon: ArrowUp
  },
  {
    title: 'Daily Upkeep',
    description: 'Routine cleaning support to help workplaces and facilities remain presentable, hygienic, and ready for use.',
    icon: Calendar
  },
  {
    title: 'Facility Readiness Cleaning',
    description: 'Cleaning support designed to prepare spaces for operations, inspections, handover, visitors, staff, or public use.',
    icon: ClipboardCheck
  }
]

const industries = [
  'Offices and commercial buildings',
  'Industrial facilities',
  'Healthcare environments',
  'Retail spaces',
  'Hospitality environments',
  'Construction sites',
  'Schools and institutions',
  'Municipal and public facilities',
  'Property developers',
  'Residential developments',
  'Community facilities',
  'Maintenance and renovation sites'
]

const processSteps = [
  {
    number: '01',
    title: 'Site Assessment',
    description: 'We assess your space, cleaning needs, hygiene priorities, access points, operating hours, and service frequency.'
  },
  {
    number: '02',
    title: 'Cleaning Plan',
    description: 'We recommend a practical cleaning routine, service schedule, checklist, and quality-control approach.'
  },
  {
    number: '03',
    title: 'Scheduling & Preparation',
    description: 'We align cleaning support with your operations, site requirements, safety needs, and preferred timing.'
  },
  {
    number: '04',
    title: 'Professional Cleaning',
    description: 'Our team delivers the agreed cleaning service with care, practical routines, and attention to hygiene and presentation.'
  },
  {
    number: '05',
    title: 'Quality Check & Follow-Up',
    description: 'Where required, we complete checks, confirm service outcomes, and identify any follow-up cleaning needs.'
  }
]

const whyChooseUs = [
  {
    title: 'Quality Assured',
    description: 'We use practical routines and quality checks to support consistent cleaning standards.',
    icon: CheckCircle,
    color: '#0C8CB5'
  },
  {
    title: 'Safe & Secure',
    description: 'We approach every site with respect for people, property, access control, and client requirements.',
    icon: Shield,
    color: '#334A4F'
  },
  {
    title: 'Eco-Conscious Approach',
    description: 'We support environmentally responsible cleaning practices and methods where applicable.',
    icon: Leaf,
    color: '#2F6F5E'
  },
  {
    title: 'Site-Focused Service',
    description: 'We understand that every office, facility, industrial site, and construction environment has different cleaning needs.',
    icon: MapPin,
    color: '#0C8CB5'
  },
  {
    title: 'Facility Readiness',
    description: 'Our services help spaces remain hygienic, presentable, organised, and ready for use.',
    icon: Building2,
    color: '#334A4F'
  },
  {
    title: 'Ecosystem Support',
    description: 'Through Vyolwetu Waste Management and Vyolwetu Construction, clients can access related waste coordination, site readiness, and project support services.',
    icon: Globe,
    color: '#2F6F5E'
  },
  {
    title: 'Locally Rooted',
    description: 'We are community-aware and committed to service that contributes to cleaner, safer, and better-managed environments.',
    icon: Users,
    color: '#0C8CB5'
  }
]

export default function CleaningPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#F0F9FF] overflow-hidden">
        <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
          <div className="max-w-3xl">
            <DivisionHeroIcon divisionId="cleaning" className="mb-5" />
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-10 h-1 bg-[#0C8CB5] rounded-full" />
              <span className="text-xs font-bold text-[#0C8CB5] uppercase tracking-widest">Vyolwetu Cleaning Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] mb-6 leading-tight">
              Clean, Safe, and Ready for Use.
            </h1>
            <p className="text-lg text-[#526669] mb-4 max-w-xl leading-relaxed">
              Vyolwetu Cleaning Services provides professional office cleaning, industrial deep cleaning, sanitisation, window cleaning, post-construction cleaning, site hygiene services, carpet and floor care, and high-level cleaning for cleaner, safer, and more presentable environments.
            </p>
            <p className="text-base text-[#526669] mb-8 max-w-xl">
              From daily upkeep to specialised cleaning support, we help clients maintain spaces that support productivity, compliance, confidence, and peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="bg-[#A80000] hover:bg-[#850000] text-white text-base px-8 py-5 rounded-full">
                  Request a Quote
                </Button>
              </Link>
              <a href="https://wa.me/27797517507?text=Hi%20Vyolwetu,%20I%27d%20like%20to%20inquire%20about%20cleaning%20services" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#25D366] hover:bg-[#20BD5A] text-white text-base px-8 py-5 rounded-full">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </Button>
              </a>
              <Link href="#services">
                <Button variant="outline" className="border-2 border-[#0C8CB5] text-[#0C8CB5] hover:bg-[#F0F9FF] text-base px-8 py-5 rounded-full">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="brand-dots absolute top-8 right-8 w-40 h-40 opacity-20 pointer-events-none hidden lg:block" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#0C8CB5]/10 rounded-full -mb-32 -mr-20 pointer-events-none hidden lg:block" />
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#0C8CB5]/5 rounded-full -mt-12 -mr-12 pointer-events-none hidden lg:block" />
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-block w-10 h-1 bg-[#0C8CB5] rounded-full" />
              <span className="text-xs font-bold text-[#0C8CB5] uppercase tracking-widest">Our Approach</span>
              <span className="inline-block w-10 h-1 bg-[#0C8CB5] rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6">
              Cleaning Services With a Passion to Serve
            </h2>
            <p className="text-[#526669] text-lg leading-relaxed mb-6">
              Vyolwetu Cleaning Services is the cleaning division of the Vyolwetu brand, created to support clients with practical, professional, and site-focused cleaning solutions. We help offices, industrial facilities, commercial buildings, institutions, and construction sites maintain environments that are hygienic, safe, presentable, and ready for daily use.
            </p>
            <p className="text-[#526669] leading-relaxed">
              As part of the wider Vyolwetu ecosystem, our cleaning services connect naturally with construction and waste management support. This means clients can move from construction activity to waste coordination, post-construction cleaning, facility readiness, and ongoing cleaning support through one coordinated service partner.
            </p>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="section-padding bg-[#F7F7F7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-block w-10 h-1 bg-[#0C8CB5] rounded-full" />
              <span className="text-xs font-bold text-[#0C8CB5] uppercase tracking-widest">Integrated Services</span>
              <span className="inline-block w-10 h-1 bg-[#0C8CB5] rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              One Brand. Three Connected Services.
            </h2>
            <p className="text-[#526669] max-w-2xl mx-auto">
              Cleaning prepares and maintains the space. Waste management clears, removes, sorts, and protects the space. Construction builds and improves the space. Together, Vyolwetu delivers cleaner, safer, and better-managed environments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-[#E8E8E8] text-center overflow-hidden">
              <div className="h-1 bg-[#0C8CB5]" />
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-full bg-[#0C8CB5]/10 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-7 h-7 text-[#0C8CB5]" />
                </div>
                <h3 className="text-lg font-bold text-[#111111] mb-2">Vyolwetu Cleaning Services</h3>
                <p className="text-[#526669] text-sm leading-relaxed">
                  Office cleaning, industrial deep cleaning, sanitisation, window cleaning, post-construction cleaning, site hygiene, carpet and floor care, and facility readiness.
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
                  Waste collection, recycling support, site clearing, rubble removal coordination, waste audits, sorting support, and responsible disposal coordination.
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
              <span className="inline-block w-10 h-1 bg-[#0C8CB5] rounded-full" />
              <span className="text-xs font-bold text-[#0C8CB5] uppercase tracking-widest">What We Offer</span>
              <span className="inline-block w-10 h-1 bg-[#0C8CB5] rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              Our Cleaning Services
            </h2>
            <p className="text-[#526669] max-w-2xl mx-auto">
              Vyolwetu Cleaning Services supports offices, industrial sites, commercial properties, institutions, hospitality environments, retail spaces, and construction sites with practical cleaning solutions designed around each client&apos;s site needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {cleaningServices.map((service, index) => (
              <Card key={index} className="border-[#E8E8E8] h-full card-brand">
                <CardContent className="p-5">
                  <div className="w-10 h-10 rounded-lg bg-[#0C8CB5]/10 flex items-center justify-center mb-3">
                    <service.icon className="w-5 h-5 text-[#0C8CB5]" />
                  </div>
                  <h3 className="font-bold text-[#111111] mb-2 text-sm">{service.title}</h3>
                  <p className="text-[#526669] text-xs leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Checklist Section */}
      <section className="section-padding bg-[#F0F9FF]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-block w-10 h-1 bg-[#0C8CB5] rounded-full" />
              <span className="text-xs font-bold text-[#0C8CB5] uppercase tracking-widest">Our Commitment</span>
              <span className="inline-block w-10 h-1 bg-[#0C8CB5] rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6">
              Quality Checks. Cleaner Working Environments.
            </h2>
            <p className="text-[#526669] text-lg leading-relaxed">
              Professional cleaning is not only about appearance. It is about hygiene, safety, presentation, and confidence. Vyolwetu Cleaning Services uses clear routines, practical checklists, and quality checks to help clients maintain spaces that are easier to manage and ready for daily operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Card className="border-[#E8E8E8] overflow-hidden">
              <div className="h-1 bg-[#0C8CB5]" />
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#0C8CB5]/10 flex items-center justify-center mb-4">
                  <ClipboardCheck className="w-6 h-6 text-[#0C8CB5]" />
                </div>
                <h3 className="font-bold text-[#111111] mb-2">Verified Checklist</h3>
                <p className="text-[#526669] text-sm leading-relaxed">
                  Cleaning routines can follow signed checklists to support hygiene, safety, presentation, and accountability.
                </p>
              </CardContent>
            </Card>
            <Card className="border-[#E8E8E8] overflow-hidden">
              <div className="h-1 bg-[#2F6F5E]" />
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#2F6F5E]/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-[#2F6F5E]" />
                </div>
                <h3 className="font-bold text-[#111111] mb-2">Faster Site Readiness</h3>
                <p className="text-[#526669] text-sm leading-relaxed">
                  Focused cleaning routines help offices, facilities, and sites become ready for daily operations, inspections, handover, or client use.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community & Workplace Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block w-10 h-1 bg-[#0C8CB5] rounded-full" />
                <span className="text-xs font-bold text-[#0C8CB5] uppercase tracking-widest">Our Impact</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6">
                Supporting Cleaner Workplaces and Safer Communities
              </h2>
              <p className="text-[#526669] text-lg leading-relaxed mb-4">
                Vyolwetu Cleaning Services is rooted in the belief that clean spaces support healthier workplaces, safer facilities, and more dignified environments. Through professional cleaning, sanitisation, deep cleaning, post-construction cleaning, and site hygiene support, we help clients create spaces that are better cared for and more ready for people to use.
              </p>
              <p className="text-[#526669] leading-relaxed">
                Guided by the group promise, &ldquo;Passion to Serve,&rdquo; we focus on reliable cleaning routines, quality checks, site hygiene, facility readiness, and service delivery that gives clients confidence and peace of mind.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Cleaning/MD%20and%20the%20cleaning%20team.PNG" 
                  alt="Professional cleaning team" 
                  fill
                  className="object-cover"
                />
                <DivisionBadge divisionId="cleaning" />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Cleaning/Site%20Cleaning.png" 
                  alt="Site cleaning services" 
                  fill
                  className="object-cover"
                />
                <DivisionBadge divisionId="cleaning" />
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
              <span className="inline-block w-10 h-1 bg-[#0C8CB5] rounded-full" />
              <span className="text-xs font-bold text-[#0C8CB5] uppercase tracking-widest">Why Vyolwetu</span>
              <span className="inline-block w-10 h-1 bg-[#0C8CB5] rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              Why Choose Vyolwetu Cleaning Services
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
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
              <span className="inline-block w-10 h-1 bg-[#0C8CB5] rounded-full" />
              <span className="text-xs font-bold text-[#0C8CB5] uppercase tracking-widest">How We Work</span>
              <span className="inline-block w-10 h-1 bg-[#0C8CB5] rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              Our Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#0C8CB5] text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
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
              <span className="inline-block w-10 h-1 bg-[#0C8CB5] rounded-full" />
              <span className="text-xs font-bold text-[#0C8CB5] uppercase tracking-widest">Who We Serve</span>
              <span className="inline-block w-10 h-1 bg-[#0C8CB5] rounded-full" />
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
              <span className="inline-block w-10 h-1 bg-[#0C8CB5] rounded-full" />
              <span className="text-xs font-bold text-[#0C8CB5] uppercase tracking-widest">Our Work</span>
              <span className="inline-block w-10 h-1 bg-[#0C8CB5] rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              Project Gallery
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-brand overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Cleaning/MD%20and%20the%20cleaning%20team.PNG" 
                  alt="Professional cleaning team" 
                  fill
                  className="object-cover"
                />
                <DivisionBadge divisionId="cleaning" />
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
                  alt="Office cleaning services" 
                  fill
                  className="object-cover"
                />
                <DivisionBadge divisionId="cleaning" />
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
                  alt="Site cleaning services" 
                  fill
                  className="object-cover"
                />
                <DivisionBadge divisionId="cleaning" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#111111] mb-1">Site Cleaning</h3>
                <p className="text-[#526669] text-sm">Commercial Buildings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-[#111111]">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="inline-block w-10 h-1 bg-[#0C8CB5] rounded-full" />
            <span className="text-xs font-bold text-[#0C8CB5] uppercase tracking-widest">Get Started</span>
            <span className="inline-block w-10 h-1 bg-[#0C8CB5] rounded-full" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Professional Cleaning Support?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Speak to Vyolwetu Cleaning Services about office cleaning, industrial deep cleaning, sanitisation, window cleaning, post-construction cleaning, site hygiene services, carpet and floor care, high-level cleaning, or facility readiness support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-[#A80000] hover:bg-[#850000] text-white text-base px-8 py-5 rounded-full">
                <ArrowRight className="w-5 h-5 mr-2" />
                Request a Quote
              </Button>
            </Link>
            <a href="https://wa.me/27797517507?text=Hi%20Vyolwetu,%20I%27d%20like%20to%20inquire%20about%20cleaning%20services" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#25D366] hover:bg-[#20BD5A] text-white text-base px-8 py-5 rounded-full">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </Button>
            </a>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
            <a href="tel:+27797517507" className="flex items-center gap-2 hover:text-[#0C8CB5] transition-colors">
              <Phone className="w-4 h-4" />
              <span>+27 79 751 7507</span>
            </a>
            <span className="hidden sm:inline text-gray-700">|</span>
            <span>55 Maseko Street, Duduza, 1496</span>
            <span className="hidden sm:inline text-gray-700">|</span>
            <a href="mailto:nqobile@vyolwetu.co.za" className="hover:text-[#0C8CB5] transition-colors">
              nqobile@vyolwetu.co.za
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
