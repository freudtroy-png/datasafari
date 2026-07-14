export interface Plan {
  id: string
  name: string
  tagline: string
  popular?: boolean
  badge?: string
  weekly: { data: string; price: number; validity: string; barPct: number }
  monthly: { data: string; price: number; validity: string; barPct: number }
  features: string[]
}

export const plans: Plan[] = [
  {
    id: 'light',
    name: 'Light',
    tagline: 'Essential data for short stops',
    weekly: { data: '1', price: 4.99, validity: 'Valid for 7 days', barPct: 20 },
    monthly: { data: '5', price: 9.99, validity: 'Valid for 30 days', barPct: 25 },
    features: ['200+ countries', 'Instant activation', 'Email support'],
  },
  {
    id: 'standard',
    name: 'Standard',
    tagline: 'Best value for most travellers',
    popular: true,
    badge: 'Most popular',
    weekly: { data: '5', price: 12.99, validity: 'Valid for 7 days', barPct: 55 },
    monthly: { data: '15', price: 24.99, validity: 'Valid for 30 days', barPct: 50 },
    features: ['200+ countries', '5G ready', 'Priority support'],
  },
  {
    id: 'unlimited',
    name: 'Unlimited',
    tagline: 'Heavy data, zero worries',
    weekly: { data: '10', price: 22.99, validity: 'Valid for 7 days', barPct: 100 },
    monthly: { data: '\u221e', price: 39.99, validity: 'Valid for 30 days', barPct: 100 },
    features: ['200+ countries', '5G ready', '24/7 support'],
  },
]
