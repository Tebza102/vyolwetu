import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Projects | Vyolwetu',
  description: 'View our portfolio of waste management, cleaning, and construction projects across South Africa.',
}

const projects = [
  {
    title: 'Commercial Building Cleaning',
    category: 'Cleaning',
    location: 'Johannesburg CBD',
    description: 'Complete cleaning services for a 20-story commercial building.',
    color: '#334A4F'
  },
  {
    title: 'Industrial Waste Management',
    category: 'Waste Management',
    location: 'Mpumalanga',
    description: 'Responsible waste collection and recycling for manufacturing facility.',
    color: '#A70404'
  },
  {
    title: 'Site Clearing & Development',
    category: 'Construction',
    location: 'Gauteng',
    description: 'Complete site clearing and preparation for new development.',
    color: '#2F6F5E'
  },
  {
    title: 'Office Sanitization Services',
    category: 'Cleaning',
    location: 'Sandton',
    description: 'Regular sanitization and hygiene services for corporate offices.',
    color: '#334A4F'
  },
  {
    title: 'Construction Site Waste Clearance',
    category: 'Waste Management',
    location: 'Pretoria',
    description: 'Efficient waste management and clearing for construction sites.',
    color: '#A70404'
  },
  {
    title: 'Housing Development Project',
    category: 'Construction',
    location: 'Midrand',
    description: 'Residential housing development from foundation to completion.',
    color: '#2F6F5E'
  },
  {
    title: 'Industrial Deep Cleaning',
    category: 'Cleaning',
    location: 'Alberton',
    description: 'Comprehensive deep cleaning of industrial facility and warehouses.',
    color: '#334A4F'
  },
  {
    title: 'Municipal Waste Collection',
    category: 'Waste Management',
    location: 'Ekurhuleni',
    description: 'Scheduled waste collection services for municipal areas.',
    color: '#A70404'
  },
  {
    title: 'Post-Construction Cleaning',
    category: 'Cleaning',
    location: 'Centurion',
    description: 'Complete cleaning and handover services after construction.',
    color: '#334A4F'
  }
]

export default function ProjectsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#020213] text-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Projects
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Real results from real projects. Explore our portfolio across waste management, 
              cleaning, and construction services.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-[#D7DADB]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="outline" className="border-[#A70404] text-[#A70404] hover:bg-[#A70404] hover:text-white">
              All Projects
            </Button>
            <Button variant="outline" className="border-[#D7DADB] text-[#526669] hover:border-[#334A4F] hover:text-[#334A4F]">
              Cleaning
            </Button>
            <Button variant="outline" className="border-[#D7DADB] text-[#526669] hover:border-[#A70404] hover:text-[#A70404]">
              Waste Management
            </Button>
            <Button variant="outline" className="border-[#D7DADB] text-[#526669] hover:border-[#2F6F5E] hover:text-[#2F6F5E]">
              Construction
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24 bg-[#F7F8F8]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Link key={index} href={`/projects/${project.title.toLowerCase().replace(/ /g, '-')}`}>
                <Card className="h-full hover:shadow-lg transition-shadow border-[#D7DADB] group cursor-pointer overflow-hidden">
                  <div 
                    className="h-48 flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}dd)` }}
                  >
                    <span className="text-white text-5xl">
                      {project.category === 'Cleaning' ? '🧹' : project.category === 'Waste Management' ? '♻️' : '🏗️'}
                    </span>
                  </div>
                  <CardContent className="p-4">
                    <div className="text-xs font-medium text-[#A70404] mb-2">{project.category}</div>
                    <h3 className="text-lg font-bold text-[#020213] mb-2 group-hover:text-[#A70404] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[#526669] text-sm mb-2">{project.description}</p>
                    <p className="text-xs text-[#526669]">{project.location}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#020213] mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-[#526669] mb-8 max-w-2xl mx-auto">
            Contact us to discuss how we can help with your next project.
          </p>
          <Link href="/contact">
            <Button className="bg-[#A70404] hover:bg-[#8E0303] text-white text-lg px-8 py-6">
              Get a Quote <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}