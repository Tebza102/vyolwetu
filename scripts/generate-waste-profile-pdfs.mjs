import { mkdir, copyFile } from 'node:fs/promises'
import path from 'node:path'
import { chromium } from 'playwright'

const projectRoot = process.cwd()
const baseUrl = process.env.PROFILE_BASE_URL ?? 'http://localhost:3000'
const chromePath =
  process.env.CHROME_PATH ??
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'

const publicDirectory = path.join(projectRoot, 'public', 'downloads')
const outputDirectory = path.join(projectRoot, 'output', 'pdf')

const exports = [
  {
    mode: 'digital',
    filename: 'Vyolwetu-Waste-Management-Division-Business-Profile-Digital.pdf',
  },
  {
    mode: 'print',
    filename: 'Vyolwetu-Waste-Management-Division-Business-Profile-Print.pdf',
  },
]

const exportStyles = `
  @page { size: A4; margin: 0; }
  html, body {
    margin: 0 !important;
    padding: 0 !important;
    background: #ffffff !important;
    print-color-adjust: exact !important;
    -webkit-print-color-adjust: exact !important;
  }
  body > header, body > footer, .no-print { display: none !important; }
  body > main, main, .profile-root, .profile-document {
    margin: 0 !important;
    padding: 0 !important;
    max-width: none !important;
  }
  .profile-page {
    width: 210mm !important;
    height: 297mm !important;
    min-height: 297mm !important;
    max-height: 297mm !important;
    overflow: hidden !important;
    break-after: page !important;
    page-break-after: always !important;
    box-shadow: none !important;
  }
  .profile-page:last-child {
    break-after: auto !important;
    page-break-after: auto !important;
  }
  .profile-cta {
    display: inline-flex !important;
    min-height: 3rem !important;
    gap: 0.6rem !important;
    border-radius: 9999px !important;
    align-items: center !important;
    justify-content: center !important;
    padding: 0.75rem 1.5rem !important;
    text-align: center !important;
    font-size: 0.875rem !important;
    font-weight: 700 !important;
    line-height: 1.25rem !important;
  }
`

await mkdir(publicDirectory, { recursive: true })
await mkdir(outputDirectory, { recursive: true })

const browser = await chromium.launch({
  headless: true,
  executablePath: chromePath,
})

try {
  for (const pdfExport of exports) {
    const page = await browser.newPage({ viewport: { width: 794, height: 1123 } })
    await page.goto(`${baseUrl}/waste-management/business-profile`, {
      waitUntil: 'networkidle',
    })
    await page.emulateMedia({ media: 'print' })
    await page.evaluate((mode) => {
      document.documentElement.dataset.profileExport = mode
    }, pdfExport.mode)
    await page.addStyleTag({ content: exportStyles })
    if (pdfExport.mode === 'print') {
      await page.addStyleTag({
        content: '.profile-cta-group { display: none !important; }',
      })
    }

    const publicPath = path.join(publicDirectory, pdfExport.filename)
    await page.pdf({
      path: publicPath,
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: '0', right: '0', bottom: '0', left: '0' },
    })
    await copyFile(publicPath, path.join(outputDirectory, pdfExport.filename))
    await page.close()
    console.log(`Created ${pdfExport.filename}`)
  }
} finally {
  await browser.close()
}
