import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Quote = {
  id: string
  name: string
  email: string
  phone: string
  service: 'waste_management' | 'cleaning' | 'construction'
  location: string
  message: string
  status: string
  created_at: string
}

export type Project = {
  id: string
  title: string
  slug: string
  description: string
  division: string
  location: string
  images: string[]
  created_at: string
}

export type CSIInitiative = {
  id: string
  title: string
  description: string
  pillar: 'environment' | 'community' | 'skills'
  image_url: string
  created_at: string
}