'use client'
import { useState } from 'react'
import { useReveal } from './useReveal'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)
  const [ref, visible] = useReveal()

  const handleSubmit = () => {
    if (email && email.includes('@')) {
      setSent(true)
      setEmail('')
      setTimeout(() => setSent(false), 3000)
    } else {
      setError(true)
      setTimeout(() => setError(false), 2000)
    }
  }

  return (
    <section id="apply" className="py-[120px] px-[5vw] bg-paper">
      <div
        ref={ref}
        className={`bg-ink rounded-[32px] p-12 sm:p-20 text-center relative overflow-hidden transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        {/* Glow */}
        <div className="absolute top-[-50%] left-[-20%] w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(201,168,76,.12) 0%, transparent 65%)' }} />

        <h2 className="relative font-playfair text-[clamp(2.2rem,4.5vw,3.8rem)] font-black text-white mb-6 leading-tight tracking-[-0.5px]">
          Your Future Starts<br />
          <em className="text-gold not-italic">Here, at JGU</em>
        </h2>
        <p className="relative text-white/65 max-w-[480px] mx-auto mb-10 leading-[1.75]">
          Join thousands of students who chose JG University to build careers that matter. Applications for 2026–27 are now open.
        </p>

        {/* Email form */}
        <div className="relative flex flex-col sm:flex-row max-w-[480px] mx-auto mb-3 gap-0">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className={`flex-1 px-6 py-4 bg-white/10 text-white placeholder-white/40 outline-none border-[1.5px] rounded-xl sm:rounded-r-none sm:border-r-0 font-dmSans text-[0.9rem] transition-colors duration-200
              ${error ? 'border-rust' : 'border-white/20'}`}
          />
          <button
            onClick={handleSubmit}
            className={`px-7 py-4 font-bold text-[0.85rem] uppercase tracking-[0.5px] border-0 cursor-pointer rounded-xl sm:rounded-l-none transition-colors duration-300 font-dmSans
              ${sent ? 'bg-teal-light text-white' : 'bg-gold text-ink hover:bg-gold-light'}`}
          >
            {sent ? '✓ Sent!' : 'Get Prospectus'}
          </button>
        </div>
        <p className="relative text-[0.78rem] text-white/40 mb-10">No spam. Unsubscribe anytime. We respect your privacy.</p>

        {/* Action buttons */}
        <div className="relative flex gap-4 justify-center flex-wrap">
          <a href="#programs" className="group inline-flex items-center gap-2 bg-gold text-ink font-semibold text-[0.9rem] px-8 py-4 rounded-xl no-underline hover:bg-gold-light transition-colors duration-300">
            View All Programs
          </a>
          <a href="tel:+91" className="inline-flex items-center gap-2 bg-transparent text-white font-semibold text-[0.9rem] px-8 py-4 rounded-xl border-[1.5px] border-white/30 no-underline hover:border-white/60 transition-all duration-250">
            📞 Talk to Admissions
          </a>
        </div>
      </div>
    </section>
  )
}
