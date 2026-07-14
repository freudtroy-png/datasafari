export interface FAQItem {
  q: string
  a: string
  category: string
}

export const faqCategories = [
  { id: 'all', label: 'All', count: 14 },
  { id: 'getting-started', label: 'Getting Started', count: 3 },
  { id: 'plans', label: 'Plans & Billing', count: 4 },
  { id: 'installation', label: 'Installation', count: 3 },
  { id: 'compatibility', label: 'Compatibility', count: 2 },
  { id: 'troubleshooting', label: 'Troubleshooting', count: 2 },
] as const

export const faqData: FAQItem[] = [
  {
    category: 'getting-started',
    q: 'What is an eSIM?',
    a: 'An eSIM (embedded SIM) is a digital SIM that lets you activate a cellular plan from your carrier without using a physical SIM card. It works exactly like a regular SIM but is built into your device. With DataSafari, you can buy, download, and activate data plans entirely online — no waiting for a physical card to arrive.',
  },
  {
    category: 'getting-started',
    q: 'How does DataSafari work?',
    a: 'Browse destinations, choose a plan that fits your trip, purchase online, and receive your eSIM instantly via email. Install it by scanning a QR code or entering details manually. Activate when you arrive — your data plan starts immediately on the local network.',
  },
  {
    category: 'getting-started',
    q: 'How long does activation take?',
    a: 'Purchase takes under a minute. Installation takes another 2 minutes by scanning the QR code. Once you arrive at your destination, enable the eSIM line and you are connected. Average time from purchase to connected: under 3 minutes.',
  },
  {
    category: 'plans',
    q: 'What happens when I run out of data?',
    a: 'You can top up your existing eSIM anytime from your account. Top-ups start from $2.50. Your unused data never expires as long as you top up within 30 days of your plan ending.',
  },
  {
    category: 'plans',
    q: 'Can I get a refund?',
    a: 'Yes. If you have not installed or activated your eSIM, you are eligible for a full refund within 30 days of purchase. If you have installed but not used any data, contact support for a one-time courtesy refund.',
  },
  {
    category: 'plans',
    q: 'Do eSIMs have phone numbers?',
    a: 'Most DataSafari plans are data-only and do not include a phone number. You can still use messaging apps (WhatsApp, iMessage, Telegram) over data. Some global plans include a virtual number for calls and SMS.',
  },
  {
    category: 'plans',
    q: 'Can I keep my home SIM active?',
    a: 'Yes. Most modern phones support dual SIM — keep your home SIM active for calls/SMS and use DataSafari eSIM for data. Just set the eSIM as your primary data line in settings.',
  },
  {
    category: 'installation',
    q: 'How do I install my eSIM?',
    a: 'After purchase, you will receive a QR code. Go to Settings > Cellular > Add eSIM on iPhone, or Settings > Connections > SIM Manager on Android. Scan the QR code and follow the prompts. The whole process takes about 2 minutes.',
  },
  {
    category: 'installation',
    q: 'Should I install before or after my trip?',
    a: 'Install before you travel (while you have WiFi) so everything is ready when you land. The eSIM only activates when it detects the local network at your destination — installing early does not start your plan.',
  },
  {
    category: 'installation',
    q: 'Can I use the same eSIM on multiple devices?',
    a: 'Each eSIM is tied to one device. If you switch phones, you will need a new eSIM. However, you can have active eSIMs on both a phone and a tablet if you purchase separate plans.',
  },
  {
    category: 'compatibility',
    q: 'Is my phone compatible?',
    a: 'Most phones released after 2020 support eSIM. This includes iPhone XS and newer, Google Pixel 4 and newer, Samsung Galaxy S20 and newer, and most recent mid-range Android devices. Check your phone settings for "Add eSIM" or "SIM Manager" to confirm.',
  },
  {
    category: 'compatibility',
    q: 'Can I use eSIM on a locked phone?',
    a: 'Your phone must be carrier-unlocked to use a DataSafari eSIM. If your phone is locked to a specific carrier, you will need to contact them to unlock it before using our service.',
  },
  {
    category: 'troubleshooting',
    q: 'My eSIM is not working. What should I do?',
    a: 'First, ensure you are in a supported country and have enabled the eSIM line in your phone settings. Try restarting your phone. If the issue persists, go to Settings > Cellular and toggle your eSIM off and on. Still stuck? Contact our 24/7 support via live chat.',
  },
  {
    category: 'troubleshooting',
    q: 'My speeds are slower than expected. Why?',
    a: 'Speeds depend on local network conditions, time of day, and your plan tier. Most DataSafari plans connect to 4G/LTE and 5G networks where available. If speeds are consistently slow, try switching your phone to a different network operator in your settings.',
  },
]
