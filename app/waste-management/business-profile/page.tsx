import type { Metadata } from 'next'
import Image from 'next/image'
import {
  ArrowRight,
  Building2,
  CalendarCheck,
  Check,
  ClipboardCheck,
  Factory,
  HardHat,
  HeartPulse,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Recycle,
  School,
  ShieldCheck,
  Store,
  Truck,
  Users,
} from 'lucide-react'
import { WasteProfileDownloadButtons } from '@/components/waste-profile-download-buttons'

export const metadata: Metadata = {
  title: 'Waste Management Division Business Profile | Vyolwetu',
  description:
    'Explore Vyolwetu Group Waste Management Division services, operating approach, selected client-supplied references, and contact details.',
}

const quoteHref = 'https://www.vyolwetu.co.za/waste-management#waste-quote'
const servicesHref = 'https://www.vyolwetu.co.za/waste-management'
const whatsappHref =
  'https://api.whatsapp.com/send?phone=27797517507&text=Hello%20Vyolwetu%2C%20I%20would%20like%20to%20enquire%20about%20your%20waste%20management%20services'
const emailHref = 'mailto:info@vyolwetu.co.za?subject=Waste%20Management%20Enquiry'

const services = [
  ['General Waste Collection', 'Scheduled or once-off removal of general waste for cleaner, better-managed sites.', Truck],
  ['Commercial & Industrial Waste Removal', 'Waste removal support for businesses, factories, depots, retail and operational facilities.', Factory],
  ['Medical Waste Support', 'High-level support for healthcare waste requirements where the exact regulated scope and disposal pathway are confirmed.', HeartPulse],
  ['Skip Bin Services', 'Skip-bin based collection support for suitable commercial, construction and bulk-waste requirements.', Building2],
  ['Construction Rubble Removal', 'Removal coordination for rubble and project waste from construction, renovation and maintenance sites.', HardHat],
  ['Garden Refuse Removal', 'Collection and removal support for garden waste, vegetation and routine grounds-related refuse.', Leaf],
  ['Recycling Support', 'Sorting, recyclable separation and recycling-focused collection coordination where practical.', Recycle],
  ['Waste Sorting & Responsible Disposal', 'Support to separate waste streams and coordinate responsible disposal according to the confirmed project scope.', ShieldCheck],
  ['Site Clean-up Waste Removal', 'Post-activity or project waste removal to help restore safer, more orderly site conditions.', ClipboardCheck],
  ['Scheduled & Bulk Collection Plans', 'Recurring collection plans or once-off bulk waste removal aligned to the client requirement.', CalendarCheck],
] as const

const sectors = [
  ['Hospitals & Healthcare Facilities', HeartPulse],
  ['Commercial Properties', Building2],
  ['Industrial Sites', Factory],
  ['Construction Companies', HardHat],
  ['Rail, Manufacturing & Infrastructure Sites', Truck],
  ['Retail Centres', Store],
  ['Schools & Institutions', School],
  ['Residential Estates', Building2],
  ['Municipal & Community Projects', Users],
  ['SMEs & Local Businesses', Building2],
  ['Event Organisers Needing Waste Removal', CalendarCheck],
] as const

const approach = [
  ['01', 'Enquiry', 'Tell us what needs to be removed, the site location, timing and any known waste requirements.'],
  ['02', 'Site / Waste Requirement Assessment', 'We review waste type, volume, access, safety considerations and collection frequency.'],
  ['03', 'Quotation', 'A practical quotation is prepared around the confirmed scope and service requirement.'],
  ['04', 'Scheduling', 'Collection, removal or site service is scheduled around access and operational needs.'],
  ['05', 'Collection / Removal', 'The agreed waste is collected or removed according to the planned service scope.'],
  ['06', 'Responsible Disposal / Recycling', 'Disposal or recycling support is coordinated according to the confirmed waste stream and project requirements.'],
  ['07', 'Reporting / Client Feedback', 'Where suitable, the client receives service feedback or agreed reporting for ongoing planning.'],
] as const

const reasons = [
  'Reliable collection scheduling',
  'Local South African operational understanding',
  'Safety-conscious teams',
  'Responsible disposal mindset',
  'Flexible once-off or recurring service options',
  'Professional communication',
  'Scalable support for small and large clients',
  'Group-level professionalism through Vyolwetu Group',
]

