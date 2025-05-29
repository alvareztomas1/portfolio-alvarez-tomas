import { BsSunFill } from 'react-icons/bs';
import { IoMdMoon } from 'react-icons/io';

import { Icon } from '@components/common/Icon';

import type { Theme } from '@/types/theme.types';

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  return (
    <nav className="bg-background flex w-full items-center justify-between px-6 py-4 text-center shadow-sm">
      <div className="w-1/3" />

      <section className="flex w-1/3 justify-end gap-3">
        <Icon
          onClick={toggleTheme}
          title={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          icon={
            theme === 'light' ? <IoMdMoon size={24} /> : <BsSunFill size={24} />
          }
        />
      </section>
    </nav>
  );
};
