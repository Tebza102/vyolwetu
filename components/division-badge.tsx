import Image from 'next/image'
import { divisions, type DivisionId } from '@/lib/divisions'

type DivisionBadgeProps = {
  divisionId: DivisionId
  className?: string
}

export function DivisionBadge({ divisionId, className = '' }: DivisionBadgeProps) {
  const division = divisions[divisionId]

  return (
    <div
      className={`absolute top-3 right-3 relative h-11 w-11 md:h-12 md:w-12 rounded-lg bg-white/85 backdrop-blur-[2px] border border-white/90 shadow-sm p-1.5 ${className}`}
      aria-label={`${division.name} division`}
      title={division.name}
    >
      <Image
        src={division.badgeSrc}
        alt={`${division.name} logo`}
        fill
        sizes="48px"
        className="object-contain p-1"
      />
    </div>
  )
}
