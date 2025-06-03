import { FaGithub, FaLinkedin, FaRegUserCircle } from 'react-icons/fa';

import { Icon } from '@components/common/Icon';
import { LinkWrapper } from '@components/common/LinkWrapper';

import { CVLink } from '@/constants/cv.constant';
import type { Languages } from '@/constants/languages.constant';
import {
  SocialMedia,
  type SocialMediaKey,
} from '@/constants/social-media.constant';

type NavBarPersonalButtonsProps = {
  gitHubTitle: string;
  linkedInTitle: string;
  CVbuttonText: string;
  CVbuttonTitle: string;
  currentLanguage: Languages;
};
export const NavBarPersonalButtons = ({
  gitHubTitle,
  linkedInTitle,
  CVbuttonText,
  CVbuttonTitle,
  currentLanguage,
}: NavBarPersonalButtonsProps) => {
  const socialMedia = Object.keys(SocialMedia);
  const resumeLink = currentLanguage === 'en' ? CVLink.english : CVLink.spanish;

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
          <Icon
            description={key}
            title={key === 'LinkedIn' ? linkedInTitle : gitHubTitle}
            icon={
              key === 'LinkedIn' ? (
                <FaLinkedin className="text-xl sm:text-2xl md:text-3xl" />
              ) : (
                <FaGithub className="text-xl sm:text-2xl md:text-3xl" />
              )
            }
          />
        </LinkWrapper>
      ))}

      <LinkWrapper
        target="_blank"
        href={resumeLink}
        className="text-primary hover:text-secondary transition-all"
        title={CVbuttonTitle}
      >
        <Icon
          description={CVbuttonText}
          icon={<FaRegUserCircle className="text-xl sm:text-2xl md:text-3xl" />}
        />
      </LinkWrapper>
    </section>
  );
};
