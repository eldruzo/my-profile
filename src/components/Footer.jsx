import { meta } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="py-8 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-8xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display font-bold text-zinc-900 dark:text-zinc-50">
          {meta.callName}<span className="text-amber-500">.</span>
        </span>
        <p className="text-sm text-zinc-400 dark:text-zinc-600">
          © {new Date().getFullYear()} {meta.name}
        </p>
        <div className="flex items-center gap-4 text-sm">
          <a href={`mailto:${meta.email}`} className="text-zinc-400 dark:text-zinc-600 hover:text-amber-600 dark:hover:text-amber-500 transition-colors">
            Email
          </a>
          <span className="text-zinc-300 dark:text-zinc-700">·</span>
          <a href={meta.linkedin} target="_blank" rel="noopener" className="text-zinc-400 dark:text-zinc-600 hover:text-amber-600 dark:hover:text-amber-500 transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
