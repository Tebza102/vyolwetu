'use client'

import { CheckCircle, AlertCircle } from 'lucide-react'
import { getDivisionConfig } from '@/lib/quote-form-config'
import { type DivisionId } from '@/lib/divisions'

interface QuotationHelperPanelProps {
  division: DivisionId | ''
  completedSections: number
  totalSections: number
}

export function QuotationHelperPanel({
  division,
  completedSections,
  totalSections,
}: QuotationHelperPanelProps) {
  if (!division) {
    return (
      <div className="bg-[#F7F7F7] rounded-xl p-6 border border-[#E8E8E8]">
        <h3 className="font-bold text-[#111111] mb-3 flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-[#A80000]" />
          Select a division
        </h3>
        <p className="text-[#526669] text-sm leading-relaxed">
          Choose the service division that best matches your needs. Each division has
          specialised questions that help us prepare a more accurate quotation.
        </p>
      </div>
    )
  }

  const config = getDivisionConfig(division)
  const readinessPercent = Math.round((completedSections / totalSections) * 100)

  return (
    <div className="bg-[#F7F7F7] rounded-xl p-6 border border-[#E8E8E8] space-y-5">
      {/* Division info */}
      <div>
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3"
          style={{
            backgroundColor: `${config.divisionColor}15`,
            color: config.divisionColor,
          }}
        >
          {config.divisionLabel}
        </div>
        <p className="text-[#526669] text-sm leading-relaxed">
          {config.helperText}
        </p>
      </div>

      {/* Readiness bar */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-[#111111]">
            Quotation readiness
          </span>
          <span className="text-sm font-bold" style={{ color: config.divisionColor }}>
            {readinessPercent}%
          </span>
        </div>
        <div className="h-2 bg-[#E8E8E8] rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${readinessPercent}%`,
              backgroundColor: config.divisionColor,
            }}
          />
        </div>
        <p className="text-xs text-[#526669] mt-2">
          {readinessPercent < 40
            ? 'The more detail you provide, the faster we can quote accurately.'
            : readinessPercent < 80
              ? 'Good progress. A few more details and we will have everything we need.'
              : 'Excellent. We have enough detail to prepare a competitive quotation quickly.'}
        </p>
      </div>

      {/* Why these fields matter */}
      <div className="bg-white rounded-lg p-4 border border-[#E8E8E8]">
        <h4 className="text-sm font-bold text-[#111111] mb-2 flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-[#A80000]" />
          Why we ask these questions
        </h4>
        <ul className="space-y-2 text-xs text-[#526669]">
          <li className="flex items-start gap-2">
            <span className="text-[#A80000] mt-0.5">•</span>
            <span>
              Site type and size help us estimate labour, equipment, and time.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#A80000] mt-0.5">•</span>
            <span>
              Urgency and start date let us prioritise and schedule teams.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#A80000] mt-0.5">•</span>
            <span>
              Access and safety notes prevent surprises on the first visit.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#A80000] mt-0.5">•</span>
            <span>
              Budget range helps us recommend the right package first time.
            </span>
          </li>
        </ul>
      </div>

      {/* Contact fallback */}
      <div className="text-center pt-2">
        <p className="text-xs text-[#526669] mb-2">
          Prefer to talk instead?
        </p>
        <a
          href="https://wa.me/27797517507?text=Hi%20Vyolwetu,%20I%27d%20like%20to%20inquire%20about%20your%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium"
          style={{ color: config.divisionColor }}
        >
          Chat on WhatsApp
        </a>
      </div>
    </div>
  )
}
