import { useEffect, useState } from 'react'
import { meta, stats } from '../data/portfolio'

export default function Hero() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { const t = setTimeout(() => setVisible(true), 80); return () => clearTimeout(t) }, [])

  const fadeClass = (delay) =>
    `transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`

  return (
    <section id="home" className="min-h-screen flex items-center pt-[72px] bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent-600/5 dark:bg-accent-500/8 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-30 dark:opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, rgb(5 150 105 / 0.12) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      <div className="max-w-8xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16">

          {/* Text */}
          <div>
            <div
              className={`inline-flex items-center gap-2 bg-accent-50 dark:bg-accent-500/10 text-accent-600 dark:text-accent-400 border border-accent-200 dark:border-accent-500/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 ${fadeClass(0)}`}
              style={{ transitionDelay: '0ms' }}
            >
              <span className="w-2 h-2 rounded-full bg-accent-600 dark:bg-accent-400 animate-blink" />
              Open to Opportunities
            </div>

            <h1
              className={`font-display text-[clamp(42px,6.5vw,68px)] font-extrabold leading-[1.08] text-slate-900 dark:text-slate-100 mb-2 ${fadeClass(0)}`}
              style={{ transitionDelay: '110ms' }}
            >
              {meta.name.split(' ')[0]}<br />
              <span className="text-accent-600 dark:text-accent-400">{meta.name.split(' ').slice(1).join(' ')}</span>
            </h1>

            <p
              className={`font-display text-[clamp(20px,2.8vw,28px)] font-semibold text-slate-500 dark:text-slate-400 mb-5 ${fadeClass(0)}`}
              style={{ transitionDelay: '220ms' }}
            >
              {meta.role}
            </p>

            <p
              className={`text-[17px] text-slate-600 dark:text-slate-300 leading-[1.78] max-w-[480px] mb-9 ${fadeClass(0)}`}
              style={{ transitionDelay: '330ms' }}
            >
              Nearly 5 years building and operating mission-critical ERP systems for European enterprise clients.
              I specialize in Node.js, TypeScript, GraphQL, and distributed backend architecture — shipping systems that simply work at scale.
            </p>

            <div
              className={`flex flex-wrap gap-3 ${fadeClass(0)}`}
              style={{ transitionDelay: '440ms' }}
            >
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent-600 dark:bg-accent-500 text-white rounded-xl text-[15px] font-semibold hover:bg-accent-700 dark:hover:bg-accent-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent-600/30 transition-all"
              >
                View Experience
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a
                href={meta.resume}
                download
                className="inline-flex items-center gap-2 px-7 py-3.5 border-[1.5px] border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-xl text-[15px] font-semibold hover:border-accent-600 dark:hover:border-accent-400 hover:text-accent-600 dark:hover:text-accent-400 hover:-translate-y-0.5 transition-all"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                Download Resume
              </a>
            </div>

            <div
              className={`flex gap-9 mt-11 pt-7 border-t border-slate-200 dark:border-slate-700 ${fadeClass(0)}`}
              style={{ transitionDelay: '550ms' }}
            >
              {stats.map(s => (
                <div key={s.label}>
                  <div className="font-display text-[28px] font-bold text-slate-900 dark:text-slate-100 leading-none">
                    {s.value}<span className="text-accent-600 dark:text-accent-400">{s.suffix}</span>
                  </div>
                  <div className="text-xs text-slate-400 dark:text-slate-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div
            className={`flex justify-center items-center order-first lg:order-last ${fadeClass(0)}`}
            style={{ transitionDelay: '220ms' }}
          >
            <div className="relative w-[340px] h-[340px] lg:w-[380px] lg:h-[380px]">
              <div className="absolute inset-0 bg-accent-100 dark:bg-accent-500/15 animate-blob" />
              <img
                src={meta.photo}
                alt={`${meta.name} — ${meta.role}`}
                className="relative z-10 w-[300px] h-[300px] lg:w-[336px] lg:h-[336px] rounded-full object-cover object-center border-4 border-white dark:border-slate-800 shadow-2xl mx-auto mt-5"
              />
              {/* Float cards */}
              <div className="hidden sm:block absolute bottom-9 -left-4 z-20 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 shadow-md">
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-0.5">Experience</div>
                <div className="font-display text-[17px] font-bold text-slate-900 dark:text-slate-100">5<span className="text-accent-600 dark:text-accent-400">+ Yrs</span></div>
              </div>
              <div className="hidden sm:block absolute top-7 -right-3 z-20 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 shadow-md">
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-0.5">Location</div>
                <div className="font-display text-[13px] font-bold text-slate-900 dark:text-slate-100">🇮🇩 Indonesia</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
