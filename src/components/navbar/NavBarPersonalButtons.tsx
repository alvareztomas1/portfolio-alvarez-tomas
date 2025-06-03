import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { Icon } from '@components/common/Icon';
import { LinkWrapper } from '@components/common/LinkWrapper';

import {
  SocialMedia,
  type SocialMediaKey,
} from '@/constants/social-media.constant';

type NavBarPersonalButtonsProps = {
  gitHubTitle: string;
  linkedInTitle: string;
};
export const NavBarPersonalButtons = ({
  gitHubTitle,
  linkedInTitle,
}: NavBarPersonalButtonsProps) => {
  const socialMedia = Object.keys(SocialMedia);
  return (
    <section className="flex flex-1/3 items-center justify-center gap-5">
      {socialMedia.map((key) => (
        <LinkWrapper
          key={key}
          href={SocialMedia[key as SocialMediaKey]}
          className="text-primary hover:text-secondary transition-all"
          target="_blank"
          title={key}
        >
          {(key as SocialMediaKey) === 'LinkedIn' ? (
            <Icon
              description={key}
              title={linkedInTitle}
              icon={<FaLinkedin className="text-xl sm:text-2xl md:text-3xl" />}
            />
          ) : (
            <Icon
              description={key}
              title={gitHubTitle}
              icon={<FaGithub className="text-xl sm:text-2xl md:text-3xl" />}
            />
          )}
        </LinkWrapper>
      ))}
    </section>
  );
};
