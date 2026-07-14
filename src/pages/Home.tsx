import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Wifi, Zap, Shield, Globe, HeadphonesIcon, ThumbsUp, Star, Download, CheckCircle2, Leaf, ArrowRight, HelpCircle } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { destinations, regions } from '@/data/destinations'
import { plans } from '@/data/plans'
import { faqData } from '@/data/faq'

const ease = [0.16, 1, 0.3, 1] as const

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' as const },
  transition: { duration: 0.6, ease },
}

const features = [
  { icon: Globe, title: 'Global coverage', desc: '200+ countries, local 4G/5G networks. No roaming agreements to worry about.' },
  { icon: Zap, title: 'Instant activation', desc: 'Buy, install, and connect in under 3 minutes. No queues, no paperwork.' },
  { icon: Shield, title: 'No hidden fees', desc: 'What you see is what you pay. No surprise charges, no fine print.' },
  { icon: Wifi, title: 'Dual SIM ready', desc: 'Keep your home number active while using our data. Two lines, one phone.' },
  { icon: HeadphonesIcon, title: '24/7 support', desc: 'Real humans, real fast. Average reply time under 2 minutes.' },
  { icon: ThumbsUp, title: 'Save up to 85%', desc: 'Compared to standard roaming rates. From $3 for 1 GB.' },
]

const testimonials = [
  { name: 'Priya S.', role: 'Frequent traveller', text: 'Game changer for my quarterly Asia trips. Installed at the gate, connected on landing. No SIM hunting.', img: '/assets/testimonials/person1.jpg', rating: 5 },
  { name: 'Michael A.', role: 'Digital nomad', text: 'Been using DataSafari across 12 countries this year. Speeds are consistently good, support is fast.', img: '/assets/testimonials/person4.jpg', rating: 5 },
  { name: 'David K.', role: 'Business consultant', text: 'Dual SIM is clutch. I keep my work number live while using DataSafari data abroad. Seamless.', img: '/assets/testimonials/person6.jpg', rating: 5 },
  { name: 'Sophie R.', role: 'Backpacker', text: 'The 30-day unlimited plan got me through Southeast Asia without a single top-up. Incredible value.', img: '/assets/testimonials/person5.jpg', rating: 5 },
  { name: 'James O.', role: 'Pilot', text: 'Coverage in over 190 countries means I rarely need to think about connectivity. It just works.', img: '/assets/testimonials/person2.jpg', rating: 5 },
  { name: 'Aisha W.', role: 'Student abroad', text: 'Cheaper than my home country plan. Installing took 2 minutes in the airport lounge before my flight.', img: '/assets/testimonials/person3.jpg', rating: 5 },
]

