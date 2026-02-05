import Link from 'next/link';
import { Container } from './Container';
import { Button } from './Button';

const sitemap = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/portal', label: 'Portal' },
  { href: '/compliance', label: 'Compliance' }
];

const policyLinks = [
  { href: '/privacy', label: 'Privacy (POPIA)' },
  { href: '/terms', label: 'Terms & Disclaimers' }
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/70">
      <Container className="flex flex-col gap-10 py-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col gap-4">
            <img
              src="/images/marketing-ai-pro-logo.png"
              alt="Marketing AI Pro"
              className="h-12 w-auto"
            />
            <p className="max-w-sm text-sm text-muted">
              Marketing AI Pro is built for regulated environments where governance and accountability are non-negotiable.
            </p>
          </div>
          <div className="grid gap-6 text-sm text-muted lg:grid-cols-2">
            <div>
              <p className="mb-2 font-semibold text-white">Sitemap</p>
              <div className="grid gap-2">
                {sitemap.map((link) => (
                  <Link key={link.href} href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 font-semibold text-white">Compliance</p>
              <div className="grid gap-2">
                {policyLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-xs text-muted">Enterprise onboarding available. No self-serve signups.</p>
          <Button href="/portal">Request Access</Button>
        </div>
      </Container>
    </footer>
  );
}
