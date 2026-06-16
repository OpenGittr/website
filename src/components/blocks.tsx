import type { ReactNode } from 'react'

export function Section({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <section className={`mx-auto max-w-3xl px-5 ${className}`}>{children}</section>
}

/** Header for content pages (legal, etc.) — title, subhead, optional effective date. */
export function PageIntro({
  title,
  sub,
  effectiveDate,
}: {
  title: string
  sub: string
  effectiveDate?: string
}) {
  return (
    <Section className="pt-20 pb-2 sm:pt-28">
      <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {title}
      </h1>
      <p className="mt-5 text-lg leading-8 text-zinc-400">{sub}</p>
      {effectiveDate && (
        <p className="mt-4 text-sm text-zinc-500">Effective date: {effectiveDate}</p>
      )}
    </Section>
  )
}
