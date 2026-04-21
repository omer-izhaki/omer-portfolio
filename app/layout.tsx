import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Heebo } from 'next/font/google';
import './globals.css';
import Providers from './providers';

// ─── Font loading ─────────────────────────────────────────
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

// Heebo supports Hebrew — loaded alongside the Latin fonts
// so RTL switching is instant without a flash of unstyled text
const heebo = Heebo({
  subsets: ['latin', 'hebrew'],
  variable: '--font-heebo',
  display: 'swap',
});

// ─── SEO metadata ─────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Omer Itzhaki | Developer & CS Student',
  description:
    'Computer Science & Cybersecurity student at the Open University of Israel. ' +
    'Building AI systems, securing networks, and leading teams. ' +
    'Open to Junior / Student roles in High-Tech, DevOps, Automation, and Product Management.',
  keywords: [
    'Omer Itzhaki',
    'portfolio',
    'computer science',
    'cybersecurity',
    'DevOps',
    'AI',
    'React',
    'Python',
    'Israel',
  ],
  authors: [{ name: 'Omer Itzhaki' }],
  openGraph: {
    title: 'Omer Itzhaki | Developer & CS Student',
    description:
      'CS & Cybersecurity student — AI systems, networks, leadership. Open to high-tech roles.',
    type: 'website',
  },
};

// ─── Root layout ──────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // lang and dir are updated dynamically by the i18n context on the client
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${heebo.variable}`}>
      <body className="bg-navy text-slate font-inter antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
