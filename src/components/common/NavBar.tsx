import { useTranslation } from 'react-i18next';
import { BsSunFill } from 'react-icons/bs';
import { IoMdMoon } from 'react-icons/io';

import { Icon } from '@components/common/Icon';

import { useLanguage } from '@/hooks/useLanguage';
import type { Theme } from '@/types/theme.types';

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const { currentLanguage, changeLanguage } = useLanguage();
  const { t } = useTranslation('navbar');

  return (
    <nav className="bg-background flex w-full items-center justify-between px-6 py-4 text-center shadow-sm">
      <div className="w-1/3" />

      <section className="flex w-1/3 items-center justify-end gap-3">
        <Icon
          onClick={() => changeLanguage(currentLanguage === 'en' ? 'es' : 'en')}
          title={t('languages')}
          icon={
            currentLanguage === 'en' ? (
              <p className="font-body flex items-center justify-center text-lg font-bold">
                EN
              </p>
            ) : (
              <p className="font-body flex items-center justify-center text-lg font-bold">
                ES
              </p>
            )
          }
        />

        <Icon
          onClick={toggleTheme}
          title={theme === 'light' ? t('darkTheme') : t('lightTheme')}
          icon={
            theme === 'light' ? <IoMdMoon size={28} /> : <BsSunFill size={28} />
          }
        />
      </section>
    </nav>
  );
};
