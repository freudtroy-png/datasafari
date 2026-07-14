import { useState, useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { Search, Smartphone, Globe, QrCode, Wifi, CheckCircle2, ArrowRight, Shield, Zap, Clock, RefreshCw } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const ease = [0.16, 1, 0.3, 1] as const

function fadeUp(delay = 0) {
  return { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' as const }, transition: { duration: 0.6, ease, delay } }
}

/* --- Inline SVG illustrations --- */

function PhoneSVG({ className = '', animating = false }: { className?: string; animating?: boolean }) {
  return (
    <svg className={className} viewBox="0 0 120 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="4" width="100" height="232" rx="16" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="14" y="8" width="92" height="200" rx="4" fill="currentColor" fillOpacity="0.06" />
      <rect x="45" y="217" width="30" height="4" rx="2" fill="currentColor" fillOpacity="0.3" />
      <circle cx="60" cy="12" r="3" fill="currentColor" fillOpacity="0.2" />
      <g opacity={animating ? '0.8' : '0.3'}>
        <rect x="24" y="30" width="72" height="10" rx="2" fill="currentColor" fillOpacity="0.08" />
        <rect x="24" y="46" width="72" height="10" rx="2" fill="currentColor" fillOpacity="0.05" />
        <motion.rect
          x="24" y="66" width="72" height="80" rx="6"
          fill="#01db5d" fillOpacity="0.12"
          animate={animating ? { scale: [1, 1.02, 1] } : undefined}
          transition={{ duration: 2, repeat: Infinity, ease }}
        />
      </g>
      {animating && (
        <>
          <motion.rect x="30" y="72" width="60" height="6" rx="3" fill="#01db5d" fillOpacity="0.4" initial={{ width: 0 }} animate={{ width: 60 }} transition={{ duration: 1.5, repeat: Infinity, ease }} />
          <motion.rect x="30" y="84" width="40" height="6" rx="3" fill="#01db5d" fillOpacity="0.5" initial={{ width: 0 }} animate={{ width: 40 }} transition={{ duration: 1.5, delay: 0.3, repeat: Infinity, ease }} />
          <motion.rect x="30" y="96" width="50" height="6" rx="3" fill="#01db5d" fillOpacity="0.3" initial={{ width: 0 }} animate={{ width: 50 }} transition={{ duration: 1.5, delay: 0.6, repeat: Infinity, ease }} />
          <motion.rect x="30" y="108" width="35" height="6" rx="3" fill="#01db5d" fillOpacity="0.6" initial={{ width: 0 }} animate={{ width: 35 }} transition={{ duration: 1.5, delay: 0.9, repeat: Infinity, ease }} />
        </>
      )}
    </svg>
  )
}

function QRIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="4" y="4" width="16" height="16" rx="1" fill="currentColor" fillOpacity="0.06" />
      <rect x="7" y="7" width="6" height="6" rx="1" fill="currentColor" fillOpacity="0.3" />
      <rect x="16" y="7" width="3" height="3" rx="0.5" fill="currentColor" fillOpacity="0.3" />
      <rect x="7" y="16" width="3" height="3" rx="0.5" fill="currentColor" fillOpacity="0.3" />
      <rect x="26" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="28" y="4" width="16" height="16" rx="1" fill="currentColor" fillOpacity="0.06" />
      <rect x="31" y="7" width="10" height="10" rx="1" fill="currentColor" fillOpacity="0.3" />
      <rect x="2" y="26" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="4" y="28" width="16" height="16" rx="1" fill="currentColor" fillOpacity="0.06" />
      <rect x="7" y="31" width="6" height="6" rx="1" fill="currentColor" fillOpacity="0.3" />
      <rect x="16" y="31" width="3" height="3" rx="0.5" fill="currentColor" fillOpacity="0.3" />
      <rect x="16" y="40" width="3" height="3" rx="0.5" fill="currentColor" fillOpacity="0.3" />
      <rect x="26" y="26" width="10" height="10" rx="1" fill="currentColor" fillOpacity="0.3" />
      <rect x="38" y="26" width="8" height="8" rx="1" fill="currentColor" fillOpacity="0.2" />
      <rect x="26" y="38" width="8" height="8" rx="1" fill="currentColor" fillOpacity="0.2" />
      <rect x="38" y="38" width="8" height="8" rx="1" fill="currentColor" fillOpacity="0.3" />
      <motion.rect x="40" y="40" width="4" height="4" rx="0.5" fill="#01db5d" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }} />
    </svg>
  )
}

