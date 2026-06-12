import Layout, { GithubIcon } from '../components/Layout'
import { SITE, organizationJsonLd, type PageMeta } from '../meta'
import { products, type Product } from '../data/products'

export const meta: PageMeta = {
  path: '/',
  title: 'OpenGittr — Tools for teams that build and run software',
  description:
    'OpenGittr builds open source and SaaS developer tools: kubeui for Kubernetes monitoring, issueboard for whole-team issue tracking, rhealth for uptime monitoring, and bugtrack for production error capture.',
  jsonLd: [organizationJsonLd],
}

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="mt-0.5 shrink-0 text-zinc-500"
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  )
}

function KindBadge({ kind }: { kind: Product['kind'] }) {
  const styles =
    kind === 'Open Source'
      ? 'border-emerald-500/25 bg-emerald-500/10 text-emerald-400'
      : 'border-sky-500/25 bg-sky-500/10 text-sky-400'
  return (
    <span
      className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium tracking-wide ${styles}`}
    >
      {kind}
    </span>
  )
}

function ProductCard({ product }: { product: Product }) {
  return (
    <a
      href={product.href}
      target="_blank"
      rel="noopener"
      className={`group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.06] ${product.hoverBorder}`}
    >
      <div className="flex items-start justify-between">
        <img src={product.logo} alt={`${product.name} logo`} width="48" height="48" />
        <KindBadge kind={product.kind} />
      </div>

      <h3 className="font-display mt-5 text-xl font-semibold text-white">{product.name}</h3>
      <p className="mt-1 text-sm font-medium text-zinc-400">{product.tagline}</p>
      <p className="mt-3 text-sm leading-relaxed text-zinc-500">{product.description}</p>

      <ul className="mt-4 space-y-2">
        {product.highlights.map((h) => (
          <li key={h} className="flex gap-2 text-sm text-zinc-400">
            <CheckIcon />
            {h}
          </li>
        ))}
      </ul>

      <span className="mt-auto flex items-center gap-1.5 pt-6 text-sm font-medium text-white">
        {product.linkLabel}
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          <ArrowIcon />
        </span>
      </span>
    </a>
  )
}

/** Dashed placeholder card — keeps the grid balanced and signals more to come. */
function ComingSoonCard() {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 p-6 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-2xl text-zinc-500">
        +
      </div>
      <h3 className="font-display mt-5 text-xl font-semibold text-zinc-400">More in the works</h3>
      <p className="mt-3 max-w-[26ch] text-sm leading-relaxed text-zinc-600">
        New tools are brewing. Follow us on GitHub to catch them as they ship.
      </p>
      <a
        href={SITE.github}
        target="_blank"
        rel="noopener"
        className="mt-6 flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
      >
        <GithubIcon size={16} />
        Follow along
      </a>
    </div>
  )
}

const principles = [
  {
    title: 'Small, sharp tools',
    body: 'Each product does one job exceptionally well — no sprawling suites, no feature mazes. You can be productive in the first five minutes.',
  },
  {
    title: 'Open source where it counts',
    body: 'Tools that live on your machine and touch your infrastructure are open source. Hosted services come with public APIs so your data is never locked in.',
  },
  {
    title: 'Built by people who run software',
    body: 'We operate everything we sell — and use our own tools daily to build them. The rough edges get found by us before they ever reach you.',
  },
]

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="hero-grid absolute inset-0" />
        <div className="absolute -top-40 left-1/2 h-[480px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-500/20 via-violet-500/15 to-emerald-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5 pt-24 pb-20 text-center sm:pt-32 sm:pb-28">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Open source &amp; SaaS developer tools
          </p>
          <h1 className="font-display mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Tools for teams that{' '}
            <span className="bg-gradient-to-r from-sky-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
              build and run
            </span>{' '}
            software
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            Monitor your clusters, track your work, and know your services are up. OpenGittr makes
            focused products that respect your time — open source where it matters, hosted where it
            helps.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#products"
              className="w-full rounded-full bg-white px-7 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200 sm:w-auto"
            >
              Explore the products
            </a>
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/5 sm:w-auto"
            >
              <GithubIcon size={16} />
              See us on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            The portfolio
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-400">
            A growing family of focused tools, with more on the way. Each one stands on its own —
            pick what you need.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
            {/* Keep the grid visually complete when product count isn't a multiple of 3. */}
            {products.length % 3 !== 0 && <ComingSoonCard />}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="scroll-mt-20 border-t border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            How we build
          </h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {principles.map((p, i) => (
              <div key={p.title}>
                <span className="font-display text-sm font-semibold text-zinc-600">
                  0{i + 1}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-5 py-20 text-center sm:py-24">
          <h2 className="font-display mx-auto max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Have a question, idea, or bug report?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-zinc-400">
            We read everything. Reach out directly or open an issue on any of our repos.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`mailto:${SITE.contactEmail}`}
              className="w-full rounded-full bg-white px-7 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200 sm:w-auto"
            >
              {SITE.contactEmail}
            </a>
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/5 sm:w-auto"
            >
              <GithubIcon size={16} />
              github.com/opengittr
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
