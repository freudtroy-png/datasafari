import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Wifi, Zap, Shield, Globe, HeadphonesIcon, ThumbsUp, Star, Download, Leaf, ArrowRight, HelpCircle, Signal, Tag, Clock } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { destinations, regions, regionMap } from '@/data/destinations'
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
  { name: 'Lukas Weber', role: 'Frequent traveller', text: 'Southeast Asia for a month, Singapore to rural Thailand. Never once thought about data.', img: '/assets/testimonials/person1.jpg' },
  { name: 'Elena Fischer', role: 'Consultant', text: 'Support walked me through setup at midnight. Now it\'s the first thing I buy before every business trip.', img: '/assets/testimonials/person2.jpg' },
  { name: 'Camille Laurent', role: 'Business traveller', text: 'The only eSIM that reliably works on African networks. Travel to Lagos every quarter — nothing else compares.', img: '/assets/testimonials/person3.jpg' },
  { name: 'Matteo Conti', role: 'Digital nomad', text: 'Honeymoon across four continents, one eSIM, activated once. From Bali to Buenos Aires without a single hiccup.', img: '/assets/testimonials/person4.jpg' },
  { name: 'Sofia Andersson', role: 'Backpacker', text: 'Eight countries in two weeks, one plan, zero issues. Seamless from Tokyo to Bangkok.', img: '/assets/testimonials/person5.jpg' },
  { name: 'Henrik Larsson', role: 'Travel blogger', text: '45 seconds to install, instant activation on landing. Best travel purchase I made all year.', img: '/assets/testimonials/person6.jpg' },
]


