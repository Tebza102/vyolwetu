import Image from 'next/image'
import { divisions, type DivisionId } from '@/lib/divisions'

type DivisionHeroIconProps = {
  divisionId: DivisionId
  className?: string
}

export function DivisionHeroIcon({ divisionId, className = '' }: DivisionHeroIconProps) {
  const division = divisions[divisionId]

  return (
    <div
      className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl shadow-sm ${className}`}
      style={{ backgroundColor: division.accentColor + '15' }}
      aria-label={`${division.name} division`}
      title={division.name}
    >
      <div className="relative w-10 h-10 md:w-12 md:h-12">
        <Image
          src={division.badgeSrc}
          alt={`${division.name} logo`}
          fill
          sizes="(max-width: 768px) 40px, 48px"
          className="object-contain"
          priority
        />
      </div>
    </div>
  )
}
