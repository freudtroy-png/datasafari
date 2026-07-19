import { useEffect, useState } from 'react'

export function useInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [supported, setSupported] = useState(false)
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream

  useEffect(() => {
    if (window.matchMedia('(display-mode: standalone)').matches) return

    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setSupported(true)
    }

    window.addEventListener('beforeinstallprompt', handler)
    if (isIOS) setSupported(true)

    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [isIOS])

  const install = async () => {
    if (isIOS) return
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    await deferredPrompt.userChoice
    setDeferredPrompt(null)
    setSupported(false)
  }

  return { supported, isIOS, install }
}
