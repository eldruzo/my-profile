import { useState } from 'react'
import { experiences, additionalExperiences } from '../data/portfolio'
import FadeUp from './ui/FadeUp'

function FeaturedExperience({ exp }) {
  return (
    <div className="h-full border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 md:p-10 bg-zinc-50 dark:bg-zinc-950 flex flex-col gap-6">
      <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-zinc-200 dark:border-zinc-800">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400">
            Current
          </span>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50 leading-tight mt-3">
            {exp.role}
          </h3>
          <p className="text-sm text-amber-600 dark:text-amber-500 font-medium mt-1">{exp.company}</p>
        </div>
        <div className="text-right text-xs text-zinc-400 dark:text-zinc-600 shrink-0">
          <div>{exp.period}</div>
          <div>{exp.location}</div>
        </div>
      </div>

      <ul className="flex flex-col gap-4">
        {exp.bullets.map((bullet, i) => (
          <li key={i} className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  )
}

function CompactExperience({ exp, isOpen, onToggle }) {
  return (
    <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden bg-zinc-50 dark:bg-zinc-950">
      <button
        onClick={onToggle}
        className="w-full text-left px-5 py-4 flex items-center justify-between gap-3 hover:bg-zinc-100/60 dark:hover:bg-zinc-900/60 transition-colors"
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-zinc-400 dark:text-zinc-600 shrink-0">{exp.icon}</span>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 truncate">{exp.role}</p>
            <p className="text-xs text-amber-600 dark:text-amber-500">{exp.company}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-xs text-zinc-400 dark:text-zinc-600">{exp.period}</span>
          <span className={`text-zinc-400 dark:text-zinc-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>⌄</span>
        </div>
      </button>
      {isOpen && (
        <ul className="flex flex-col gap-3 px-5 pb-5 pt-1 border-t border-zinc-200 dark:border-zinc-800 animate-fade-in">
          {exp.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <span className="mt-[9px] w-1 h-1 rounded-full bg-zinc-400 dark:bg-zinc-600 shrink-0" />
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function Experience() {
  const [featured, ...rest] = experiences
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="experience" className="py-24 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-8xl mx-auto px-6">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-500 mb-3">Experience</p>
          <h2 className="font-display text-[clamp(28px,4vw,40px)] font-bold text-zinc-900 dark:text-zinc-50 leading-tight mb-14">
            Career Timeline
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <FadeUp className="lg:col-span-2">
            <FeaturedExperience exp={featured} />
          </FadeUp>

          <div className="flex flex-col gap-4">
            {rest.map((exp, i) => (
              <FadeUp key={i} delay={(i + 1) * 80}>
                <CompactExperience
                  exp={exp}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              </FadeUp>
            ))}
          </div>
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