function GlobeIllustration({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="48" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.2" />
      <ellipse cx="60" cy="60" rx="20" ry="48" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.15" />
      <line x1="60" y1="12" x2="60" y2="108" stroke="currentColor" strokeWidth="1.5" opacity="0.15" />
      <line x1="12" y1="60" x2="108" y2="60" stroke="currentColor" strokeWidth="1.5" opacity="0.15" />
      <circle cx="60" cy="60" r="48" stroke="#01db5d" strokeWidth="0.5" fill="none" opacity="0.3" strokeDasharray="4 4" />
      <circle cx="60" cy="60" r="32" stroke="#01db5d" strokeWidth="0.5" fill="none" opacity="0.2" strokeDasharray="3 3" />
      {/* Continents */}
      <path d="M44 40 Q48 36 55 38 Q58 40 56 44 Q54 48 48 48 Q44 46 44 40Z" fill="#01db5d" fillOpacity="0.5" />
      <path d="M68 52 Q74 50 78 54 Q80 58 76 62 Q72 64 68 60 Q66 56 68 52Z" fill="#01db5d" fillOpacity="0.4" />
      <path d="M52 68 Q56 66 60 68 Q62 72 58 76 Q54 78 52 74 Q50 72 52 68Z" fill="#01db5d" fillOpacity="0.35" />
      {/* Pulse ring */}
      <motion.circle cx="60" cy="60" r="48" stroke="#01db5d" strokeWidth="1" fill="none" initial={{ r: 48, opacity: 0.5 }} animate={{ r: 58, opacity: 0 }} transition={{ duration: 2.5, repeat: Infinity, ease }} />
    </svg>
  )
}

function SignalBars({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {[24, 30, 36, 42, 48].map((h, i) => (
        <motion.rect
          key={i}
          x={i * 13} y={48 - h}
          width="8" height={h}
          rx="3" fill="#01db5d"
          fillOpacity={0.2 + i * 0.18}
          animate={{ fillOpacity: [0.2 + i * 0.18, 0.4 + i * 0.2, 0.2 + i * 0.18] }}
          transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
        />
      ))}
    </svg>
  )
}

/* --- Data --- */

const devices = [
  { name: 'iPhone', models: 'XS, XR, 11–16, SE (2020+)', color: '#000' },
  { name: 'Samsung', models: 'Galaxy S20+, S21+, S22+, S23+, S24+', color: '#1428a0' },
  { name: 'Google Pixel', models: 'Pixel 4, 5, 6, 7, 8, 9, 10', color: '#4285f4' },
  { name: 'Huawei', models: 'P40, P50, P60, Mate 40/50', color: '#cf0a2c' },
  { name: 'OnePlus', models: '11, 12, 13, Open', color: '#eb0029' },
  { name: 'Xiaomi', models: '13, 14, 15 series, Pad 6/7', color: '#ff6900' },
  { name: 'Sony', models: 'Xperia 1 III–V, 10 III+', color: '#000' },
  { name: 'Motorola', models: 'Edge 40+, 50+, Razr 2023+', color: '#0075c9' },
  { name: 'Nothing', models: 'Phone (2), Phone (3)', color: '#000' },
  { name: 'iPad', models: 'Air (4th+), Pro (2018+), mini (6th+)', color: '#a2aaad' },
]

const comparison = [
  { feature: 'Physical SIM card', esim: 'No card needed', sim: 'Plastic card required' },
  { feature: 'Activation time', esim: 'Under 3 minutes', sim: 'Days to deliver' },
  { feature: 'Switch provider', esim: 'Instant, in-app', sim: 'Need new card' },
  { feature: 'Multiple lines', esim: '8+ eSIMs per device', sim: 'Dual SIM max' },
  { feature: 'Lost phone', esim: 'Cannot be removed', sim: 'Card can be stolen' },
  { feature: 'Environmental impact', esim: 'Zero plastic waste', sim: 'Plastic + shipping' },
  { feature: 'Pre-trip setup', esim: 'Buy & install anytime', sim: 'Must have card before' },
  { feature: 'Coverage switching', esim: 'Download new plan', sim: 'Buy new card per country' },
]

