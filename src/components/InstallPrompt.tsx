import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, X, Smartphone, Share2 } from 'lucide-react'

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [show, setShow] = useState(false)
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

    const timer = setTimeout(() => setShow(true), 3000)

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

  return (
    <AnimatePresence>
      {show && !dismissed && (
        <motion.div
          initial={{ y: 120, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 120, opacity: 0, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 350, damping: 28, mass: 0.9 }}
          className="fixed bottom-4 sm:bottom-6 left-4 right-4 z-50 sm:left-auto sm:right-6 sm:w-[380px]"
        >
          <div className="relative bg-ds-ink/90 backdrop-blur-2xl border border-white/[0.08] rounded-[20px] p-4 shadow-[0_20px_60px_rgba(0,0,0,.5)]">
            <div className="absolute -top-1 -left-1 w-12 h-12 rounded-full bg-ds-green/20 animate-pulse" style={{ animationDuration: '3s' }} />

            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-ds-green to-ds-lime flex items-center justify-center shrink-0 shadow-lg">
                <Smartphone size={18} className="text-ds-ink" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-white">Install DataSafari</div>
                <div className="text-xs text-white/45 truncate">Add to home screen for quick access</div>
              </div>

              {canInstall ? (
                <button
                  onClick={handleInstall}
                  className="shrink-0 h-9 px-4 bg-ds-green text-ds-ink rounded-full text-xs font-bold hover:bg-ds-lime hover:shadow-[0_0_20px_rgba(1,219,93,.3)] transition-all flex items-center gap-1.5 active:scale-95"
                >
                  <Download size={13} /> Install
                </button>
              ) : isIOS ? (
                <div className="flex items-center gap-1.5 text-[11px] text-white/50 leading-tight max-w-[110px]">
                  <Share2 size={12} className="shrink-0" />
                  <span>Share then Add to Home Screen</span>
                </div>
              ) : (
                <div className="text-[11px] text-white/50 leading-tight max-w-[100px] text-center">
                  Open in Chrome to install
                </div>
              )}

              <button
                onClick={handleDismiss}
                className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white/30 hover:text-white hover:bg-white/[0.06] transition-all"
                aria-label="Dismiss"
              >
                <X size={15} />
              </button>
            </div>

            <div className="mt-3 h-[2px] rounded-full bg-white/[0.06] overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-ds-green"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 60, ease: 'linear' }}
                onAnimationComplete={handleDismiss}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
