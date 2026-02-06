import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { MotionBlock } from '../components/Motion';
import { Button } from '../components/Button';

const tiers = [
  {
    title: 'Operator',
    tagline: 'Lead delivery & structured outputs',
    governance: 'Foundational compliance gates and templated approvals.',
    oversight: 'Standard review cadence with reporting.'
  },
  {
    title: 'Scaler',
    tagline: 'Managed execution + AI optimization',
    governance: 'Expanded approval layers and risk scoring.',
    oversight: 'Dedicated compliance coordination and monitoring.'
  },
  {
    title: 'Enterprise',
    tagline: 'Full governance, compliance, infrastructure',
    governance: 'Custom governance models and audit readiness.',
    oversight: 'Executive-level reporting and accountability.'
  }
];

export default function PricingPage() {
  return (
    <div className="section-pad">
      <Container>
        <SectionHeading
          eyebrow="Regulated buyer logic"
          title="Pricing aligned with governance requirements"
          subtitle="Pricing depends on regulatory exposure, volume, and governance requirements. We structure assessments to align operational and compliance needs."
        />
        <div className="card-grid">
          {tiers.map((tier, index) => (
            <MotionBlock key={tier.title} delay={index * 0.05}>
              <div className="glass p-6">
                <h3 className="text-lg font-semibold text-white">{tier.title}</h3>
                <p className="mt-2 text-sm text-muted">{tier.tagline}</p>
                <div className="mt-4 text-sm text-muted">
                  <p className="text-white">Capabilities</p>
                  <p>{tier.governance}</p>
                </div>
                <div className="mt-4 text-sm text-muted">
                  <p className="text-white">Oversight depth</p>
                  <p>{tier.oversight}</p>
                </div>
              </div>
            </MotionBlock>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-8">
          <p className="text-sm text-muted">Pricing depends on regulatory exposure, volume, and governance requirements.</p>
          <Button href="/portal">Request a Structured Assessment</Button>
        </div>
      </Container>
    </div>
  );
}
