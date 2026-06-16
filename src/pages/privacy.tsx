import Layout from '../components/Layout'
import { PageIntro, Section } from '../components/blocks'
import { SITE, type PageMeta } from '../meta'

export const meta: PageMeta = {
  path: '/privacy',
  title: 'Privacy policy — OpenGittr',
  description:
    'The OpenGittr privacy policy covering all OpenGittr products: what data we collect when you sign in (OAuth account details), why, who processes it, how long it is kept, and your rights to access, export, and delete it.',
}

export default function Privacy() {
  return (
    <Layout>
      <PageIntro
        title="Privacy policy"
        sub="What OpenGittr collects across its products, why, and what you can do about it."
        effectiveDate={SITE.legalEffectiveDate}
      />
      <Section className="prose-og pb-20 pt-4">
        <p>
          OpenGittr ("OpenGittr", "we", "us") builds developer tools, both open source and hosted
          (SaaS). This policy explains how we handle personal data across our products — including{' '}
          <a href="https://issueboard.dev">issueboard</a>,{' '}
          <a href="https://rhealth.dev">rhealth</a>, <a href="https://bugtrack.dev">bugtrack</a>,
          and <a href="https://github.com/opengittr/kubeui">kubeui</a> — and on this site,{' '}
          opengittr.com. A specific product may publish its own, more detailed policy on its own
          site; where it does, that product policy governs that product, and this policy covers
          everything else and the matters common to all of them. Several of our products are in
          beta; this policy will be reviewed by counsel before general availability, and we will
          announce material changes (see "Changes to this policy").
        </p>

        <h2>Sign-in and the OAuth consent screen</h2>
        <p>
          Our hosted products let you sign in with a third-party identity provider — Google,
          GitHub, or Microsoft. When you authorize sign-in, the consent screen you see is operated
          by OpenGittr and points here for this policy and our{' '}
          <a href="/terms">terms of service</a>. From your chosen provider we receive only your
          basic profile: your name, email address, avatar image, and a stable provider account
          identifier. We request the minimum scopes needed to authenticate you — we do not read
          your email, your repositories, your contacts, or your files, and we never receive or
          store a password. You can revoke OpenGittr's access at any time from your provider's
          account-security settings.
        </p>

        <h2>Data we collect</h2>
        <h3>Account data</h3>
        <p>
          The basic profile described above, plus the products and organizations you create or
          join, and your in-app settings and preferences.
        </p>
        <h3>Content you create</h3>
        <p>
          Whatever you put into a product to make it work — for example, monitor configurations and
          alert contacts in rhealth, issues and comments in issueboard, or error reports captured
          by bugtrack. This content belongs to you or your organization (see the{' '}
          <a href="/terms">terms of service</a>) and may contain personal data you choose to
          include; you are responsible for what you put in.
        </p>
        <h3>Usage and technical data</h3>
        <p>
          Standard server logs (IP address, browser user agent, timestamps, requested URLs) and
          product usage events that help us operate, debug, and improve our services. We do not run
          third-party advertising or cross-site tracking.
        </p>

        <h2>What we use data for</h2>
        <ul>
          <li>Providing the products: authenticating you and storing and displaying your content.</li>
          <li>Security: verifying sign-ins, detecting abuse, and protecting accounts and data.</li>
          <li>Operating and improving: debugging, capacity planning, and understanding which features matter.</li>
          <li>Communicating with you: service messages such as sign-in links, alerts and notifications you configure, and important account or policy notices. We do not send marketing email without consent.</li>
        </ul>

        <h2>What we do not do</h2>
        <p>
          We do not sell personal data. We do not share your content with third parties except the
          subprocessors below, and we do not use your private content to market to anyone.
        </p>

        <h2>Subprocessors</h2>
        <p>
          Our hosted products run on third-party cloud infrastructure (hosting, storage, email, and
          messaging delivery providers) that processes data on our behalf under its own
          confidentiality and data-processing commitments. We keep this list current and will
          publish it as our products mature through beta; you can request the current list at any
          time via <a href={`mailto:${SITE.privacyEmail}`}>{SITE.privacyEmail}</a>.
        </p>

        <h2>Retention</h2>
        <p>
          Content is retained for as long as your account or organization is active. When you
          delete content or close an account, it is removed from the live service promptly and from
          backups on the backup rotation schedule (a bounded number of weeks). Server logs are kept
          for a short operational window and then deleted. When billing applies, billing records are
          retained as required by law.
        </p>

        <h2>Your rights</h2>
        <p>Wherever you are, we extend GDPR-style rights to everyone using our products:</p>
        <ul>
          <li><strong>Access</strong> — ask what personal data we hold about you.</li>
          <li><strong>Export</strong> — receive a copy of your data in a portable format.</li>
          <li><strong>Correction</strong> — fix inaccurate account data (much of which you can edit directly).</li>
          <li><strong>Deletion</strong> — delete your account, or have your organization's data deleted entirely.</li>
          <li><strong>Objection</strong> — object to a particular use of your data.</li>
        </ul>
        <p>
          To exercise any of these, email{' '}
          <a href={`mailto:${SITE.privacyEmail}`}>{SITE.privacyEmail}</a>. We respond within 30
          days. If you are an end user of an organization on one of our products, we may direct your
          request to that organization where it controls the data in question.
        </p>

        <h2>Cookies</h2>
        <p>
          Our hosted apps use session cookies only — the minimum needed to keep you signed in and to
          protect against request forgery. There are no advertising cookies and no third-party
          trackers. This marketing site sets no cookies at all.
        </p>

        <h2>Security</h2>
        <p>
          We protect data with per-organization isolation, OAuth-only authentication, encryption in
          transit, and least-privilege access. If you find a vulnerability, please report it to{' '}
          <a href={`mailto:${SITE.securityEmail}`}>{SITE.securityEmail}</a>.
        </p>

        <h2>Children</h2>
        <p>
          OpenGittr products are tools for developers and teams, not directed at children under 16.
          We do not knowingly collect data from children.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We will update this policy as our products evolve — including the counsel review noted
          above — and post changes here with a new effective date. For material changes we will
          notify account owners by email before the changes take effect.
        </p>

        <h2>Contact</h2>
        <p>
          Privacy questions and requests:{' '}
          <a href={`mailto:${SITE.privacyEmail}`}>{SITE.privacyEmail}</a>. Security reports:{' '}
          <a href={`mailto:${SITE.securityEmail}`}>{SITE.securityEmail}</a>. General enquiries:{' '}
          <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
        </p>
      </Section>
    </Layout>
  )
}
