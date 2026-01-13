import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types/project';

export default function ProjectTitle({ project }: { project: Project }) {
  return (
    <h1
      className={`text-xl  tracking-wide uppercase flex items-center gap-x-2 w-fit`}
      title={project.slug}
    >
      {project.demo ? (
        <Link
          href={project.demo}
          target="_blank"
          className="flex gap-x-2 items-center w-fit underline hover:no-underline"
        >
          {/* <FaArrowRightLong /> */}
          {project.title}
        </Link>
      ) : (
        <>{project.title}</>
      )}
      {project.logo ? <Image width={20} height={20} src={project.logo} alt={project.title} /> : ''}
      <p className="text-[#eeeeee80]">{project.essence ? '(' + project.essence + ')' : ''}</p>
    </h1>
  );
}
