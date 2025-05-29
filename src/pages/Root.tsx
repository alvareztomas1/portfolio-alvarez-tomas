import { Outlet } from 'react-router-dom';

import { Navbar } from '@components/common/NavBar';

import { useTheme } from '@/hooks/useTheme';

export default function Root() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>
    </>
  );
}
