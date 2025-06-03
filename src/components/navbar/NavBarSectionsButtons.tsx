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
    <section className="flex flex-1/3 justify-center gap-5">
      {sections.map((section) => (
        <a
          key={section}
          title={navBarSections[section as keyof typeof navBarSections].title}
          className="text-primary hover:text-secondary font-body cursor-pointer font-bold uppercase transition-all"
          href={`#${section}`}
        >
          {navBarSections[section as keyof typeof navBarSections].text}
        </a>
      ))}
    </section>
  );
};
