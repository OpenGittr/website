import Layout from '../components/Layout'
import type { PageMeta } from '../meta'

export const meta: PageMeta = {
  path: '/404',
  title: 'Page not found — OpenGittr',
  description: 'The page you were looking for does not exist.',
  noindex: true,
}

export default function NotFound() {
  return (
    <Layout>
      <section className="mx-auto flex max-w-6xl flex-col items-center px-5 py-32 text-center sm:py-44">
        <p className="font-display text-7xl font-bold text-white/10">404</p>
        <h1 className="font-display mt-4 text-2xl font-semibold text-white">Page not found</h1>
        <p className="mt-3 max-w-sm text-sm text-zinc-500">
          The page you were looking for doesn't exist or has moved.
        </p>
        <a
          href="/"
          className="mt-8 rounded-full bg-white px-7 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
        >
          Back to home
        </a>
      </section>
    </Layout>
  )
}
