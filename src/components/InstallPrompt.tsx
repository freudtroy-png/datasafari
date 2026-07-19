import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, Smartphone, X } from 'lucide-react'

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [show, setShow] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('ds-install-dismissed')) {
      setDismissed(true)
      return
    }

    if (window.matchMedia('(display-mode: standalone)').matches) {
      return
    }

    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
    }

    window.addEventListener('beforeinstallprompt', handler)

    const timer = setTimeout(() => setShow(true), 4000)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('beforeinstallprompt', handler)
    }
  }, [])

  const canInstall = !!deferredPrompt
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream

  const handleInstall = async () => {
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    const result = await deferredPrompt.userChoice
    if (result.outcome === 'accepted') {
      setShow(false)
    }
    setDeferredPrompt(null)
  }

  const handleDismiss = () => {
    setShow(false)
    setDismissed(true)
    sessionStorage.setItem('ds-install-dismissed', 'true')
  }

  if (!show || dismissed) return null

  return (
    <div className="fixed bottom-24 right-5 z-[60] flex flex-col items-end gap-2">
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-ds-ink/90 backdrop-blur-xl border border-white/[0.1] rounded-[16px] p-3.5 shadow-[0_8px_30px_rgba(0,0,0,.4)] w-[220px]"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-ds-green to-ds-lime flex items-center justify-center shrink-0">
                <Smartphone size={15} className="text-ds-ink" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-white leading-tight">Install DataSafari</div>
                <div className="text-[11px] text-white/40 leading-tight">Add to home screen</div>
              </div>
              <button
                onClick={handleDismiss}
                className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white/30 hover:text-white hover:bg-white/[0.08] transition-all"
              >
                <X size={13} />
              </button>
            </div>

            {canInstall ? (
              <button
                onClick={handleInstall}
                className="w-full h-9 bg-ds-green text-ds-ink rounded-full text-xs font-bold hover:bg-ds-lime transition-all flex items-center justify-center gap-1.5 active:scale-[0.97]"
              >
                <Download size={13} /> Install now
              </button>
            ) : (
              <div className="text-[11px] text-white/40 leading-relaxed text-center">
                {isIOS
                  ? 'Tap Share then Add to Home Screen'
                  : 'Open in Chrome to install'}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setExpanded(!expanded)}
        className="w-12 h-12 rounded-full bg-ds-ink border border-white/[0.12] shadow-[0_4px_20px_rgba(0,0,0,.3)] flex items-center justify-center text-white hover:border-ds-green hover:text-ds-green transition-all active:scale-90"
        aria-label="Install app"
      >
        <Download size={18} />
      </button>
    </div>
  )
}
