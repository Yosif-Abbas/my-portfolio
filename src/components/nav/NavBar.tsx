'use client';

import Link from 'next/link';
import { useState } from 'react';
import BurgerButton from './BurgerButton';
import MobileMenu from './MobileMenu';
import { Permanent_Marker } from 'next/font/google';

const permanentMarker = Permanent_Marker({
  weight: ['400'],
  subsets: ['latin'],
});

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 min-h-16 w-full flex backdrop-blur-xs backdrop-opacity-10099 z-11">
      <MobileMenu open={open} onClose={() => setOpen(false)} />

      <nav className="w-full pl-12 sm:pr-6 flex justify-between items-center z-10">
        {/* logo */}
        <h1
          className={`${permanentMarker.className} select-none cursor-pointer text-4xl font-bold `}
        >
          <Link href="/">Youssef</Link>
        </h1>

        {/* small screen */}
        <BurgerButton open={open} onClick={() => setOpen(!open)} />

        {/* big screen */}
        <ul className="hidden justify-end gap-x-2 text-lg w-full sm:flex">
          <li className="">
            <Link href="/projects" className="link-before">
              Projects
            </Link>
          </li>
          <li>
            <Link href="about" className="link-before">
              About
            </Link>
          </li>
          {/* <li>
            <Link href="activities" className="link-before">
              Activities
            </Link>
          </li>
          <li>
            <Link href="blog" className="link-before">
              Blog
            </Link>
          </li> */}
          <li>
            <Link href="contact" className="link-before">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
