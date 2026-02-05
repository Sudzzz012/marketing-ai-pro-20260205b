import { Container } from '../../components/Container';
import { SectionHeading } from '../../components/SectionHeading';
import { Button } from '../../components/Button';
import { MotionBlock } from '../../components/Motion';

export default function PortalPage() {
  return (
    <div className="section-pad">
      <Container>
        <SectionHeading
          eyebrow="Client portal"
          title="Client Portal"
          subtitle="Access is provisioned for approved organisations only."
        />
        <MotionBlock>
          <div className="glass p-8">
            <p className="text-sm text-muted">Compliance review is completed before onboarding. Please submit a request to access the portal.</p>
            <form className="mt-6 grid gap-4 text-sm">
              <div className="grid gap-2">
                <label htmlFor="company">Organisation name</label>
                <input id="company" name="company" className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white" placeholder="Organisation" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="contact">Primary contact</label>
                <input id="contact" name="contact" className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white" placeholder="Full name" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email">Work email</label>
                <input id="email" name="email" type="email" className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white" placeholder="name@company.com" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="industry">Industry</label>
                <input id="industry" name="industry" className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white" placeholder="Financial services, healthcare, insurance" />
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Button href="/portal">Request Access</Button>
                <p className="text-xs text-muted">This is a placeholder form. Submission is handled during onboarding.</p>
              </div>
            </form>
          </div>
        </MotionBlock>
      </Container>
    </div>
  );
}
