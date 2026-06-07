'use client'

import { useState, useCallback, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  getDivisionConfig,
  divisionKeys,
  preferredContactOptions,
  preferredResponseTimeOptions,
  urgencyLevelOptions,
  type FieldType,
} from '@/lib/quote-form-config'
import { type DivisionId } from '@/lib/divisions'
import { QuotationHelperPanel } from './quotation-helper-panel'
import {
  Send,
  Loader2,
  CheckCircle,
  AlertTriangle,
  User,
  Building2,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Clock,
  Wrench,
  FileText,
  Shield,
} from 'lucide-react'

// ──────────────────────────────────────────
// Props
// ──────────────────────────────────────────

interface DivisionQuoteFormProps {
  defaultDivision?: DivisionId | ''
  sourcePage: string
}

// ──────────────────────────────────────────
// Default form state
// ──────────────────────────────────────────

function createInitialState(defaultDivision: DivisionId | '' = '') {
  return {
    // Section 1: Your details
    name: '',
    businessName: '',
    phone: '',
    email: '',
    location: '',
    preferredContact: 'phone' as const,
    preferredResponseTime: '24h' as const,

    // Section 2: Service required
    division: defaultDivision,
    serviceCategory: '',
    urgencyLevel: 'medium' as const,

    // Section 3: Division-specific (dynamic)
    divisionDetails: {} as Record<string, string>,

    // Section 4: Extra notes
    description: '',
    consent: false,
    sourcePage: '',
  }
}

// ──────────────────────────────────────────
// Validation
// ──────────────────────────────────────────

function validateForm(
  data: ReturnType<typeof createInitialState>,
  divisionConfig: ReturnType<typeof getDivisionConfig> | null
): { field: string; message: string }[] {
  const errors: { field: string; message: string }[] = []

  if (!data.name.trim()) {
    errors.push({ field: 'name', message: 'Full name is required' })
  }

  if (!data.phone.trim()) {
    errors.push({ field: 'phone', message: 'Phone / WhatsApp number is required' })
  }

  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push({ field: 'email', message: 'Please enter a valid email address' })
  }

  if (!data.location.trim()) {
    errors.push({ field: 'location', message: 'Location / site address is required' })
  }

  if (!data.division) {
    errors.push({ field: 'division', message: 'Please select a division' })
  }

  if (!data.serviceCategory) {
    errors.push({ field: 'serviceCategory', message: 'Please select a service category' })
  }

  if (!data.description.trim()) {
    errors.push({ field: 'description', message: 'Please describe your request' })
  }

  if (!data.consent) {
    errors.push({ field: 'consent', message: 'You must consent to being contacted' })
  }

  // Division-specific required fields
  if (divisionConfig) {
    for (const field of divisionConfig.fields) {
      if (field.required && !data.divisionDetails[field.name]?.trim()) {
        errors.push({
          field: `divisionDetails.${field.name}`,
          message: `${field.label} is required`,
        })
      }
    }
  }

  return errors
}

// ──────────────────────────────────────────
// Field renderer helpers
// ──────────────────────────────────────────