const references = [
  ['Pholosong Hospital', 'Medical Waste'],
  ['Gibela Rail Consortium (Dunnattar Factory)', 'Waste Management Support / service scope to be confirmed'],
  ['Bertha Gxowa Hospital', 'Medical Waste'],
] as const

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
        dark ? 'bg-[#081F1B] text-white' : 'bg-white text-[#111111]'
      }`}
    >
      <div className="absolute -right-20 -top-20 -z-10 size-72 rounded-full border-[42px] border-[#1E8C4A]/10" />
      <header className="mb-7 flex items-start justify-between gap-4 border-b border-current/10 pb-5">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#1E8C4A]">{eyebrow}</p>
          <h2 className="mt-2 max-w-xl text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
        </div>
        <span className="text-sm font-bold tabular-nums text-current/45">{number} / 07</span>
      </header>
      <div className="flex flex-1 flex-col">{children}</div>
      <footer className="mt-7 grid grid-cols-[1fr_auto] gap-4 border-t border-current/10 pt-4 text-[9px] uppercase tracking-[0.12em] text-current/55">
        <span>Vyolwetu Waste Management · +27 79 751 7507 · info@vyolwetu.co.za</span>
        <span>www.vyolwetu.co.za</span>
      </footer>
    </section>
  )
}

export default function WasteManagementBusinessProfilePage() {
  return (
    <div className="profile-root bg-[#E6ECE9] py-6 sm:py-10">
      <div className="no-print sticky top-4 z-50 mx-auto mb-5 flex max-w-[210mm] justify-end px-4">
        <WasteProfileDownloadButtons />
      </div>

      <main className="profile-document space-y-6 print:space-y-0">
        <section className="profile-page relative isolate mx-auto flex min-h-[297mm] w-full max-w-[210mm] flex-col overflow-hidden bg-[#081F1B] text-white">
          <Image
            src="/images/waste-collection.webp"
            alt="Vyolwetu waste collection service"
            fill
            priority
            sizes="(max-width: 794px) 100vw, 794px"
            className="-z-20 object-cover opacity-25"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#081F1B]/92 via-[#081F1B]/94 to-[#081F1B]" />
          <div className="absolute -right-24 top-24 size-80 rounded-full border-[46px] border-[#1E8C4A]/25" />
          <div className="flex flex-1 flex-col px-7 py-8 sm:px-12 sm:py-11">
            <div className="flex items-start justify-between gap-5">
              <div className="rounded-3xl bg-white p-5 shadow-sm">
                <Image
                  src="/divisions/logo-waste.png"
                  alt="Vyolwetu Waste Management"
                  width={1400}
                  height={1000}
                  className="h-auto w-48 object-contain sm:w-64"
                />
              </div>
              <span className="rounded-full border border-white/20 bg-white/8 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#A9E7BC]">
                Waste Management Division
              </span>
            </div>

            <div className="my-auto max-w-2xl py-12">
              <span className="mb-6 block h-1 w-14 rounded-full bg-[#1E8C4A]" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A9E7BC]">Vyolwetu Group Waste Management Division</p>
              <h1 className="mt-4 text-4xl font-bold leading-[1.05] sm:text-6xl">
                Reliable, Responsible Waste Services for South African Organisations
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
                Practical waste collection, removal, recycling support and responsible disposal coordination for businesses, institutions, projects and communities.
              </p>
              <p className="mt-8 text-sm font-bold uppercase tracking-[0.22em] text-[#A9E7BC]">Passion to Serve</p>
            </div>

            <div className="profile-cta-group grid gap-3 sm:grid-cols-2">
              <a href={quoteHref} className="profile-cta bg-[#1E8C4A] text-white">
                Request a Quote <ArrowRight aria-hidden="true" className="size-4 shrink-0" />
              </a>
              <a href={emailHref} className="profile-cta border-white/70 bg-white/6 text-white">
                Contact Waste Management Team <ArrowRight aria-hidden="true" className="size-4 shrink-0" />
              </a>
            </div>
          </div>
        </section>

        <PageShell number="02" eyebrow="Company / Division Overview" title="Waste management built around reliability, accountability and site needs.">
          <div className="grid flex-1 content-center gap-9 sm:grid-cols-[1.18fr_0.82fr] sm:items-center">
            <div>
              <h3 className="text-xl font-semibold leading-8 text-[#173C31]">Vyolwetu Group Waste Management Division</h3>
              <p className="mt-5 leading-7 text-[#526669]">
                Vyolwetu Group is a South African multi-division service business. This profile focuses only on the Waste Management Division and its role in helping clients keep operating environments cleaner, safer and better managed.
              </p>
              <p className="mt-5 leading-7 text-[#526669]">
                The division supports businesses, municipalities, property owners, institutions, construction sites, healthcare facilities, industrial operations and communities with practical waste removal, collection, sorting and disposal support.
              </p>
              <p className="mt-5 leading-7 text-[#526669]">
                Our approach is straightforward: understand the waste requirement, assess the site, define the service scope, schedule the work and coordinate collection or removal responsibly.
              </p>
            </div>
            <div className="rounded-3xl bg-[#ECF8F0] p-7">
              <Image
                src="/divisions/logo-waste.png"
                alt="Vyolwetu Waste Management division logo"
                width={1400}
                height={1000}
                className="mx-auto h-auto w-full max-w-64 object-contain"
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ['Reliable', 'Clear scheduling and dependable communication.'],
              ['Responsible', 'Waste handling and disposal coordination with care.'],
              ['Flexible', 'Once-off and recurring service options.'],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-[#D9E8DE] p-5">
                <span className="mb-3 block size-3 rounded-full bg-[#1E8C4A]" />
                <p className="font-bold uppercase tracking-[0.12em] text-[#173C31]">{title}</p>
                <p className="mt-2 text-sm leading-6 text-[#526669]">{copy}</p>
              </div>
            ))}
          </div>
        </PageShell>

        <PageShell number="03" eyebrow="Core Waste Management Services" title="Practical waste services for commercial, industrial and project environments.">
          <p className="max-w-3xl text-sm leading-6 text-[#526669]">
            Services are scoped around waste type, volume, access, collection frequency, site conditions and the agreed disposal pathway.
          </p>
          <div className="mt-7 grid flex-1 auto-rows-fr gap-3 sm:grid-cols-2">
            {services.map(([title, description, Icon], index) => (
              <article key={title} className="rounded-2xl border border-[#D9E8DE] p-4">
                <div className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#1E8C4A]/10 text-[#1E8C4A]">
                    <span className="text-[10px] font-bold">{String(index + 1).padStart(2, '0')}</span>
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <Icon aria-hidden="true" className="size-4 text-[#1E8C4A]" />
                      <h3 className="font-bold leading-5">{title}</h3>
                    </div>
                    <p className="mt-2 text-xs leading-5 text-[#526669]">{description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </PageShell>

        <PageShell number="04" eyebrow="Who We Serve" title="Waste-sector support shaped around the sites, people and operations you manage.">
          <p className="max-w-3xl text-sm leading-6 text-[#526669]">
            Vyolwetu supports organisations that need dependable waste removal, collection scheduling and clearer operational environments.
          </p>
          <div className="mt-7 grid flex-1 content-center gap-3 sm:grid-cols-2">
            {sectors.map(([title, Icon]) => (
              <article key={title} className="flex min-h-20 items-center gap-4 rounded-2xl bg-[#F2F7F4] p-5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#1E8C4A]/10">
                  <Icon aria-hidden="true" className="size-5 text-[#1E8C4A]" />
                </span>
                <h3 className="font-bold leading-5">{title}</h3>
              </article>
            ))}
          </div>
          <div className="mt-7 rounded-3xl bg-[#173C31] p-6 text-white">
            <p className="text-sm font-semibold leading-6">
              From scheduled collections to once-off bulk removal, we begin with the waste requirement. That lets the service plan reflect site access, waste type, volume, frequency and responsible disposal needs.
            </p>
          </div>
        </PageShell>

        <PageShell number="05" eyebrow="Operating Approach" title="A clear workflow from enquiry to collection, disposal and feedback.">
          <ol className="flex flex-1 flex-col justify-center gap-3">
            {approach.map(([number, title, description]) => (
              <li key={number} className="grid grid-cols-[3rem_1fr] gap-4 rounded-2xl border border-[#D9E8DE] px-5 py-4">
                <span className="flex size-10 items-center justify-center rounded-full bg-[#1E8C4A] text-xs font-bold text-white">{number}</span>
                <div>
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-1 text-xs leading-5 text-[#526669]">{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </PageShell>

        <PageShell number="06" eyebrow="Why Vyolwetu Waste Management + References" title="Operational discipline backed by clear, carefully worded service references.">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1E8C4A]">Why clients choose Vyolwetu</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason} className="flex items-center gap-3 rounded-2xl bg-[#F2F7F4] px-4 py-3">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#1E8C4A]">
                  <Check aria-hidden="true" className="size-4 text-white" />
                </span>
                <p className="text-sm font-semibold leading-5">{reason}</p>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-7">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1E8C4A]">Selected Client-Supplied References</p>
            <p className="mt-2 text-[11px] leading-5 text-[#526669]">
              These are presented as client-supplied service references. This profile does not assert contract dates, values, outcomes, permissions or exact project status beyond the information supplied.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {references.map(([client, service]) => (
                <article key={client} className="rounded-2xl border border-[#D9E8DE] p-4">
                  <h3 className="text-sm font-bold leading-5">{client}</h3>
                  <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.14em] text-[#1E8C4A]">Service Reference</p>
                  <p className="mt-1 text-xs leading-5 text-[#526669]">{service}</p>
                </article>
              ))}
            </div>
          </div>
        </PageShell>

        <PageShell number="07" eyebrow="Start a Conversation" title="Plan your next waste collection, removal or site service." dark>
          <div className="flex flex-1 flex-col justify-center">
            <p className="max-w-2xl text-base leading-7 text-white/75">
              Share your site type, location, waste requirement, estimated volume and preferred timing. The Waste Management team will review the request and help plan the next step.
            </p>

            <div className="mt-10 grid gap-5 rounded-3xl border border-white/10 bg-white/8 p-7 sm:grid-cols-2">
              <a href="tel:+27797517507" className="flex items-center gap-3 text-sm text-white/85">
                <Phone aria-hidden="true" className="size-5 text-[#A9E7BC]" /> +27 79 751 7507
              </a>
              <a href={emailHref} className="flex items-center gap-3 text-sm text-white/85">
                <Mail aria-hidden="true" className="size-5 text-[#A9E7BC]" /> info@vyolwetu.co.za
              </a>
              <a href="https://www.vyolwetu.co.za/" className="flex items-center gap-3 text-sm text-white/85">
                <Building2 aria-hidden="true" className="size-5 text-[#A9E7BC]" /> www.vyolwetu.co.za
              </a>
              <p className="flex items-start gap-3 text-sm leading-6 text-white/85">
                <MapPin aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-[#A9E7BC]" />
                2451 Rhokana Street Business Park, Kwa-Thema, 1557
              </p>
            </div>

            <div className="profile-cta-group mt-9 grid gap-3 sm:grid-cols-2">
              <a href={quoteHref} className="profile-cta bg-[#1E8C4A] text-white">
                <ClipboardCheck aria-hidden="true" className="size-5" /> Request a Waste Quote
              </a>
              <a href={whatsappHref} className="profile-cta bg-[#25D366] text-[#081F1B]">
                <MessageCircle aria-hidden="true" className="size-5" /> Send WhatsApp Message
              </a>
              <a href={emailHref} className="profile-cta border-white/70 bg-white/6 text-white">
                <Mail aria-hidden="true" className="size-5" /> Send Email
              </a>
              <a href={servicesHref} className="profile-cta border-[#0C8CB5] bg-[#0C8CB5]/10 text-[#D7F2FF]">
                <ArrowRight aria-hidden="true" className="size-5" /> View Waste Services
              </a>
            </div>

            <div className="mt-9 flex items-center gap-4">
              <ShieldCheck aria-hidden="true" className="size-6 text-[#A9E7BC]" />
              <p className="font-semibold">Reliable service. Responsible handling. Passion to Serve.</p>
            </div>
          </div>
        </PageShell>
      </main>
    </div>
  )
}
