import { NavBarPersonalButtons } from '@components/navbar/NavBarPersonalButtons';
import { NavBarSectionsButtons } from '@components/navbar/NavBarSectionsButtons';
import { NavBarThemeButtons } from '@components/navbar/NavbarThemeButtons';

import type { Languages } from '@/constants/languages.constant';
import type { NavBarSectionButtons } from '@/types/navbar.types';
import type { Theme } from '@/types/theme.types';

type NavBarBigOverlayProps = {
  theme: Theme;
  toggleTheme: () => void;
  currentLanguage: Languages;
  changeLanguage: () => void;
  navbarButtonSections: NavBarSectionButtons;
  darkThemeTitle: string;
  lightThemeTitle: string;
  languagesButtonTitle: string;
  gitHubTitle: string;
  linkedInTitle: string;
  CVbuttonText: string;
  CVbuttonTitle: string;
};
export const NavBarBigOverlay = ({
  theme,
  toggleTheme,
  currentLanguage,
  changeLanguage,
  navbarButtonSections,
  darkThemeTitle,
  lightThemeTitle,
  languagesButtonTitle,
  gitHubTitle,
  linkedInTitle,
  CVbuttonText,
  CVbuttonTitle,
}: NavBarBigOverlayProps) => {
  return (
    <section className="hidden w-full items-center justify-between lg:flex">
      <NavBarSectionsButtons navBarSections={navbarButtonSections} />

      <NavBarPersonalButtons
        gitHubTitle={gitHubTitle}
        linkedInTitle={linkedInTitle}
        CVbuttonText={CVbuttonText}
        CVbuttonTitle={CVbuttonTitle}
        currentLanguage={currentLanguage}
      />

      <div className="flex flex-1/3 items-center justify-end gap-3">
        <NavBarThemeButtons
          changeLanguage={changeLanguage}
          currentLanguage={currentLanguage}
          languagesButtonTitle={languagesButtonTitle}
          theme={theme}
          toggleTheme={toggleTheme}
          darkThemeTitle={darkThemeTitle}
          lightThemeTitle={lightThemeTitle}
        />
      </div>
    </section>
  );
};
