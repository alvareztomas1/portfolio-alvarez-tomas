import { ProjectCard } from '@components/home/Projects/ProjectCard';

import type { Project } from '@/types/home/projects.types';

type ProjectsProps = {
  title: string;
  inProgressText: string;
  repositoryText: string;
  projects: Project[];
};
export const Projects = ({
  title,
  inProgressText,
  repositoryText,
  projects,
}: ProjectsProps) => {
  return (
    <section
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-3 lg:px-6"
    >
      <h2 className="font-title text-secondary text-2xl leading-tight font-bold md:text-3xl">
        {title}
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:px-0">
        <div className="order-1 lg:order-2">
          <ProjectCard
            inProgressText={inProgressText}
            repositoryText={repositoryText}
            {...projects[1]}
          />
        </div>

        <div className="order-2 lg:order-1">
          <ProjectCard
            inProgressText={inProgressText}
            repositoryText={repositoryText}
            {...projects[0]}
          />
        </div>

        <div className="order-3 lg:order-3">
          <ProjectCard
            inProgressText={inProgressText}
            repositoryText={repositoryText}
            {...projects[2]}
          />
        </div>
      </div>
    </section>
  );
};
