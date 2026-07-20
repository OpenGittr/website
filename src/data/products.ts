/**
 * The product portfolio. The home page renders whatever is in this array —
 * to add a product (bugtrack, simpleauth, ...), append an entry here and drop
 * its logo into public/logos/.
 */
export type Product = {
  /** Stable slug, also used as the React key. */
  id: string
  name: string
  kinds: ('Open Source' | 'SaaS')[]
  tagline: string
  description: string
  highlights: string[]
  /** Primary destination: product site for SaaS, GitHub repo for open source. */
  href: string
  linkLabel: string
  /** The product's actual brand mark, copied from its repo into public/logos/. */
  logo: string
  /** Tailwind hover-border class matching the logo's accent color. */
  hoverBorder: string
}

export const products: Product[] = [
  {
    id: 'kubeui',
    name: 'kubeui',
    kinds: ['Open Source'],
    tagline: 'Kubernetes monitoring without the ceremony',
    description:
      'A lightweight, local-first Kubernetes UI shipped as a single binary. Point it at your kubeconfig and get real-time visibility into every cluster — no agents, no install, no account.',
    highlights: [
      'Single binary, works off your existing kubeconfig',
      'Multi-cluster with live updates over WebSocket',
      '24+ resource types, YAML editing, log streaming',
    ],
    href: 'https://github.com/opengittr/kubeui',
    linkLabel: 'View on GitHub',
    logo: '/logos/kubeui.svg',
    hoverBorder: 'hover:border-blue-500/40',
  },
  {
    id: 'ogtr',
    name: 'ogtr',
    kinds: ['Open Source', 'SaaS'],
    tagline: 'The link smartener — shorten, target, measure',
    description:
      'A link shortener built for marketing teams: branded short links and QR codes with campaign analytics, device and city targeting, and mobile deep links. MIT open source at its core — use the hosted service at ogtr.in or self-host it free.',
    highlights: [
      'Custom domains, QR codes, UTM campaign analytics',
      'Device & city targeting with mobile app deep links',
      'MIT open source — self-host free, forever',
    ],
    href: 'https://ogtr.in',
    linkLabel: 'ogtr.in',
    logo: '/logos/ogtr.svg',
    hoverBorder: 'hover:border-indigo-500/40',
  },
  {
    id: 'issueboard',
    name: 'issueboard',
    kinds: ['SaaS'],
    tagline: 'Issue tracking for the whole team — not just the devs',
    description:
      'A minimal, fast tracker where support agents and product managers are first-class users. Viewers and reporters are free and unlimited; you only pay for editor seats.',
    highlights: [
      'Triage inbox with email, form, and chat intake',
      'GitHub integration: branch links, auto-close on merge',
      'Free unlimited viewers and reporters',
    ],
    href: 'https://issueboard.dev',
    linkLabel: 'issueboard.dev',
    logo: '/logos/issueboard.svg',
    hoverBorder: 'hover:border-orange-500/40',
  },
  {
    id: 'rhealth',
    name: 'rhealth',
    kinds: ['SaaS'],
    tagline: 'Know your systems are up — before your users tell you',
    description:
      'Uptime monitoring for websites, APIs, and services from 40+ global regions. HTTP, SSL expiry, keywords, heartbeats, and TCP ports — with alerts on every channel your team lives in.',
    highlights: [
      'Multi-region checks with response-time analytics',
      'Alerts via email, Slack, Teams, Discord, SMS, voice',
      'Branded public status pages',
    ],
    href: 'https://rhealth.dev',
    linkLabel: 'rhealth.dev',
    logo: '/logos/rhealth.svg',
    hoverBorder: 'hover:border-emerald-500/40',
  },
  {
    id: 'bugtrack',
    name: 'bugtrack',
    kinds: ['SaaS'],
    tagline: 'Catch production bugs and put them on your board',
    description:
      'Error capture that disappears into your existing workflow. The SDK captures, deduplicates, and enriches production errors — then files them as ready-to-triage issues on the board your team already uses.',
    highlights: [
      'Auto-captures exceptions, console errors, failed requests',
      'Smart grouping with occurrence and affected-user counts',
      'Files to GitHub, GitLab, Linear, or issueboard — two-way sync',
    ],
    href: 'https://bugtrack.dev',
    linkLabel: 'bugtrack.dev',
    logo: '/logos/bugtrack.svg',
    hoverBorder: 'hover:border-amber-500/40',
  },
]
