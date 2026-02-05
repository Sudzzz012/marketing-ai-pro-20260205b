import { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export function SectionHeading({ eyebrow, title, subtitle, children }: SectionHeadingProps) {
  return (
    <div>
      {eyebrow ? <p>{eyebrow}</p> : null}
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
      {children}
    </div>
  );
}
