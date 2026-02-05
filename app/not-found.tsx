import Link from 'next/link';
import { Container } from '../components/Container';
import { Button } from '../components/Button';

export default function NotFound() {
  return (
    <div className="section-pad">
      <Container>
        <div className="glass p-10 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-muted">404</p>
          <h1 className="mt-4 text-3xl font-semibold text-white md:text-4xl">Page not found</h1>
          <p className="mt-4 text-sm text-muted">This page does not exist or has been moved.</p>
          <div className="mt-6 flex justify-center">
            <Button href="/">Return to homepage</Button>
          </div>
          <p className="mt-6 text-xs text-muted">If you believe this is an error, request access and our team will assist.</p>
          <div className="mt-3">
            <Link href="/portal" className="text-xs text-muted underline">Request Access</Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
