import { meta } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="bg-paper">
      <div className="max-w-page mx-auto px-5 sm:px-8 py-8 flex flex-wrap items-center justify-between gap-4 text-sm text-ink-3">
        <p>{meta.name} · {meta.role}, {meta.location}</p>
        <a href="#top" className="link">Back to top</a>
      </div>
    </footer>
  )
}
