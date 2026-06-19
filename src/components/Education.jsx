import { education } from '../data/portfolio'
import FadeUp from './ui/FadeUp'

export default function Education() {
  return (
    <section id="education" className="py-24 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
      <div className="max-w-8xl mx-auto px-6">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-500 mb-3">Education</p>
          <h2 className="font-display text-[clamp(28px,4vw,40px)] font-bold text-zinc-900 dark:text-zinc-50 leading-tight mb-14">
            Academic Background
          </h2>
        </FadeUp>

        <div className="max-w-xl">
          {education.map((ed, i) => (
            <FadeUp key={i} delay={i * 80}>
              <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-7 bg-zinc-50 dark:bg-zinc-950 hover:-translate-y-1 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-300">
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600 mb-3">
                  {ed.period}
                </p>
                <h3 className="font-display text-lg font-bold text-zinc-900 dark:text-zinc-50 leading-tight">
                  {ed.degree}
                </h3>
                <p className="text-amber-600 dark:text-amber-500 text-sm font-medium mt-1">{ed.field}</p>
                <p className="text-zinc-700 dark:text-zinc-300 font-medium mt-4">{ed.school}</p>
                <p className="text-sm text-zinc-400 dark:text-zinc-600 mt-0.5">{ed.location}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
