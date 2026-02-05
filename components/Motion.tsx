import { ReactNode } from 'react';

interface MotionBlockProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function MotionBlock({ children, className = '' }: MotionBlockProps) {
  return <div className={className}>{children}</div>;
}
