import { FaGithub } from 'react-icons/fa';
import { GiSandsOfTime } from 'react-icons/gi';

import { Icon } from '@components/common/Icon';
import { LinkWrapper } from '@components/common/LinkWrapper';

import type { MonoRepo, Project } from '@/types/home/projects.types';

type GitHubLinksProps = {
  github: Project['github'];
  inProgressText: string;
  repositoryText: string;
};
export const GitHubLinks = ({
  github,
  inProgressText,
  repositoryText,
}: GitHubLinksProps) => {
  if ('frontend' in github && 'backend' in github) {
    return (
      <>
        {github.backend?.href ? (
          <LinkWrapper
            target="_blank"
            href={github.backend.href}
            title={github.backend.title}
          >
            <Icon
              description="Backend"
              icon={<FaGithub className="text-xl sm:text-2xl md:text-3xl" />}
            />
          </LinkWrapper>
        ) : (
          <Icon
            hoverEffect={false}
            description="Backend"
            title={`Backend ${inProgressText.toLowerCase()}`}
            icon={<GiSandsOfTime className="text-xl sm:text-2xl md:text-3xl" />}
          />
        )}

        {github.frontend?.href ? (
          <LinkWrapper
            target="_blank"
            href={github.frontend.href}
            title={github.frontend.title}
          >
            <Icon
              description="Frontend"
              icon={<FaGithub className="text-xl sm:text-2xl md:text-3xl" />}
            />
          </LinkWrapper>
        ) : (
          <Icon
            hoverEffect={false}
            description="Frontend"
            title={`Frontend ${inProgressText.toLowerCase()}`}
            icon={<GiSandsOfTime className="text-xl sm:text-2xl md:text-3xl" />}
          />
        )}
      </>
    );
  }

  return (
    <LinkWrapper target="_blank" href={(github as MonoRepo).href}>
      <Icon
        title={(github as MonoRepo).title}
        description={repositoryText}
        icon={<FaGithub className="text-xl sm:text-2xl md:text-3xl" />}
      />
    </LinkWrapper>
  );
};
