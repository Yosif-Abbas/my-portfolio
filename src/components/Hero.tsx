'use client';

import { motion } from 'motion/react';
import Portrait from './Portrait';

export default function Hero() {
  return (
    <div className="flex flex-col items-center gap-y-4 h-screen md:h-fit justify-center md:items-start  overflow-hidden">
      <Portrait />
      <motion.h1
        initial={{ translateY: 25, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1, transition: { duration: 0.25 } }}
        className="uppercase font-bold tracking-widest text-2xl md:self-center md:text-3xl"
      >
        Youssef Abbas
      </motion.h1>
      {/* <motion.p
        initial={{ translateY: 15, opacity: 0 }}
        animate={{
          translateY: 0,
          opacity: 1,
          transition: { duration: 0.25, delay: 0.2 },
        }}
        className="tracking-wide md:text-lg"
      >
        Full-stack Web Developer,{' '}
        <span className="text-xs md:text-base font-light">Graduated in 2025</span>.
      </motion.p> */}
    </div>
  );
}
