import { skillGroups } from '../data/portfolio'
import FadeUp from './ui/FadeUp'

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
      <div className="max-w-8xl mx-auto px-6">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-500 mb-3">Skills</p>
          <h2 className="font-display text-[clamp(28px,4vw,40px)] font-bold text-zinc-900 dark:text-zinc-50 leading-tight mb-14">
            What I Work With
          </h2>
        </FadeUp>

        <FadeUp delay={60}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
            {skillGroups.map((group) => (
              <div key={group.name} className="bg-zinc-100 dark:bg-zinc-900 p-5">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600 mb-4">
                  {group.name}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map(skill => (
                    <span
                      key={skill.label}
                      className={`text-xs px-2.5 py-1 rounded-md font-medium ${
                        skill.featured
                          ? 'bg-amber-500/10 text-amber-700 dark:text-amber-400 ring-1 ring-amber-500/25'
                          : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
                      }`}
                    >
                      {skill.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
