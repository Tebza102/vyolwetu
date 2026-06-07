import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Vyolwetu',
  description: 'Vyolwetu terms of service and engagement conditions.',
}

export default function TermsOfServicePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#111111] text-white py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="brand-accent-line" />
            <span className="text-xs font-bold text-[#A80000] uppercase tracking-widest">Legal</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-400 max-w-2xl">
            Last updated: June 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-[#526669] leading-relaxed mb-8">
              These terms of service govern your use of the Vyolwetu website and the services 
              we provide. By accessing our website or engaging our services, you agree to these terms.
            </p>

            <h2 className="text-xl font-bold text-[#111111] mt-10 mb-4">1. About Vyolwetu</h2>
            <p className="text-[#526669] leading-relaxed mb-6">
              Vyolwetu is a South African integrated services company operating in waste management, 
              professional cleaning, and construction support. We provide these services to businesses, 
              institutions, and public sector clients primarily in Gauteng and surrounding provinces.
            </p>

            <h2 className="text-xl font-bold text-[#111111] mt-10 mb-4">2. Service Enquiries and Quotations</h2>
            <p className="text-[#526669] leading-relaxed mb-4">
              All quotations provided by Vyolwetu are based on the information you supply. To ensure 
              accuracy:
            </p>
            <ul className="list-disc pl-6 text-[#526669] space-y-2 mb-6">
              <li>Provide complete and accurate details about your requirements</li>
              <li>Allow a site assessment if we recommend one</li>
              <li>Notify us promptly of any changes to the scope of work</li>
            </ul>
            <p className="text-[#526669] leading-relaxed mb-6">
              A quotation does not constitute a binding agreement until both parties have signed an 
              official service agreement or purchase order.
            </p>

            <h2 className="text-xl font-bold text-[#111111] mt-10 mb-4">3. Acceptance of Work</h2>
            <p className="text-[#526669] leading-relaxed mb-6">
              Work begins only after a signed agreement, accepted quotation, or formal instruction 
              is received. Verbal agreements will be confirmed in writing before work commences.
            </p>

            <h2 className="text-xl font-bold text-[#111111] mt-10 mb-4">4. Payment Terms</h2>
            <p className="text-[#526669] leading-relaxed mb-4">
              Payment terms are specified in each quotation or service agreement. Unless otherwise 
              agreed:
            </p>
            <ul className="list-disc pl-6 text-[#526669] space-y-2 mb-6">
              <li>Standard terms are net 30 days from invoice date</li>
              <li>Long-term contracts may require monthly invoicing</li>
              <li>Deposits may be required for large or specialised projects</li>
            </ul>

            <h2 className="text-xl font-bold text-[#111111] mt-10 mb-4">5. Cancellations and Rescheduling</h2>
            <p className="text-[#526669] leading-relaxed mb-4">
              We understand plans change. If you need to cancel or reschedule:
            </p>
            <ul className="list-disc pl-6 text-[#526669] space-y-2 mb-6">
              <li>Provide at least 48 hours notice where possible</li>
              <li>Cancellations with less than 24 hours notice may incur a fee</li>
              <li>We will accommodate rescheduling wherever practically possible</li>
            </ul>

            <h2 className="text-xl font-bold text-[#111111] mt-10 mb-4">6. Site Access and Safety</h2>
            <p className="text-[#526669] leading-relaxed mb-6">
              Clients are responsible for ensuring safe access to the work site. This includes 
              providing accurate site instructions, notifying us of any hazards, and ensuring 
              compliance with site-specific safety protocols. Our teams follow standard occupational 
              health and safety practices at all times.
            </p>

            <h2 className="text-xl font-bold text-[#111111] mt-10 mb-4">7. Limitations</h2>
            <p className="text-[#526669] leading-relaxed mb-4">
              Vyolwetu will not handle:
            </p>
            <ul className="list-disc pl-6 text-[#526669] space-y-2 mb-6">
              <li>Hazardous or toxic waste without prior assessment and written approval</li>
              <li>Work that requires licences or certifications we do not hold</li>
              <li>Services outside our stated scope without a formal variation agreement</li>
            </ul>
            <p className="text-[#526669] leading-relaxed mb-6">
              If we determine that a requested service falls outside our capability or legal 
              authority, we will advise you promptly and may recommend an appropriate specialist.
            </p>

            <h2 className="text-xl font-bold text-[#111111] mt-10 mb-4">8. Intellectual Property</h2>
            <p className="text-[#526669] leading-relaxed mb-6">
              All content on this website — including text, images, logos, and design — is the 
              property of Vyolwetu or its licensors and is protected by copyright and trademark 
              law. You may not reproduce, distribute, or use our content without written permission.
            </p>

            <h2 className="text-xl font-bold text-[#111111] mt-10 mb-4">9. Website Accuracy</h2>
            <p className="text-[#526669] leading-relaxed mb-6">
              We make every effort to ensure the information on our website is accurate and up to date. 
              However, we do not guarantee that all information is error-free. Service descriptions, 
              availability, and pricing are subject to change without notice.
            </p>

            <h2 className="text-xl font-bold text-[#111111] mt-10 mb-4">10. Governing Law</h2>
            <p className="text-[#526669] leading-relaxed mb-6">
              These terms are governed by the laws of the Republic of South Africa. Any disputes 
              will be resolved in accordance with South African law.
            </p>

            <h2 className="text-xl font-bold text-[#111111] mt-10 mb-4">11. Changes to These Terms</h2>
            <p className="text-[#526669] leading-relaxed mb-6">
              We may update these terms from time to time. The latest version will always be 
              available on this page. Continued use of our website or services after changes 
              constitutes acceptance of the updated terms.
            </p>

            <h2 className="text-xl font-bold text-[#111111] mt-10 mb-4">12. Contact</h2>
            <p className="text-[#526669] leading-relaxed mb-6">
              For questions about these terms, please contact us:
            </p>
            <div className="bg-[#F7F7F7] rounded-lg p-6 mb-6">
              <p className="text-[#111111] font-medium">Vyolwetu</p>
              <p className="text-[#526669]">55 Maseko Street, Duduza, 1496</p>
              <p className="text-[#526669]">Phone: +27 79 751 7507</p>
              <p className="text-[#526669]">Email: <a href="mailto:info@vyolwetu.co.za" className="text-[#A80000] hover:underline">info@vyolwetu.co.za</a></p>
            </div>

            <div className="border-t border-[#E8E8E8] pt-8 mt-10">
              <p className="text-sm text-[#526669]">
                Thank you for choosing Vyolwetu. We are committed to delivering reliable, 
                professional service with integrity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
