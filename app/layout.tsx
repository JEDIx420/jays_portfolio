import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jayanand J - GTM Engineer, Product Marketer & AI Educator',
  description: 'VP of Growth at DataSemantics, Founder of zzenzzei, Owner of Anandam Halls, and Musician. 8+ years driving SaaS growth through AI automation, GTM strategy, and storytelling.',
  keywords: 'Jayanand, GTM strategy, product marketing, AI automation, SaaS growth, DataSemantics, zzenzzei, Serina.ai, Anandam Halls, musician',
  authors: [{ name: 'Jayanand J' }],
  creator: 'Jayanand J',
  openGraph: {
    title: 'Jayanand J - GTM Engineer, Product Marketer & AI Educator',
    description: 'VP of Growth at DataSemantics, Founder of zzenzzei, Owner of Anandam Halls, and Musician.',
    url: 'https://jayanand.com',
    siteName: 'Jayanand J Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jayanand J - GTM Engineer, Product Marketer & AI Educator',
    description: 'VP of Growth at DataSemantics, Founder of zzenzzei, Owner of Anandam Halls, and Musician.',
    creator: '@jayanand',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}