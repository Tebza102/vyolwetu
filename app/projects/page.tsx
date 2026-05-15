import { Metadata } from 'next'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Phone, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Projects | Vyolwetu',
  description: 'View our portfolio of waste management, cleaning, and construction support projects across South Africa.',
}

const projects = [
  {
    title: 'Commercial Building Cleaning',
    category: 'Cleaning',
    location: 'Johannesburg CBD',
    description: 'Complete cleaning services for a 20-story commercial building.',
    color: '#334A4F',
    image: 'https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Cleaning/Office%20Cleaning.png'
  },
  {
    title: 'Industrial Waste Management',
    category: 'Waste Management',
    location: 'Mpumalanga',
    description: 'Responsible waste collection and recycling for manufacturing facility.',
    color: '#A80000',
    image: 'https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Waste%20Management/Vyolwetu%20team.png'
  },
  {
    title: 'Site Clearing & Development',
    category: 'Construction',
    location: 'Gauteng',
    description: 'Complete site clearing and preparation for new development.',
    color: '#2F6F5E',
    image: 'https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Construction/WhatsApp%20Image%202026-02-06%20at%206.02.33%20PM.jpeg'
  },
  {
    title: 'Office Sanitization Services',
    category: 'Cleaning',
    location: 'Sandton',
    description: 'Regular sanitization and hygiene services for corporate offices.',
    color: '#334A4F',
    image: 'https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Cleaning/Site%20Cleaning.png'
  },
  {
    title: 'Construction Site Waste Clearance',
    category: 'Waste Management',
    location: 'Pretoria',
    description: 'Efficient waste management and clearing for construction sites.',
    color: '#A80000',
    image: 'https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Waste%20Management/Vyolwetu%20team2.png'
  },
  {
    title: 'Site Support Services',
    category: 'Construction',
    location: 'Midrand',
    description: 'Practical site support and assistance for active project environments.',
    color: '#2F6F5E',
    image: 'https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Construction/WhatsApp%20Image%202026-04-02%20at%2010.32.41%20AM%20(1).jpeg'
  },
  {
    title: 'Industrial Deep Cleaning',
    category: 'Cleaning',
    location: 'Alberton',
    description: 'Comprehensive deep cleaning of industrial facility and warehouses.',
    color: '#334A4F',
    image: 'https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Cleaning/MD%20and%20the%20cleaning%20team.PNG'
  },
  {
    title: 'Municipal Waste Collection',
    category: 'Waste Management',
    location: 'Ekurhuleni',
    description: 'Scheduled waste collection services for municipal areas.',
    color: '#A80000',
    image: 'https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Waste%20Management/Vyolwetu%20team.png'
  },
  {
    title: 'Post-Construction Cleaning',
    category: 'Cleaning',
    location: 'Centurion',
    description: 'Complete cleaning and handover services after construction.',
    color: '#334A4F',
    image: 'https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Cleaning/Office%20Cleaning.png'
  }
]

export default function ProjectsPage() {
  return (
    <div>
      <section className="bg-[#111111] text-white py-16 lg:py-24 brand-curve-top-left">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="brand-accent-line" />
            <span className="text-xs font-bold text-[#A80000] uppercase tracking-widest">Our Work</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Projects
          </h1>
          <p className="text-gray-400 text-lg max-w-xl">
            Real results from real projects. Explore our portfolio across waste management, 
            cleaning, and construction support services.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="brand-accent-line" />
              <span className="text-xs font-bold text-[#A80000] uppercase tracking-widest">Portfolio</span>
              <span className="brand-accent-line" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              Featured Projects
            </h2>
            <p className="text-[#526669] max-w-2xl mx-auto">
              A selection of our work across all service divisions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="border-[#E8E8E8] overflow-hidden">
                <div className="relative h-48">
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: project.color }}>
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="font-bold text-[#111111] mb-1">{project.title}</h3>
                  <p className="text-[#526669] text-sm mb-2">{project.location}</p>
                  <p className="text-[#526669] text-sm">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#111111]">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="brand-accent-line" />
            <span className="text-xs font-bold text-[#A80000] uppercase tracking-widest">Start Your Project</span>
            <span className="brand-accent-line" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can support your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+27797517507">
              <Button className="bg-[#A80000] hover:bg-[#850000] text-white text-base px-8 py-5 rounded-full">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </a>
            <a href="https://wa.me/27797517507?text=Hi%20Vyolwetu,%20I%27d%20like%20to%20discuss%20a%20project" target="_blank" rel="noopener noreferrer">
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