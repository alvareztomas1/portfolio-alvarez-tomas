import { BsSunFill } from 'react-icons/bs';
import { IoMdMoon } from 'react-icons/io';

import { Icon } from '@components/common/Icon';

import { Languages } from '@/constants/languages.constant';
import type { Theme } from '@/types/theme.types';

type NavBarThemeButtonsProps = {
  changeLanguage: () => void;
  languagesButtonTitle: string;
  currentLanguage: string;
  toggleTheme: () => void;
  theme: Theme;
  darkThemeTitle: string;
  lightThemeTitle: string;
};
export const NavBarThemeButtons = ({
  changeLanguage,
  currentLanguage,
  languagesButtonTitle,
  theme,
  toggleTheme,
  darkThemeTitle,
  lightThemeTitle,
}: NavBarThemeButtonsProps) => {
  return (
    <section className="flex flex-1/3 items-center justify-center gap-3">
      <Icon
        onClick={changeLanguage}
        title={languagesButtonTitle}
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
        title={theme === 'light' ? darkThemeTitle : lightThemeTitle}
        icon={
          theme === 'light' ? (
            <IoMdMoon className="text-xl sm:text-2xl md:text-3xl" />
          ) : (
            <BsSunFill className="text-xl sm:text-2xl md:text-3xl" />
          )
        }
      />
    </section>
  );
};
