import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'mail.vyolwetu.co.za',
  port: Number(process.env.SMTP_PORT) || 465,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || '',
  },
})

const NOTIFY_EMAILS = ['info@vyolwetu.co.za', 'nqobile@vyolwetu.co.za']

function formatDivisionDetails(details: Record<string, unknown>): string {
  const lines: string[] = []
  for (const [key, value] of Object.entries(details)) {
    const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase())
    const val = value ? String(value) : '—'
    lines.push(`<tr><td style="padding:6px 12px;border:1px solid #ddd;font-size:14px;color:#555;">${label}</td><td style="padding:6px 12px;border:1px solid #ddd;font-size:14px;color:#111;">${val}</td></tr>`)
  }
  return lines.join('')
}

export async function sendQuoteEmail(payload: Record<string, unknown>) {
  const name = String(payload.name || '')
  const phone = String(payload.phone || '')
  const email = String(payload.email || '—')
  const service = String(payload.service || '')
  const location = String(payload.location || '—')
  const message = String(payload.message || '—')
  const divisionDetails = payload.division_details as Record<string, unknown> | undefined

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
      <div style="background:#A80000;padding:20px;text-align:center;">
        <h1 style="color:#fff;margin:0;font-size:20px;">New Quote Request</h1>
      </div>
      <div style="padding:24px;background:#f9f9f9;">
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:6px 12px;border:1px solid #ddd;font-size:14px;color:#555;width:140px;">Name</td><td style="padding:6px 12px;border:1px solid #ddd;font-size:14px;color:#111;">${name}</td></tr>
          <tr><td style="padding:6px 12px;border:1px solid #ddd;font-size:14px;color:#555;">Phone</td><td style="padding:6px 12px;border:1px solid #ddd;font-size:14px;color:#111;">${phone}</td></tr>
          <tr><td style="padding:6px 12px;border:1px solid #ddd;font-size:14px;color:#555;">Email</td><td style="padding:6px 12px;border:1px solid #ddd;font-size:14px;color:#111;">${email}</td></tr>
          <tr><td style="padding:6px 12px;border:1px solid #ddd;font-size:14px;color:#555;">Service</td><td style="padding:6px 12px;border:1px solid #ddd;font-size:14px;color:#111;">${service}</td></tr>
          <tr><td style="padding:6px 12px;border:1px solid #ddd;font-size:14px;color:#555;">Location</td><td style="padding:6px 12px;border:1px solid #ddd;font-size:14px;color:#111;">${location}</td></tr>
          <tr><td style="padding:6px 12px;border:1px solid #ddd;font-size:14px;color:#555;">Description</td><td style="padding:6px 12px;border:1px solid #ddd;font-size:14px;color:#111;">${message}</td></tr>
        </table>
        ${divisionDetails ? `
          <h3 style="color:#A80000;margin:24px 0 12px;font-size:15px;">Division Details</h3>
          <table style="width:100%;border-collapse:collapse;">
            ${formatDivisionDetails(divisionDetails as Record<string, unknown>)}
          </table>
        ` : ''}
        <p style="color:#999;font-size:12px;margin-top:24px;text-align:center;">
          Submitted via vyolwetu.co.za quote form
        </p>
      </div>
    </div>
  `

  await transporter.sendMail({
    from: `"Vyolwetu Website" <${process.env.SMTP_USER || 'info@vyolwetu.co.za'}>`,
    to: NOTIFY_EMAILS.join(', '),
    subject: `New Quote Request — ${service} — ${name}`,
    html,
  })
}
