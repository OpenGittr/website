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
  // Pages without their own share image use the site-wide one.
  const image = SITE.origin + (meta.image ?? '/og.png')
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
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={image} />
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo-180.png" />
        <link rel="manifest" href="/site.webmanifest" />
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
