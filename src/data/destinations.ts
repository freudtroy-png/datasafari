export interface Destination {
  code: string
  name: string
  speed: string
  price: string
  img: string
}

export const destinations: Destination[] = [
  { code: 'JP', name: 'Japan', speed: '5G', price: 'from $5', img: '/assets/destinations/japan.jpg' },
  { code: 'GB', name: 'UK', speed: '5G', price: 'from $4', img: '/assets/destinations/uk.jpg' },
  { code: 'AE', name: 'UAE', speed: '5G', price: 'from $5', img: '/assets/destinations/uae.jpg' },
  { code: 'TH', name: 'Thailand', speed: '4G', price: 'from $3', img: '/assets/destinations/thailand.jpg' },
  { code: 'US', name: 'USA', speed: '5G', price: 'from $6', img: '/assets/destinations/usa.jpg' },
  { code: 'AU', name: 'Australia', speed: '5G', price: 'from $5', img: '/assets/destinations/australia.jpg' },
  { code: 'FR', name: 'France', speed: '5G', price: 'from $4', img: '/assets/destinations/france.jpg' },
  { code: 'SG', name: 'Singapore', speed: '5G', price: 'from $4', img: '/assets/destinations/singapore.jpg' },
  { code: 'IT', name: 'Italy', speed: '5G', price: 'from $4', img: '/assets/destinations/italy.jpg' },
  { code: 'KR', name: 'Korea', speed: '5G', price: 'from $4', img: '/assets/destinations/korea.jpg' },
  { code: 'DE', name: 'Germany', speed: '5G', price: 'from $4', img: '/assets/destinations/germany.jpg' },
  { code: 'ES', name: 'Spain', speed: '5G', price: 'from $4', img: '/assets/destinations/spain.jpg' },
  { code: 'IN', name: 'India', speed: '4G', price: 'from $3', img: '/assets/destinations/india.jpg' },
  { code: 'CA', name: 'Canada', speed: '5G', price: 'from $5', img: '/assets/destinations/canada.jpg' },
  { code: 'BR', name: 'Brazil', speed: '4G', price: 'from $4', img: '/assets/destinations/brazil.jpg' },
  { code: 'MX', name: 'Mexico', speed: '4G', price: 'from $3', img: '/assets/destinations/mexico.jpg' },
  { code: 'EG', name: 'Egypt', speed: '4G', price: 'from $4', img: '/assets/destinations/egypt.jpg' },
  { code: 'ZA', name: 'South Africa', speed: '4G', price: 'from $4', img: '/assets/destinations/southafrica.jpg' },
  { code: 'KE', name: 'Kenya', speed: '4G', price: 'from $4', img: '/assets/destinations/kenya.jpg' },
  { code: 'TZ', name: 'Tanzania', speed: '4G', price: 'from $4', img: '/assets/destinations/tanzania.jpg' },
]

export const regions = ['All', 'Europe', 'Asia', 'Americas', 'Africa', 'Middle East', 'Oceania'] as const

export const regionMap: Record<string, string[]> = {
  Europe: ['GB', 'FR', 'IT', 'DE', 'ES'],
  Asia: ['JP', 'KR', 'TH', 'IN', 'SG'],
  Americas: ['US', 'CA', 'BR', 'MX'],
  Africa: ['ZA', 'EG', 'KE', 'TZ'],
  'Middle East': ['AE'],
  Oceania: ['AU'],
}
