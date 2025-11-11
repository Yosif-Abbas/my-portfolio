'use client';

import Project from '@/components/Project';
import { Project as ProjectType } from '@/types/project';
import { projects } from '@/data/projects.json';
import { motion } from 'motion/react';

export default function Projects() {
  return (
    <div className="px-2 py-6 row-span-3">
      <motion.h2
        className="text-2xl uppercase tracking-wide font-semibold"
        initial={{ opacity: 0, translateX: -25 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ type: 'spring', stiffness: 60, damping: 12 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <div className="">
        {projects
          ? projects.map((project: ProjectType, index: number) => (
              <Project key={project.slug} project={project} index={index} />
            ))
          : ''}
      </div>
    </div>
  );
}
