const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || ''
const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY || ''

const FIRESTORE_BASE = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents`

function toFirestoreValue(value: unknown): unknown {
  if (value === null || value === undefined) return { nullValue: null }
  if (typeof value === 'string') return { stringValue: value }
  if (typeof value === 'number') return { integerValue: Math.floor(value).toString() }
  if (typeof value === 'boolean') return { booleanValue: value }
  if (Array.isArray(value)) return { arrayValue: { values: value.map(toFirestoreValue) } }
  if (typeof value === 'object') {
    const fields: Record<string, unknown> = {}
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      fields[k] = toFirestoreValue(v)
    }
    return { mapValue: { fields } }
  }
  return { stringValue: String(value) }
}

export async function writeQuote(payload: Record<string, unknown>) {
  if (!projectId || !apiKey) {
    throw new Error('Firebase configuration missing: check NEXT_PUBLIC_FIREBASE_PROJECT_ID and NEXT_PUBLIC_FIREBASE_API_KEY')
  }

  const fields: Record<string, unknown> = {}
  for (const [key, value] of Object.entries(payload)) {
    fields[key] = toFirestoreValue(value)
  }

  const document = { fields }

  const url = `${FIRESTORE_BASE}/quotes?key=${apiKey}`
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(document),
  })

  if (!response.ok) {
    const errorBody = await response.text()
    throw new Error(`Firestore error (${response.status}): ${errorBody}`)
  }

  const result = await response.json()
  const docId = result.name?.split('/').pop() || 'unknown'

  return { id: docId, createTime: result.createTime }
}
