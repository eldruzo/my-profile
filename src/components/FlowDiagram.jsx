const ink = 'oklch(var(--ink))'
const ink3 = 'oklch(var(--ink-3))'
const rule = 'oklch(var(--rule))'
const red = 'oklch(var(--red))'
const paper = 'oklch(var(--paper))'

function Box({ x, y, w, h = 64, title, sub, stroke = ink, dashed, titleColor = ink }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="4" fill={paper} stroke={stroke} strokeWidth="1.5" strokeDasharray={dashed ? '5 4' : undefined} />
      <text x={x + w / 2} y={y + (sub ? h / 2 - 4 : h / 2 + 5)} textAnchor="middle" fontSize="15" fontWeight="700" fill={titleColor}>{title}</text>
      {sub && <text x={x + w / 2} y={y + h / 2 + 15} textAnchor="middle" fontSize="12.5" fill={ink3}>{sub}</text>}
    </g>
  )
}

function Arrow({ d, color = ink }) {
  return <path d={d} fill="none" stroke={color} strokeWidth="1.5" markerEnd={`url(#arrow-${color === red ? 'red' : 'ink'})`} />
}

export default function FlowDiagram() {
  return (
    <figure className="mt-14">
      <div className="overflow-x-auto -mx-5 px-5 sm:mx-0 sm:px-0">
        <svg
          viewBox="0 0 880 250"
          className="w-full min-w-[760px] h-auto font-sans"
          role="img"
          aria-labelledby="flow-title flow-desc"
        >
          <title id="flow-title">Payment event flow in the EDH finance module</title>
          <desc id="flow-desc">
            Stripe and Adyen send webhook events to an intake endpoint. An idempotency check looks up the event id:
            events already seen are acknowledged and ignored; new events update the billing ledger in MongoDB, which feeds
            reconciliation, and a PostgreSQL change-data-capture mirror that powers Power BI reports.
          </desc>
          <defs>
            <marker id="arrow-ink" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0 0L10 5L0 10z" fill={ink} />
            </marker>
            <marker id="arrow-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0 0L10 5L0 10z" fill={red} />
            </marker>
          </defs>

          <Box x={4} y={30} w={140} title="Stripe · Adyen" sub="payment events" />
          <Arrow d="M144 62H180" />
          <Box x={184} y={30} w={140} title="Webhook intake" sub="REST endpoint" />
          <Arrow d="M324 62H360" />
          <Box x={364} y={30} w={160} title="Seen this event?" sub="idempotency check" stroke={red} titleColor={red} />
          <Arrow d="M524 62H560" />
          <text x={542} y={52} textAnchor="middle" fontSize="12" fill={ink3}>no</text>
          <Box x={564} y={30} w={140} title="Billing ledger" sub="MongoDB" />
          <Arrow d="M704 62H736" />
          <Box x={740} y={30} w={136} title="Reconciliation" sub="provider vs ledger" />

          <Arrow d="M444 94V160" color={red} />
          <text x={454} y={132} fontSize="12" fill={red}>yes</text>
          <Box x={364} y={164} w={160} h={56} title="Acknowledge, no-op" sub="no double charge" stroke={red} dashed />

          <Arrow d="M634 94V160" />
          <Box x={564} y={164} w={140} h={56} title="CDC mirror" sub="PostgreSQL" />
          <Arrow d="M704 192H736" />
          <Box x={740} y={164} w={136} h={56} title="Power BI" sub="finance reporting" />

          <line x1="4" y1="246" x2="876" y2="246" stroke={rule} />
        </svg>
      </div>
      <figcaption className="text-sm text-ink-3 mt-3">
        Simplified view of the event path. The production system has more moving parts.<span className="sm:hidden"> Scroll sideways to see all of it.</span>
      </figcaption>
    </figure>
  )
}
