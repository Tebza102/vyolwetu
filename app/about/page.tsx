import { Metadata } from 'next'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Phone, Users, Award, Leaf, Target, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us | Vyolwetu',
  description: 'Vyolwetu provides integrated waste management, professional cleaning, and construction support services for cleaner, safer, and better-managed environments.',
}

const values = [
  {
    title: 'Client-Centric',
    description: 'We listen to your goals and challenges, collaborating to deliver tailored solutions that deliver measurable value.',
    icon: Target,
    color: '#A80000'
  },
  {
    title: 'Quality',
    description: 'Committed to delivering excellence in everything we do, with rigorous quality assurance processes.',
    icon: Award,
    color: '#334A4F'
  },
  {
    title: 'People-First',
    description: 'Prioritizing the safety, well-being, and growth of our employees and the communities we serve.',
    icon: Users,
    color: '#2F6F5E'
  },
  {
    title: 'Sustainability',
    description: 'Committed to eco-conscious practices that protect the environment while delivering exceptional service.',
    icon: Leaf,
    color: '#A80000'
  }
]

export default function AboutPage() {
  return (
    <div>
      <section className="bg-[#111111] text-white py-16 lg:py-24 brand-curve-top-left">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="brand-accent-line" />
            <span className="text-xs font-bold text-[#A80000] uppercase tracking-widest">Our Story</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Vyolwetu
          </h1>
          <p className="text-gray-400 text-lg max-w-xl">
            Clean. Safe. Reliable. Eco-conscious service delivery with real community impact.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="brand-accent-line" />
                <span className="text-xs font-bold text-[#A80000] uppercase tracking-widest">Who We Are</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6">
                Built on Discipline, Care & Service
              </h2>
              <p className="text-[#526669] mb-4 leading-relaxed">
                Vyolwetu is a premier provider of waste management, professional cleaning, and 
                construction support services across South Africa. Founded on the principles of quality, 
                reliability, and community impact, we have grown to become a trusted partner for 
                businesses and communities alike.
              </p>
              <p className="text-[#526669] mb-6 leading-relaxed">
                Our team brings together experience across all three service divisions, 
                enabling us to deliver integrated solutions that meet the diverse needs of our clients. 
                We are proud to be a Level 1 B-BBEE contributor, committed to driving meaningful 
                transformation and inclusive empowerment.
              </p>
              <Link href="/contact">
                <Button className="bg-[#A80000] hover:bg-[#850000] text-white rounded-full px-8">
                  Contact Us <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Cleaning/Office%20Cleaning.png" 
                  alt="Commercial Cleaning" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Waste%20Management/Vyolwetu%20team.png" 
                  alt="Waste Management" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Cleaning/MD%20and%20the%20cleaning%20team.PNG" 
                  alt="Cleaning Team" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Construction/WhatsApp%20Image%202026-02-06%20at%206.02.33%20PM.jpeg" 
                  alt="Construction Support" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F7F7F7]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-[#E8E8E8]">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#111111] mb-4">Our Mission</h3>
                <p className="text-[#526669] leading-relaxed">
                  To deliver exceptional waste management, cleaning, and construction support services 
                  that create safe, clean, and sustainable environments while making a meaningful 
                  positive impact on the communities we serve.
                </p>
              </CardContent>
            </Card>
            <Card className="border-[#E8E8E8]">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#111111] mb-4">Our Vision</h3>
                <p className="text-[#526669] leading-relaxed">
                  To be the leading provider of integrated environmental and construction support services 
                  in South Africa, recognized for quality, reliability, and community impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="brand-accent-line" />
              <span className="text-xs font-bold text-[#A80000] uppercase tracking-widest">Our Values</span>
              <span className="brand-accent-line" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              What We Stand For
            </h2>
            <p className="text-[#526669] max-w-2xl mx-auto">
              These core values guide everything we do at Vyolwetu.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="border-[#E8E8E8] text-center overflow-hidden">
                <div className="h-1" style={{ backgroundColor: value.color }} />
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: value.color }}>
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#111111] mb-2">{value.title}</h3>
                  <p className="text-[#526669] text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F7F7F7]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="brand-accent-line" />
                <span className="text-xs font-bold text-[#A80000] uppercase tracking-widest">Community</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6">
                Community Impact
              </h2>
              <p className="text-[#526669] mb-4 leading-relaxed">
                At Vyolwetu, we believe in creating meaningful change beyond our core services. 
                Our CSI initiatives focus on environmental sustainability, community upliftment, 
                and skills development.
              </p>
              <p className="text-[#526669] mb-6 leading-relaxed">
                We are committed to being a responsible corporate citizen that contributes 
                meaningfully to the development of our communities.
              </p>
              <Link href="/csi">
                <Button className="bg-[#0B2F33] hover:bg-[#0a252c] text-white rounded-full px-8">
                  Learn More About Our CSI <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/CSI/WhatsApp%20Image%202026-03-02%20at%2012.37.08%20PM.jpeg" 
                  alt="Environment" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/CSI/WhatsApp%20Image%202026-03-02%20at%2012.27.40%20PM.jpeg" 
                  alt="Community" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/CSI/WhatsApp%20Image%202026-03-02%20at%2012.27.38%20PM.jpeg" 
                  alt="Education" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/Cleaning/MD%20and%20the%20cleaning%20team.PNG" 
                  alt="Skills" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#111111]">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="brand-accent-line" />
            <span className="text-xs font-bold text-[#A80000] uppercase tracking-widest">Get in Touch</span>
            <span className="brand-accent-line" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can help with your waste management, cleaning, or construction support needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+27797517507">
              <Button className="bg-[#A80000] hover:bg-[#850000] text-white text-base px-8 py-5 rounded-full">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </a>
            <a href="https://wa.me/27797517507?text=Hi%20Vyolwetu,%20I%27d%20like%20to%20inquire%20about%20your%20services" target="_blank" rel="noopener noreferrer">
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