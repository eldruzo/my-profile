import { meta } from '../data/portfolio'
import FadeUp from './ui/FadeUp'

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-8xl mx-auto px-6">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-500 mb-3">Contact</p>
          <h2 className="font-display text-[clamp(28px,4vw,40px)] font-bold text-zinc-900 dark:text-zinc-50 leading-tight mb-4">
            Let's Work Together
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-[16px] max-w-lg mb-14 leading-relaxed">
            Open to senior backend roles and interesting engineering challenges. Reach out and I'll respond within a day.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Contact list */}
          <FadeUp>
            <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden divide-y divide-zinc-200 dark:divide-zinc-800">
              {[
                { label: 'Email',             value: meta.email,        href: `mailto:${meta.email}`,                                  external: false },
                { label: 'LinkedIn',          value: meta.linkedinLabel, href: meta.linkedin,                                           external: true  },
                { label: 'Phone / WhatsApp',  value: meta.phone,        href: `https://wa.me/${meta.phone.replace(/\D/g, '')}`,         external: true  },
                { label: 'Location',          value: meta.locationDetail, href: null,                                                   external: false },
              ].map(row => (
                <div key={row.label} className="flex items-center justify-between gap-4 px-5 py-4">
                  <span className="text-xs text-zinc-400 dark:text-zinc-600 shrink-0 min-w-[120px]">{row.label}</span>
                  {row.href
                    ? <a href={row.href} {...(row.external ? { target: '_blank', rel: 'noopener' } : {})}
                        className="text-sm text-amber-600 dark:text-amber-500 hover:underline text-right truncate">
                        {row.value}
                      </a>
                    : <span className="text-sm text-zinc-700 dark:text-zinc-300 text-right">{row.value}</span>
                  }
                </div>
              ))}
            </div>
          </FadeUp>

          {/* CTA */}
          <FadeUp delay={100}>
            <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-7 hover:-translate-y-1 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-300">
              <h3 className="font-display text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">
                Open to Opportunities
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-7">
                Looking for senior backend roles in Node.js, TypeScript, and distributed systems.
                Remote-friendly and open to Jakarta, Bandung, or Bogor.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`mailto:${meta.email}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-amber-500 text-zinc-950 rounded-lg text-sm font-semibold hover:bg-amber-400 transition-colors"
                >
                  Send Email
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                <a
                  href={meta.resume}
                  download
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-lg text-sm font-semibold hover:border-zinc-500 dark:hover:border-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
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
