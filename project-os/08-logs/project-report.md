# Vyolwetu Website — Comprehensive Project Report

**Date:** 7 June 2026
**Status:** Live (Vercel)
**Version:** 0.1.0
**Repository:** `https://github.com/Tebza102/vyolwetu`
**Live URL:** `https://vyolwetu.vercel.app`

---

## 1. Project Overview

Vyolwetu is a South African integrated services company operating three divisions — Waste Management, Professional Cleaning, and Construction Support & Site Services. The website serves as the company's digital presence, providing information about all three divisions, showcasing community impact through CSI initiatives, and capturing quote requests from potential clients.

The brand promise is **"Passion to Serve"** — the guiding principle reflected throughout the site's content, tone, and visual identity.

### Key Business Facts
- **Phone:** +27 79 751 7507
- **WhatsApp:** `https://wa.me/27797517507`
- **Address:** 55 Maseko Street, Duduza, 1496
- **Emails:** info@vyolwetu.co.za | nqobile@vyolwetu.co.za
- **B-BBEE:** Level 1 contributor
- **Designed by:** Apprigate

---

## 2. Technical Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16.2.3 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 + shadcn/ui |
| UI Components | shadcn/ui (Button, Card, Input, Label, Select, Textarea) |
| Icons | lucide-react 1.8 |
| Backend | Next.js API Route (quote form handler) |
| Database | Supabase (PostgreSQL) |
| Image Storage | Supabase Storage |
| Deployment | Vercel (auto-deploy from `main` branch) |
| Package Manager | npm |
| Routing | File-based (Next.js App Router) |
| Font | Inter (Google Fonts, via next/font) |
| Build Tool | Turbopack |

### Dependencies
```
@base-ui/react, @supabase/supabase-js, class-variance-authority,
clsx, lucide-react, next, react, react-dom, shadcn, tailwind-merge,
tw-animate-css
```

---

## 3. File Structure

```
vyolwetu/
├── app/
│   ├── layout.tsx              # Root layout (metadata, header, footer)
│   ├── page.tsx                # Homepage (client component)
│   ├── globals.css             # Global styles, brand utilities
│   ├── api/quote/route.ts      # Quote form API endpoint
│   ├── about/page.tsx          # About page
│   ├── cleaning/page.tsx       # Cleaning division page
│   ├── construction/page.tsx   # Construction division page
│   ├── contact/page.tsx        # Contact page
│   ├── csi/page.tsx            # CSI & Community page
│   ├── waste-management/page.tsx  # Waste Management division page
│   └── projects/_page.tsx      # Hidden (renamed from page.tsx to disable)
├── components/
│   ├── header.tsx              # Sticky header with nav, contact bar
│   ├── footer.tsx              # Footer with links, contact, CTA
│   └── ui/                     # shadcn UI primitives
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── select.tsx
│       └── textarea.tsx
├── lib/
│   ├── divisions.ts            # Division config (colors, badges)
│   ├── supabase.ts             # Supabase client & TypeScript types
│   └── utils.ts                # cn() utility (clsx + tailwind-merge)
├── public/
│   ├── VyolwetuLogo.png        # Main brand logo (red)
│   ├── VyolwetuFavcon.png      # Favicon (red V mark)
│   └── divisions/
│       ├── logo-waste.png      # Waste Management division logo
│       ├── logo-cleaning.png   # Cleaning division logo
│       └── logo-construction.png # Construction division logo
├── project-os/                 # Project management files (13 folders)
├── next.config.ts              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies and scripts
└── components.json             # shadcn/ui configuration
```

---

## 4. Architecture

### 4.1 Routing

The site uses Next.js App Router with file-based routing. All routes except the API endpoint are statically rendered at build time:

| Route | Page | Type |
|-------|------|------|
| `/` | Homepage | Static |
| `/waste-management` | Waste Management Division | Static |
| `/cleaning` | Cleaning Division | Static |
| `/construction` | Construction Division | Static |
| `/csi` | CSI & Community | Static |
| `/about` | About Us | Static |
| `/contact` | Contact | Static |
| `/api/quote` | Quote Form Handler | Dynamic (POST) |
| `/projects` | **Hidden (404)** | N/A |

### 4.2 Layout Pattern

All pages share a common layout structure:
```
<html>
  <body>
    <Header />       # Sticky, top contact bar, nav, CTA buttons
    <main>           # Flex-1, fills remaining space
      {page content}
    </main>
    <Footer />       # 4-column grid, footer CTA, copyright
  </body>
</html>
```

### 4.3 Key Components

**Header** (`components/header.tsx`)
- Sticky positioning (`sticky top-0 z-50`)
- Red accent bar at very top
- Dark top bar with phone, email, WhatsApp links (desktop only)
- Logo in center
- Desktop: horizontal nav + WhatsApp/Quote buttons
- Mobile: hamburger menu with slide-down nav panel

**Footer** (`components/footer.tsx`)
- 4-column grid: brand info, services, quick links, contact
- Red footer logo (with `img` tag, no CSS filters)
- "Passion to Serve" tagline
- Footer CTA section: "Ready to get started?" with Quote and Call buttons
- Copyright bar with year, privacy/terms links, "Designed by Apprigate"

### 4.4 Supabase Integration

- **Client:** `lib/supabase.ts` — createClient with environment variables
- **Types:** `Quote`, `Project`, `CSIInitiative` TypeScript interfaces
- **API:** `app/api/quote/route.ts` — POST endpoint that inserts form submissions into the `quotes` table
- **Storage:** Images served from `https://hjihzshrycisbfjvyzje.supabase.co/storage/v1/object/public/`

---

## 5. Brand Design System

### 5.1 Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Vyolwetu Red | `#A80000` | Primary brand, CTAs, accent lines, badges |
| Red Hover | `#850000` | Button hover states |
| Red Soft | `#F8EAEA` | Background accents, decorative blobs |
| Parent Charcoal | `#111111` | Hero backgrounds, footer, dark sections |
| Parent Deep Teal | `#0B2F33` | Secondary CTAs, tagline text |
| Parent Slate | `#526669` | Body text, secondary descriptions |
| Light BG | `#F7F7F7` | Alternating section backgrounds |
| Border | `#E8E8E8` | Card borders, dividers |
| Teal | `#334A4F` | Trust block icons |
| Eco Green | `#2F6F5E` | Eco-conscious icon |
| **Construction Orange** | `#A86A00` | Construction division (icons, process circles, bars) |
| **Waste Green** | `#1E8C4A` | Waste Management division |
| **Cleaning Blue** | `#0C8CB5` | Cleaning division |

### 5.2 Typography
- **Font:** Inter (Google Fonts), loaded via `next/font`
- **Headings:** Bold, tracking-tight
- **Body:** Regular weight, `#526669` for readability

### 5.3 Reusable CSS Classes
- `.section-padding` — Responsive padding (3rem mobile, 4.5rem tablet, 6rem desktop)
- `.container` — Max-width 1180px, centered, responsive padding
- `.card-brand` — White card with border, subtle shadow, hover lift
- `.brand-accent-line` — 40px × 3px red rounded pill
- `.brand-curve-top-left` — Gradient radial accent in top-left corner
- `.brand-curve-bottom-right` — Gradient radial accent in bottom-right corner
- `.brand-dots` — Dot pattern background
- `.brand-watermark-v` — Large translucent "V" watermark

---

## 6. Page-by-Page Breakdown

### 6.1 Homepage (`app/page.tsx`)

**Type:** Client Component (uses form state)

