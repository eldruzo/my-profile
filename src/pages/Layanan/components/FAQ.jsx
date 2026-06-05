import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useLang } from '../i18n/LangContext'
import './FAQ.css'

function FAQItem({ faq, isOpen, onToggle }) {
  const prefersReduced = useReducedMotion()

  return (
    <div className={`lay-faq__item${isOpen ? ' lay-faq__item--open' : ''}`}>
      <button
        className="lay-faq__question"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{faq.q}</span>
        <span className="lay-faq__chevron" aria-hidden="true">
          {isOpen ? '−' : '+'}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="lay-faq__answer-wrap"
            initial={prefersReduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={prefersReduced ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
            exit={prefersReduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p className="lay-faq__answer">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const { t } = useLang()
  const [open, setOpen] = useState(null)
  const prefersReduced = useReducedMotion()

  const toggle = (i) => setOpen(v => (v === i ? null : i))

  return (
    <motion.section
      className="lay-section lay-faq"
      id="faq"
      aria-label={t.faqHeading}
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="lay-container lay-faq__inner">
        <div className="lay-faq__header">
          <p className="lay-eyebrow">FAQ</p>
          <h2 className="lay-faq__heading">{t.faqHeading}</h2>
        </div>

        <div className="lay-faq__list" role="list">
          {t.faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={open === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </motion.section>
  )
}
