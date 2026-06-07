# Deployment Log

Record deployment attempts and outcomes.

## Template

### YYYY-MM-DD HH:MM — Deployment Attempt

**Platform:** Vercel/Firebase/Netlify/Render/Railway/Other

**Branch:** branch name

**Commit:** commit hash if available

**Result:** Success/Failed

**Build Command:** command

**Errors:** error summary

**Environment Variables Checked:** Yes/No

**Live URL:** URL if relevant

**Post-Deployment Tests:**
- test result

**Next Action:**
- action

### 2026-06-07 - Broken Website Photos Production Deployment

**Platform:** Vercel

**Branch:** main working tree

**Commit:** Not created because the session could not write `.git/index.lock`

**Result:** Success

**Build Command:** `npx.cmd vercel --prod`

**Errors:** None during Vercel production build. Vercel compiled the Next.js application, completed TypeScript checks, generated all static pages, and deployed successfully.

**Environment Variables Checked:** No changes made

**Live URL:** https://www.vyolwetu.co.za

**Post-Deployment Tests:**
- Vercel production build passed
- All static public routes generated successfully
- Production deployment aliased to the custom domain
- Automated external page requests were blocked by the local session network sandbox

**Next Action:**
- Manually confirm the home, about, cleaning, construction, waste-management, and CSI page photographs on the custom domain.
