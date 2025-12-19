import type { Metadata }                 from 'next';
import { DM_Sans, Montserrat }           from 'next/font/google';
import './globals.css';
import Header                            from '@/components/Header';
import Footer                            from '@/components/Footer';
import GlobalLogo                        from '@/components/GlobalLogo';

const dmSans = DM_Sans({
  subsets   : ['latin'],
  weight     : ['400', '500', '700'],
  variable   : '--font-sans',
});

const montserrat = Montserrat({
  subsets   : ['latin'],
  weight     : ['300', '400', '500', '600', '700', '800', '900'],
  variable   : '--font-serif',
});

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
      <body className = {`${dmSans.variable} ${montserrat.variable} font-sans`}>
        <GlobalLogo />
        <Header />
        <main className = "pt-[130px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

