// Prerenders every route to a real static HTML file in dist/, generates
// sitemap.xml, and strips the dev-only JS bundle. Run by `npm run build` after
// `vite build` (client assets) and `vite build --ssr` (render bundle).
import { mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const assetsDir = join(dist, 'assets')

const { render, routes, SITE } = await import(join(root, 'dist-ssr', 'entry-server.js'))

// Locate the content-hashed stylesheet emitted by the client build.
const cssFile = readdirSync(assetsDir).find((f) => f.endsWith('.css'))
if (!cssFile) throw new Error('No CSS asset found in dist/assets')
const cssHref = `/assets/${cssFile}`

// The site ships zero JavaScript: drop the dev-only client bundle.
for (const f of readdirSync(assetsDir)) {
  if (f.endsWith('.js') || f.endsWith('.js.map')) rmSync(join(assetsDir, f))
}

const written = []
for (const route of routes) {
  const { path, noindex } = route.meta
  const html = render(path, cssHref)
  const outFile =
    path === '/404'
      ? join(dist, '404.html')
      : join(dist, path === '/' ? '' : `.${path}`, 'index.html')
  mkdirSync(dirname(outFile), { recursive: true })
  writeFileSync(outFile, html)
  written.push({ path, outFile, noindex })
}

// sitemap.xml — every indexable page.
const now = new Date()
const lastmod = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
const urls = written
  .filter((p) => !p.noindex)
  .map((p) => {
    const loc = SITE.origin + (p.path === '/' ? '/' : p.path)
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`
  })
  .join('\n')
writeFileSync(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
)

rmSync(join(root, 'dist-ssr'), { recursive: true, force: true })

console.log(`Prerendered ${written.length} pages (css: ${cssHref}):`)
for (const p of written) console.log(`  ${p.path}${p.noindex ? '  (noindex)' : ''}`)
console.log('Wrote sitemap.xml')
