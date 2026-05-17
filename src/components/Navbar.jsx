'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Why JGU', href: '#strengths' },
    { label: 'Alumni', href: '#testimonials' },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5vw] h-[72px] transition-all duration-400 border-b border-black/10
          ${scrolled
            ? 'bg-paper/97 shadow-[0_4px_32px_rgba(10,10,15,0.08)]'
            : 'bg-paper/88'
          }`}
        style={{ backdropFilter: 'blur(18px)' }}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 no-underline">
          <div className="w-[42px] h-[42px] bg-ink rounded-[10px] flex items-center justify-center">
            <span className="text-gold font-playfair font-black text-[15px] tracking-widest">JG</span>
          </div>
          <span className="font-playfair font-bold text-[1.1rem] text-ink tracking-tight">
            JG <span className="text-gold">University</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[0.875rem] font-medium text-gray-500 hover:text-ink no-underline tracking-wide transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-[2px] left-0 w-0 h-[1.5px] bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#apply"
          className="hidden md:inline-flex bg-ink text-gold text-[0.8rem] font-semibold tracking-[0.8px] uppercase px-[22px] py-[10px] rounded-[8px] border-[1.5px] border-ink no-underline transition-all duration-250 hover:bg-transparent hover:text-ink"
        >
          Apply Now
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] cursor-pointer p-1 bg-transparent border-0"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[2px] bg-ink rounded-sm transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-[2px] bg-ink rounded-sm transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-ink rounded-sm transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 top-[72px] bg-paper z-40 flex flex-col items-center justify-center gap-10 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-playfair text-[2rem] font-bold text-ink no-underline hover:text-gold transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#apply"
            onClick={() => setMenuOpen(false)}
            className="font-playfair text-[2rem] font-bold text-gold no-underline"
          >
            Apply Now →
          </a>
        </div>
      )}
    </>
  )
}
