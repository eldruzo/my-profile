import { useEffect, useState } from 'react'
import { meta, stats } from '../data/portfolio'
import HeroBackground from './ui/HeroBackground'

export default function Hero() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { const t = setTimeout(() => setVisible(true), 60); return () => clearTimeout(t) }, [])

  const fade = (delay = 0) =>
    `transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 bg-zinc-50 dark:bg-zinc-950 overflow-hidden">
      <HeroBackground />
      <div className="relative z-10 max-w-8xl mx-auto px-6 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>
            <p
              className={`text-amber-600 dark:text-amber-500 text-xs font-semibold tracking-widest uppercase mb-8 ${fade()}`}
              style={{ transitionDelay: '0ms' }}
            >
              Available for opportunities
            </p>

            <h1
              className={`font-display text-[clamp(48px,6.5vw,76px)] font-bold leading-[1.0] text-zinc-900 dark:text-zinc-50 mb-8 ${fade()}`}
              style={{ transitionDelay: '80ms' }}
            >
              Senior<br />Backend<br /><span className="text-amber-500">Engineer.</span>
            </h1>

            <p
              className={`text-zinc-500 dark:text-zinc-400 text-[17px] leading-[1.8] max-w-[440px] mb-10 ${fade()}`}
              style={{ transitionDelay: '160ms' }}
            >
              Nearly 5 years building mission-critical ERP systems for European enterprise clients.
              Node.js, TypeScript, GraphQL — systems that simply work at scale.
            </p>

            <div
              className={`flex flex-wrap gap-3 mb-14 ${fade()}`}
              style={{ transitionDelay: '240ms' }}
            >
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-zinc-950 text-sm font-semibold rounded-lg hover:bg-amber-400 transition-colors"
              >
                View Experience
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a
                href={meta.resume}
                download
                className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-semibold rounded-lg hover:border-zinc-500 dark:hover:border-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                Download Resume
              </a>
            </div>

            <div
              className={`flex gap-10 pt-8 border-t border-zinc-200 dark:border-zinc-800 ${fade()}`}
              style={{ transitionDelay: '320ms' }}
            >
              {stats.map(s => (
                <div key={s.label}>
                  <div className="font-display text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                    {s.value}<span className="text-amber-500">{s.suffix}</span>
                  </div>
                  <div className="text-xs text-zinc-400 dark:text-zinc-600 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div
            className={`flex justify-center order-first lg:order-last ${fade()}`}
            style={{ transitionDelay: '120ms' }}
          >
            <div className="relative">
              <img
                src={meta.photo}
                alt={`${meta.name} — ${meta.role}`}
                className="w-72 h-72 lg:w-[340px] lg:h-[340px] rounded-2xl object-cover object-center"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/10 dark:ring-white/10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
