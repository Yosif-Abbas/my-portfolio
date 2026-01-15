'use client';

import type { Project } from '@/types/project';
import { TechTag } from './TechTag';
import Link from 'next/link';

import ProjectTitle from './ProjectTitle';

import ImageContainer from '../ImageContainer';
import ProjectDescription from './ProjectDescription';

function Project({ project }: { project: Project }) {
  return (
    <div className="card w-full">
      <div className="flex flex-col md:flex-row items-start gap-2">
        <ImageContainer
          src={project.image}
          alt={`${project.slug} home page screenshot`}
          className="md:w-fit"
        />
        <div className="flex-1 flex flex-col gap-2">
          <ProjectTitle project={project} />

          <ProjectDescription project={project} />
          <div className="flex gap-1 flex-wrap w-full">
            {project.tech.map((el) => (
              <TechTag key={`${project.slug}_${el}`} tag={el} />
            ))}
          </div>

          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              className="text-xs italic underline font-light md:text-sm hover:no-underline"
            >
              Github Repository
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
export default Project;
