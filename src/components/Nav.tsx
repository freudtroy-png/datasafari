import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Nav() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const isHome = pathname === '/'
  const links = [
    { label: 'Destinations', href: isHome ? '#destinations' : '/#destinations' },
    { label: 'Plans', href: isHome ? '#plans' : '/#plans' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Affiliates', href: '/affiliates' },
  ]

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          solid ? 'bg-ds-ink/92 backdrop-blur-xl py-4' : 'bg-transparent py-6'
        )}
      >
        <div className="wrap flex items-center gap-8">
          <Link to="/" className="flex items-center h-[34px] shrink-0">
            <img src="/assets/icons/datasafari-logo.png" alt="DataSafari" className="h-full w-auto" />
          </Link>
          <div className="hidden md:flex items-center gap-2 ml-auto">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors relative px-3"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={isHome ? '#plans' : '/#plans'}
              className="inline-flex items-center justify-center gap-2 rounded-r2 text-xs font-semibold transition-all duration-200 px-[18px] h-9 bg-transparent text-white/85 border border-white/20 hover:border-white hover:text-white"
            >
              Sign in
            </a>
            <a
              href={isHome ? '#plans' : '/#plans'}
              className="inline-flex items-center justify-center gap-2 rounded-r2 text-xs font-semibold transition-all duration-200 px-[18px] h-9 bg-ds-green text-ds-ink hover:bg-ds-lime"
            >
              Get eSIM
            </a>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden ml-auto text-white p-1"
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-ds-ink/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-7 md:hidden"
          >
            {links.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="text-xl font-medium text-white/80 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ delay: 0.24 }}
              className="flex flex-col gap-3 mt-2"
            >
              <a
                href={isHome ? '#plans' : '/#plans'}
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-r2 text-sm font-semibold px-7 h-11 bg-transparent text-white/85 border border-white/20"
              >
                Sign in
              </a>
              <a
                href={isHome ? '#plans' : '/#plans'}
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-r2 text-sm font-semibold px-7 h-11 bg-ds-green text-ds-ink"
              >
                Get eSIM
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
