import Layout from '../components/Layout'
import { Section } from '../components/blocks'
import { SITE, type PageMeta } from '../meta'

const STORE_URL = 'https://chromewebstore.google.com/detail/oelaophbcoofjligchnmclmjgmcgpjjp'

const faqs = [
  {
    q: 'Is Formatter free?',
    a: 'Yes. There is no paid tier, no account, and no ads.',
  },
  {
    q: 'Does it send my files anywhere?',
    a: 'No. Formatter has no servers and makes no network requests. Files are read and displayed inside the browser tab you opened them in, and nothing is stored after you close it.',
  },
  {
    q: 'Does it work with files on my computer?',
    a: 'Yes. For .json and .md files, open the extension’s details in chrome://extensions and turn on “Allow access to file URLs”; after that they open formatted. Chrome downloads local .yaml and .csv files instead of showing them, so for those use “Open a file…” from the toolbar button, or drop the file onto that page. Either way the file is read locally.',
  },
  {
    q: 'Will it change normal web pages?',
    a: 'No. It only acts when Chrome shows a page as a raw text document, like a JSON API response or a .md file on GitHub. You can always switch to the raw view, or restore the original page from the toolbar button.',
  },
  {
    q: 'Which browsers does it support?',
    a: 'Chrome, and Chromium browsers that install extensions from the Chrome Web Store, such as Brave and Edge. Chrome 114 or newer is required.',
  },
]

export const meta: PageMeta = {
  path: '/formatter',
  title: 'Formatter — JSON formatter and Markdown, YAML & CSV viewer for Chrome',
  description:
    'Formatter is a free Chrome extension that shows raw JSON and YAML as a searchable, collapsible tree, renders Markdown GitHub-style, and turns CSV into a sortable table. No account, and your files never leave the browser.',
  image: '/formatter/og.png',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Formatter',
      description:
        'A Chrome extension that formats JSON and YAML as a searchable tree, renders Markdown GitHub-style, and shows CSV as a sortable table.',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Chrome',
      url: `${SITE.origin}/formatter`,
      downloadUrl: STORE_URL,
      image: `${SITE.origin}/formatter/og.png`,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      publisher: { '@type': 'Organization', name: 'OpenGittr', url: SITE.origin },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
}

const features = [
  {
    title: 'JSON',
    items: [
      'Collapsible tree that stays fast on big documents',
      'Search keys and values with Cmd/Ctrl+F, including collapsed sections',
      'Click a value to see its path, like $.data[0].customer.email, and copy it',
      'Copy any node, the whole document formatted, or minified',
      'Large IDs like 12345678901234567890 stay exact instead of being rounded',
    ],
  },
  {
    title: 'Markdown',
    items: [
      'GitHub-style rendering: tables, task lists, heading links',
      'Syntax-highlighted code blocks with a copy button',
      'Table of contents on wide screens; front matter shown separately',
      'Scripts inside the file never run',
    ],
  },
  {
    title: 'YAML',
    items: [
      'The same searchable tree as JSON, with paths and per-node copy',
      'Anchors, aliases and merge keys (<<: *defaults) resolved to real values',
      'Multi-document files, like Kubernetes manifests, shown document by document',
      'Copy the whole file as JSON',
    ],
  },
  {
    title: 'CSV',
    items: [
      'A clean table with a sticky header and row numbers',
      'Click a column to sort; numbers sort as numbers',
      'Filter rows as you type, then copy them as CSV or JSON',
      'Quoted fields, embedded commas and line breaks handled',
    ],
  },
]

function AddToChrome() {
  return (
    <a
      href={STORE_URL}
      target="_blank"
      rel="noopener"
      className="inline-flex w-full items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200 sm:w-auto"
    >
      Add to Chrome — it’s free
    </a>
  )
}

function Screenshot({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      width="1280"
      height="800"
      loading="lazy"
      className="w-full rounded-xl border border-white/10 shadow-2xl shadow-black/40"
    />
  )
}

export default function Formatter() {
  return (
    <Layout>
      <Section className="pt-20 pb-4 text-center sm:pt-28">
        <img src="/logos/formatter.svg" alt="Formatter logo" width="64" height="64" className="mx-auto" />
        <h1 className="font-display mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Formatter
        </h1>
        <p className="mt-4 text-lg leading-8 text-zinc-400">
          A JSON formatter and Markdown viewer for Chrome, with YAML and CSV too.
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-zinc-500">
          Open a JSON API response, a README or a Kubernetes manifest in Chrome and you usually get a
          wall of raw text. With Formatter installed, JSON and YAML show as a searchable, collapsible
          tree, Markdown renders the way it does on GitHub, and CSV becomes a table you can sort and
          filter. There is nothing to configure, and your files never leave your browser.
        </p>
        <div className="mt-8">
          <AddToChrome />
        </div>
      </Section>

      <div className="mx-auto max-w-5xl px-5 pt-12">
        <Screenshot
          src="/formatter/json.png"
          alt="A JSON API response shown as a collapsible tree, with a search for “refund” highlighting matching keys"
        />
      </div>

      <Section className="pt-16">
        <div className="grid gap-10 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.title}>
              <h2 className="font-display text-xl font-semibold text-white">{f.title}</h2>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-400">
                {f.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true" className="text-sky-400">
                      ·
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <div className="mx-auto max-w-5xl px-5 pt-16">
        <Screenshot
          src="/formatter/markdown.png"
          alt="API docs written in Markdown, rendered GitHub-style with highlighted code, a table and a table of contents"
        />
      </div>

      <div className="mx-auto grid max-w-5xl gap-6 px-5 pt-16 md:grid-cols-2">
        <Screenshot
          src="/formatter/yaml.png"
          alt="A docker-compose YAML file shown as a collapsible tree in dark mode, with merged defaults resolved"
        />
        <Screenshot
          src="/formatter/csv.png"
          alt="A sales CSV shown as a table sorted by revenue, with a filter box and row numbers"
        />
      </div>

      <Section className="prose-og pt-12">
        <h2>Questions</h2>
        {faqs.map((f) => (
          <div key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
        <p>
          Read the full <a href="/formatter/privacy">privacy policy</a>.
        </p>
      </Section>
      <Section className="pt-6 pb-20">
        <AddToChrome />
      </Section>
    </Layout>
  )
}
