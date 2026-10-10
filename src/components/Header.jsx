import { useEffect, useState } from 'react'
import { meta } from '../data/portfolio'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    try { localStorage.setItem('theme', next ? 'dark' : 'light') } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={dark}
      aria-label="Dark theme"
      className="grid place-items-center w-9 h-9 rounded-full text-ink-2 hover:text-ink hover:bg-paper-2 transition-colors"
    >
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor" />
      </svg>
    </button>
  )
}

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-paper border-b border-rule">
      <div className="max-w-page mx-auto px-5 sm:px-8 h-14 flex items-center gap-3 sm:gap-6">
        <a href="#top" className="font-extrabold wide tracking-tight text-[15px] mr-auto">
          Achmad Nabil
        </a>
        <nav aria-label="Sections" className="hidden md:flex items-center gap-6 text-sm text-ink-2">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:text-ink transition-colors">{l.label}</a>
          ))}
        </nav>
        <a
          href={meta.cv}
          className="text-sm font-semibold px-3.5 py-1.5 rounded-full border border-ink hover:bg-ink hover:text-paper transition-colors"
        >
          Download CV
        </a>
        <ThemeToggle />
      </div>
    </header>
  )
}
