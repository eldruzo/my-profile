/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Archivo', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        paper: 'oklch(var(--paper) / <alpha-value>)',
        'paper-2': 'oklch(var(--paper-2) / <alpha-value>)',
        rule: 'oklch(var(--rule) / <alpha-value>)',
        ink: 'oklch(var(--ink) / <alpha-value>)',
        'ink-2': 'oklch(var(--ink-2) / <alpha-value>)',
        'ink-3': 'oklch(var(--ink-3) / <alpha-value>)',
        ledger: 'oklch(var(--ledger) / <alpha-value>)',
        'ledger-ink': 'oklch(var(--ledger-ink) / <alpha-value>)',
        'ledger-rule': 'oklch(var(--ledger-rule) / <alpha-value>)',
        red: 'oklch(var(--red) / <alpha-value>)',
      },
      maxWidth: {
        page: '1180px',
      },
    },
  },
  plugins: [],
}
