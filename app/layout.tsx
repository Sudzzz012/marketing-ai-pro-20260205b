import './globals.css';
import type { Metadata } from 'next';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { NeuralBackground } from './components/NeuralBackground';
import { Providers } from './components/Providers';

export const metadata: Metadata = {
  title: {
    default: 'Marketing AI Pro',
    template: '%s | Marketing AI Pro'
  },
  description: 'Compliance-first marketing AI platform built for regulated industries.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NeuralBackground />
        <div className="relative z-10">
          <Header />
          <Providers>
            <main>{children}</main>
          </Providers>
          <Footer />
        </div>
      </body>
    </html>
  );
}
