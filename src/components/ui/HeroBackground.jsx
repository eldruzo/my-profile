export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <svg className="absolute inset-0 w-full h-full text-zinc-300/70 dark:text-zinc-800/70">
        <defs>
          <pattern id="hero-dots" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-dots)" />
      </svg>

      <div className="absolute -top-32 -right-24 w-[480px] h-[480px] rounded-full bg-amber-500/10 dark:bg-amber-500/[0.07] blur-3xl animate-drift motion-reduce:animate-none" />
      <div className="absolute top-1/3 -left-40 w-[420px] h-[420px] rounded-full bg-zinc-400/15 dark:bg-zinc-600/10 blur-3xl animate-drift-reverse motion-reduce:animate-none" />
    </div>
  )
}