export function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeRegion, setActiveRegion] = useState('All')
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [planToggle, setPlanToggle] = useState<'7' | '30'>('7')

  const filtered = destinations.filter(
    (d) => activeRegion === 'All' || d.name.toLowerCase().includes(activeRegion.toLowerCase())
  ).filter((d) => d.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/assets/hero/plane-hero.jpg" alt="" className="w-full h-full object-cover brightness-[0.4]" />
          <div className="absolute inset-0 bg-gradient-to-br from-ds-ink/75 via-ds-ink/40 to-transparent" />
        </div>
        <div className="wrap relative z-10 pt-32 pb-20 text-center max-w-[720px]">
          <motion.div {...fadeUp}>
            <Badge variant="invert" className="mb-5">
              <Wifi size={13} /> 190+ countries
            </Badge>
            <h1 className="text-[clamp(36px,5.5vw,72px)] font-extrabold tracking-tighter leading-[1.05] text-white mb-5">
              Travel with data,<br />not <span className="text-ds-green">roaming bills</span>.
            </h1>
            <p className="text-[clamp(16px,1.2vw,19px)] leading-relaxed text-white/65 max-w-[560px] mx-auto mb-8">
              Instant eSIM data in over 190 countries. No physical SIM, no hidden fees. Save up to 85% on roaming.
            </p>
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.1, duration: 0.6, ease }}>
            <div className="flex max-w-[520px] mx-auto bg-white/12 backdrop-blur-xl border border-white/15 rounded-full p-1.5 mb-8">
              <input
                type="text"
                placeholder="Search your destination..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent border-none px-5 py-2.5 text-sm text-white outline-none placeholder:text-white/40 font-sans"
              />
              <Button variant="primary" size="default" className="rounded-full shrink-0">
                <Search size={14} /> Search plans
              </Button>
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.2, duration: 0.6, ease }}>
            <div className="flex gap-2 justify-center flex-wrap mb-10">
              {['USA', 'Europe', 'Japan', 'Thailand', 'UK', 'Australia'].map((tag) => (
                <span key={tag} className="px-3.5 py-1.5 rounded-full border border-white/12 text-xs text-white/55 hover:border-white/25 hover:text-white transition-all cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.3, duration: 0.6, ease }}>
            <div className="flex gap-3 justify-center flex-wrap">
              <a href="#plans">
                <Button variant="primary" size="lg">Get your eSIM</Button>
              </a>
              <a href="/how-it-works">
                <Button variant="outline" size="lg" className="text-white border-white/25 hover:border-white hover:bg-white/6">How it works</Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-b border-ds-line py-5 overflow-hidden">
        <div className="wrap">
          <div className="flex items-center justify-center gap-7 overflow-x-auto scrollbar-none">
            {[
              { icon: ThumbsUp, text: '50,000+ happy travellers' },
              { icon: Star, text: '4.9 on Trustpilot' },
              { icon: Shield, text: 'Money-back guarantee' },
              { icon: HeadphonesIcon, text: '24/7 support' },
              { icon: Globe, text: '190+ countries' },
              { icon: Zap, text: '3 min activation' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2.5 text-xs text-ds-muted shrink-0">
                <item.icon size={16} className="text-ds-green shrink-0" />
                <span>
                  <strong className="text-ds-ink font-bold">{item.text.split(' ')[0]}</strong>
                  {item.text.slice(item.text.split(' ')[0].length)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section id="destinations" className="py-20 md:py-24">
        <div className="wrap">
          <motion.div {...fadeUp} className="text-center max-w-[640px] mx-auto mb-10">
            <Badge><Globe size={13} /> 200+ destinations</Badge>
            <h2 className="text-[clamp(28px,3.2vw,44px)] font-extrabold tracking-tight text-ds-ink leading-[1.12] mt-3 mb-3">
              Wherever you are headed,<br />we are already there.
            </h2>
            <p className="text-ds-muted leading-relaxed">Instant eSIM coverage across every continent. Local speeds, no roaming, from $3.</p>
          </motion.div>

          <motion.div {...fadeUp} className="flex gap-2 justify-center flex-wrap mb-8">
            {regions.map((r) => (
              <button
                key={r}
                onClick={() => setActiveRegion(r)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeRegion === r
                    ? 'bg-ds-green/10 text-ds-green-dark border border-ds-green/30'
                    : 'bg-transparent text-ds-muted border border-ds-line hover:border-ds-green/30'
                }`}
              >
                {r === 'All' ? 'All Regions' : r}
              </button>
            ))}
          </motion.div>

          <motion.div {...fadeUp} className="relative max-w-[400px] mx-auto mb-7">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ds-muted pointer-events-none" />
            <input
              type="text"
              placeholder="Search countries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-ds-line rounded-r2 text-sm outline-none focus:border-ds-green transition-colors font-sans"
            />
          </motion.div>

          <motion.div {...fadeUp} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5">
            {filtered.map((d) => (
              <Card key={d.code} className="p-3 flex items-center gap-2.5 cursor-pointer hover:border-ds-green/30 hover:bg-ds-wash transition-all">
                <span className="text-2xl shrink-0 w-10 text-center">{'🌍'}</span>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-semibold text-ds-ink">{d.name}</div>
                  <div className="text-xs text-ds-muted">{d.speed} &middot; {d.price}</div>
                </div>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-20 md:py-24 bg-white">
        <div className="wrap">
          <motion.div {...fadeUp} className="text-center max-w-[560px] mx-auto mb-14">
            <Badge><Download size={13} /> Simple setup</Badge>
            <h2 className="text-[clamp(28px,3.2vw,44px)] font-extrabold tracking-tight text-ds-ink leading-[1.12] mt-3 mb-3">
              Three minutes to connected.
            </h2>
            <p className="text-ds-muted leading-relaxed">No queues, no paperwork, no physical SIM card needed.</p>
          </motion.div>
          <div className="max-w-[600px] mx-auto">
            {[
              { num: '01', title: 'Pick your plan', desc: 'Browse 200+ destinations, choose your data, and check out in seconds.' },
              { num: '02', title: 'Install your eSIM', desc: 'Receive your QR code instantly. Scan it from your phone settings — takes 2 minutes.' },
              { num: '03', title: 'Arrive & connect', desc: 'Turn on your eSIM line when you land. You are on the local network immediately.' },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                {...fadeUp}
                transition={{ delay: i * 0.1, duration: 0.5, ease }}
                className="flex gap-5 py-6 border-t border-ds-line first:border-t-0 first:pt-0 last:pb-0"
              >
                <span className="text-xs font-bold text-ds-green w-8 shrink-0 pt-0.5 tracking-wide">{step.num}</span>
                <div>
                  <h3 className="text-lg font-bold text-ds-ink mb-1.5">{step.title}</h3>
                  <p className="text-sm text-ds-muted leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 md:py-24 bg-ds-wash">
        <div className="wrap">
          <motion.div {...fadeUp} className="text-center max-w-[640px] mx-auto mb-10">
            <Badge><Zap size={13} /> Why DataSafari</Badge>
            <h2 className="text-[clamp(28px,3.2vw,44px)] font-extrabold tracking-tight text-ds-ink leading-[1.12] mt-3 mb-3">
              Built for travellers, by people who travel.
            </h2>
          </motion.div>
          <motion.div {...fadeUp} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <Card key={f.title} className="p-6 hover:border-ds-green/30 hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className="w-11 h-11 rounded-r bg-ds-green/10 text-ds-green flex items-center justify-center mb-4">
                  <f.icon size={20} />
                </div>
                <h3 className="text-base font-bold text-ds-ink mb-1.5">{f.title}</h3>
                <p className="text-sm text-ds-muted leading-relaxed">{f.desc}</p>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PLANS */}
      <section id="plans" className="py-20 md:py-24 bg-white">
        <div className="wrap">
          <motion.div {...fadeUp} className="text-center max-w-[640px] mx-auto mb-10">
            <Badge><Zap size={13} /> Simple pricing</Badge>
            <h2 className="text-[clamp(28px,3.2vw,44px)] font-extrabold tracking-tight text-ds-ink leading-[1.12] mt-3 mb-3">
              Plans that fit your trip.
            </h2>
            <p className="text-ds-muted leading-relaxed">No contracts. No hidden fees. Cancel anytime.</p>
          </motion.div>

          <motion.div {...fadeUp} className="flex justify-center mb-8">
            <div className="inline-flex bg-ds-wash rounded-full p-1 relative">
              <div
                className="absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-white shadow-sm transition-transform duration-300 ease-[cubic-bezier(.34,1.56,.64,1)]"
                style={{ transform: planToggle === '30' ? 'translateX(100%)' : 'translateX(0)' }}
              />
              {(['7', '30'] as const).map((d) => (
                <button
                  key={d}
                  onClick={() => setPlanToggle(d)}
                  className={`px-7 py-2.5 rounded-full text-sm font-semibold relative z-10 transition-colors ${
                    planToggle === d ? 'text-ds-ink' : 'text-ds-muted'
                  }`}
                >
                  {d}-day plans
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[900px] mx-auto">
            {plans.map((plan) => (
              <Card key={plan.id} className={`relative overflow-hidden ${plan.popular ? 'border-ds-green shadow-[0_0_0_1px_#01db5d,0_4px_20px_rgba(15,23,42,.08)]' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-ds-green text-ds-ink text-[11px] font-bold px-4 py-1 rounded-b-r z-10">
                    Most popular
                  </div>
                )}
                <div className="h-[100px] overflow-hidden bg-ds-wash relative">
                  <img src={plan.img} alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ds-ink/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-ds-ink">{plan.name}</h3>
                  <p className="text-xs text-ds-muted mb-1">{plan.tagline}</p>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-3xl font-extrabold text-ds-ink tracking-tight">${plan.price}</span>
                    <span className="text-sm text-ds-muted font-medium">USD</span>
                  </div>
                  <p className="text-xs text-ds-muted mb-4">{plan.data} &middot; {plan.period}</p>
                  <ul className="space-y-2 mb-5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-ds-body">
                        <CheckCircle2 size={14} className="text-ds-green shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button variant={plan.popular ? 'primary' : 'outline'} className="w-full">
                    Get {plan.name}
                  </Button>
                </div>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="reviews" className="py-20 md:py-24 bg-ds-wash">
        <div className="wrap">
          <motion.div {...fadeUp} className="text-center max-w-[640px] mx-auto mb-10">
            <Badge><Star size={13} /> 4.9 on Trustpilot</Badge>
            <h2 className="text-[clamp(28px,3.2vw,44px)] font-extrabold tracking-tight text-ds-ink leading-[1.12] mt-3 mb-3">
              Loved by travellers.
            </h2>
          </motion.div>
          <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <Card key={t.name} className="p-5 hover:border-ds-green/30 hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className="flex items-center gap-3 mb-3.5">
                  <div className="w-11 h-11 rounded-full overflow-hidden bg-ds-wash shrink-0">
                    <img src={t.img} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-semibold text-ds-ink">{t.name}</div>
                    <div className="text-xs text-ds-muted">{t.role}</div>
                  </div>
                  <div className="flex gap-0.5 text-ds-green shrink-0">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={12} />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-ds-body leading-relaxed">"{t.text}"</p>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-24 bg-white">
        <div className="wrap max-w-[700px]">
          <motion.div {...fadeUp} className="text-center mb-10">
            <Badge><HelpCircle size={13} /> FAQ</Badge>
            <h2 className="text-[clamp(28px,3.2vw,44px)] font-extrabold tracking-tight text-ds-ink leading-[1.12] mt-3 mb-3">
              Got questions?
            </h2>
          </motion.div>
          <motion.div {...fadeUp} className="space-y-2.5">
            {faqData.slice(0, 4).map((item, i) => (
              <div key={i} className="border border-ds-line rounded-r2 overflow-hidden hover:border-ds-green/30 transition-colors">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-[18px] text-left text-sm font-semibold text-ds-ink hover:text-ds-green-dark transition-colors"
                >
                  {item.q}
                  <span className={`shrink-0 text-ds-muted transition-transform duration-300 ${openFaq === i ? 'rotate-45 text-ds-green' : ''}`}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  </span>
                </button>
                <div
                  className={`px-5 overflow-hidden transition-all duration-300 ease-[cubic-bezier(.16,1,.3,1)] ${
                    openFaq === i ? 'max-h-[300px] pb-[18px]' : 'max-h-0'
                  }`}
                >
                  <p className="text-sm text-ds-muted leading-relaxed">{item.a}</p>
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div {...fadeUp} className="text-center mt-8">
            <a href="/faq">
              <Button variant="outline">View all FAQs <ArrowRight size={14} /></Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* SUSTAINABILITY */}
      <section className="py-20 md:py-24 text-center text-white" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1a1a2e 100%)' }}>
        <div className="wrap max-w-[640px]">
          <motion.div {...fadeUp}>
            <div className="w-11 h-11 rounded-full border border-white/8 flex items-center justify-center mx-auto mb-6">
              <Leaf size={18} className="text-ds-green" />
            </div>
            <h2 className="text-[clamp(30px,3.6vw,50px)] font-extrabold tracking-tighter leading-[1.1] mb-4">
              Connectivity that<br /><span className="text-ds-green">cares</span>.
            </h2>
            <p className="text-base text-white/45 leading-relaxed max-w-[480px] mx-auto mb-12">
              Digital SIM means zero plastic waste. No packaging, no shipping, no manufacturing footprint.
            </p>
            <div className="flex items-center justify-center gap-10 md:gap-16">
              <div>
                <div className="text-[56px] font-extrabold text-ds-green tracking-tighter leading-none">0</div>
                <div className="text-xs text-white/40 mt-2 leading-relaxed">plastic SIM cards<br />manufactured</div>
              </div>
              <div className="w-[1px] h-[60px] bg-white/8" />
              <div>
                <div className="text-[56px] font-extrabold text-ds-green tracking-tighter leading-none">-82%</div>
                <div className="text-xs text-white/40 mt-2 leading-relaxed">lower carbon footprint<br />vs. physical SIM</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 text-center bg-white text-ds-ink overflow-hidden">
        <div className="wrap relative z-10">
          <motion.div {...fadeUp}>
            <h2 className="text-[clamp(28px,3.2vw,44px)] font-extrabold tracking-tight mb-3">Ready to travel better?</h2>
            <p className="text-base text-ds-muted max-w-[440px] mx-auto mb-8">
              Join 50,000+ travellers who never overpay for data abroad. Three minutes to connected.
            </p>
            <a href="#plans">
              <Button variant="outline" size="lg" className="hover:bg-ds-green hover:border-ds-green hover:text-ds-ink">
                Get your eSIM
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
