import { NextResponse } from 'next/server'
import { writeQuote } from '@/lib/firebase'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, service, location, message, division_details } = body

    if (!name || !phone || !service) {
      return NextResponse.json(
        { error: 'Missing required fields: name, phone, and service are required' },
        { status: 400 }
      )
    }

    const insertPayload: Record<string, unknown> = {
      name,
      email: email || '',
      phone,
      service,
      location: location || '',
      message: message || '',
      status: 'new',
      created_at: new Date().toISOString(),
    }

    if (division_details && typeof division_details === 'object') {
      insertPayload.division_details = division_details
    }

    const result = await writeQuote(insertPayload)

    return NextResponse.json(
      { message: 'Quote request submitted successfully', data: result },
      { status: 200 }
    )
  } catch (error) {
    console.error('Server error:', error)
    const message = error instanceof Error ? error.message : 'Internal server error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
