import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Phone, Users, Award, Leaf, Target } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us | Vyolwetu',
  description: 'Learn about Vyolwetu, a leading waste management, cleaning, and construction company in South Africa.',
}

const values = [
  {
    title: 'Client-Centric',
    description: 'We listen to your goals and challenges, collaborating to deliver tailored solutions that deliver measurable value.',
    icon: Target
  },
  {
    title: 'Quality',
    description: 'Committed to delivering excellence in everything we do, with rigorous quality assurance processes.',
    icon: Award
  },
  {
    title: 'People-First',
    description: 'Prioritizing the safety, well-being, and growth of our employees and the communities we serve.',
    icon: Users
  },
  {
    title: 'Sustainability',
    description: 'Committed to eco-conscious practices that protect the environment while delivering exceptional service.',
    icon: Leaf
  }
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#020213] text-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Vyolwetu
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Clean. Safe. Reliable. Eco-conscious service delivery with real community impact.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#020213] mb-6">
                Who We Are
              </h2>
              <p className="text-[#526669] mb-4">
                Vyolwetu is a premier provider of waste management, professional cleaning, and 
                construction services across South Africa. Founded on the principles of quality, 
                reliability, and community impact, we have grown to become a trusted partner for 
                businesses and communities alike.
              </p>
              <p className="text-[#526669] mb-6">
                Our team brings together decades of experience across all three service divisions, 
                enabling us to deliver integrated solutions that meet the diverse needs of our clients. 
                We are proud to be a Level 1 B-BBEE contributor, committed to driving meaningful 
                transformation and inclusive empowerment.
              </p>
              <Link href="/contact">
                <Button className="bg-[#A70404] hover:bg-[#8E0303] text-white">
                  Contact Us <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80" 
                alt="Commercial" 
                className="h-40 rounded-lg object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&q=80" 
                alt="Waste Management" 
                className="h-40 rounded-lg object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80" 
                alt="Cleaning" 
                className="h-40 rounded-lg object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80" 
                alt="Construction" 
                className="h-40 rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-[#F7F8F8]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-[#D7DADB]">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#020213] mb-4">Our Mission</h3>
                <p className="text-[#526669]">
                  To deliver exceptional waste management, cleaning, and construction services 
                  that create safe, clean, and sustainable environments while making a meaningful 
                  positive impact on the communities we serve.
                </p>
              </CardContent>
            </Card>
            <Card className="border-[#D7DADB]">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#020213] mb-4">Our Vision</h3>
                <p className="text-[#526669]">
                  To be the leading provider of integrated environmental and construction services 
                  in South Africa, recognized for quality, reliability, and community impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#020213] mb-4">
              Our Values
            </h2>
            <p className="text-[#526669] max-w-2xl mx-auto">
              These core values guide everything we do at Vyolwetu.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="border-[#D7DADB] text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-[#A70404] flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#020213] mb-2">{value.title}</h3>
                  <p className="text-[#526669] text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CSI Embedded */}
      <section className="py-16 lg:py-24 bg-[#F7F8F8]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#020213] mb-6">
                Community Impact
              </h2>
              <p className="text-[#526669] mb-6">
                At Vyolwetu, we believe in creating meaningful change beyond our core services. 
                Our CSI initiatives focus on environmental sustainability, community upliftment, 
                and skills development.
              </p>
              <p className="text-[#526669] mb-6">
                We are committed to being a responsible corporate citizen that contributes 
                meaningfully to the development of our communities and the protection of our environment.
              </p>
              <Link href="/csi">
                <Button className="bg-[#2F6F5E] hover:bg-[#265A4D] text-white">
                  Learn More About Our CSI <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&q=80" 
                alt="Environment" 
                className="h-32 rounded-lg object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&q=80" 
                alt="Community" 
                className="h-32 rounded-lg object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80" 
                alt="Skills" 
                className="h-32 rounded-lg object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1531206715517-5c0ba140840e?w=400&q=80" 
                alt="Partnership" 
                className="h-32 rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-[#020213]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can help with your waste management, cleaning, or construction needs.
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