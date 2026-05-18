import { meta, about } from '../data/portfolio'
import FadeUp from './ui/FadeUp'

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-8xl mx-auto px-6">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-500 mb-3">About</p>
          <h2 className="font-display text-[clamp(28px,4vw,40px)] font-bold text-zinc-900 dark:text-zinc-50 leading-tight mb-14">
            The Engineer Behind the Systems
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16 items-start">

          {/* Bio */}
          <FadeUp>
            <div className="flex flex-col gap-5">
              {about.map((p, i) => (
                <p key={i} className="text-[16.5px] text-zinc-600 dark:text-zinc-400 leading-[1.85]">{p}</p>
              ))}
            </div>
          </FadeUp>

          {/* Facts */}
          <FadeUp delay={100}>
            <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
              <div className="px-5 py-3 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600">Quick Facts</p>
              </div>
              <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
                {[
                  { label: 'Experience',       value: '5+ years backend' },
                  { label: 'Production users', value: '60K+' },
                  { label: 'Enterprise tenants', value: '10+' },
                  { label: 'Finance incidents', value: '~0' },
                  { label: 'Location',         value: meta.location },
                  { label: 'Open to',          value: 'Jakarta · Bandung · Remote' },
                  { label: 'Languages',        value: meta.languages.join(' · ') },
                ].map(row => (
                  <div key={row.label} className="flex items-baseline justify-between gap-4 px-5 py-3">
                    <span className="text-xs text-zinc-400 dark:text-zinc-600 shrink-0">{row.label}</span>
                    <span className="text-sm text-zinc-700 dark:text-zinc-300 text-right">{row.value}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between gap-4 px-5 py-3">
                  <span className="text-xs text-zinc-400 dark:text-zinc-600 shrink-0">Email</span>
                  <a href={`mailto:${meta.email}`} className="text-sm text-amber-600 dark:text-amber-500 hover:underline text-right">{meta.email}</a>
                </div>
                <div className="flex items-center justify-between gap-4 px-5 py-3">
                  <span className="text-xs text-zinc-400 dark:text-zinc-600 shrink-0">LinkedIn</span>
                  <a href={meta.linkedin} target="_blank" rel="noopener" className="text-sm text-amber-600 dark:text-amber-500 hover:underline text-right">{meta.linkedinLabel}</a>
                </div>
              </div>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  )
}
