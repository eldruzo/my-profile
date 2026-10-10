import { meta } from '../data/portfolio'

export default function Hero() {
  return (
    <section id="top" className="relative bg-ledger text-ledger-ink overflow-hidden">
      <div className="ruled absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative max-w-page mx-auto px-5 sm:px-8 pt-14 sm:pt-20 pb-16 sm:pb-24">
        <div className="rise flex items-center gap-4">
          <img
            src={meta.photo}
            alt="Achmad Nabil"
            width="176"
            height="221"
            className="w-16 h-20 sm:w-[76px] sm:h-[95px] object-cover rounded-[3px] ring-1 ring-ledger-ink/30"
          />
          <div className="text-[15px] leading-snug">
            <p className="font-bold">Achmad Nabil</p>
            <p className="opacity-80">{meta.role} at {meta.company}, Jakarta</p>
          </div>
        </div>

        <h1
          className="rise wider font-extrabold tracking-[-0.03em] leading-[0.98] mt-10 sm:mt-14 max-w-[13ch] text-[clamp(2.6rem,7.4vw,6.4rem)]"
          style={{ animationDelay: '80ms' }}
        >
          Backends where the money has to <span className="total" style={{ '--red': '0.80 0.12 35' }}>add up.</span>
        </h1>

        <div className="rise mt-10 grid gap-8 md:grid-cols-[minmax(0,34rem)_auto] md:items-end md:justify-between" style={{ animationDelay: '180ms' }}>
          <p className="text-[17px] sm:text-lg leading-[1.65] opacity-90">
            Nearly five years building payment, billing and ERP backends in Go, Node.js, TypeScript and GraphQL.
            I led the finance module behind 60,000+ student accounts at ZettaByte, and now work on
            Southeast Asia’s financial API platform at Brick, writing Go.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${meta.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-ledger-ink text-ledger font-semibold text-[15px] hover:opacity-90 transition-opacity"
            >
              Email me
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
            <a
              href={meta.cv}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full ring-1 ring-inset ring-ledger-ink/50 font-semibold text-[15px] hover:ring-ledger-ink transition-shadow"
            >
              CV, 2-page PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
