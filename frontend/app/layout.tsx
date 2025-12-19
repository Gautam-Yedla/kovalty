import type { Metadata }                 from 'next';
import { Inter }                         from 'next/font/google';
import './globals.css';
import { Header }                        from '@/components/layout/Header';
import { Footer }                        from '@/components/layout/Footer';
import { GlobalLogo }                    from '@/components/layout/GlobalLogo';
import { AppProviders }                  from '@/providers';

const inter = Inter({
  subsets   : ['latin'],
  weight    : ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable   : '--font-primary',
});

export const metadata: Metadata = {
  title: 'Kovalty Technologies',
  description: 'Transforming Businesses Through Technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className = {`${inter.variable} font-sans`}>
        <AppProviders>
          <GlobalLogo />
          <Header />
          <main className = "pt-0">
            {children}
          </main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}

