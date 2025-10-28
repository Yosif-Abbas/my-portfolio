'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { useState } from 'react';

const MotionImage = motion(Image);

export default function Portrait() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - (rect.left + rect.width / 2),
      y: e.clientY - (rect.top + rect.height / 2),
    });
  }

  return (
    <motion.div
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.75 }}
      className="relative w-[150px] h-[150px] md:w-[200px] md:h-[200px] overflow-hidden rounded-xl md:self-center"
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
    >
      <MotionImage
        src="/image.png"
        width={145}
        height={145}
        className="aspect-square md:w-[190px] md:h-[190px]  object-cover rounded-md z-5 absolute top-1/2 left-1/2 -translate-1/2 [mask-image:radial-gradient(circle,white_70%,transparent_100%)]"
        alt="Youssef"
        custom={pos}
        animate={{
          rotateY: pos.y / -8,
          rotateX: pos.x / 8,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      />
      <Image
        src="/image.png"
        fill
        className="aspect-square object-cover rounded-md border-1 blur-xs"
        alt="Youssef"
      />
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0px_0px_2px_4px_rgba(255,255,255,0.1)] z-6"></div>
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0px_0px_4px_6px_rgba(172,172,172,0.2)] z-6"></div>
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0px_0px_6px_8px_rgba(0,0,0,0.3)] z-6"></div>
    </motion.div>
  );
}
