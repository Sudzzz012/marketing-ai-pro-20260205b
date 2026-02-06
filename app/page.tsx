import { Container } from './components/Container';
import { SectionHeading } from './components/SectionHeading';
import { Button } from './components/Button';
import { MotionBlock } from './components/Motion';

const regulatedCards = [
  {
    title: 'Financial Services & Credit',
    risk: 'Risk: policy violations, misleading claims, platform scrutiny',
    outcome: 'Outcome: compliance-aware messaging and audit-ready outputs'
  },
  {
    title: 'Debt Review & Credit Repair',
    risk: 'Risk: regulated terminology and ad disapprovals',
    outcome: 'Outcome: pre-sanitised copy and safer conversion paths'
  },
  {
    title: 'Insurance',
    risk: 'Risk: disclosure failures and misrepresentation',
    outcome: 'Outcome: structured messaging with compliance controls'
  },
  {
    title: 'Healthcare & Wellness',
    risk: 'Risk: prohibited claims and platform enforcement',
    outcome: 'Outcome: claim filtering and risk scoring'
  },
  {
    title: 'Legal & Professional Services',
    risk: 'Risk: ethical and regulatory exposure',
    outcome: 'Outcome: governance-ready content workflows'
  },
  {
    title: 'Enterprise / Finance-Led Teams',
    risk: 'Risk: lack of accountability and traceability',
    outcome: 'Outcome: decision logs and operational transparency'
  }
];

export default function HomePage() {
  return (
    <div>
      <section className="section-pad">
        <Container>
          <MotionBlock>
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.4em] text-muted">Regulated industries</p>
              <h1 className="mt-4 text-4xl font-semibold text-white md:text-6xl">Stop Guessing. Start Dominating.</h1>
              <p className="mt-5 text-base text-muted md:text-lg">
                Marketing AI Pro is a compliance-first artificial intelligence platform built for regulated environments where claims, risk, and capital exposure must be controlled — not guessed.
              </p>
              <p className="mt-4 text-sm text-muted">Designed for financial services, healthcare, insurance, and other regulated industries.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/portal">Request Access</Button>
                <Button href="/features" variant="secondary">View How It Works</Button>
              </div>
              <p className="mt-6 text-xs text-muted">No hype. No guarantees. Structured systems. Results vary by market, offer, and execution.</p>
            </div>
          </MotionBlock>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <MotionBlock>
            <div className="glass p-8">
              <SectionHeading
                eyebrow="Market reality"
                title="The AI Shift Is Already Underway"
                subtitle="The competitive gap in regulated markets is no longer about creativity. It is about speed, control, and governance."
              />
              <div className="grid gap-4 text-sm text-muted">
                <p>In the next 6–12 months, there will be two types of organisations:</p>
                <ul className="list-disc pl-5">
                  <li>Those operating with compliance-aware intelligence</li>
                  <li>Those reacting to bans, disapprovals, and lost spend</li>
                </ul>
                <p className="text-white">Marketing AI Pro was built for the first group.</p>
              </div>
            </div>
          </MotionBlock>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <SectionHeading
            eyebrow="Built for regulated industries"
            title="Compliance-first architecture for every sector"
            subtitle="Each industry faces distinct risk exposure. Marketing AI Pro adapts outputs and workflows to protect governance and approvals."
          />
          <div className="card-grid">
            {regulatedCards.map((card, index) => (
              <MotionBlock key={card.title} delay={index * 0.05}>
                <div className="glass p-6">
                  <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                  <p className="mt-3 text-sm text-muted">{card.risk}</p>
                  <p className="mt-3 text-sm text-white">{card.outcome}</p>
                </div>
              </MotionBlock>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <MotionBlock>
              <div className="glass p-8">
                <SectionHeading
                  eyebrow="Risk reality"
                  title="Why Generic AI Breaks in Regulated Markets"
                />
                <ul className="grid gap-3 text-sm text-muted">
                  <li>• No understanding of regulated claims</li>
                  <li>• No approval workflows</li>
                  <li>• No audit trails</li>
                  <li>• No separation between generation and deployment</li>
                  <li>• No accountability when platforms intervene</li>
                </ul>
              </div>
            </MotionBlock>
            <MotionBlock>
              <div className="glass p-8">
                <SectionHeading
                  eyebrow="Differentiation"
                  title="How Marketing AI Pro Is Different"
                />
                <ul className="grid gap-3 text-sm text-muted">
                  <li>• Compliance-aware generation</li>
                  <li>• Risk scoring before deployment</li>
                  <li>• Human approval checkpoints</li>
                  <li>• Decision traceability</li>
                  <li>• Infrastructure-aware outputs</li>
                </ul>
              </div>
            </MotionBlock>
          </div>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <MotionBlock>
            <div className="glass p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-muted">AI Command Center</p>
                  <h2 className="mt-3 text-3xl font-semibold text-white">Live Simulation (Illustrative)</h2>
                  <p className="mt-4 text-sm text-muted">Premium dashboard view that mirrors internal governance signals.</p>
                </div>
                <div className="grid gap-4 text-sm">
                  <div className="glass px-5 py-4">Compliance Check Passed</div>
                  <div className="glass px-5 py-4">Creative Risk Reduced</div>
                  <div className="glass px-5 py-4">Audience Signal Strength Increasing</div>
                  <div className="glass px-5 py-4">Optimization Cycle Complete</div>
                </div>
              </div>
            </div>
          </MotionBlock>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <SectionHeading
            eyebrow="Proof bento"
            title="Signals that matter to decision-makers"
            subtitle="Performance signals are shared with context and compliance in mind."
          />
          <div className="grid gap-4 lg:grid-cols-4">
            {[
              { title: 'Up to 315% ROI lift*', copy: 'Illustrative lift from controlled optimization cycles.' },
              { title: '1M+ leads processed*', copy: 'Scaled usage across internal and partner programs.' },
              { title: 'Continuous optimization cycles', copy: 'Measured, approved iterations with traceability.' },
              { title: 'Governance-ready outputs', copy: 'Structured logs and review checkpoints.' }
            ].map((tile) => (
              <MotionBlock key={tile.title}>
                <div className="glass p-6">
                  <h3 className="text-lg font-semibold text-white">{tile.title}</h3>
                  <p className="mt-3 text-sm text-muted">{tile.copy}</p>
                </div>
              </MotionBlock>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted">*Illustrative outcomes based on internal and partner use cases. Results vary by industry, market conditions, compliance constraints, and execution.</p>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <MotionBlock>
            <div className="glass p-10 text-center">
              <h2 className="text-3xl font-semibold text-white md:text-4xl">Built for Organisations That Cannot Afford Guesswork</h2>
              <p className="mt-4 text-sm text-muted">Enterprise onboarding available. No self-serve signups.</p>
              <div className="mt-6 flex justify-center">
                <Button href="/portal">Request Access</Button>
              </div>
            </div>
          </MotionBlock>
        </Container>
      </section>
    </div>
  );
}
