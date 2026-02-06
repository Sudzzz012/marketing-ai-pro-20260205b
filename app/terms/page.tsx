import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';

export default function TermsPage() {
  return (
    <div className="section-pad">
      <Container>
        <SectionHeading
          eyebrow="Terms & disclaimers"
          title="Terms of Use"
          subtitle="Marketing AI Pro is designed for regulated environments and requires responsible use."
        />
        <div className="glass p-8 text-sm text-muted space-y-6">
          <div>
            <p className="text-white font-semibold">No guarantees</p>
            <p>Marketing AI Pro does not guarantee outcomes, performance, or platform approvals.</p>
          </div>
          <div>
            <p className="text-white font-semibold">No financial or legal advice</p>
            <p>Content and guidance are provided for marketing operations only and do not constitute legal, financial, or investment advice.</p>
          </div>
          <div>
            <p className="text-white font-semibold">No platform immunity</p>
            <p>Marketing AI Pro is designed to reduce compliance risk but cannot prevent platform enforcement actions, account reviews, or policy changes.</p>
          </div>
          <div>
            <p className="text-white font-semibold">Results vary</p>
            <p>Results vary by market conditions, regulatory constraints, offer quality, and execution.</p>
          </div>
          <div>
            <p className="text-white font-semibold">Illustrative simulations</p>
            <p>Illustrative simulations and dashboards are representative only and are not promises of performance.</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