function renderField(
  field: {
    name: string
    label: string
    type: FieldType
    placeholder?: string
    options?: string[]
    helperText?: string
    required?: boolean
  },
  value: string,
  onChange: (value: string) => void,
  error?: string
) {
  const baseInputClasses =
    'w-full px-4 py-3.5 rounded-xl bg-[#1a1a1a] text-white border border-[#333] focus:outline-none focus:border-[#A80000] transition-colors'

  const labelClasses = 'block text-white text-sm mb-2 font-medium'

  const helperClasses = 'text-gray-500 text-xs mt-1'

  const errorClasses = 'text-red-400 text-xs mt-1'

  const id = `field-${field.name}`

  const labelNode = (
    <label htmlFor={id} className={labelClasses}>
      {field.label}
      {field.required && <span className="text-red-400 ml-1">*</span>}
    </label>
  )

  const helperNode = field.helperText ? (
    <p className={helperClasses}>{field.helperText}</p>
  ) : null

  const errorNode = error ? <p className={errorClasses}>{error}</p> : null

  switch (field.type) {
    case 'select':
      return (
        <div>
          {labelNode}
          <select
            id={id}
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            className={`${baseInputClasses} appearance-none`}
            required={field.required}
          >
            <option value="">Select an option</option>
            {field.options?.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {helperNode}
          {errorNode}
        </div>
      )

    case 'textarea':
      return (
        <div>
          {labelNode}
          <textarea
            id={id}
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder={field.placeholder || ''}
            rows={3}
            className={`${baseInputClasses} resize-none`}
            required={field.required}
          />
          {helperNode}
          {errorNode}
        </div>
      )

    case 'date':
      return (
        <div>
          {labelNode}
          <input
            id={id}
            type="date"
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            className={baseInputClasses}
            required={field.required}
          />
          {helperNode}
          {errorNode}
        </div>
      )

    default: // text, email, tel
      return (
        <div>
          {labelNode}
          <input
            id={id}
            type={field.type}
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder={field.placeholder || ''}
            className={baseInputClasses}
            required={field.required}
          />
          {helperNode}
          {errorNode}
        </div>
      )
  }
}

// ──────────────────────────────────────────
// Section heading component
// ──────────────────────────────────────────

function SectionHeading({
  number,
  title,
  icon: Icon,
}: {
  number: number
  title: string
  icon: React.ElementType
}) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 rounded-full bg-[#A80000]/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-[#A80000]" />
      </div>
      <div>
        <span className="text-xs font-bold text-[#A80000] uppercase tracking-widest">
          Section {number}
        </span>
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>
    </div>
  )
}

// ──────────────────────────────────────────
// Main form component
// ──────────────────────────────────────────

