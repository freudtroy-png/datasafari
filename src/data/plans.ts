export interface Plan {
  id: string
  name: string
  tagline: string
  price: number
  period: string
  periodDays: number
  data: string
  features: string[]
  popular?: boolean
  badge?: string
  img: string
}

export const plans: Plan[] = [
  {
    id: 'light',
    name: 'Light',
    tagline: 'Perfect for short trips',
    price: 4.99,
    period: '7 days',
    periodDays: 7,
    data: '1 GB',
    features: ['1 GB data', '4G/5G speeds', 'Instant activation', 'No physical SIM'],
    img: '/assets/destinations/japan.jpg',
  },
  {
    id: 'standard',
    name: 'Standard',
    tagline: 'Best for regular travellers',
    price: 12.99,
    period: '30 days',
    periodDays: 30,
    data: '5 GB',
    features: ['5 GB data', '4G/5G speeds', 'Instant activation', 'No physical SIM', 'Top-up anytime'],
    popular: true,
    badge: 'Most popular',
    img: '/assets/destinations/singapore.jpg',
  },
  {
    id: 'unlimited',
    name: 'Unlimited',
    tagline: 'For heavy data users',
    price: 22.99,
    period: '30 days',
    periodDays: 30,
    data: 'Unlimited',
    features: ['Unlimited data', '4G/5G speeds (Fair use 30 GB)', 'Instant activation', 'No physical SIM', 'Top-up anytime'],
    img: '/assets/destinations/italy.jpg',
  },
]

export interface PlanType {
  name: string
  desc: string
  price: string
  features: string[]
}

export const planTypes: PlanType[] = [
  {
    name: 'Single Destination',
    desc: 'One country, one price',
    price: 'from $3',
    features: ['190+ countries available', '7-30 day validity', 'Local 4G/5G networks'],
  },
  {
    name: 'Multi-Country',
    desc: 'Travel across regions',
    price: 'from $9',
    features: ['Regional coverage', 'Up to 50 countries', 'Shared data pool'],
  },
  {
    name: 'Worldwide',
    desc: 'Global coverage',
    price: 'from $19',
    features: ['200+ countries', 'Single eSIM', 'Best value per GB'],
  },
]
