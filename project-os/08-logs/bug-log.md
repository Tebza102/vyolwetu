# Bug Log

Record bugs, symptoms, hypotheses, evidence, and fixes.

## Bug Investigation Template

### Bug ID
BUG-YYYYMMDD-001

### Title
Short bug title.

### Status
Open / Investigating / Fix planned / Fixed / Won't fix

### Severity
Low / Medium / High / Critical

### Area
Frontend / Backend / Auth / Database / Deployment / UI / API / Integration / Other

### Observed Behavior
What actually happened.

### Expected Behavior
What should happen.

### Steps to Reproduce
1. Step one
2. Step two
3. Step three

### Evidence
Error messages, screenshots, logs, file references, test results.

### Suspected Cause
Hypothesis before fixing.

### Related Files
- file path

### Attempt History
Record each fix attempt and result.

### Recommended Next Step
What should happen next.

## BUG-20260607-001

### Title
Website content photos render as empty alt-text placeholders

### Status
Fixed

### Severity
High

### Area
Frontend / Storage

### Observed Behavior
Content photos across the home, about, division, CSI, and hidden projects pages did not render. Only the image alt text appeared.

### Evidence
- Every content photo depended on `hjihzshrycisbfjvyzje.supabase.co`.
- DNS lookup and direct HTTP requests failed because the Supabase hostname no longer resolves.
- Local logos and division assets continued to work.

### Root Cause
The site used a deleted, paused, renamed, or otherwise unavailable Supabase project as its only runtime source for content photography.

### Fix
- Recovered the ten original Vyolwetu photos from the Next.js image cache.
- Stored them under `public/images`.
- Replaced all dead Supabase storage URLs with local image paths.
- Removed the dead remote image pattern from Next.js configuration.
- Pinned the Next.js project root so the parent lockfile is no longer selected for build tracing.

### Verification
- All ten recovered WebP files decoded successfully and were visually inspected.
- No dead Supabase storage URLs remain in application source.
- ESLint completed with 0 errors and 7 pre-existing warnings.
- Production compilation reached the Google Fonts download step; the remaining build failure is restricted-network access to `fonts.googleapis.com`.
- Full local browser rendering remains blocked by a separate pre-existing Tailwind resolution conflict with `C:\Users\appri`.

### Related Files
- `app/page.tsx`
- `app/about/page.tsx`
- `app/cleaning/page.tsx`
- `app/construction/page.tsx`
- `app/waste-management/page.tsx`
- `app/csi/page.tsx`
- `app/projects/_page.tsx`
- `next.config.ts`
- `public/images/*`
