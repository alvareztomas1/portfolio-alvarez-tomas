import { Trans } from 'react-i18next';

import { Card } from '@components/common/Card';
import { Span } from '@components/common/Span';
import { GitHubLinks } from '@components/home/Projects/GitHubLinks';

import type { Project } from '@/types/home/projects.types';

type ProjectProps = {
  title: string;
  inProgress: boolean;
  inProgressText: string;
  repositoryText: string;
  description: string;
  image: Project['image'];
  technologies: string[];
  github: Project['github'];
};

export const ProjectCard = ({
  title,
  description,
  image,
  inProgress,
  inProgressText,
  repositoryText,
  technologies,
  github,
}: ProjectProps) => {
  return (
    <Card
      hoverEffect={false}
      className="mx-auto flex w-7/8 flex-col justify-between rounded-2xl px-3 py-4 shadow-md transition-colors hover:shadow-sm hover:brightness-105 md:h-[700px] md:w-full md:max-w-[350px]"
    >
      <div className="flex w-full flex-col items-center justify-between gap-4 lg:flex-row">
        <h5 className="text-primary font-title text-lg tracking-tight uppercase md:text-xl">
          {title}
        </h5>

        {inProgress && (
          <Span
            text={inProgressText}
            bgColor="bg-secondary/80"
            textColor="text-white font-light md:text-xs text-nowrap"
          />
        )}
      </div>

      <p className="text-body text-card-text/60 text-justify text-sm md:text-base">
        <Trans
          i18nKey={description}
          components={Array(description.match(/<[0-9]+>/g)?.length).fill(
            <span className="font-title text-secondary/80" />,
          )}
        />
      </p>

      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
        <img
          className="absolute h-full w-full object-cover"
          src={image.href}
          alt={image.alt}
        />
      </div>

      <div className="flex w-full flex-wrap items-center justify-center gap-2 text-xs md:text-sm">
        {technologies.map((tech, index) => (
          <Span
            key={index}
            text={tech}
            bgColor="bg-card-span"
            textColor="text-card-span-text/80 md:text-sm "
          />
        ))}
      </div>

      <div className="flex items-center justify-center gap-5">
        <GitHubLinks
          repositoryText={repositoryText}
          inProgressText={inProgressText}
          github={github}
        />
      </div>
    </Card>
  );
};
