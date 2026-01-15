import ProjectsList from '@/components/projects/ProjectsContainer';
import { getProjects } from '@/lib/actions/projects';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
};

export default async function Projects() {
  const projects = await getProjects();

  return (
    <div className="page-container">
      <ProjectsList projects={projects} />
    </div>
  );
}
