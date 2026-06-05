import { useState, useEffect, useRef } from 'react'
import { motion, useReducedMotion, useMotionValue, useSpring } from 'framer-motion'
import { useLang } from '../i18n/LangContext'
import { TIERS, CALCULATOR } from '../config'
import './Calculator.css'

function formatRp(n) {
  return 'Rp' + Math.round(n).toLocaleString('id-ID')
}

function AnimatedNumber({ target }) {
  const prefersReduced = useReducedMotion()
  const mv = useMotionValue(0)
  const spring = useSpring(mv, { stiffness: 60, damping: 18 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (prefersReduced) {
      setDisplay(target)
    } else {
      mv.set(target)
    }
  }, [target, prefersReduced])

  useEffect(() => {
    if (prefersReduced) return
    return spring.on('change', v => setDisplay(v))
  }, [spring, prefersReduced])

  useEffect(() => {
    if (prefersReduced) setDisplay(target)
  }, [prefersReduced, target])

  return <span className="lay-num">{formatRp(display)}</span>
}

export default function Calculator() {
  const { t, lang } = useLang()
  const prefersReduced = useReducedMotion()
  const [gmv, setGmv] = useState(CALCULATOR.DEFAULT_GMV)
  const [shiftRate, setShiftRate] = useState(CALCULATOR.DEFAULT_SHIFT_RATE)
  const [showAdvanced, setShowAdvanced] = useState(false)

  const { MARKETPLACE_FEE, DIRECT_FEE, MAX_GMV } = CALCULATOR

  const effectiveSavingRate = (MARKETPLACE_FEE - DIRECT_FEE) * shiftRate
  const monthlySavings = Math.round(gmv * effectiveSavingRate)
  const yearlySavings  = monthlySavings * 12

  const tierLabels = [t.tier1Name, t.tier2Name, t.tier3Name]

  // Highest tier whose monthly fee <= monthlySavings
  let recommended = null
  for (let i = TIERS.length - 1; i >= 0; i--) {
    if (TIERS[i].monthly <= monthlySavings) { recommended = i; break }
  }

  const handleGmvInput = (e) => {
    const raw = e.target.value.replace(/\D/g, '')
    const val = Math.min(Number(raw) || 0, MAX_GMV)
    setGmv(val)
  }

  const sectionVariants = {
    hidden: prefersReduced ? { opacity: 0 } : { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <motion.section
      className="lay-section lay-calc"
      id="calculator"
      aria-label={t.calcHeading}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      <div className="lay-container">
        <p className="lay-calc__valuestrip">{t.valueStrip}</p>
        <p className="lay-eyebrow">{t.navCalc}</p>
        <h2 className="lay-calc__heading">{t.calcHeading}</h2>
        <p className="lay-calc__subhead">{t.calcSubhead}</p>

        <div className="lay-calc__body">
          {/* Inputs */}
          <div className="lay-calc__inputs">
            <div className="lay-calc__field">
              <label htmlFor="calc-gmv" className="lay-calc__label">
                {t.calcGmvLabel}
              </label>
              <div className="lay-calc__input-wrap">
                <span className="lay-calc__prefix">Rp</span>
                <input
                  id="calc-gmv"
                  type="text"
                  inputMode="numeric"
                  className="lay-calc__input lay-num"
                  value={gmv.toLocaleString('id-ID')}
                  onChange={handleGmvInput}
                  aria-describedby="calc-gmv-hint"
                />
              </div>
              <span id="calc-gmv-hint" className="lay-calc__hint">{t.calcGmvHint}</span>
              <input
                type="range"
                className="lay-calc__slider"
                min={0}
                max={MAX_GMV}
                step={500_000}
                value={gmv}
                onChange={e => setGmv(Number(e.target.value))}
                aria-label={t.calcGmvLabel}
              />
              <div className="lay-calc__slider-labels">
                <span>Rp0</span>
                <span>{formatRp(MAX_GMV / 2)}</span>
                <span>{formatRp(MAX_GMV)}</span>
              </div>
            </div>

            {/* Advanced disclosure */}
            <details
              className="lay-calc__advanced"
              open={showAdvanced}
              onToggle={e => setShowAdvanced(e.target.open)}
            >
              <summary className="lay-calc__advanced-summary">
                <span>{t.calcAdvanced}</span>
                <span className="lay-calc__advanced-arrow" aria-hidden="true">
                  {showAdvanced ? '↑' : '↓'}
                </span>
              </summary>
              <div className="lay-calc__advanced-body">
                <label htmlFor="calc-shift" className="lay-calc__label">
                  {t.calcShiftLabel}{' '}
                  <strong>{Math.round(shiftRate * 100)}%</strong>
                </label>
                <span className="lay-calc__hint">{t.calcShiftHint}</span>
                <input
                  id="calc-shift"
                  type="range"
                  className="lay-calc__slider"
                  min={0.05}
                  max={1}
                  step={0.05}
                  value={shiftRate}
                  onChange={e => setShiftRate(Number(e.target.value))}
                  aria-label={t.calcShiftLabel}
                />
              </div>
            </details>
          </div>

          {/* Output */}
          <div className="lay-calc__results" aria-live="polite" aria-atomic="true">
            <div className="lay-calc__result-main">
              <p className="lay-calc__result-label">{t.calcResultMonth}</p>
              <p className="lay-calc__result-value">
                <AnimatedNumber target={monthlySavings} />
              </p>
              <p className="lay-calc__result-year">
                {t.calcResultYear}{' '}
                <strong><AnimatedNumber target={yearlySavings} /></strong>
                {' '}{t.calcResultYearSuffix}
              </p>
            </div>

            {/* Recommendation chip */}
            <div className="lay-calc__rec">
              <p className="lay-calc__rec-label">{t.calcRecommended}</p>
              {recommended !== null ? (
                <div className="lay-calc__rec-chip lay-calc__rec-chip--yes">
                  {tierLabels[recommended]}
                </div>
              ) : (
                <div className="lay-calc__rec-chip lay-calc__rec-chip--honest">
                  —
                </div>
              )}
              {recommended === null && (
                <p className="lay-calc__honest-note">{t.calcHonestNote}</p>
              )}
            </div>

            {/* Breakeven hints */}
            <div className="lay-calc__breakevens">
              {TIERS.map((tier, i) => {
                const breakeven = effectiveSavingRate > 0
                  ? tier.monthly / effectiveSavingRate
                  : Infinity
                return (
                  <div key={tier.num} className="lay-calc__be-row">
                    <span className="lay-calc__be-name">{tierLabels[i]}</span>
                    <span className="lay-calc__be-val">
                      {t.calcBreakevenLabel} {formatRp(breakeven)}{t.calcTierSuffix}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
