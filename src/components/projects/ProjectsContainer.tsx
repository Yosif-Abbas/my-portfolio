'use client';

import { Project as ProjectType } from '@/types/project';
import Project from './Project';

interface ProjectsListProps {
  projects: ProjectType[];
}

export default function ProjectsList({ projects }: ProjectsListProps) {
  return (
    <div className="container">
      <h2 className="container-h2">Projects</h2>
      <div className="flex flex-col gap-y-4 divide-y-1 divide-[#edd4e61e] pt-4">
        {projects
          ? projects.map((project: ProjectType) => <Project key={project.slug} project={project} />)
          : ''}
      </div>
    </div>
  );
}
