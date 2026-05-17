'use client'
import { useState } from 'react'
import { useReveal } from './useReveal'

const programs = [
  { id: 1, cat: 'ug', icon: '💼', title: 'MBA & BBA Programs', desc: 'Master business fundamentals through case studies, live projects, and industry immersion. Specializations in Finance, Marketing, HR & more.', tags: ['Management', '2–5 Years'], featured: true },
  { id: 2, cat: 'ug', icon: '💻', title: 'BCA & MCA — Tech Stack', desc: 'Build cutting-edge software skills. Specializations in AI, Full Stack Development, and Cloud Computing with hands-on lab sessions.', tags: ['Computing', '3–5 Years'] },
  { id: 3, cat: 'ug', icon: '⚖️', title: 'B.Com & M.Com', desc: 'A robust commerce education blending accounting principles, taxation, and international finance with ACCA dual certification options.', tags: ['Commerce', '3–4 Years'] },
  { id: 4, cat: 'ug', icon: '🤖', title: 'B.Tech — AI & ML', desc: 'Specialize in Artificial Intelligence, Machine Learning, Data Science, and Computer Engineering with ISRO and IBM collaborations.', tags: ['Engineering', '4 Years'] },
  { id: 5, cat: 'pg', icon: '🔬', title: 'M.Sc. Forensic Science', desc: 'A specialized postgraduate program in forensic science and digital forensics, preparing students for law enforcement and cybersecurity roles.', tags: ['Science', '2 Years'] },
  { id: 6, cat: 'pg', icon: '✈️', title: 'Aviation & Hospitality', desc: 'Integrated management programs in aviation, hospitality, and international travel — preparing you for careers across the globe.', tags: ['Hospitality', '2–5 Years'] },
  { id: 7, cat: 'cert', icon: '🔐', title: 'Cyber Security', desc: 'Industry-aligned certificate course covering ethical hacking, network defense, and digital risk management.', tags: ['Certificate', '6 Months'] },
  { id: 8, cat: 'cert', icon: '📊', title: 'Data Science & AI-ML', desc: 'Practical certificate in machine learning, deep learning, and data analytics with Python. Real datasets, real outcomes.', tags: ['Certificate', '6 Months'] },
  { id: 9, cat: 'phd', icon: '📖', title: 'Doctoral Programs (Ph.D)', desc: 'Research programs across Commerce, Management, Computing, Law, and Interdisciplinary studies with expert guide mentorship.', tags: ['Research', '3–5 Years'] },
]

const tabs = [
  { key: 'all', label: 'All' },
  { key: 'ug', label: 'Undergraduate' },
  { key: 'pg', label: 'Postgraduate' },
  { key: 'cert', label: 'Certificate' },
  { key: 'phd', label: 'Doctoral' },
]

export default function Programs() {
  const [active, setActive] = useState('all')
  const [ref, visible] = useReveal()

  const filtered = active === 'all' ? programs : programs.filter(p => p.cat === active)

  return (
    <section id="programs" className="py-[120px] px-[5vw] bg-light">
      {/* Header */}
      <div
        ref={ref}
        className={`flex justify-between items-end mb-16 flex-wrap gap-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-7 h-[2px] bg-gold" />
            <span className="text-[0.75rem] font-bold tracking-[2px] uppercase text-gold">Academic Programs</span>
          </div>
          <h2 className="font-playfair text-[clamp(2rem,4vw,3.2rem)] font-black text-ink leading-[1.1] tracking-[-0.5px]">
            Find Your Path
          </h2>
        </div>
        {/* Tabs */}
        <div className="flex gap-2 bg-cream p-[6px] rounded-xl flex-wrap">
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`px-5 py-2 rounded-lg text-[0.82rem] font-semibold cursor-pointer border-0 transition-all duration-250 font-dmSans
                ${active === tab.key ? 'bg-ink text-gold' : 'bg-transparent text-gray-500 hover:text-ink'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((prog) => (
          <div
            key={prog.id}
            className={`group rounded-[20px] p-8 cursor-pointer border transition-all duration-350 relative overflow-hidden
              ${prog.featured
                ? 'bg-ink border-transparent text-white'
                : 'bg-white border-black/12 hover:shadow-[0_20px_60px_rgba(10,10,15,0.1)] hover:-translate-y-[6px] hover:border-transparent'
              }`}
          >
            {/* Top accent bar */}
            <div className={`absolute top-0 left-0 right-0 h-1 transition-transform duration-350 origin-left scale-x-0 group-hover:scale-x-100
              ${prog.featured ? 'bg-gold-light' : 'bg-gold'}`} />
            <div className={`w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-[1.4rem] mb-5
              ${prog.featured ? 'bg-white/10' : 'bg-cream'}`}>
              {prog.icon}
            </div>
            <h3 className={`font-playfair text-[1.2rem] font-bold mb-3 ${prog.featured ? 'text-gold' : 'text-ink'}`}>
              {prog.title}
            </h3>
            <p className={`text-[0.85rem] leading-[1.65] mb-5 ${prog.featured ? 'text-white/65' : 'text-gray-500'}`}>
              {prog.desc}
            </p>
            <div className="flex gap-2 flex-wrap">
              {prog.tags.map(tag => (
                <span
                  key={tag}
                  className={`text-[0.72rem] font-semibold tracking-[0.6px] uppercase px-[10px] py-1 rounded-md
                    ${prog.featured ? 'bg-white/10 text-gold-light' : 'bg-cream text-teal'}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
