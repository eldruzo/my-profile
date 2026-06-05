import { motion, useReducedMotion } from 'framer-motion'
import { useLang } from '../i18n/LangContext'
import './WhyWebsite.css'

export default function WhyWebsite() {
  const { t } = useLang()
  const prefersReduced = useReducedMotion()

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: prefersReduced ? 0 : 0.09 } },
  }

  const point = {
    hidden: prefersReduced ? { opacity: 0 } : { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  }

  const icons = ['✦', '◆', '⚡', '→']

  return (
    <section className="lay-section lay-why" aria-label={t.whyHeading}>
      <div className="lay-container">
        <p className="lay-eyebrow">Kenapa</p>
        <h2 className="lay-why__heading">{t.whyHeading}</h2>
        <p className="lay-why__subhead">{t.whySubhead}</p>

        <motion.ul
          className="lay-why__grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {t.whyPoints.map((p, i) => (
            <motion.li key={i} className="lay-why__card" variants={point}>
              <span className="lay-why__icon" aria-hidden="true">{icons[i]}</span>
              <h3 className="lay-why__title">{p.title}</h3>
              <p className="lay-why__desc">{p.desc}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
