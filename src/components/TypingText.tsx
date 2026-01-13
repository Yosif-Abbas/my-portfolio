'use client';
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
    <p className={`${className}`} style={{ whiteSpace: 'pre-wrap' }}>
      {displayed}
      <span className="font-thin select-none">|</span>
    </p>
  );
}