export function DivisionQuoteForm({
  defaultDivision = '',
  sourcePage,
}: DivisionQuoteFormProps) {
  const [formData, setFormData] = useState(() => {
    const initial = createInitialState(defaultDivision)
    initial.sourcePage = sourcePage
    return initial
  })

  const [errors, setErrors] = useState<{ field: string; message: string }[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')

  const divisionConfig = useMemo(() => {
    if (!formData.division) return null
    return getDivisionConfig(formData.division as DivisionId)
  }, [formData.division])

  // ── Helpers ──

  const updateField = useCallback(
    (field: keyof typeof formData, value: unknown) => {
      setFormData((prev) => ({ ...prev, [field]: value }))
      // Clear error for this field
      setErrors((prev) => prev.filter((e) => e.field !== field))
    },
    []
  )

  const updateDivisionDetail = useCallback(
    (fieldName: string, value: string) => {
      setFormData((prev) => ({
        ...prev,
        divisionDetails: { ...prev.divisionDetails, [fieldName]: value },
      }))
      setErrors((prev) =>
        prev.filter((e) => e.field !== `divisionDetails.${fieldName}`)
      )
    },
    []
  )

  const getFieldError = useCallback(
    (fieldName: string) => {
      return errors.find((e) => e.field === fieldName)?.message
    },
    [errors]
  )

  // When division changes, clear division-specific details that no longer apply
  const handleDivisionChange = useCallback(
    (newDivision: string) => {
      setFormData((prev) => ({
        ...prev,
        division: newDivision as DivisionId,
        serviceCategory: '',
        divisionDetails: {},
      }))
      setErrors((prev) =>
        prev.filter(
          (e) => !e.field.startsWith('divisionDetails.') && e.field !== 'division'
        )
      )
    },
    []
  )

  // ── Submit ──

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus('idle')

    const validationErrors = validateForm(formData, divisionConfig)
    if (validationErrors.length > 0) {
      setErrors(validationErrors)
      // Scroll to first error
      const firstErrorField = document.getElementById(
        `field-${validationErrors[0].field.replace('divisionDetails.', '')}`
      )
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' })
        firstErrorField.focus()
      }
      return
    }

    setIsSubmitting(true)

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.serviceCategory,
        location: formData.location,
        message: formData.description,
        division_details: {
          division: formData.division,
          businessName: formData.businessName,
          preferredContact: formData.preferredContact,
          preferredResponseTime: formData.preferredResponseTime,
          serviceCategory: formData.serviceCategory,
          urgencyLevel: formData.urgencyLevel,
          consent: formData.consent,
          sourcePage: formData.sourcePage,
          answers: formData.divisionDetails,
        },
      }

      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        setSubmitStatus('success')
        // Reset form after success
        setFormData(createInitialState(defaultDivision))
        setFormData((prev) => ({ ...prev, sourcePage }))
      } else {
        const data = await response.json()
        setErrors([{ field: 'submit', message: data.error || 'Submission failed' }])
        setSubmitStatus('error')
      }
    } catch {
      setErrors([
        { field: 'submit', message: 'Something went wrong. Please try again.' },
      ])
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  // ── Readiness calculation ──

  const completedSections = useMemo(() => {
    let count = 0
    if (formData.name && formData.phone && formData.location) count++
    if (formData.division && formData.serviceCategory) count++
    if (Object.keys(formData.divisionDetails).length > 0) count++
    if (formData.description && formData.consent) count++
    return count
  }, [formData])

  // ── Render ──

  if (submitStatus === 'success') {
    return (
      <Card className="bg-[#1a1a1a] border-[#333] max-w-3xl mx-auto">
        <CardContent className="p-10 text-center">
          <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Thank you!
          </h2>
          <p className="text-gray-400 mb-2 max-w-md mx-auto">
            Your enquiry has been submitted successfully. Vyolwetu will respond
            using your preferred contact method.
          </p>
          <p className="text-gray-500 text-sm mb-8">
            Preferred contact:{' '}
            <strong className="text-white">
              {preferredContactOptions.find(
                (o) => o.value === formData.preferredContact
              )?.label || 'Phone call'}
            </strong>
          </p>
          <Button
            onClick={() => {
              setSubmitStatus('idle')
              setFormData(() => {
                const initial = createInitialState(defaultDivision)
                initial.sourcePage = sourcePage
                return initial
              })
            }}
            className="bg-[#A80000] hover:bg-[#850000] text-white rounded-full px-8"
          >
            Submit Another Enquiry
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Form */}
      <div className="lg:col-span-2">
        <Card className="bg-[#111111] border-[#333]">
          <CardContent className="p-6 md:p-10">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Request a Quote
              </h2>
              <p className="text-gray-400">
                {divisionConfig?.introText ||
                  'Fill in your details and we will get back to you within 24 hours.'}
              </p>
            </div>

            {/* Submit error */}
            {getFieldError('submit') && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-red-400 text-sm">{getFieldError('submit')}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-10">
              {/* ═══════════════════════════════════════
                  Section 1: Your details
              ═══════════════════════════════════════ */}
              <div>
                <SectionHeading
                  number={1}
                  title="Your Details"
                  icon={User}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-white text-sm mb-2 font-medium">
                      Full name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => updateField('name', e.target.value)}
                      placeholder="Your full name"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#1a1a1a] text-white border border-[#333] focus:outline-none focus:border-[#A80000] transition-colors"
                    />
                    {getFieldError('name') && (
                      <p className="text-red-400 text-xs mt-1">{getFieldError('name')}</p>
                    )}
                  </div>

                  {/* Business name */}
                  <div>
                    <label className="block text-white text-sm mb-2 font-medium">
                      Business / organisation name
                    </label>
                    <input
                      type="text"
                      value={formData.businessName}
                      onChange={(e) =>
                        updateField('businessName', e.target.value)
                      }
                      placeholder="Business or organisation name"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#1a1a1a] text-white border border-[#333] focus:outline-none focus:border-[#A80000] transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-white text-sm mb-2 font-medium">
                      Phone / WhatsApp <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      placeholder="+27 XX XXX XXXX"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#1a1a1a] text-white border border-[#333] focus:outline-none focus:border-[#A80000] transition-colors"
                    />
                    {getFieldError('phone') && (
                      <p className="text-red-400 text-xs mt-1">{getFieldError('phone')}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-white text-sm mb-2 font-medium">
                      Email address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#1a1a1a] text-white border border-[#333] focus:outline-none focus:border-[#A80000] transition-colors"
                    />
                    {getFieldError('email') && (
                      <p className="text-red-400 text-xs mt-1">{getFieldError('email')}</p>
                    )}
                  </div>
                </div>

                {/* Location */}
                <div className="mt-4">
                  <label className="block text-white text-sm mb-2 font-medium">
                    Location / site address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => updateField('location', e.target.value)}
                    placeholder="Full address where the service is needed"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#1a1a1a] text-white border border-[#333] focus:outline-none focus:border-[#A80000] transition-colors"
                  />
                  {getFieldError('location') && (
                    <p className="text-red-400 text-xs mt-1">{getFieldError('location')}</p>
                  )}
                </div>

                {/* Preferred contact & response time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-white text-sm mb-2 font-medium">
                      Preferred contact method
                    </label>
                    <select
                      value={formData.preferredContact}
                      onChange={(e) =>
                        updateField(
                          'preferredContact',
                          e.target.value as typeof formData.preferredContact
                        )
                      }
                      className="w-full px-4 py-3.5 rounded-xl bg-[#1a1a1a] text-white border border-[#333] focus:outline-none focus:border-[#A80000] transition-colors appearance-none"
                    >
                      {preferredContactOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-white text-sm mb-2 font-medium">
                      Preferred response time
                    </label>
                    <select
                      value={formData.preferredResponseTime}
                      onChange={(e) =>
                        updateField(
                          'preferredResponseTime',
                          e.target.value as typeof formData.preferredResponseTime
                        )
                      }
                      className="w-full px-4 py-3.5 rounded-xl bg-[#1a1a1a] text-white border border-[#333] focus:outline-none focus:border-[#A80000] transition-colors appearance-none"
                    >
                      {preferredResponseTimeOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* ═══════════════════════════════════════
                  Section 2: Service required
              ═══════════════════════════════════════ */}
              <div>
                <SectionHeading
                  number={2}
                  title="Service Required"
                  icon={Wrench}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Division selector */}
                  <div>
                    <label className="block text-white text-sm mb-2 font-medium">
                      Division <span className="text-red-400">*</span>
                    </label>
                    <select
                      value={formData.division}
                      onChange={(e) => handleDivisionChange(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#1a1a1a] text-white border border-[#333] focus:outline-none focus:border-[#A80000] transition-colors appearance-none"
                      required
                    >
                      <option value="">Select a division</option>
                      <option value="construction">
                        Construction Support & Site Services
                      </option>
                      <option value="cleaning">Professional Cleaning</option>
                      <option value="waste">Waste Management</option>
                    </select>
                    {getFieldError('division') && (
                      <p className="text-red-400 text-xs mt-1">
                        {getFieldError('division')}
                      </p>
                    )}
                  </div>

                  {/* Service category */}
                  <div>
                    <label className="block text-white text-sm mb-2 font-medium">
                      Service category <span className="text-red-400">*</span>
                    </label>
                    <select
                      value={formData.serviceCategory}
                      onChange={(e) =>
                        updateField('serviceCategory', e.target.value)
                      }
                      className="w-full px-4 py-3.5 rounded-xl bg-[#1a1a1a] text-white border border-[#333] focus:outline-none focus:border-[#A80000] transition-colors appearance-none"
                      required
                      disabled={!divisionConfig}
                    >
                      <option value="">
                        {divisionConfig
                          ? 'Select a service'
                          : 'Select a division first'}
                      </option>
                      {divisionConfig?.services.map((svc) => (
                        <option key={svc} value={svc}>
                          {svc}
                        </option>
                      ))}
                    </select>
                    {getFieldError('serviceCategory') && (
                      <p className="text-red-400 text-xs mt-1">
                        {getFieldError('serviceCategory')}
                      </p>
                    )}
                  </div>
                </div>

                {/* Urgency */}
                <div className="mt-4">
                  <label className="block text-white text-sm mb-2 font-medium">
                    Urgency level
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {urgencyLevelOptions.map((opt) => {
                      const isSelected = formData.urgencyLevel === opt.value
                      return (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => updateField('urgencyLevel', opt.value)}
                          className={`px-4 py-3 rounded-xl text-sm font-medium border transition-colors text-left ${
                            isSelected
                              ? 'bg-[#A80000] border-[#A80000] text-white'
                              : 'bg-[#1a1a1a] border-[#333] text-gray-300 hover:border-[#A80000]/50'
                          }`}
                        >
                          {opt.label}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* ═══════════════════════════════════════
                  Section 3: Site / project details
                  (Division-specific, conditional)
              ═══════════════════════════════════════ */}
              {divisionConfig && (
                <div>
                  <SectionHeading
                    number={3}
                    title="Site & Project Details"
                    icon={Building2}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {divisionConfig.fields.map((field) => (
                      <div
                        key={field.name}
                        className={
                          field.type === 'textarea' ? 'md:col-span-2' : ''
                        }
                      >
                        {renderField(
                          field,
                          formData.divisionDetails[field.name] || '',
                          (value) => updateDivisionDetail(field.name, value),
                          getFieldError(`divisionDetails.${field.name}`)
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ═══════════════════════════════════════
                  Section 4: Extra notes
              ═══════════════════════════════════════ */}
              <div>
                <SectionHeading
                  number={4}
                  title="Extra Notes"
                  icon={FileText}
                />

                <div>
                  <label className="block text-white text-sm mb-2 font-medium">
                    Project / request description{' '}
                    <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => updateField('description', e.target.value)}
                    placeholder="Tell us about your requirements, timeline, and anything else we should know..."
                    rows={4}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#1a1a1a] text-white border border-[#333] focus:outline-none focus:border-[#A80000] transition-colors resize-none"
                  />
                  {getFieldError('description') && (
                    <p className="text-red-400 text-xs mt-1">
                      {getFieldError('description')}
                    </p>
                  )}
                </div>

                {/* Consent */}
                <div className="mt-6">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) =>
                        updateField('consent', e.target.checked)
                      }
                      className="mt-1 w-5 h-5 rounded border-[#333] bg-[#1a1a1a] text-[#A80000] focus:ring-[#A80000] cursor-pointer"
                    />
                    <span className="text-gray-300 text-sm leading-relaxed">
                      I consent to Vyolwetu contacting me regarding this enquiry.
                      My information will be handled in accordance with the{' '}
                      <a href="#" className="text-[#A80000] hover:underline">
                        privacy policy
                      </a>
                      .
                    </span>
                  </label>
                  {getFieldError('consent') && (
                    <p className="text-red-400 text-xs mt-1 ml-8">
                      {getFieldError('consent')}
                    </p>
                  )}
                </div>

                {/* Hidden source */}
                <input type="hidden" name="sourcePage" value={sourcePage} />
              </div>

              {/* Submit button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#A80000] hover:bg-[#850000] text-white text-base py-5 rounded-full transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Submit Quote Request
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Helper panel */}
      <div className="lg:col-span-1">
        <div className="sticky top-24">
          <QuotationHelperPanel
            division={formData.division}
            completedSections={completedSections}
            totalSections={4}
          />
        </div>
      </div>
    </div>
  )
}
