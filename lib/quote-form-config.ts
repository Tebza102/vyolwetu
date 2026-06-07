import { type DivisionId } from './divisions'

// ──────────────────────────────────────────
// Core types
// ──────────────────────────────────────────

export type FieldType =
  | 'text'
  | 'textarea'
  | 'select'
  | 'radio'
  | 'checkbox'
  | 'date'
  | 'email'
  | 'tel'

export interface DivisionFormField {
  name: string
  label: string
  type: FieldType
  required?: boolean
  placeholder?: string
  options?: string[]
  helperText?: string
}

export interface DivisionFormConfig {
  division: DivisionId
  divisionLabel: string
  divisionColor: string
  introText: string
  helperText: string
  services: string[]
  fields: DivisionFormField[]
}

export type PreferredContact = 'phone' | 'email' | 'whatsapp'
export type PreferredResponseTime = 'asap' | '24h' | '48h' | 'this_week'
export type UrgencyLevel = 'low' | 'medium' | 'high' | 'emergency'

// ──────────────────────────────────────────
// Common field definitions (all divisions)
// ──────────────────────────────────────────

export const preferredContactOptions: { value: PreferredContact; label: string }[] = [
  { value: 'phone', label: 'Phone call' },
  { value: 'whatsapp', label: 'WhatsApp message' },
  { value: 'email', label: 'Email' },
]

export const preferredResponseTimeOptions: { value: PreferredResponseTime; label: string }[] = [
  { value: 'asap', label: 'As soon as possible' },
  { value: '24h', label: 'Within 24 hours' },
  { value: '48h', label: 'Within 48 hours' },
  { value: 'this_week', label: 'This week is fine' },
]

export const urgencyLevelOptions: { value: UrgencyLevel; label: string }[] = [
  { value: 'low', label: 'Low — planning ahead' },
  { value: 'medium', label: 'Medium — within a few weeks' },
  { value: 'high', label: 'High — within days' },
  { value: 'emergency', label: 'Emergency — immediate attention needed' },
]

// ──────────────────────────────────────────
// Division-specific configurations
// ──────────────────────────────────────────

