import { Metadata } from 'next'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Backpack, Heart, Users, Award, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'CSI & Community Impact | Vyolwetu',
  description: 'Vyolwetu 1000 School Bags Campaign - Providing school bags to learners in need across South Africa.',
}

const pillars = [
  {
    title: 'Community',
    description: 'Supporting local communities through education upliftment and social welfare projects.',
    icon: Users,
    color: '#A80000',
  },
  {
    title: 'Environment',
    description: 'Promoting sustainable practices through responsible waste management and environmental education.',
    icon: Award,
    color: '#2F6F5E',
  },
  {
    title: 'Skills',
    description: 'Creating employment and skills development opportunities through training programs.',
    icon: Heart,
    color: '#334A4F',
  }
]

export default function CSIPage() {
  return (
    <div>
      <section className="relative bg-white overflow-hidden brand-curve-top-left">
        <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="brand-accent-line" />
            <span className="text-xs font-bold text-[#A80000] uppercase tracking-widest">CSI & Community</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#111111] mb-4 leading-tight">
            CSI & Community Impact
          </h1>
          <p className="text-lg text-[#526669] max-w-xl">
            At Vyolwetu, we believe in making a meaningful difference in our communities. 
            Our focus: helping learners succeed through education.
          </p>
        </div>
        <div className="brand-dots absolute top-8 right-8 w-40 h-40 opacity-30 pointer-events-none hidden lg:block" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F8EAEA] rounded-full -mb-32 -ml-16 opacity-50 pointer-events-none hidden lg:block" />
      </section>

      <section className="section-padding bg-white brand-curve-bottom-right">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <div className="relative aspect-[3/2] rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/CSI/WhatsApp%20Image%202026-03-02%20at%2012.37.08%20PM.jpeg" 
                alt="1000 School Bags Campaign" 
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="text-xs font-bold text-[#A80000] uppercase tracking-wide mb-2">Our CSI Initiative</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
                1000 School Bags Campaign
              </h2>
              <p className="text-[#526669] text-lg mb-4 leading-relaxed">
                Every child deserves the tools to succeed in their education journey. 
                Vyolwetu has committed to distributing <strong className="text-[#A80000]">1000 school bags</strong> to learners in need across South Africa.
              </p>
              <p className="text-[#526669] mb-6 leading-relaxed">
                This initiative aims to support underprivileged students and help them start the school year 
                with dignity and the essential tools they need for their education.
              </p>
              <Link href="/contact">
                <Button className="bg-[#A80000] hover:bg-[#850000] text-white rounded-full px-8">
                  Partner or Donate
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#111111] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="brand-accent-line" />
              <span className="text-xs font-bold text-[#A80000] uppercase tracking-widest">Our Impact</span>
              <span className="brand-accent-line" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Impact So Far
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#A80000] mb-2">1000</div>
              <div className="text-gray-400">School Bags Target</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#2F6F5E] mb-2">500+</div>
              <div className="text-gray-400">Learners Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#334A4F] mb-2">10+</div>
              <div className="text-gray-400">Schools Supported</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#A80000] mb-2">3</div>
              <div className="text-gray-400">Provinces Reached</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F7F7F7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="brand-accent-line" />
              <span className="text-xs font-bold text-[#A80000] uppercase tracking-widest">Our Values</span>
              <span className="brand-accent-line" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              Our CSI Values
            </h2>
            <p className="text-[#526669] max-w-2xl mx-auto">
              The values that guide our community investment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <Card key={pillar.title} className="border-[#E8E8E8] overflow-hidden">
                <div className="h-1" style={{ backgroundColor: pillar.color }} />
                <CardContent className="p-6 text-center">
                  <div 
                    className="w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: pillar.color + '15' }}
                  >
                    <pillar.icon className="w-7 h-7" style={{ color: pillar.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-[#111111] mb-3">{pillar.title}</h3>
                  <p className="text-[#526669] text-sm">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="brand-accent-line" />
                <span className="text-xs font-bold text-[#A80000] uppercase tracking-widest">Partner With Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6">
                Join Us in Making a Difference
              </h2>
              <p className="text-[#526669] mb-6 leading-relaxed">
                Join us in making a difference. We welcome partnerships with organizations, schools, 
                and community groups who share our vision for education transformation.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-[#526669]">
                  <Backpack className="w-5 h-5 text-[#A80000]" />
                  <span>Sponsor school bags for your community</span>
                </li>
                <li className="flex items-center gap-3 text-[#526669]">
                  <Users className="w-5 h-5 text-[#A80000]" />
                  <span>Partner for distribution</span>
                </li>
                <li className="flex items-center gap-3 text-[#526669]">
                  <Heart className="w-5 h-5 text-[#A80000]" />
                  <span>Corporate social investment</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="bg-[#A80000] hover:bg-[#850000] text-white rounded-full px-8">
                    Get Involved <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <a href="https://wa.me/27797517507?text=Hi%20Vyolwetu,%20I%27d%20like%20to%20partner%20with%20the%201000%20School%20Bags%20Campaign" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full px-8">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/CSI/WhatsApp%20Image%202026-03-02%20at%2012.37.08%20PM.jpeg" 
                  alt="School Bags" 
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
                  src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/CSI/WhatsApp%20Image%202026-03-02%20at%2012.37.08%20PM.jpeg" 
                  alt="Partnership" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}