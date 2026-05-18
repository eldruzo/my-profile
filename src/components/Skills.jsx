import { skillGroups } from '../data/portfolio'
import FadeUp from './ui/FadeUp'

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-8xl mx-auto px-6">
        <FadeUp>
          <p className="text-xs font-bold uppercase tracking-widest text-accent-600 dark:text-accent-400 mb-2.5">Skills</p>
          <h2 className="font-display text-[clamp(30px,4.5vw,42px)] font-bold text-slate-900 dark:text-slate-100 leading-tight mb-14">
            What I Work With
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillGroups.map((group, i) => (
            <FadeUp key={group.name} delay={i * 50}>
              <div className="h-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 hover:-translate-y-1 hover:shadow-md transition-all">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="text-xl">{group.icon}</span>
                  <h3 className="font-display text-[13px] font-semibold text-slate-700 dark:text-slate-200 uppercase tracking-wide">
                    {group.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map(skill => (
                    <span
                      key={skill.label}
                      className={`text-xs px-2.5 py-1 rounded-lg font-medium ${
                        skill.featured
                          ? 'bg-accent-50 dark:bg-accent-500/15 text-accent-700 dark:text-accent-400 border border-accent-200 dark:border-accent-500/30'
                          : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600'
                      }`}
                    >
                      {skill.label}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
