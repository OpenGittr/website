import type { ReactNode } from 'react'
import { SITE } from '../meta'
import { products } from '../data/products'

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2.5">
      <img src="/logo.svg" alt="" width="30" height="30" />
      <span className="font-display text-lg font-semibold tracking-tight text-white">
        OpenGittr
      </span>
    </a>
  )
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-950 font-sans text-zinc-300 antialiased">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Logo />
          <nav className="flex items-center gap-2 sm:gap-6">
            <a
              href="/#products"
              className="hidden text-sm text-zinc-400 transition-colors hover:text-white sm:block"
            >
              Products
            </a>
            <a
              href="/#approach"
              className="hidden text-sm text-zinc-400 transition-colors hover:text-white sm:block"
            >
              How we build
            </a>
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:border-white/25 hover:bg-white/10"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
            <div className="max-w-xs">
              <Logo />
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                Sharp, focused tools for teams that build and run software.
              </p>
            </div>
            <div className="flex gap-16">
              <div>
                <h3 className="text-sm font-semibold text-white">Products</h3>
                <ul className="mt-3 space-y-2">
                  {products.map((p) => (
                    <li key={p.id}>
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener"
                        className="text-sm text-zinc-500 transition-colors hover:text-white"
                      >
                        {p.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Company</h3>
                <ul className="mt-3 space-y-2">
                  <li>
                    <a
                      href={SITE.github}
                      target="_blank"
                      rel="noopener"
                      className="text-sm text-zinc-500 transition-colors hover:text-white"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${SITE.contactEmail}`}
                      className="text-sm text-zinc-500 transition-colors hover:text-white"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacy"
                      className="text-sm text-zinc-500 transition-colors hover:text-white"
                    >
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/terms"
                      className="text-sm text-zinc-500 transition-colors hover:text-white"
                    >
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-12 text-xs text-zinc-600">
            &copy; 2026 OpenGittr. Built with care for people who ship.
          </p>
        </div>
      </footer>
    </div>
  )
}

export { GithubIcon }
