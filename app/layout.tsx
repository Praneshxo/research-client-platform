import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'Aristocrat Research · Project 7303', description: 'Client research workspace' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
