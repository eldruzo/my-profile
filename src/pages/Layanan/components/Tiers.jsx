import { motion, useReducedMotion } from 'framer-motion'
import { useLang } from '../i18n/LangContext'
import { TIERS, WA_HREF } from '../config'
import './Tiers.css'

function formatRp(n) {
  return 'Rp' + n.toLocaleString('id-ID')
}

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="7.5" stroke="currentColor" strokeOpacity="0.3"/>
    <path d="M4.5 8L6.8 10.5L11.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function Tiers() {
  const { t } = useLang()
  const prefersReduced = useReducedMotion()

  const tierData = [
    { name: t.tier1Name, tagline: t.tier1Tagline, idealFor: t.tier1IdealFor, features: t.tier1Features },
    { name: t.tier2Name, tagline: t.tier2Tagline, idealFor: t.tier2IdealFor, features: t.tier2Features },
    { name: t.tier3Name, tagline: t.tier3Tagline, idealFor: t.tier3IdealFor, features: t.tier3Features },
  ]

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: prefersReduced ? 0 : 0.1, delayChildren: 0.1 } },
  }

  const card = {
    hidden: prefersReduced ? { opacity: 0 } : { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section className="lay-section lay-tiers" id="tiers" aria-label={t.tiersHeading}>
      <div className="lay-container">
        <p className="lay-eyebrow">{t.navServices}</p>
        <h2 className="lay-tiers__heading">{t.tiersHeading}</h2>
        <p className="lay-tiers__subhead">{t.tiersSubhead}</p>

        <motion.div
          className="lay-tiers__grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {TIERS.map((tier, i) => {
            const data = tierData[i]
            const isHighlighted = tier.highlighted

            return (
              <motion.article
                key={tier.num}
                className={`lay-tier-card${isHighlighted ? ' lay-tier-card--highlight' : ''}`}
                variants={card}
                whileHover={prefersReduced ? {} : {
                  y: -6,
                  boxShadow: isHighlighted
                    ? '0 20px 60px -20px rgba(18,80,58,0.5)'
                    : '24px 32px 72px -28px rgba(27,23,20,0.28)',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                {isHighlighted && (
                  <div className="lay-tier-card__badge">{t.tierPopular}</div>
                )}

                <header className="lay-tier-card__header">
                  <p className="lay-tier-card__num">0{tier.num}</p>
                  <h3 className="lay-tier-card__name">{data.name}</h3>
                  <p className="lay-tier-card__tagline">{data.tagline}</p>
                </header>

                <div className="lay-tier-card__pricing">
                  <div className="lay-tier-card__price-row">
                    <span className="lay-tier-card__price-label">{t.tierSetup}</span>
                    <span className="lay-tier-card__price lay-num">{formatRp(tier.setup)}</span>
                  </div>
                  <div className="lay-tier-card__price-row lay-tier-card__price-row--monthly">
                    <span className="lay-tier-card__monthly lay-num">{formatRp(tier.monthly)}</span>
                    <span className="lay-tier-card__per">{t.tierMonthly}</span>
                  </div>
                </div>

                <ul className="lay-tier-card__features" aria-label="Fitur">
                  {data.features.map((feat, fi) => (
                    <li key={fi} className="lay-tier-card__feature">
                      <CheckIcon />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="lay-tier-card__footer">
                  <p className="lay-tier-card__ideal">
                    <strong>{t.tierIdealFor}</strong> {data.idealFor}
                  </p>
                  <a
                    href={WA_HREF}
                    className={`lay-btn lay-tier-card__cta ${isHighlighted ? 'lay-btn--primary' : 'lay-btn--ghost'}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.tierCta}
                  </a>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
