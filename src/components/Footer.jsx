import { meta } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="py-8 bg-slate-900 dark:bg-slate-950 border-t border-slate-800">
      <div className="max-w-8xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display text-base font-bold text-slate-100">
          {meta.callName}<span className="text-accent-400">.</span>
        </span>
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {meta.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-sm text-slate-500">
          <a href={`mailto:${meta.email}`} className="hover:text-accent-400 transition-colors">
            {meta.email}
          </a>
          <span>·</span>
          <a href={meta.linkedin} target="_blank" rel="noopener" className="hover:text-accent-400 transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
