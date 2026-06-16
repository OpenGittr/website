import Layout from '../components/Layout'
import { PageIntro, Section } from '../components/blocks'
import { SITE, type PageMeta } from '../meta'

export const meta: PageMeta = {
  path: '/terms',
  title: 'Terms of service — OpenGittr',
  description:
    'The OpenGittr terms of service covering all OpenGittr products: beta status, acceptable use, account responsibilities, data ownership (your data stays yours), availability, limitation of liability, and termination.',
}

export default function Terms() {
  return (
    <Layout>
      <PageIntro
        title="Terms of service"
        sub="The agreement between you and OpenGittr for using our products. Short version: you own your data, use the products lawfully, and some are still in beta."
        effectiveDate={SITE.legalEffectiveDate}
      />
      <Section className="prose-og pb-20 pt-4">
        <p>
          These terms govern your use of OpenGittr's products and services ("the services"),
          operated by OpenGittr ("we", "us"). This includes our hosted products such as{' '}
          <a href="https://issueboard.dev">issueboard</a>,{' '}
          <a href="https://rhealth.dev">rhealth</a>, and <a href="https://bugtrack.dev">bugtrack</a>,
          and this site. By creating an account or using a service you agree to these terms. If you
          are accepting on behalf of an organization, you confirm you have authority to bind it. A
          product may publish additional, product-specific terms; where it does, those apply
          alongside these and prevail in case of conflict for that product. Our open-source software
          (such as <a href="https://github.com/opengittr/kubeui">kubeui</a>) is licensed separately
          under the license in its repository, not these terms.
        </p>

        <h2>1. Beta status</h2>
        <p>
          Several services are in beta. Features may change, be added, or be removed; defects are
          more likely than in a finished product; and we may perform maintenance with little notice.
          We work hard to protect your data, but during beta you should not treat a service as the
          sole copy of anything irreplaceable. Where billing has not started, we will provide clear
          notice and pricing before charging anyone.
        </p>

        <h2>2. Your account</h2>
        <p>
          You sign in through a third-party identity provider (Google, GitHub, or Microsoft) and are
          responsible for securing that provider account. You are responsible for activity under
          your account and for ensuring people you invite to your organization comply with these
          terms. You must provide accurate information and must not impersonate others.
        </p>

        <h2>3. Acceptable use</h2>
        <p>You agree not to use the services to:</p>
        <ul>
          <li>break the law, infringe intellectual-property rights, or violate others' privacy;</li>
          <li>store or distribute malware, or attempt to breach, probe, or overload the services or other users' data;</li>
          <li>send spam or abusive content through forms, email intake, or notifications;</li>
          <li>resell or white-label a service without our written agreement;</li>
          <li>circumvent plan, role, or seat limits.</li>
        </ul>
        <p>We may suspend accounts or organizations that put the services or other users at risk.</p>

        <h2>4. Your data</h2>
        <p>
          <strong>You own your data.</strong> The content you and your team put into a service
          remains yours. You grant us a limited, non-exclusive license to host, store, process,
          transmit, and display that content solely as needed to operate, secure, and improve the
          services and to comply with law. This license ends when the content is deleted, subject to
          the bounded backup retention described in the <a href="/privacy">privacy policy</a>. You
          can export your data; on termination we will make export available for a reasonable
          period.
        </p>

        <h2>5. Our services</h2>
        <p>
          We retain all rights to the services themselves — software, design, and brand. We grant
          you a non-exclusive, non-transferable right to use them under these terms. Feedback you
          choose to give us may be used to improve the services without obligation to you.
        </p>

        <h2>6. Availability</h2>
        <p>
          The services are provided "as is" and "as available", without warranties of any kind,
          express or implied, including merchantability, fitness for a particular purpose, and
          non-infringement. During beta we offer no service-level agreement. We aim for high
          availability and honest status communication but do not guarantee uninterrupted or
          error-free operation.
        </p>

        <h2>7. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, OpenGittr will not be liable for indirect,
          incidental, special, consequential, or punitive damages, or for lost profits, revenue,
          data, or goodwill. Our total aggregate liability for any claims arising out of or relating
          to the services is limited to the greater of the amounts you paid us in the twelve months
          before the claim or USD&nbsp;100. Some jurisdictions do not allow certain limitations, in
          which case these apply to the fullest extent permitted.
        </p>

        <h2>8. Termination</h2>
        <p>
          You may stop using a service and delete your organization at any time. We may suspend or
          terminate access for material breach of these terms, where required by law, or — with
          reasonable notice — if we discontinue a service. On termination we will provide a
          reasonable window to export your data, after which it is deleted per the{' '}
          <a href="/privacy">privacy policy</a>.
        </p>

        <h2>9. Changes to these terms</h2>
        <p>
          We may update these terms as our services evolve. For material changes we will notify
          account owners by email and post the updated terms here with a new effective date at least
          14 days before they take effect. Continuing to use a service after that date constitutes
          acceptance.
        </p>

        <h2>10. Governing law</h2>
        <p>
          These terms are governed by the laws of India, without regard to conflict-of-law rules,
          and disputes are subject to the courts of India. This will be confirmed together with a
          counsel review of these terms before general availability.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms:{' '}
          <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
        </p>
      </Section>
    </Layout>
  )
}
