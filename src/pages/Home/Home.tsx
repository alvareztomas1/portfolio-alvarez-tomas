import { useTranslation } from 'react-i18next';

import { Hero } from '@components/home/Hero/Hero';

import type { HeroSection } from '@/types/home/hero.types';

function Home() {
  const { t } = useTranslation('home');
  const heroSection = t('titleSection', { returnObjects: true }) as HeroSection;

  return (
    <>
      <Hero
        contact={heroSection.contact}
        subtitle={heroSection.role}
        description={heroSection.description}
      />
      <Hero />
    </>
  );
}

export default Home;