const steps = [
  { num: '01', title: 'Pick your plan', desc: 'Choose from 200+ destinations and the data you need. Checkout in seconds, no account required.', icon: Globe },
  { num: '02', title: 'Install your eSIM', desc: 'Scan the QR code from your email or install directly from our app. Takes under 2 minutes.', icon: QrCode },
  { num: '03', title: 'Arrive & connect', desc: 'Your eSIM activates the moment you land. No settings to change. You are on the local network instantly.', icon: Wifi },
]

/* --- Component --- */

export function HowItWorks() {
  const [deviceSearch, setDeviceSearch] = useState('')
  const [installTab, setInstallTab] = useState<'iphone' | 'android'>('iphone')
  const containerRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)
  const isStepsInView = useInView(stepsRef, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] })
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95])

  const filteredDevices = devices.filter(d =>
    d.name.toLowerCase().includes(deviceSearch.toLowerCase()) ||
    d.models.toLowerCase().includes(deviceSearch.toLowerCase())
  )

  return (
    <>
      {/* ─── HERO ─── */}
      <section ref={containerRef} className="relative min-h-[90vh] flex items-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ opacity: heroOpacity }}>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0b1628 0%, #132238 50%, #0f172a 100%)' }} />
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-ds-green opacity-[0.03] blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-white opacity-[0.02] blur-[80px]" />
          {/* Grid pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.02]" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="#fff" strokeWidth="0.5" /></pattern></defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </motion.div>

        <div className="wrap relative z-10 pt-28 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease }}>
              <Badge variant="invert" className="mb-5"><Wifi size={13} /> eSIM setup guide</Badge>
              <h1 className="text-[clamp(34px,5vw,64px)] font-extrabold tracking-tighter leading-[1.05] text-white mb-5">
                Connected in<br />
                <span className="text-ds-green">3 minutes</span>
                <span className="text-white/30"> flat.</span>
              </h1>
              <p className="text-base md:text-lg text-white/50 leading-relaxed max-w-[480px] mb-8">
                No physical SIM, no airport kiosk, no roaming bills. Buy online, install at home, arrive connected.
              </p>
              <div className="flex gap-3">
                <a href="/#plans"><Button variant="primary" size="lg">Get your eSIM</Button></a>
                <a href="#install"><Button variant="outline" size="lg" className="text-white border-white/25 hover:border-white hover:bg-white/6">See how</Button></a>
              </div>
              {/* Mini stats */}
              <div className="flex gap-6 mt-10 pt-8 border-t border-white/[0.06]">
                {[
                  { label: '190+ countries', icon: Globe },
                  { label: '3 min activation', icon: Zap },
                  { label: '50K travellers', icon: Shield },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-2 text-xs text-white/40">
                    <s.icon size={13} className="text-ds-green" />
                    {s.label}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="hidden lg:flex justify-center relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease, delay: 0.2 }}
              style={{ scale: heroScale }}
            >
              {/* Phone + QR + Globe composition */}
              <div className="relative flex items-center gap-6">
                {/* QR code floating left */}
                <motion.div
                  className="absolute -left-16 top-8 w-20 h-20 bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl flex items-center justify-center"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease }}
                >
                  <QRIcon className="w-12 h-12 text-ds-green" />
                </motion.div>

                {/* Phone */}
                <div className="relative">
                  <PhoneSVG className="w-28 text-white" animating />
                  <motion.div
                    className="absolute -top-3 -right-3 w-8 h-8 bg-ds-green rounded-full flex items-center justify-center text-ds-ink text-xs font-bold shadow-lg shadow-ds-green/30"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8, type: 'spring', stiffness: 300 }}
                  >
                    <CheckCircle2 size={16} />
                  </motion.div>
                </div>

                {/* Globe floating right */}
                <motion.div
                  className="absolute -right-20 bottom-4 w-28 h-28 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-full flex items-center justify-center"
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease, delay: 1 }}
                >
                  <GlobeIllustration className="w-20 h-20" />
                </motion.div>

                {/* Signal bars floating bottom */}
                <motion.div
                  className="absolute -bottom-6 left-8 w-16 h-12 bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-xl flex items-center justify-center"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease, delay: 0.5 }}
                >
                  <SignalBars className="w-10 h-8" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── VISUAL TIMELINE: 3 STEPS ─── */}
      <section ref={stepsRef} className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="wrap">
          <motion.div {...fadeUp()} className="text-center max-w-[600px] mx-auto mb-20">
            <Badge><Zap size={13} /> How it works</Badge>
            <h2 className="text-[clamp(28px,3.2vw,44px)] font-extrabold tracking-tight text-ds-ink leading-[1.12] mt-3 mb-3">
              Three steps, zero hassle.
            </h2>
            <p className="text-ds-muted leading-relaxed">From purchase to connection in minutes. No store, no SIM tray, no stress.</p>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-[900px] mx-auto">
            {/* Connecting line */}
            <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-[2px] bg-ds-line hidden md:block" />
            <motion.div
              className="absolute left-[31px] md:left-1/2 top-0 w-[2px] bg-ds-green hidden md:block"
              initial={{ height: 0 }}
              animate={isStepsInView ? { height: '100%' } : {}}
              transition={{ duration: 1.5, ease }}
            />

            {steps.map((step, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={step.num}
                  className={`relative flex items-start gap-6 md:gap-12 mb-16 last:mb-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, ease, delay: i * 0.15 }}
                >
                  {/* Dot */}
                  <div className="relative z-10 shrink-0">
                    <motion.div
                      className="w-16 h-16 rounded-full bg-white border-2 border-ds-green flex items-center justify-center shadow-lg shadow-ds-green/10"
                      whileInView={{ scale: [0.8, 1.05, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.15 + 0.3 }}
                    >
                      <step.icon size={24} className="text-ds-green" />
                    </motion.div>
                  </div>

                  {/* Content card */}
                  <motion.div
                    className={`flex-1 max-w-[380px] ${isLeft ? 'md:text-right' : 'md:text-left'}`}
                    whileInView={{ x: [isLeft ? -20 : 20, 0] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease, delay: i * 0.15 + 0.2 }}
                  >
                    <span className="text-[11px] font-extrabold tracking-[2px] text-ds-green uppercase mb-2 block">{step.num}</span>
                    <h3 className="text-xl font-bold text-ds-ink mb-3">{step.title}</h3>
                    <p className="text-sm text-ds-muted leading-relaxed">{step.desc}</p>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── DEVICE COMPATIBILITY ─── */}
      <section id="devices" className="py-24 md:py-32 overflow-hidden relative">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1a1a2e 100%)' }} />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-ds-green opacity-[0.03] blur-[100px]" />
        <div className="wrap relative z-10">
          <motion.div {...fadeUp()} className="text-center max-w-[600px] mx-auto mb-12">
            <Badge variant="invert"><Smartphone size={13} /> Compatible devices</Badge>
            <h2 className="text-[clamp(28px,3.2vw,44px)] font-extrabold tracking-tight text-white leading-[1.12] mt-3 mb-3">
              Works with almost every modern phone.
            </h2>
            <p className="text-white/45 leading-relaxed">Most phones from 2019+ support eSIM. Search your model below.</p>
          </motion.div>

          <motion.div {...fadeUp(0.1)} className="max-w-[400px] mx-auto mb-10">
            <div className="relative">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
              <input
                type="text"
                placeholder="Search your device..."
                value={deviceSearch}
                onChange={(e) => setDeviceSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/6 border border-white/10 rounded-r2 text-sm text-white outline-none focus:border-ds-green/50 transition-colors placeholder:text-white/25 font-sans"
              />
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.2)} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 max-w-[800px] mx-auto">
            {filteredDevices.map((d, i) => (
              <motion.div
                key={d.name}
                className="relative group cursor-default"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.4, ease }}
                whileHover={{ y: -4 }}
              >
                <div className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-4 transition-all duration-300 group-hover:bg-white/[0.08] group-hover:border-ds-green/30 text-center h-full">
                  <div className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center text-xs font-bold tracking-tight" style={{ background: `${d.color}20`, color: d.color }}>
                    {d.name.slice(0, 2).toUpperCase()}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-0.5">{d.name}</h3>
                  <p className="text-[10px] text-white/35 leading-relaxed">{d.models}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredDevices.length === 0 && (
            <motion.p {...fadeUp()} className="text-center text-white/40 text-sm mt-4">No matches found. Try a different search.</motion.p>
          )}
        </div>
      </section>

      {/* ─── INSTALLATION GUIDE ─── */}
      <section id="install" className="py-24 md:py-32 bg-white">
        <div className="wrap">
          <motion.div {...fadeUp()} className="text-center max-w-[600px] mx-auto mb-14">
            <Badge><QrCode size={13} /> Installation guide</Badge>
            <h2 className="text-[clamp(28px,3.2vw,44px)] font-extrabold tracking-tight text-ds-ink leading-[1.12] mt-3 mb-3">
              Install before you fly.
            </h2>
            <p className="text-ds-muted leading-relaxed">Buy from anywhere. Install at home or in the airport lounge. Activates on arrival.</p>
          </motion.div>

          <div className="max-w-[900px] mx-auto">
            {/* Tabs */}
            <motion.div {...fadeUp()} className="flex justify-center mb-10">
              <div className="inline-flex bg-ds-wash rounded-full p-1">
                {(['iphone', 'android'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setInstallTab(t)}
                    className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                      installTab === t ? 'bg-white text-ds-ink shadow-sm' : 'text-ds-muted hover:text-ds-ink'
                    }`}
                  >
                    {t === 'iphone' ? 'iPhone (iOS 16+)' : 'Android'}
                  </button>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              {/* Phone mockup */}
              <motion.div
                key={installTab}
                className="flex justify-center"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease }}
              >
                <div className="relative">
                  <div className="w-[200px] h-[400px] rounded-[30px] border-[3px] border-ds-ink overflow-hidden relative bg-white shadow-xl">
                    {/* Dynamic notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-ds-ink rounded-b-[14px] z-10 flex items-center justify-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-ds-green/80" />
                      <div className="w-8 h-2 rounded-full bg-ds-ink/60" />
                    </div>
                    {/* Dynamic status bar */}
                    <div className="pt-10 px-5 pb-4">
                      <div className="flex items-center gap-1.5 mb-4">
                        <div className="w-3 h-3 rounded-full bg-ds-green" />
                        <span className="text-[10px] font-bold text-ds-ink">DataSafari</span>
                        <span className="ml-auto text-[10px] text-ds-muted">9:41</span>
                      </div>
                      {/* Settings screen content */}
                      <AnimatedScreenContent tab={installTab} />
                    </div>
                    {/* Home indicator */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[5px] bg-ds-ink/10 rounded-full" />
                  </div>
                </div>
              </motion.div>

              {/* Steps */}
              <motion.div
                key={`steps-${installTab}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease, delay: 0.1 }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <Wifi size={18} className="text-ds-green" />
                  <h3 className="text-lg font-bold text-ds-ink">
                    {installTab === 'iphone' ? 'iPhone (iOS 16+)' : 'Android'} setup
                  </h3>
                </div>
                <ol className="space-y-4">
                  {(
                    installTab === 'iphone'
                      ? [
                          'Go to Settings > Cellular > Add eSIM.',
                          'Scan the QR code from your confirmation email.',
                          'Label your eSIM (e.g. "DataSafari") and set as primary data line.',
                          'Enable data roaming for the eSIM line.',
                          'Arrive at your destination and turn on the eSIM line.',
                        ]
                      : [
                          'Go to Settings > Connections > SIM Manager.',
                          'Tap "Add eSIM" and scan your QR code.',
                          'Name your eSIM and set mobile data to this line.',
                          'Enable data roaming for the eSIM.',
                          'You are connected as soon as you land.',
                        ]
                  ).map((step, i) => (
                    <motion.li
                      key={i}
                      className="flex gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.4, ease }}
                    >
                      <span className="w-7 h-7 rounded-full bg-ds-green/10 text-ds-green-dark text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-sm text-ds-body leading-relaxed pt-0.5">{step}</span>
                    </motion.li>
                  ))}
                </ol>
                <div className="mt-6 p-4 bg-ds-green/5 border border-ds-green/15 rounded-r2">
                  <p className="text-xs text-ds-body flex items-center gap-2">
                    <Clock size={13} className="text-ds-green shrink-0" />
                    Install before you travel. The plan only activates when you connect to a local network at your destination.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── eSIM vs SIM ─── */}
      <section className="py-24 md:py-32 bg-ds-wash">
        <div className="wrap">
          <motion.div {...fadeUp()} className="text-center max-w-[600px] mx-auto mb-12">
            <Badge><RefreshCw size={13} /> eSIM vs Physical SIM</Badge>
            <h2 className="text-[clamp(28px,3.2vw,44px)] font-extrabold tracking-tight text-ds-ink leading-[1.12] mt-3 mb-3">
              No contest.
            </h2>
            <p className="text-ds-muted leading-relaxed">Digital SIM is faster, greener, and built for how we travel today.</p>
          </motion.div>

          <motion.div {...fadeUp(0.1)} className="max-w-[750px] mx-auto">
            {/* Header */}
            <div className="hidden md:grid grid-cols-[1fr_100px_100px] gap-4 px-5 py-3 text-xs font-bold uppercase tracking-wider text-ds-muted border-b border-ds-line">
              <span>Feature</span>
              <span className="text-center text-ds-green-dark">eSIM</span>
              <span className="text-center">SIM</span>
            </div>

            {comparison.map((row, i) => (
              <motion.div
                key={i}
                className="grid grid-cols-1 md:grid-cols-[1fr_100px_100px] gap-2 md:gap-4 px-5 py-4 border-b border-ds-line last:border-0 items-center transition-all duration-200 hover:bg-white/60"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.3, ease }}
              >
                <div className="text-sm font-medium text-ds-body">{row.feature}</div>
                <div className="flex items-center gap-2 md:justify-center text-xs text-ds-muted">
                  <span className="md:hidden text-[10px] uppercase tracking-wider text-ds-muted/60">eSIM:</span>
                  <CheckCircle2 size={15} className="text-ds-green shrink-0" />
                  <span className="text-ds-green-dark font-medium">{row.esim}</span>
                </div>
                <div className="flex items-center gap-2 md:justify-center text-xs text-ds-muted/60 md:text-ds-muted pb-2 md:pb-0 border-b border-ds-line/50 md:border-0">
                  <span className="md:hidden text-[10px] uppercase tracking-wider text-ds-muted/60">SIM:</span>
                  <span className="text-ds-muted/40">&mdash;</span>
                  <span>{row.sim}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 md:py-24 text-center overflow-hidden relative">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-ds-green opacity-[0.04] blur-[120px]" />
        <div className="wrap relative z-10">
          <motion.div {...fadeUp()}>
            <h2 className="text-[clamp(28px,3.2vw,44px)] font-extrabold tracking-tight text-white mb-3">Ready to switch?</h2>
            <p className="text-base text-white/45 max-w-[440px] mx-auto mb-8">
              Join 50,000+ travellers who never overpay for data abroad. Your first eSIM is 3 minutes away.
            </p>
            <a href="/#plans">
              <Button variant="primary" size="lg">
                Get your eSIM <ArrowRight size={16} />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}

/* --- Animated phone screen content --- */

function AnimatedScreenContent({ tab }: { tab: 'iphone' | 'android' }) {
  const rows = tab === 'iphone'
    ? [
        { label: 'Cellular', val: 'Add eSIM', highlight: true },
        { label: 'Wi-Fi', val: 'Connected', highlight: false },
        { label: 'Bluetooth', val: 'On', highlight: false },
        { label: 'DataSafari', val: 'Installing...', highlight: true, green: true },
      ]
    : [
        { label: 'SIM Manager', val: 'Add eSIM', highlight: true },
        { label: 'Wi-Fi', val: 'Connected', highlight: false },
        { label: 'Bluetooth', val: 'On', highlight: false },
        { label: 'DataSafari', val: 'Ready', highlight: true, green: true },
      ]

  return (
    <div className="space-y-2">
      {rows.map((r, i) => (
        <motion.div
          key={r.label}
          className="flex items-center justify-between py-2 px-2.5 rounded-r"
          style={{ background: r.highlight ? 'rgba(1,219,93,.08)' : 'transparent' }}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.15, duration: 0.3 }}
        >
          <span className="text-[10px] font-medium text-ds-ink">{r.label}</span>
          <span className={`text-[10px] font-semibold ${r.green ? 'text-ds-green-dark' : 'text-ds-muted'}`}>
            {r.val}
          </span>
        </motion.div>
      ))}
      {/* QR scan animation */}
      <motion.div
        className="mt-3 mx-auto w-20 h-20 rounded-lg border-2 border-dashed border-ds-green/40 flex items-center justify-center"
        animate={{ rotate: [0, 3, -3, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease }}
      >
        <QrCode size={28} className="text-ds-green/60" />
      </motion.div>
      <motion.p
        className="text-[9px] text-ds-muted text-center mt-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Scan QR code to install
      </motion.p>
    </div>
  )
}
