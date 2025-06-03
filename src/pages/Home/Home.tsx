import { useTranslation } from 'react-i18next';

import { Contact } from '@components/home/Contact/Contact';
import { Experience } from '@components/home/Experience/Experience';
import { Hero } from '@components/home/Hero/Hero';
import { Projects } from '@components/home/Projects/Projects';

import type { ContactSection } from '@/types/home/contact.types';
import type { ExperienceSection } from '@/types/home/experience.types';
import type { HeroSection } from '@/types/home/hero.types';
import type { ProjectsSection } from '@/types/home/projects.types';

function Home() {
  const { t } = useTranslation('home');
  const heroSection = t('titleSection', { returnObjects: true }) as HeroSection;
  const experienceSection = t('experienceSection', {
    returnObjects: true,
  }) as ExperienceSection;
  const projectsSection = t('projectsSection', {
    returnObjects: true,
  }) as ProjectsSection;
  const contactSection = t('contactSection', {
    returnObjects: true,
  }) as ContactSection;

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
      <Experience {...experienceSection} />
      <Projects {...projectsSection} />
      <Contact {...contactSection} />
    </>
  );
}

export default Home;