**Sections:**
1. **Hero** — Centered Vyolwetu logo, "Passion to Serve" tagline, headline, description, CTAs (Quote, View Division, WhatsApp). Decorative colored circles representing each division.
2. **Trust Strip** — 3 trust points (eco-conscious, 18+ years experience, trusted)
3. **What We Do** — 3 service cards with division logos (Waste/Green, Cleaning/Blue, Construction/Orange). Each links to the respective division page.
4. **What Sets Us Apart** — Left text (client-centric, B-BBEE, eco-conscious) + Right testimonials card
5. **How It Works** — 5-step process (Request → Assessment → Quote → Delivery → Follow-up)
6. **CSI Module** — Left text about "1000 School Bags Campaign" + Right image grid (poster + 2 photos). Links to CSI page.
7. **Quote Form** — Dark section with form (name, email, phone, service, location, message). Submits to `/api/quote` via fetch.

**Key Features:**
- Mobile-first responsive layout
- `useState` form handling with Supabase submission
- Next.js `Image` component with `fill` for optimized images
- Minimum height safety margins on all image containers (`min-h-[200px]`, `min-h-[180px]`, `min-h-[300px]`)

### 6.2 Waste Management Page (`app/waste-management/page.tsx`)

**Type:** Server Component

**10 Sections:**
1. **Hero** — Green division label, headline, description, CTAs
2. **Service Cards** — 10 waste management services in a responsive grid
3. **Who We Serve** — Industry list
4. **Why Choose Us** — 7 reasons with icons
5. **Community & Responsibility** — Text + 2-image grid (Supabase photos)
6. **The Vyolwetu Ecosystem** — 3 cards (Waste, Cleaning, Construction) with colored top bars showing cross-division integration
7. **How We Work** — 5-step process with numbered circles in green
8. **CSI Highlight** — Community impact messaging with link to CSI page
9. **Gallery** — 3 image cards (landscape, `aspect-[4/3]`)
10. **CTA** — Dark section with Quote and Call buttons

**Design:** Green theme (`#1E8C4A`) for icons, process circles, accent bars. Red `#A80000` reserved for primary CTA buttons only.

### 6.3 Cleaning Page (`app/cleaning/page.tsx`)

**Type:** Server Component

**10 Sections:** Same structure as Waste Management but with:
- Blue theme (`#0C8CB5`)
- 10 cleaning-specific services
- 7 cleaning-specific "Why Choose Us" cards
- Cleaning-related community imagery

### 6.4 Construction Page (`app/construction/page.tsx`)

**Type:** Server Component

**10 Sections:** Same structure with:
- Orange theme (`#A86A00`)
- 10 construction services
- 7 construction-specific value propositions
- Construction-related gallery images

### 6.5 CSI Page (`app/csi/page.tsx`)

**Type:** Server Component

**Sections:**
1. **Hero** — Dark background, "CSI & Community" label
2. **1000 School Bags Campaign** — Text left + campaign poster (portrait `aspect-[3/4]`) right
3. **Impact Pillars** — 3 cards (Education, Environment, Community)
4. **Community Gallery** — Images from Supabase storage
5. **Partner With Us** — Text left + image grid (poster spanning 2 rows, 2 photos stacked)
6. **How to Get Involved** — 3-step process
7. **CTA** — Dark section

**Key feature:** The school bag campaign poster is displayed in a portrait-oriented container with `min-h-[300px]` safety margin to ensure full visibility of the campaign details.

### 6.6 About Page (`app/about/page.tsx`)

**Type:** Server Component

**Sections:**
1. **Hero** — Dark background, "Our Story" label
2. **Who We Are** — Text left + 2×2 image grid right (Supabase photos, `aspect-[4/3]`)
3. **Mission & Vision** — 2 side-by-side cards
4. **Our Values** — 4 cards with colored icons (Client-Centric, Quality, People-First, Sustainability)
5. **Community Impact** — Text left + image grid (poster spanning 3 rows, 3 photos stacked right)
6. **CTA** — Dark section

### 6.7 Contact Page (`app/contact/page.tsx`)

**Type:** Server Component

Contact information and a contact form. Details to be expanded.

### 6.8 Projects Page — HIDDEN