export const divisionFormConfigs: Record<DivisionId, DivisionFormConfig> = {
  construction: {
    division: 'construction',
    divisionLabel: 'Construction',
    divisionColor: '#A86A00',
    introText:
      'Tell us about your construction project. The more detail you provide, the faster we can prepare an accurate quotation.',
    helperText:
      'We handle new builds, renovations, maintenance, and site support. A site visit helps us quote accurately.',
    services: [
      'New construction',
      'Renovation',
      'Maintenance',
      'Repairs',
      'Site support',
      'Road / civil construction',
      'Other',
    ],
    fields: [
      {
        name: 'workType',
        label: 'Type of work required',
        type: 'select',
        required: true,
        options: [
          'New construction',
          'Renovation',
          'Maintenance',
          'Repairs',
          'Site support',
          'Road / civil construction',
          'Other',
        ],
      },
      {
        name: 'propertyType',
        label: 'Property / site type',
        type: 'select',
        required: true,
        options: [
          'Residential',
          'Commercial',
          'School / institution',
          'Public sector site',
          'Industrial',
          'Other',
        ],
      },
      {
        name: 'projectStage',
        label: 'Project stage',
        type: 'select',
        required: false,
        options: [
          'Idea stage',
          'Need site assessment',
          'Already have drawings',
          'Already have BOQ',
          'Ready to start',
          'Emergency repair',
        ],
      },
      {
        name: 'projectSize',
        label: 'Approximate project size or area',
        type: 'text',
        required: false,
        placeholder: 'e.g., 200 sqm or 3-bedroom house',
      },
      {
        name: 'needsSiteVisit',
        label: 'Do you need a site visit?',
        type: 'select',
        required: false,
        options: ['Yes, please arrange', 'No, photos sufficient', 'Not sure yet'],
      },
      {
        name: 'startDate',
        label: 'Desired start date',
        type: 'date',
        required: false,
      },
      {
        name: 'budgetRange',
        label: 'Estimated budget range',
        type: 'select',
        required: false,
        options: [
          'Under R10,000',
          'R10,000 – R50,000',
          'R50,000 – R200,000',
          'R200,000 – R1,000,000',
          'Over R1,000,000',
          'Prefer not to say',
        ],
      },
      {
        name: 'hasDrawings',
        label: 'Do you have drawings, photos, or a BOQ?',
        type: 'select',
        required: false,
        options: ['Yes, I can send them', 'No, not yet', 'Will prepare them'],
        helperText:
          'File upload can be added in a later phase. For now, please describe what you have in the notes below.',
      },
      {
        name: 'safetyNotes',
        label: 'Special access or safety considerations',
        type: 'textarea',
        required: false,
        placeholder:
          'Restricted access, working hours, PPE requirements, neighbours, etc.',
      },
    ],
  },

  cleaning: {
    division: 'cleaning',
    divisionLabel: 'Cleaning',
    divisionColor: '#0C8CB5',
    introText:
      'Tell us about your cleaning needs. We will recommend the right service and schedule for your facility.',
    helperText:
      'We provide once-off deep cleans, regular contracts, post-construction cleaning, and hygiene support.',
    services: [
      'Once-off deep cleaning',
      'Regular cleaning contract',
      'Office cleaning',
      'School / institutional cleaning',
      'Post-construction cleaning',
      'Industrial cleaning',
      'Hygiene support',
      'Other',
    ],
    fields: [
      {
        name: 'cleaningType',
        label: 'Type of cleaning required',
        type: 'select',
        required: true,
        options: [
          'Once-off deep cleaning',
          'Regular cleaning contract',
          'Office cleaning',
          'School / institutional cleaning',
          'Post-construction cleaning',
          'Industrial cleaning',
          'Hygiene support',
          'Other',
        ],
      },
      {
        name: 'propertyType',
        label: 'Property / facility type',
        type: 'select',
        required: true,
        options: [
          'Office',
          'School',
          'Church',
          'Clinic',
          'Residential complex',
          'Retail / business premises',
          'Industrial site',
          'Other',
        ],
      },
      {
        name: 'cleaningFrequency',
        label: 'Cleaning frequency',
        type: 'select',
        required: true,
        options: ['Once-off', 'Daily', 'Weekly', 'Monthly', 'Contract-based'],
      },
      {
        name: 'areaSize',
        label: 'Approximate area size',
        type: 'text',
        required: false,
        placeholder: 'e.g., 500 sqm or 2 floors',
      },
      {
        name: 'roomCount',
        label: 'Number of rooms / offices',
        type: 'text',
        required: false,
        placeholder: 'e.g., 10 offices',
      },
      {
        name: 'bathroomCount',
        label: 'Number of toilets / bathrooms',
        type: 'text',
        required: false,
        placeholder: 'e.g., 4',
      },
      {
        name: 'needsMaterials',
        label: 'Are cleaning materials required?',
        type: 'select',
        required: false,
        options: ['Yes, please provide', 'No, we have our own', 'Not sure'],
      },
      {
        name: 'needsConsumables',
        label: 'Are hygiene consumables required?',
        type: 'select',
        required: false,
        options: ['Yes (soap, paper, sanitizer)', 'No', 'Not sure'],
      },
      {
        name: 'preferredDays',
        label: 'Preferred cleaning days and times',
        type: 'text',
        required: false,
        placeholder: 'e.g., Mon–Fri after 5pm, or weekends',
      },
      {
        name: 'accessInstructions',
        label: 'Site access instructions',
        type: 'textarea',
        required: false,
        placeholder: 'Gate codes, key collection, parking, security...',
      },
      {
        name: 'sensitiveAreas',
        label: 'Any sensitive areas or special requirements?',
        type: 'textarea',
        required: false,
        placeholder: 'Server rooms, labs, confidential areas, allergies...',
      },
    ],
  },

  waste: {
    division: 'waste',
    divisionLabel: 'Waste Management',
    divisionColor: '#1E8C4A',
    introText:
      'Tell us about your waste. We will arrange the right collection, sorting, or disposal service for your site.',
    helperText:
      'We handle general, garden, rubble, event, and commercial waste — plus recycling support.',
    services: [
      'General waste collection',
      'Garden waste removal',
      'Building rubble removal',
      'Office / commercial waste',
      'Event waste cleanup',
      'Recycling support',
      'Bulk waste removal',
      'Other',
    ],
    fields: [
      {
        name: 'wasteType',
        label: 'Type of waste',
        type: 'select',
        required: true,
        options: [
          'General waste',
          'Garden waste',
          'Building rubble',
          'Office / commercial waste',
          'Event waste',
          'Recycling',
          'Bulk waste removal',
          'Other',
        ],
      },
      {
        name: 'serviceRequired',
        label: 'Service required',
        type: 'select',
        required: true,
        options: [
          'Once-off collection',
          'Scheduled collection',
          'Site clean-up',
          'Skip / bin support',
          'Waste sorting / recycling support',
          'Other',
        ],
      },
      {
        name: 'estimatedVolume',
        label: 'Estimated volume',
        type: 'select',
        required: false,
        options: [
          'Small load',
          'Bakkie load',
          'Truck load',
          'Multiple loads',
          'Not sure',
        ],
      },
      {
        name: 'collectionFrequency',
        label: 'Collection frequency',
        type: 'select',
        required: false,
        options: ['Once-off', 'Weekly', 'Monthly', 'As needed'],
      },
      {
        name: 'wasteLocation',
        label: 'Waste location / pickup address',
        type: 'text',
        required: false,
        placeholder: 'If different from your main address above',
      },
      {
        name: 'isPacked',
        label: 'Is the waste already packed or loose?',
        type: 'select',
        required: false,
        options: ['Already packed in bags / bins', 'Loose / piled', 'Mixed'],
      },
      {
        name: 'vehicleAccess',
        label: 'Is vehicle access available?',
        type: 'select',
        required: false,
        options: [
          'Yes, truck can reach easily',
          'Bakkie or small vehicle only',
          'No vehicle access — carry needed',
          'Not sure',
        ],
      },
      {
        name: 'hasHazardous',
        label: 'Are there hazardous or restricted materials?',
        type: 'select',
        required: false,
        options: ['No', 'Yes — please advise', 'Not sure'],
        helperText:
          'If yes, Vyolwetu will confirm whether the material can be handled safely.',
      },
      {
        name: 'preferredDate',
        label: 'Preferred collection date',
        type: 'date',
        required: false,
      },
      {
        name: 'siteInstructions',
        label: 'Special site instructions',
        type: 'textarea',
        required: false,
        placeholder: 'Gate hours, loading bay, contact person on site...',
      },
    ],
  },
}

export const divisionKeys: DivisionId[] = ['construction', 'cleaning', 'waste']

export function getDivisionConfig(division: DivisionId): DivisionFormConfig {
  return divisionFormConfigs[division]
}
