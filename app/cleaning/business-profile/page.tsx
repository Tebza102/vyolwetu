import type { Metadata } from 'next'
import Image from 'next/image'
import {
  ArrowRight,
  Building2,
  CalendarCheck,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  GraduationCap,
  HandHeart,
  HardHat,
  Home,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'
import { ProfileDownloadButtons } from '@/components/print-profile-button'

export const metadata: Metadata = {
  title: 'Cleaning Division Business Profile | Vyolwetu',
  description:
    'Explore Vyolwetu Cleaning Services and request a tailored cleaning quotation for your home, workplace, facility, or organisation.',
}

const quoteHref = '/cleaning#cleaning-quote'
const whatsappHref =
  'https://wa.me/27797517507?text=Hello%20Vyolwetu%2C%20I%20would%20like%20to%20enquire%20about%20your%20cleaning%20services.'
const emailHref =
  'mailto:info@vyolwetu.co.za?subject=Cleaning%20Services%20Enquiry'

const services = [
  ['Office Cleaning', 'Scheduled support for offices and commercial workspaces.', Building2],
  ['Industrial Deep Cleaning', 'Focused cleaning for industrial and operational environments.', Factory],
  ['Sanitisation Services', 'Hygiene support for workplaces, facilities, and shared spaces.', Sparkles],
  ['Window Cleaning', 'Professional support for clear, presentable windows.', CheckCircle2],
  ['Post-Construction Cleaning', 'Site preparation after building, renovation, or maintenance work.', HardHat],
  ['Carpet & Floor Care', 'Care for floors, carpets, and high-use surfaces.', ShieldCheck],
  ['Site Hygiene Services', 'Practical routines for cleaner and safer working environments.', ClipboardCheck],
  ['Daily & Recurring Upkeep', 'Flexible cleaning arrangements to maintain everyday readiness.', CalendarCheck],
] as const

const sectors = [
  ['Homeowners & Residential Developments', Home],
  ['Offices & Small Businesses', Building2],
  ['Schools & Institutions', GraduationCap],
  ['Churches, NPOs & Community Facilities', HandHeart],
  ['Industrial & Commercial Premises', Factory],
  ['Construction & Renovation Sites', HardHat],
] as const

const approach = [
  ['01', 'Enquiry', 'Tell us about the space, cleaning need, location, and preferred timing.'],
  ['02', 'Requirements Review', 'We review the site, access, hygiene priorities, and service frequency.'],
  ['03', 'Quotation', 'You receive a practical quotation aligned with the agreed requirements.'],
  ['04', 'Service Delivery', 'The cleaning service is scheduled and delivered with care and attention to detail.'],
] as const

const reasons = [
  'Reliable service communication',
  'Practical, site-focused cleaning solutions',
  'Professional presentation and respectful service',
  'Responsive enquiry handling',
  'Once-off and recurring arrangements',
  'Attention to hygiene, safety, and readiness',
]

function PageShell({
  number,
  eyebrow,
  title,
  children,
  dark = false,
}: {
  number: string
  eyebrow: string
  title: string
  children: React.ReactNode
  dark?: boolean
}) {
  return (
    <section
      className={`profile-page relative isolate mx-auto flex min-h-[297mm] w-full max-w-[210mm] flex-col overflow-hidden px-7 py-8 sm:px-12 sm:py-11 ${
        dark ? 'bg-[#102D32] text-white' : 'bg-white text-[#111111]'
      }`}
    >
      <div className="absolute -right-20 -top-20 -z-10 size-72 rounded-full border-[42px] border-[#0C8CB5]/10" />
      <header className="mb-9 flex items-start justify-between gap-4 border-b border-current/10 pb-5">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#0C8CB5]">
            {eyebrow}
          </p>
          <h2 className="mt-2 max-w-xl text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
        </div>
        <span className="text-sm font-bold tabular-nums text-current/45">{number} / 07</span>
      </header>
      <div className="flex flex-1 flex-col">{children}</div>
      <footer className="mt-8 flex items-end justify-between gap-4 border-t border-current/10 pt-4 text-[10px] uppercase tracking-[0.18em] text-current/55">
        <span>Vyolwetu Cleaning Services</span>
        <span>Passion to Serve</span>
      </footer>
    </section>
  )
}

export default function CleaningBusinessProfilePage() {
  return (
    <div className="profile-root bg-[#E8EEF0] py-6 sm:py-10">
      <div className="no-print sticky top-4 z-50 mx-auto mb-5 flex max-w-[210mm] justify-end px-4">
        <ProfileDownloadButtons />
      </div>

      <main className="profile-document space-y-6 print:space-y-0">
        <section className="profile-page relative isolate mx-auto flex min-h-[297mm] w-full max-w-[210mm] flex-col overflow-hidden bg-[#102D32] text-white">
          <Image
            src="/images/cleaning-team.webp"
            alt="Vyolwetu cleaning team delivering professional cleaning services"
            fill
            priority
            sizes="(max-width: 794px) 100vw, 794px"
            className="-z-20 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#102D32]/85 via-[#102D32]/78 to-[#102D32]" />
          <div className="absolute -right-24 top-24 size-80 rounded-full border-[46px] border-[#0C8CB5]/25" />
          <div className="flex flex-1 flex-col px-7 py-8 sm:px-12 sm:py-11">
            <div className="flex items-start justify-between">
              <Image
                src="/VyolwetuLogo.png"
                alt="Vyolwetu"
                width={210}
                height={93}
                className="h-auto w-36 brightness-0 invert sm:w-44"
              />
              <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em]">
                Cleaning Division
              </span>
            </div>
            <div className="my-auto max-w-2xl py-14">
              <span className="mb-6 block h-1 w-14 rounded-full bg-[#0C8CB5]" />
              <h1 className="text-4xl font-bold leading-[1.05] sm:text-6xl">
                Professional Cleaning Services for Better-Managed Spaces
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
                Dependable cleaning solutions designed to help clients maintain clean, safe,
                hygienic, and presentable environments.
              </p>
              <p className="mt-8 text-sm font-bold uppercase tracking-[0.22em] text-[#7DD3FC]">
                Passion to Serve
              </p>
            </div>
            <div className="profile-cta-group grid gap-3 sm:grid-cols-2">
              <a href={quoteHref} className="profile-cta profile-cta-primary">
                Book a Cleaning Appointment <ArrowRight aria-hidden="true" className="size-4 shrink-0" />
              </a>
              <a href={quoteHref} className="profile-cta profile-cta-light-outline">
                Request a Cleaning Quote <ArrowRight aria-hidden="true" className="size-4 shrink-0" />
              </a>
            </div>
          </div>
        </section>

        <PageShell number="02" eyebrow="Company Overview" title="Cleaning with purpose, care, and practical attention.">
          <div className="grid flex-1 content-center gap-10 sm:grid-cols-[1.15fr_0.85fr] sm:items-center">
            <div>
              <p className="text-xl font-semibold leading-8 text-[#102D32]">
                Vyolwetu Cleaning Services is the cleaning division of Vyolwetu, supporting clients
                with professional, site-focused cleaning solutions.
              </p>
              <p className="mt-6 leading-7 text-[#526669]">
                We help offices, industrial facilities, commercial buildings, institutions,
                construction sites, and residential developments maintain environments that are
                hygienic, safe, presentable, and ready for use.
              </p>
              <p className="mt-5 leading-7 text-[#526669]">
                Our service approach is built on clear communication, practical planning,
                attention to detail, and a genuine passion to serve.
              </p>
            </div>
            <div className="rounded-3xl bg-[#F0F9FF] p-7">
              <Image
                src="/divisions/logo-cleaning.png"
                alt="Vyolwetu Cleaning Services division logo"
                width={1991}
                height={1493}
                className="mx-auto h-auto w-full max-w-64 object-contain"
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {['Clean environments', 'Safe routines', 'Presentable spaces'].map((item) => (
              <div key={item} className="rounded-2xl border border-[#D7E8EE] p-5">
                <CheckCircle2 aria-hidden="true" className="mb-3 size-6 text-[#0C8CB5]" />
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </PageShell>

        <PageShell number="03" eyebrow="Core Services" title="Flexible cleaning support for everyday and specialised needs.">
          <p className="max-w-2xl leading-7 text-[#526669]">
            Services are scoped around the facility, cleaning requirements, access, timing, and
            preferred service frequency.
          </p>
          <div className="mt-8 grid flex-1 auto-rows-fr gap-4 sm:grid-cols-2">
            {services.map(([title, description, Icon]) => (
              <article key={title} className="rounded-2xl border border-[#D7E8EE] p-5">
                <Icon aria-hidden="true" className="size-6 text-[#0C8CB5]" />
                <h3 className="mt-3 font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#526669]">{description}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 rounded-2xl bg-[#102D32] px-5 py-4 text-sm text-white">
            Available for once-off projects and recurring cleaning arrangements, subject to an
            assessment of your requirements.
          </p>
        </PageShell>

        <PageShell number="04" eyebrow="Who We Serve" title="Cleaning solutions shaped around the people and spaces you manage.">
          <div className="grid flex-1 content-center gap-5 sm:grid-cols-2">
            {sectors.map(([title, Icon]) => (
              <article key={title} className="flex min-h-28 items-center gap-5 rounded-2xl bg-[#F7F7F7] p-6">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#0C8CB5]/10">
                  <Icon aria-hidden="true" className="size-6 text-[#0C8CB5]" />
                </span>
                <h3 className="font-bold leading-6">{title}</h3>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-3xl bg-[#102D32] p-7 text-white">
            <p className="text-lg font-semibold">
              From a once-off deep clean to a recurring facility routine, we begin by understanding
              what the space needs to remain clean, safe, and ready for use.
            </p>
          </div>
        </PageShell>

        <PageShell number="05" eyebrow="Our Approach" title="A clear journey from enquiry to cleaning service delivery.">
          <div className="flex flex-1 flex-col justify-center">
            <ol className="space-y-4">
              {approach.map(([number, title, description]) => (
                <li key={number} className="grid grid-cols-[3.5rem_1fr] gap-5 rounded-2xl border border-[#D7E8EE] p-5">
                  <span className="flex size-12 items-center justify-center rounded-full bg-[#0C8CB5] text-sm font-bold text-white">
                    {number}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-[#526669]">{description}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex items-start gap-4 rounded-2xl bg-[#F0F9FF] p-6">
              <ClipboardCheck aria-hidden="true" className="mt-1 size-6 shrink-0 text-[#0C8CB5]" />
              <p className="leading-7 text-[#334A4F]">
                The online enquiry form captures Cleaning-specific details so our team can review
                your requirements and prepare the next step efficiently.
              </p>
            </div>
          </div>
        </PageShell>

        <PageShell number="06" eyebrow="Why Vyolwetu Cleaning" title="Reliable support for spaces that need to work well and look ready.">
          <div className="grid flex-1 content-center gap-8 sm:grid-cols-[1fr_0.85fr] sm:items-center">
            <div className="space-y-3">
              {reasons.map((reason) => (
                <div key={reason} className="flex items-center gap-4 rounded-2xl border border-[#D7E8EE] px-5 py-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#0C8CB5]">
                    <Check aria-hidden="true" className="size-4 text-white" />
                  </span>
                  <p className="font-semibold">{reason}</p>
                </div>
              ))}
            </div>
            <div className="rounded-3xl bg-[#102D32] p-8 text-white">
              <ShieldCheck aria-hidden="true" className="size-10 text-[#7DD3FC]" />
              <h3 className="mt-6 text-2xl font-bold">Quality, safety, and professionalism</h3>
              <p className="mt-4 leading-7 text-white/75">
                We approach each environment with respect for people, property, access
                requirements, hygiene priorities, and the agreed scope of work.
              </p>
              <div className="mt-8 border-l-2 border-[#0C8CB5] pl-5">
                <p className="text-lg font-semibold">Passion to Serve</p>
                <p className="mt-1 text-sm text-white/65">The promise behind every Vyolwetu division.</p>
              </div>
            </div>
          </div>
        </PageShell>

        <PageShell number="07" eyebrow="Start a Conversation" title="Tell us what you need cleaned. We will help you plan the next step." dark>
          <div className="flex flex-1 flex-col justify-center">
            <p className="max-w-2xl text-lg leading-8 text-white/75">
              Share your property type, location, service frequency, preferred date, and any
              special requirements through our Cleaning enquiry form.
            </p>
            <div className="profile-cta-group mt-10 grid gap-4 sm:grid-cols-2">
              <a href={quoteHref} className="profile-cta profile-cta-primary min-h-14">
                <CalendarCheck aria-hidden="true" className="size-5" />
                Book a Cleaning Appointment
              </a>
              <a href={quoteHref} className="profile-cta profile-cta-light-outline min-h-14">
                <ClipboardCheck aria-hidden="true" className="size-5" />
                Request a Cleaning Quote
              </a>
              <a href={whatsappHref} className="profile-cta profile-cta-whatsapp min-h-14">
                <MessageCircle aria-hidden="true" className="size-5" />
                Send WhatsApp Message
              </a>
              <a href={emailHref} className="profile-cta profile-cta-light-outline min-h-14">
                <Mail aria-hidden="true" className="size-5" />
                Send Email
              </a>
            </div>
            <div className="mt-12 grid gap-5 rounded-3xl bg-white/8 p-7 sm:grid-cols-2">
              <a href="tel:+27797517507" className="flex items-center gap-3 text-sm text-white/80">
                <Phone aria-hidden="true" className="size-5 text-[#7DD3FC]" /> +27 79 751 7507
              </a>
              <a href={emailHref} className="flex items-center gap-3 text-sm text-white/80">
                <Mail aria-hidden="true" className="size-5 text-[#7DD3FC]" /> info@vyolwetu.co.za
              </a>
              <p className="flex items-center gap-3 text-sm text-white/80 sm:col-span-2">
                <MapPin aria-hidden="true" className="size-5 text-[#7DD3FC]" />
                55 Maseko Street, Duduza, 1496
              </p>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <Users aria-hidden="true" className="size-6 text-[#7DD3FC]" />
              <p className="font-semibold">Cleaner. Safer. Better managed.</p>
            </div>
          </div>
        </PageShell>
      </main>
    </div>
  )
}
