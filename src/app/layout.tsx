import type { Metadata } from 'next';
import { Roboto_Condensed } from 'next/font/google';
import '../styles/globals.css';
import NavBar from '@/components/nav/NavBar';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: 'Yosif Abbas | %s',
    default: 'Yosif Abbas',
  },
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data } = await supabase.auth.getSession();
  const user = data.session?.user ?? null;

  return (
    <html lang="en">
      <body
        className={`${robotoCondensed.className} pt-16 pb-8 antialiased min-h-screen flex flex-col justify-between`}
      >
        <NavBar user={user} />
        <main className="px-2 flex-1 flex flex-col">{children}</main>
        <footer className="text-xs text-center justify-self-end">
          <p className="">© {new Date().getFullYear()} Youssef Abbas</p>
          <p>Full Stack Developer · MERN</p>
        </footer>
      </body>
    </html>
  );
}
