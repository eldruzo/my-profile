import { useState } from 'react'
import { experiences, additionalExperiences } from '../data/portfolio'
import FadeUp from './ui/FadeUp'

export default function Experience() {
  const [active, setActive] = useState(0)

  return (
    <section id="experience" className="py-24 bg-slate-100/60 dark:bg-slate-800/40">
      <div className="max-w-8xl mx-auto px-6">
        <FadeUp>
          <p className="text-xs font-bold uppercase tracking-widest text-accent-600 dark:text-accent-400 mb-2.5">Experience</p>
          <h2 className="font-display text-[clamp(30px,4.5vw,42px)] font-bold text-slate-900 dark:text-slate-100 leading-tight mb-14">
            Career Timeline
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6">

          {/* Timeline list */}
          <FadeUp>
            <div className="flex flex-col gap-2">
              {experiences.map((exp, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-full text-left px-5 py-4 rounded-xl border transition-all ${
                    active === i
                      ? 'bg-white dark:bg-slate-800 border-accent-500 dark:border-accent-500 shadow-md'
                      : 'bg-white/60 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`text-sm font-bold leading-none ${active === i ? 'text-accent-600 dark:text-accent-400' : 'text-slate-400 dark:text-slate-500'}`}>
                      {exp.icon}
                    </span>
                    <div className="min-w-0">
                      <p className={`text-sm font-semibold leading-snug truncate ${active === i ? 'text-slate-900 dark:text-slate-100' : 'text-slate-700 dark:text-slate-300'}`}>
                        {exp.role}
                      </p>
                      <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">{exp.period}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </FadeUp>

          {/* Detail panel */}
          <FadeUp delay={80}>
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-7 min-h-[320px]">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6 pb-5 border-b border-slate-100 dark:border-slate-700">
                <div>
                  <h3 className="font-display text-[20px] font-bold text-slate-900 dark:text-slate-100 leading-tight">
                    {experiences[active].role}
                  </h3>
                  <p className="text-accent-600 dark:text-accent-400 font-semibold mt-0.5">
                    {experiences[active].company}
                  </p>
                </div>
                <div className="text-right text-sm text-slate-400 dark:text-slate-500 shrink-0">
                  <div>{experiences[active].period}</div>
                  <div>{experiences[active].location}</div>
                </div>
              </div>

              <ul className="flex flex-col gap-3.5">
                {experiences[active].bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3 text-[15px] text-slate-600 dark:text-slate-300 leading-[1.75]">
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-accent-500 shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

        </div>

        {/* Additional experience */}
        {additionalExperiences.length > 0 && (
          <FadeUp delay={120}>
            <div className="mt-10">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
                Additional Experience
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {additionalExperiences.map((exp, i) => (
                  <div
                    key={i}
                    className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-5 py-4"
                  >
                    <div className="flex items-start justify-between gap-3 mb-1.5">
                      <p className="font-semibold text-sm text-slate-800 dark:text-slate-200">{exp.role}</p>
                      <span className="text-xs text-slate-400 dark:text-slate-500 shrink-0">{exp.period}</span>
                    </div>
                    <p className="text-xs font-medium text-accent-600 dark:text-accent-400 mb-1.5">{exp.company}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{exp.description}</p>
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
