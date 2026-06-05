import { motion, useReducedMotion } from 'framer-motion'
import { useLang } from '../i18n/LangContext'
import './ValueStrip.css'

export default function ValueStrip() {
  const { t } = useLang()
  const prefersReduced = useReducedMotion()

  return (
    <motion.section
      className="lay-value-strip"
      initial={prefersReduced ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="lay-container lay-value-strip__inner">
        <span className="lay-value-strip__icon" aria-hidden="true">→</span>
        <p className="lay-value-strip__text">{t.valueStrip}</p>
      </div>
    </motion.section>
  )
}
