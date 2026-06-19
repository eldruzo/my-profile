import { useState, useEffect } from 'react'
import { meta } from '../data/portfolio'

function SunIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}

function MoonIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar({ dark, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-200
        ${scrolled
          ? 'bg-zinc-50/95 dark:bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800'
          : ''
        }`}
      >
        <div className="max-w-8xl mx-auto px-6 h-full flex items-center justify-between">
          <a href="#home" className="font-display font-bold text-zinc-900 dark:text-zinc-50">
            {meta.callName}<span className="text-amber-500">.</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {links.map(l => (
              <a key={l.href} href={l.href}
                className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onToggleTheme}
              className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
              aria-label="Toggle theme"
            >
              {dark ? <MoonIcon className="w-[18px] h-[18px]" /> : <SunIcon className="w-[18px] h-[18px]" />}
            </button>
            <a href={meta.resume} download
              className="hidden md:block text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">
              Resume ↓
            </a>
            <a href="#contact"
              className="hidden md:inline-flex px-4 py-1.5 bg-amber-500 text-zinc-950 text-sm font-semibold rounded-lg hover:bg-amber-400 transition-colors">
              Hire Me
            </a>
            <button
              onClick={() => setMenuOpen(o => !o)}
              className="md:hidden text-zinc-400 text-sm"
              aria-label="Menu"
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed top-16 left-0 right-0 z-40 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 px-6 py-5 flex flex-col gap-3 md:hidden">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 py-1 transition-colors">
              {l.label}
            </a>
          ))}
          <div className="flex gap-3 pt-3 border-t border-zinc-200 dark:border-zinc-800">
            <a href={meta.resume} download onClick={() => setMenuOpen(false)}
              className="flex-1 text-center py-2.5 text-sm border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-lg">
              Resume
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}
              className="flex-1 text-center py-2.5 text-sm bg-amber-500 text-zinc-950 font-semibold rounded-lg">
              Hire Me
            </a>
          </div>
        </div>
      )}
    </>
  )
}
