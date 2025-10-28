import type { Metadata } from 'next';
import { Roboto_Condensed } from 'next/font/google';
import '../styles/globals.css';

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Yosif Abbas | Portfolio',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${robotoCondensed.className} antialiased min-h-screen`}>{children}</body>
    </html>
  );
}
