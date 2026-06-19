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

function FeaturedCard({ project }) {
  return (
    <div className="relative h-full border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 md:p-10 bg-zinc-50 dark:bg-zinc-950 overflow-hidden flex flex-col gap-7">
      <span className="absolute bottom-6 right-6 font-display text-3xl font-bold uppercase tracking-[0.3em] text-zinc-200 dark:text-zinc-800 select-none leading-none pointer-events-none">
        Featured
      </span>

      <div className="relative z-10 flex flex-col gap-4">
        <div className="flex items-center justify-between gap-3">
          <TypeBadge type={project.type} />
          <span className="text-xs text-zinc-400 dark:text-zinc-600">{project.period}</span>
        </div>

        <div>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50 leading-tight">
            {project.title}
          </h3>
          <p className="text-sm text-amber-600 dark:text-amber-500 font-medium mt-1">
            {project.role} · {project.company}
          </p>
        </div>

        <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-prose">
          {project.description}
        </p>
      </div>

      {project.highlights && (
        <div className="relative z-10 flex flex-wrap gap-x-6 gap-y-3 py-5 border-y border-zinc-200 dark:border-zinc-800">
          {project.highlights.map(h => (
            <div key={h} className="flex items-baseline gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
              <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">{h}</span>
            </div>
          ))}
        </div>
      )}

      {project.subProjects && (
        <div className="relative z-10">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600 mb-2.5">Modules</p>
          <div className="flex flex-wrap items-center gap-2">
            {project.subProjects.map((sp, i) => (
              <span key={sp} className="flex items-center gap-2">
                <span className="text-xs px-2.5 py-1 rounded-md border border-amber-500/30 text-amber-700 dark:text-amber-400 font-medium">
                  {sp}
                </span>
                {i < project.subProjects.length - 1 && (
                  <span className="text-zinc-300 dark:text-zinc-700 text-xs">→</span>
                )}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="relative z-10 flex flex-wrap items-center gap-1.5 mt-auto">
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
  )
}

function CompactCard({ project }) {
  return (
    <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 bg-zinc-50 dark:bg-zinc-950 hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors duration-300 flex flex-col gap-3">
      <div className="flex items-center justify-between gap-3">
        <TypeBadge type={project.type} />
        <span className="text-xs text-zinc-400 dark:text-zinc-600">{project.period}</span>
      </div>

      <div>
        <h3 className="font-display text-base font-bold text-zinc-900 dark:text-zinc-50 leading-snug">
          {project.title}
        </h3>
        <p className="text-xs text-amber-600 dark:text-amber-500 font-medium mt-0.5">{project.role}</p>
      </div>

      <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2">
        {project.description}
      </p>

      <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-zinc-200 dark:border-zinc-800">
        {project.tags.map(tag => (
          <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-medium">
            {tag}
          </span>
        ))}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener"
            className="ml-auto text-[10px] px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold hover:bg-amber-500/20 transition-colors shrink-0"
          >
            View →
          </a>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  const featured = projects.find(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-24 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
      <div className="max-w-8xl mx-auto px-6">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-500 mb-3">Projects</p>
          <h2 className="font-display text-[clamp(28px,4vw,40px)] font-bold text-zinc-900 dark:text-zinc-50 leading-tight mb-14">
            Things I've Built
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featured && (
            <FadeUp className="lg:col-span-2">
              <FeaturedCard project={featured} />
            </FadeUp>
          )}

          <div className="flex flex-col gap-5">
            {rest.map((project, i) => (
              <FadeUp key={project.title} delay={(i + 1) * 100}>
                <CompactCard project={project} />
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
