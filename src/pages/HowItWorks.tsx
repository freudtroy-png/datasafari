import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Smartphone, Globe, QrCode, Wifi, CheckCircle2, ArrowRight, Shield, Zap, Clock, RefreshCw } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const ease = [0.16, 1, 0.3, 1] as const

function fadeUp(delay = 0) {
  return { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' as const }, transition: { duration: 0.6, ease, delay } }
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

const steps = [
  { num: '01', title: 'Pick your plan', desc: 'Browse 200+ destinations, pick your data allowance, and checkout in seconds — no account required.', icon: Globe },
  { num: '02', title: 'Install your eSIM', desc: 'Scan the QR code from your email or install from our app. Takes under 2 minutes on any eSIM-ready device.', icon: QrCode },
  { num: '03', title: 'Arrive & connect', desc: 'Your eSIM activates on landing. No settings, no SIM swap, no airport kiosk. You are on the local network instantly.', icon: Wifi },
]

export function HowItWorks() {
  const [installTab, setInstallTab] = useState<'iphone' | 'android'>('iphone')

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0b1628 0%, #132238 50%, #0f172a 100%)' }} />
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-ds-green opacity-[0.03] blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-white opacity-[0.02] blur-[80px]" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.02]" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="#fff" strokeWidth="0.5" /></pattern></defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div className="wrap relative z-10 pt-28 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease }}>
              <Badge variant="invert" className="mb-5"><Wifi size={13} /> eSIM setup guide</Badge>
              <h1 className="text-[clamp(34px,5vw,64px)] font-extrabold tracking-tighter leading-[1.05] text-white mb-5">
                Connected in<br />
                <span className="text-ds-green">3 minutes</span>
                <span className="text-white/30"> flat.</span>
              </h1>
              <p className="text-base md:text-lg text-white/50 leading-relaxed max-w-[520px] mb-8">
                Buy online, scan a QR code, and you are live. No physical SIM, no airport kiosk, no roaming charges. DataSafari works in over 190 countries with local 4G/5G speeds.
              </p>
              <div className="flex gap-3">
                <a href="/#plans"><Button variant="primary" size="lg">Get your eSIM</Button></a>
                <a href="#install"><Button variant="outline" size="lg" className="text-white border-white/25 hover:border-white hover:bg-white/6">Installation guide</Button></a>
              </div>
              <div className="flex gap-6 mt-10 pt-8 border-t border-white/[0.06]">
                {[
                  { label: '190+ countries', icon: Globe },
                  { label: '3 min activation', icon: Zap },
                  { label: '50K+ travellers', icon: Shield },
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
            >
              <div className="relative">
                <img src="/assets/mockups/iphone-esim.png" alt="iPhone eSIM setup" className="w-52 h-auto drop-shadow-2xl" />
                <motion.div
                  className="absolute -top-2 -right-2 w-10 h-10 bg-ds-green rounded-full flex items-center justify-center text-ds-ink shadow-lg shadow-ds-green/30"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: 'spring', stiffness: 300 }}
                >
                  <CheckCircle2 size={20} />
                </motion.div>
                <motion.div
                  className="absolute -bottom-3 -left-4 px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl flex items-center gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <div className="flex -space-x-1.5">
                    {['#01db5d', '#f59e0b', '#3b82f6'].map((c, i) => (
                      <div key={i} className="w-5 h-5 rounded-full border border-white/20" style={{ background: c }} />
                    ))}
                  </div>
                  <span className="text-[10px] text-white/70 font-medium">4.9 &middot; 50K</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 3 STEPS ─── */}
      <section className="py-24 md:py-32 bg-ds-wash">
        <div className="wrap">
          <motion.div {...fadeUp()} className="text-center max-w-[600px] mx-auto mb-16">
            <Badge><Zap size={13} /> How it works</Badge>
            <h2 className="text-[clamp(28px,3.2vw,44px)] font-extrabold tracking-tight text-ds-ink leading-[1.12] mt-3 mb-3">
              Three steps, zero hassle.
            </h2>
            <p className="text-ds-muted leading-relaxed">From purchase to connection in minutes. No physical SIM, no paperwork, no waiting in line.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-[1000px] mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease, delay: i * 0.12 }}
              >
                <div className="flex flex-col items-center mb-5">
                  <span className="text-[clamp(48px,5vw,72px)] font-extrabold text-ds-green/20 leading-none select-none">{step.num}</span>
                  <div className="w-14 h-14 rounded-full bg-white shadow-lg shadow-ds-green/10 flex items-center justify-center -mt-9">
                    <step.icon size={24} className="text-ds-green" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-ds-ink mb-2">{step.title}</h3>
                <p className="text-sm text-ds-muted leading-relaxed max-w-[280px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DEVICE COMPATIBILITY ─── */}
      <section id="devices" className="py-24 md:py-32 bg-white">
        <div className="wrap">
          <motion.div {...fadeUp()} className="text-center max-w-[600px] mx-auto mb-14">
            <Badge><Smartphone size={13} /> Compatible devices</Badge>
            <h2 className="text-[clamp(28px,3.2vw,44px)] font-extrabold tracking-tight text-ds-ink leading-[1.12] mt-3 mb-3">
              Works with almost every modern phone.
            </h2>
            <p className="text-ds-muted leading-relaxed">Most phones from 2019 onwards support eSIM. If your phone has an EID number, you are good to go. Dial <span className="text-ds-green font-mono font-semibold">*#06#</span> to check.</p>
          </motion.div>

          <div className="max-w-[800px] mx-auto">
            <motion.div {...fadeUp(0.1)} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {devices.map((d, i) => (
                <motion.div
                  key={d.name}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: i * 0.04, duration: 0.4, ease }}
                >
                  <div className="w-12 h-12 rounded-2xl mx-auto mb-3 flex items-center justify-center text-sm font-bold" style={{ background: `${d.color}10`, color: d.color }}>
                    {d.name.slice(0, 2).toUpperCase()}
                  </div>
                  <p className="text-sm font-semibold text-ds-ink mb-0.5">{d.name}</p>
                  <p className="text-[11px] text-ds-muted/60 leading-snug">{d.models}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div {...fadeUp(0.2)} className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-ds-wash text-ds-muted text-sm">
                <Search size={15} className="text-ds-muted/60" />
                <span>Not sure? Dial <span className="text-ds-green font-mono font-semibold">*#06#</span> to check for an EID number</span>
              </div>
            </motion.div>
          </div>
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
            <p className="text-ds-muted leading-relaxed">Buy from anywhere. Install at home or in the airport lounge. The eSIM activates automatically when you land.</p>
          </motion.div>

          <div className="max-w-[900px] mx-auto">
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
              <motion.div
                key={installTab}
                className="flex justify-center"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease }}
              >
                <img
                  src={installTab === 'iphone' ? '/assets/mockups/iphone-esim.png' : '/assets/mockups/android-esim.png'}
                  alt={`${installTab === 'iphone' ? 'iPhone' : 'Android'} eSIM setup`}
                  className="w-52 h-auto drop-shadow-xl"
                />
              </motion.div>

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
                    The plan only activates when you connect to a local network at your destination. No charges until you land.
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
            <p className="text-ds-muted leading-relaxed">Digital SIM is faster, more secure, and better for the planet. Here is how they stack up.</p>
          </motion.div>

          <motion.div {...fadeUp(0.1)} className="max-w-[750px] mx-auto">
            <div className="hidden md:grid grid-cols-[1fr_100px_100px] gap-4 px-5 py-3 text-xs font-bold uppercase tracking-wider text-ds-muted border-b border-ds-line">
              <span>Feature</span>
              <span className="text-center text-ds-green-dark">eSIM</span>
              <span className="text-center">Physical SIM</span>
            </div>

            {[
              { feature: 'Activation time', esim: '3 minutes', sim: 'Days to deliver' },
              { feature: 'Security', esim: 'Cannot be removed', sim: 'Card can be stolen' },
              { feature: 'Multiple lines', esim: '8+ eSIMs', sim: 'Dual SIM max' },
              { feature: 'Roaming charges', esim: 'Zero, local data', sim: 'Expensive roaming' },
              { feature: 'Pre-trip setup', esim: 'Buy & install anytime', sim: 'Must have card before' },
              { feature: 'Lost phone', esim: 'Remotely removable', sim: 'Card stays active' },
              { feature: 'Switch provider', esim: 'Instant, in-app', sim: 'Buy new card' },
              { feature: 'Environmental impact', esim: 'Zero plastic waste', sim: 'Plastic + shipping' },
            ].map((row, i) => (
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
