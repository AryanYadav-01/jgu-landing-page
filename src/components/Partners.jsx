"use client" 
import { useReveal } from './useReveal'

const partners = ['IBM', 'ISRO', 'SAC', 'TCS', 'YUDIZ', 'COGNIZANT', 'ICICI BANK', 'VIACOM 18', 'CODING PRO']

export default function Partners() {
  const [ref, visible] = useReveal()

  return (
    <div
      ref={ref}
      className={`py-16 px-[5vw] bg-cream transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <p className="text-center text-[0.75rem] font-bold tracking-[2px] uppercase text-gray-500 mb-8">
        Trusted Industry Partners
      </p>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {partners.map(p => (
          <div
            key={p}
            className="px-6 py-[10px] bg-white rounded-xl border border-black/12 font-mono-custom text-[0.8rem] font-bold text-gray-500 tracking-wide transition-all duration-300 hover:border-gold hover:text-ink hover:-translate-y-[2px] cursor-default"
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  )
}
