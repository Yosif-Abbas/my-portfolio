import { Project } from '@/types/project';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ProjectImage({ project }: { project: Project }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isExpanded) {
        setIsExpanded(false);
      }
    };

    if (isExpanded) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isExpanded]);

  return (
    <div className="relative w-full md:w-fit">
      <Image
        width={isExpanded ? 1920 : 300}
        height={isExpanded ? 898 : 240}
        quality={100}
        className={`${imageLoaded ? '' : 'blur-xs'} w-full shadow-md cursor-pointer  ${
          isExpanded
            ? 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[95vw] h-auto max-h-[90vh] object-contain'
            : 'relative'
        }`}
        src={project.image}
        alt={`${project.slug} home page screenshot`}
        onLoad={() => setImageLoaded(true)}
        onClick={() => setIsExpanded(!isExpanded)}
        sizes={isExpanded ? '95vw' : '(max-width: 768px) 100vw, 300px'}
      />
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black/80 z-40 transition-opacity duration-500"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </div>
  );
}
