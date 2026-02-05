import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function Button({ href, children, variant = 'primary', className = '' }: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-200';
  const styles = variant === 'primary'
    ? 'button-primary shadow-lg shadow-cyan/20 hover:shadow-cyan/40'
    : 'button-secondary text-white hover:border-white/40';

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