export function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeRegion, setActiveRegion] = useState('All')
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [planToggle, setPlanToggle] = useState<'weekly' | 'monthly'>('weekly')

  const activePlan = planToggle === 'weekly' ? 'weekly' : 'monthly'

  const visibleRegions = activeRegion === 'All'
    ? regions.filter(r => r !== 'All')
    : [activeRegion]

  const byRegion = Object.fromEntries(
    visibleRegions.map(r => [
      r,
      (regionMap[r] || [])
        .map(c => destinations.find(d => d.code === c))
        .filter((d): d is typeof destinations[number] =>
          d != null && d.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
    ])
  )

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/assets/hero/plane-hero.jpg" alt="" className="w-full h-full object-cover brightness-[0.35]" />
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

          <motion.div {...fadeUp} className="relative max-w-[400px] mx-auto mb-10">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ds-muted pointer-events-none" />
            <input
              type="text"
              placeholder="Search countries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-ds-line rounded-r2 text-sm outline-none focus:border-ds-green transition-colors font-sans"
            />
          </motion.div>

          {visibleRegions.map((region) => {
            const items = byRegion[region]
            if (!items || items.length === 0) return null
            return (
              <div key={region} className="mb-10 last:mb-0">
                <motion.h3 {...fadeUp} className="text-xs font-bold uppercase tracking-[2px] text-ds-muted/50 mb-4">{region}</motion.h3>
                <motion.div {...fadeUp} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5">
                  {items.map((d) => (
                    <Card key={d.code} className="overflow-hidden cursor-pointer group hover:border-ds-green/30 transition-all p-0">
                      <div className="aspect-[4/3] overflow-hidden relative">
                        <img src={d.img} alt={d.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-t from-ds-ink/60 to-transparent" />
                        <span className="absolute bottom-2.5 left-3 text-xs font-bold text-white drop-shadow-sm" style={{ textShadow: '0 1px 3px rgba(0,0,0,.5)' }}>
                          {d.name}
                        </span>
                      </div>
                      <div className="flex items-center justify-between px-3 py-2">
                        <span className="text-[11px] text-ds-muted font-medium">{d.speed}</span>
                        <span className="text-[11px] text-ds-green font-bold">{d.price}</span>
                      </div>
                    </Card>
                  ))}
                </motion.div>
              </div>
            )
          })}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-20 md:py-24 bg-white">
        <div className="wrap">
          <motion.div {...fadeUp} className="text-center max-w-[560px] mx-auto mb-10 sm:mb-14">
            <Badge><Download size={13} /> Simple setup</Badge>
            <h2 className="text-[clamp(28px,3.2vw,44px)] font-extrabold tracking-tight text-ds-ink leading-[1.12] mt-3 mb-3">
              Connected in <span className="text-ds-green">3 minutes</span><span className="text-white"> flat</span>.
            </h2>
            <p className="text-ds-muted leading-relaxed">Make it white.</p>
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

      {/* PLANS — restored to original HTML look */}
      <section id="plans" className="py-20 md:py-24 overflow-hidden" style={{ background: '#0f172a' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full pointer-events-none opacity-[0.05]" style={{ background: 'radial-gradient(circle, #01db5d 0%, transparent 65%)' }} />
        <div className="wrap relative z-10">
          <motion.div {...fadeUp} className="text-center max-w-[640px] mx-auto mb-8">
            <Badge variant="invert"><Tag size={13} /> Plans</Badge>
            <h2 className="text-[clamp(28px,3.2vw,44px)] font-extrabold tracking-tight text-white leading-[1.12] mt-3 mb-3">
              Data plans for every journey.
            </h2>
            <p className="text-white/40 leading-relaxed">Short trip or long stay — there is a plan that fits the way you travel.</p>
          </motion.div>

          {/* Toggle */}
          <motion.div {...fadeUp} className="flex justify-center mb-10">
            <div className="inline-flex relative border border-white/[0.08] rounded-full p-[4px]" style={{ background: 'rgba(255,255,255,.06)' }}>
              <div
                className="absolute top-[4px] bottom-[4px] rounded-full bg-white transition-all duration-300 ease-[cubic-bezier(.34,1.56,.64,1)] z-0"
                style={{
                  width: 'calc(50% - 4px)',
                  transform: planToggle === 'monthly' ? 'translateX(100%)' : 'translateX(0)',
                }}
              />
              {(['weekly', 'monthly'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setPlanToggle(t)}
                  className={`px-7 py-2.5 rounded-full text-sm font-semibold relative z-10 transition-colors ${
                    planToggle === t ? 'text-ds-ink' : 'text-white/40'
                  }`}
                >
                  {t === 'weekly' ? '7-day plans' : '30-day plans'}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Cards */}
          <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[900px] mx-auto">
            {plans.map((plan) => {
              const p = plan[activePlan]
              return (
                <div
                  key={plan.id}
                  className={`relative flex flex-col rounded-[20px] p-7 pt-8 transition-all duration-250 ${
                    plan.popular
                      ? 'bg-ds-green border-ds-green shadow-[0_20px_60px_rgba(1,219,93,.25)]'
                      : 'border border-white/[0.08] hover:border-white/[0.16] hover:shadow-[0_12px_40px_rgba(0,0,0,.3)]'
                  }`}
                  style={plan.popular ? {} : { background: 'rgba(255,255,255,.04)' }}
                >
                  {/* Badge */}
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-ds-ink text-[10px] font-extrabold tracking-[0.8px] uppercase px-3.5 py-[5px] rounded-full whitespace-nowrap border border-white">
                      {plan.badge}
                    </div>
                  )}

                  <div className={`text-lg font-bold mb-0.5 ${plan.popular ? 'text-ds-ink' : 'text-white'}`}>{plan.name}</div>
                  <div className={`text-xs mb-6 ${plan.popular ? 'text-black/50' : 'text-white/40'}`}>{plan.tagline}</div>

                  {/* Data amount */}
                  <div className={`text-[52px] font-extrabold tracking-tighter leading-none mb-1 ${plan.popular ? 'text-ds-ink' : 'text-white'}`}>
                    {p.data}
                    {p.data !== '\u221e' && <span className="text-xl font-semibold tracking-normal"> GB</span>}
                  </div>

                  {/* Data bar */}
                  <div className={`h-[4px] rounded-full my-3 mb-5 overflow-hidden ${plan.popular ? 'bg-black/[0.12]' : 'bg-white/[0.12]'}`}>
                    <div className="h-full rounded-full transition-all duration-600" style={{ width: `${p.barPct}%`, background: plan.popular ? 'rgba(0,0,0,.3)' : 'rgba(255,255,255,.4)' }} />
                  </div>

                  {/* Price row */}
                  <div className="flex items-baseline gap-1 mb-0.5">
                    <span className={`text-[30px] font-extrabold tracking-tight ${plan.popular ? 'text-ds-ink' : 'text-white'}`}>
                      ${p.price}
                    </span>
                    <span className={`text-xs font-medium ${plan.popular ? 'text-black/45' : 'text-white/40'}`}>/ plan</span>
                  </div>
                  <div className={`text-xs mb-6 ${plan.popular ? 'text-black/40' : 'text-white/30'}`}>{p.validity}</div>

                  {/* CTA */}
                  <a
                    href="#"
                    className={`block text-center py-3 px-5 rounded-r2 text-sm font-bold transition-all mb-6 ${
                      plan.popular
                        ? 'bg-ds-ink text-white hover:bg-[#0a1a2e]'
                        : 'bg-white/[0.1] border border-white/[0.12] text-white hover:bg-white/[0.16]'
                    }`}
                  >
                    Get started
                  </a>

                  {/* Features */}
                  <div className="flex flex-col gap-2.5 mt-auto">
                    {plan.features.map((f) => (
                      <div key={f} className={`flex items-center gap-2 text-xs font-medium ${plan.popular ? 'text-black/65' : 'text-white/60'}`}>
                        <div className={`w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0 ${plan.popular ? 'bg-black/[0.12]' : 'bg-white/[0.1]'}`}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={plan.popular ? 'text-black/60' : 'text-white/70'}>
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </motion.div>

          {/* Trust strip */}
          <motion.div {...fadeUp} className="flex items-center justify-center gap-7 mt-8 flex-wrap">
            {[
              { icon: Shield, text: 'Money-back guarantee' },
              { icon: Zap, text: 'Instant QR delivery' },
              { icon: Clock, text: 'No contract, cancel anytime' },
              { icon: HeadphonesIcon, text: '24/7 support' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-[7px] text-xs text-white/30 font-medium">
                <item.icon size={13} className="text-white/30" />
                {item.text}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS — restored to original HTML look */}
      <section id="reviews" className="py-20 md:py-24 bg-white">
        <div className="wrap">
          <motion.div {...fadeUp} className="text-center max-w-[640px] mx-auto mb-12">
            <Badge><Signal size={13} /> Trusted by travellers</Badge>
            <h2 className="text-[clamp(28px,3.2vw,44px)] font-extrabold tracking-tight text-ds-ink leading-[1.12] mt-3 mb-3">
              See what all<br />the talk is about.
            </h2>
            <p className="text-ds-muted leading-relaxed">Real travellers, real connections. From backpackers to business flyers.</p>
          </motion.div>

          <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="border border-ds-line rounded-[20px] overflow-hidden bg-white flex flex-col h-full transition-all duration-250 hover:shadow-[0_10px_36px_rgba(15,23,42,.1)] hover:-translate-y-[3px] group"
              >
                {/* Photo area (4:3 ratio) */}
                <div className="w-full aspect-[4/3] overflow-hidden shrink-0 relative bg-ds-wash">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg, #fff 0%, transparent 40%)' }} />
                </div>

                {/* Body */}
                <div className="p-[18px_22px_22px] flex flex-col flex-1">
                  <span className="text-[36px] leading-none text-ds-ink font-serif mb-2.5 block opacity-80">&ldquo;</span>
                  <p className="text-sm text-ds-ink font-medium leading-relaxed flex-1 mb-4">{t.text}</p>
                  <div className="text-xs text-ds-muted font-medium border-t border-ds-line pt-3">
                    <strong className="text-ds-ink">{t.name}</strong><span className="text-ds-muted"> &middot; {t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-24 bg-ds-wash">
        <div className="wrap max-w-[700px]">
          <motion.div {...fadeUp} className="text-center mb-10">
            <Badge><HelpCircle size={13} /> Got questions?</Badge>
            <h2 className="text-[clamp(28px,3.2vw,44px)] font-extrabold tracking-tight text-ds-ink leading-[1.12] mt-3 mb-3">
              Everything you need to know.
            </h2>
          </motion.div>
          <motion.div {...fadeUp} className="space-y-2.5">
            {faqData.slice(0, 4).map((item, i) => (
              <div key={i} className="bg-white border border-ds-line rounded-r2 overflow-hidden hover:border-ds-green/30 transition-colors">
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
            <p className="text-sm sm:text-base text-white/45 leading-relaxed max-w-[480px] mx-auto mb-10 sm:mb-12">
              Every eSIM sold is a plastic card that was never made. No factories, no trucks, no waste — just data, delivered instantly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 md:gap-16">
              <div>
                <div className="text-[clamp(40px,10vw,56px)] font-extrabold text-ds-green tracking-tighter leading-none">Zero</div>
                <div className="text-[11px] sm:text-xs text-white/40 mt-2 leading-relaxed">plastic. Not one SIM card,<br />not one gram, not one package.</div>
              </div>
              <div className="w-12 sm:w-[1px] h-[1px] sm:h-[60px] bg-white/8" />
              <div>
                <div className="text-[clamp(40px,10vw,56px)] font-extrabold text-ds-green tracking-tighter leading-none">85%</div>
                <div className="text-[11px] sm:text-xs text-white/40 mt-2 leading-relaxed">lower emissions than physical<br />SIM, cradle to grave.</div>
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
