import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Leaf, Users, Award, Heart, Globe, BookOpen, Backpack } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'CSI & Community Impact | Vyolwetu',
  description: 'Learn about Vyolwetu corporate social investment initiatives focusing on community upliftment through our school bag campaign.',
}

const pillars = [
  {
    title: 'Community',
    description: 'Supporting local communities through upliftment programs, education support, and social welfare projects.',
    icon: Users,
    color: '#A70404',
    initiatives: ['School bag donations', 'Youth mentorship', 'Community support']
  },
  {
    title: 'Environment',
    description: 'Promoting sustainable practices and environmental stewardship through responsible waste management.',
    icon: Leaf,
    color: '#2F6F5E',
    initiatives: ['Recycling awareness programs', 'Clean-up campaigns', 'Environmental education']
  },
  {
    title: 'Skills Development',
    description: 'Creating employment and skills development opportunities through training programs.',
    icon: Award,
    color: '#334A4F',
    initiatives: ['Skills training programs', 'Internship opportunities', 'Entrepreneurship support']
  }
]

const initiatives = [
  {
    title: '1000 School Bags Campaign',
    description: 'Distributing 1000 school bags to learners in need across South Africa. Every child deserves the tools to succeed in their education journey.',
    pillar: 'Community',
    icon: Backpack
  }
]

export default function CSIPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#020213] text-white py-20 lg:py-32">
        <div className="absolute inset-0">
          <img 
            src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/CSI/WhatsApp%20Image%202026-03-02%20at%2012.27.38%20PM.jpeg" 
            alt="1000 School Bags Campaign" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              CSI & Community Impact
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              At Vyolwetu, we believe in creating meaningful change beyond our core services. 
              Our flagship CSI initiative focuses on education and community upliftment.
            </p>
          </div>
        </div>
      </section>

      {/* Main Campaign */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/CSI/WhatsApp%20Image%202026-03-02%20at%2012.27.38%20PM.jpeg" 
                alt="1000 School Bags Campaign" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <div className="text-xs font-bold text-[#A70404] uppercase tracking-wide mb-2">Our Main Initiative</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#020213] mb-4">
                1000 School Bags Campaign
              </h2>
              <p className="text-[#526669] text-lg mb-6">
                Every child deserves the tools to succeed in their education journey. 
                Vyolwetu has committed to distributing <strong>1000 school bags</strong> to learners 
                in need across South Africa.
              </p>
              <p className="text-[#526669] mb-6">
                This initiative aims to support underprivileged students and help them start the school year 
                with dignity and the essential tools they need for their education.
              </p>
              <div className="flex gap-4">
                <Link href="/contact">
                  <Button className="bg-[#A70404] hover:bg-[#8E0303] text-white">
                    Donate or Partner With Us
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button variant="outline" className="border-[#A70404] text-[#A70404] hover:bg-[#A70404] hover:text-white">
                    View Campaign
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our CSI Pillars */}
      <section className="py-16 lg:py-24 bg-[#F7F8F8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#020213] mb-4">
              Our CSI Pillars
            </h2>
            <p className="text-[#526669] max-w-2xl mx-auto">
              Our corporate social investment is guided by three core pillars that drive our community initiatives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <Card key={pillar.title} className="border-[#D7DADB] overflow-hidden">
                <div className="h-2" style={{ backgroundColor: pillar.color }} />
                <CardContent className="p-6">
                  <div 
                    className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: pillar.color + '15' }}
                  >
                    <pillar.icon className="w-7 h-7" style={{ color: pillar.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-[#020213] mb-3">{pillar.title}</h3>
                  <p className="text-[#526669] text-sm">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Initiatives */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#020213] mb-4">
              Current Initiatives
            </h2>
            <p className="text-[#526669] max-w-2xl mx-auto">
              Active programs making a difference in our communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="border-[#D7DADB]">
                <CardContent className="p-6">
                  <initiative.icon className="w-10 h-10 text-[#A70404] mb-4" />
                  <div className="text-xs font-bold text-[#A70404] mb-2">{initiative.pillar}</div>
                  <h3 className="font-bold text-[#020213] mb-2">{initiative.title}</h3>
                  <p className="text-[#526669] text-sm">{initiative.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 lg:py-24 bg-[#020213] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Impact
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#A70404] mb-2">1000</div>
              <div className="text-gray-300">School Bags Target</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#2F6F5E] mb-2">500+</div>
              <div className="text-gray-300">Learners Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#334A4F] mb-2">10+</div>
              <div className="text-gray-300">Schools Supported</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#A70404] mb-2">3</div>
              <div className="text-gray-300">Provinces Reached</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner / Get Involved */}
      <section className="py-16 lg:py-24 bg-[#F7F8F8]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#020213] mb-6">
                Partner With Us
              </h2>
              <p className="text-[#526669] mb-6">
                We welcome partnerships with organizations, NGOs, schools, and community groups who share 
                our vision for education transformation and community upliftment.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-[#526669]">
                  <Heart className="w-5 h-5 text-[#A70404]" />
                  <span>Sponsor school bags for your community</span>
                </li>
                <li className="flex items-center gap-3 text-[#526669]">
                  <Users className="w-5 h-5 text-[#A70404]" />
                  <span>Partner with us for distribution</span>
                </li>
                <li className="flex items-center gap-3 text-[#526669]">
                  <Award className="w-5 h-5 text-[#A70404]" />
                  <span>Corporate social investment</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button className="bg-[#A70404] hover:bg-[#8E0303] text-white">
                  Get Involved <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/CSI/WhatsApp%20Image%202026-03-02%20at%2012.27.38%20PM.jpeg" 
                alt="School Bags Campaign" 
                className="h-40 rounded-lg object-cover w-full"
              />
              <img 
                src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/CSI/WhatsApp%20Image%202026-03-02%20at%2012.27.38%20PM.jpeg" 
                alt="Community" 
                className="h-40 rounded-lg object-cover w-full"
              />
              <img 
                src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/CSI/WhatsApp%20Image%202026-03-02%20at%2012.27.38%20PM.jpeg" 
                alt="Education" 
                className="h-40 rounded-lg object-cover w-full"
              />
              <img 
                src="https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/vyolwetu-images/CSI/WhatsApp%20Image%202026-03-02%20at%2012.27.38%20PM.jpeg" 
                alt="Partnership" 
                className="h-40 rounded-lg object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}