'use client';

import type { Project } from '@/types/project';
import { TechTag } from './TechTag';
import Link from 'next/link';
import { motion } from 'motion/react';

import ProjectTitle from './ProjectTitle';

function Project({ project, index }: { project: Project; index: number }) {
  const projectDescriptions = project.description.split('\n');

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 25 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.4, delay: index < 5 ? 0.1 * index : 0.1 * 5 }}
      viewport={{ once: true }}
      className="card w-full"
    >
      <ProjectTitle project={project} />
      {/* <p className="relative pl-3 before:desc-before leading-relaxed text-sm">
        {project.description}
      </p> */}
      {/* <TypingText
        text={project.description}
        className="relative pl-3 before:desc-before leading-relaxed text-sm md:text-base lg:text-lg"
        wpm={1000}
      /> */}

      {/* <p className="relative pl-3 before:desc-before leading-relaxed text-sm md:text-base lg:text-lg">
        {project.description}
      </p> */}

      {projectDescriptions.map((description, i) => (
        <p
          className="relative pl-3 before:desc-before leading-relaxed text-sm md:text-base lg:text-lg"
          key={`${project.slug}-${i}`}
        >
          {description}
        </p>
      ))}

      <div className="flex gap-1 flex-wrap w-full">
        {project.tech.map((el) => (
          <TechTag key={`${project.slug}_${el}`} tag={el} />
        ))}
      </div>

      {project.githubLink && (
        <Link
          href={project.githubLink}
          target="_blank"
          className="text-xs italic underline md:text-sm hover:no-underline"
        >
          Github Repository
        </Link>
      )}
    </motion.div>
  );
}
export default Project;
