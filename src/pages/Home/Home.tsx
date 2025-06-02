import { useTranslation } from 'react-i18next';

import { Experience } from '@components/home/Experience/Experience';
import { Hero } from '@components/home/Hero/Hero';

import type { ExperienceSection } from '@/types/home/experience.types';
import type { HeroSection } from '@/types/home/hero.types';

function Home() {
  const { t } = useTranslation('home');
  const heroSection = t('titleSection', { returnObjects: true }) as HeroSection;
  const experienceSection = t('experienceSection', {
    returnObjects: true,
  }) as ExperienceSection;

  return (
    <>
      <Hero
        contact={heroSection.contact.title}
        buttonTitle={heroSection.contact.buttonTitle}
        subtitle={heroSection.role}
        description={heroSection.description}
        redirectTo={experienceSection.title}
        redirectTarget="experience"
        scrollArrowTitle={heroSection.scrollArrow.title}
      />
      <Experience
        title={experienceSection.title}
        jobs={experienceSection.jobs}
      />
    </>
  );
}

export default Home;
