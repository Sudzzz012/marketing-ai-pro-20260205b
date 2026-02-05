import { Container } from '../../components/Container';
import { SectionHeading } from '../../components/SectionHeading';
import { MotionBlock } from '../../components/Motion';

const features = [
  {
    title: 'Compliance-first AI architecture',
    copy: 'Built to prioritize claim safety, regulatory language, and policy alignment before creative output is produced.'
  },
  {
    title: 'Separation of generation and deployment',
    copy: 'Content is generated in a controlled environment, then validated before any platform deployment.'
  },
  {
    title: 'Risk scoring & approval flows',
    copy: 'Every asset is scored for compliance risk with built-in checkpoints for human approval.'
  },
  {
    title: 'Audit logs and decision traceability',
    copy: 'Maintain a complete record of outputs, approvals, and changes for governance teams.'
  },
  {
    title: 'Infrastructure awareness',
    copy: 'Outputs are aligned with platform policies to reduce disapprovals and ensure brand safety.'
  }
];

export default function FeaturesPage() {
  return (
    <div className="section-pad">
      <Container>
        <SectionHeading
          eyebrow="Platform & capabilities"
          title="Built for regulated operations"
          subtitle="Marketing AI Pro pairs governance with performance. Every feature is designed to mitigate risk, improve visibility, and enable controlled growth."
        />
        <div className="grid gap-6">
          {features.map((feature, index) => (
            <MotionBlock key={feature.title} delay={index * 0.05}>
              <div className="glass p-6">
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm text-muted">{feature.copy}</p>
              </div>
            </MotionBlock>
          ))}
        </div>
      </Container>
    </div>
  );
}
