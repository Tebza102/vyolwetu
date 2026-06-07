import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, service, location, message, division_details } = body

    // ── Common required fields ──
    if (!name || !phone || !service) {
      return NextResponse.json(
        { error: 'Missing required fields: name, phone, and service are required' },
        { status: 400 }
      )
    }

    // ── Build insert payload ──
    const insertPayload: Record<string, unknown> = {
      name,
      email: email || '',
      phone,
      service,
      location: location || '',
      message: message || '',
      status: 'new',
    }

    // ── Add division_details if present (new format) ──
    if (division_details && typeof division_details === 'object') {
      insertPayload.division_details = division_details
    }

    const { data, error } = await supabase
      .from('quotes')
      .insert([insertPayload])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Quote request submitted successfully', data },
      { status: 200 }
    )
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
