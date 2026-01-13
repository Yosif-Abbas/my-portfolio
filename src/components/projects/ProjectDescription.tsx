import { Project } from '@/types/project';

export default function ProjectDescription({ project }: { project: Project }) {
  const projectDescriptions = project.description.split('\n');

  return (
    <div className="flex-1">
      {projectDescriptions.map((description, i) => (
        <p
          className="relative pl-3 before:desc-before leading-relaxed text-sm md:text-base xl:text-lg"
          key={`${project.slug}-${i}`}
        >
          {description}
        </p>
      ))}
    </div>
  );
}
