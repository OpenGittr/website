import type { ComponentType } from 'react'
import type { PageMeta } from './meta'

import Home, { meta as homeMeta } from './pages/home'
import Privacy, { meta as privacyMeta } from './pages/privacy'
import Terms, { meta as termsMeta } from './pages/terms'
import FormatterPrivacy, { meta as formatterPrivacyMeta } from './pages/formatter-privacy'
import NotFound, { meta as notFoundMeta } from './pages/notfound'

export type Route = { meta: PageMeta; Component: ComponentType }

/** Every page of the site. The prerender script emits one static HTML file per route. */
export const routes: Route[] = [
  { meta: homeMeta, Component: Home },
  { meta: privacyMeta, Component: Privacy },
  { meta: termsMeta, Component: Terms },
  { meta: formatterPrivacyMeta, Component: FormatterPrivacy },
  { meta: notFoundMeta, Component: NotFound },
]
