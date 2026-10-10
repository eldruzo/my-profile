import { experience } from '../data/portfolio'
import Section from './Section'

function Role({ role, isLatest }) {
  return (
    <li className="relative grid gap-1 sm:grid-cols-[10.5rem_minmax(0,1fr)] sm:gap-6 py-5 border-t border-rule first:border-t-0 first:pt-0">
      <p className="text-sm text-ink-3 sm:pt-[3px]">{role.period}</p>
      <div>
        <h4 className={`text-[17px] font-bold leading-snug ${isLatest ? '' : 'text-ink'}`}>{role.title}</h4>
        <ul className="mt-2 flex flex-col gap-1.5 text-[15.5px] leading-[1.65] text-ink-2 max-w-[65ch]">
          {role.bullets.map(b => (
            <li key={b} className="grid grid-cols-[1rem_1fr]">
              <span aria-hidden="true" className="text-ink-3">·</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export default function Experience() {
  return (
    <Section
      id="experience"
      number="02"
      title="Experience"
      aside="Fresher to Expert tier at one company, then on to payments infrastructure."
      className="bg-paper-2"
    >
      <div className="flex flex-col gap-14">
        {experience.map(job => (
          <article key={job.company}>
            <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 pb-4 mb-5 border-b-2 border-ink">
              <h3 className="wide font-extrabold text-[clamp(1.35rem,2.4vw,1.75rem)] tracking-[-0.01em]">
                {job.company}
                <span className="font-normal text-ink-3 text-base tracking-normal" style={{ fontStretch: '100%' }}> · {job.place}</span>
              </h3>
              <p className="text-sm text-ink-2">{job.span}</p>
            </header>
            {job.about && <p className="text-[15.5px] text-ink-2 mb-6 max-w-[65ch]">{job.about}</p>}
            <ol>
              {job.roles.map((role, i) => (
                <Role key={role.title + role.period} role={role} isLatest={i === 0} />
              ))}
            </ol>
          </article>
        ))}
      </div>
    </Section>
  )
}