The projects page has been disabled by renaming `app/projects/page.tsx` to `_page.tsx`. The route returns a 404. All navigation links (header, footer) and the homepage "Recent Projects" section have been removed.

---

## 7. API & Backend

### 7.1 Quote Form API (`app/api/quote/route.ts`)

- **Method:** POST
- **Input:** `{ name, email, phone, service, location, message }`
- **Processing:** Inserts into Supabase `quotes` table
- **Response:** JSON `{ success: true }` or `{ error: "..." }`

### 7.2 Supabase Database Schema (`supabase-setup.sql`)

Tables:
- `quotes` — Captures form submissions
- `projects` — Project portfolio (currently inactive)
- `csi_initiatives` — CSI initiative records

### 7.3 Supabase Storage

Images are hosted in the `vyolwetu-images` bucket with folders:
- `CSI/` — CSI campaign imagery
- `Cleaning/` — Cleaning division photos
- `Waste Management/` — Waste division photos
- `Construction/` — Construction division photos

All Supabase image URLs are configured in Next.js for optimization via `next/image`.

---

## 8. Deployment

### 8.1 Platform

**Vercel** — Auto-deploys on every push to the `main` branch of `github.com/Tebza102/vyolwetu`.

### 8.2 Build

```
npm run build   # Next.js build with Turbopack
```

### 8.3 Environment Variables (`.env.local`)

```
NEXT_PUBLIC_SUPABASE_URL=https://hjihzshrycisbfjvyzje.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[redacted]
```

---

## 9. Complete Change History

### Current Session (7 June 2026)

| Commit | Description |
|--------|-------------|
| `e97ee50` | Fix: add min-h safety margins to all image containers to prevent mobile collapse |
| `26e35f3` | Fix: mobile image grids — add explicit aspect ratio to poster containers |
| `a58ee79` | Brand refresh: centered hero logo, division logos on service cards, remove division badges, restructure image grids, fix portrait poster cropping, hide projects page, clean up favicon |

**Detailed changes this session:**

1. **Homepage Hero Redesign** — Centered Vyolwetu logo (140px mobile, 180px desktop) with "Passion to Serve" tagline + symmetrical red accent lines. Headline, description, and CTAs centered below. Decorative division-colored circles retained.

2. **Service Cards Updated** — Replaced Supabase photo URLs with division logo images (logo-waste.png, logo-cleaning.png, logo-construction.png). Changed link text from "View Services" to "View Division". Images display with `object-contain` + `p-6` on light background.

3. **Division Badges Removed** — Deleted `components/division-badge.tsx` and `components/division-hero-icon.tsx`. Removed all `<DivisionBadge>` usages from homepage (4 instances), cleaning page (5), waste-management (5), construction (3), projects (1), and CSI page (5).

4. **Image Grid Restructuring:**
   - **Homepage CSI Module:** 3-column → 2-column with poster `row-span-2` left, 2 photos stacked right
   - **CSI Page Partner Grid:** 2×2 mixed → 2-column with poster `row-span-2` left, 2 photos right
   - **About Page Community Grid:** 2×2 square → 2-column with poster `row-span-3` left, 3 photos right (Option A)

5. **Fixed Image Cropping:**
   - School bag campaign poster changed from `aspect-[3/2]` / `aspect-square` → `aspect-[3/4]` (portrait)
   - Division galleries changed from `h-48` (fixed 192px) → `aspect-[4/3]` (proportional)
   - All gallery and project card images now use `aspect-[4/3]` instead of fixed heights

6. **Mobile Image Safety:** Added `min-h` fallbacks to every image container:
   - `min-h-[200px]` for `aspect-[4/3]` (landscape photos)
   - `min-h-[180px]` for `aspect-[3/2]` (wider photos)
   - `min-h-[300px]` for `aspect-[3/4]` (portrait posters)
   This prevents containers from collapsing to 0 height on mobile browsers.

