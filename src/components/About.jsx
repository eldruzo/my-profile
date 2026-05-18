import { meta, highlights, about } from '../data/portfolio'
import FadeUp from './ui/FadeUp'

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-100/60 dark:bg-slate-800/40">
      <div className="max-w-8xl mx-auto px-6">
        <FadeUp>
          <p className="text-xs font-bold uppercase tracking-widest text-accent-600 dark:text-accent-400 mb-2.5">About Me</p>
          <h2 className="font-display text-[clamp(30px,4.5vw,42px)] font-bold text-slate-900 dark:text-slate-100 leading-tight mb-14">
            The Engineer Behind the Systems
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: highlights + meta */}
          <FadeUp>
            <div className="grid grid-cols-2 gap-3.5">
              {highlights.map(h => (
                <div
                  key={h.label}
                  className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5 hover:-translate-y-1 hover:shadow-md transition-all"
                >
                  <div className="text-xl mb-2">{h.icon}</div>
                  <div className="font-display text-2xl font-bold text-slate-900 dark:text-slate-100 leading-none">
                    {h.value}<span className="text-accent-600 dark:text-accent-400">{h.suffix}</span>
                  </div>
                  <div className="text-xs text-slate-400 dark:text-slate-500 mt-1 leading-snug">{h.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-2.5">
              {[
                { key: '📍 Location', val: `${meta.location} — ${meta.locationDetail}` },
                { key: '📧 Email', val: meta.email, href: `mailto:${meta.email}` },
                { key: '🔗 LinkedIn', val: meta.linkedinLabel, href: meta.linkedin, external: true },
                { key: '🗣️ Languages', val: meta.languages.join(' · ') },
              ].map(row => (
                <div key={row.key} className="flex items-start gap-2.5 text-sm">
                  <span className="font-semibold text-slate-800 dark:text-slate-200 min-w-[104px] shrink-0">{row.key}</span>
                  {row.href
                    ? <a href={row.href} {...(row.external ? { target: '_blank', rel: 'noopener' } : {})} className="text-accent-600 dark:text-accent-400 hover:underline">{row.val}</a>
                    : <span className="text-slate-600 dark:text-slate-300">{row.val}</span>
                  }
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Right: bio paragraphs */}
          <FadeUp delay={100}>
            <div className="flex flex-col gap-4">
              {about.map((p, i) => (
                <p key={i} className="text-[16.5px] text-slate-600 dark:text-slate-300 leading-[1.8]">{p}</p>
              ))}
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  )
}
