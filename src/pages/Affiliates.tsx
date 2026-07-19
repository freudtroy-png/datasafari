import { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, DollarSign, Globe, Gift, Percent, Rocket, BarChart3, HeadphonesIcon, CheckCircle2, ArrowRight, Star, Link2, Wallet, Zap, Shield } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const ease = [0.16, 1, 0.3, 1] as const

function fadeUp(delay = 0) {
  return { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' as const }, transition: { duration: 0.6, ease, delay } }
}

const tiers = [
  {
    name: 'Starter',
    minSales: '0–9 sales/mo',
    commission: '15%',
    color: 'text-white',
    bg: 'rgba(255,255,255,.04)',
    border: 'border-white/[0.08]',
  },
  {
    name: 'Pro',
    minSales: '10–49 sales/mo',
    commission: '20%',
    popular: true,
    color: 'text-white',
    bg: 'rgba(1,219,93,.06)',
    border: 'border-ds-green/30',
  },
  {
    name: 'Elite',
    minSales: '50+ sales/mo',
    commission: '25%',
    color: 'text-white',
    bg: 'rgba(255,255,255,.04)',
    border: 'border-white/[0.08]',
  },
]

const steps = [
  { num: '01', title: 'Sign up free', desc: 'Create your affiliate account in under 2 minutes. No approval needed, no minimum traffic requirements.', icon: Users },
  { num: '02', title: 'Share your link', desc: 'Promote DataSafari through your unique referral link. Share it on social media, blogs, or with your audience.', icon: Link2 },
  { num: '03', title: 'Earn commissions', desc: 'Get paid for every eSIM sold through your link. Track everything in real time from your dashboard.', icon: DollarSign },
]

const perks = [
  { icon: Zap, title: 'Real-time dashboard', desc: 'Track clicks, conversions, and earnings as they happen. Full transparency, no delays.' },
  { icon: Wallet, title: 'Monthly payouts', desc: 'Automatic payments via PayPal or bank transfer. No minimum payout threshold.' },
  { icon: Gift, title: 'Promo materials', desc: 'Access banners, social media creatives, and email templates ready to use.' },
  { icon: Percent, title: 'Multi-year cookie', desc: '365-day attribution window. If they buy within a year, you earn the commission.' },
  { icon: Globe, title: 'Global audience', desc: 'Promote to travellers in 190+ countries. Your link works everywhere.' },
  { icon: HeadphonesIcon, title: 'Dedicated support', desc: 'Get a personal affiliate manager once you hit Pro tier. Priority support always.' },
]

const affiliateFAQ = [
  { q: 'Who can join the affiliate programme?', a: 'Anyone with an online presence — bloggers, travel influencers, deal sites, newsletter writers, or frequent travellers who want to share DataSafari with their network.' },
  { q: 'How are commissions calculated?', a: 'Commissions are based on the plan price before tax. If a customer buys a $20 plan, you earn $3 (15%) at Starter tier. Higher tiers earn up to 25%.' },
  { q: 'When do I get paid?', a: 'Payouts are processed within the first 5 business days of each month for the previous month\'s earnings. Payments are sent via PayPal or bank transfer.' },
  { q: 'What counts as a referred sale?', a: 'A sale is attributed to you when a customer clicks your unique affiliate link and purchases an eSIM within 365 days. The attribution is tracked via first-click model.' },
  { q: 'Can I promote DataSafari on social media?', a: 'Absolutely. You can share your link on Instagram, TikTok, YouTube, Twitter, Facebook, or any platform. We also provide pre-made creatives to make it easy.' },
  { q: 'Is there a minimum traffic requirement?', a: 'None. Anyone can join. Higher commission tiers are based on sales volume, not traffic. Start earning from your first sale.' },
]

export function Affiliates() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0b1628 0%, #132238 50%, #0f172a 100%)' }} />
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-ds-green opacity-[0.03] blur-[100px]" />
          <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-white opacity-[0.02] blur-[80px]" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.02]" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id="aff-grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="#fff" strokeWidth="0.5" /></pattern></defs>
            <rect width="100" height="100" fill="url(#aff-grid)" />
          </svg>
        </div>

        <div className="wrap relative z-10 pt-24 sm:pt-28 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease }}>
              <Badge variant="invert" className="mb-5"><Users size={13} /> Affiliate programme</Badge>
              <h1 className="text-[clamp(34px,5vw,64px)] font-extrabold tracking-tighter leading-[1.05] text-white mb-5">
                Earn up to <span className="text-ds-green">25%</span><br />on every referral.
              </h1>
              <p className="text-base md:text-lg text-white/50 leading-relaxed max-w-[520px] mb-8">
                Turn your audience into income. Promote the eSIM you already love and earn commissions on every traveller who signs up through your link.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#join">
                  <Button variant="primary" size="lg">Join for free <ArrowRight size={16} /></Button>
                </a>
                <a href="#how-it-works">
                  <Button variant="outline" size="lg" className="text-white border-white/25 hover:border-white hover:bg-white/6">How it works</Button>
                </a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease, delay: 0.15 }} className="hidden lg:block">
              <div className="relative">
                <div className="w-full aspect-[4/3] rounded-[20px] border border-white/[0.08] p-8 flex flex-col justify-center" style={{ background: 'rgba(255,255,255,.03)' }}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-ds-green/20 flex items-center justify-center"><DollarSign size={18} className="text-ds-green" /></div>
                    <div>
                      <div className="text-xs text-white/40">Your earnings this month</div>
                      <div className="text-2xl font-extrabold text-white">$1,847</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: 'Clicks', value: '342', pct: 70 },
                      { label: 'Conversions', value: '28', pct: 45 },
                      { label: 'Commission rate', value: '20%', pct: 60 },
                    ].map((stat) => (
                      <div key={stat.label}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-white/40">{stat.label}</span>
                          <span className="text-white font-semibold">{stat.value}</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-white/[0.08] overflow-hidden">
                          <div className="h-full rounded-full bg-ds-green transition-all" style={{ width: `${stat.pct}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 pt-5 border-t border-white/[0.06] flex items-center gap-2 text-xs">
                    <CheckCircle2 size={13} className="text-ds-green" />
                    <span className="text-white/40">Next payout in <strong className="text-white/70">12 days</strong></span>
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 w-20 h-20 rounded-full bg-ds-green/10 blur-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="py-16 border-b border-ds-line">
        <div className="wrap">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, value: '2,400+', label: 'Active affiliates' },
              { icon: DollarSign, value: '$4.2M+', label: 'Paid out' },
              { icon: Globe, value: '190+', label: 'Countries promoted' },
              { icon: Star, value: '4.9', label: 'Affiliate rating' },
            ].map((stat, i) => (
              <motion.div key={stat.label} {...fadeUp(i * 0.08)}>
                <stat.icon size={20} className="text-ds-green mx-auto mb-3" />
                <div className="text-[clamp(24px,3vw,36px)] font-extrabold text-ds-ink tracking-tight">{stat.value}</div>
                <div className="text-xs text-ds-muted font-medium mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section id="how-it-works" className="py-20 md:py-24">
        <div className="wrap">
          <motion.div {...fadeUp()} className="text-center max-w-[560px] mx-auto mb-14">
            <Badge><Zap size={13} /> Simple process</Badge>
            <h2 className="text-[clamp(28px,3.2vw,44px)] font-extrabold tracking-tight text-ds-ink leading-[1.12] mt-3 mb-3">
              Three steps to start earning.
            </h2>
            <p className="text-ds-muted leading-relaxed">No complex setup, no upfront costs, no risk. Just share and earn.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[900px] mx-auto">
            {steps.map((step, i) => (
              <motion.div key={step.num} {...fadeUp(i * 0.1)} className="text-center">
                <div className="w-14 h-14 rounded-full bg-ds-green/10 text-ds-green flex items-center justify-center mx-auto mb-4">
                  <step.icon size={24} />
                </div>
                <div className="text-xs font-bold text-ds-green mb-2 tracking-wide">{step.num}</div>
                <h3 className="text-lg font-bold text-ds-ink mb-2">{step.title}</h3>
                <p className="text-sm text-ds-muted leading-relaxed max-w-[280px] mx-auto">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMMISSION TIERS ─── */}
      <section id="commission" className="py-20 md:py-24 overflow-hidden relative" style={{ background: '#0f172a' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none opacity-[0.04]" style={{ background: 'radial-gradient(circle, #01db5d 0%, transparent 65%)' }} />
        <div className="wrap relative z-10">
          <motion.div {...fadeUp()} className="text-center max-w-[560px] mx-auto mb-14">
            <Badge variant="invert"><Percent size={13} /> Commission tiers</Badge>
            <h2 className="text-[clamp(28px,3.2vw,44px)] font-extrabold tracking-tight text-white leading-[1.12] mt-3 mb-3">
              The more you sell, the more you earn.
            </h2>
            <p className="text-white/40 leading-relaxed">Climb the tiers as your volume grows. No caps, no hidden conditions.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[800px] mx-auto">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                {...fadeUp(i * 0.1)}
                className={`relative flex flex-col rounded-[20px] p-7 pt-8 transition-all duration-250 ${tier.popular ? 'bg-ds-green/10 border-ds-green/30 shadow-[0_0_40px_rgba(1,219,93,.12)]' : 'border border-white/[0.08] hover:border-white/[0.16]'}`}
                style={tier.popular ? {} : { background: 'rgba(255,255,255,.03)' }}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-ds-green text-ds-ink text-[10px] font-extrabold tracking-[0.8px] uppercase px-3.5 py-[5px] rounded-full whitespace-nowrap">
                    Most popular
                  </div>
                )}
                <div className={`text-lg font-bold mb-1 ${tier.color}`}>{tier.name}</div>
                <div className="text-xs text-white/40 mb-5">{tier.minSales}</div>
                <div className="text-[clamp(40px,8vw,56px)] font-extrabold text-ds-green tracking-tighter leading-none mb-1">{tier.commission}</div>
                <div className="text-xs text-white/30 mb-6">per sale commission</div>
                <a
                  href="#join"
                  className={`block text-center py-3 px-5 rounded-r2 text-sm font-bold transition-all mt-auto ${
                    tier.popular
                      ? 'bg-ds-green text-ds-ink hover:bg-ds-lime'
                      : 'bg-white/[0.08] border border-white/[0.1] text-white hover:bg-white/[0.14]'
                  }`}
                >
                  Start earning
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PERKS ─── */}
      <section className="py-20 md:py-24 bg-ds-wash">
        <div className="wrap">
          <motion.div {...fadeUp()} className="text-center max-w-[560px] mx-auto mb-14">
            <Badge><Gift size={13} /> Everything you need</Badge>
            <h2 className="text-[clamp(28px,3.2vw,44px)] font-extrabold tracking-tight text-ds-ink leading-[1.12] mt-3 mb-3">
              Tools that make promoting easy.
            </h2>
            <p className="text-ds-muted leading-relaxed">From tracking to creatives, we provide everything to help you succeed.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {perks.map((perk, i) => (
              <motion.div key={perk.title} {...fadeUp(i * 0.08)}>
                <div className="bg-white border border-ds-line rounded-[20px] p-6 hover:border-ds-green/30 hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <div className="w-11 h-11 rounded-r bg-ds-green/10 text-ds-green flex items-center justify-center mb-4">
                    <perk.icon size={20} />
                  </div>
                  <h3 className="text-base font-bold text-ds-ink mb-1.5">{perk.title}</h3>
                  <p className="text-sm text-ds-muted leading-relaxed">{perk.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-20 md:py-24">
        <div className="wrap max-w-[700px]">
          <motion.div {...fadeUp()} className="text-center mb-12">
            <Badge><HeadphonesIcon size={13} /> Got questions?</Badge>
            <h2 className="text-[clamp(28px,3.2vw,44px)] font-extrabold tracking-tight text-ds-ink leading-[1.12] mt-3 mb-3">
              Affiliate programme FAQ.
            </h2>
          </motion.div>
          <div className="space-y-2.5">
            {affiliateFAQ.map((item, i) => (
              <AffiliateFAQItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section id="join" className="py-20 md:py-24 text-center text-white overflow-hidden relative">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-ds-green opacity-[0.04] blur-[120px]" />
        <div className="wrap relative z-10">
          <motion.div {...fadeUp()}>
            <div className="w-12 h-12 rounded-full border border-white/8 flex items-center justify-center mx-auto mb-5">
              <Rocket size={18} className="text-ds-green" />
            </div>
            <h2 className="text-[clamp(28px,3.2vw,44px)] font-extrabold tracking-tight mb-3">Ready to start earning?</h2>
            <p className="text-base text-white/45 max-w-[480px] mx-auto mb-8">
              Join 2,400+ affiliates already earning with DataSafari. Sign up free — no commitment required.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#">
                <Button variant="primary" size="lg">Create your affiliate account <ArrowRight size={16} /></Button>
              </a>
              <a href="/faq">
                <Button variant="outline" size="lg" className="text-white/80 border-white/20 hover:border-white hover:text-white">Contact us</Button>
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 mt-5 text-xs text-white/30">
              <Shield size={12} /> Free to join &middot; No minimums &middot; Cancel anytime
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

function AffiliateFAQItem({ item, index }: { item: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="bg-white border border-ds-line rounded-r2 overflow-hidden hover:border-ds-green/30 transition-colors">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-[18px] text-left text-sm font-semibold text-ds-ink hover:text-ds-green-dark transition-colors"
      >
        {item.q}
        <span className={`shrink-0 text-ds-muted transition-transform duration-300 ${open ? 'rotate-45 text-ds-green' : ''}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </span>
      </button>
      <div className={`px-5 overflow-hidden transition-all duration-300 ease-[cubic-bezier(.16,1,.3,1)] ${open ? 'max-h-[300px] pb-[18px]' : 'max-h-0'}`}>
        <p className="text-sm text-ds-muted leading-relaxed">{item.a}</p>
      </div>
    </div>
  )
}
