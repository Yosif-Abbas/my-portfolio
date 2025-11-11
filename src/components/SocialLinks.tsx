'use client';

import { motion } from 'motion/react';

import Link from 'next/link';
import { FaGoodreadsG, FaLinkedinIn, FaSpotify } from 'react-icons/fa';
import { ImFacebook } from 'react-icons/im';
import { TbBrandGithubFilled } from 'react-icons/tb';

export default function SocialLinks() {
  return (
    <motion.div
      className="flex gap-x-6 justify-around min-w-42 w-fit md:w-full overflow-hidden py-2"
      initial={{ opacity: 0, translateY: 25 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ type: 'spring', stiffness: 60, damping: 12, delay: 0.6 }}
      viewport={{ once: true }}
    >
      <Link
        href="https://github.com/Yosif-Abbas"
        target="_blank"
        className="hover:text-[#000000] transition-colors duration-175 text-2xl md:text-3xl"
      >
        <TbBrandGithubFilled />
      </Link>
      <Link
        href="https://www.facebook.com/youssef.abbas.14473/"
        target="_blank"
        className="hover:text-[#4267B2] text-2xl md:text-3xl transition-colors duration-175"
      >
        <ImFacebook />
      </Link>
      <Link
        href="https://www.linkedin.com/in/yosif-abbas-895468250/"
        target="_blank"
        className="hover:text-[#0077b5] transition-colors duration-175 text-2xl md:text-3xl"
      >
        <FaLinkedinIn />
      </Link>
      <Link
        href="https://www.goodreads.com/user/show/191736337-yosif"
        target="_blank"
        className="hover:text-[#181818] transition-colors duration-175 text-2xl md:text-3xl"
      >
        <FaGoodreadsG />
      </Link>
      <Link
        href="https://open.spotify.com/user/315mcxdnyok3cwfc7i3v46mtailu?si=d06d9671d95e4d9a"
        target="_blank"
        className="hover:text-[#1DB954] transition-colors duration-175 text-2xl md:text-3xl"
      >
        <FaSpotify />
      </Link>
    </motion.div>
  );
}

// https://www.goodreads.com/user/show/191736337-yosif

/*
initial={{ translateX: -70 }}
whileInView={{ translateX: 0 }}
transition={{ type: 'spring', stiffness: 60, damping: 12, delay: 0.6 }}
viewport={{ once: true }}

initial={{ translateX: -210 }}
whileInView={{ translateX: 0 }}
transition={{ type: 'spring', stiffness: 60, damping: 12, delay: 0.2 }}
viewport={{ once: true }}

initial={{ translateX: -355 }}
whileInView={{ translateX: 0 }}
transition={{ type: 'spring', stiffness: 60, damping: 12 }}
viewport={{ once: true }}
*/
