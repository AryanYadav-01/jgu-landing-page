'use client'
import { useState } from 'react'
import { useReveal } from './useReveal'

const strengthItems = [
  { icon: '🧠', title: 'Whole Brain Learning', desc: 'Pedagogy that blends technical skills with creative thinking, emotional intelligence, and leadership.' },
  { icon: '🏭', title: 'Industry-Embedded Curriculum', desc: 'Programs co-designed with IBM, ISRO, and leading companies — every semester, industry-tested.' },
  { icon: '💰', title: 'Paid On-the-Job Training', desc: 'Real employment during your degree. Earn while you learn with full-pay training opportunities.' },
  { icon: '🌍', title: 'Global Student Exchange', desc: 'Cross-cultural internships, international curricula, and foreign university partnerships for a world-class edge.' },
]

const stats = [
  { num: '5K+', label: 'Active Students', sub: 'Across all programs', bg: 'bg-teal text-white' },
  { num: '98%', label: 'Placement Rate', sub: 'Class of 2024', bg: 'bg-gold text-ink' },
]

export default function Strengths() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [ref1, v1] = useReveal()
  const [ref2, v2] = useReveal()

  return (
    <section id="strengths" className="py-[120px] px-[5vw] bg-paper relative overflow-hidden">
      <div className="grid md:grid-cols-2 gap-16 lg:gap-32 items-center">
        {/* Left */}
        <div ref={ref1} className={`transition-all duration-700 ${v1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-7 h-[2px] bg-gold" />
            <span className="text-[0.75rem] font-bold tracking-[2px] uppercase text-gold">Why Choose JGU</span>
          </div>
          <h2 className="font-playfair text-[clamp(2rem,4vw,3.2rem)] font-black text-ink leading-[1.1] tracking-[-0.5px] mb-4">
            Built Different,<br />for a Different World
          </h2>
          <p className="text-gray-500 leading-[1.75] mb-8 max-w-[520px]">
            We don't just prepare students for jobs — we prepare them for a lifetime of growth, leadership, and impact.
          </p>
          <div className="flex flex-col gap-4">
            {strengthItems.map((item, i) => (
              <div
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`flex gap-5 items-start p-5 rounded-2xl border cursor-pointer transition-all duration-300
                  ${activeIdx === i
                    ? 'bg-white border-black/12 shadow-[0_8px_32px_rgba(10,10,15,0.08)]'
                    : 'border-transparent hover:bg-white hover:border-black/12'
                  }`}
              >
                <div className={`w-[46px] h-[46px] rounded-xl flex items-center justify-center text-[1.2rem] flex-shrink-0 transition-all duration-300
                  ${activeIdx === i ? 'bg-ink' : 'bg-cream'}`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-[1rem] mb-1 text-ink">{item.title}</h4>
                  <p className="text-[0.85rem] text-gray-500 leading-[1.6]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right bento grid */}
        <div ref={ref2} className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-200 ${v2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {stats.map(s => (
            <div key={s.label} className={`${s.bg} rounded-[20px] p-8 hover:-translate-y-1 transition-transform duration-400`}>
              <div className="font-mono-custom text-[3rem] font-bold leading-none mb-2">{s.num}</div>
              <h3 className="font-playfair text-[1rem] font-bold">{s.label}</h3>
              <div className="text-[0.78rem] opacity-70 mt-1">{s.sub}</div>
            </div>
          ))}
          {/* Wide card */}
          <div className="col-span-2 bg-white border border-black/12 rounded-[20px] p-8 flex items-center gap-8 hover:-translate-y-1 transition-transform duration-400">
            <div className="font-mono-custom text-[5rem] font-bold text-gold leading-none flex-shrink-0">200+</div>
            <div>
              <h3 className="font-playfair text-[1.3rem] font-bold text-ink mb-2">Industry Hiring Partners</h3>
              <p className="text-[0.85rem] text-gray-500">From TCS to ICICI, startups to MNCs — our network opens doors that matter.</p>
            </div>
          </div>
          <div className="bg-ink rounded-[20px] p-8 hover:-translate-y-1 transition-transform duration-400">
            <div className="font-mono-custom text-[2rem] font-bold text-gold leading-none mb-1">NEP<br/>2020</div>
            <h3 className="font-playfair text-[0.9rem] font-bold text-white">Fully Compliant</h3>
            <div className="text-[0.78rem] text-white/50 mt-1">UGC approved</div>
          </div>
          <div className="bg-cream border border-black/12 rounded-[20px] p-8 hover:-translate-y-1 transition-transform duration-400">
            <div className="font-mono-custom text-[2rem] font-bold text-ink leading-none mb-1">60+</div>
            <h3 className="font-playfair text-[1rem] font-bold text-ink">Years of Trust</h3>
            <div className="text-[0.78rem] text-gray-500 mt-1">Since 1965</div>
          </div>
        </div>
      </div>
    </section>
  )
}
