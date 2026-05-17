'use client'
import { useEffect, useRef } from 'react'

function CounterStat({ target, label }) {
  const numRef = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = numRef.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 1800
        const steps = 60
        const inc = target / steps
        let cur = 0
        const interval = setInterval(() => {
          cur += inc
          if (cur >= target) { cur = target; clearInterval(interval) }
          el.textContent = Math.floor(cur) + (target === 60 ? '+' : '')
        }, duration / steps)
      }
    }, { threshold: 0.4 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <div>
      <span ref={numRef} className="block font-mono-custom text-[1.8rem] font-bold text-ink">0</span>
      <span className="text-[0.78rem] text-gray-500 uppercase tracking-[0.8px]">{label}</span>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="min-h-screen px-[5vw] flex items-center relative overflow-hidden bg-paper">
      {/* Background */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 80% 60% at 70% 50%, rgba(201,168,76,.15) 0%, transparent 60%), radial-gradient(ellipse 50% 80% at 10% 80%, rgba(26,95,110,.1) 0%, transparent 55%)'
      }} />
      {/* Grid */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: 'linear-gradient(rgba(10,10,15,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(10,10,15,0.12) 1px, transparent 1px)',
        backgroundSize: '64px 64px'
      }} />

      {/* Content */}
      <div className="relative z-10 max-w-[700px] animate-[fadeUp_0.9s_ease_both] pt-[72px] md:pt-0">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/40 rounded-full px-[18px] py-[7px] mb-8">
          <span className="w-2 h-2 bg-gold rounded-full animate-pulse2" />
          <span className="text-[0.78rem] font-semibold text-gold tracking-[1.2px] uppercase">Admissions Open 2026–27</span>
        </div>

        {/* Heading */}
        <h1 className="font-playfair text-[clamp(3rem,7vw,5.5rem)] font-black leading-[1.06] tracking-[-1.5px] mb-6">
          Shape{' '}
          <span className="text-gold italic">Tomorrow</span>
          <br />
          at{' '}
          <span className="text-teal">JG University</span>
        </h1>

        <p className="text-[1.1rem] text-gray-500 max-w-[500px] leading-[1.75] mb-10">
          A new-age tech-driven university where knowledge meets experience. Prepare for the future with industry-relevant programs, global collaborations, and whole-brain learning.
        </p>

        {/* Actions */}
        <div className="flex gap-4 flex-wrap">
          <a href="#programs" className="group inline-flex items-center gap-2 bg-ink text-gold font-semibold text-[0.9rem] tracking-[0.4px] px-8 py-4 rounded-xl border-2 border-ink no-underline relative overflow-hidden transition-all duration-300">
            <span className="absolute inset-0 bg-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-350 ease-in-out" />
            <span className="relative z-10">Explore Programs</span>
            <span className="relative z-10 group-hover:text-ink transition-colors duration-300">→</span>
          </a>
          <a href="#about" className="inline-flex items-center gap-2 bg-transparent text-ink font-semibold text-[0.9rem] px-8 py-4 rounded-xl border-2 border-black/12 no-underline hover:border-ink hover:bg-ink/5 transition-all duration-250">
            Discover More
          </a>
        </div>

        {/* Stats */}
        <div className="flex gap-10 mt-14 pt-8 border-t border-black/12 flex-wrap">
          <CounterStat target={17} label="Colleges" />
          <CounterStat target={60} label="+ Years Legacy" />
          <CounterStat target={30} label="+ Programs" />
        </div>
      </div>

      {/* Floating Visual (desktop only) */}
      <div className="absolute right-[-2vw] top-1/2 -translate-y-1/2 w-[min(45vw,560px)] hidden lg:block animate-[fadeIn_1.2s_ease_0.3s_both]">
        <div className="relative w-full" style={{ aspectRatio: '4/5' }}>
          {/* Main card */}
          <div className="absolute inset-[10%_8%_8%_8%] bg-ink rounded-3xl shadow-[0_24px_80px_rgba(10,10,15,0.14)] flex flex-col items-center justify-center p-10">
            <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center text-4xl mb-6">🎓</div>
            <h2 className="font-playfair text-[clamp(1.5rem,2.5vw,2.2rem)] text-white text-center mb-3">Learn Beyond<br />The Textbook</h2>
            <p className="text-white/60 text-[0.85rem] text-center">Real-world projects · Industry faculty<br />Global partnerships</p>
            <div className="mt-6 bg-white/8 backdrop-blur rounded-xl p-4 flex items-center gap-3 w-full">
              <div className="flex">
                {['JG','AB','KS'].map((i, idx) => (
                  <div key={i} className={`w-[30px] h-[30px] rounded-full border-2 border-ink flex items-center justify-center text-[0.65rem] font-bold ${idx===0?'bg-gold text-ink':idx===1?'bg-teal text-white ml-[-8px]':'bg-rust text-white ml-[-8px]'}`}>{i}</div>
                ))}
              </div>
              <span className="text-white/80 text-[0.78rem]"><strong className="text-white">5,000+</strong> students thriving</span>
            </div>
          </div>
          {/* Float card 1 */}
          <div className="absolute w-[55%] top-[5%] right-[-6%] bg-gold p-6 rounded-[20px] animate-float1 shadow-[0_24px_80px_rgba(10,10,15,0.14)]">
            <div className="font-mono-custom text-[2.5rem] font-bold text-ink">A+</div>
            <div className="text-[0.75rem] font-semibold text-ink/60 uppercase tracking-[0.8px]">Grade · NAAC</div>
          </div>
          {/* Float card 2 */}
          <div className="absolute w-[50%] bottom-[8%] left-[-5%] bg-teal p-6 rounded-[20px] animate-float2 shadow-[0_24px_80px_rgba(10,10,15,0.14)]">
            <div className="font-mono-custom text-[2rem] font-bold text-white">98%</div>
            <div className="text-[0.72rem] text-white/70 uppercase tracking-[0.8px]">Placement Rate</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(40px) } to { opacity:1; transform:translateY(0) } }
        @keyframes fadeIn { from { opacity:0; transform:translateX(40px) } to { opacity:1; transform:translateX(0) } }
      `}</style>
    </section>
  )
}
