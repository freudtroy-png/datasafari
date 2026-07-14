import { Link } from 'react-router-dom'
import { Globe, Shield, CreditCard } from 'lucide-react'

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
  { label: 'Instagram', icon: null },
  { label: 'Facebook', icon: null },
  { label: 'Twitter', icon: null },
  { label: 'LinkedIn', icon: null },
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
                  <Globe size={14} />
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
