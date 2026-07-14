import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, MessageCircle, Mail, Globe, HeadphonesIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { faqData, faqCategories } from '@/data/faq'

const ease = [0.16, 1, 0.3, 1] as const

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' as const },
  transition: { duration: 0.6, ease },
}

export function FAQ() {
  const [activeCat, setActiveCat] = useState('all')
  const [search, setSearch] = useState('')

  const filtered = faqData.filter((item) => {
    const matchCat = activeCat === 'all' || item.category === activeCat
    const matchSearch = search === '' || item.q.toLowerCase().includes(search.toLowerCase()) || item.a.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <>
      <section className="pt-32 pb-16 bg-ds-ink text-white">
        <div className="wrap">
          <motion.div {...fadeUp} className="text-center max-w-[640px] mx-auto">
            <Badge variant="invert"><HeadphonesIcon size={13} /> Help Center</Badge>
            <h1 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-tight leading-[1.08] mt-4 mb-3">
              How can we help?
            </h1>
            <div className="flex max-w-[480px] mx-auto bg-white/12 backdrop-blur-xl border border-white/15 rounded-full p-1.5 mt-6 mb-6">
              <Search size={16} className="ml-4 text-white/40 shrink-0 self-center" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 bg-transparent border-none px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/40 font-sans"
              />
            </div>
            <div className="flex items-center justify-center gap-6 text-xs text-white/50">
              <span><strong className="text-white font-bold">4.9</strong> rating</span>
              <span className="w-px h-4 bg-white/10" />
              <span>Avg. reply <strong className="text-white font-bold">&lt;2 min</strong></span>
              <span className="w-px h-4 bg-white/10" />
              <span><strong className="text-white font-bold">24/7</strong> support</span>
              <span className="w-px h-4 bg-white/10" />
              <span><strong className="text-white font-bold">Money-back</strong> guarantee</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-6 bg-white border-b border-ds-line sticky top-0 z-30">
        <div className="wrap overflow-x-auto scrollbar-none">
          <div className="flex gap-2">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCat(cat.id)}
                className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeCat === cat.id
                    ? 'bg-ds-green/10 text-ds-green-dark border border-ds-green/30'
                    : 'bg-transparent text-ds-muted border border-ds-line hover:border-ds-green/30'
                }`}
              >
                {cat.label} ({cat.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="wrap max-w-[700px]">
          {filtered.length === 0 ? (
            <p className="text-center text-ds-muted py-12">No results found. Try a different search term.</p>
          ) : (
            <div className="space-y-2.5">
              {filtered.map((item, i) => (
                <FAQAccordion key={item.q + i} item={item} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-ds-wash">
        <div className="wrap">
          <motion.div {...fadeUp} className="text-center max-w-[500px] mx-auto">
            <h2 className="text-2xl font-extrabold text-ds-ink mb-3">Still need help?</h2>
            <p className="text-sm text-ds-muted mb-8">Our support team is available 24/7 and replies in under 2 minutes.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="primary" className="gap-2">
                <MessageCircle size={16} /> Live Chat
              </Button>
              <Button variant="outline" className="gap-2">
                <Mail size={16} /> Email
              </Button>
              <Button variant="outline" className="gap-2">
                <Globe size={16} /> WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

function FAQAccordion({ item, index }: { item: { q: string; a: string; category: string }; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03 }}
      className="border border-ds-line rounded-r2 overflow-hidden hover:border-ds-green/30 transition-colors"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-[18px] text-left text-sm font-semibold text-ds-ink hover:text-ds-green-dark transition-colors"
      >
        {item.q}
        <span className={`shrink-0 text-ds-muted transition-transform duration-300 ${open ? 'rotate-45 text-ds-green' : ''}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </span>
      </button>
      <div
        className={`px-5 overflow-hidden transition-all duration-300 ease-[cubic-bezier(.16,1,.3,1)] ${
          open ? 'max-h-[400px] pb-[18px]' : 'max-h-0'
        }`}
      >
        <p className="text-sm text-ds-muted leading-relaxed">{item.a}</p>
      </div>
    </motion.div>
  )
}
