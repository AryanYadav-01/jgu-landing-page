export default function Marquee() {
  const items = [
    'UGC Approved', 'NEP 2020 Compliant', 'Industry Partnerships',
    'IBM Collaboration', 'ISRO Partnership', 'Global Exchange',
    'Tech-Driven Education', '60+ Years Legacy',
  ]
  const doubled = [...items, ...items]

  return (
    <div className="bg-gold overflow-hidden py-[14px]">
      <div className="flex w-max animate-marquee">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-mono-custom text-[0.75rem] font-bold tracking-[2px] uppercase text-ink whitespace-nowrap px-10 after:content-['★'] after:ml-10 after:opacity-50"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
