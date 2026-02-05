import { Container } from '../../components/Container';
import { SectionHeading } from '../../components/SectionHeading';

export default function PrivacyPage() {
  return (
    <div className="section-pad">
      <Container>
        <SectionHeading
          eyebrow="Privacy policy"
          title="Protection of Personal Information Act (POPIA)"
          subtitle="This Privacy Policy explains how Marketing AI Pro collects, uses, and protects personal information in accordance with POPIA."
        />
        <div className="glass p-8 text-sm text-muted space-y-6">
          <div>
            <p className="text-white font-semibold">1. Responsible party</p>
            <p>Marketing AI Pro is the responsible party for the processing of personal information collected through this website and related services.</p>
          </div>
          <div>
            <p className="text-white font-semibold">2. Information we collect</p>
            <ul className="list-disc pl-5">
              <li>Contact details such as name, email address, and organisation name.</li>
              <li>Business and compliance information submitted in onboarding requests.</li>
              <li>Usage data and system interactions required for security and performance.</li>
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold">3. Purpose of processing</p>
            <p>We process personal information to evaluate access requests, provide compliance-led marketing services, maintain audit trails, and ensure platform security.</p>
          </div>
          <div>
            <p className="text-white font-semibold">4. Lawful basis</p>
            <p>Processing is conducted with consent, contractual necessity, or legitimate interest, depending on the interaction and service level.</p>
          </div>
          <div>
            <p className="text-white font-semibold">5. Information sharing</p>
            <p>We do not sell personal information. Data may be shared with authorised service providers or compliance partners where required for governance and onboarding.</p>
          </div>
          <div>
            <p className="text-white font-semibold">6. Cross-border transfers</p>
            <p>If information is transferred outside South Africa, we ensure adequate protection through contractual safeguards and security controls.</p>
          </div>
          <div>
            <p className="text-white font-semibold">7. Data retention</p>
            <p>Information is retained only as long as necessary for the stated purposes, regulatory requirements, or contractual obligations.</p>
          </div>
          <div>
            <p className="text-white font-semibold">8. Security measures</p>
            <p>We implement technical and organisational safeguards, including access control, monitoring, encryption where appropriate, and audit logging.</p>
          </div>
          <div>
            <p className="text-white font-semibold">9. Your rights</p>
            <p>You may request access to, correction of, or deletion of your personal information. You may also withdraw consent where processing is based on consent.</p>
          </div>
          <div>
            <p className="text-white font-semibold">10. Complaints</p>
            <p>Data subjects may lodge complaints with the Information Regulator of South Africa if they believe their rights under POPIA have been infringed.</p>
          </div>
          <div>
            <p className="text-white font-semibold">11. Updates</p>
            <p>We may update this Privacy Policy periodically. The latest version will be posted on this page.</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
