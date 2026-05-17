const footerLinks = {
  Programs: ['MBA / BBA', 'BCA / MCA', 'B.Tech / M.Tech', 'B.Com / M.Com', 'Ph.D Research', 'Certificates'],
  'Quick Links': ['About JGU', 'Faculty', 'Campus Life', 'Placements', 'Research', 'News & Events'],
  Admissions: ['Apply Online', 'Fee Structure', 'Scholarships', 'Download Prospectus', 'Contact Us'],
}

const socials = [
  { label: 'in', title: 'LinkedIn' },
  { label: '𝕏', title: 'Twitter' },
  { label: 'ig', title: 'Instagram' },
  { label: '▶', title: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-white pt-20 pb-10 px-[5vw]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-[42px] h-[42px] bg-white/10 rounded-[10px] flex items-center justify-center">
              <span className="text-gold font-playfair font-black text-[15px] tracking-widest">JG</span>
            </div>
            <span className="font-playfair font-bold text-[1.1rem] text-white">
              JG <span className="text-gold">University</span>
            </span>
          </div>
          <p className="text-white/50 text-[0.875rem] leading-[1.75] max-w-[280px]">
            A tech-driven new-age university committed to shaping future-ready global leaders through experiential, interdisciplinary education.
          </p>
          <p className="mt-3 text-[0.8rem] text-white/30">📍 Ahmedabad, Gujarat, India</p>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h5 className="font-mono-custom text-[0.72rem] tracking-[2px] uppercase text-gold mb-5">{title}</h5>
            <ul className="flex flex-col gap-3 list-none">
              {links.map(link => (
                <li key={link}>
                  <a href="#" className="text-white/55 text-[0.875rem] no-underline hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 pt-8 flex flex-wrap justify-between items-center gap-4">
        <p className="text-[0.8rem] text-white/35">© 2026 JG University. All rights reserved. UGC Approved.</p>
        <div className="flex gap-3">
          {socials.map(s => (
            <a
              key={s.title}
              href="#"
              title={s.title}
              className="w-[38px] h-[38px] rounded-[10px] bg-white/8 border border-white/12 flex items-center justify-center text-white/60 no-underline text-[0.85rem] transition-all duration-300 hover:bg-gold hover:text-ink hover:border-gold"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
