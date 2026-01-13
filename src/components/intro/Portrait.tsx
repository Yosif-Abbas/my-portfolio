'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Portrait() {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div
      className={`relative w-[200px] h-[200px] md:w-[250px] md:h-[250px] overflow-hidden rounded-xl ${
        imageLoaded ? '' : 'blur-xs'
      }`}
    >
      <Image
        src="/image.png"
        width={145}
        height={145}
        sizes="3024"
        quality={100}
        priority
        className="aspect-square w-[190px] h-[190px] md:w-[238px] md:h-[238px] object-cover rounded-md z-2 absolute top-1/2 left-1/2 -translate-1/2"
        alt="Youssef"
        onLoad={() => setImageLoaded(true)}
      />
      <Image
        src="/image.png"
        fill
        className="aspect-square object-cover rounded-md border-1 blur-xs"
        alt="Youssef"
      />
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0px_0px_2px_4px_rgba(255,255,255,0.1)] z-3"></div>
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0px_0px_4px_6px_rgba(172,172,172,0.2)] z-3"></div>
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0px_0px_6px_8px_rgba(0,0,0,0.3)] z-3"></div>
    </div>
  );
}
