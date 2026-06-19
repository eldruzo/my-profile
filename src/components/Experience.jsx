import { useState } from 'react'
import { experiences, additionalExperiences } from '../data/portfolio'
import FadeUp from './ui/FadeUp'

export default function Experience() {
  const [active, setActive] = useState(0)

  return (
    <section id="experience" className="py-24 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-8xl mx-auto px-6">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-500 mb-3">Experience</p>
          <h2 className="font-display text-[clamp(28px,4vw,40px)] font-bold text-zinc-900 dark:text-zinc-50 leading-tight mb-14">
            Career Timeline
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">

          {/* Timeline list */}
          <FadeUp>
            <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden divide-y divide-zinc-200 dark:divide-zinc-800">
              {experiences.map((exp, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-full text-left px-5 py-4 transition-colors ${
                    active === i
                      ? 'bg-zinc-100 dark:bg-zinc-900'
                      : 'bg-zinc-50 dark:bg-zinc-950 hover:bg-zinc-100/60 dark:hover:bg-zinc-900/60'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-0.5">
                    {active === i && <span className="w-1 h-1 rounded-full bg-amber-500 shrink-0" />}
                    <p className={`text-sm font-medium leading-snug truncate transition-colors ${
                      active === i ? 'text-zinc-900 dark:text-zinc-50' : 'text-zinc-600 dark:text-zinc-400'
                    }`}>
                      {exp.role}
                    </p>
                  </div>
                  <p className={`text-xs transition-colors pl-3 ${active === i ? 'text-zinc-400 dark:text-zinc-500' : 'text-zinc-400 dark:text-zinc-600'}`}>
                    {exp.period}
                  </p>
                </button>
              ))}
            </div>
          </FadeUp>

          {/* Detail panel */}
          <FadeUp delay={80}>
            <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-7">
              <div key={active} className="animate-fade-in">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6 pb-5 border-b border-zinc-200 dark:border-zinc-800">
                  <div>
                    <h3 className="font-display text-lg font-bold text-zinc-900 dark:text-zinc-50 leading-tight">
                      {experiences[active].role}
                    </h3>
                    <p className="text-amber-600 dark:text-amber-500 text-sm font-medium mt-0.5">
                      {experiences[active].company}
                    </p>
                  </div>
                  <div className="text-right text-xs text-zinc-400 dark:text-zinc-600 shrink-0">
                    <div>{experiences[active].period}</div>
                    <div>{experiences[active].location}</div>
                  </div>
                </div>

                <ul className="flex flex-col gap-4">
                  {experiences[active].bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      <span className="mt-[9px] w-1 h-1 rounded-full bg-zinc-400 dark:bg-zinc-600 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeUp>

        </div>

        {additionalExperiences.length > 0 && (
          <FadeUp delay={120}>
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600 mb-4">
                Additional Experience
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {additionalExperiences.map((exp, i) => (
                  <div key={i} className="border border-zinc-200 dark:border-zinc-800 rounded-xl px-5 py-4">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{exp.role}</p>
                      <span className="text-xs text-zinc-400 dark:text-zinc-600 shrink-0">{exp.period}</span>
                    </div>
                    <p className="text-xs text-amber-600 dark:text-amber-500 mb-2">{exp.company}</p>
                    <p className="text-sm text-zinc-500 leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        )}
      </div>
    </section>
  )
}
