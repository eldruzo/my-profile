// Ledger-style section: account number and title in the left column, entries on the right.
export default function Section({ id, number, title, aside, children, className = '' }) {
  return (
    <section id={id} className={`border-b border-rule ${className}`}>
      <div className="max-w-page mx-auto px-5 sm:px-8 py-16 sm:py-24 grid gap-10 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16">
        <div>
          <div className="lg:sticky lg:top-24">
            <p className="text-sm text-ink-3 tabular-nums">{number}</p>
            <h2 className="wide font-extrabold tracking-[-0.02em] text-[clamp(1.75rem,3vw,2.25rem)] leading-tight mt-1">
              {title}
            </h2>
            {aside && <p className="text-[15px] text-ink-2 leading-relaxed mt-3 max-w-[30ch]">{aside}</p>}
          </div>
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  )
}
