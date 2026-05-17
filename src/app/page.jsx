import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import About from '@/components/About'
import Programs from '@/components/Programs'
import Strengths from '@/components/Strengths'
import Testimonials from '@/components/Testimonials'
import Partners from '@/components/Partners'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Programs />
      <Strengths />
      <Testimonials />
      <Partners />
      <CTA />
      <Footer />
    </main>
  )
}
