import { Sections } from '@/constants/section.constant';
import type { NavBarSectionButtons } from '@/types/navbar.types';

type NavBarSectionButtonsProps = {
  navBarSections: NavBarSectionButtons;
};
export const NavBarSectionsButtons = ({
  navBarSections,
}: NavBarSectionButtonsProps) => {
  const sections = Object.values(Sections);

  return (
    <ul className="flex lg:flex-1/3 lg:justify-start lg:gap-5">
      {sections.map((section) => (
        <li className="flex flex-1/3 justify-center lg:flex-none">
          <a
            href={`#${section}`}
            key={section}
            title={navBarSections[section as keyof typeof navBarSections].title}
            className="text-primary hover:text-secondary font-body cursor-pointer text-sm font-bold uppercase transition-all md:text-base"
          >
            {navBarSections[section as keyof typeof navBarSections].text}
          </a>
        </li>
      ))}
    </ul>
  );
};
