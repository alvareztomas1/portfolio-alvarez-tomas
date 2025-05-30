import {
  SiDocker,
  SiGit,
  SiNestjs,
  SiNodedotjs,
  SiReact,
  SiStellar,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

import { AnimatedLogos } from '@components/common/AnimatedLogos';
import { LinkWrapper } from '@components/common/LinkWrapper';
import { ScrollArrow } from '@components/common/ScrollArrow';
import { HeroDescription } from '@components/home/Hero/HeroDescription';
import { HeroTitle } from '@components/home/Hero/HeroTitle';

import { Contact } from '@/constants/contact.constant';

type HeroProps = {
  subtitle: string;
  description: string;
  contact: string;
  redirectTo: string;
  redirectTarget: string;
};
export const Hero = ({
  subtitle,
  description,
  contact,
  redirectTo,
  redirectTarget,
}: HeroProps) => {
  const techs = [
    { icon: SiReact, name: 'React', color: '#61DAFB' },
    { icon: SiTailwindcss, name: 'Tailwind', color: '#38BDF8' },
    { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
    { icon: SiNodedotjs, name: 'Node.js', color: '#3C873A' },
    { icon: SiNestjs, name: 'NestJS', color: '#E0234E' },
    { icon: SiDocker, name: 'Docker', color: '#0db7ed' },
    { icon: SiGit, name: 'Git', color: '#F05032' },
    { icon: SiStellar, name: 'Stellar', color: '#2E4053' },
  ];

  return (
    <>
      <section className="flex min-h-screen flex-col items-center justify-center gap-8 px-6 text-center md:px-0">
        <HeroTitle subtitle={subtitle} />
        <AnimatedLogos logos={techs} />
        <HeroDescription i18nKey={description} />
        <LinkWrapper
          href={`mailto:${Contact.EMAIL}`}
          className="bg-secondary font-body rounded-full px-3 py-2 text-base font-bold text-white saturate-150 transition-all hover:scale-110 hover:brightness-110 md:text-base lg:px-4 lg:py-2 lg:text-lg"
        >
          {contact}
        </LinkWrapper>
        <ScrollArrow section={redirectTo} targetId={redirectTarget} />
      </section>
    </>
  );
};
