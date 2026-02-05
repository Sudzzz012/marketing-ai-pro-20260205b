import { Container } from '../../components/Container';
import { SectionHeading } from '../../components/SectionHeading';
import { MotionBlock } from '../../components/Motion';

const sections = [
  {
    title: 'Governance model',
    copy: 'Marketing AI Pro structures governance around regulated workflows, aligning marketing execution with compliance oversight and audit readiness.'
  },
  {
    title: 'Risk controls',
    copy: 'Risk is scored before deployment. Claims are flagged for review, and regulated terminology is checked against industry guidelines.'
  },
  {
    title: 'Approval workflows',
    copy: 'Human approval checkpoints are enforced. Each asset requires sign-off before release, with escalation paths for sensitive claims.'
  },
  {
    title: 'Audit trails',
    copy: 'Every output, revision, and approval is logged. Compliance teams can trace decisions with contextual reasoning.'
  },
  {
    title: 'Claim handling',
    copy: 'Claims are sanitized, qualified, and context-checked. No absolute promises are generated without mandatory disclosures.'
  },
  {
    title: 'Decision accountability',
    copy: 'Ownership is assigned to responsible parties. The system maintains accountability logs aligned to internal policy.'
  },
  {
    title: 'Platform safety philosophy',
    copy: 'Marketing AI Pro respects platform rules and avoids unsafe deployment tactics. Infrastructure awareness reduces disapprovals and reputational risk.'
  }
];

export default function CompliancePage() {
  return (
    <div className="section-pad">
      <Container>
        <SectionHeading
          eyebrow="Compliance & governance"
          title="Built for legal, compliance, and finance leaders"
          subtitle="Marketing AI Pro is structured to support governance teams with transparency, control, and accountability at every stage of marketing execution."
        />
        <div className="grid gap-6">
          {sections.map((section, index) => (
            <MotionBlock key={section.title} delay={index * 0.04}>
              <div className="glass p-6">
                <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                <p className="mt-3 text-sm text-muted">{section.copy}</p>
              </div>
            </MotionBlock>
          ))}
        </div>
      </Container>
    </div>
  );
}
