import { motion } from 'framer-motion'
import { CheckCircle2, Smartphone, Wifi, QrCode } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

const ease = [0.16, 1, 0.3, 1] as const

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' as const },
  transition: { duration: 0.6, ease },
}

const devices = [
  { name: 'iPhone', models: 'XS, XR, 11, 12, 13, 14, 15, 16, SE (2020+)', icon: Smartphone },
  { name: 'Samsung', models: 'Galaxy S20+, S21+, S22+, S23+, S24+, Z Fold/Flip', icon: Smartphone },
  { name: 'Google Pixel', models: 'Pixel 4, 5, 6, 7, 8, 9, 10', icon: Smartphone },
  { name: 'Huawei', models: 'P40, P50, P60, Mate 40, Mate 50', icon: Smartphone },
  { name: 'OnePlus', models: 'OnePlus 11, 12, 13, Open', icon: Smartphone },
  { name: 'Xiaomi', models: '13, 14, 15 series, Pad 6, Pad 7', icon: Smartphone },
  { name: 'Sony', models: 'Xperia 1 III, 1 IV, 1 V, 10 III+', icon: Smartphone },
  { name: 'Motorola', models: 'Edge 40+, 50+, Razr 2023+', icon: Smartphone },
  { name: 'Nothing', models: 'Phone (2), Phone (3)', icon: Smartphone },
  { name: 'iPad', models: 'iPad Air (4th gen+), iPad Pro (2018+), iPad mini (6th gen+)', icon: Smartphone },
]

const comparison = [
  { feature: 'Physical SIM card', esim: 'No card needed', sim: 'Plastic card required' },
  { feature: 'Activation time', esim: 'Under 3 minutes', sim: 'Days to deliver' },
  { feature: 'Switch provider', esim: 'Instant, in-app', sim: 'Need new card' },
  { feature: 'Multiple lines', esim: '8+ eSIMs per device', sim: 'Dual SIM max' },
  { feature: 'Lost phone', esim: 'Cannot be removed', sim: 'Card can be stolen' },
  { feature: 'Environmental impact', esim: 'Zero plastic waste', sim: 'Plastic + shipping' },
  { feature: 'Pre-trip setup', esim: 'Buy and install anytime', sim: 'Must have card before' },
  { feature: 'Coverage switching', esim: 'Download new plan', sim: 'Buy new card per country' },
]

export function HowItWorks() {
  return (
    <>
      {/* DEVICE COMPATIBILITY */}
      <section className="pt-32 pb-20 md:pb-24 bg-ds-ink text-white">
        <div className="wrap">
          <motion.div {...fadeUp} className="text-center max-w-[640px] mx-auto mb-12">
            <Badge variant="invert"><Smartphone size={13} /> Device check</Badge>
            <h1 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-tight leading-[1.08] mt-4 mb-3">
              Is your phone compatible?
            </h1>
            <p className="text-base text-white/50 leading-relaxed">
              Most phones released after 2020 support eSIM. Check your model below.
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-[800px] mx-auto">
            {devices.map((d) => (
              <Card key={d.name} className="bg-white/6 border-white/8 p-4 hover:bg-white/10 transition-all text-white">
                <div className="flex items-center gap-3 mb-1">
                  <d.icon size={18} className="text-ds-green shrink-0" />
                  <h3 className="text-sm font-bold">{d.name}</h3>
                </div>
                <p className="text-xs text-white/40 mt-1.5">{d.models}</p>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* INSTALLATION GUIDE */}
      <section className="py-20 md:py-24">
        <div className="wrap">
          <motion.div {...fadeUp} className="text-center max-w-[640px] mx-auto mb-12">
            <Badge><QrCode size={13} /> Installation guide</Badge>
            <h2 className="text-[clamp(28px,3.2vw,44px)] font-extrabold tracking-tight text-ds-ink leading-[1.12] mt-3 mb-3">
              How to install your eSIM
            </h2>
            <p className="text-ds-muted leading-relaxed">Install before you travel. The plan only activates when you arrive.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[800px] mx-auto">
            <motion.div {...fadeUp}>
              <div className="flex items-center gap-2 mb-5">
                <Wifi size={18} className="text-ds-green" />
                <h3 className="text-lg font-bold text-ds-ink">iPhone (iOS 16+)</h3>
              </div>
              <ol className="space-y-3 text-sm text-ds-body">
                {[
                  'Go to Settings > Cellular > Add eSIM.',
                  'Scan the QR code from your confirmation email.',
                  'Label your eSIM (e.g. "DataSafari") and set as primary data line.',
                  'Enable data roaming for the eSIM line.',
                  'Arrive at destination and turn on the eSIM line.',
                ].map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-ds-green/10 text-ds-green-dark text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.1, duration: 0.6, ease }}>
              <div className="flex items-center gap-2 mb-5">
                <Wifi size={18} className="text-ds-green" />
                <h3 className="text-lg font-bold text-ds-ink">Android</h3>
              </div>
              <ol className="space-y-3 text-sm text-ds-body">
                {[
                  'Go to Settings > Connections > SIM Manager.',
                  'Tap "Add eSIM" and scan your QR code.',
                  'Name your eSIM and set mobile data to this line.',
                  'Enable data roaming for the eSIM.',
                  'Connected as soon as you land.',
                ].map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-ds-green/10 text-ds-green-dark text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </motion.div>
          </div>
        </div>
      </section>

      {/* eSIM vs SIM COMPARISON */}
      <section className="py-20 md:py-24 bg-ds-wash">
        <div className="wrap">
          <motion.div {...fadeUp} className="text-center max-w-[640px] mx-auto mb-10">
            <Badge><CheckCircle2 size={13} /> eSIM vs Physical SIM</Badge>
            <h2 className="text-[clamp(28px,3.2vw,44px)] font-extrabold tracking-tight text-ds-ink leading-[1.12] mt-3 mb-3">
              Why digital wins.
            </h2>
          </motion.div>
          <motion.div {...fadeUp} className="max-w-[700px] mx-auto">
            <div className="grid grid-cols-[1fr_80px_80px] gap-3 text-sm font-semibold px-4 py-3 border-b border-ds-line text-ds-muted">
              <span>Feature</span>
              <span className="text-ds-green-dark text-center">eSIM</span>
              <span className="text-center">SIM</span>
            </div>
            {comparison.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-[1fr_80px_80px] gap-3 text-sm px-4 py-3.5 border-b border-ds-line last:border-0 items-center"
              >
                <span className="text-ds-body">{row.feature}</span>
                <span className="text-center">
                  <CheckCircle2 size={16} className="text-ds-green mx-auto" />
                </span>
                <span className="text-center text-ds-muted">&mdash;</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
