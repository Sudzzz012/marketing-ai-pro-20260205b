import { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export function SectionHeading({ eyebrow, title, subtitle, children }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      {eyebrow ? <p className="text-xs uppercase tracking-[0.35em] text-muted">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 max-w-3xl text-sm text-muted md:text-base">{subtitle}</p> : null}
      {children}
    </div>
  );
}
