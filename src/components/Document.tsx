import type { ReactNode } from 'react'
import { SITE, type PageMeta } from '../meta'

/**
 * Full HTML document wrapper, used only at prerender time (entry-server.tsx).
 * Every page gets a unique <title>, meta description, canonical URL, OG tags,
 * and optional JSON-LD blocks — all present in the initial static HTML.
 */
export default function Document({
  meta,
  cssHref,
  children,
}: {
  meta: PageMeta
  cssHref: string
  children: ReactNode
}) {
  const url = SITE.origin + (meta.path === '/' ? '/' : meta.path)
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        {meta.noindex ? (
          <meta name="robots" content="noindex" />
        ) : (
          <link rel="canonical" href={url} />
        )}
        <meta property="og:site_name" content={SITE.name} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        {!meta.noindex && <meta property="og:url" content={url} />}
        <meta name="twitter:card" content="summary" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="icon" href="/logo-192.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/logo-180.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap"
        />
        <link rel="stylesheet" href={cssHref} />
        {meta.jsonLd?.map((obj, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
          />
        ))}
      </head>
      <body>{children}</body>
    </html>
  )
}
