import type { Metadata } from 'next';
import { Roboto_Condensed } from 'next/font/google';
import '../styles/globals.css';
import NavBar from '@/components/nav/NavBar';

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: 'Yosif Abbas | %s',
    default: 'Yosif Abbas',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${robotoCondensed.className} pt-16 pb-8 antialiased min-h-screen flex flex-col justify-between`}
      >
        <NavBar />
        <main className="px-2">{children}</main>
        <footer className="text-xs text-center justify-self-end">
          <p className="">© {new Date().getFullYear()} Youssef Abbas</p>
          <p>Full Stack Developer · MERN</p>
        </footer>
      </body>
    </html>
  );
}
