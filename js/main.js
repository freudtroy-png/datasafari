import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { createIcons } from 'lucide'

gsap.registerPlugin(ScrollTrigger)

/* ── Nav: solid background on scroll ── */
const nav = document.getElementById('nav')
const burger = document.getElementById('burger')
const mNav = document.getElementById('mnav')
const burgerIcon = document.getElementById('burger-icon')

function updateNav() {
  if (window.scrollY > 60) {
    nav.classList.add('solid')
  } else {
    nav.classList.remove('solid')
  }
}
window.addEventListener('scroll', updateNav, { passive: true })
updateNav()

/* ── Mobile menu ── */
let mobileOpen = false

function toggleMobile() {
  mobileOpen = !mobileOpen
  if (mobileOpen) {
    mNav.classList.add('show')
    gsap.fromTo(mNav.querySelectorAll('a'), 
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.35, stagger: 0.06, ease: 'power2.out' }
    )
    burgerIcon.innerHTML = '<svg width="22" height="22"><use href="#ic-close"/></svg>'
  } else {
    gsap.to(mNav.querySelectorAll('a'), {
      opacity: 0, y: -8, duration: 0.2, stagger: 0.02, ease: 'power2.in',
      onComplete: () => {
        mNav.classList.remove('show')
        burgerIcon.innerHTML = '<svg width="22" height="22"><use href="#ic-menu"/></svg>'
      }
    })
  }
}

if (burger) {
  burger.addEventListener('click', toggleMobile)
}

/* ── Active page detection ── */
const currentPath = window.location.pathname.split('/').pop() || 'index.html'
document.querySelectorAll('.nav-links a, .m-nav a').forEach(link => {
  const href = link.getAttribute('href')
  if (!href) return
  const linkPage = href.split('#')[0] || 'index.html'
  if (linkPage === currentPath) {
    link.classList.add('nav-active')
  }
})

/* ── Smooth scroll for hash links ── */
document.querySelectorAll('a[href^="#"], a[href*="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const hash = link.getAttribute('href').split('#')[1]
    if (!hash) return
    const target = document.getElementById(hash)
    if (!target) return
    e.preventDefault()
    if (mobileOpen) toggleMobile()
    const offset = 80
    const top = target.getBoundingClientRect().top + window.scrollY - offset
    gsap.to(window, {
      scrollY: top,
      duration: 0.8,
      ease: 'power3.out'
    })
  })
})

/* ── Section entrance animations ── */
gsap.utils.toArray('[data-anim]').forEach(el => {
  gsap.from(el, {
    opacity: 0,
    y: 40,
    duration: 0.7,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: el,
      start: 'top 85%',
      toggleActions: 'play none none none'
    }
  })
})

gsap.utils.toArray('[data-anim-children]').forEach(parent => {
  const children = parent.children
  gsap.from(children, {
    opacity: 0,
    y: 30,
    duration: 0.5,
    stagger: 0.08,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: parent,
      start: 'top 85%',
      toggleActions: 'play none none none'
    }
  })
})

/* ── Lucide icons ── */
createIcons()
