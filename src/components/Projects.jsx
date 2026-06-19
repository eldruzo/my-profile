import { projects } from '../data/portfolio'
import FadeUp from './ui/FadeUp'

function TypeBadge({ type }) {
  return (
    <span className={`text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full ${
      type === 'work'
        ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
        : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400'
    }`}>
      {type === 'work' ? 'Work' : 'Personal'}
    </span>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
      <div className="max-w-8xl mx-auto px-6">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-500 mb-3">Projects</p>
          <h2 className="font-display text-[clamp(28px,4vw,40px)] font-bold text-zinc-900 dark:text-zinc-50 leading-tight mb-14">
            Things I've Built
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <FadeUp key={project.title} delay={i * 100}>
              <div className="h-full border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 bg-zinc-50 dark:bg-zinc-950 hover:-translate-y-1 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-300 flex flex-col gap-4">

                <div className="flex items-center justify-between gap-3">
                  <TypeBadge type={project.type} />
                  <span className="text-xs text-zinc-400 dark:text-zinc-600">{project.period}</span>
                </div>

                <div className="flex-1 flex flex-col gap-4">
                  <div>
                    <h3 className="font-display text-lg font-bold text-zinc-900 dark:text-zinc-50 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-amber-600 dark:text-amber-500 font-medium mt-0.5">{project.role}</p>
                  </div>

                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>

                  {project.highlights && (
                    <div className="flex flex-col gap-1.5">
                      {project.highlights.map(h => (
                        <div key={h} className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                          <span className="w-1 h-1 rounded-full bg-amber-500 shrink-0" />
                          {h}
                        </div>
                      ))}
                    </div>
                  )}

                  {project.subProjects && (
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600 mb-1.5">Modules</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.subProjects.map(sp => (
                          <span key={sp} className="text-[11px] px-2 py-0.5 rounded-md border border-amber-500/30 text-amber-700 dark:text-amber-400 font-medium">
                            {sp}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-zinc-200 dark:border-zinc-800">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[11px] px-2 py-0.5 rounded-md bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-medium">
                      {tag}
                    </span>
                  ))}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener"
                      className="ml-auto text-[11px] px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold hover:bg-amber-500/20 transition-colors shrink-0"
                    >
                      View →
                    </a>
                  )}
                </div>

              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
