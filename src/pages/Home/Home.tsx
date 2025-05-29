import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation('home');
  return (
    <section className="mx-auto flex w-full flex-col p-8 text-center tracking-tight">
      <h1 className="font-title text-primary flex flex-col text-4xl md:text-6xl lg:text-7xl">
        TOMÁS ALVAREZ
        <span className="text-secondary">{t('titleSection.role')}</span>
      </h1>
    </section>
  );
}

export default Home;
