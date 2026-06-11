// Build-time prerender entry: renders each route into a complete static HTML
// document. No hydration, no client JS — the site is pure HTML + CSS.
import { renderToStaticMarkup } from 'react-dom/server'
import Document from './components/Document'
import { routes } from './routes'
import { SITE } from './meta'

export { routes, SITE }

export function render(path: string, cssHref: string): string {
  const route = routes.find((r) => r.meta.path === path)
  if (!route) throw new Error(`No route for path: ${path}`)
  const { Component } = route
  return (
    '<!doctype html>\n' +
    renderToStaticMarkup(
      <Document meta={route.meta} cssHref={cssHref}>
        <Component />
      </Document>,
    )
  )
}