7. **Projects Page Hidden:**
   - Renamed `app/projects/page.tsx` → `_page.tsx` (Next.js ignores, returns 404)
   - Removed "Projects" from header nav and footer quick links
   - Removed "Recent Projects" section from homepage

8. **Favicon Fixed:**
   - Moved from manual `<head>` links to `metadata.icons` (Next.js standard)
   - Removed conflicting `app/favicon.ico` file
   - Favicon: `/VyolwetuFavcon.png` (red V logo mark)

9. **Footer Logo:** Removed `brightness-0 invert` CSS filters — logo now displays in its natural red color on the dark footer background.

### Previous Session (May–June 2026)

| Commit | Description |
|--------|-------------|
| `4adbfeb` | Add division hero icons, footer CTA, homepage division decorative circles |
| `6acb97d` | Rewrite cleaning page: 10 sections, blue/teal palette, ecosystem, 10 services, 7 why-choose cards |
| `c07c730` | Rewrite waste-management page: 10 sections, green division palette, ecosystem, 10 services |
| `eb1e824` | Rewrite construction page: brand narrative, 10 services, ecosystem section, orange construction palette; add division badges and project OS docs |
| `a1ca3f0` | Contain content: add max-width container, tighten gaps, fix typo |
| `a2bf4e1` | Full brand refresh: corporate design, new colors, contact details, hero, footer |
| `a29ba97` | Fix WhatsApp links with country code prefix |
| `2a4ced2` | Optimize homepage images with Next.js Image component |
| `193bb19` | Fix CSI image layout with Next.js Image component |
| `75e7a3d` | Reduce main campaign image size on CSI page |
| `971784e` | Update main campaign image on CSI page |
| `e1110bb` | Update CSI hero image on homepage |
| `2902f06` | Update favicon to new CSI image |
| `e27a782` | Remove icons from Our Services section on homepage |
| `55d9f6e` | Update CSI images on homepage to 3 columns |
| `4d34b36` | Added images to Our Services section |
| `339bc29` | Updated hero image to team2 |

---

## 10. Current State Summary

### What's Live
- 10 static pages + 1 API route
- Full brand design system with division-specific color palettes
- Mobile-responsive with safety margins
- Quote form connected to Supabase
- Red V favicon on all pages

### What's Disabled
- Projects page (`_page.tsx`)
- Projects navigation (header, footer)
- Homepage "Recent Projects" section

### Image Guidelines Applied
- All image containers have explicit aspect ratios with minimum height fallbacks
- Portrait graphics (posters) use `aspect-[3/4]` with `min-h-[300px]`
- Landscape photos use `aspect-[4/3]` with `min-h-[200px]`
- Wider landscape photos use `aspect-[3/2]` with `min-h-[180px]`
- Division logos use `object-contain` with padding on light backgrounds

### Brand Integrity
- No fake certifications, clients, or overclaims
- "Passion to Serve" brand promise consistent across all pages
- Red `#A80000` reserved for primary CTAs only
- Division colors used for division-specific elements

---

## 11. Known Considerations

1. **Projects Page** — Hidden via file rename. To restore: rename `_page.tsx` back to `page.tsx`, re-add nav links.
2. **Supabase Image URLs** — Filenames contain spaces and special characters (e.g., `WhatsApp Image 2026-03-02 at 12.37.08 PM.jpeg`). These are URL-encoded by Next.js. If storage paths are reorganized, all image references must be updated across all pages.
3. **Division Logos** — Full division logos with text exist at `public/divisions/extracted/` and their cleaned copies at `public/divisions/logo-*.png`.
4. **Contact Page** — Content currently minimal. May need expansion.
5. **Privacy Policy / Terms of Service** — Linked in footer but pages do not yet exist (`href="#"`).

---

## 12. File Count Summary

| Category | Files |
|----------|-------|
| Pages (app/) | 11 |
| API Routes | 1 |
| Components | 8 |
| Library Utilities | 3 |
| Config Files | 7 |
| Public Assets | 5+ |
| **Total Source** | **~35 files** |
