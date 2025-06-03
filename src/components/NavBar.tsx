import { useTranslation } from 'react-i18next';
import { BsSunFill } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMdMoon } from 'react-icons/io';

import { Icon } from '@components/common/Icon';
import { LinkWrapper } from '@components/common/LinkWrapper';

import { Languages } from '@/constants/languages.constant';
import {
  SocialMedia,
  type SocialMediaKey,
} from '@/constants/social-media.constant';
import { useLanguage } from '@/hooks/useLanguage';
import type { Theme } from '@/types/theme.types';

type NavbarProps = {
  theme: Theme;
  toggleTheme: () => void;
};

export const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const { currentLanguage, changeLanguage } = useLanguage();
  const { t } = useTranslation('navbar');
  const socialMedia = Object.keys(SocialMedia);

  return (
    <nav className="bg-background/10 fixed top-0 right-0 left-0 z-50 flex w-full items-center justify-between px-6 py-2 text-center backdrop-blur-sm">
      <div className="w-1/3" />

      <section className="flex w-1/3 items-center justify-center gap-5">
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
                title={t('linkedInTitle')}
                icon={
                  <FaLinkedin className="text-xl sm:text-2xl md:text-3xl" />
                }
              />
            ) : (
              <Icon
                description={key}
                title={t('gitHubTitle')}
                icon={<FaGithub className="text-xl sm:text-2xl md:text-3xl" />}
              />
            )}
          </LinkWrapper>
        ))}
      </section>

      <section className="flex w-1/3 items-center justify-end gap-3">
        <Icon
          onClick={() => changeLanguage(currentLanguage === 'en' ? 'es' : 'en')}
          title={t('languages')}
          icon={
            <p className="font-body flex items-center justify-center text-sm font-bold sm:text-base">
              {currentLanguage === 'en'
                ? Languages.en.toUpperCase()
                : Languages.es.toUpperCase()}
            </p>
          }
        />

        <Icon
          onClick={toggleTheme}
          title={theme === 'light' ? t('darkTheme') : t('lightTheme')}
          icon={
            theme === 'light' ? (
              <IoMdMoon className="text-xl sm:text-2xl md:text-3xl" />
            ) : (
              <BsSunFill className="text-xl sm:text-2xl md:text-3xl" />
            )
          }
        />
      </section>
    </nav>
  );
};
