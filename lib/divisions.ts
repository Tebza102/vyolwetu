export type DivisionId = 'construction' | 'cleaning' | 'waste'

export const divisions: Record<
  DivisionId,
  { name: string; badgeSrc: string; accentColor: string }
> = {
  construction: {
    name: 'Construction',
    badgeSrc: '/divisions/construction.png',
    accentColor: '#A86A00',
  },
  cleaning: {
    name: 'Cleaning',
    badgeSrc: '/divisions/cleaning.png',
    accentColor: '#0C8CB5',
  },
  waste: {
    name: 'Waste Management',
    badgeSrc: '/divisions/waste.png',
    accentColor: '#1E8C4A',
  },
}
