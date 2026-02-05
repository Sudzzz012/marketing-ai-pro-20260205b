import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: 'var(--color-base)',
        text: 'var(--color-text)',
        muted: 'var(--color-muted)',
        glass: 'var(--color-glass)',
        stroke: 'var(--color-stroke)',
        cyan: 'var(--color-cyan)',
        purple: 'var(--color-purple)',
        gold: 'var(--color-gold)'
      },
      boxShadow: {
        glass: '0 20px 50px rgba(0, 0, 0, 0.45)'
      },
      backgroundImage: {
        glow: 'radial-gradient(circle at top, rgba(0, 255, 255, 0.2), transparent 55%)'
      }
    }
  },
  plugins: []
};

export default config;
