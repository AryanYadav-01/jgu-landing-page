'use client'
import { useReveal } from './useReveal'

export default function About() {
  const [ref1, visible1] = useReveal()
  const [ref2, visible2] = useReveal()

  const cards = [
    { icon: '🌐', title: 'Global Outlook', desc: 'International collaborations for curriculum, delivery, and student exchange programs worldwide.' },
    { icon: '🔬', title: 'Research & Innovation', desc: 'IIoT Labs, R&D incubation centers, and hands-on tech infrastructure for every learner.' },
  ]

  return (
    <section id="about" className="py-[120px] px-[5vw] bg-ink relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-[-50%] right-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,168,76,.1) 0%, transparent 70%)' }} />

      <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        {/* Left */}
        <div
          ref={ref1}
          className={`transition-all duration-700 ${visible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-7 h-[2px] bg-gold" />
            <span className="text-[0.75rem] font-bold tracking-[2px] uppercase text-gold">Who We Are</span>
          </div>
          <h2 className="font-playfair text-[clamp(2rem,4vw,3.2rem)] font-black text-white leading-[1.1] tracking-[-0.5px] mb-6">
            A Legacy of Excellence<br />Since 1965
          </h2>
          <p className="text-white/65 leading-[1.75] mb-4">
            JG University is a UGC-approved, tech-driven institution sponsored by ASIA Charitable Trust — managing 17 colleges and 3 schools for over six decades. We combine academic rigor with real-world experience to create future-ready graduates.
          </p>
          <p className="text-white/65 leading-[1.75] mb-8">
            Our pedagogy is designed to match everyday industry challenges, bring out academic brilliance, and nurture global change leaders with values, skills, and purpose.
          </p>
          <a href="#programs" className="group inline-flex items-center gap-2 bg-ink text-gold font-semibold text-[0.9rem] px-8 py-4 rounded-xl border-2 border-gold/40 no-underline relative overflow-hidden transition-all duration-300 hover:border-gold">
            <span className="absolute inset-0 bg-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-350" />
            <span className="relative z-10 group-hover:text-ink transition-colors duration-300">Explore Programs</span>
            <span className="relative z-10 group-hover:text-ink transition-colors duration-300">→</span>
          </a>
        </div>

        {/* Right grid */}
        <div
          ref={ref2}
          className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-200 ${visible2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Tall gold card */}
          <div className="bg-gold rounded-[20px] p-8 flex flex-col justify-between row-span-2 hover:shadow-[0_20px_60px_rgba(201,168,76,0.2)] transition-all duration-300">
            <div>
              <div className="text-[2rem] mb-4">🏛️</div>
              <h4 className="font-playfair text-[1.1rem] text-ink font-bold mb-2">Established Trust</h4>
              <p className="text-[0.85rem] text-ink/70 leading-[1.65]">Backed by ASIA Charitable Trust with 60+ years shaping Gujarat's education landscape.</p>
            </div>
            <div className="font-mono-custom text-[4rem] font-bold text-ink leading-none mt-auto">1965</div>
          </div>
          {/* Small cards */}
          {cards.map((card) => (
            <div key={card.title} className="bg-white/6 border border-white/10 rounded-[20px] p-8 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
              <div className="text-[2rem] mb-4">{card.icon}</div>
              <h4 className="font-playfair text-[1.1rem] text-gold font-bold mb-2">{card.title}</h4>
              <p className="text-[0.85rem] text-white/60 leading-[1.65]">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
