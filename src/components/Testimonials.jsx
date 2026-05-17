'use client'
import { useState } from 'react'
import { useReveal } from './useReveal'

const testimonials = [
  { initials: 'JG', name: 'Jigardan Gadhvi', role: 'Celebrity Singer', color: 'bg-gold text-ink', text: 'JG shaped me into the person I am today. The faculty were more than teachers — they were mentors who guided every step. The values and discipline I learned here still guide me in my career.' },
  { initials: 'PR', name: 'Parth Rupareliya', role: 'Art Director', color: 'bg-teal text-white', text: 'My time at JG was life-changing. The academic curriculum emphasized both theoretical and practical learning. The faculty gave personalized attention that equipped me with the skills to succeed.' },
  { initials: 'YJ', name: 'Yatendra Sinh Joddha', role: 'Technical Lead, TCS', color: 'bg-rust text-white', text: 'The BCA program gave me a rock-solid IT foundation, and the focus on real training opportunities allowed me to apply knowledge in real-world scenarios. I draw on JG teachings every day at TCS.' },
  { initials: 'KS', name: 'Krishna Soni', role: 'Assistant Manager, ICICI Bank', color: 'bg-gold text-ink', text: "JG's BBA program opened doors I never imagined. The University's emphasis on personality development, alongside rigorous academics, helped me build a fulfilling career at ICICI Bank." },
  { initials: 'SD', name: 'Stavan Doshi', role: 'Owner, The Golden Time', color: 'bg-ink text-gold', text: "The B.Com program's emphasis on entrepreneurship and innovation inspired me to pursue my dream. The mentorship and resources available helped me turn my business vision into reality." },
]

export default function Testimonials() {
  const [pos, setPos] = useState(0)
  const [ref, visible] = useReveal()
  const cardW = 380 + 24 // card width + gap (approx)

  const slide = (dir) => {
    const max = (testimonials.length - 1) * cardW
    setPos(p => Math.max(0, Math.min(max, p + dir * cardW)))
  }

  return (
    <section id="testimonials" className="py-[120px] px-[5vw] bg-ink relative overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,168,76,.08) 0%, transparent 70%)' }} />

      {/* Header */}
      <div ref={ref} className={`flex justify-between items-end mb-14 flex-wrap gap-6 relative z-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-7 h-[2px] bg-gold" />
            <span className="text-[0.75rem] font-bold tracking-[2px] uppercase text-gold">Alumni Stories</span>
          </div>
          <h2 className="font-playfair text-[clamp(2rem,4vw,3.2rem)] font-black text-white leading-[1.1]">
            Words from<br />Our Alumni
          </h2>
        </div>
        <div className="flex gap-3">
          {['←', '→'].map((arrow, i) => (
            <button
              key={i}
              onClick={() => slide(i === 0 ? -1 : 1)}
              className="w-12 h-12 rounded-full border-[1.5px] border-white/25 bg-transparent text-white flex items-center justify-center text-[1.2rem] cursor-pointer transition-all duration-300 hover:bg-gold hover:border-gold hover:text-ink"
            >
              {arrow}
            </button>
          ))}
        </div>
      </div>

      {/* Slider */}
      <div className="overflow-hidden relative z-10">
        <div
          className="flex gap-6 transition-transform duration-500"
          style={{ transform: `translateX(-${pos}px)` }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="min-w-[340px] sm:min-w-[380px] bg-white/6 border border-white/10 rounded-3xl p-8 flex-shrink-0 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-gold text-[0.8rem] mb-3">★★★★★</div>
              <div className="font-playfair text-[2.5rem] text-gold leading-none mb-4">"</div>
              <p className="text-[0.9rem] text-white/75 leading-[1.75] mb-7">{t.text}</p>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-[0.9rem] flex-shrink-0 ${t.color}`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-[0.95rem] text-white">{t.name}</div>
                  <div className="text-[0.78rem] text-white/50">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
