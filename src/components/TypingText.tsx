'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface TypingTextProps {
  text: string;
  className?: string;
  wpm?: number;
}

export default function TypingText({ text, className = '', wpm = 75 }: TypingTextProps) {
  const [displayed, setDisplayed] = useState('');

  // Calculate typing speed (in ms per character)
  const charsPerMinute = wpm * 5;
  const msPerChar = 60000 / charsPerMinute;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(interval);
    }, msPerChar);

    return () => clearInterval(interval);
  }, [text, msPerChar]);

  return (
    <motion.p
      className={`${className}`}
      style={{ whiteSpace: 'pre-wrap' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      viewport={{ once: true }}
    >
      {displayed}
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 1, 0] }}
        transition={{
          repeat: Infinity,
          duration: 0.8,
          repeatDelay: 0.5,
        }}
        viewport={{ once: true }}
        className="font-thin select-none"
      >
        |
      </motion.span>
    </motion.p>
  );
}
