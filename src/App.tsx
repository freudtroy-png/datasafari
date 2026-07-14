import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { Home } from '@/pages/Home'
import { HowItWorks } from '@/pages/HowItWorks'
import { FAQ } from '@/pages/FAQ'
import { Legal } from '@/pages/Legal'
import { ScrollToTop } from '@/components/ScrollToTop'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Legal title="Privacy Policy" />} />
          <Route path="/terms" element={<Legal title="Terms of Service" />} />
          <Route path="/refund" element={<Legal title="Refund Policy" />} />
          <Route path="/cookies" element={<Legal title="Cookie Policy" />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
