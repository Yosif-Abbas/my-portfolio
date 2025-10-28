'use client';

import { motion } from 'motion/react';

import Link from 'next/link';
import { FaLinkedinIn } from 'react-icons/fa';
import { ImFacebook } from 'react-icons/im';
import { TbBrandGithubFilled } from 'react-icons/tb';

const LinkMotion = motion(Link);

export default function SocialLinks() {
  return (
    <div className="flex gap-x-6 justify-around min-w-42 w-fit md:w-full overflow-hidden">
      <LinkMotion
        href="https://github.com/Yosif-Abbas"
        target="_blank"
        className="hover:text-[#000000] transition-colors duration-175 text-2xl md:text-3xl"
        initial={{ translateX: -70 }}
        whileInView={{ translateX: 0 }}
        transition={{ type: 'spring', stiffness: 60, damping: 12, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <TbBrandGithubFilled />
      </LinkMotion>
      <LinkMotion
        href="https://www.facebook.com/youssef.abbas.14473/"
        target="_blank"
        className="hover:text-[#4267B2] transition-colors duration-175 text-2xl md:text-3xl"
        initial={{ translateX: -210 }}
        whileInView={{ translateX: 0 }}
        transition={{ type: 'spring', stiffness: 60, damping: 12, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <ImFacebook />
      </LinkMotion>
      <LinkMotion
        href="https://www.linkedin.com/in/yosif-abbas-895468250/"
        target="_blank"
        className="hover:text-[#0077b5] transition-colors duration-175 text-2xl md:text-3xl"
        initial={{ translateX: -355 }}
        whileInView={{ translateX: 0 }}
        transition={{ type: 'spring', stiffness: 60, damping: 12 }}
        viewport={{ once: true }}
      >
        <FaLinkedinIn />
      </LinkMotion>
    </div>
  );
}
