import { NavBarBigOverlay } from '@components/navbar/NavBarBigOverlay';
import { NavBarSmallOverlay } from '@components/navbar/NavBarSmallOverlay';

import { useNavBar } from '@/hooks/useNavBar';
import type { NavBarSectionButtons } from '@/types/navbar.types';
import type { Theme } from '@/types/theme.types';

type NavbarProps = {
  theme: Theme;
  toggleTheme: () => void;
};

export const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const {
    currentLanguage,
    isOpen,
    t,
    handleChangeLanguage,
    handleBurgerButtonClick,
  } = useNavBar();
  const navbarButtonSections = t('sections', {
    returnObjects: true,
  }) as NavBarSectionButtons;

  return (
    <header className="bg-background/10 fixed top-0 right-0 left-0 z-50 w-full backdrop-blur-sm">
      <nav className="flex flex-row-reverse px-6 py-4 text-center lg:flex-row lg:items-center">
        <NavBarSmallOverlay
          handleBurgerButtonClick={handleBurgerButtonClick}
          isOpen={isOpen}
          theme={theme}
          currentLanguage={currentLanguage}
          darkThemeTitle={t('darkTheme')}
          lightThemeTitle={t('lightTheme')}
          languagesButtonTitle={t('languages')}
          gitHubTitle={t('gitHubTitle')}
          linkedInTitle={t('linkedInTitle')}
          CVbuttonText={t('CVbuttonText')}
          CVbuttonTitle={t('CVbuttonTitle')}
          navbarButtonSections={navbarButtonSections}
          toggleTheme={toggleTheme}
          changeLanguage={handleChangeLanguage}
        />

        <NavBarBigOverlay
          theme={theme}
          toggleTheme={toggleTheme}
          currentLanguage={currentLanguage}
          changeLanguage={handleChangeLanguage}
          navbarButtonSections={navbarButtonSections}
          darkThemeTitle={t('darkTheme')}
          lightThemeTitle={t('lightTheme')}
          languagesButtonTitle={t('languages')}
          gitHubTitle={t('gitHubTitle')}
          linkedInTitle={t('linkedInTitle')}
          CVbuttonText={t('CVbuttonText')}
          CVbuttonTitle={t('CVbuttonTitle')}
        />
      </nav>
    </header>
  );
};
