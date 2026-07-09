'use client'

import { Download, Printer } from 'lucide-react'

const downloads = [
  {
    href: '/downloads/Vyolwetu-Cleaning-Division-Business-Profile-Digital.pdf',
    label: 'Download Digital Profile',
    icon: Download,
  },
  {
    href: '/downloads/Vyolwetu-Cleaning-Division-Business-Profile-Print.pdf',
    label: 'Download Print Profile',
    icon: Printer,
  },
] as const

export function ProfileDownloadButtons() {
  return (
    <div className="flex flex-col gap-2 sm:flex-row">
      {downloads.map(({ href, label, icon: Icon }, index) => (
        <a
          key={href}
          href={href}
          download
          className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold shadow-lg transition focus-visible:outline-2 focus-visible:outline-offset-2 ${
            index === 0
              ? 'bg-[#A80000] text-white hover:bg-[#850000] focus-visible:outline-[#A80000]'
              : 'border-2 border-[#0C8CB5] bg-white text-[#0C8CB5] hover:bg-[#F0F9FF] focus-visible:outline-[#0C8CB5]'
          }`}
        >
          <Icon aria-hidden="true" className="size-4" />
          {label}
        </a>
      ))}
    </div>
  )
}
