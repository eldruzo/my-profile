import { education } from '../data/portfolio'
import FadeUp from './ui/FadeUp'

export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-8xl mx-auto px-6">
        <FadeUp>
          <p className="text-xs font-bold uppercase tracking-widest text-accent-600 dark:text-accent-400 mb-2.5">Education</p>
          <h2 className="font-display text-[clamp(30px,4.5vw,42px)] font-bold text-slate-900 dark:text-slate-100 leading-tight mb-14">
            Academic Background
          </h2>
        </FadeUp>

        <div className="max-w-2xl">
          {education.map((ed, i) => (
            <FadeUp key={i} delay={i * 80}>
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 hover:-translate-y-1 hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-accent-50 dark:bg-accent-500/15 border border-accent-200 dark:border-accent-500/30 flex items-center justify-center text-lg shrink-0">
                    🎓
                  </div>
                  <div>
                    <h3 className="font-display text-[17px] font-bold text-slate-900 dark:text-slate-100 leading-tight">
                      {ed.degree}
                    </h3>
                    <p className="text-accent-600 dark:text-accent-400 text-sm font-medium mt-0.5">{ed.field}</p>
                    <p className="text-slate-700 dark:text-slate-200 font-semibold mt-2">{ed.school}</p>
                    <div className="flex items-center gap-3 mt-2 text-sm text-slate-400 dark:text-slate-500">
                      <span>{ed.location}</span>
                      <span>·</span>
                      <span>{ed.period}</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
