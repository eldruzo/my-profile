import { skills, education, sideWork } from '../data/portfolio'
import Section from './Section'

export default function Skills() {
  return (
    <Section id="skills" number="03" title="Skills & background">
      <dl className="max-w-[60rem]">
        {skills.map(s => (
          <div key={s.group} className="grid gap-1 sm:grid-cols-[10.5rem_minmax(0,1fr)] sm:gap-6 py-4 border-t border-rule first:border-t-0 first:pt-0">
            <dt className="font-bold">{s.group}</dt>
            <dd className="text-ink-2 leading-relaxed max-w-[65ch]">{s.items}</dd>
          </div>
        ))}
      </dl>

      <div className="grid gap-12 md:grid-cols-2 mt-16">
        <div>
          <h3 className="font-bold pb-3 border-b-2 border-ink">Education</h3>
          <ul>
            {education.map(e => (
              <li key={e.title} className="py-4 border-b border-rule">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="font-semibold">{e.title}</p>
                  <p className="text-sm text-ink-3 shrink-0">{e.period}</p>
                </div>
                <p className="text-[15px] text-ink-2 mt-0.5">{e.where}</p>
                {e.note && <p className="text-[15px] text-red font-semibold mt-1">{e.note}</p>}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold pb-3 border-b-2 border-ink">On the side</h3>
          <div className="py-4">
            <p className="font-semibold">{sideWork.title}</p>
            <p className="text-[15px] text-ink-2 mt-0.5 max-w-[45ch]">{sideWork.text}</p>
          </div>
        </div>
      </div>
    </Section>
  )
}
