import { useTranslation } from 'react-i18next';

import { NavBarPersonalButtons } from '@components/navbar/NavBarPersonalButtons';
import { NavBarSectionsButtons } from '@components/navbar/NavBarSectionsButtons';
import { NavBarThemeButtons } from '@components/navbar/NavbarThemeButtons';

import { useLanguage } from '@/hooks/useLanguage';
import type { NavBarSectionButtons } from '@/types/navbar.types';
import type { Theme } from '@/types/theme.types';

type NavbarProps = {
  theme: Theme;
  toggleTheme: () => void;
};

export const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const { currentLanguage, changeLanguage } = useLanguage();
  const { t } = useTranslation('navbar');
  const navbarButtonSections = t('sections', {
    returnObjects: true,
  }) as NavBarSectionButtons;

  return (
    <nav className="bg-background/10 fixed top-0 right-0 left-0 z-50 flex w-full items-center px-6 py-2 text-center backdrop-blur-sm">
      <NavBarSectionsButtons navBarSections={navbarButtonSections} />

      <NavBarPersonalButtons
        gitHubTitle={t('gitHubTitle')}
        linkedInTitle={t('linkedInTitle')}
        CVbuttonText={t('CVbuttonText')}
        CVbuttonTitle={t('CVbuttonTitle')}
        currentLanguage={currentLanguage}
      />

      <NavBarThemeButtons
        changeLanguage={() =>
          changeLanguage(currentLanguage === 'en' ? 'es' : 'en')
        }
        currentLanguage={currentLanguage}
        languagesButtonTitle={t('languages')}
        theme={theme}
        toggleTheme={toggleTheme}
        darkThemeTitle={t('darkTheme')}
        lightThemeTitle={t('lightTheme')}
      />
    </nav>
  );
};
