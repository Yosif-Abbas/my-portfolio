'use client';
import { useState } from 'react';

export default function BackgroundEffectWrapper({ children }: { children: React.ReactNode }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    setPos({ x: e.clientX, y: e.clientY });
  }

  return (
    <div onMouseMove={handleMove} className="relative">
      <div
        className="fixed inset-0 -z-10 md:z-10 overflow-hidden pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.02) 10%)
          `,
          backgroundBlendMode: 'overlay',
          transition: 'background 0.1s linear',
        }}
      />
      {children}
    </div>
  );
}
