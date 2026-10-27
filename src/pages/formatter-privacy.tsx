import Layout from '../components/Layout'
import { PageIntro, Section } from '../components/blocks'
import { SITE, type PageMeta } from '../meta'

export const meta: PageMeta = {
  path: '/formatter/privacy',
  title: 'Formatter privacy policy — OpenGittr',
  description:
    'Privacy policy for Formatter, the OpenGittr JSON formatter and Markdown viewer for Chrome. It collects no data, has no servers or analytics, and makes no network requests.',
}

export default function FormatterPrivacy() {
  return (
    <Layout>
      <PageIntro
        title="Formatter privacy policy"
        sub="Formatter collects nothing. Here is exactly what it does with the files you open."
        effectiveDate="October 27, 2026"
      />
      <Section className="prose-og pb-20 pt-4">
        <p>
          Formatter is a JSON formatter and Markdown (.md) viewer for Chrome, from OpenGittr. It shows
          JSON as a collapsible, searchable tree and renders Markdown files GitHub-style. This policy
          covers the extension only. For OpenGittr's hosted products, see the{' '}
          <a href="/privacy">OpenGittr privacy policy</a>.
        </p>

        <h2>What we collect</h2>
        <p>
          Nothing. Formatter has no servers, no accounts, no analytics, and no tracking, and it
          makes no network requests of its own.
        </p>

        <h2>How your files are handled</h2>
        <p>
          When you open a JSON or Markdown document, Formatter reads it inside that browser tab to
          display it. The content is never sent anywhere and is not stored once you close the tab.
          On ordinary web pages Formatter does nothing: it only reads a page when Chrome shows it as
          a raw text document, or when you pick a format from the toolbar button.
        </p>

        <h2>Settings</h2>
        <p>
          Your preferences (theme, which formats to format automatically, and display options) are
          saved with Chrome's <code>storage.sync</code> API. If Chrome sync is on, Chrome syncs them
          across your signed-in browsers. OpenGittr never receives them.
        </p>

        <h2>Permissions</h2>
        <ul>
          <li>
            <strong>Storage</strong>: saves the settings above. Nothing else is stored.
          </li>
          <li>
            <strong>Access to the pages you open</strong>: JSON and Markdown files can come from any
            site or from your disk, so Formatter needs to be able to read them wherever you open them.
            It processes them only inside the tab.
          </li>
        </ul>

        <h2>Third parties</h2>
        <p>
          None. The libraries Formatter uses (marked, DOMPurify, and highlight.js) are bundled into
          the extension and run locally.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          If this policy changes, the new version will be posted on this page with a new effective
          date.
        </p>

        <h2>Contact</h2>
        <p>
          Privacy questions: <a href={`mailto:${SITE.privacyEmail}`}>{SITE.privacyEmail}</a>.
        </p>
      </Section>
    </Layout>
  )
}
