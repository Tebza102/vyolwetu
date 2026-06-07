import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Vyolwetu',
  description: 'Vyolwetu privacy policy and data protection practices.',
}

export default function PrivacyPolicyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#111111] text-white py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="brand-accent-line" />
            <span className="text-xs font-bold text-[#A80000] uppercase tracking-widest">Legal</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
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
              Vyolwetu respects your privacy and is committed to protecting your personal information. 
              This policy explains how we collect, use, store, and safeguard the data you provide to us.
            </p>

            <h2 className="text-xl font-bold text-[#111111] mt-10 mb-4">1. Information We Collect</h2>
            <p className="text-[#526669] leading-relaxed mb-4">
              When you request a quote or contact us through our website, we may collect:
            </p>
            <ul className="list-disc pl-6 text-[#526669] space-y-2 mb-6">
              <li>Your name and business or organisation name</li>
              <li>Phone number and email address</li>
              <li>Physical address or site location</li>
              <li>Details about the services you require</li>
              <li>Preferences such as contact method and response time</li>
              <li>Division-specific project details relevant to your enquiry</li>
            </ul>

            <h2 className="text-xl font-bold text-[#111111] mt-10 mb-4">2. How We Use Your Information</h2>
            <p className="text-[#526669] leading-relaxed mb-4">
              We use the information you provide solely for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-[#526669] space-y-2 mb-6">
              <li>To respond to your enquiry or quote request</li>
              <li>To prepare and send you a quotation or proposal</li>
              <li>To arrange a site visit or assessment if requested</li>
              <li>To communicate with you about our services</li>
              <li>To maintain records of our business relationship</li>
            </ul>
            <p className="text-[#526669] leading-relaxed mb-6">
              We do not sell, rent, or share your personal information with third parties for marketing purposes.
            </p>

            <h2 className="text-xl font-bold text-[#111111] mt-10 mb-4">3. How We Store Your Data</h2>
            <p className="text-[#526669] leading-relaxed mb-4">
              Your data is stored securely using industry-standard cloud infrastructure. We use 
              encrypted databases and secure transmission protocols. Access to your information is 
              restricted to authorised Vyolwetu staff who need it to perform their duties.
            </p>

            <h2 className="text-xl font-bold text-[#111111] mt-10 mb-4">4. Data Retention</h2>
            <p className="text-[#526669] leading-relaxed mb-6">
              We retain your information for as long as necessary to fulfil the purposes for which 
              it was collected, or as required by law. If you would like us to delete your personal 
              information, please contact us and we will process your request in accordance with 
              applicable data protection laws.
            </p>

            <h2 className="text-xl font-bold text-[#111111] mt-10 mb-4">5. Your Rights</h2>
            <p className="text-[#526669] leading-relaxed mb-4">
              Under South African law (POPIA), you have the right to:
            </p>
            <ul className="list-disc pl-6 text-[#526669] space-y-2 mb-6">
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction of inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to the processing of your information</li>
              <li>Lodge a complaint with the Information Regulator</li>
            </ul>

            <h2 className="text-xl font-bold text-[#111111] mt-10 mb-4">6. Cookies and Analytics</h2>
            <p className="text-[#526669] leading-relaxed mb-6">
              Our website does not use tracking cookies for advertising. We may use basic analytics 
              to understand how visitors use our site so we can improve the experience. This data 
              is anonymised and does not identify you personally.
            </p>

            <h2 className="text-xl font-bold text-[#111111] mt-10 mb-4">7. Third-Party Links</h2>
            <p className="text-[#526669] leading-relaxed mb-6">
              Our website may contain links to external sites (such as WhatsApp). We are not 
              responsible for the privacy practices of those sites. We encourage you to read 
              their privacy policies before providing any personal information.
            </p>

            <h2 className="text-xl font-bold text-[#111111] mt-10 mb-4">8. Contact Us</h2>
            <p className="text-[#526669] leading-relaxed mb-6">
              If you have any questions about this privacy policy or how we handle your data, 
              please contact us:
            </p>
            <div className="bg-[#F7F7F7] rounded-lg p-6 mb-6">
              <p className="text-[#111111] font-medium">Vyolwetu</p>
              <p className="text-[#526669]">55 Maseko Street, Duduza, 1496</p>
              <p className="text-[#526669]">Phone: +27 79 751 7507</p>
              <p className="text-[#526669]">Email: <a href="mailto:info@vyolwetu.co.za" className="text-[#A80000] hover:underline">info@vyolwetu.co.za</a></p>
            </div>

            <div className="border-t border-[#E8E8E8] pt-8 mt-10">
              <p className="text-sm text-[#526669]">
                By using our website and submitting your information, you consent to the collection 
                and use of your data as described in this policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
