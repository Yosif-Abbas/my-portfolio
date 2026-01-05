'use client';

import Link from 'next/link';
import { useState } from 'react';
import BurgerButton from './BurgerButton';
import MobileMenu from './MobileMenu';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative flex justify-end bg-[#3a1230]">
      <MobileMenu open={open} onClose={() => setOpen(false)} />

      <nav className=" fixed z-10">
        {/* small screen */}
        <BurgerButton open={open} onClick={() => setOpen(!open)} />

        {/* big screen */}
        <ul className="hidden justify-end gap-x-2 text-lg w-full sm:flex">
          <li className="">
            <Link href="/home" className="link-before">
              Home
            </Link>
          </li>
          <li className="">
            <Link href="/home" className="link-before">
              Projects
            </Link>
          </li>
          <li>
            <Link href="about" className="link-before">
              About
            </Link>
          </li>
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
