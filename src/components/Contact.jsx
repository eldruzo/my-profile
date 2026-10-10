import { meta } from '../data/portfolio'

export default function Contact() {
  const rows = [
    { label: 'Phone / WhatsApp', value: meta.phone, href: `https://wa.me/${meta.phone.replace(/\D/g, '')}` },
    { label: 'LinkedIn', value: meta.linkedinLabel, href: meta.linkedin },
    { label: 'CV', value: 'Download PDF, 2 pages', href: meta.cv },
    { label: 'Based in', value: meta.location },
  ]

  return (
    <section id="contact" className="relative bg-ledger text-ledger-ink overflow-hidden">
      <div className="ruled absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative max-w-page mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <p className="text-sm opacity-80">04</p>
        <h2 className="wide font-extrabold tracking-[-0.02em] text-[clamp(1.75rem,3vw,2.25rem)] leading-tight mt-1">
          Get in touch
        </h2>
        <p className="text-[17px] leading-relaxed opacity-90 mt-4 max-w-[52ch]">
          Happy to talk about backend roles, payment systems, or a production problem that keeps coming back.
          I usually reply within a day.
        </p>

        <a
          href={`mailto:${meta.email}`}
          className="inline-block wider font-extrabold tracking-[-0.03em] leading-none mt-10 text-[clamp(1.5rem,5.6vw,4.5rem)] break-all sm:break-normal underline decoration-1 underline-offset-[0.18em] decoration-ledger-ink/40 hover:decoration-ledger-ink transition-colors"
        >
          {meta.email}
        </a>

        <dl className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4 mt-14">
          {rows.map(r => (
            <div key={r.label} className="py-4 border-t border-ledger-ink/25">
              <dt className="text-sm opacity-75">{r.label}</dt>
              <dd className="font-semibold mt-1">
                {r.href
                  ? <a href={r.href} {...(r.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="underline decoration-1 underline-offset-4 decoration-ledger-ink/40 hover:decoration-ledger-ink">{r.value}</a>
                  : r.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
