import { motion, useReducedMotion } from 'framer-motion'
import { useLang } from '../i18n/LangContext'
import './HowItWorks.css'

export default function HowItWorks() {
  const { t } = useLang()
  const prefersReduced = useReducedMotion()

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: prefersReduced ? 0 : 0.12 } },
  }

  const step = {
    hidden: prefersReduced ? { opacity: 0 } : { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section className="lay-section lay-how" id="how-it-works" aria-label={t.howHeading}>
      <div className="lay-container">
        <p className="lay-eyebrow">Proses</p>
        <h2 className="lay-how__heading">{t.howHeading}</h2>
        <p className="lay-how__subhead">{t.howSubhead}</p>

        <motion.ol
          className="lay-how__steps"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          aria-label="Langkah-langkah"
        >
          {t.steps.map((s) => (
            <motion.li key={s.num} className="lay-how__step" variants={step}>
              <div className="lay-how__step-num" aria-hidden="true">{s.num}</div>
              <div className="lay-how__step-body">
                <h3 className="lay-how__step-title">{s.title}</h3>
                <p className="lay-how__step-desc">{s.desc}</p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}
