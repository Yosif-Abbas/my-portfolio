'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="py-2 px-4 flex flex-col">
      <motion.h2
        className="text-xl font-semibold uppercase tracking-wide md:hidden"
        initial={{ opacity: 0, translateX: -25 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        viewport={{ once: true }}
      >
        About
      </motion.h2>

      <motion.p
        className="about-p"
        initial={{ opacity: 0, translateY: 25 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Computer Science graduate (2025) and full-stack developer focused on building clean,
        responsive user interfaces and reliable back-end systems using modern web technologies.
      </motion.p>
      <motion.p
        className="about-p"
        initial={{ opacity: 0, translateY: 25 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Currently building production-ready projects with React, Next.js, and Node.js, with emphasis
        on code quality, scalability, and maintainability.
      </motion.p>
      <motion.p
        className="about-p"
        initial={{ opacity: 0, translateY: 25 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Actively seeking junior or internship opportunities in frontend or full-stack development.
      </motion.p>
      {/* <div>
        <h4 className="text-xl font-medium">Skills</h4>
        <ul>
          <li className="list-disc">HTML5</li>
        </ul>
      </div> */}
    </div>
  );
}
