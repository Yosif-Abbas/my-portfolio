import { motion, useAnimationControls } from 'motion/react';
import { FaArrowRightLong } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types/project';

export default function ProjectTitle({ project }: { project: Project }) {
  const arrowControls = useAnimationControls();

  return (
    <motion.h1
      className={`text-xl tracking-wide uppercase flex items-center gap-x-2 w-fit`}
      title={project.slug}
      initial={project.link ? { translateX: -30 } : {}}
      onHoverStart={() => arrowControls.start({ translateX: 0 })}
      onHoverEnd={() => arrowControls.start({ translateX: -30 })}
      animate={project.link ? arrowControls : {}}
      viewport={{ once: true }}
    >
      {project.link ? (
        <Link
          href={project.link}
          target="_blank"
          className="flex gap-x-2 items-center w-fit underline hover:no-underline"
        >
          <FaArrowRightLong />
          {project.name}
        </Link>
      ) : (
        <>{project.name}</>
      )}
      {project.logo ? <Image width={20} height={20} src={project.logo} alt={project.name} /> : ''}
    </motion.h1>
  );
}
