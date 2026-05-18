import { meta } from '../data/portfolio'
import FadeUp from './ui/FadeUp'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-100/60 dark:bg-slate-800/40">
      <div className="max-w-8xl mx-auto px-6">
        <FadeUp>
          <p className="text-xs font-bold uppercase tracking-widest text-accent-600 dark:text-accent-400 mb-2.5">Contact</p>
          <h2 className="font-display text-[clamp(30px,4.5vw,42px)] font-bold text-slate-900 dark:text-slate-100 leading-tight mb-4">
            Let's Work Together
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-[16px] max-w-xl mb-14 leading-relaxed">
            I'm open to senior backend roles and interesting engineering challenges.
            Reach out and I'll respond within a day.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Contact cards */}
          <FadeUp>
            <div className="flex flex-col gap-4">
              {[
                {
                  icon: '📧',
                  label: 'Email',
                  value: meta.email,
                  href: `mailto:${meta.email}`,
                  cta: 'Send an email',
                  external: false,
                },
                {
                  icon: '🔗',
                  label: 'LinkedIn',
                  value: meta.linkedinLabel,
                  href: meta.linkedin,
                  cta: 'View profile',
                  external: true,
                },
                {
                  icon: '📞',
                  label: 'Phone / WhatsApp',
                  value: meta.phone,
                  href: `https://wa.me/${meta.phone.replace(/\D/g, '')}`,
                  cta: 'Message on WhatsApp',
                  external: true,
                },
                {
                  icon: '📍',
                  label: 'Location',
                  value: meta.locationDetail,
                  href: null,
                  cta: null,
                  external: false,
                },
              ].map(card => (
                <div
                  key={card.label}
                  className="flex items-center gap-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-5 py-4 hover:-translate-y-0.5 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent-50 dark:bg-accent-500/15 border border-accent-200 dark:border-accent-500/30 flex items-center justify-center text-base shrink-0">
                    {card.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-0.5">{card.label}</p>
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200 truncate">{card.value}</p>
                  </div>
                  {card.href && card.cta && (
                    <a
                      href={card.href}
                      {...(card.external ? { target: '_blank', rel: 'noopener' } : {})}
                      className="shrink-0 text-xs font-semibold text-accent-600 dark:text-accent-400 hover:underline"
                    >
                      {card.cta} →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </FadeUp>

          {/* CTA panel */}
          <FadeUp delay={100}>
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 text-center">
              <div className="w-14 h-14 rounded-2xl bg-accent-50 dark:bg-accent-500/15 border border-accent-200 dark:border-accent-500/30 flex items-center justify-center text-2xl mx-auto mb-5">
                💼
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                Open to Opportunities
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-[15px] leading-relaxed mb-7">
                Looking for senior backend roles or consulting work in Node.js, TypeScript, and distributed systems.
                Remote-friendly and open to Jakarta, Bandung, or Bogor.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`mailto:${meta.email}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-accent-600 dark:bg-accent-500 text-white rounded-xl text-sm font-semibold hover:bg-accent-700 dark:hover:bg-accent-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent-600/30 transition-all"
                >
                  Send Email
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                <a
                  href={meta.resume}
                  download
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 border-[1.5px] border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-xl text-sm font-semibold hover:border-accent-600 dark:hover:border-accent-400 hover:text-accent-600 dark:hover:text-accent-400 hover:-translate-y-0.5 transition-all"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                  Download Resume
                </a>
              </div>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  )
}
