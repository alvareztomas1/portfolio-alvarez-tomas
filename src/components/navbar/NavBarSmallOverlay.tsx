import { AnimatePresence, motion } from 'motion/react';
import { FaBars, FaTimes } from 'react-icons/fa';

import { NavBarPersonalButtons } from '@components/navbar/NavBarPersonalButtons';
import { NavBarSectionsButtons } from '@components/navbar/NavBarSectionsButtons';
import { NavBarThemeButtons } from '@components/navbar/NavbarThemeButtons';

import type { Languages } from '@/constants/languages.constant';
import { useNavbarAnimations } from '@/hooks/useNavBarAnimations';
import type { NavBarSectionButtons } from '@/types/navbar.types';
import type { Theme } from '@/types/theme.types';

type NavbarSmallOverlayProps = {
  isOpen: boolean;
  theme: Theme;
  currentLanguage: Languages;
  darkThemeTitle: string;
  lightThemeTitle: string;
  languagesButtonTitle: string;
  gitHubTitle: string;
  linkedInTitle: string;
  CVbuttonText: string;
  CVbuttonTitle: string;
  navbarButtonSections: NavBarSectionButtons;
  handleBurgerButtonClick: () => void;
  toggleTheme: () => void;
  changeLanguage: () => void;
};

export const NavBarSmallOverlay = ({
  isOpen,
  theme,
  currentLanguage,
  darkThemeTitle,
  lightThemeTitle,
  languagesButtonTitle,
  gitHubTitle,
  linkedInTitle,
  CVbuttonText,
  CVbuttonTitle,
  navbarButtonSections,
  handleBurgerButtonClick,
  toggleTheme,
  changeLanguage,
}: NavbarSmallOverlayProps) => {
  const {
    mobileOverlayAnimation,
    burgerOpenAnimation,
    burgerCloseAnimation,
    buttonTapAnimation,
  } = useNavbarAnimations();

  return (
    <section
      className={`flex flex-1/3 items-center ${isOpen ? '' : 'w-full'} justify-between lg:hidden`}
    >
      <div className="flex items-center justify-center gap-3 lg:hidden">
        {!isOpen && (
          <NavBarThemeButtons
            changeLanguage={changeLanguage}
            currentLanguage={currentLanguage}
            languagesButtonTitle={languagesButtonTitle}
            theme={theme}
            toggleTheme={toggleTheme}
            darkThemeTitle={darkThemeTitle}
            lightThemeTitle={lightThemeTitle}
          />
        )}
      </div>

      <div className="flex flex-1/3 lg:hidden">
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="mobile-overlay"
              {...mobileOverlayAnimation}
              className="flex w-full flex-1 flex-col gap-2 overflow-hidden"
            >
              <NavBarSectionsButtons navBarSections={navbarButtonSections} />
              <NavBarPersonalButtons
                gitHubTitle={gitHubTitle}
                linkedInTitle={linkedInTitle}
                CVbuttonText={CVbuttonText}
                CVbuttonTitle={CVbuttonTitle}
                currentLanguage={currentLanguage}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.button
        onClick={handleBurgerButtonClick}
        {...buttonTapAnimation}
        className="text-primary hover:text-secondary cursor-pointer text-2xl focus:outline-none"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.div key="close" {...burgerCloseAnimation}>
              <FaTimes className="text-xl sm:text-2xl md:text-3xl" />
            </motion.div>
          ) : (
            <motion.div key="open" {...burgerOpenAnimation}>
              <FaBars className="text-xl sm:text-2xl md:text-3xl" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </section>
  );
};
