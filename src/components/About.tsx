'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="p-2 flex flex-col gap-y-4">
      <motion.h2
        className="text-xl font-semibold uppercase tracking-wide md:hidden"
        initial={{ opacity: 0, translateX: -25 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        viewport={{ once: true }}
      >
        About
      </motion.h2>
      <motion.p
        className="relative pl-4 before:desc-before text-sm leading-relaxed tracking-wide md:text-base"
        initial={{ opacity: 0, translateY: 25 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        I&apos;m a full-stack developer who focuses on building clean interfaces and solid back-end
        architecture. I care about quality, clarity, and continuous learning, and I&apos;m currently
        building projects to grow my experience and contribute to impactful work.
      </motion.p>
    </div>
  );
}
