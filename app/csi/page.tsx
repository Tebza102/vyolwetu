import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Leaf, Users, Award, Heart, Globe, BookOpen } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'CSI & Community Impact | Vyolwetu',
  description: 'Learn about Vyolwetu corporate social investment initiatives focusing on environmental sustainability, community upliftment, and skills development.',
}

const pillars = [
  {
    title: 'Environment',
    description: 'Promoting sustainable practices and environmental stewardship through responsible waste management and eco-conscious operations.',
    icon: Leaf,
    color: '#2F6F5E',
    initiatives: ['Recycling awareness programs', 'Tree planting initiatives', 'Clean-up campaigns']
  },
  {
    title: 'Community',
    description: 'Supporting local communities through upliftment programs, healthcare support, and social welfare projects.',
    icon: Users,
    color: '#A70404',
    initiatives: ['Community clean-ups', 'Food drives', 'Youth mentorship']
  },
  {
    title: 'Skills Development',
    description: 'Creating employment and skills development opportunities through training and capacity building programs.',
    icon: Award,
    color: '#334A4F',
    initiatives: ['Skills training programs', 'Internship opportunities', 'Entrepreneurship support']
  }
]

const initiatives = [
  {
    title: 'Community Clean-up Campaigns',
    description: 'Regular clean-up drives in underserved communities to improve local environments.',
    pillar: 'Environment',
    icon: Globe
  },
  {
    title: 'Youth Skills Workshop',
    description: 'Providing practical skills training to unemployed youth in our operating areas.',
    pillar: 'Skills',
    icon: BookOpen
  },
  {
    title: 'Local Employment Creation',
    description: 'Creating job opportunities for community members in our service delivery.',
    pillar: 'Community',
    icon: Users
  },
  {
    title: 'Recycling Education',
    description: 'Educating communities about the importance of recycling and proper waste separation.',
    pillar: 'Environment',
    icon: Leaf
  }
]

export default function CSIPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#020213] text-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              CSI & Community Impact
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              At Vyolwetu, we believe in creating meaningful change beyond our core services. 
              Our CSI initiatives focus on environmental sustainability, community upliftment, 
              and skills development.
            </p>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#020213] mb-6">
              Our Commitment
            </h2>
            <p className="text-[#526669] text-lg">
              "We are committed to being a responsible corporate citizen that contributes 
              meaningfully to the development of our communities and the protection of our 
              environment. Through our CSI initiatives, we aim to create lasting positive 
              impact that extends beyond our business operations."
            </p>
            <p className="text-[#020213] font-medium mt-4">- Nqobile, Vyolwetu Founder</p>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-16 lg:py-24 bg-[#F7F8F8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#020213] mb-4">
              Our CSI Pillars
            </h2>
            <p className="text-[#526669] max-w-2xl mx-auto">
              Our corporate social investment is guided by three core pillars that drive our 
              community initiatives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <Card key={pillar.title} className="border-[#D7DADB] overflow-hidden">
                <div 
                  className="h-2" 
                  style={{ backgroundColor: pillar.color }}
                />
                <CardContent className="p-6">
                  <div 
                    className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: pillar.color + '15' }}
                  >
                    <pillar.icon className="w-7 h-7" style={{ color: pillar.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-[#020213] mb-3">{pillar.title}</h3>
                  <p className="text-[#526669] text-sm mb-4">{pillar.description}</p>
                  <ul className="space-y-2">
                    {pillar.initiatives.map((initiative, index) => (
                      <li key={index} className="flex items-center gap-2 text-xs text-[#526669]">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: pillar.color }} />
                        {initiative}
                      </li>
                    ))}
                  </ul>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="border-[#D7DADB]">
                <CardContent className="p-6">
                  <initiative.icon className="w-10 h-10 text-[#2F6F5E] mb-4" />
                  <div className="text-xs font-medium text-[#A70404] mb-2">{initiative.pillar}</div>
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
              <div className="text-4xl font-bold text-[#A70404] mb-2">500+</div>
              <div className="text-gray-300">Community Members Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#2F6F5E] mb-2">50+</div>
              <div className="text-gray-300">Youth Trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#334A4F] mb-2">100+</div>
              <div className="text-gray-300">Clean-up Events</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#A70404] mb-2">20+</div>
              <div className="text-gray-300">Jobs Created</div>
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
                We welcome partnerships with organizations, NGOs, and community groups who share 
                our vision for sustainable development and community upliftment.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-[#526669]">
                  <Heart className="w-5 h-5 text-[#A70404]" />
                  <span>Collaborate on community projects</span>
                </li>
                <li className="flex items-center gap-3 text-[#526669]">
                  <Users className="w-5 h-5 text-[#A70404]" />
                  <span>Sponsor CSI initiatives</span>
                </li>
                <li className="flex items-center gap-3 text-[#526669]">
                  <Award className="w-5 h-5 text-[#A70404]" />
                  <span>Provide skills training support</span>
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
                src="https://hjiihzsrycisbfjvyzjei.supabase.co/storage/v1/object/public/vyolwetu-images/CSI/WhatsApp%20Image%202026-03-02%20at%2012.27.35%20PM.jpeg" 
                alt="CSI Initiative" 
                className="h-40 rounded-lg object-cover w-full"
              />
              <img 
                src="https://hjiihzsrycisbfjvyzjei.supabase.co/storage/v1/object/public/vyolwetu-images/CSI/WhatsApp%20Image%202026-03-02%20at%2012.27.35%20PM.jpeg" 
                alt="Community" 
                className="h-40 rounded-lg object-cover w-full"
              />
              <img 
                src="https://hjiihzsrycisbfjvyzjei.supabase.co/storage/v1/object/public/vyolwetu-images/CSI/WhatsApp%20Image%202026-03-02%20at%2012.27.35%20PM.jpeg" 
                alt="Skills" 
                className="h-40 rounded-lg object-cover w-full"
              />
              <img 
                src="https://hjiihzsrycisbfjvyzjei.supabase.co/storage/v1/object/public/vyolwetu-images/CSI/WhatsApp%20Image%202026-03-02%20at%2012.27.35%20PM.jpeg" 
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