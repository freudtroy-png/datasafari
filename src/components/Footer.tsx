import { Link } from 'react-router-dom'
import { Shield, CreditCard } from 'lucide-react'

const sections = [
  {
    title: 'Product',
    links: [
      { label: 'Destinations', href: '/#destinations' },
      { label: 'Plans', href: '/#plans' },
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '/faq' },
      { label: 'Contact Us', href: '/faq' },
      { label: 'Device Compatibility', href: '/how-it-works' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Refund Policy', href: '/refund' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
  },
]

const socials = [
  { label: 'Instagram', icon: 'M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm1.5 6a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0zM12 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm4.5-.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z' },
  { label: 'Facebook', icon: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
  { label: 'Twitter', icon: 'M18.2 2.2h3.3l-7.2 8.3 8.5 11.2h-6.6l-4.7-6.2-5.4 6.2H2.7l7.8-8.8L1.3 2.2h6.8l4.3 5.6zm-1.2 17.5h1.8L7.1 4.1H5.1z' },
  { label: 'LinkedIn', icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z' },
]

export function Footer() {
  return (
    <footer className="bg-ds-ink text-white">
      <div className="wrap py-16">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1.2fr] gap-12 pb-10 border-b border-white/6">
          <div>
            <img src="/assets/icons/datasafari-logo.png" alt="DataSafari" className="h-7 mb-3.5" />
            <p className="text-sm text-white/50 leading-relaxed max-w-xs mb-5">
              Global eSIM connectivity for modern travellers. Fast, affordable data in 200+ countries.
            </p>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-ds-green hover:text-ds-green hover:bg-ds-green/10 transition-all"
                  aria-label={s.label}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                    <path d={s.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white/70">Stay in the loop</h4>
            <p className="text-xs text-white/40 leading-relaxed">
              Get eSIM deals and travel connectivity tips straight to your inbox.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2"
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3.5 py-2.5 rounded-r bg-white/6 border border-white/12 text-white text-xs outline-none focus:border-ds-green transition-colors placeholder:text-white/30"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-r bg-ds-green text-ds-ink text-xs font-semibold hover:bg-ds-lime transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-[11px] text-white/30">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-[12px] font-bold tracking-wider uppercase text-white/50 mb-3.5">
                {section.title}
              </h4>
              <ul className="flex flex-col gap-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/60 hover:text-ds-green transition-all"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 mt-8 pt-5 border-t border-white/6 text-xs text-white/40">
          <span>&copy; {new Date().getFullYear()} DataSafari. All rights reserved.</span>
          <div className="flex gap-4">
            <span className="flex items-center gap-1.5">
              <Shield size={12} /> Secure checkout
            </span>
            <span className="flex items-center gap-1.5">
              <CreditCard size={12} /> Accepted worldwide
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
