import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GlobalLogo from '@/components/GlobalLogo';

export const metadata: Metadata = {
  title       : 'Kovalty Technologies',
  description : 'Transforming Businesses Through Technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang = "en">
      <body>
        <GlobalLogo />
        <Header />
        <main className = "app-main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

