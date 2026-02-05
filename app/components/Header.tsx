import Link from 'next/link';
import { Container } from './Container';
import { Button } from './Button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/compliance', label: 'Compliance' }
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <Container className="flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/images/marketing-ai-pro-logo.png"
            alt="Marketing AI Pro"
            className="h-10 w-auto"
          />
        </Link>
        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center justify-center">
          <Button href="/portal">Request Access</Button>
        </div>
      </Container>
    </header>
  );
}
