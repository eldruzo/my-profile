import { useState, useEffect } from 'react'
import { meta } from '../data/portfolio'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
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

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300
          ${scrolled
            ? 'bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-700'
            : 'border-b border-transparent'
          }`}
      >
        <div className="max-w-8xl mx-auto px-6 h-full flex items-center justify-between">
          <a href="#home" className="font-display text-lg font-bold text-slate-900 dark:text-slate-100">
            {meta.callName}<span className="text-accent-600 dark:text-accent-400">.</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-slate-500 dark:text-slate-400 px-3 py-2 rounded-lg hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onToggleTheme}
              className="w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:border-accent-600 dark:hover:border-accent-400 flex items-center justify-center transition-all"
              aria-label="Toggle theme"
            >
              {dark ? '☀️' : '🌙'}
            </button>
            <a
              href={meta.resume}
              download
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl border-[1.5px] border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-accent-600 dark:hover:border-accent-400 hover:text-accent-600 dark:hover:text-accent-400 transition-all"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="hidden md:inline-flex px-4 py-2 rounded-xl bg-accent-600 dark:bg-accent-500 text-white text-sm font-semibold hover:bg-accent-700 dark:hover:bg-accent-600 transition-colors shadow-sm hover:shadow-accent-600/30 hover:shadow-md"
            >
              Hire Me
            </a>
            <button
              onClick={() => setMenuOpen(o => !o)}
              className="md:hidden w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 flex items-center justify-center text-lg transition-all"
              aria-label="Menu"
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed top-[72px] left-0 right-0 z-40 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 px-6 py-4 flex flex-col gap-1 md:hidden">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={closeMenu}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 px-4 py-3 rounded-xl hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="flex gap-2 mt-2 pt-3 border-t border-slate-100 dark:border-slate-800">
            <a href={meta.resume} download onClick={closeMenu} className="flex-1 text-center py-2.5 rounded-xl border-[1.5px] border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-200">Resume</a>
            <a href="#contact" onClick={closeMenu} className="flex-1 text-center py-2.5 rounded-xl bg-accent-600 dark:bg-accent-500 text-white text-sm font-semibold">Hire Me</a>
          </div>
        </div>
      )}
    </>
  )
}
