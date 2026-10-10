import { caseStudy } from '../data/portfolio'
import Section from './Section'
import FlowDiagram from './FlowDiagram'

function Ledger() {
  return (
    <table className="w-full text-[15px] self-start">
      <caption className="text-left text-sm text-ink-3 pb-3">By the numbers</caption>
      <tbody>
        {caseStudy.ledger.map(row => (
          <tr key={row.label} className="border-t border-rule">
            <th scope="row" className="text-left font-normal text-ink-2 py-3 pr-4">{row.label}</th>
            <td className="text-right font-semibold py-3 whitespace-nowrap">{row.value}</td>
          </tr>
        ))}
        <tr className="border-t-2 border-ink">
          <th scope="row" className="text-left font-semibold py-3 pr-4">{caseStudy.total.label}</th>
          <td className="text-right py-3 whitespace-nowrap">
            <span className="total font-extrabold text-red">{caseStudy.total.value}</span>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default function CaseStudy() {
  return (
    <Section id="work" number="01" title="Selected work" aside="The system I know best, from the first invoice to the last chargeback.">
      <p className="text-sm text-ink-3">{caseStudy.context}</p>
      <h3 className="wider font-extrabold tracking-[-0.02em] text-[clamp(1.9rem,4vw,3rem)] leading-[1.05] mt-2">
        {caseStudy.title}
      </h3>

      <div className="grid gap-12 xl:grid-cols-[minmax(0,1fr)_20rem] mt-10">
        <div className="max-w-[65ch] flex flex-col gap-8 text-[16.5px] leading-[1.7]">
          <div>
            <h4 className="font-bold mb-2">The problem</h4>
            <p className="text-ink-2">{caseStudy.problem}</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">What I did</h4>
            <ul className="flex flex-col gap-2.5 text-ink-2">
              {caseStudy.approach.map(item => (
                <li key={item} className="grid grid-cols-[1.25rem_1fr]">
                  <span aria-hidden="true" className="text-red">+</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">What held up</h4>
            <p className="text-ink-2">{caseStudy.outcome}</p>
          </div>
        </div>
        <Ledger />
      </div>

      <FlowDiagram />
    </Section>
  )
}
