export const SITE = {
  origin: 'https://opengittr.com',
  name: 'OpenGittr',
  github: 'https://github.com/opengittr',
  contactEmail: 'hello@opengittr.com',
} as const

export type PageMeta = {
  /** URL path with no trailing slash ('/' for home, '/404' for the not-found page). */
  path: string
  title: string
  description: string
  jsonLd?: object[]
  noindex?: boolean
}

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'OpenGittr',
  url: SITE.origin,
  logo: `${SITE.origin}/logo.svg`,
  sameAs: [SITE.github],
  contactPoint: [{ '@type': 'ContactPoint', contactType: 'general', email: SITE.contactEmail }],
}
