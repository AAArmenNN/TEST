// app/layout.tsx

import { Metadata } from 'next';
import { getURL } from '@/utils/helpers';
import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';
import 'styles/main.css';

const title = 'Next.js Subscription Starter';
const description = 'Brought to you by Vercel, Stripe, and Supabase.';

export const metadata: Metadata = {
  metadataBase: new URL(getURL()),
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        {/* On inclut seulement le layout de base ici */}
        <Navbar />
        <main
          id="skip"
          className="min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)] bg-orangeclair"
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
