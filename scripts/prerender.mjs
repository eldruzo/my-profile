// Injects the server-rendered app into dist/index.html so crawlers and link previews see real content.
import { readFile, writeFile, rm } from 'node:fs/promises'
import { resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(fileURLToPath(import.meta.url), '../..')
const ssrDir = resolve(root, 'dist-ssr')
const htmlPath = resolve(root, 'dist/index.html')

const { render } = await import(pathToFileURL(resolve(ssrDir, 'entry-server.js')).href)
const html = await readFile(htmlPath, 'utf8')
const marker = '<div id="root"></div>'
if (!html.includes(marker)) throw new Error(`prerender: ${marker} not found in dist/index.html`)

await writeFile(htmlPath, html.replace(marker, `<div id="root">${render()}</div>`))
await rm(ssrDir, { recursive: true, force: true })
console.log('prerender: dist/index.html written')
